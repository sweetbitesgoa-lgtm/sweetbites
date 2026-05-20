import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const vascoLocationContent: RichLocationContent = {
  slug: "vasco",
  placeName: "Vasco",
  isStudio: false,
  nearbySlugs: ["margao", "velim", "colva", "ponda"],
  metaTitle: `Custom cakes in Vasco da Gama, Goa — delivery | ${site.name}`,
  metaDescription: `Birthday, wedding & bento cakes delivered to Vasco, South Goa. Baked in ${site.studioCity} by Muskan — WhatsApp ${site.phone}. Margao, airport area & coast.`,
  keywords: [
    "custom cake Vasco",
    "custom cake Vasco da Gama",
    "birthday cake Vasco Goa",
    "cake delivery Vasco",
    "cake delivery Vasco da Gama",
    "wedding cake Vasco",
    "bento cake Vasco",
    "eggless cake Vasco",
    "cake near Goa airport",
    "Sweet Bites Vasco",
    "South Goa cake delivery Vasco",
  ],
  hero: {
    badge: "South Goa · Port city delivery",
    title: "Custom cakes delivered to Vasco",
    lead: `Birthdays, weddings, and family celebrations in Vasco deserve a cake made to order — not something pulled from a shelf. ${site.name} bakes in ${site.studioCity}, close to South Goa's main towns, and delivers to Vasco, Margao, and the coast. Message on WhatsApp with your date and theme; Muskan replies with a quote and real gallery photos.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "Port city & South Goa hub",
    title: "Cakes for Vasco — from our Velim kitchen",
    paragraphs: [
      `Vasco da Gama is South Goa's gateway town — busy streets, port life, and plenty of family celebrations that need a proper custom cake. We don't have a shop in Vasco; every ${site.name} order is baked in Muskan's kitchen in ${site.studioCity}, then delivered to your home, office, or venue.`,
      "Many customers are locals planning a birthday or feast; others are visiting Goa and want a cake delivered to a hotel or rental. Either way, the process is the same: browse sweetbites.me, send what you like on WhatsApp with your date and guest count, and we'll confirm flavours, size, and delivery timing.",
      "Vasco is a short delivery run from our kitchen compared to North Goa beaches — that often helps with timing and fee. Pickup in Velim by appointment is still available if you prefer to collect on your way through South Goa.",
    ],
  },
  services: {
    title: "Cake services in Vasco — what we deliver",
    intro:
      "Custom cakes for Vasco and South Goa — birthdays, weddings, and everyday celebrations.",
    items: [
      {
        title: "Birthday cakes in Vasco",
        description:
          "Kids' themes, bento boxes, and tiered sponges — share age, character, and how many guests you're serving.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Wedding & feast cakes",
        description:
          "Tiers, welcome tables, and traditional celebration designs — book early for weekend dates.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Office & family milestones",
        description:
          "Chocolate, buttercream, and personalised designs for gatherings at home or work.",
        href: "/creations",
      },
      {
        title: "Eggless cakes in Vasco",
        description:
          "Eggless sponge on request — mention it on WhatsApp when you enquire.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Birthdays in Vasco",
      description:
        "Theme cakes and bento styles for family parties — delivered across Vasco and nearby areas.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Weddings & engagements",
      description:
        "Floral tiers and table cakes for venues in Vasco, Bogmalo, and toward the coast.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Anniversaries & milestones",
      description:
        "Elegant finishes and toppers for intimate dinners and home celebrations.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Delivery or Velim pickup",
      description:
        `Delivery in Vasco from ${site.studioCity}, or collect by appointment — fee on WhatsApp.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Vasco & South Goa delivery from Velim",
    intro:
      "We deliver across South Goa from one kitchen. Send your pin if you're in Vasco, near the port, or along the coast.",
    places: [
      {
        name: "Vasco da Gama",
        detail: "City, port area & nearby neighbourhoods",
      },
      {
        name: "Margao",
        detail: "South Goa's main market town — frequent route",
        href: locationPath("margao"),
      },
      {
        name: "Colva & Benaulim",
        detail: "Beach-area parties and resort events",
        href: locationPath("colva"),
      },
      {
        name: "Ponda",
        detail: "Inland celebrations — quote by distance",
        href: locationPath("ponda"),
      },
      {
        name: `Velim (${site.studioCity})`,
        detail: "Our kitchen — pickup Tue–Sun by appointment",
        href: locationPath("velim"),
      },
      {
        name: "Panaji & North Goa",
        detail: "Same kitchen — delivery fee in quote",
        href: locationPath("panaji"),
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
    title: "Guide prices — Vasco delivery quote",
    intro: `Cake price depends on design and size; delivery from ${site.studioCity} to Vasco is confirmed on WhatsApp. Message ${site.phone} with your date and area.`,
  },
  localSeo: {
    title: "Custom cakes in Vasco da Gama, Goa",
    paragraphs: [
      "People search for birthday cake Vasco or cake delivery near the port when they want someone who makes custom designs and replies on WhatsApp. Sweet Bites is a home bakery in Velim — Muskan crafts each order using real photos from sweetbites.me, not stock images.",
      "Vasco da Gama is the name on maps; many locals simply say Vasco. We deliver across the city and toward Bogmalo and the airport corridor — timing is agreed when you book, usually morning or afternoon on celebration day.",
      "There is no walk-in cake counter in Vasco. Order on WhatsApp first; typical lead time is five to seven days for custom work, longer for wedding tiers or fondant-heavy themes.",
    ],
  },
  visit: {
    title: "Cake delivery to Vasco",
    note: `All cakes are baked in ${site.studioCity}. Message on WhatsApp before ordering — we'll confirm Vasco delivery or studio pickup.`,
    bullets: [
      `Kitchen: ${site.address} (appointment only)`,
      "Delivery: Vasco, Margao, Colva & South Goa",
      site.hours.replace("Tue", "Studio hours Tue"),
      "Share your Vasco pin or landmark for delivery fee",
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
      question: "Do you deliver cakes to Vasco da Gama?",
      answer: `Yes. We deliver custom cakes to Vasco from our ${site.studioCity} kitchen. WhatsApp ${site.phone} with your address or pin for a quote and available dates.`,
    },
    {
      question: "Is Vasco the same as Vasco da Gama for delivery?",
      answer:
        "Yes — Vasco is the common short name for Vasco da Gama on maps and addresses. Use whichever matches your location when you message us on WhatsApp.",
    },
    {
      question: "Do you deliver cakes near Goa airport (Dabolim)?",
      answer:
        "We deliver to Vasco and surrounding South Goa areas from Velim. Share your exact pin on WhatsApp — we'll confirm if we cover your hotel or venue and the delivery fee.",
    },
    {
      question: "How much does cake delivery to Vasco cost?",
      answer:
        "Delivery fee depends on distance from our kitchen and is included in your WhatsApp quote before you confirm. Vasco is typically a shorter South Goa run than North Goa beaches.",
    },
    {
      question: "How early should I book a cake for Vasco?",
      answer: `Most custom designs need ${site.bookAheadDays} lead time. Weekend birthdays and wedding dates fill quickly — message as soon as your Vasco celebration date is fixed.`,
    },
    {
      question: "Can I pick up from Velim instead of Vasco delivery?",
      answer: `Yes. Collect from our ${site.studioCity} studio by appointment (Tuesday–Sunday). Many South Goa customers pick up when travelling through — message us to schedule.`,
    },
    {
      question: "Do you make eggless cakes for Vasco orders?",
      answer:
        "Yes, eggless sponge is available on request. Mention it when you message with flavour and design preferences.",
    },
    {
      question: "Is there a cake shop in Vasco I can visit?",
      answer: `${site.name} is a home bakery in ${site.studioCity}. We don't keep ready-made cakes in a Vasco storefront — order on WhatsApp first, then delivery or pickup.`,
    },
    {
      question: "Do you deliver from Vasco to Margao or Colva?",
      answer:
        "We deliver across South Goa from one kitchen — Vasco, Margao, Colva, and other areas. Share your delivery location for timing and fee in your quote.",
    },
  ],
  ui: {
    occasionsTitle: "Cakes for Vasco & South Goa",
    orderLead:
      "Vasco delivery or Velim pickup — same four steps from WhatsApp to your celebration.",
    galleryTitle: "Cakes we deliver to Vasco",
    faqTitle: "Vasco cake delivery — FAQs",
    nearbyTitle: "More South Goa areas",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Vasco, Goa in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom birthday cake delivered to Vasco da Gama South Goa by Sweet Bites",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Vasco",
    ctaTitle: "Ready to order cake delivery in Vasco?",
    ctaLead:
      "Send your date, Vasco area or landmark, guest count, and a theme or gallery photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Vasco orders",
  },
};
