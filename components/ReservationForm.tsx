"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { locations } from "@/data/locations";

/**
 * A self-contained reservation request form. There's no backend in this
 * starter, so on submit it shows a confirmation state and surfaces the
 * details — wire `handleSubmit` to the client's booking provider
 * (SevenRooms, Resy, OpenTable, etc.) before launch.
 */
export default function ReservationForm({
  defaultLocation,
}: {
  defaultLocation?: string;
}) {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    location: defaultLocation ?? locations[0].slug,
    date: "",
    time: "19:00",
    party: "2",
    name: "",
    email: "",
  });

  const set = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const chosen = locations.find((l) => l.slug === form.location)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to the booking provider here.
    setDone(true);
  };

  const field =
    "w-full bg-transparent border-b border-char-600 py-3 text-bone placeholder-bone/35 focus:border-ember outline-none transition-colors";
  const label = "block text-[0.65rem] uppercase tracking-mega text-bone/45 mb-1";

  return (
    <div className="relative rounded-sm border border-char-700 bg-char-900 p-7 md:p-10">
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-8 text-center"
          >
            <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-ember text-char-950">
              ✓
            </span>
            <h3 className="font-display text-3xl font-light text-bone">
              We've got you, {form.name.split(" ")[0] || "friend"}.
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-sm text-bone/65">
              A request for a party of {form.party} at{" "}
              <span className="text-ember-300">{chosen.name}</span>
              {form.date ? ` on ${form.date}` : ""} at {form.time} has been
              noted. We'll confirm by email shortly.
            </p>
            <button
              onClick={() => setDone(false)}
              className="link-underline mt-6 text-xs uppercase tracking-mega text-bone/55"
            >
              Make another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <span className={label}>House</span>
              <div className="flex flex-wrap gap-2">
                {locations.map((l) => (
                  <button
                    key={l.slug}
                    type="button"
                    onClick={() => set("location", l.slug)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-mega transition-colors ${
                      form.location === l.slug
                        ? "border-ember bg-ember text-char-950"
                        : "border-char-600 text-bone/65 hover:border-brass"
                    }`}
                  >
                    {l.city}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={label} htmlFor="date">
                Date
              </label>
              <input
                id="date"
                type="date"
                required
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
                className={`${field} [color-scheme:dark]`}
              />
            </div>

            <div>
              <label className={label} htmlFor="time">
                Time
              </label>
              <input
                id="time"
                type="time"
                required
                value={form.time}
                onChange={(e) => set("time", e.target.value)}
                className={`${field} [color-scheme:dark]`}
              />
            </div>

            <div>
              <label className={label} htmlFor="party">
                Party Size
              </label>
              <select
                id="party"
                value={form.party}
                onChange={(e) => set("party", e.target.value)}
                className={`${field} [color-scheme:dark]`}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="bg-char-900">
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
                <option value="13+" className="bg-char-900">
                  13+ (private events)
                </option>
              </select>
            </div>

            <div>
              <label className={label} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className={field}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={label} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className={field}
              />
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-ember w-full sm:w-auto">
                Request This Table
              </button>
              <p className="mt-4 text-xs text-bone/40">
                Parties of 13 or more are handled by our events team — see{" "}
                Private Events.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
