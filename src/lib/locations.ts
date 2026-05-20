import { deliveryAreas, site } from "@/lib/content";

export type LocationRegion = "North Goa" | "South Goa";

export type LocationPage = {
  slug: string;
  name: string;
  region: LocationRegion;
  isStudio: boolean;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  creationsHref: string;
  creationsLabel: string;
  nearbySlugs: string[];
  faqs: { question: string; answer: string }[];
};

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const regionByPlace: Record<(typeof deliveryAreas)[number], LocationRegion> = {
  Velim: "South Goa",
  Panaji: "North Goa",
  Taleigao: "North Goa",
  Margao: "South Goa",
  Mapusa: "North Goa",
  Calangute: "North Goa",
  Candolim: "North Goa",
  Baga: "North Goa",
  Vasco: "South Goa",
  Ponda: "South Goa",
  Anjuna: "North Goa",
  Colva: "South Goa",
};

const creationsByPlace: Record<
  (typeof deliveryAreas)[number],
  { href: string; label: string }
> = {
  Velim: { href: "/contact", label: "Studio hours & map" },
  Panaji: { href: "/creations?occasion=birthday", label: "Birthday cake gallery" },
  Taleigao: { href: "/creations?occasion=birthday", label: "Birthday cakes" },
  Margao: { href: "/creations", label: "Browse all creations" },
  Mapusa: { href: "/creations", label: "Browse creations" },
  Calangute: {
    href: "/creations?occasion=wedding",
    label: "Wedding & beach cakes",
  },
  Candolim: { href: "/creations?occasion=wedding", label: "Wedding cakes" },
  Baga: { href: "/creations?occasion=birthday", label: "Party & birthday cakes" },
  Vasco: { href: "/creations", label: "Browse creations" },
  Ponda: { href: "/creations", label: "Browse creations" },
  Anjuna: { href: "/creations?occasion=birthday", label: "Birthday cakes" },
  Colva: { href: "/creations?occasion=wedding", label: "Celebration cakes" },
};

function buildNearby(current: (typeof deliveryAreas)[number]): string[] {
  const region = regionByPlace[current];
  return deliveryAreas
    .filter((p) => p !== current && regionByPlace[p] === region)
    .slice(0, 4)
    .map(slugify);
}

function buildLocation(name: (typeof deliveryAreas)[number]): LocationPage {
  const slug = slugify(name);
  const region = regionByPlace[name];
  const isStudio = name === site.studioCity;
  const { href: creationsHref, label: creationsLabel } = creationsByPlace[name];
  const wa = site.phone;

  const deliveryLine = isStudio
    ? `Our home bakery kitchen is in ${name}. Pickup by appointment Tue–Sun — message on WhatsApp before you visit.`
    : `We bake in ${site.studioCity} and deliver to ${name} and surrounding areas. Delivery fee depends on distance and is shared in your WhatsApp quote.`;

  return {
    slug,
    name,
    region,
    isStudio,
    metaTitle: isStudio
      ? `Cake pickup in ${name}, Goa — ${site.name}`
      : `Custom cakes in ${name}, Goa — delivery & order`,
    metaDescription: isStudio
      ? `Pick up custom cakes from Sweet Bites in ${name}, South Goa. Birthday, wedding & bento cakes by Muskan — order on WhatsApp ${wa}.`
      : `Order custom birthday, wedding & bento cakes in ${name}, Goa. Handcrafted by Muskan, delivered from ${site.studioCity}. WhatsApp ${wa} for a quote.`,
    headline: isStudio
      ? `Custom cakes — pickup in ${name}`
      : `Custom cakes in ${name}, Goa`,
    subheadline: isStudio
      ? "Sweet Bites home bakery · By Muskan"
      : `${region} · Baked in ${site.studioCity}, delivered to you`,
    intro: [
      `${site.name} (${site.tagline}) makes custom cakes for birthdays, weddings, anniversaries, and celebrations in ${name}${isStudio ? "" : ` and nearby ${region}`}. Every design on sweetbites.me is a real cake Muskan has crafted for Goa customers.`,
      deliveryLine,
    ],
    highlights: [
      {
        title: "WhatsApp orders",
        text: `Message ${wa} with your date, guest count, and theme — quotes usually within a few hours on studio days.`,
      },
      {
        title: "Real gallery photos",
        text: "Browse 160+ past creations before you order. No stock images — what you see is what we bake.",
      },
      {
        title: isStudio ? "Studio pickup" : "Fresh delivery",
        text: isStudio
          ? "Collect your cake from our Velim kitchen at the agreed time."
          : `Careful delivery to ${name} so your cake arrives ready for the celebration.`,
      },
    ],
    creationsHref,
    creationsLabel,
    nearbySlugs: buildNearby(name),
    faqs: [
      {
        question: `Do you deliver cakes to ${name}?`,
        answer: isStudio
          ? `${name} is where our kitchen is located. We offer pickup here and deliver across Goa.`
          : `Yes. We deliver custom cakes to ${name} from our ${site.studioCity} kitchen. Share your address on WhatsApp for a delivery quote.`,
      },
      {
        question: `How far in advance should I book a cake in ${name}?`,
        answer: `Most custom designs need ${site.bookAheadDays} lead time. Rush dates may be possible — message us on WhatsApp with your ${name} event date.`,
      },
      {
        question: `What cake types do you make for ${name} customers?`,
        answer:
          "Birthday cakes, wedding and haldi tiers, bento boxes, kids' theme cakes, anniversary designs, and chocolate or eggless sponges on request.",
      },
    ],
  };
}

const locations: LocationPage[] = deliveryAreas.map((name) => buildLocation(name));

export function getAllLocations(): LocationPage[] {
  return locations;
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationByName(name: string): LocationPage | undefined {
  return locations.find(
    (l) => l.name.toLowerCase() === name.toLowerCase(),
  );
}

export function locationPath(slug: string): string {
  return `/locations/${slug}`;
}
