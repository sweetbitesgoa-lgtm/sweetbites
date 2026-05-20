import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const velimLocationContent: RichLocationContent = {
  slug: "velim",
  placeName: "Velim",
  isStudio: true,
  nearbySlugs: ["margao", "vasco", "colva", "ponda"],
  metaTitle: `Custom cakes in Velim, Goa — pickup at ${site.name} kitchen`,
  metaDescription: `Order birthday, wedding & bento cakes in Velim, South Goa. Sweet Bites home bakery by Muskan — studio pickup Tue–Sun, delivery across Goa. WhatsApp ${site.phone}.`,
  keywords: [
    "custom cake Velim",
    "birthday cake Velim Goa",
    "cake shop Velim South Goa",
    "wedding cake Velim",
    "bento cake Velim",
    "cake pickup Velim",
    "Sweet Bites Velim",
    "home bakery Velim Goa",
    "eggless cake Velim",
    "cake delivery South Goa",
    "order cake online Velim",
  ],
  hero: {
    badge: "Our home kitchen · South Goa",
    title: "Custom cakes baked in Velim — ready when you are",
    lead: `Sweet Bites lives here in ${site.studioCity}. Muskan designs and decorates every cake in this kitchen, then hands it to you at pickup or sends it out across Goa. If you're nearby, we'd love to welcome you — just message on WhatsApp before you visit.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "typical lead time" },
    ],
  },
  story: {
    eyebrow: "A home bakery, not a storefront",
    title: "Why Velim is at the heart of what we do",
    paragraphs: [
      `Velim is where ${site.name} began — a small kitchen, a phone full of cake photos, and orders from friends who spread the word. Today the setup is still personal: one baker, one schedule, and cakes made to order rather than pulled from a display case.`,
      "If you live in Velim, Cavelossim, Betul, or along the South Goa coast, pickup is often the simplest option. Many of our customers drive in from Margao, Vasco, or even North Goa when they want to collect on the way to an event. Wherever you are in Goa, the process starts the same way — share your date and idea on WhatsApp, and Muskan will tell you honestly what's possible.",
      "Browse the gallery on sweetbites.me before you message. Real photos of real cakes help us match colours, themes, and size to your celebration without guesswork.",
    ],
  },
  services: {
    title: "Cake services in Velim — what we make to order",
    intro:
      "Every cake is custom — no display counter. These are the orders we bake most often for Velim pickup and South Goa delivery.",
    items: [
      {
        title: "Birthday cakes in Velim",
        description:
          "Kids' themes, bento boxes, and tiered sponges for home parties — message with age, character, and guest count.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Wedding & haldi cakes near Velim",
        description:
          "Floral tiers, welcome tables, and pre-wedding colours — book early for weekend dates.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Bento & small celebration cakes",
        description:
          "Compact designs for couples, anniversaries, or office treats — ideal when you want something personal, not huge.",
        href: "/creations",
      },
      {
        title: "Eggless cakes in Velim",
        description:
          "Eggless sponge on request with flavours that suit your design — mention it on WhatsApp when you enquire.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Birthdays & kids' themes",
      description:
        "Character cakes, bento boxes, and tiered designs for family parties in Velim and South Goa — eggless sponges available on request.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Weddings & pre-wedding",
      description:
        "Floral tiers, haldi colours, and welcome cakes — planned with lead time so your venue date stays stress-free.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Anniversaries & milestones",
      description:
        "Elegant buttercream, chocolate finishes, and personalised toppers for intimate gatherings at home.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Pickup & Goa delivery",
      description:
        "Collect from Velim by appointment, or ask for delivery to Margao, Colva, Panaji, and other areas — fee shared in your quote.",
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Where we deliver from our Velim kitchen",
    intro:
      "Pickup is in Velim. We also deliver and take orders from nearby villages and towns across South Goa — and often North Goa too.",
    places: [
      {
        name: "Velim",
        detail: "Studio pickup by appointment — our home bakery address",
      },
      {
        name: "Cavelossim & Betul",
        detail: "Short drive from the kitchen — popular for pickup on celebration days",
      },
      {
        name: "Margao",
        detail: "Frequent delivery from Velim — birthday and wedding cakes",
        href: locationPath("margao"),
      },
      {
        name: "Vasco",
        detail: "South Goa delivery — share your pin for a quote",
        href: locationPath("vasco"),
      },
      {
        name: "Colva & Benaulim",
        detail: "Beach-area celebrations — delivery fee in your WhatsApp quote",
        href: locationPath("colva"),
      },
      {
        name: "Panaji & North Goa",
        detail: "We deliver north from the same kitchen — book ahead",
        href: locationPath("panaji"),
      },
    ],
  },
  testimonials: {
    title: "What Goa customers say",
    items: [
      {
        name: "Rohan M.",
        location: "Margao · pickup from Velim",
        text: "Ordered a superhero cake for my son's birthday — collected from Muskan's kitchen on the way to the party. Details were incredible and timing was spot on.",
        rating: 5,
      },
      {
        name: "Sneha D.",
        location: "South Goa",
        text: "We wanted an eggless anniversary cake and weren't sure who to trust. Muskan sent design options on WhatsApp and the cake looked exactly like the photo she shared before bake day.",
        rating: 5,
      },
      {
        name: "Priya S.",
        location: "Panaji · delivered from Velim",
        text: "Our wedding cake was stunning — guests kept asking who made it. Clear communication from first message to delivery.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Guide prices — custom quote on WhatsApp",
    intro: `Final price depends on design, size, and distance from ${site.studioCity}. Message ${site.phone} with your date for an exact Velim pickup or delivery quote.`,
  },
  localSeo: {
    title: "Cakes for Velim and the wider South Goa coast",
    paragraphs: [
      "People search for a cake baker near Velim when a birthday, engagement, or family dinner is coming up — and they want someone local who actually replies. That's the gap we try to fill: clear WhatsApp communication, a real portfolio, and cakes that look like the photos we send you before bake day.",
      "We're not a high-street chain. Studio visits are by appointment (Tuesday to Sunday) so Muskan can focus on orders in progress. Delivery still runs across Goa from this same kitchen — Margao, Vasco, Colva, and North Goa towns included — with the delivery fee explained upfront in your quote.",
      "If you're unsure whether we cover your village, send your pin or landmark on WhatsApp. We'll let you know pickup vs delivery and how many days to book ahead — usually five to seven for custom work, longer for large tiers or fondant-heavy themes.",
    ],
  },
  visit: {
    title: "Visiting the Velim kitchen",
    note: "Please message before you come — it helps us have your order ready and avoid interrupting active decorating.",
    bullets: [
      site.address,
      site.hours,
      "Closed Mondays · orders on WhatsApp any day",
      "Directions on Google Maps (link below)",
    ],
    showMap: true,
    showMapsLink: true,
  },
  ui: {
    occasionsTitle: "Cakes for Velim & South Goa",
    orderLead:
      "Pickup in Velim or delivery elsewhere in Goa — same steps either way.",
    galleryTitle: "Recent creations",
    faqTitle: "Cakes in Velim — FAQs",
    nearbyTitle: "Also in South Goa",
    quickBookIntro:
      "Tap an occasion — opens WhatsApp with your Velim location pre-filled.",
    visitLabel: "Studio",
    heroImageAlt:
      "Custom celebration cake handcrafted at Sweet Bites Velim Goa",
    heroSecondaryCta: { href: "/contact", label: "Studio & map" },
    pickupCtaLabel: "Book pickup",
    ctaTitle: "Ready to order from Velim?",
    ctaLead:
      "Share your date, guest count, and a theme or photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Velim orders",
  },
  faqs: [
    {
      question: "Where exactly is the Sweet Bites kitchen in Velim?",
      answer: `Our home bakery is in Velim, South Goa. For directions and studio hours, see the map on this page or our contact page. Message ${site.phone} on WhatsApp before visiting.`,
    },
    {
      question: "Do I need an appointment for cake pickup in Velim?",
      answer:
        "Yes — pickup is by appointment Tuesday through Sunday. That way your cake is boxed and ready, and Muskan can give you a proper handover. Share your order reference or name on WhatsApp when you're on the way.",
    },
    {
      question: "Do you only serve Velim, or do you deliver elsewhere in Goa?",
      answer:
        "Velim is our kitchen base. We deliver across North and South Goa — Margao, Vasco, Panaji, Calangute, and many villages in between. Delivery cost depends on distance and is included in your WhatsApp quote.",
    },
    {
      question: "How early should I book a custom cake if I'm collecting in Velim?",
      answer: `Most designs need ${site.bookAheadDays} notice. Weekend and wedding dates fill quickly — message as soon as your date is fixed, even if your theme isn't final yet.`,
    },
    {
      question: "Can I see cake designs before ordering?",
      answer:
        "Absolutely. Browse 160+ creations on sweetbites.me — each photo is a cake Muskan has made for a Goa customer. Send a screenshot on WhatsApp with your guest count and date for a tailored quote.",
    },
    {
      question: "Do you make eggless cakes for Velim orders?",
      answer:
        "Yes, eggless sponges are available on request. Mention it when you message, along with flavour preferences, and Muskan will suggest what works best for your design.",
    },
    {
      question: "How much does a birthday cake cost in Velim?",
      answer:
        "Simple custom cakes often start around ₹1,200–₹1,800 depending on size and design. Bento boxes, fondant characters, and wedding tiers are quoted individually on WhatsApp after you share guest count and photos.",
    },
    {
      question: "Is there a cake shop in Velim I can walk into?",
      answer: `${site.name} is a home bakery — we don't keep ready-made cakes on display. Order on WhatsApp, then collect by appointment from our Velim kitchen when your cake is ready.`,
    },
    {
      question: "Do you deliver birthday cakes from Velim to Margao or the beach?",
      answer:
        "Yes. Margao, Colva, Vasco, and North Goa beaches are all common delivery routes from our Velim kitchen. Share your location pin for a delivery fee in your quote.",
    },
  ],
};
