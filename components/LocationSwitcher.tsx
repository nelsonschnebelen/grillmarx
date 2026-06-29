"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { locations } from "@/data/locations";

/**
 * The interactive heart of the homepage: all four houses in one frame.
 * Hovering or focusing a city name swaps the image, address, hours, and
 * accent color with a cross-dissolve. Keyboard accessible (the city list is
 * a set of buttons). On mobile it stacks into a tappable accordion-like list.
 */
export default function LocationSwitcher() {
  const [active, setActive] = useState(0);
  const loc = locations[active];

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      {/* City selector */}
      <div className="flex flex-col justify-center">
        <p className="eyebrow mb-8">Four Houses · One Fire</p>
        <ul className="space-y-1">
          {locations.map((l, i) => {
            const on = i === active;
            return (
              <li key={l.slug}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="cursor-grow group flex w-full items-baseline gap-4 py-2 text-left"
                  aria-pressed={on}
                >
                  <span
                    className="font-display text-5xl font-light leading-none transition-all duration-500 md:text-7xl"
                    style={{
                      color: on ? loc.accent : "rgba(243,237,226,0.32)",
                      letterSpacing: on ? "0" : "-0.01em",
                    }}
                  >
                    {l.city}
                  </span>
                  <span
                    className="font-sans text-xs uppercase tracking-mega transition-opacity duration-500"
                    style={{ opacity: on ? 0.8 : 0.3 }}
                  >
                    {l.state} · est. {l.established}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 max-w-md">
          <AnimatePresence mode="wait">
            <motion.p
              key={loc.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-[0.95rem] leading-relaxed text-bone/70"
            >
              {loc.blurb}
            </motion.p>
          </AnimatePresence>
          <Link
            href={`/locations/${loc.slug}`}
            className="link-underline mt-6 inline-block text-xs uppercase tracking-mega text-ember-300"
          >
            Visit {loc.city} →
          </Link>
        </div>
      </div>

      {/* Image + detail panel */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-char-800 lg:aspect-auto">
        <AnimatePresence>
          <motion.div
            key={loc.slug}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={loc.image}
              alt={`${loc.name} dining room`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Floating detail card */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
            >
              <p
                className="font-display text-sm uppercase tracking-mega"
                style={{ color: loc.accent }}
              >
                {loc.neighborhood}
              </p>
              <p className="mt-2 max-w-sm font-display text-2xl font-light leading-snug text-bone">
                {loc.tagline}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-bone/65">
                <span>{loc.address}</span>
                <span className="text-bone/35">·</span>
                <a
                  href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                  className="link-underline"
                >
                  {loc.phone}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
