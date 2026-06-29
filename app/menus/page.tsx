import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { menu } from "@/data/menu";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Menus",
  description:
    "Dry-aged cuts, raw bar, live-fire starters, and house signatures — the GrillMarX menu, shared across all four houses.",
};

const noteLabel: Record<string, string> = {
  raw: "Raw",
  gf: "GF",
  "chef's pick": "Chef's Pick",
};

export default function MenusPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We're Serving"
        title={
          <>
            The menu, <span className="italic text-ember">house-wide</span>
          </>
        }
        lede="One core menu runs across every GrillMarX. Each house then adds its own signature cut — the dish you can only get in that city."
      />

      {/* Sticky section nav */}
      <nav className="sticky top-[72px] z-30 border-b border-char-700 bg-char-950/90 backdrop-blur-md">
        <div className="container-rail flex gap-7 overflow-x-auto py-4">
          {menu.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap text-xs uppercase tracking-mega text-bone/55 transition-colors hover:text-ember-300"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-rail py-20 md:py-28">
        {menu.map((section, si) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-36 border-b border-char-700 py-14 first:pt-0 last:border-b-0"
          >
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <Reveal>
                  <p className="eyebrow mb-4">{section.kicker}</p>
                  <h2 className="display-line text-4xl text-bone md:text-5xl">
                    {section.title}
                  </h2>
                  <span className="mt-5 inline-block font-display text-6xl font-light text-char-700">
                    0{si + 1}
                  </span>
                </Reveal>
              </div>

              <div className="md:col-span-8">
                <ul className="divide-y divide-char-700">
                  {section.items.map((item, i) => (
                    <Reveal key={item.name} delay={0.04 * i} as="li">
                      <div className="group flex items-baseline justify-between gap-6 py-5">
                        <div>
                          <h3 className="flex items-center gap-3 font-display text-xl font-light text-bone transition-colors group-hover:text-ember-300">
                            {item.name}
                            {item.note && (
                              <span className="rounded-full border border-brass/40 px-2 py-0.5 text-[0.6rem] uppercase tracking-mega text-brass">
                                {noteLabel[item.note] ?? item.note}
                              </span>
                            )}
                          </h3>
                          <p className="mt-1 max-w-md text-sm text-bone/55">
                            {item.description}
                          </p>
                        </div>
                        <span className="shrink-0 font-display text-lg text-brass">
                          {item.price === "MP" ? "MP" : `$${item.price}`}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* House signatures */}
        <section className="scroll-mt-36 py-16">
          <Reveal>
            <p className="eyebrow mb-4">Only Here</p>
            <h2 className="display-line text-4xl text-bone md:text-5xl">
              House signatures
            </h2>
            <p className="mt-4 max-w-xl text-bone/60">
              Each kitchen keeps one cut to itself. Make the rounds across all
              four houses.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-char-700 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={0.06 * i}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group flex h-full flex-col justify-between bg-char-900 p-7 transition-colors duration-500 hover:bg-char-800"
                >
                  <div>
                    <p
                      className="text-xs uppercase tracking-mega"
                      style={{ color: loc.accent }}
                    >
                      {loc.city}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-light leading-snug text-bone">
                      {loc.signature}
                    </h3>
                  </div>
                  <span className="mt-8 text-xs uppercase tracking-mega text-bone/40 transition-colors group-hover:text-ember-300">
                    See {loc.city} →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <p className="mt-8 text-center text-xs text-bone/40">
          Menus and pricing vary by location and season. Please inform your
          server of any allergies.
        </p>
      </div>
    </>
  );
}
