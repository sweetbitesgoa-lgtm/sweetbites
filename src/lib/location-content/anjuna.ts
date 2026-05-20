import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const anjunaLocationContent: RichLocationContent = {
  slug: "anjuna",
  placeName: "Anjuna",
  isStudio: false,
  nearbySlugs: ["calangute", "baga", "mapusa", "candolim"],
  metaTitle: `Custom cakes in Anjuna & Vagator, Goa — delivery | ${site.name}`,
  metaDescription: `Birthday, villa & beach cakes delivered to Anjuna, Vagator & North Goa. Baked in ${site.studioCity} by Muskan — WhatsApp ${site.phone}. Calangute, Baga & Mapusa.`,
  keywords: [
    "custom cake Anjuna",
    "birthday cake Anjuna Goa",
    "cake delivery Anjuna",
    "cake delivery Vagator",
    "villa cake Anjuna",
    "beach party cake Anjuna",
    "bento cake Anjuna",
    "eggless cake Anjuna",
    "wedding cake Anjuna Goa",
    "Sweet Bites Anjuna",
    "North Goa cake delivery Anjuna",
    "flea market area cake Goa",
  ],
  hero: {
    badge: "Anjuna & Vagator · North Goa coast",
    title: "Custom cakes delivered to Anjuna",
    lead: `Villa birthdays, cliffside dinners, and long-weekend celebrations around Anjuna and Vagator deserve a cake made to order — not a last-minute shop sponge. ${site.name} bakes in ${site.studioCity} and delivers along North Goa's coast, including Anjuna, Calangute, and Baga. Message on WhatsApp with your date and theme; Muskan replies with a quote and real gallery photos.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "North Goa cliffs & villas",
    title: "Cakes for Anjuna — baked fresh in Velim",
    paragraphs: [
      `Anjuna and nearby Vagator draw villa stays, homestays, and beach gatherings that need a proper custom cake — birthdays, engagements, and holiday reunions. Every ${site.name} order is made in Muskan's kitchen in ${site.studioCity}, then delivered to your stay or venue when it's ready.`,
      "We don't have a shop on the flea-market road or the cliff strip. You browse sweetbites.me, send what you like on WhatsApp with your date, guest count, and pin location, and we'll confirm flavours, size, delivery window, and fee in one quote.",
      "Anjuna sits a little north of the main Calangute–Baga belt, so delivery timing and fee depend on your exact pin — we confirm that upfront. Peak season weekends and New Year period need extra lead time; pickup at our Velim studio by appointment is still an option if you're travelling through South Goa.",
    ],
  },
  services: {
    title: "Cake services in Anjuna — what we deliver",
    intro:
      "Custom cakes for Anjuna, Vagator, and the North Goa coast — birthdays, villas, and small weddings.",
    items: [
      {
        title: "Birthday cakes in Anjuna",
        description:
          "Theme cakes, bento boxes, and tiered sponges for villa parties — share age, vibe, and guest count.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Villa & beach celebration cakes",
        description:
          "Designs that photograph well for cliff views, poolside dinners, and homestay gatherings.",
        href: "/creations",
      },
      {
        title: "Wedding & pre-wedding cakes",
        description:
          "Floral tiers and welcome cakes for coastal ceremonies — book early for peak weekends.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Eggless cakes in Anjuna",
        description:
          "Eggless sponge on request — mention it on WhatsApp when you enquire.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Birthdays in Anjuna & Vagator",
      description:
        "Kids' themes and adult milestone cakes — delivered to your villa, homestay, or venue pin.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Villa & holiday celebrations",
      description:
        "Group trips and long weekends — plan ahead for busy Friday and Saturday slots.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Weddings on the North coast",
      description:
        "Tiers and table cakes for ceremonies near Anjuna, Vagator, and Chapora.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Delivery or Velim pickup",
      description:
        `Anjuna delivery from ${site.studioCity}, or studio pickup by appointment — all on WhatsApp.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Anjuna & North Goa coast delivery",
    intro:
      "One kitchen covers the beach belt. Send your villa, homestay, or venue pin for a quote.",
    places: [
      {
        name: "Anjuna",
        detail: "Flea market area, cliffs & inland lanes",
      },
      {
        name: "Vagator & Chapora",
        detail: "Cliff beaches & fort area — share your pin",
      },
      {
        name: "Calangute",
        detail: "Main beach belt — frequent route",
        href: locationPath("calangute"),
      },
      {
        name: "Baga",
        detail: "Party coast south of Anjuna",
        href: locationPath("baga"),
      },
      {
        name: "Mapusa",
        detail: "Inland North Goa market town",
        href: locationPath("mapusa"),
      },
      {
        name: `Pickup in ${site.studioCity}`,
        detail: "Studio Tue–Sun by appointment",
        href: locationPath("velim"),
      },
    ],
  },
  testimonials: {
    title: "What customers say",
    items: [
      {
        name: "Ananya K.",
        location: "Calangute",
        text: "Sweet Bites handled our office celebration on the coast — creative design, on-time delivery, and the cake was as fresh as it looked in the photos.",
        rating: 5,
      },
      {
        name: "Rohan M.",
        location: "Margao",
        text: "Ordered a themed birthday cake for my son — incredible detail and delivery was spot on. Would order again for any family celebration.",
        rating: 5,
      },
      {
        name: "Arjun K.",
        location: "Taleigao",
        text: "Clear WhatsApp updates and fair pricing. The cake matched the gallery photo Muskan sent before bake day.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Guide prices — Anjuna delivery quote",
    intro: `Peak-season weekends book early. Cake price depends on design; delivery from ${site.studioCity} to Anjuna is in your WhatsApp quote — ${site.phone}.`,
  },
  localSeo: {
    title: "Custom cakes in Anjuna & Vagator, Goa",
    paragraphs: [
      "Searches like birthday cake Anjuna or cake delivery Vagator usually mean you want something custom for a villa or beach celebration — not a generic tray from a tourist shop. Sweet Bites is a home bakery in Velim; Muskan designs each order from real photos on sweetbites.me.",
      "Anjuna and Vagator share delivery routes with Calangute and Baga from the same kitchen. December through February and long weekends need five to seven days lead time for custom work, longer for wedding tiers or detailed fondant characters.",
      "There is no walk-in Sweet Bites counter on the Anjuna cliff road. Order on WhatsApp with your location pin; we'll confirm delivery window, fee, and whether your stay is on our regular North Goa route.",
    ],
  },
  visit: {
    title: "Cake delivery to Anjuna",
    note: `Cakes are baked in ${site.studioCity}. Message on WhatsApp before ordering — we'll confirm Anjuna or Vagator delivery, or studio pickup.`,
    bullets: [
      `Kitchen: ${site.address} (appointment only)`,
      "Delivery: Anjuna, Vagator, Calangute, Baga & North Goa",
      site.hours.replace("Tue", "Studio hours Tue"),
      "Share villa, homestay, or venue pin for delivery fee",
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
      question: "Do you deliver cakes to Anjuna and Vagator?",
      answer: `Yes. We deliver custom cakes to Anjuna, Vagator, and nearby North Goa areas from our ${site.studioCity} kitchen. WhatsApp ${site.phone} with your pin or landmark for a quote.`,
    },
    {
      question: "Is Vagator included in Anjuna cake delivery?",
      answer:
        "Yes — Vagator and Chapora are on our North Goa coast routes. Send your exact delivery pin on WhatsApp so we can confirm timing and fee.",
    },
    {
      question: "Can I get a birthday cake delivered to my Anjuna villa?",
      answer:
        "Yes. Share your villa or homestay pin, celebration date, guest count, and a theme or gallery photo. We'll suggest size and confirm delivery window for your stay.",
    },
    {
      question: "How much does cake delivery to Anjuna cost?",
      answer:
        "Delivery fee depends on distance from Velim and your exact location. It's included in your WhatsApp quote before you confirm — cake price and delivery shown together.",
    },
    {
      question: "How early should I book for Anjuna peak season?",
      answer: `December–February and holiday weekends fill quickly. Message at least ${site.bookAheadDays} ahead when possible; wedding and fondant-heavy designs need longer.`,
    },
    {
      question: "Do you deliver to Calangute and Baga from Anjuna orders?",
      answer:
        "We deliver across the North Goa beach belt from one kitchen. Use your actual delivery address on WhatsApp — Anjuna, Calangute, and Baga are all covered.",
    },
    {
      question: "Do you make eggless cakes for Anjuna orders?",
      answer:
        "Yes, eggless sponge is available on request. Mention it when you message with flavour and design ideas.",
    },
    {
      question: "Can I pick up from Velim instead of Anjuna delivery?",
      answer: `Yes. Collect from our ${site.studioCity} studio by appointment (Tuesday–Sunday). Message us to schedule if pickup fits your trip better.`,
    },
    {
      question: "Is there a cake shop in Anjuna flea market area?",
      answer: `${site.name} is a home bakery in ${site.studioCity}. We don't sell ready-made cakes on the market road — order on WhatsApp first, then delivery or pickup.`,
    },
  ],
  ui: {
    occasionsTitle: "Cakes for Anjuna & the North coast",
    orderLead:
      "Anjuna delivery or Velim pickup — same four steps from WhatsApp to your celebration.",
    galleryTitle: "Cakes we deliver to Anjuna",
    faqTitle: "Anjuna & Vagator cake delivery — FAQs",
    nearbyTitle: "More North Goa beaches",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Anjuna, Goa in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom birthday cake delivered to Anjuna North Goa by Sweet Bites",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Anjuna",
    ctaTitle: "Ready to order cake delivery in Anjuna?",
    ctaLead:
      "Send your date, Anjuna or Vagator area pin, guest count, and a theme or gallery photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Anjuna orders",
  },
};
