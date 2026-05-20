import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";

export const homeLocationBlocks = [
  {
    id: "margao",
    area: "Margao",
    title: "Custom cakes in Margao",
    description:
      "Birthday tiers, bento boxes, and wedding cakes delivered from our Velim kitchen to Margao, Vasco, and South Goa.",
    href: locationPath("margao"),
    linkLabel: "Cakes in Margao",
  },
  {
    id: "calangute",
    area: "Calangute",
    title: "Beach cakes — Calangute, Candolim & Baga",
    description:
      "Floral tiers, welcome cakes, and themed birthdays for resort celebrations along the North Goa coast.",
    href: locationPath("calangute"),
    linkLabel: "Cakes in Calangute",
  },
  {
    id: "panaji",
    area: "Panaji",
    title: "Cakes in Panaji & Mapusa",
    description:
      "Hand-delivered to Panaji, Taleigao, Mapusa, and nearby areas — or pickup from our Velim studio by appointment.",
    href: locationPath("panaji"),
    linkLabel: "Cakes in Panaji",
  },
  {
    id: "velim",
    area: site.studioCity,
    title: `Pickup in ${site.studioCity}`,
    description:
      "Studio visits by appointment Tue–Sun. Message on WhatsApp before you visit so Muskan can welcome you without disrupting active orders.",
    href: locationPath("velim"),
    linkLabel: `Cakes in ${site.studioCity}`,
  },
] as const;
