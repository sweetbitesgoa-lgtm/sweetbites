import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_URL } from "@/lib/seo";

export type CakesMenuItem = {
  id: string;
  name: string;
  /** Optional link to a similar custom creation in the gallery */
  creationHref?: string;
  image?: string;
};

export type CakesMenuCategory = {
  id: string;
  title: string;
  description: string;
  items: CakesMenuItem[];
};

/** Ready-made flavours from Sweet Bites menu board */
export const cakesMenuCategories: CakesMenuCategory[] = [
  {
    id: "regular",
    title: "Regular cake",
    description: "Everyday favourites — perfect for home parties and office treats.",
    items: [
      { id: "chocolate-chip", name: "Chocolate Chip" },
      { id: "black-forest", name: "Black Forest" },
      { id: "hazelnut", name: "Hazelnut Cake" },
      { id: "vanilla", name: "Vanilla Cake" },
      { id: "butterscotch", name: "Butterscotch Cake" },
      { id: "mud", name: "Mud Cake" },
      { id: "carrot", name: "Carrot Cake" },
      { id: "red-velvet", name: "Red Velvet Cake" },
      { id: "oreo", name: "Oreo Cake" },
    ],
  },
  {
    id: "fruit",
    title: "Fruit cake",
    description: "Fresh fruit flavours — ask what is in season on WhatsApp.",
    items: [
      { id: "strawberry", name: "Strawberry Cake" },
      { id: "mango", name: "Mango Cake" },
      { id: "blueberry", name: "Blueberry Cake" },
    ],
  },
  {
    id: "premium",
    title: "Premium cake",
    description: "Indulgent picks — chocolate, mithai-inspired, and celebration showstoppers.",
    items: [
      { id: "ferrero", name: "Ferrero Rocher" },
      { id: "kitkat", name: "Kitkat Cake" },
      { id: "chocolate-dry-fruit", name: "Chocolate Dry Fruit Cake" },
      { id: "marble", name: "Marble Cake" },
      { id: "nutty-bubble", name: "Nutty Bubble Cake" },
      {
        id: "rasmalai",
        name: "Rasmalai Cake",
        creationHref: "/creations/rasmalai-special-cake",
        image: "/images/rasmalai-special-cake/491518421_18058059962170730_4211335525194578377_n..webp",
      },
      { id: "rasgulla", name: "Rasgulla Cake" },
      {
        id: "rainbow",
        name: "Rainbow Cake",
        creationHref: "/creations/double-layered-rainbow-cake",
        image: "/images/double-layered-rainbow-cake/670355391_18093775997170730_3698923811068689438_n..webp",
      },
      { id: "ice-cream", name: "Ice Cream Cake" },
      {
        id: "rabdi",
        name: "Rabdi Cake",
        creationHref: "/creations/rabdi-cake",
        image: "/images/rabdi-cake/485243816_18055159202170730_6738476388559045272_n..webp",
      },
    ],
  },
  {
    id: "special",
    title: "Special cake",
    description: "Small-format stars — ideal for couples, surprises, and add-on orders.",
    items: [
      {
        id: "bento",
        name: "Bento Cake",
        creationHref: "/creations/bento-cake",
        image: "/images/bento-cake/491142105_18057367328170730_7039415400764743136_n..webp",
      },
      {
        id: "dream",
        name: "Dream Cake",
        creationHref: "/creations/rabdi-dream-cake",
        image: "/images/rabdi-dream-cake/572588749_18077245394170730_506045570391172710_n..webp",
      },
    ],
  },
];

/** Curated strip for “From our kitchen” — unique images only */
export const cakesMenuKitchenGallery: { id: string; name: string; image: string }[] = [
  {
    id: "rasmalai",
    name: "Rasmalai Cake",
    image: "/images/rasmalai-special-cake/491518421_18058059962170730_4211335525194578377_n..webp",
  },
  {
    id: "rainbow",
    name: "Rainbow Cake",
    image: "/images/double-layered-rainbow-cake/670355391_18093775997170730_3698923811068689438_n..webp",
  },
  {
    id: "rabdi",
    name: "Rabdi Cake",
    image: "/images/rabdi-cake/485243816_18055159202170730_6738476388559045272_n..webp",
  },
  {
    id: "bento",
    name: "Bento Cake",
    image: "/images/bento-cake/491142105_18057367328170730_7039415400764743136_n..webp",
  },
  {
    id: "dream",
    name: "Dream Cake",
    image: "/images/rabdi-dream-cake/572588749_18077245394170730_506045570391172710_n..webp",
  },
  {
    id: "ferrero",
    name: "Ferrero Rocher",
    image: "/images/ferraro-cake/626515934_18128422882523044_7028226573939462341_n..webp",
  },
];

export const CAKES_MENU_IMAGE = "/images/cake-menu.avif";

export const CAKES_MENU_DESCRIPTION = `Order ready-made cakes from ${site.name} in ${site.studioCity}, Goa — Regular, Fruit, Premium & Special flavours including Black Forest, Red Velvet, Rasmalai, Rainbow, Bento & Dream cakes. Message Muskan on WhatsApp ${site.phone} for today's availability, size & delivery.`;

export const CAKES_MENU_KEYWORDS = [
  "ready-made cakes Goa",
  "cake menu Sweet Bites",
  "birthday cake flavours Goa",
  "bento cake order Goa",
  "rasmalai cake Goa",
  "black forest cake Goa",
  "premium cake Velim",
  "readymade cake WhatsApp",
  "Sweet Bites cake price",
] as const;

export function getReadyMadeCakeWhatsAppUrl(
  cakeName: string,
  categoryTitle: string,
): string {
  const message = `Hi Sweet Bites! I'd like to order a ready-made cake from your menu (${site.domain}/cakes-menu).\n\n• Flavour: ${cakeName}\n• Menu section: ${categoryTitle}\n• Preferred date:\n• Pickup or delivery (area in Goa):\n• Size / servings (if you know):\n\nPlease share today's availability and price. Thank you!`;
  return getWhatsAppUrl(message);
}

export function getCakesMenuJsonLd(): Record<string, unknown> {
  const base = SITE_URL.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${site.name} — Ready-made cakes menu`,
    description: CAKES_MENU_DESCRIPTION,
    url: `${base}/cakes-menu`,
    hasMenuSection: cakesMenuCategories.map((cat) => ({
      "@type": "MenuSection",
      name: cat.title,
      description: cat.description,
      hasMenuItem: cat.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: `${item.name} — ${cat.title} at ${site.name}, Goa`,
      })),
    })),
  };
}
