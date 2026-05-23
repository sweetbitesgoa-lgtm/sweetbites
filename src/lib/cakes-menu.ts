import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_URL } from "@/lib/seo";

export type CakesMenuItemBadge = "Popular" | "Goa favourite" | "Small serve" | "Mithai-style";

export type CakesMenuItem = {
  id: string;
  name: string;
  /** Optional link to a similar custom creation in the gallery */
  creationHref?: string;
  image?: string;
  badge?: CakesMenuItemBadge;
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
      {
        id: "black-forest",
        name: "Black Forest",
        creationHref: "/creations/chocolate-cake",
        image: "/images/chocolate-cake/624257318_18060232427335365_1090187023691317618_n..webp",
        badge: "Popular",
      },
      { id: "hazelnut", name: "Hazelnut Cake" },
      { id: "vanilla", name: "Vanilla Cake" },
      { id: "butterscotch", name: "Butterscotch Cake" },
      { id: "mud", name: "Mud Cake" },
      { id: "carrot", name: "Carrot Cake" },
      {
        id: "red-velvet",
        name: "Red Velvet Cake",
        creationHref: "/creations/golden-cream-birthday-cake",
        image: "/images/golden-cream-birthday-cake/624880407_18052417967703847_5140043511432543654_n..webp",
        badge: "Popular",
      },
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
      {
        id: "ferrero",
        name: "Ferrero Rocher",
        creationHref: "/creations/ferraro-special-cake",
        image: "/images/ferraro-special-cake/655117931_18106640332846451_6047524932188940240_n..webp",
        badge: "Goa favourite",
      },
      { id: "kitkat", name: "Kitkat Cake" },
      { id: "chocolate-dry-fruit", name: "Chocolate Dry Fruit Cake" },
      { id: "marble", name: "Marble Cake" },
      { id: "nutty-bubble", name: "Nutty Bubble Cake" },
      {
        id: "rasmalai",
        name: "Rasmalai Cake",
        creationHref: "/creations/rasmalai-special-cake",
        image: "/images/rasmalai-special-cake/491518421_18058059962170730_4211335525194578377_n..webp",
        badge: "Mithai-style",
      },
      { id: "rasgulla", name: "Rasgulla Cake" },
      {
        id: "rainbow",
        name: "Rainbow Cake",
        creationHref: "/creations/double-layered-rainbow-cake",
        image: "/images/double-layered-rainbow-cake/670355391_18093775997170730_3698923811068689438_n..webp",
        badge: "Popular",
      },
      { id: "ice-cream", name: "Ice Cream Cake" },
      {
        id: "rabdi",
        name: "Rabdi Cake",
        creationHref: "/creations/rabdi-cake",
        image: "/images/rabdi-cake/485243816_18055159202170730_6738476388559045272_n..webp",
        badge: "Mithai-style",
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
        badge: "Small serve",
      },
      {
        id: "dream",
        name: "Dream Cake",
        creationHref: "/creations/rabdi-dream-cake",
        image: "/images/rabdi-dream-cake/572588749_18077245394170730_506045570391172710_n..webp",
        badge: "Goa favourite",
      },
    ],
  },
];

/** Curated strip for “From our kitchen” — unique images only */
export const cakesMenuKitchenGallery: {
  id: string;
  name: string;
  image: string;
  href: string;
}[] = [
  {
    id: "rasmalai",
    name: "Rasmalai Cake",
    image: "/images/rasmalai-special-cake/491518421_18058059962170730_4211335525194578377_n..webp",
    href: "/creations/rasmalai-special-cake",
  },
  {
    id: "rainbow",
    name: "Rainbow Cake",
    image: "/images/double-layered-rainbow-cake/670355391_18093775997170730_3698923811068689438_n..webp",
    href: "/creations/double-layered-rainbow-cake",
  },
  {
    id: "rabdi",
    name: "Rabdi Cake",
    image: "/images/rabdi-cake/485243816_18055159202170730_6738476388559045272_n..webp",
    href: "/creations/rabdi-cake",
  },
  {
    id: "bento",
    name: "Bento Cake",
    image: "/images/bento-cake/491142105_18057367328170730_7039415400764743136_n..webp",
    href: "/creations/bento-cake",
  },
  {
    id: "dream",
    name: "Dream Cake",
    image: "/images/rabdi-dream-cake/572588749_18077245394170730_506045570391172710_n..webp",
    href: "/creations/rabdi-dream-cake",
  },
  {
    id: "ferrero",
    name: "Ferrero Rocher",
    image: "/images/ferraro-cake/626515934_18128422882523044_7028226573939462341_n..webp",
    href: "/creations/ferraro-special-cake",
  },
];

export const cakesMenuMuskanQuote = {
  quote:
    "The menu board is for flavours you already love — when the oven has room, I can often turn around Black Forest or Rasmalai faster than a full theme cake. Message me your date first; I'll tell you honestly what's possible.",
  attribution: "Muskan · Sweet Bites",
} as const;

/** Muskan's most-requested ready-made picks — links to menu order flow */
export const cakesMenuStaffPicks = [
  {
    id: "rasmalai",
    name: "Rasmalai Cake",
    blurb: "Cardamom, saffron & milk soak — our most-asked mithai-style pick.",
    image:
      "/images/rasmalai-special-cake/491518421_18058059962170730_4211335525194578377_n..webp",
    categoryTitle: "Premium cake",
  },
  {
    id: "black-forest",
    name: "Black Forest",
    blurb: "Classic chocolate & cherry — works for home birthdays and office treats.",
    image: "/images/chocolate-cake/624257318_18060232427335365_1090187023691317618_n..webp",
    categoryTitle: "Regular cake",
  },
  {
    id: "bento",
    name: "Bento Cake",
    blurb: "One tin, one message — perfect surprise while a bigger cake feeds the room.",
    image: "/images/bento-cake/491142105_18057367328170730_7039415400764743136_n..webp",
    categoryTitle: "Special cake",
  },
  {
    id: "ferrero",
    name: "Ferrero Rocher",
    blurb: "Hazelnut & chocolate indulgence — anniversaries and date nights love this.",
    image:
      "/images/ferraro-special-cake/655117931_18106640332846451_6047524932188940240_n..webp",
    categoryTitle: "Premium cake",
  },
] as const;

export const cakesMenuOccasionPicks = [
  {
    emoji: "🎂",
    label: "Birthday at home",
    flavours: ["Rainbow Cake", "Red Velvet", "Black Forest"],
    href: "/birthday-cakes-goa",
  },
  {
    emoji: "💍",
    label: "Anniversary dinner",
    flavours: ["Ferrero Rocher", "Dream Cake", "Bento Cake"],
    href: "/anniversary-cakes-goa",
  },
  {
    emoji: "🪔",
    label: "Festival & family lunch",
    flavours: ["Rasmalai Cake", "Rabdi Cake", "Rasgulla Cake"],
    href: "/haldi-cakes-goa",
  },
  {
    emoji: "🏢",
    label: "Office & farewell",
    flavours: ["Butterscotch Cake", "Mud Cake", "Marble Cake"],
    href: "/creations?occasion=farewell",
  },
] as const;

export const cakesMenuCaseStudySpots = [
  {
    slug: "rasmalai-cake-goa-case-study",
    menuFlavour: "Rasmalai Cake",
    title: "Rasmalai on the menu — custom vs ready-made",
    excerpt:
      "How Muskan balanced milk soak and delivery heat for a 55-guest engagement lunch.",
    image:
      "/images/rasmalai-special-cake/491518421_18058059962170730_4211335525194578377_n..webp",
  },
  {
    slug: "ferrero-cake-goa-case-study",
    menuFlavour: "Ferrero Rocher",
    title: "Ferrero before checkout",
    excerpt: "Chocolate shell, hazelnut crunch, and a four-hour Margao delivery window.",
    image:
      "/images/ferraro-special-cake/655117931_18106640332846451_6047524932188940240_n..webp",
  },
  {
    slug: "bento-cake-goa-case-study",
    menuFlavour: "Bento Cake",
    title: "Surprise tin, tight timeline",
    excerpt: "When a husband messaged late but honestly for a Margao anniversary bento.",
    image:
      "/images/birthday-bento-cake/650632700_17960557692063227_8656779859842787014_n..webp",
  },
  {
    slug: "rabdi-dream-cake-goa-case-study",
    menuFlavour: "Dream Cake",
    title: "Rabdi dream & wedding week",
    excerpt: "Desi luxury, slow soak, and a Ponda family dinner before the white tier.",
    image:
      "/images/rabdi-dream-cake/571766742_18077245361170730_3409980196157018422_n..webp",
  },
] as const;

export const cakesMenuServingTips = [
  {
    title: "Tell Muskan your guest count",
    detail: "She'll suggest 6\", 8\", or 10\" from the guide prices — no guessing in the car.",
  },
  {
    title: "Goa heat & serving",
    detail: "Keep chilled until 30–45 minutes before cutting; avoid leaving the box in direct sun.",
  },
  {
    title: "Writing & toppers",
    detail: "Simple message on a menu flavour may need 2+ days — ask on WhatsApp when you order.",
  },
  {
    title: "Same-day honesty",
    detail: "Menu cakes depend on oven space. Muskan will suggest the closest flavour if one is sold out.",
  },
] as const;

export const cakesMenuAddOns = [
  {
    title: "Main cake + bento surprise",
    detail:
      "Order an 8\" for guests and a Bento Cake for one person — one WhatsApp thread, one delivery run.",
    flavour: "Bento Cake",
    categoryTitle: "Special cake",
  },
  {
    title: "Office tray + premium showpiece",
    detail:
      "Butterscotch or Mud for the team, plus Ferrero or Rasmalai for the guest of honour.",
    flavour: "Ferrero Rocher",
    categoryTitle: "Premium cake",
  },
] as const;

export const cakesMenuFaqs = [
  {
    question: "How do I order from the cakes menu?",
    answer: `Tap Order on any flavour — WhatsApp opens with the name filled in. Add your date, town, and size. Muskan replies from ${site.studioCity} with availability and price.`,
  },
  {
    question: "Is the online menu the same as your shop board?",
    answer:
      "Yes — Regular, Fruit, Premium, and Special match our printed board. When a flavour is sold out for the day, Muskan will suggest the closest option on WhatsApp.",
  },
  {
    question: "Can I get eggless ready-made cakes?",
    answer:
      "Often yes — mention eggless on your first message. Some sponges need more notice; Muskan will say honestly if your date allows it.",
  },
  {
    question: "Ready-made vs custom — which should I choose?",
    answer:
      "Ready-made suits familiar flavours and shorter lead times. Custom is for themes, writing, tiers, and character designs — browse /creations or /case-studies, then message on WhatsApp.",
  },
  {
    question: "Do you deliver menu cakes across Goa?",
    answer: `Yes — pickup in ${site.studioCity} or delivery to Panaji, Margao, Calangute, and more. Delivery fee is in your WhatsApp quote before you confirm.`,
  },
  {
    question: "Can I add a message or name on a menu cake?",
    answer:
      "Often yes — mention it when you order. Simple piping may need a day or two more than a plain finish; Muskan will confirm on WhatsApp.",
  },
  {
    question: "What if my flavour is sold out today?",
    answer:
      "Muskan will suggest the closest match from the same section (e.g. another chocolate or mithai-style option) and quote the price before you confirm.",
  },
] as const;

export const cakesMenuExploreLinks = [
  {
    href: "/creations",
    label: "Full cake gallery",
    description: "160+ real designs — characters, weddings, bentos",
  },
  {
    href: "/case-studies",
    label: "Case studies",
    description: "How Muskan builds impossible cakes in Goa",
  },
  {
    href: "/bento-cakes-goa",
    label: "Bento cakes guide",
    description: "Small tins for couples & surprises",
  },
  {
    href: "/blog/ready-made-cakes-goa-menu-guide",
    label: "Menu journal",
    description: "When ready-made fits vs full custom",
  },
  {
    href: "/occasions",
    label: "Occasion guides",
    description: "Birthday, wedding, haldi & more — with flavour ideas",
  },
  {
    href: "/order",
    label: "Custom booking",
    description: "Themes, tiers & character cakes — 5–7 days ahead",
  },
] as const;

export const CAKES_MENU_IMAGE = "/images/cake-menu.avif";

export const CAKES_MENU_HERO_ALT = `${site.name} printed cakes menu board in Goa — Regular, Fruit, Premium and Special flavours`;

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
