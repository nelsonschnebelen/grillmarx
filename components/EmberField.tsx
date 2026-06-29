"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas of drifting embers rising from the bottom of the hero — the visual
 * signature of the brand (live fire). Lightweight: a few dozen particles,
 * paused when off-screen and disabled under reduced-motion.
 */
export default function EmberField({
  className = "",
  density = 60,
}: {
  className?: string;
  density?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Ember = {
      x: number;
      y: number;
      r: number;
      vy: number;
      vx: number;
      life: number;
      max: number;
      hue: number;
    };
    let embers: Ember[] = [];

    const reset = (e: Ember, initial = false): Ember => {
      e.x = Math.random() * w;
      e.y = initial ? Math.random() * h : h + 10;
      e.r = Math.random() * 1.8 + 0.4;
      e.vy = -(Math.random() * 0.5 + 0.25);
      e.vx = (Math.random() - 0.5) * 0.35;
      e.max = Math.random() * 240 + 120;
      e.life = initial ? Math.random() * e.max : 0;
      e.hue = 18 + Math.random() * 22; // ember orange range
      return e;
    };

    const build = () => {
      embers = Array.from({ length: density }, () =>
        reset(
          { x: 0, y: 0, r: 0, vy: 0, vx: 0, life: 0, max: 0, hue: 0 },
          true
        )
      );
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const e of embers) {
        e.life += 1;
        e.y += e.vy;
        e.x += e.vx + Math.sin(e.life * 0.03) * 0.2;
        if (e.life > e.max || e.y < -10) reset(e);

        const t = e.life / e.max;
        const alpha = Math.sin(t * Math.PI) * 0.9;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${e.hue}, 95%, ${58 + e.r * 6}%, ${alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${e.hue}, 95%, 55%, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    build();
    draw();

    const onResize = () => {
      resize();
      build();
    };
    window.addEventListener("resize", onResize);

    // Pause when scrolled out of view to save cycles.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf) draw();
        if (!visible) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      window.removeEventListener("resize", onResize);
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none ${className}`}
    />
  );
}
