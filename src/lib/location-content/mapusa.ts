import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const mapusaLocationContent: RichLocationContent = {
  slug: "mapusa",
  placeName: "Mapusa",
  isStudio: false,
  nearbySlugs: ["panaji", "taleigao", "calangute", "anjuna"],
  metaTitle: `Custom cakes in Mapusa, Goa — delivery | ${site.name}`,
  metaDescription: `Order birthday, wedding & bento cakes in Mapusa, North Goa. Baked in ${site.studioCity}, delivered by Muskan — WhatsApp ${site.phone}. Also Panaji, Calangute & beaches.`,
  keywords: [
    "custom cake Mapusa",
    "birthday cake Mapusa Goa",
    "cake delivery Mapusa",
    "cake shop Mapusa North Goa",
    "wedding cake Mapusa",
    "bento cake Mapusa",
    "eggless cake Mapusa",
    "order cake Mapusa",
    "cake baker Mapusa",
    "Sweet Bites Mapusa",
    "Mapusa market cake order",
  ],
  hero: {
    badge: "North Goa · Baked in Velim",
    title: "Custom cakes delivered to Mapusa",
    lead: `Whether it's a birthday near the Friday market or a family feast in the villages around Mapusa, ${site.name} bakes every cake in ${site.studioCity} and delivers across North Goa. Message on WhatsApp with your date and theme — Muskan replies with a quote and real photos from our gallery.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "North Goa's market town",
    title: "Fresh cakes for Mapusa — from our Velim kitchen",
    paragraphs: [
      `Mapusa is a busy hub for North Goa — local families, village feasts, and celebrations that need a cake that looks as good as it tastes. We don't have a shop in the market square; every ${site.name} cake is made to order in Muskan's kitchen in ${site.studioCity}.`,
      "Most Mapusa orders start on WhatsApp: a photo from sweetbites.me, your guest count, and the celebration date. We confirm flavours, size, and whether delivery works for your lane or village. Delivery fee depends on distance from our kitchen and is always in the quote before you confirm.",
      "Driving south for the day? Pickup at our Velim studio by appointment is an option many North Goa customers use — same cakes, same quality, sometimes easier than coordinating a delivery window on a busy Saturday.",
    ],
  },
  services: {
    title: "Cake services in Mapusa — what we deliver",
    intro:
      "Custom work only — no ready cakes at a counter. These are the orders we bake most often for Mapusa and nearby North Goa.",
    items: [
      {
        title: "Birthday cakes in Mapusa",
        description:
          "Kids' themes, bento boxes, and tiered cakes for home parties — share age, character, and how many you're serving.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Wedding & feast cakes",
        description:
          "Tiers, welcome tables, and traditional celebration designs — book early for weekend dates around Mapusa.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Anniversary & milestone cakes",
        description:
          "Elegant buttercream, chocolate finishes, and personalised toppers for family gatherings.",
        href: "/creations",
      },
      {
        title: "Eggless cakes in Mapusa",
        description:
          "Eggless sponge on request — mention it when you message along with flavour and design ideas.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Birthdays & kids' parties",
      description:
        "Colourful themes and bento styles for Mapusa homes and village halls — delivered when you need it.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Weddings & engagements",
      description:
        "Floral tiers and table cakes for venues from Mapusa toward the coast — planned with clear timelines.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Feasts & family events",
      description:
        "Larger sponges and shared designs for church feasts, anniversaries, and community celebrations.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Delivery or Velim pickup",
      description:
        `Delivery in Mapusa and North Goa, or collect from ${site.studioCity} — confirmed on WhatsApp.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Mapusa & North Goa delivery from Velim",
    intro:
      "One kitchen serves the market town and the coast. Send your pin if you're in a village off the main road.",
    places: [
      {
        name: "Mapusa",
        detail: "Town, market area & surrounding villages",
      },
      {
        name: "Panaji (Panjim)",
        detail: "Capital city — regular North Goa route",
        href: locationPath("panaji"),
      },
      {
        name: "Taleigao",
        detail: "Residential areas near Panaji",
        href: locationPath("taleigao"),
      },
      {
        name: "Calangute & Candolim",
        detail: "Beach belt — book ahead in peak season",
        href: locationPath("calangute"),
      },
      {
        name: "Anjuna & Vagator",
        detail: "Events and villas — quote by distance",
        href: locationPath("anjuna"),
      },
      {
        name: `Pickup in ${site.studioCity}`,
        detail: "Studio collection Tue–Sun by appointment",
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
        text: "Sweet Bites is our go-to for office and family celebrations across North Goa. Professional, creative, and always fresh — delivery from Velim has been reliable every time.",
        rating: 5,
      },
      {
        name: "Arjun K.",
        location: "Taleigao",
        text: "Ordered a custom birthday cake — clear WhatsApp updates and fair pricing. Delivered fresh on the morning of the party.",
        rating: 5,
      },
      {
        name: "Priya S.",
        location: "Panaji",
        text: "Our wedding cake was beautiful and on time. Muskan sent photos before bake day so we knew exactly what to expect.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Guide prices — Mapusa delivery quote",
    intro: `Design and size set the cake price; delivery from ${site.studioCity} to Mapusa is added in your WhatsApp quote. Message ${site.phone} with your date and area.`,
  },
  localSeo: {
    title: "Ordering custom cakes in Mapusa, Goa",
    paragraphs: [
      "People search for birthday cake Mapusa or cake delivery near the market when they want something better than a standard bakery sponge — and someone who answers the phone. Sweet Bites is a home bakery: Muskan designs each order after you share your brief, using real gallery photos from sweetbites.me.",
      "We deliver to Mapusa town, nearby villages, and onward toward Panaji and the beach belt from the same Velim kitchen. Friday market weeks and festival seasons get busy, so booking five to seven days ahead (longer for wedding tiers) is the safe approach.",
      "There is no walk-in cake counter in Mapusa. Order on WhatsApp first; we'll confirm delivery to your address or pickup in Velim if you prefer to collect on your schedule.",
    ],
  },
  visit: {
    title: "Cake delivery to Mapusa",
    note: `All cakes are baked in ${site.studioCity}. Message on WhatsApp before ordering — we'll confirm Mapusa delivery or studio pickup.`,
    bullets: [
      `Kitchen: ${site.address} (appointment only)`,
      "Delivery: Mapusa, Panaji, Taleigao & North Goa beaches",
      site.hours.replace("Tue", "Studio hours Tue"),
      "Send your Mapusa pin or landmark for delivery fee",
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
      question: "Do you deliver cakes to Mapusa?",
      answer: `Yes. We deliver custom cakes to Mapusa from our ${site.studioCity} kitchen. WhatsApp ${site.phone} with your address or location pin for a quote and available dates.`,
    },
    {
      question: "How much does cake delivery to Mapusa cost?",
      answer:
        "Delivery fee depends on distance from our Velim kitchen and is included in your WhatsApp quote before you confirm. You'll see cake price, size, and delivery together.",
    },
    {
      question: "How early should I book a cake for Mapusa?",
      answer: `Most custom designs need ${site.bookAheadDays} lead time. Weekends, market days, and wedding dates fill quickly — message as soon as your Mapusa celebration date is fixed.`,
    },
    {
      question: "Do you deliver to villages near Mapusa market?",
      answer:
        "Yes. We deliver to Mapusa town and surrounding villages in North Goa. Share your exact pin or landmark on WhatsApp so we can confirm timing and fee.",
    },
    {
      question: "Can I pick up my cake instead of Mapusa delivery?",
      answer: `Yes. Collect from our ${site.studioCity} studio by appointment (Tuesday–Sunday). Some North Goa customers pick up when travelling south — message us to schedule.`,
    },
    {
      question: "Do you make eggless cakes for Mapusa orders?",
      answer:
        "Yes, eggless sponge is available on request. Mention it when you message, with flavour and design preferences, and Muskan will recommend what works best.",
    },
    {
      question: "What cakes are popular for Mapusa celebrations?",
      answer:
        "Birthday themes, bento boxes, wedding and feast tiers, and chocolate or buttercream cakes for family events. Browse the gallery and send a screenshot to start.",
    },
    {
      question: "Is there a cake shop in Mapusa I can visit without ordering?",
      answer: `${site.name} is a home bakery in ${site.studioCity}. We don't keep ready-made cakes in a Mapusa storefront — every order is custom and placed on WhatsApp first.`,
    },
    {
      question: "Do you deliver from Mapusa to Calangute or Panaji?",
      answer:
        "We deliver across North Goa from one kitchen — Mapusa, Panaji, Taleigao, Calangute, and other areas. Share your delivery location for timing and fee in your quote.",
    },
  ],
  ui: {
    occasionsTitle: "Cakes for Mapusa & North Goa",
    orderLead:
      "Delivery in Mapusa or pickup in Velim — same four steps from WhatsApp to your celebration.",
    galleryTitle: "Cakes we deliver to Mapusa",
    faqTitle: "Mapusa cake delivery — FAQs",
    nearbyTitle: "More North Goa areas",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Mapusa, Goa in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom celebration cake delivered to Mapusa North Goa by Sweet Bites",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Mapusa",
    ctaTitle: "Ready to order cake delivery in Mapusa?",
    ctaLead:
      "Send your date, Mapusa area or village, guest count, and a theme or gallery photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Mapusa orders",
  },
};
