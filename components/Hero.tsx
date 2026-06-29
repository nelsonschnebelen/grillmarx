"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import EmberField from "./EmberField";

/**
 * Full-bleed hero. A dark, fire-lit photographic backdrop, drifting embers,
 * and a staggered display headline. Kept restrained à la Sparrow — one bold
 * statement, two clear actions.
 */
export default function Hero() {
  const reduced = useReducedMotion();

  const lines = ["Hand-cut.", "Live fire.", "Four houses."];

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.svg"
          alt="A dry-aged steak finishing over open coals"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/60 to-char-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-char-950/70 to-transparent" />
      </div>

      <EmberField className="absolute inset-0 h-full w-full" density={70} />

      {/* Content */}
      <div className="container-rail relative z-10 pb-20 pt-32 md:pb-28">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow mb-6"
        >
          Olney · Columbia · College Park · Falls Church
        </motion.p>

        <h1 className="display-line text-[clamp(3.2rem,11vw,9rem)] text-bone">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15 * i + 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {i === 1 ? (
                  <span className="italic text-ember">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
        >
          <Link href="/reservations" className="btn-ember">
            Reserve a Table
          </Link>
          <Link href="/menus" className="btn-ghost">
            See the Menu
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-bone/60 sm:ml-4">
            A family-owned steakhouse &amp; raw bar, serving the neighborhood
            since 2010.
          </p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-mega text-bone/45">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-ember to-transparent" />
      </motion.div>
    </section>
  );
}
