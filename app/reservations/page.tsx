import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ReservationForm from "@/components/ReservationForm";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at any GrillMarX house — Olney, Columbia, College Park, or Falls Church.",
};

export default function ReservationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reserve"
        title={
          <>
            Pull up a chair
            <br />
            <span className="italic text-ember">to the fire</span>
          </>
        }
        lede="Choose your house, your night, and your party. We'll have the coals ready."
      />

      <div className="container-rail grid gap-14 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7" id="reserve">
          <ReservationForm />
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <Reveal>
            <h2 className="eyebrow mb-6">Good to Know</h2>
            <ul className="space-y-6 text-sm leading-relaxed text-bone/70">
              <li>
                <span className="block font-display text-lg text-bone">
                  Walk-ins
                </span>
                The bar and lounge at every house are first-come, first-served —
                a great seat when you're spontaneous.
              </li>
              <li>
                <span className="block font-display text-lg text-bone">
                  Large parties
                </span>
                Groups of 13+ are booked through our events team. Tell us a
                little and we'll design the night.
              </li>
              <li>
                <span className="block font-display text-lg text-bone">
                  Prefer to call?
                </span>
                Every house keeps a host on the line during service.
              </li>
            </ul>

            <div className="mt-8 space-y-2 border-t border-char-700 pt-6">
              {locations.map((l) => (
                <div
                  key={l.slug}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-bone/55">{l.city}</span>
                  <a
                    href={`tel:${l.phone.replace(/[^0-9]/g, "")}`}
                    className="link-underline text-bone/85"
                  >
                    {l.phone}
                  </a>
                </div>
              ))}
            </div>
          </Reveal>
        </aside>
      </div>
    </>
  );
}
