import { deliveryAreas, meetMuskan, seasonalBanner, site } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";
import { siteMedia } from "@/lib/site-media";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const CONTACT_PAGE_TITLE = `Contact Sweet Bites — WhatsApp cake orders in ${site.studioCity}, Goa`;

export const CONTACT_PAGE_DESCRIPTION = `Contact ${site.name} in ${site.studioCity}, Goa — WhatsApp ${site.phone} for custom cake quotes, studio hours Tue–Sun, pickup & delivery across Goa. Visit by appointment near St. Xavier's High School.`;

export const CONTACT_KEYWORDS = [
  "Sweet Bites contact",
  "cake shop Velim WhatsApp",
  "Muskan baker Goa phone",
  "Sweet Bites address Goa",
  "custom cake order WhatsApp Goa",
  "bakery Velim Salcete",
  "cake delivery contact Goa",
  "Sweet Bites studio hours Goa",
  "cake order WhatsApp number Goa",
] as const;

export const contactHeroStats = [
  { value: "WhatsApp", label: "Best for orders & photos" },
  { value: `${site.stats.rating}★`, label: "Google reviews" },
  { value: site.bookAheadDays, label: "Typical custom lead time" },
  { value: "Goa-wide", label: "Pickup & delivery" },
] as const;

export const contactWhatsAppTemplate = `Hi Sweet Bites! I'd like to order a cake (${site.domain}).

• Occasion: (birthday / wedding / haldi / other)
• Date & time needed:
• Guests / cake size:
• Flavour or theme:
• Pickup in ${site.studioCity} or delivery (town in Goa):
• Reference: (paste a link from sweetbites.me or attach a photo)

Please share availability and price. Thank you!`;

export function getContactInquiryWhatsAppUrl(): string {
  return getWhatsAppUrl(contactWhatsAppTemplate);
}

export const contactOccasionLinks = [
  {
    emoji: "🎂",
    label: "Birthday cakes",
    href: "/birthday-cakes-goa",
    description: "Home parties & kids themes",
  },
  {
    emoji: "💍",
    label: "Wedding cakes",
    href: "/wedding-cakes-goa",
    description: "Tiers & reception showpieces",
  },
  {
    emoji: "🪔",
    label: "Haldi cakes",
    href: "/haldi-cakes-goa",
    description: "Yellows & marigold designs",
  },
  {
    emoji: "💝",
    label: "Anniversary",
    href: "/anniversary-cakes-goa",
    description: "Hearts, bentos & dinner cakes",
  },
  {
    emoji: "🧁",
    label: "Bento cakes",
    href: "/bento-cakes-goa",
    description: "Small surprise tins",
  },
  {
    emoji: "🦸",
    label: "Kids birthdays",
    href: "/kids-birthday-cakes-goa",
    description: "Characters & bright colours",
  },
] as const;

export const contactPaymentNotes = [
  {
    title: "Quote before you confirm",
    detail:
      "Muskan sends size, flavour, eggless options, and total price on WhatsApp before baking starts — no surprises.",
  },
  {
    title: "Payment on WhatsApp",
    detail: "UPI or bank details are shared after you approve the quote. A small advance may apply for large events.",
  },
  {
    title: "Rush & same-week dates",
    detail: `Simple designs or menu flavours may fit sooner — ask honestly. Complex fondant work needs ${site.bookAheadDays}.`,
  },
] as const;

export { seasonalBanner as contactSeasonalBanner };

export const contactMuskanQuote = {
  quote:
    "Message me on WhatsApp with your date and a photo — even a rough idea is enough. I reply during studio hours with an honest yes on timing and a clear price before you confirm.",
  attribution: "Muskan · Sweet Bites",
} as const;

export const contactResponseSteps = [
  {
    title: "You message on WhatsApp",
    detail: `Share date, town, guest count, and a reference photo from ${site.domain} or Pinterest.`,
  },
  {
    title: "Muskan replies with a quote",
    detail: "Usually the same day during studio hours — size, flavour, eggless options, and delivery fee.",
  },
  {
    title: "You confirm & pay",
    detail: "Payment details and pickup or delivery time are confirmed on WhatsApp before baking starts.",
  },
  {
    title: "Fresh cake — pickup or delivery",
    detail: `Collect from ${site.studioCity} or we deliver across North & South Goa.`,
  },
] as const;

export const contactOrderPaths = [
  {
    title: "Custom celebration cake",
    description: "Themes, tiers, characters, wedding & haldi — book 5–7 days ahead when possible.",
    href: "/order",
    label: "How to book",
    cta: "Booking guide",
  },
  {
    title: "Ready-made menu flavour",
    description: "Black Forest, Rasmalai, Bento & more from our printed board — often shorter lead time.",
    href: "/cakes-menu",
    label: "Cakes menu",
    cta: "Browse flavours",
  },
] as const;

export const contactVisitTips = [
  {
    title: "Message before you visit",
    detail: "Studio is appointment-only so Muskan can focus on scheduled orders.",
  },
  {
    title: "Landmark",
    detail: "Behind St. Xavier's High School, Ubdando — use Google Maps for live directions.",
  },
  {
    title: "Closed Mondays",
    detail: "You can still WhatsApp any day; replies Tue–Sun during open hours.",
  },
] as const;

export const contactQuickLinks = [
  { href: "/creations", label: "Cake gallery", description: "160+ real designs" },
  { href: "/cakes-menu", label: "Ready-made menu", description: "Order a board flavour" },
  { href: "/order", label: "How to book", description: "Custom cake steps" },
  { href: "/locations", label: "Delivery areas", description: "Towns we serve in Goa" },
  { href: "/reels", label: "Watch reels", description: "Piping & finishes" },
  { href: "/case-studies", label: "Case studies", description: "How Muskan builds cakes" },
] as const;

export const contactPageFaqs = [
  {
    question: "What is Sweet Bites phone number?",
    answer: `Call or WhatsApp ${site.phone}. For cake orders, WhatsApp is preferred so Muskan can see your reference images.`,
  },
  {
    question: "What is the official Sweet Bites website?",
    answer: `Our official site is ${site.url} — gallery, menu, reels, and order guides are all there.`,
  },
  {
    question: "Can I visit the bakery without ordering?",
    answer:
      "Message on WhatsApp first to confirm Muskan is available. We operate by appointment to maintain quality on active orders.",
  },
  {
    question: "How fast does Muskan reply on WhatsApp?",
    answer: `During studio hours (${site.hours}), most messages get a reply the same day. Complex wedding or tiered cakes may need a little longer for a full quote.`,
  },
  {
    question: "Do you take orders by email or Instagram DM?",
    answer: `Email (${site.email}) is not monitored for orders. Instagram ${site.instagramHandle} is great for inspiration — WhatsApp ${site.phone} is best for booking.`,
  },
  {
    question: "Where do you deliver cakes in Goa?",
    answer: `From our ${site.studioCity} kitchen to Panaji, Margao, Calangute, Mapusa, beach areas, and more — delivery fee depends on distance and is confirmed before you pay.`,
  },
  {
    question: "How do I pay for my cake?",
    answer:
      "After you approve the WhatsApp quote, Muskan shares UPI or bank transfer details. Payment is confirmed before your cake goes into the oven schedule.",
  },
  {
    question: "Can I order a ready-made flavour from the menu?",
    answer: `Yes — browse ${site.url}/cakes-menu, tap Order on your flavour, and WhatsApp opens with the name filled in. Muskan confirms today's availability and price.`,
  },
  {
    question: "Is there parking at the studio?",
    answer:
      "Street parking is usually available near Ubdando, Velim — use Google Maps and message Muskan when you are five minutes away for pickup.",
  },
] as const;

export function getContactWebPageJsonLd(): Record<string, unknown> {
  const base = SITE_URL.replace(/\/$/, "");
  const url = `${base}/contact`;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#webpage`,
    name: CONTACT_PAGE_TITLE,
    description: CONTACT_PAGE_DESCRIPTION,
    url,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", name: site.name, url: base },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${base}${siteMedia.contactHero}`,
      caption: `Contact ${site.name} — custom cakes in ${site.studioCity}, Goa`,
    },
    mainEntity: {
      "@type": "Bakery",
      name: site.name,
      telephone: site.phone,
      email: site.email,
      url: base,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address,
        addressLocality: site.studioCity,
        addressRegion: "Goa",
        postalCode: site.postalCode,
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        areaServed: "Goa",
        availableLanguage: ["English", "Hindi"],
      },
    },
  };
}

export function getContactHowToJsonLd(): Record<string, unknown> {
  const base = SITE_URL.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to contact ${site.name} for a cake order in Goa`,
    description: CONTACT_PAGE_DESCRIPTION,
    step: contactResponseSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.detail,
    })),
    tool: [{ "@type": "HowToTool", name: "WhatsApp" }],
    supply: [{ "@type": "HowToSupply", name: "Reference photo (optional)" }],
  };
}

export { deliveryAreas as contactDeliveryAreas, meetMuskan as contactMeetMuskan };
