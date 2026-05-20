import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const bagaLocationContent: RichLocationContent = {
  slug: "baga",
  placeName: "Baga",
  isStudio: false,
  nearbySlugs: ["calangute", "candolim", "anjuna", "mapusa"],
  metaTitle: `Birthday & party cakes in Baga, Goa — delivery | ${site.name}`,
  metaDescription: `Custom birthday, party & beach cakes delivered to Baga, North Goa. Baked in ${site.studioCity} by Muskan — WhatsApp ${site.phone}. Calangute, Candolim & coast.`,
  keywords: [
    "custom cake Baga",
    "birthday cake Baga Goa",
    "party cake Baga beach",
    "cake delivery Baga",
    "cake delivery Baga Calangute",
    "bachelor cake Baga",
    "bento cake Baga",
    "eggless cake Baga",
    "beach party cake Baga",
    "Sweet Bites Baga",
    "North Goa party cake",
  ],
  hero: {
    badge: "Baga beach · Party & celebrations",
    title: "Custom party cakes delivered to Baga",
    lead: `Beach birthdays, villa get-togethers, and weekend celebrations in Baga need cakes that look great and arrive on time. ${site.name} bakes in ${site.studioCity} and delivers along the North Goa coast — Baga, Calangute, and Candolim. Message on WhatsApp with your date and theme; Muskan sends a quote and real photos from our gallery.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "Beach parties & holidays",
    title: "Party cakes for Baga — baked fresh in Velim",
    paragraphs: [
      `Baga is where many Goa holidays turn into real celebrations — birthdays on the sand, group trips, and long weekends that need a proper cake, not a last-minute supermarket sponge. Every ${site.name} order is made in Muskan's kitchen in ${site.studioCity} and delivered to your hotel, villa, or venue when it's ready.`,
      "We don't have a shop on the beach strip. You browse sweetbites.me, pick a style you like, and message on WhatsApp with your date, guest count, and pin location. Weekend and peak-season slots go fast — especially Friday and Saturday — so message as soon as your plans are set.",
      "Delivery timing matters for beach areas: we agree a window on WhatsApp so your cake isn't sitting in the heat longer than necessary. Pickup at our Velim studio is also available by appointment if that fits your trip better.",
    ],
  },
  services: {
    title: "Cake services in Baga — what we deliver",
    intro:
      "Birthday and party cakes are our strength on this coast — all custom, made to order in Velim.",
    items: [
      {
        title: "Birthday & party cakes in Baga",
        description:
          "Bold themes, bento boxes, and tiered cakes for groups — share age, vibe, and how many you're feeding.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Beach & villa celebration cakes",
        description:
          "Designs that photograph well for villa dinners and beachside gatherings along Baga.",
        href: "/creations",
      },
      {
        title: "Wedding & pre-wedding cakes",
        description:
          "Floral tiers and welcome cakes for coastal weddings — book early for peak weekends.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Eggless cakes in Baga",
        description:
          "Eggless sponge on request — mention it on WhatsApp when you enquire.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Birthday parties in Baga",
      description:
        "Kids' themes, adults' milestones, and group trip cakes — delivered to your stay on the coast.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Weekend & group celebrations",
      description:
        "Larger sponges and fun designs for holidays with friends — plan ahead for busy weekends.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Weddings on the coast",
      description:
        "Tiers and table cakes for beachside ceremonies near Baga and Calangute.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Delivery or Velim pickup",
      description:
        `Baga delivery from ${site.studioCity}, or studio pickup by appointment — all on WhatsApp.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Baga & North Goa coast delivery",
    intro:
      "One kitchen covers the whole beach belt. Send your hotel, shack area, or villa pin for a quote.",
    places: [
      {
        name: "Baga",
        detail: "Beach, shacks & nearby stays — weekend routes",
      },
      {
        name: "Calangute",
        detail: "Neighbouring beach — shared delivery",
        href: locationPath("calangute"),
      },
      {
        name: "Candolim",
        detail: "Resorts & villas south of Calangute",
        href: locationPath("candolim"),
      },
      {
        name: "Anjuna",
        detail: "North coast events — quote by distance",
        href: locationPath("anjuna"),
      },
      {
        name: "Mapusa",
        detail: "Inland North Goa",
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
    title: "Guide prices — Baga delivery quote",
    intro: `Weekend dates book early. Cake price depends on design; delivery from ${site.studioCity} to Baga is in your WhatsApp quote — ${site.phone}.`,
  },
  localSeo: {
    title: "Birthday & party cakes in Baga, Goa",
    paragraphs: [
      "Searches like “birthday cake Baga” or “cake delivery Baga beach” usually mean you need something custom for a holiday party — not a generic tray cake. Sweet Bites is a home bakery in Velim: Muskan designs each order after you share your brief, with real photos from sweetbites.me.",
      "Baga shares delivery routes with Calangute and Candolim from the same kitchen. Peak tourist weekends and New Year period need extra lead time — typically five to seven days for custom work, longer for wedding tiers or detailed fondant characters.",
      "There is no walk-in cake shop on Baga beach. Order on WhatsApp with your location pin; we'll confirm delivery window and fee before you pay.",
    ],
  },
  visit: {
    title: "Cake delivery to Baga",
    note: `Cakes are baked in ${site.studioCity}. Message on WhatsApp before ordering — we'll confirm Baga delivery or studio pickup.`,
    bullets: [
      `Kitchen: ${site.address} (appointment only)`,
      "Delivery: Baga, Calangute, Candolim & North Goa coast",
      site.hours.replace("Tue", "Studio hours Tue"),
      "Share hotel, villa, or venue pin for delivery fee",
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
      question: "Do you deliver cakes to Baga beach and nearby stays?",
      answer: `Yes. We deliver custom cakes to Baga from our ${site.studioCity} kitchen. WhatsApp ${site.phone} with your pin or landmark for a quote and available dates.`,
    },
    {
      question: "Can I get a birthday cake delivered in Baga on a weekend?",
      answer: `Weekends fill quickly — message ${site.bookAheadDays} ahead when possible. Share your Saturday or Sunday date early; Muskan will tell you honestly if the slot is open.`,
    },
    {
      question: "Do you deliver to Calangute and Candolim from Baga orders?",
      answer:
        "We deliver across the beach belt from one kitchen. Use your actual delivery address on WhatsApp — Baga, Calangute, and Candolim are all on our routes.",
    },
    {
      question: "How much does cake delivery to Baga cost?",
      answer:
        "Delivery fee depends on distance from Velim and is included in your WhatsApp quote before you confirm. Cake price, size, and delivery are shown together.",
    },
    {
      question: "Do you make themed party cakes for Baga celebrations?",
      answer:
        "Yes — kids' characters, bento boxes, chocolate tiers, and adult milestone designs. Send a gallery screenshot on WhatsApp with your date and guest count.",
    },
    {
      question: "Do you make eggless cakes for Baga orders?",
      answer:
        "Yes, eggless sponge is available on request. Mention it when you message with flavour and design ideas.",
    },
    {
      question: "Can I pick up my cake instead of Baga delivery?",
      answer: `Yes. Collect from our ${site.studioCity} studio by appointment (Tuesday–Sunday). Message us to schedule pickup if that works better for your trip.`,
    },
    {
      question: "Is there a cake shop on Baga beach?",
      answer: `${site.name} is a home bakery in ${site.studioCity}. We don't sell ready-made cakes on the beach road — order on WhatsApp first.`,
    },
    {
      question: "What size cake do I need for a beach party in Baga?",
      answer:
        "Message your guest count on WhatsApp — we'll suggest 6\", 8\", or 10\" sizes or a custom tier. Guide prices start on our order page; final quote is tailored to your design.",
    },
  ],
  ui: {
    occasionsTitle: "Party & birthday cakes for Baga",
    orderLead:
      "Baga delivery or Velim pickup — same four steps from WhatsApp to your celebration.",
    galleryTitle: "Cakes we deliver to Baga",
    faqTitle: "Baga party & birthday cakes — FAQs",
    nearbyTitle: "More North Goa beaches",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Baga, Goa in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom birthday party cake delivered to Baga beach North Goa by Sweet Bites",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Baga",
    ctaTitle: "Ready to order cake delivery in Baga?",
    ctaLead:
      "Send your date, area in Baga, guest count, and a theme or gallery photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Baga orders",
  },
};
