# Grillmarx — Steakhouse Website

A modern American steakhouse marketing site for **Grillmarx**, with four houses:
**Austin · Chicago · Miami · Denver**.

Built as a fast, photography-led site inspired by the restraint of Sparrow
Italia, with a **traditional sticky navigation bar** and a few deliberately
innovative touches layered underneath.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animation
- **Static export** (`output: "export"`) — deploys as plain HTML to any host
  (Vercel, Netlify, S3/CloudFront, GitHub Pages, etc.)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

To produce the static site:

```bash
npm run build    # outputs to ./out
```

## Project structure

```
app/                     # App Router pages
  page.tsx               # Home
  menus/                 # Full menu + house signatures
  locations/             # Locations index
  locations/[slug]/      # One page per house (statically generated)
  story/                 # Our Story / timeline
  private-events/        # Private dining + buyouts
  reservations/          # Reservation request form
components/               # UI + interactive pieces
data/                    # ← EDIT HERE: locations, menu, brand strings
```

## Where to make changes

Everything a client typically updates lives in **`data/`**:

- **`data/locations.ts`** — the four houses (address, hours, phone, photos,
  accent color, signature cut). The whole site reads from this array, so
  adding/removing a location updates the nav, footer, switcher, menus, and
  generates location pages automatically.
- **`data/menu.ts`** — menu sections, items, prices.
- **`data/site.ts`** — brand name, tagline, nav, social links, pillars.

## Innovative touches (the "push the innovation" brief)

- **Interactive 4-house switcher** on the homepage — hover/focus a city to
  cross-dissolve its room, address, hours, and accent color.
- **Live ember canvas** in the hero (drifting fire particles), paused
  off-screen and disabled under reduced-motion.
- **Custom ember cursor** with a trailing brass ring that grows over
  interactive elements (desktop / fine-pointer only).
- **Scroll-reveal** sections, an infinite marquee band, and a film-grain
  overlay for the dark, photographic feel.

All motion respects `prefers-reduced-motion`, and the custom cursor falls back
to the native cursor on touch devices.

## Before launch (placeholders to replace)

- **Photography** — every image is a branded, self-contained SVG placeholder in
  `public/images/` (charcoal + ember glow, so nothing ever renders broken). Drop
  the client's own photos in `public/images/` and swap the `src` values in the
  pages and the `image` field in `data/locations.ts`.
- **Reservations** — `components/ReservationForm.tsx` shows a confirmation
  state but does not submit anywhere. Wire `handleSubmit` to the client's
  booking provider (SevenRooms / Resy / OpenTable).
- **Copy, prices, hours, phone numbers, addresses** — all placeholder; update
  in `data/`.
- **Domain / metadata** — set the real domain in `app/layout.tsx`
  (`metadataBase`).
