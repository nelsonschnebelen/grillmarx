import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import LocationSwitcher from "@/components/LocationSwitcher";
import { pillars, site } from "@/data/site";
import { menu } from "@/data/menu";

const signatureCuts = menu.find((s) => s.id === "steaks")!.items.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee
        items={[
          "28-Day Dry-Aged",
          "Hardwood Coals",
          "Raw Bar",
          "Cellar Selections",
          "Carved Tableside",
          "Open Late",
        ]}
      />

      {/* ───────────────── Philosophy ───────────────── */}
      <section className="container-rail py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">The Standard</p>
              <h2 className="display-line text-4xl text-bone md:text-6xl">
                We don't cook steak.
                <br />
                <span className="italic text-ember">We tend fire.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-bone/75">
                Grillmarx began with a single live-fire hearth on Rainey Street
                and a stubborn idea: that a steakhouse should feel like a
                living room with a 1,000-degree heart. A decade later we keep
                four houses across the country — each one different, each one
                built on the same three things.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-sm bg-char-700 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i}>
              <div className="group h-full bg-char-900 p-8 transition-colors duration-500 hover:bg-char-800 md:p-10">
                <span className="font-display text-5xl font-light text-char-600 transition-colors duration-500 group-hover:text-ember">
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
      </section>

      {/* ───────────────── Locations ───────────────── */}
      <section className="border-y border-char-700 bg-char-900 py-24 md:py-36">
        <div className="container-rail">
          <LocationSwitcher />
        </div>
      </section>

      {/* ───────────────── Signature cuts ───────────────── */}
      <section className="container-rail py-24 md:py-36">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow mb-5">From the Fire</p>
            <h2 className="display-line max-w-xl text-4xl text-bone md:text-6xl">
              The cuts we're known for
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/menus" className="btn-ghost">
              Full Menu
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 divide-y divide-char-700 border-y border-char-700">
          {signatureCuts.map((cut, i) => (
            <Reveal key={cut.name} delay={0.05 * i}>
              <div className="group flex cursor-grow items-baseline justify-between gap-6 py-7 transition-colors duration-300 hover:bg-char-900/60 md:py-9">
                <div className="flex flex-1 items-baseline gap-5">
                  <span className="font-display text-sm text-char-600">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-light text-bone transition-colors group-hover:text-ember-300 md:text-3xl">
                      {cut.name}
                    </h3>
                    <p className="mt-1 max-w-md text-sm text-bone/55">
                      {cut.description}
                    </p>
                  </div>
                </div>
                <span className="font-display text-xl text-brass">
                  {cut.price === "MP" ? "MP" : `$${cut.price}`}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── Reservation CTA ───────────────── */}
      <section className="relative overflow-hidden border-t border-char-700">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cta.svg"
            alt="A warm, full dining room at dusk"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-char-950/80" />
        </div>
        <div className="container-rail relative z-10 flex flex-col items-center py-28 text-center md:py-40">
          <Reveal>
            <p className="eyebrow mb-6">The Table Is Set</p>
            <h2 className="display-line mx-auto max-w-3xl text-5xl text-bone md:text-7xl">
              Pull up a chair to the fire
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-bone/65">
              Whichever house is yours, the welcome is the same. Reserve in
              seconds — we'll take it from there.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/reservations" className="btn-ember">
                Reserve a Table
              </Link>
              <a href={`tel:${site.phone.replace(/[^0-9]/g, "")}`} className="btn-ghost">
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
