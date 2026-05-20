import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const panajiLocationContent: RichLocationContent = {
  slug: "panaji",
  placeName: "Panaji",
  isStudio: false,
  nearbySlugs: ["taleigao", "mapusa", "calangute", "anjuna"],
  metaTitle: `Custom cakes in Panaji (Panjim), Goa — delivery | ${site.name}`,
  metaDescription: `Order birthday, wedding & bento cakes in Panaji / Panjim, North Goa. Baked in ${site.studioCity}, delivered by Muskan — WhatsApp ${site.phone} for a quote.`,
  keywords: [
    "custom cake Panaji",
    "custom cake Panjim",
    "birthday cake Panaji Goa",
    "birthday cake Panjim",
    "cake delivery Panaji",
    "cake delivery Panjim Goa",
    "wedding cake Panaji",
    "bento cake Panjim",
    "eggless cake Panaji",
    "order cake online Panaji",
    "cake baker near Panjim",
    "Sweet Bites Panaji",
  ],
  hero: {
    badge: "North Goa delivery · Baked in Velim",
    title: "Custom cakes delivered to Panaji & Panjim",
    lead: `Planning a celebration in the capital? ${site.name} bakes every cake in our ${site.studioCity} kitchen and delivers to Panaji, Taleigao, and nearby North Goa areas. Message on WhatsApp with your date and theme — Muskan replies with an honest quote and design ideas from our real gallery.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "Delivery to the capital",
    title: "Fresh cakes for Panaji — from our Velim kitchen",
    paragraphs: [
      `We don't have a shop front in Panaji. Every ${site.name} cake is made to order in ${site.studioCity}, South Goa, then carefully delivered to your home, office, or venue in Panaji (Panjim), Taleigao, or along the Mandovi side of town.`,
      "That model works well for custom work — Muskan can focus on your design instead of filling a display case. Most Panaji customers send a photo from sweetbites.me, note their guest count and date, and we confirm flavours, size, and delivery time on WhatsApp.",
      "Prefer pickup? You're welcome to collect from our Velim studio by appointment — many North Goa clients schedule collection on the drive south. Either way, you get the same cakes you see in the gallery.",
    ],
  },
  services: {
    title: "Cake services in Panaji & Panjim — what we deliver",
    intro:
      "Popular orders for capital-city birthdays, office parties, and family celebrations — all made to order, never pre-made.",
    items: [
      {
        title: "Birthday cakes in Panaji",
        description:
          "Kids' themes, bento boxes, and tiered cakes for home parties — share age, character, and how many you're serving.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Wedding & engagement cakes",
        description:
          "Welcome tables, floral tiers, and haldi colours — book early for Saturday events in Panaji.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Office & corporate cakes",
        description:
          "Logo colours, sheet cakes, and team celebrations — delivery to Panaji business areas on request.",
        href: "/creations",
      },
      {
        title: "Eggless cakes in Panaji",
        description:
          "Eggless sponge available on request — mention it when you message along with your preferred flavours.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Birthdays in Panaji",
      description:
        "From intimate bento boxes to larger tiers for garden parties — designed around your theme and budget.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Weddings & receptions",
      description:
        "Elegant buttercream and floral work for venues around Panaji and Ribandar — planned with clear timelines.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Anniversaries & milestones",
      description:
        "Heart motifs, gold details, and personalised messages — ideal for dinners at home or small venues.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Delivery or Velim pickup",
      description:
        `Doorstep delivery in Panaji, or collect from our ${site.studioCity} kitchen — fee confirmed on WhatsApp.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Panaji delivery & nearby North Goa",
    intro:
      "We deliver from our Velim kitchen to the capital and surrounding areas. Not sure if you're in range? Send your pin on WhatsApp.",
    places: [
      {
        name: "Panaji (Panjim)",
        detail: "Home, office & venue delivery — central North Goa",
      },
      {
        name: "Taleigao",
        detail: "Residential areas near the capital — frequent delivery route",
        href: locationPath("taleigao"),
      },
      {
        name: "Mapusa",
        detail: "Market town & nearby villages — north of Panaji",
        href: locationPath("mapusa"),
      },
      {
        name: "Calangute & Candolim",
        detail: "Beach belt celebrations — book ahead in season",
        href: locationPath("calangute"),
      },
      {
        name: "Anjuna & Vagator",
        detail: "Events and private villas — delivery quote by distance",
        href: locationPath("anjuna"),
      },
      {
        name: `Pickup in ${site.studioCity}`,
        detail: "Collect by appointment Tue–Sun if you prefer driving south",
        href: locationPath("velim"),
      },
    ],
  },
  testimonials: {
    title: "What customers say",
    items: [
      {
        name: "Priya S.",
        location: "Panaji",
        text: "Muskan created the most beautiful wedding cake — guests couldn't stop taking photos. Delivery to our venue in Panaji was on time and the cake looked exactly like the gallery photo.",
        rating: 5,
      },
      {
        name: "Arjun K.",
        location: "Taleigao",
        text: "Ordered a custom birthday cake for my daughter — clear updates on WhatsApp and fair pricing. Delivered fresh to Taleigao on the morning of the party.",
        rating: 5,
      },
      {
        name: "Ananya K.",
        location: "Calangute",
        text: "Sweet Bites is our go-to for office celebrations. Professional, creative, and always fresh — we've had cakes delivered from Velim to North Goa several times.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Guide prices — quote for Panaji delivery",
    intro: `Price includes design and size; delivery from ${site.studioCity} to Panaji is added in your WhatsApp quote. Message ${site.phone} with your date and area.`,
  },
  localSeo: {
    title: "Ordering custom cakes in Panaji (Panjim), Goa",
    paragraphs: [
      "Search terms like “birthday cake Panjim” or “cake delivery Panaji” usually mean you want someone reliable, not a supermarket sponge. Sweet Bites is a home bakery — Muskan designs each cake after you share your brief on WhatsApp, using real photos from sweetbites.me as reference.",
      "Panaji and Panjim refer to the same city; we use both names because that's how Goans and visitors search. Delivery times are agreed when you book — typically morning or afternoon slots on your celebration day, depending on distance from our Velim kitchen.",
      "For corporate orders, church feasts, or small home parties, the process is identical: date, guest count, theme, and delivery pin. Rush dates may be possible; weekend slots fill first, so message as soon as your plan is fixed.",
    ],
  },
  visit: {
    title: "Delivery to Panaji — how it works",
    note: `Cakes are baked in ${site.studioCity} and delivered to you. There is no walk-in counter in Panaji — order on WhatsApp first.`,
    bullets: [
      `Kitchen: ${site.address} (by appointment only)`,
      `Delivery: Panaji, Panjim, Taleigao & North Goa — fee in quote`,
      site.hours.replace("Tue", "Studio Tue"),
      `Or pickup in ${site.studioCity} — message before you drive down`,
    ],
    showMap: false,
    showMapsLink: false,
    studioLink: {
      href: locationPath("velim"),
      label: `Our ${site.studioCity} kitchen & map`,
    },
  },
  faqs: [
    {
      question: "Do you deliver cakes to Panaji and Panjim?",
      answer: `Yes. We deliver custom cakes to Panaji (Panjim) from our ${site.studioCity} kitchen. Share your address or landmark on WhatsApp — ${site.phone} — for a delivery quote.`,
    },
    {
      question: "Is Panaji the same as Panjim for cake delivery?",
      answer:
        "Yes — Panaji is the official name; Panjim is the traditional name locals use. We deliver to both names on maps and addresses across the capital area.",
    },
    {
      question: "How much does cake delivery to Panaji cost?",
      answer:
        "Delivery fee depends on distance from our Velim kitchen and is included in your WhatsApp quote before you confirm. There are no hidden charges — you'll see size, design, and delivery together.",
    },
    {
      question: "How far in advance should I book a cake for Panaji?",
      answer: `Most custom designs need ${site.bookAheadDays} lead time. Wedding weekends and Saturday birthdays fill quickly — message as soon as your Panaji event date is set.`,
    },
    {
      question: "Can I pick up instead of delivery in Panaji?",
      answer: `Yes. Many North Goa customers collect from our ${site.studioCity} studio by appointment (Tue–Sun). Message on WhatsApp to schedule pickup if that suits you better than doorstep delivery.`,
    },
    {
      question: "Do you make eggless cakes for Panaji orders?",
      answer:
        "Yes — eggless sponge is available on request. Tell us when you message, along with flavour and design ideas, and Muskan will recommend what works best.",
    },
    {
      question: "What types of cakes are popular in Panaji?",
      answer:
        "Birthday tiers, bento boxes, wedding and anniversary cakes, and chocolate or buttercream designs for office events. Browse the gallery and send a screenshot to start the conversation.",
    },
    {
      question: "Is there a cake shop in Panaji I can visit without ordering?",
      answer: `${site.name} is a home bakery based in ${site.studioCity}. We don't keep ready cakes in a Panaji storefront — every order is custom and placed on WhatsApp first.`,
    },
    {
      question: "Do you deliver to Taleigao and Mapusa from Panaji orders?",
      answer:
        "Yes. Taleigao, Mapusa, and other North Goa areas are on our regular delivery routes from the Velim kitchen. Share your exact location for timing and fee.",
    },
  ],
  ui: {
    occasionsTitle: "Cakes for Panaji & North Goa",
    orderLead:
      "Delivery to Panaji or pickup in Velim — same four steps from first message to celebration.",
    galleryTitle: "Cakes we deliver to Panaji",
    faqTitle: "Panaji & Panjim cake orders — FAQs",
    nearbyTitle: "More North Goa areas",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Panaji, Goa pre-filled in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom birthday cake delivered in Panaji North Goa by Sweet Bites",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Panaji",
    ctaTitle: "Ready to order cake delivery in Panaji?",
    ctaLead:
      "Send your date, area in Panaji or Panjim, guest count, and a theme or gallery photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Panaji orders",
  },
};
