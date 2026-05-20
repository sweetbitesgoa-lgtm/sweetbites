import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const pondaLocationContent: RichLocationContent = {
  slug: "ponda",
  placeName: "Ponda",
  isStudio: false,
  nearbySlugs: ["margao", "velim", "vasco", "colva"],
  metaTitle: `Custom cakes in Ponda, Goa — delivery from ${site.name}`,
  metaDescription: `Order birthday, wedding & bento cakes in Ponda, inland South Goa. Handcrafted in ${site.studioCity}, delivered by Muskan — WhatsApp ${site.phone} for a quote. Margao & Velim nearby.`,
  keywords: [
    "custom cake Ponda",
    "birthday cake Ponda Goa",
    "cake delivery Ponda",
    "wedding cake Ponda",
    "bento cake Ponda",
    "eggless cake Ponda",
    "order cake Ponda",
    "cake baker Ponda South Goa",
    "Sweet Bites Ponda",
    "inland Goa cake delivery",
    "temple town cake Ponda",
  ],
  hero: {
    badge: "Inland South Goa · Baked in Velim",
    title: "Custom cakes delivered to Ponda",
    lead: `Family feasts, birthdays, and temple-town celebrations in Ponda deserve a cake made to your brief — not a generic shop sponge. ${site.name} bakes in ${site.studioCity} and delivers across inland and coastal South Goa, including Ponda, Margao, and Vasco. Message on WhatsApp with your date and theme; Muskan replies with a clear quote and photos from our real gallery.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "Inland South Goa",
    title: "Fresh custom cakes for Ponda — from our Velim kitchen",
    paragraphs: [
      `Ponda sits inland from the coast — busy markets, temple festivals, and family gatherings that often need a proper custom cake. We don't have a storefront in Ponda; every ${site.name} order is baked in Muskan's kitchen in ${site.studioCity}, then delivered to your home or venue when it's ready.`,
      "Ponda is a bit farther from our kitchen than Margao or Vasco, so we confirm delivery timing and fee on WhatsApp before you book. Many Ponda customers also collect from Velim by appointment when they're already heading toward South Goa's coast — we'll quote both options so you can choose.",
      "The process stays simple: browse sweetbites.me, send what you like on WhatsApp with your celebration date and guest count, and we'll confirm size, flavours, eggless if needed, and how the cake reaches you in Ponda.",
    ],
  },
  services: {
    title: "Cake services in Ponda — what we make to order",
    intro:
      "Custom cakes for Ponda and inland South Goa — birthdays, weddings, and feast-day celebrations.",
    items: [
      {
        title: "Birthday cakes in Ponda",
        description:
          "Theme cakes, bento boxes, and tiered sponges for kids and adults — share age, character, and guest count.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Wedding & feast celebration cakes",
        description:
          "Floral tiers, welcome tables, and traditional family feast designs — book early for weekend dates.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Anniversary & family milestones",
        description:
          "Buttercream, chocolate finishes, and personalised toppers for home gatherings.",
        href: "/creations",
      },
      {
        title: "Eggless cakes in Ponda",
        description:
          "Eggless sponge on request — mention it on WhatsApp with your preferred flavours and design.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Kids' & family birthdays",
      description:
        "Colourful themes and bento styles for Ponda house parties — delivered or collected from Velim.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Weddings & engagements",
      description:
        "Multi-tier and table cakes for venues around Ponda and toward Margao — planned with clear timelines.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Festival & feast gatherings",
      description:
        "Larger sponges and decorated tiers for family feasts and community celebrations inland.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Delivery or Velim pickup",
      description:
        `Delivery to Ponda from ${site.studioCity}, or collect by appointment — fee confirmed on WhatsApp.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Ponda & South Goa delivery from Velim",
    intro:
      "We deliver across South Goa from one kitchen. Send your pin or landmark in Ponda — we'll confirm timing and delivery fee.",
    places: [
      {
        name: "Ponda",
        detail: "Town, markets & inland neighbourhoods",
      },
      {
        name: "Margao",
        detail: "South Goa's main hub — frequent delivery route",
        href: locationPath("margao"),
      },
      {
        name: "Vasco da Gama",
        detail: "Port city & airport corridor",
        href: locationPath("vasco"),
      },
      {
        name: "Colva & Benaulim",
        detail: "Coastal parties and resort events",
        href: locationPath("colva"),
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
    title: "Guide prices — Ponda delivery quote",
    intro: `Cake price depends on design and size; delivery from ${site.studioCity} to Ponda is confirmed on WhatsApp because inland routes are farther than coastal Margao. Message ${site.phone} with your date and pin.`,
  },
  localSeo: {
    title: "Custom cakes in Ponda, Goa",
    paragraphs: [
      "Searches like birthday cake Ponda or cake delivery inland Goa usually mean someone wants a custom design and a baker who replies on WhatsApp — not a shelf cake from a generic shop. Sweet Bites is a home bakery in Velim; Muskan makes each order from real photos on sweetbites.me.",
      "Ponda is South Goa's inland commercial centre — temple festivals, family feasts, and home birthdays are common reasons to order. We deliver to Ponda from Velim and agree a delivery window for celebration day, usually morning or afternoon.",
      "There is no walk-in Sweet Bites counter in Ponda. Order on WhatsApp first; allow five to seven days for most custom designs, longer for wedding tiers or detailed fondant work. Pickup in Velim remains an option if delivery timing is tight.",
    ],
  },
  visit: {
    title: "Cake delivery to Ponda",
    note: `All cakes are baked in ${site.studioCity}. Message on WhatsApp before ordering — we'll confirm Ponda delivery fee and timing, or studio pickup.`,
    bullets: [
      `Kitchen: ${site.address} (appointment only)`,
      "Delivery: Ponda, Margao, Vasco, Colva & all Goa",
      site.hours.replace("Tue", "Studio hours Tue"),
      "Share your Ponda pin or landmark for delivery quote",
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
      question: "Do you deliver cakes to Ponda, Goa?",
      answer: `Yes. We deliver custom cakes to Ponda from our ${site.studioCity} kitchen. WhatsApp ${site.phone} with your address or pin — we'll confirm availability, delivery fee, and dates.`,
    },
    {
      question: "How much does cake delivery to Ponda cost?",
      answer:
        "Ponda is inland from our Velim kitchen, so the delivery fee is usually higher than for Margao or Vasco. We include the exact amount in your WhatsApp quote before you confirm — no surprises.",
    },
    {
      question: "Is pickup from Velim easier than Ponda delivery?",
      answer: `Many inland customers collect from our ${site.studioCity} studio by appointment when they're travelling toward the coast. Message us to compare pickup vs delivery to your Ponda address.`,
    },
    {
      question: "How early should I book a cake for Ponda?",
      answer: `Most custom designs need ${site.bookAheadDays} lead time. Weekend feasts and birthdays fill quickly — message as soon as your Ponda celebration date is fixed.`,
    },
    {
      question: "Do you make eggless cakes for Ponda orders?",
      answer:
        "Yes, eggless sponge is available on request. Mention it when you message with flavour and design preferences.",
    },
    {
      question: "Do you deliver wedding cakes to Ponda venues?",
      answer:
        "Yes — share your venue, date, guest count, and any theme photos on WhatsApp. Wedding tiers need extra lead time; book as early as possible.",
    },
    {
      question: "Is there a cake shop in Ponda I can visit?",
      answer: `${site.name} is a home bakery in ${site.studioCity}. We don't keep ready-made cakes in a Ponda storefront — order on WhatsApp first, then delivery or Velim pickup.`,
    },
    {
      question: "Do you deliver from Ponda to Margao or the coast?",
      answer:
        "We deliver across South Goa from one kitchen — Ponda, Margao, Vasco, Colva, and other areas. Your quote is based on where the cake is delivered on celebration day.",
    },
    {
      question: "Can you deliver for temple festivals and family feasts in Ponda?",
      answer:
        "Yes — share your date, approximate guest count, and whether you need a single large sponge or a decorated tier. We'll suggest sizes and confirm delivery timing on WhatsApp.",
    },
  ],
  ui: {
    occasionsTitle: "Cakes for Ponda & inland South Goa",
    orderLead:
      "Ponda delivery or Velim pickup — same four steps from WhatsApp to your celebration.",
    galleryTitle: "Cakes we deliver to Ponda",
    faqTitle: "Ponda cake delivery — FAQs",
    nearbyTitle: "More South Goa areas",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Ponda, Goa in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom birthday cake delivered to Ponda inland South Goa by Sweet Bites",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Ponda",
    ctaTitle: "Ready to order cake delivery in Ponda?",
    ctaLead:
      "Send your date, Ponda area or pin, guest count, and a theme or gallery photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Ponda orders",
  },
};
