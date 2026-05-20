import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const colvaLocationContent: RichLocationContent = {
  slug: "colva",
  placeName: "Colva",
  isStudio: false,
  nearbySlugs: ["margao", "velim", "vasco", "ponda"],
  metaTitle: `Beach & wedding cakes in Colva, Goa — delivery | ${site.name}`,
  metaDescription: `Wedding, birthday & resort cakes delivered to Colva, Benaulim & South Goa beach. Baked in ${site.studioCity} by Muskan — WhatsApp ${site.phone}. Margao & Velim nearby.`,
  keywords: [
    "custom cake Colva",
    "birthday cake Colva Goa",
    "wedding cake Colva beach",
    "cake delivery Colva",
    "cake delivery Benaulim",
    "resort cake Colva",
    "beach wedding cake South Goa",
    "bento cake Colva",
    "eggless cake Colva",
    "Sweet Bites Colva",
    "South Goa beach cake delivery",
  ],
  hero: {
    badge: "South Goa beach · Baked in Velim",
    title: "Custom cakes delivered to Colva",
    lead: `Resort weddings, beach birthdays, and family gatherings along Colva and Benaulim deserve a cake made to order — not something from a tourist counter. ${site.name} bakes in ${site.studioCity}, minutes from the South Goa coast, and delivers to Colva, Margao, and Vasco. Message on WhatsApp with your date and theme; Muskan replies with a quote and real gallery photos.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "South Goa's beach belt",
    title: "Beach & celebration cakes for Colva — from Velim",
    paragraphs: [
      `Colva is one of South Goa's best-known beaches — long sand, resort stays, and plenty of weddings and family celebrations that need a proper custom cake. Every ${site.name} order is baked in Muskan's kitchen in ${site.studioCity}, close to the coast, then delivered to your hotel, villa, or venue when it's ready.`,
      "We don't have a shop on Colva beach road. You browse sweetbites.me, send what you like on WhatsApp with your date, guest count, and pin location, and we'll confirm flavours, size, delivery window, and fee in one quote.",
      "Being near Velim often helps with South Goa beach timing compared to orders coming from far inland — still message early for Saturday weddings and peak-season weekends. Pickup at our studio by appointment is available if you're passing through on celebration day.",
    ],
  },
  services: {
    title: "Cake services in Colva — what we deliver",
    intro:
      "Weddings, resorts, and family celebrations on the South Goa coast — all custom, made to order in Velim.",
    items: [
      {
        title: "Wedding & beach celebration cakes",
        description:
          "Floral tiers, welcome tables, and elegant buttercream for resorts and venues along Colva and Benaulim.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Birthday cakes in Colva",
        description:
          "Kids' themes, bento boxes, and party tiers for hotel and villa stays — share age and guest count.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Resort & family feast cakes",
        description:
          "Chocolate, buttercream, and personalised designs for gatherings at home or by the beach.",
        href: "/creations",
      },
      {
        title: "Eggless cakes in Colva",
        description:
          "Eggless sponge on request — mention it on WhatsApp when you enquire.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Beach weddings & engagements",
      description:
        "Tiers and table cakes for ceremonies and receptions — book well ahead for peak weekends.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Birthdays on the coast",
      description:
        "Colourful themes for kids and adults — delivered to your resort, villa, or beachside venue.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Anniversary & welcome cakes",
      description:
        "Floral finishes and toppers for intimate dinners and resort celebrations.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Delivery or Velim pickup",
      description:
        `Colva delivery from ${site.studioCity}, or studio pickup by appointment — fee on WhatsApp.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Colva coast & South Goa delivery",
    intro:
      "We deliver along the South Goa beach belt from one kitchen. Share your resort, villa, or venue pin.",
    places: [
      {
        name: "Colva",
        detail: "Beach, resorts & residential lanes — core South Goa route",
      },
      {
        name: "Benaulim & Cavelossim",
        detail: "Neighbouring beaches — share your delivery pin",
      },
      {
        name: "Margao",
        detail: "South Goa's main town — short drive from the coast",
        href: locationPath("margao"),
      },
      {
        name: "Vasco da Gama",
        detail: "Port city & airport corridor",
        href: locationPath("vasco"),
      },
      {
        name: "Ponda",
        detail: "Inland celebrations — quote by distance",
        href: locationPath("ponda"),
      },
      {
        name: `Pickup in ${site.studioCity}`,
        detail: "Our kitchen — Tue–Sun by appointment",
        href: locationPath("velim"),
      },
    ],
  },
  testimonials: {
    title: "What customers say",
    items: [
      {
        name: "Rohan M.",
        location: "Margao",
        text: "Ordered a superhero cake for my son's birthday — incredible details and delivery was right on time. Sweet Bites made the whole process easy on WhatsApp.",
        rating: 5,
      },
      {
        name: "Sneha D.",
        location: "South Goa",
        text: "Eggless anniversary cake — Muskan sent design options and the finished cake looked exactly like the photo before bake day.",
        rating: 5,
      },
      {
        name: "Neha T.",
        location: "Margao · pickup from Velim",
        text: "Collected from the Velim kitchen — smooth handover and exactly what we discussed. Convenient when passing through South Goa.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Guide prices — Colva delivery quote",
    intro: `Wedding and weekend dates book early. Cake price depends on design; delivery from ${site.studioCity} to Colva is in your WhatsApp quote — ${site.phone}.`,
  },
  localSeo: {
    title: "Wedding & celebration cakes in Colva, Goa",
    paragraphs: [
      "People search for wedding cake Colva or cake delivery Benaulim when they want a custom design for a resort or beach celebration — not a generic tray cake. Sweet Bites is a home bakery in Velim; Muskan makes each order from real photos on sweetbites.me.",
      "Colva and Benaulim share delivery routes with Margao and Vasco from the same kitchen. Peak tourist weekends and wedding season need five to seven days lead time for custom work, longer for multi-tier or fondant-heavy designs.",
      "There is no walk-in Sweet Bites counter on Colva beach. Order on WhatsApp with your hotel or villa pin; we'll confirm delivery window and fee before you confirm.",
    ],
  },
  visit: {
    title: "Cake delivery to Colva",
    note: `Cakes are baked in ${site.studioCity}. Message on WhatsApp before ordering — we'll confirm Colva or Benaulim delivery, or studio pickup.`,
    bullets: [
      `Kitchen: ${site.address} (appointment only)`,
      "Delivery: Colva, Benaulim, Margao, Vasco & South Goa",
      site.hours.replace("Tue", "Studio hours Tue"),
      "Share resort, villa, or venue pin for delivery fee",
    ],
    showMap: false,
    showMapsLink: false,
    studioLink: {
      href: locationPath("velim"),
      label: `Kitchen in ${site.studioCity} — map & hours`,
    },
  },
  faqs: [
    {
      question: "Do you deliver cakes to Colva beach and nearby resorts?",
      answer: `Yes. We deliver custom cakes to Colva, Benaulim, and South Goa beach areas from our ${site.studioCity} kitchen. WhatsApp ${site.phone} with your pin for a quote.`,
    },
    {
      question: "Do you deliver to Benaulim and Cavelossim?",
      answer:
        "Yes — neighbouring beaches south of Colva are on our South Goa routes. Send your exact delivery pin on WhatsApp so we can confirm timing and fee.",
    },
    {
      question: "Can you make wedding cakes for Colva beach venues?",
      answer:
        "Yes. Share your venue, date, guest count, and theme photos on WhatsApp. Wedding tiers need extra lead time — book as early as possible for Saturday dates.",
    },
    {
      question: "How much does cake delivery to Colva cost?",
      answer:
        "Delivery fee depends on your exact location and is included in your WhatsApp quote before you confirm. Colva is typically a shorter run from our Velim kitchen than North Goa beaches.",
    },
    {
      question: "How early should I book a cake for Colva?",
      answer: `Most custom designs need ${site.bookAheadDays} lead time. Resort weddings and weekend birthdays fill quickly — message as soon as your Colva celebration date is fixed.`,
    },
    {
      question: "Do you make eggless cakes for Colva orders?",
      answer:
        "Yes, eggless sponge is available on request. Mention it when you message with flavour and design preferences.",
    },
    {
      question: "Can I pick up from Velim instead of Colva delivery?",
      answer: `Yes. Collect from our ${site.studioCity} studio by appointment (Tuesday–Sunday). Many South Goa customers pick up when travelling through — message us to schedule.`,
    },
    {
      question: "Is there a cake shop on Colva beach?",
      answer: `${site.name} is a home bakery in ${site.studioCity}. We don't sell ready-made cakes on the beach road — order on WhatsApp first, then delivery or pickup.`,
    },
    {
      question: "Do you deliver from Colva to Margao or Vasco?",
      answer:
        "We deliver across South Goa from one kitchen — Colva, Margao, Vasco, Ponda, and other areas. Your quote is based on where the cake is delivered on celebration day.",
    },
  ],
  ui: {
    occasionsTitle: "Beach & wedding cakes for Colva",
    orderLead:
      "Colva delivery or Velim pickup — same four steps from WhatsApp to your celebration.",
    galleryTitle: "Cakes we deliver to Colva",
    faqTitle: "Colva beach cake delivery — FAQs",
    nearbyTitle: "More South Goa areas",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Colva, Goa in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom wedding cake delivered to Colva beach South Goa by Sweet Bites",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Colva",
    ctaTitle: "Ready to order cake delivery in Colva?",
    ctaLead:
      "Send your date, Colva or Benaulim area pin, guest count, and a theme or gallery photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Colva orders",
  },
};
