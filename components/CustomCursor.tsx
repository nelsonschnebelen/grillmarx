"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A custom ember cursor: a small solid dot and a trailing brass ring that
 * expands over interactive elements. Disabled for touch / coarse pointers and
 * for users who prefer reduced motion — in those cases the native cursor is
 * restored (see the body keeping `.cursor-hidden`, which we remove here).
 */
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) {
      document.body.classList.remove("cursor-hidden");
      return;
    }
    setEnabled(true);

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let dx = rx;
    let dy = ry;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      }
      const t = e.target as HTMLElement;
      const interactive = t.closest(
        "a, button, [role='button'], input, textarea, select, label, .cursor-grow"
      );
      ring.current?.classList.toggle("cursor-active", !!interactive);
    };

    // Ring trails the dot with easing for a liquid feel.
    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[70] -ml-1 -mt-1 h-2 w-2 rounded-full bg-ember mix-blend-screen"
      />
      <div
        ref={ring}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[70] -ml-4 -mt-4 h-8 w-8 rounded-full border border-brass/70 transition-[width,height,margin,opacity] duration-300"
      />
      <style>{`
        .cursor-ring.cursor-active {
          width: 3.5rem; height: 3.5rem;
          margin-left: -1.75rem; margin-top: -1.75rem;
          border-color: rgba(225,85,31,0.8);
          background: rgba(225,85,31,0.06);
        }
      `}</style>
    </>
  );
}
