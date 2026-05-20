import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const candolimLocationContent: RichLocationContent = {
  slug: "candolim",
  placeName: "Candolim",
  isStudio: false,
  nearbySlugs: ["calangute", "baga", "anjuna", "mapusa"],
  metaTitle: `Custom cakes in Candolim, Goa — beach delivery | ${site.name}`,
  metaDescription: `Wedding, birthday & resort cakes delivered to Candolim, North Goa. Baked in ${site.studioCity} by Muskan — WhatsApp ${site.phone}. Calangute, Baga & coast.`,
  keywords: [
    "custom cake Candolim",
    "birthday cake Candolim Goa",
    "wedding cake Candolim beach",
    "cake delivery Candolim",
    "resort cake Candolim",
    "cake delivery Calangute Candolim",
    "bento cake Candolim",
    "eggless cake Candolim",
    "villa cake Candolim",
    "Sweet Bites Candolim",
    "North Goa beach cake Candolim",
  ],
  hero: {
    badge: "Candolim beach · North Goa",
    title: "Custom cakes delivered to Candolim",
    lead: `Candolim's resorts, villas, and beachfront celebrations need cakes that travel well and look the part in photos. ${site.name} bakes in ${site.studioCity} and delivers along this stretch of coast — Candolim, Calangute, and Baga. Share your date and theme on WhatsApp; Muskan replies with a clear quote and real designs from our gallery.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "Resorts & quiet beach stays",
    title: "Cakes for Candolim — from our Velim kitchen",
    paragraphs: [
      `Candolim sits between Calangute and the quieter stretches toward Sinquerim — popular for resort stays, family holidays, and destination weddings. We don't have a storefront on the beach; every ${site.name} cake is made to order in ${site.studioCity} and delivered when it's ready for your event.`,
      "WhatsApp is the easiest way to start: send a photo from sweetbites.me, your guest count, hotel or villa location, and celebration date. Muskan confirms flavours, tier size, and a delivery window that fits the coastal route from our kitchen. Peak season weekends book up — message early if your date is fixed.",
      "Prefer to collect? Studio pickup in Velim by appointment works for many North Goa guests driving south. Delivery and pickup are both quoted upfront so you can choose what suits your travel plans.",
    ],
  },
  services: {
    title: "Cake services in Candolim — what we deliver",
    intro:
      "Made for resort birthdays, villa parties, and beach weddings — all custom from our Velim kitchen.",
    items: [
      {
        title: "Wedding cakes in Candolim",
        description:
          "Floral tiers, welcome tables, and reception cakes for beachside venues and resort lawns.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Birthday cakes in Candolim",
        description:
          "Kids' themes, bento boxes, and celebration tiers for villa and hotel parties — share age and guest count.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Resort & holiday party cakes",
        description:
          "Tropical flavours, chocolate, and themed designs for groups staying on the Candolim coast.",
        href: "/creations",
      },
      {
        title: "Eggless cakes in Candolim",
        description:
          "Eggless sponge on request — mention it on WhatsApp along with your flavour and design ideas.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Beach weddings & engagements",
      description:
        "Elegant tiers for ceremonies near Candolim — plan ahead for peak-season Saturdays.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Villa & resort birthdays",
      description:
        "Fun themes for kids and adults — delivered to your stay along the Candolim strip.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Anniversaries & dinners",
      description:
        "Smaller celebration cakes and bento styles for intimate resort evenings.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Delivery or Velim pickup",
      description:
        `Candolim delivery from ${site.studioCity}, or collect by appointment — timing on WhatsApp.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Candolim & North Goa coast delivery",
    intro:
      "We cover the beach belt from one kitchen. Send your resort, villa, or venue pin for a precise quote.",
    places: [
      {
        name: "Candolim",
        detail: "Resorts, villas & beach venues — regular route",
      },
      {
        name: "Calangute",
        detail: "Neighbouring beach — shared delivery runs",
        href: locationPath("calangute"),
      },
      {
        name: "Baga",
        detail: "Parties & nightlife strip — book early weekends",
        href: locationPath("baga"),
      },
      {
        name: "Anjuna",
        detail: "North coast events — fee by distance",
        href: locationPath("anjuna"),
      },
      {
        name: "Mapusa",
        detail: "Inland North Goa — same kitchen",
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
        text: "We've used Sweet Bites for celebrations along the North Goa coast — always creative, fresh, and delivered when promised. Great for resort events near Candolim and Calangute.",
        rating: 5,
      },
      {
        name: "Priya S.",
        location: "Panaji",
        text: "Our wedding cake was stunning — Muskan kept us updated on WhatsApp and the design matched the photos she shared before the big day.",
        rating: 5,
      },
      {
        name: "Sneha D.",
        location: "South Goa",
        text: "Eggless anniversary cake with a beautiful finish — honest quote upfront and exactly what we discussed on WhatsApp.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Guide prices — Candolim delivery quote",
    intro: `Resort season fills fast. Cake price depends on design; delivery from ${site.studioCity} to Candolim is in your WhatsApp quote — ${site.phone}.`,
  },
  localSeo: {
    title: "Custom cakes in Candolim, Goa — how to order",
    paragraphs: [
      "If you're searching for birthday cake Candolim or wedding cake delivery on the beach, you usually want a custom design and a baker who responds quickly. Sweet Bites is Muskan's home bakery in Velim — every order uses real gallery photos from sweetbites.me, not stock images.",
      "Candolim shares the same coastal delivery route as Calangute and Baga. We deliver to resorts, private villas, and event venues — timing is agreed when you book, often morning or early afternoon on celebration day depending on the run from our kitchen.",
      "There is no cake shop on Candolim beach road for walk-ins. Order on WhatsApp first; eggless sponges, fondant themes, and large wedding tiers need typical lead time of five to seven days, longer for complex work.",
    ],
  },
  visit: {
    title: "Cake delivery to Candolim",
    note: `Cakes are baked in ${site.studioCity}. Message on WhatsApp before ordering — we'll confirm Candolim delivery or Velim pickup.`,
    bullets: [
      `Kitchen: ${site.address} (appointment only)`,
      "Delivery: Candolim, Calangute, Baga & North Goa coast",
      site.hours.replace("Tue", "Studio hours Tue"),
      "Share resort or villa pin for delivery fee",
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
      question: "Do you deliver cakes to Candolim resorts and villas?",
      answer: `Yes. We deliver custom cakes to Candolim from our ${site.studioCity} kitchen. WhatsApp ${site.phone} with your hotel, resort, or villa pin for a quote and dates.`,
    },
    {
      question: "Do you deliver to Calangute if I'm staying in Candolim?",
      answer:
        "We deliver across the beach belt — Candolim, Calangute, and Baga from the same kitchen. Use your actual delivery address on WhatsApp for accurate timing and fee.",
    },
    {
      question: "How early should I book a wedding cake in Candolim?",
      answer: `Beach weddings and large tiers need more lead time than simple birthdays — often beyond ${site.bookAheadDays}. Message as soon as your Candolim date is set, especially Dec–Feb season.`,
    },
    {
      question: "How much does cake delivery to Candolim cost?",
      answer:
        "Delivery fee depends on distance from Velim and is included in your WhatsApp quote before you confirm. You'll see cake price, size, and delivery together.",
    },
    {
      question: "Can I order a birthday cake for a Candolim villa?",
      answer:
        "Yes — villa parties are common. Send date, theme, guest count, and your location pin. We'll suggest sizes and designs from the gallery.",
    },
    {
      question: "Do you make eggless cakes for Candolim?",
      answer:
        "Yes, eggless sponge is available on request. Mention it when you message with flavour and design preferences.",
    },
    {
      question: "Can I pick up my cake instead of Candolim delivery?",
      answer: `Yes. Collect from our ${site.studioCity} studio by appointment (Tuesday–Sunday). Message us to schedule if pickup suits you better.`,
    },
    {
      question: "Is there a cake shop in Candolim?",
      answer: `${site.name} is a home bakery in ${site.studioCity}. We don't sell ready-made cakes on the beach — order on WhatsApp first, then delivery or pickup.`,
    },
    {
      question: "What cakes work best for Candolim beach celebrations?",
      answer:
        "Wedding floral tiers, tropical birthday themes, bento boxes, chocolate and buttercream designs for resort groups. Send a gallery screenshot on WhatsApp to start.",
    },
  ],
  ui: {
    occasionsTitle: "Cakes for Candolim & the coast",
    orderLead:
      "Candolim delivery or Velim pickup — same four steps from WhatsApp to celebration.",
    galleryTitle: "Cakes we deliver to Candolim",
    faqTitle: "Candolim cake delivery — FAQs",
    nearbyTitle: "More North Goa beaches",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Candolim, Goa in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom wedding and birthday cake delivered to Candolim beach North Goa",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Candolim",
    ctaTitle: "Ready to order cake delivery in Candolim?",
    ctaLead:
      "Send your date, resort or villa area, guest count, and a theme or gallery photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Candolim orders",
  },
};
