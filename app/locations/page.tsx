import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Four Grillmarx houses — Austin, Chicago, Miami, and Denver. Find hours, addresses, and reservations for each.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Find Your House"
        title={
          <>
            Four cities.
            <br />
            <span className="italic text-ember">Four characters.</span>
          </>
        }
        lede="Same fire, same welcome — but no two Grillmarx houses are alike. Choose yours."
      />

      <div className="container-rail py-20 md:py-28">
        <div className="space-y-px overflow-hidden rounded-sm">
          {locations.map((loc, i) => (
            <Reveal key={loc.slug} delay={0.05 * i}>
              <Link
                href={`/locations/${loc.slug}`}
                className="group relative grid items-stretch gap-0 overflow-hidden bg-char-900 md:grid-cols-2"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[340px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={loc.image}
                    alt={`${loc.name} interior`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-char-950/60 to-transparent" />
                  <span
                    className="absolute left-5 top-5 rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-mega text-char-950"
                    style={{ backgroundColor: loc.accent }}
                  >
                    est. {loc.established}
                  </span>
                </div>

                {/* Copy */}
                <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
                  <div>
                    <p
                      className="text-xs uppercase tracking-mega"
                      style={{ color: loc.accent }}
                    >
                      {loc.neighborhood} · {loc.city}, {loc.state}
                    </p>
                    <h2 className="mt-3 font-display text-4xl font-light text-bone transition-colors group-hover:text-ember-300 md:text-5xl">
                      {loc.city}
                    </h2>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-bone/65">
                    {loc.blurb}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-bone/55">
                    <span>{loc.hours[0].days}: {loc.hours[0].time}</span>
                    <span className="text-bone/30">·</span>
                    <span>{loc.phone}</span>
                  </div>
                  <span className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-mega text-bone/50 transition-all group-hover:gap-3 group-hover:text-ember-300">
                    Explore this house →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
