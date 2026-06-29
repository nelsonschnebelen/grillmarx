import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { locations, getLocation } from "@/data/locations";
import { menu } from "@/data/menu";

// Static export needs every dynamic path enumerated at build time.
export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const loc = getLocation(params.slug);
  if (!loc) return { title: "Location" };
  return {
    title: `${loc.city}`,
    description: `${loc.name} — ${loc.tagline} ${loc.address}.`,
  };
}

const steaks = menu.find((s) => s.id === "steaks")!.items.slice(0, 3);

export default function LocationDetail({
  params,
}: {
  params: { slug: string };
}) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  const others = locations.filter((l) => l.slug !== loc.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[78svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={loc.image}
            alt={`${loc.name} dining room`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/50 to-char-950/30" />
        </div>
        <div className="container-rail relative z-10 pb-16 pt-36">
          <Reveal>
            <p
              className="text-xs uppercase tracking-mega"
              style={{ color: loc.accent }}
            >
              {loc.neighborhood} · est. {loc.established}
            </p>
            <h1 className="display-line mt-4 text-6xl text-bone md:text-8xl">
              {loc.city}
            </h1>
            <p className="mt-5 max-w-xl font-display text-2xl font-light text-bone/85">
              {loc.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Details */}
      <section className="border-b border-char-700 bg-char-900">
        <div className="container-rail grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-lg leading-relaxed text-bone/75">
                {loc.blurb}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/reservations" className="btn-ember">
                  Reserve at {loc.city}
                </Link>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  Get Directions
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <Reveal delay={0.05}>
              <h2 className="eyebrow mb-5">Hours</h2>
              <ul className="space-y-3">
                {loc.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex justify-between gap-4 border-b border-char-700 pb-3 text-sm"
                  >
                    <span className="text-bone/55">{h.days}</span>
                    <span className="text-bone/90">{h.time}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal delay={0.1}>
              <h2 className="eyebrow mb-5">Find Us</h2>
              <address className="not-italic text-sm leading-relaxed text-bone/75">
                {loc.address}
              </address>
              <a
                href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                className="link-underline mt-4 inline-block text-sm text-ember-300"
              >
                {loc.phone}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Signature + sample cuts */}
      <section className="container-rail py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-5">Only in {loc.city}</p>
              <h2 className="display-line text-4xl text-bone md:text-5xl">
                {loc.signature}
              </h2>
              <p className="mt-5 max-w-sm text-bone/65">
                The cut you can only order at this house. Worth the trip on its
                own — but the rest of the fire is waiting too.
              </p>
              <Link
                href="/menus"
                className="link-underline mt-6 inline-block text-xs uppercase tracking-mega text-ember-300"
              >
                See the full menu →
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="divide-y divide-char-700 border-y border-char-700">
              {steaks.map((cut, i) => (
                <Reveal key={cut.name} delay={0.05 * i} as="li">
                  <div className="flex items-baseline justify-between gap-6 py-5">
                    <div>
                      <h3 className="font-display text-xl font-light text-bone">
                        {cut.name}
                      </h3>
                      <p className="mt-1 max-w-xs text-sm text-bone/55">
                        {cut.description}
                      </p>
                    </div>
                    <span className="font-display text-lg text-brass">
                      {cut.price === "MP" ? "MP" : `$${cut.price}`}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other houses */}
      <section className="border-t border-char-700 bg-char-900 py-20">
        <div className="container-rail">
          <p className="eyebrow mb-8">The Other Houses</p>
          <div className="grid gap-px overflow-hidden rounded-sm bg-char-700 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/locations/${o.slug}`}
                className="group bg-char-900 p-8 transition-colors duration-500 hover:bg-char-800"
              >
                <p
                  className="text-xs uppercase tracking-mega"
                  style={{ color: o.accent }}
                >
                  {o.state} · est. {o.established}
                </p>
                <h3 className="mt-3 font-display text-3xl font-light text-bone transition-colors group-hover:text-ember-300">
                  {o.city}
                </h3>
                <p className="mt-2 text-sm text-bone/55">{o.neighborhood}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
