import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { pillars } from "@/data/site";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Grillmarx grew from one live-fire hearth on Rainey Street into four houses across the country.",
};

const timeline = locations
  .slice()
  .sort((a, b) => Number(a.established) - Number(b.established))
  .map((l) => ({
    year: l.established,
    city: l.city,
    text: l.tagline,
  }));

export default function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={
          <>
            One hearth.
            <br />
            <span className="italic text-ember">A decade of fire.</span>
          </>
        }
        lede="Grillmarx is what happens when you refuse to put steak on a gas grill and refuse to treat dinner like a transaction."
      />

      {/* Narrative */}
      <section className="container-rail py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-display text-3xl font-light leading-snug text-bone md:text-4xl">
                It started with a problem: every steakhouse felt the same —
                dim, formal, and a little bored with itself.
              </p>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-bone/70">
                <p>
                  In 2014 we lit a single live-fire hearth on Austin's Rainey
                  Street and built a room around it — loud, warm, and run by
                  people who actually wanted you there. We dry-aged our own
                  beef in a glass room so guests could watch it happen. We
                  carved tableside. We stayed open late.
                </p>
                <p>
                  It worked. So we did it again — in Chicago, then Miami, then
                  Denver — never copy-pasting the room, always keeping the
                  fire. Today four Grillmarx houses share one obsession and
                  zero shortcuts.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/story.svg"
                  alt="Chef tending steaks over a live-fire hearth"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char-950/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-char-700 bg-char-900 py-20 md:py-28">
        <div className="container-rail">
          <Reveal>
            <p className="eyebrow mb-10">What Never Changes</p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-sm bg-char-700 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <div className="h-full bg-char-900 p-8 md:p-10">
                  <span className="font-display text-5xl font-light text-ember">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-light text-bone">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone/60">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-rail py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-12">House by House</p>
        </Reveal>
        <ol className="relative border-l border-char-700 pl-8">
          {timeline.map((t, i) => (
            <Reveal key={t.city} delay={0.06 * i} as="li">
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-ember ring-4 ring-char-950" />
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="font-display text-4xl font-light text-brass">
                    {t.year}
                  </span>
                  <h3 className="font-display text-2xl font-light text-bone">
                    {t.city}
                  </h3>
                </div>
                <p className="mt-2 max-w-md text-bone/65">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-12">
            <Link href="/locations" className="btn-ember">
              Visit the Houses
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
