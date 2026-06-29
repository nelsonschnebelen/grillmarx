// ─────────────────────────────────────────────────────────────────────────────
// LOCATIONS — Grillmarx operates four houses. Edit these objects to update a
// location everywhere on the site (nav, map, footer, detail pages, menus).
// Replace `image` URLs with the client's own photography when available.
// ─────────────────────────────────────────────────────────────────────────────

export type Hours = { days: string; time: string }[];

export interface Location {
  slug: string;
  name: string;
  city: string;
  state: string;
  established: string;
  tagline: string;
  blurb: string;
  address: string;
  neighborhood: string;
  phone: string;
  hours: Hours;
  image: string;
  accent: string; // hex used for per-location accent moments
  signature: string; // signature cut at this house
  reservationsUrl: string;
  mapUrl: string;
}

export const locations: Location[] = [
  {
    slug: "austin",
    name: "Grillmarx Austin",
    city: "Austin",
    state: "TX",
    established: "2014",
    tagline: "The flagship. Where the fire was lit.",
    blurb:
      "Our original house on Rainey Street — live oak coals, a 28-day dry-age room you can see from the bar, and the loudest, warmest room we run.",
    address: "88 Rainey Street, Austin, TX 78701",
    neighborhood: "Rainey Street District",
    phone: "(512) 555-0142",
    hours: [
      { days: "Mon – Thu", time: "5:00 PM – 10:00 PM" },
      { days: "Fri – Sat", time: "5:00 PM – 12:00 AM" },
      { days: "Sunday", time: "4:00 PM – 9:00 PM" },
    ],
    image: "/images/austin.svg",
    accent: "#e1551f",
    signature: "The 45-Day Rainey Ribeye",
    reservationsUrl: "#reserve",
    mapUrl: "https://maps.google.com/?q=Rainey+Street+Austin+TX",
  },
  {
    slug: "chicago",
    name: "Grillmarx Chicago",
    city: "Chicago",
    state: "IL",
    established: "2017",
    tagline: "Steel city steak. Built for the cold.",
    blurb:
      "A River North landmark in a former foundry — exposed brick, a brass-railed raw bar, and the deepest cellar in the company.",
    address: "412 N Wells Street, Chicago, IL 60654",
    neighborhood: "River North",
    phone: "(312) 555-0188",
    hours: [
      { days: "Mon – Thu", time: "5:00 PM – 10:00 PM" },
      { days: "Fri – Sat", time: "5:00 PM – 11:30 PM" },
      { days: "Sunday", time: "4:00 PM – 9:00 PM" },
    ],
    image: "/images/chicago.svg",
    accent: "#c9a14a",
    signature: "The Foundry Tomahawk, 42 oz",
    reservationsUrl: "#reserve",
    mapUrl: "https://maps.google.com/?q=River+North+Chicago+IL",
  },
  {
    slug: "miami",
    name: "Grillmarx Miami",
    city: "Miami",
    state: "FL",
    established: "2021",
    tagline: "Coastal heat. Open to the night.",
    blurb:
      "Our Design District room opens to a palm-lit terrace — Gulf seafood on ice, citrus over coals, and a rum list as long as the bar.",
    address: "140 NE 39th Street, Miami, FL 33137",
    neighborhood: "Design District",
    phone: "(305) 555-0167",
    hours: [
      { days: "Mon – Thu", time: "5:30 PM – 11:00 PM" },
      { days: "Fri – Sat", time: "5:30 PM – 1:00 AM" },
      { days: "Sunday", time: "5:00 PM – 10:00 PM" },
    ],
    image: "/images/miami.svg",
    accent: "#f2752f",
    signature: "Coal-Roasted Wagyu & Stone Crab",
    reservationsUrl: "#reserve",
    mapUrl: "https://maps.google.com/?q=Design+District+Miami+FL",
  },
  {
    slug: "denver",
    name: "Grillmarx Denver",
    city: "Denver",
    state: "CO",
    established: "2024",
    tagline: "Mile-high marbling. The newest fire.",
    blurb:
      "Our youngest house in RiNo — a wood-fired hearth at the center of the room, Colorado ranch beef, and a mezzanine that overlooks it all.",
    address: "2701 Larimer Street, Denver, CO 80205",
    neighborhood: "RiNo Art District",
    phone: "(720) 555-0119",
    hours: [
      { days: "Mon – Thu", time: "5:00 PM – 10:00 PM" },
      { days: "Fri – Sat", time: "5:00 PM – 11:00 PM" },
      { days: "Sunday", time: "4:00 PM – 9:00 PM" },
    ],
    image: "/images/denver.svg",
    accent: "#a8442a",
    signature: "Hearth-Fired Bison Strip, 16 oz",
    reservationsUrl: "#reserve",
    mapUrl: "https://maps.google.com/?q=RiNo+Denver+CO",
  },
];

export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);
