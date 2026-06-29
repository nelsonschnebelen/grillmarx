// ─────────────────────────────────────────────────────────────────────────────
// LOCATIONS — GrillMarX operates four houses across Maryland and Virginia.
// City/state/address/phone match the live business (grillmarx.com).
// Hours are confirmed for Olney; verify per location before launch. Taglines,
// blurbs, signatures, accent colors, and images are editorial placeholders —
// swap them (and the photography in /public/images) for the client's content.
// ─────────────────────────────────────────────────────────────────────────────

export type Hours = { days: string; time: string }[];

export interface Location {
  slug: string;
  name: string;
  city: string;
  state: string;
  established: string; // "" when the opening year isn't published
  tagline: string;
  blurb: string;
  address: string;
  neighborhood: string;
  phone: string;
  hours: Hours;
  image: string;
  accent: string; // hex used for per-location accent moments
  signature: string; // signature dish highlighted at this house
  reservationsUrl: string;
  mapUrl: string;
}

// Default service hours (as published for the Olney flagship). Reused across
// houses until each location's exact hours are confirmed.
const defaultHours: Hours = [
  { days: "Monday", time: "11:30 AM – 9:00 PM" },
  { days: "Tue – Thu", time: "11:30 AM – 10:00 PM" },
  { days: "Friday", time: "11:30 AM – 11:00 PM" },
  { days: "Saturday", time: "11:00 AM – 11:00 PM" },
  { days: "Sunday", time: "10:30 AM – 9:00 PM" },
];

export const locations: Location[] = [
  {
    slug: "olney",
    name: "GrillMarX Olney",
    city: "Olney",
    state: "MD",
    established: "2010",
    tagline: "The original. Where GrillMarX began.",
    blurb:
      "Our flagship in Olney Town Center, open since 2010 — hand-cut steaks, a full raw bar, and the neighborhood room that started it all.",
    address: "18149 Town Center Dr, Olney, MD 20832",
    neighborhood: "Olney Town Center",
    phone: "(301) 570-1111",
    hours: defaultHours,
    image: "/images/olney.svg",
    accent: "#e1551f",
    signature: "The 24 oz Bone-In Ribeye",
    reservationsUrl: "#reserve",
    mapUrl:
      "https://maps.google.com/?q=GrillMarX+18149+Town+Center+Dr+Olney+MD+20832",
  },
  {
    slug: "columbia",
    name: "GrillMarX Columbia",
    city: "Columbia",
    state: "MD",
    established: "2020",
    tagline: "Where Little Patuxent meets the raw bar.",
    blurb:
      "A bright, upscale-casual dining room off Little Patuxent Parkway — hand-cut steaks, fresh seafood, and a raw bar built for sharing.",
    address: "10175 Little Patuxent Parkway, Columbia, MD 21044",
    neighborhood: "Little Patuxent Parkway",
    phone: "(410) 567-2040",
    hours: defaultHours,
    image: "/images/columbia.svg",
    accent: "#c9a14a",
    signature: "Surf & Turf — Filet & Cold-Water Lobster",
    reservationsUrl: "#reserve",
    mapUrl:
      "https://maps.google.com/?q=GrillMarX+10175+Little+Patuxent+Parkway+Columbia+MD+21044",
  },
  {
    slug: "college-park",
    name: "GrillMarX College Park",
    city: "College Park",
    state: "MD",
    established: "",
    tagline: "Steak & seafood on Route 1.",
    blurb:
      "On Baltimore Avenue near the university — a relaxed steakhouse & raw bar with hand-cut chops, fresh seafood, and a lively bar.",
    address: "7777 Baltimore Ave, College Park, MD 20740",
    neighborhood: "Baltimore Avenue · Route 1",
    phone: "(301) 444-5631",
    hours: defaultHours,
    image: "/images/collegepark.svg",
    accent: "#f2752f",
    signature: "Dry-Aged New York Strip",
    reservationsUrl: "#reserve",
    mapUrl:
      "https://maps.google.com/?q=GrillMarX+7777+Baltimore+Ave+College+Park+MD+20740",
  },
  {
    slug: "falls-church",
    name: "GrillMarX Falls Church",
    city: "Falls Church",
    state: "VA",
    established: "",
    tagline: "An upscale-casual table in the heart of town.",
    blurb:
      "Our Virginia house in downtown Falls Church — gourmet steaks and fresh seafood with the same family-owned welcome.",
    address: "510 S Washington Street, Falls Church, VA 22046",
    neighborhood: "Downtown Falls Church",
    phone: "(240) 255-9121",
    hours: defaultHours,
    image: "/images/fallschurch.svg",
    accent: "#a8442a",
    signature: "Chilled Seafood Tower",
    reservationsUrl: "#reserve",
    mapUrl:
      "https://maps.google.com/?q=GrillMarX+510+S+Washington+Street+Falls+Church+VA+22046",
  },
];

export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);
