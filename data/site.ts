// ─────────────────────────────────────────────────────────────────────────────
// SITE — global brand strings, navigation, and social. Single source of truth.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Grillmarx",
  legalName: "Grillmarx Steakhouse",
  tagline: "Four houses. One fire.",
  description:
    "Grillmarx is a modern American steakhouse with four houses — Austin, Chicago, Miami, and Denver. Dry-aged cuts, hardwood coals, and a room that knows your name.",
  founded: "2014",
  email: "hello@grillmarx.com",
  phone: "(512) 555-0142",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};

export const nav = [
  { label: "Menus", href: "/menus" },
  { label: "Locations", href: "/locations" },
  { label: "Our Story", href: "/story" },
  { label: "Private Events", href: "/private-events" },
];

// The pillars that define the brand — used on the home page and story page.
export const pillars = [
  {
    title: "The Age Room",
    body: "Every house ages its own beef in a glass-walled room — 28 to 45 days, never rushed, never hidden.",
  },
  {
    title: "Live Fire Only",
    body: "No gas, no shortcuts. Hardwood and lump coal, lit before the first guest and tended until the last.",
  },
  {
    title: "A Room That Remembers",
    body: "Four cities, four characters, one standard of hospitality — we'd rather know your name than your reservation.",
  },
];
