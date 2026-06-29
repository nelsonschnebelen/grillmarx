import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Private Events",
  description:
    "Private dining, buyouts, and celebrations at GrillMarX — Olney, Columbia, College Park, and Falls Church.",
};

const spaces = [
  {
    name: "The Chef's Table",
    seats: "Up to 12 guests",
    body: "A front-row seat to the fire. A guided tasting built around the night's best cuts, paced by the kitchen.",
  },
  {
    name: "The Private Room",
    seats: "Up to 40 guests",
    body: "A room of your own with its own bar and host — for milestone dinners, rehearsal dinners, and closings worth celebrating.",
  },
  {
    name: "Full Buyout",
    seats: "Up to 180 guests",
    body: "The whole house, the whole staff, the whole fire. We'll shape the menu, the flow, and the soundtrack to your event.",
  },
];

export default function PrivateEventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private Events"
        title={
          <>
            Your night,
            <br />
            <span className="italic text-ember">over our fire</span>
          </>
        }
        lede="From a twelve-seat chef's table to a full buyout, every Grillmarx house hosts private events with a dedicated team."
      />

      {/* Spaces */}
      <section className="container-rail py-20 md:py-28">
        <div className="grid gap-px overflow-hidden rounded-sm bg-char-700 md:grid-cols-3">
          {spaces.map((s, i) => (
            <Reveal key={s.name} delay={0.08 * i}>
              <div className="group flex h-full flex-col bg-char-900 p-8 transition-colors duration-500 hover:bg-char-800 md:p-10">
                <span className="font-display text-5xl font-light text-char-600 transition-colors group-hover:text-ember">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-light text-bone">
                  {s.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-mega text-brass">
                  {s.seats}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-bone/60">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Inquiry split */}
      <section className="relative overflow-hidden border-y border-char-700">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/events.svg"
            alt="A private dining room set for an event"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-char-950/85" />
        </div>
        <div className="container-rail relative z-10 grid gap-10 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <h2 className="display-line text-4xl text-bone md:text-5xl">
              Tell us about your night
            </h2>
            <p className="mt-5 max-w-md text-bone/70">
              Pick the house, give us the date and the headcount, and our
              events team will design the rest — menu, wine, flow, and all.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:events@grillmarx.com"
                className="btn-ember"
              >
                Start an Inquiry
              </a>
              <Link href="/locations" className="btn-ghost">
                Browse the Houses
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-sm border border-char-700 bg-char-900/80 p-7 backdrop-blur">
              <h3 className="eyebrow mb-5">Events Contacts</h3>
              <ul className="space-y-4">
                {locations.map((l) => (
                  <li
                    key={l.slug}
                    className="flex items-center justify-between border-b border-char-700 pb-4 text-sm last:border-b-0 last:pb-0"
                  >
                    <div>
                      <p className="font-display text-lg text-bone">
                        {l.city}
                      </p>
                      <p className="text-xs text-bone/45">{l.neighborhood}</p>
                    </div>
                    <a
                      href={`tel:${l.phone.replace(/[^0-9]/g, "")}`}
                      className="link-underline text-bone/80"
                    >
                      {l.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
