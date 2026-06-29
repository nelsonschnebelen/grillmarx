// ─────────────────────────────────────────────────────────────────────────────
// MENU — shared across all four houses, with per-location signatures layered in.
// Prices are placeholders; swap for the client's live menu before launch.
// ─────────────────────────────────────────────────────────────────────────────

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  note?: string; // e.g. "gf", "raw", "chef's pick"
}

export interface MenuSection {
  id: string;
  title: string;
  kicker: string;
  items: MenuItem[];
}

export const menu: MenuSection[] = [
  {
    id: "raw",
    title: "From the Ice",
    kicker: "Raw bar & cold starters",
    items: [
      {
        name: "Oysters on the Half Shell",
        description: "Daily East & West coast selection, mignonette, lemon",
        price: "MP",
        note: "raw",
      },
      {
        name: "Steak Tartare",
        description: "Hand-cut filet, cured yolk, capers, charred sourdough",
        price: "26",
        note: "chef's pick",
      },
      {
        name: "Tuna Crudo",
        description: "Yellowfin, blood orange, chili oil, toasted sesame",
        price: "24",
        note: "raw",
      },
      {
        name: "Shellfish Tower",
        description: "Oysters, shrimp, king crab, lobster — built to share",
        price: "98",
      },
    ],
  },
  {
    id: "starters",
    title: "Over the Coals",
    kicker: "Hot starters",
    items: [
      {
        name: "Bone Marrow",
        description: "Roasted, herb gremolata, grilled levain, sea salt",
        price: "22",
      },
      {
        name: "Charred Caesar",
        description: "Fire-kissed romaine, white anchovy, aged parmesan",
        price: "18",
      },
      {
        name: "Wagyu Meatballs",
        description: "San Marzano, smoked ricotta, basil, garlic toast",
        price: "21",
      },
      {
        name: "Coal-Roasted Bone-In Octopus",
        description: "Smoked paprika, fingerling, salsa verde",
        price: "27",
      },
    ],
  },
  {
    id: "steaks",
    title: "The Fire",
    kicker: "Cuts, dry-aged in house",
    items: [
      {
        name: "Filet Mignon — 8 oz",
        description: "Center-cut, hardwood-grilled, finished with bordelaise",
        price: "62",
      },
      {
        name: "Bone-In Ribeye — 20 oz",
        description: "28-day dry-aged, marbled, our house standard",
        price: "84",
        note: "chef's pick",
      },
      {
        name: "New York Strip — 16 oz",
        description: "Dry-aged 35 days, charred crust, beef fat candle",
        price: "76",
      },
      {
        name: "The Tomahawk — 42 oz",
        description: "Carved tableside, for two, ember-finished",
        price: "165",
      },
      {
        name: "A5 Japanese Wagyu — 4 oz",
        description: "Miyazaki, seared on binchotan, served simply",
        price: "MP",
      },
    ],
  },
  {
    id: "sides",
    title: "Alongside",
    kicker: "Sides, served family style",
    items: [
      {
        name: "Truffle Creamed Spinach",
        description: "Black truffle, aged gruyère",
        price: "16",
      },
      {
        name: "Duck-Fat Potatoes",
        description: "Triple-cooked, rosemary salt",
        price: "15",
      },
      {
        name: "Charred Broccolini",
        description: "Calabrian chili, lemon, garlic",
        price: "14",
        note: "gf",
      },
      {
        name: "Mac & Aged Cheddar",
        description: "Brown-butter crumb, three-cheese",
        price: "16",
      },
    ],
  },
  {
    id: "dessert",
    title: "After",
    kicker: "Sweets & digestifs",
    items: [
      {
        name: "Burnt Basque Cheesecake",
        description: "Caramelized top, crème fraîche, sea salt",
        price: "15",
      },
      {
        name: "Dark Chocolate Soufflé",
        description: "Warm center, espresso anglaise — allow 15 minutes",
        price: "18",
      },
      {
        name: "Affogato Old Fashioned",
        description: "Bourbon, vanilla gelato, cold brew",
        price: "19",
      },
    ],
  },
];
