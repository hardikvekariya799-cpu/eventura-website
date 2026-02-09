export type City =
  | "Ahmedabad"
  | "Surat"
  | "Vadodara"
  | "Rajkot"
  | "Gandhinagar"
  | "Jamnagar";

export const CITIES: City[] = [
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Gandhinagar",
  "Jamnagar",
];

export type Venue = {
  slug: string;
  name: string;
  city: City;
  tags: string[];
  capacity: { min: number; max: number };
  startingFromINR: number;
  image: string;
  highlights: string[];
  description: string;
};

export const VENUES: Venue[] = [
  {
    slug: "skyline-banquet-ahmedabad",
    name: "Skyline Banquet & Lawn",
    city: "Ahmedabad",
    tags: ["Banquet", "Lawn", "Premium"],
    capacity: { min: 150, max: 900 },
    startingFromINR: 250000,
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=60",
    highlights: ["Indoor + outdoor options", "Valet parking", "Luxury décor-ready"],
    description:
      "A versatile premium venue with banquet + lawn formats, ideal for large weddings and receptions.",
  },
  {
    slug: "riverfront-resort-surat",
    name: "Riverfront Resort",
    city: "Surat",
    tags: ["Resort", "Poolside", "Destination"],
    capacity: { min: 80, max: 450 },
    startingFromINR: 320000,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=60",
    highlights: ["Poolside events", "Stay rooms available", "Photography-friendly"],
    description:
      "Resort-style vibe for wedding functions and intimate destination celebrations within Gujarat.",
  },
  {
    slug: "heritage-courtyard-vadodara",
    name: "Heritage Courtyard",
    city: "Vadodara",
    tags: ["Courtyard", "Heritage", "Luxury"],
    capacity: { min: 120, max: 600 },
    startingFromINR: 280000,
    image:
      "https://images.unsplash.com/photo-1529634897861-1f1d1e9f3a10?auto=format&fit=crop&w=1400&q=60",
    highlights: ["Royal-style setting", "Stage-ready courtyard", "Premium catering partners"],
    description:
      "A heritage-inspired courtyard with a luxury aesthetic—perfect for classic Gujarati wedding themes.",
  },
  {
    slug: "grand-dome-rajkot",
    name: "Grand Dome Hall",
    city: "Rajkot",
    tags: ["Indoor", "AC Hall", "Big Stage"],
    capacity: { min: 200, max: 1200 },
    startingFromINR: 220000,
    image:
      "https://images.unsplash.com/photo-1524777313293-86d2ab467344?auto=format&fit=crop&w=1400&q=60",
    highlights: ["Huge capacity", "AC indoor comfort", "LED + sound options"],
    description:
      "Massive indoor hall for large gatherings and corporate conferences with controlled climate comfort.",
  },
  {
    slug: "capital-convention-gandhinagar",
    name: "Capital Convention & Garden",
    city: "Gandhinagar",
    tags: ["Convention", "Garden", "Corporate"],
    capacity: { min: 100, max: 800 },
    startingFromINR: 260000,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=60",
    highlights: ["Conference-ready", "Garden functions", "Easy access"],
    description:
      "A modern venue suitable for corporate events and wedding receptions with garden options.",
  },
  {
    slug: "coastal-villa-jamnagar",
    name: "Coastal Villa Retreat",
    city: "Jamnagar",
    tags: ["Villa", "Intimate", "Luxury"],
    capacity: { min: 40, max: 200 },
    startingFromINR: 180000,
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210a6?auto=format&fit=crop&w=1400&q=60",
    highlights: ["Intimate luxury", "Stay + functions", "Great for pre-wedding shoots"],
    description:
      "A boutique villa retreat for smaller premium celebrations—ideal for engagement, mehendi and private parties.",
  },
];

export function formatINR(amount: number) {
  const s = Math.round(amount).toString();
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const withCommas = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `₹${rest ? withCommas + "," : ""}${last3}`;
}
