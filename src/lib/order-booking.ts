import { deliveryAreas, flavors, orderSteps, site, sizes } from "@/lib/content";

export const conciergeStats = [
  { label: "Typical reply", value: "Same day" },
  { label: "Book ahead", value: site.bookAheadDays },
  { label: "Celebrations", value: `${site.stats.celebrations}+` },
  { label: "Rating", value: `${site.stats.rating}★` },
] as const;

export const bookingPaths = [
  {
    id: "birthday",
    title: "Birthday",
    description: "Kids themes, milestones & surprise parties",
    accent: "from-terracotta/20 to-blush",
  },
  {
    id: "wedding",
    title: "Wedding & haldi",
    description: "Tiers, florals & ceremonial designs",
    accent: "from-gold-light to-cream",
  },
  {
    id: "anniversary",
    title: "Anniversary",
    description: "Hearts, gold details & couple themes",
    accent: "from-blush to-gold-light/60",
  },
  {
    id: "corporate",
    title: "Office & events",
    description: "Logo cakes, batches & celebrations",
    accent: "from-sage-light to-cream",
  },
] as const;

export type BookingPathId = (typeof bookingPaths)[number]["id"];

/** Homepage quick-book chips (WhatsApp pre-filled) */
export const homeQuickBookChips = [
  {
    id: "birthday" as const,
    label: "Birthday",
    emoji: "🎂",
    pathId: "birthday" as BookingPathId,
  },
  {
    id: "wedding" as const,
    label: "Wedding",
    emoji: "💍",
    pathId: "wedding" as BookingPathId,
  },
  {
    id: "bento" as const,
    label: "Bento",
    emoji: "🎁",
    message:
      "Hi Sweet Bites! I'd like a bento cake from sweetbites.me.\n\n• Date:\n• Flavour:\n• Message on top:\n• Pickup or delivery area in Goa:\n\nThank you!",
  },
  {
    id: "eggless" as const,
    label: "Eggless",
    emoji: "🌿",
    message:
      "Hi Sweet Bites! I need an eggless custom cake from sweetbites.me.\n\n• Occasion:\n• Date:\n• Guest count:\n• Preferred flavour:\n• Delivery area in Goa:\n\nThank you!",
  },
] as const;

export function getBookingPathMessage(id: BookingPathId): string {
  const base = `Hi Sweet Bites! I'd like to book a custom cake from sweetbites.me.\n\n`;
  const templates: Record<BookingPathId, string> = {
    birthday: `${base}Occasion: Birthday\n• Date:\n• Guest count:\n• Theme / age:\n• Reference from gallery (optional):\n\nThank you!`,
    wedding: `${base}Occasion: Wedding / haldi\n• Event date:\n• Guest count / tiers needed:\n• Venue area in Goa:\n• Style & colour palette:\n\nThank you!`,
    anniversary: `${base}Occasion: Anniversary\n• Date:\n• Guest count:\n• Names / years to include:\n• Design inspiration:\n\nThank you!`,
    corporate: `${base}Occasion: Office / corporate event\n• Date:\n• Quantity or cake size:\n• Brand colours / logo:\n• Delivery location in Goa:\n\nThank you!`,
  };
  return templates[id];
}

export const briefFields = [
  { key: "occasion", label: "Occasion", example: "6th birthday, haldi, anniversary" },
  { key: "date", label: "Date & time", example: "Saturday, 24 May · by 6 PM" },
  { key: "guests", label: "Guests / size", example: "15 guests or 8 inch" },
  { key: "design", label: "Design", example: "Link from sweetbites.me or your photo" },
  { key: "flavour", label: "Flavour", example: "Mango Alphonso, eggless chocolate" },
  {
    key: "delivery",
    label: "Pickup / delivery",
    example: `${site.studioCity} pickup — home delivery to Margao`,
  },
] as const;

export const conversationPreview = [
  {
    from: "you" as const,
    time: "10:42",
    text: "Hi Muskan! I need a cake for my daughter's 5th birthday on 28 May — around 15 guests. We loved your unicorn design on sweetbites.me.",
  },
  {
    from: "studio" as const,
    time: "11:15",
    text: "Lovely! For 15 guests I'd suggest an 8\" buttercream or a bento with a figurine. Any colour palette besides the unicorn pastels?",
  },
  {
    from: "you" as const,
    time: "11:18",
    text: "Soft pink and lavender, eggless sponge please. Delivery to Margao.",
  },
  {
    from: "studio" as const,
    time: "11:32",
    text: "Perfect — ₹2,100 including delivery. I'll reserve 28 May once you confirm. Payment details on WhatsApp.",
  },
];

export { deliveryAreas, flavors, orderSteps, sizes };
