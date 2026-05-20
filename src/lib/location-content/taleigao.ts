import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const taleigaoLocationContent: RichLocationContent = {
  slug: "taleigao",
  placeName: "Taleigao",
  isStudio: false,
  nearbySlugs: ["panaji", "mapusa", "calangute", "anjuna"],
  metaTitle: `Custom cakes in Taleigao, Goa — delivery near Panaji | ${site.name}`,
  metaDescription: `Birthday, wedding & bento cakes delivered to Taleigao, North Goa. Baked in ${site.studioCity} by Muskan — WhatsApp ${site.phone} for a quote. Also serve Panaji & Mapusa.`,
  keywords: [
    "custom cake Taleigao",
    "birthday cake Taleigao Goa",
    "cake delivery Taleigao",
    "cake near Panaji Taleigao",
    "wedding cake Taleigao",
    "bento cake Taleigao",
    "eggless cake Taleigao",
    "order cake Taleigao",
    "cake baker Taleigao",
    "Sweet Bites Taleigao",
    "Taleigao Panaji cake",
  ],
  hero: {
    badge: "Near Panaji · North Goa delivery",
    title: "Custom cakes delivered to Taleigao",
    lead: `Celebrating in Taleigao? ${site.name} bakes in ${site.studioCity} and delivers to your home or venue — a short route from the capital side of North Goa. Share your date and theme on WhatsApp; Muskan sends a quote and real gallery photos so you know what you're getting.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "Residential North Goa",
    title: "Cakes for Taleigao — baked fresh in Velim",
    paragraphs: [
      `Taleigao sits close to Panaji, and many of our orders here are family birthdays, small weddings, and get-togethers at home. We don't have a branch in Taleigao — every cake is made in Muskan's ${site.studioCity} kitchen and brought to you when it's ready.`,
      "Most customers message on WhatsApp with a screenshot from sweetbites.me, their guest count, and the celebration date. We confirm flavours, size, and a delivery window that works for your area. If you'd rather collect on the way through South Goa, pickup at our studio is available by appointment too.",
      "Because we're a small home bakery, you speak directly with the person decorating your cake. That keeps changes simple and avoids the back-and-forth you might get with a large shop.",
    ],
  },
  services: {
    title: "Cake services in Taleigao — what we deliver",
    intro:
      "Made to order for Taleigao and nearby North Goa — not sold off a shelf. These are the requests we handle most often.",
    items: [
      {
        title: "Birthday cakes in Taleigao",
        description:
          "Kids' character cakes, bento boxes, and tiered sponges for home parties — tell us age, theme, and how many you're feeding.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Wedding & family celebration cakes",
        description:
          "Floral tiers, welcome cakes, and anniversary designs — plan ahead for weekend dates near Panaji.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Bento & small celebration cakes",
        description:
          "Perfect for couples, milestones, or a sweet surprise — compact designs with personal messages.",
        href: "/creations",
      },
      {
        title: "Eggless cakes in Taleigao",
        description:
          "Eggless sponge on request — mention it on WhatsApp when you enquire about flavours and design.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Birthdays at home",
      description:
        "Theme cakes and bento styles for Taleigao house parties — we deliver so you can focus on the celebration.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Weddings & engagements",
      description:
        "Tiers and table cakes for venues around Taleigao, Panaji, and Ribandar — booked with clear timelines.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Anniversaries & milestones",
      description:
        "Elegant buttercream and chocolate finishes with names, ages, or short messages on top.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Delivery or studio pickup",
      description:
        `Doorstep delivery in Taleigao, or collect from ${site.studioCity} — your quote on WhatsApp covers both options.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Taleigao & nearby delivery from Velim",
    intro:
      "We deliver across this part of North Goa from one kitchen. Send your pin if you're between Taleigao and the coast.",
    places: [
      {
        name: "Taleigao",
        detail: "Home delivery across Taleigao villages & housing areas",
      },
      {
        name: "Panaji (Panjim)",
        detail: "Capital — frequent same-day route from our kitchen",
        href: locationPath("panaji"),
      },
      {
        name: "Mapusa",
        detail: "Market town & north Goa villages",
        href: locationPath("mapusa"),
      },
      {
        name: "Calangute & Candolim",
        detail: "Beach celebrations — book early in season",
        href: locationPath("calangute"),
      },
      {
        name: "Anjuna",
        detail: "Events & villas — distance-based delivery quote",
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
        name: "Arjun K.",
        location: "Taleigao",
        text: "Ordered a custom birthday cake for my daughter — clear updates on WhatsApp and fair pricing. Delivered fresh to Taleigao on the morning of the party.",
        rating: 5,
      },
      {
        name: "Priya S.",
        location: "Panaji",
        text: "We had our wedding cake delivered from Sweet Bites — Muskan's team was easy to reach and the design matched the photos she sent before bake day.",
        rating: 5,
      },
      {
        name: "Ananya K.",
        location: "Calangute",
        text: "Reliable for celebrations across North Goa. Creative designs and always fresh when the box arrives.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Guide prices — Taleigao delivery quote",
    intro: `Cake price depends on design and size; delivery from ${site.studioCity} to Taleigao is confirmed on WhatsApp. Call or message ${site.phone} with your date.`,
  },
  localSeo: {
    title: "Custom cakes in Taleigao, Goa — what to know",
    paragraphs: [
      "If you're searching for a birthday cake in Taleigao or cake delivery near Panaji, you usually want someone who makes custom designs and actually responds. Sweet Bites is a home bakery — Muskan crafts each order after you share your brief, using the gallery on sweetbites.me as a starting point.",
      "Taleigao is well connected to our delivery runs toward Panaji and Mapusa, so many weekend slots go to families in the area. Delivery time is agreed when you book — often morning or early afternoon on the day of your event.",
      "We don't operate a retail counter in Taleigao. Every cake is scheduled in advance; eggless, fondant characters, and larger tiers need the standard lead time — usually five to seven days, longer for complex wedding work.",
    ],
  },
  visit: {
    title: "Cake delivery to Taleigao",
    note: `All cakes are baked in ${site.studioCity}. Order on WhatsApp first — we'll confirm delivery to your Taleigao address or studio pickup.`,
    bullets: [
      `Bakery: ${site.studioCity}, South Goa (appointment only)`,
      "Delivery: Taleigao, Panaji, Mapusa & North Goa",
      site.hours.replace("Tue", "Studio hours Tue"),
      "Share your location pin for an accurate delivery fee",
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
      question: "Do you deliver cakes to Taleigao?",
      answer: `Yes. We deliver custom cakes to Taleigao from our ${site.studioCity} kitchen. Message ${site.phone} on WhatsApp with your address or pin for a delivery quote and available dates.`,
    },
    {
      question: "How far is Taleigao from your bakery?",
      answer: `Our kitchen is in ${site.studioCity}, South Goa. Taleigao is on our North Goa delivery route — distance and fee are included in your WhatsApp quote before you confirm.`,
    },
    {
      question: "Can I order a birthday cake in Taleigao for the same week?",
      answer: `Simple designs sometimes fit shorter notice, but most custom cakes need ${site.bookAheadDays} lead time. Message your Taleigao date as soon as it's fixed — weekends fill early.`,
    },
    {
      question: "Do you deliver to Panaji if I live in Taleigao?",
      answer:
        "We deliver to both Taleigao and Panaji from the same kitchen. Use your actual delivery address on WhatsApp so we can plan the route and timing.",
    },
    {
      question: "Is there a cake shop in Taleigao?",
      answer: `${site.name} is a home bakery in ${site.studioCity} — we don't have a walk-in shop in Taleigao. Browse sweetbites.me and order on WhatsApp; we deliver to your door.`,
    },
    {
      question: "Do you make eggless cakes for Taleigao?",
      answer:
        "Yes, eggless sponge is available on request. Mention it when you message, along with flavour and design preferences.",
    },
    {
      question: "What cake styles do Taleigao customers order most?",
      answer:
        "Birthday themes for kids and adults, bento boxes, wedding and anniversary tiers, and chocolate or buttercream cakes for family gatherings. Send a gallery photo to start.",
    },
    {
      question: "Can I pick up my cake instead of delivery to Taleigao?",
      answer: `Yes. Collect from our ${site.studioCity} studio by appointment (Tuesday–Sunday). Some Taleigao customers prefer pickup when driving south — message us to schedule.`,
    },
    {
      question: "How much does a custom cake cost with delivery to Taleigao?",
      answer:
        "Sizes often start around ₹1,200–₹1,800 for simpler designs; bento, fondant, and wedding cakes are quoted individually. Delivery to Taleigao is added in your WhatsApp quote — no hidden fees.",
    },
  ],
  ui: {
    occasionsTitle: "Cakes for Taleigao & nearby North Goa",
    orderLead:
      "Delivery in Taleigao or pickup in Velim — same simple steps from WhatsApp to your celebration.",
    galleryTitle: "Cakes we deliver to Taleigao",
    faqTitle: "Taleigao cake delivery — FAQs",
    nearbyTitle: "More North Goa areas",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Taleigao, Goa in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom birthday cake delivered to Taleigao North Goa by Sweet Bites",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Taleigao",
    ctaTitle: "Ready to order cake delivery in Taleigao?",
    ctaLead:
      "Send your date, Taleigao area or landmark, guest count, and a theme or photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Taleigao orders",
  },
};
