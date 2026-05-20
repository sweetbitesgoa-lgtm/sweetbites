import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const margaoLocationContent: RichLocationContent = {
  slug: "margao",
  placeName: "Margao",
  isStudio: false,
  nearbySlugs: ["velim", "vasco", "colva", "ponda"],
  metaTitle: `Custom cakes in Margao, Goa — delivery from ${site.name}`,
  metaDescription: `Order birthday, wedding & bento cakes in Margao, South Goa. Handcrafted in ${site.studioCity}, delivered by Muskan — WhatsApp ${site.phone} for a quote. Also Vasco & Colva.`,
  keywords: [
    "custom cake Margao",
    "custom cake Madgaon",
    "birthday cake Margao Goa",
    "birthday cake Madgaon",
    "cake delivery Margao",
    "cake delivery Madgaon",
    "wedding cake Margao",
    "bento cake Margao",
    "eggless cake Margao",
    "order cake Margao",
    "cake baker Margao South Goa",
    "Sweet Bites Margao",
    "Margao Madgaon cake",
  ],
  hero: {
    badge: "South Goa delivery · Baked in Velim",
    title: "Custom cakes delivered to Margao",
    lead: `Margao celebrations deserve cakes that look like the photos — not a generic sponge from a shelf. ${site.name} bakes in ${site.studioCity} and delivers across South Goa, including Margao, Vasco, and Colva. Message on WhatsApp with your date and theme; Muskan replies with a clear quote and ideas from our real gallery.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "South Goa's commercial hub",
    title: "Fresh custom cakes for Margao — from our Velim kitchen",
    paragraphs: [
      `Many of our South Goa orders land in Margao — birthday parties, church feasts, weddings, and office celebrations. We bake everything in ${site.studioCity}, a short drive away, then deliver to your home or venue when the cake is ready.`,
      "There's no Sweet Bites storefront in Margao. That's intentional: Muskan handles fewer orders per day so each cake gets proper time for design, baking, and finishing. You browse sweetbites.me, send what you like on WhatsApp, and we confirm size, flavours, and delivery slot.",
      "Some Margao customers collect from our Velim studio by appointment instead — useful if you're heading south anyway. Delivery and pickup are both quoted upfront so you can choose what fits your day.",
    ],
  },
  services: {
    title: "Cake services in Margao — what we make to order",
    intro:
      "Every cake is custom for your date and guest list — popular requests from Margao and nearby South Goa towns.",
    items: [
      {
        title: "Birthday cakes in Margao",
        description:
          "Superhero themes, bento boxes, and tiered sponges for kids and adults — share age, character, and guest count.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Wedding & church celebration cakes",
        description:
          "Floral tiers, welcome tables, and traditional feast cakes — book early for Saturday dates in Margao.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Anniversary & family milestones",
        description:
          "Buttercream, chocolate finishes, and personalised toppers for home gatherings and small venues.",
        href: "/creations",
      },
      {
        title: "Eggless cakes in Margao",
        description:
          "Eggless sponge on request — mention it on WhatsApp along with your preferred flavours and design.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Kids' & family birthdays",
      description:
        "Character cakes and colourful tiers for Margao house parties — delivered ready for your celebration.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Weddings & engagements",
      description:
        "Multi-tier and table cakes for venues around Margao, Fatorda, and Navelim — planned with clear timelines.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Bento & intimate cakes",
      description:
        "Small, personal designs for couples, surprises, and office treats — ideal when you want something special, not huge.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Delivery or Velim pickup",
      description:
        `Doorstep delivery in Margao, or collect from ${site.studioCity} — fee and timing confirmed on WhatsApp.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Margao & South Goa delivery from Velim",
    intro:
      "We deliver from one kitchen across South Goa. Send your pin if you're in Margao city, Fatorda, or nearby villages.",
    places: [
      {
        name: "Margao",
        detail: "City, markets & residential areas — regular delivery route",
      },
      {
        name: "Vasco",
        detail: "Port town & surrounding areas",
        href: locationPath("vasco"),
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
        detail: "Capital & North Goa — same kitchen, route in quote",
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
        text: "Ordered a superhero cake for my son's 7th birthday. The details were incredible and delivery was right on time.",
        rating: 5,
      },
      {
        name: "Sneha D.",
        location: "South Goa",
        text: "We wanted an eggless anniversary cake — Muskan sent design options on WhatsApp and the finished cake matched the photo she shared before bake day.",
        rating: 5,
      },
      {
        name: "Neha T.",
        location: "Margao · pickup from Velim",
        text: "Collected our cake from the Velim kitchen on the way to the party — smooth handover and exactly what we discussed on WhatsApp.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Guide prices — Margao delivery quote",
    intro: `Cake price depends on design and size; delivery from ${site.studioCity} to Margao is confirmed on WhatsApp. Message ${site.phone} with your date and area.`,
  },
  localSeo: {
    title: "Custom cakes in Margao, Goa — how to order",
    paragraphs: [
      "Searches like “birthday cake Margao” or “cake delivery Madgaon” usually mean you need a custom design and a baker who replies. Sweet Bites is Muskan's home bakery in Velim — we deliver to Margao regularly and use only real photos from sweetbites.me in our quotes.",
      "Margao (sometimes written Madgaon) is South Goa's main town; we serve the city centre, Fatorda, Navelim, and surrounding villages. Delivery windows are agreed when you book — often morning or early afternoon on celebration day, depending on the route from our kitchen.",
      "We're not a chain with a display counter. Eggless sponges, fondant characters, wedding tiers, and rush dates are all discussed honestly on WhatsApp — typically five to seven days ahead for custom work, longer for large wedding cakes.",
    ],
  },
  visit: {
    title: "Cake delivery to Margao",
    note: `Cakes are baked in ${site.studioCity}, South Goa. Message on WhatsApp before ordering — we'll confirm Margao delivery or studio pickup.`,
    bullets: [
      `Kitchen: ${site.address} (appointment only)`,
      "Delivery: Margao, Vasco, Colva, Ponda & all Goa",
      site.hours.replace("Tue", "Studio hours Tue"),
      "Share your Margao pin or landmark for delivery fee",
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
      question: "Do you deliver cakes to Margao?",
      answer: `Yes. We deliver custom cakes to Margao from our ${site.studioCity} kitchen. WhatsApp ${site.phone} with your address or location pin for a delivery quote and available dates.`,
    },
    {
      question: "Is Margao the same as Madgaon for cake orders?",
      answer:
        "Yes — Margao and Madgaon refer to the same area. Use whichever name matches your address on maps; we'll deliver to your location in South Goa.",
    },
    {
      question: "How much does cake delivery to Margao cost?",
      answer:
        "Delivery fee depends on distance from our Velim kitchen and is included in your WhatsApp quote before you pay. You'll see cake price, size, and delivery together — no surprise charges.",
    },
    {
      question: "How early should I book a birthday cake in Margao?",
      answer: `Most custom designs need ${site.bookAheadDays} lead time. Saturday birthdays and wedding weekends in Margao fill quickly — message as soon as your date is set.`,
    },
    {
      question: "Can I pick up my cake instead of Margao delivery?",
      answer: `Yes. Collect from our ${site.studioCity} studio by appointment (Tuesday–Sunday). Many Margao customers pick up when driving through — message us to schedule a handover time.`,
    },
    {
      question: "Do you make eggless cakes for Margao orders?",
      answer:
        "Yes, eggless sponge is available on request. Mention it when you message, with flavour and design preferences, and Muskan will suggest what works best.",
    },
    {
      question: "What cake types are popular in Margao?",
      answer:
        "Kids' birthday themes, wedding and feast cakes, bento boxes, and chocolate or buttercream designs for family and office events. Send a gallery screenshot to start your quote.",
    },
    {
      question: "Is there a cake shop in Margao I can walk into?",
      answer: `${site.name} is a home bakery in ${site.studioCity}. We don't keep ready-made cakes in a Margao shop — order on WhatsApp first, then we deliver or arrange pickup.`,
    },
    {
      question: "Do you deliver from Margao to Vasco or Colva?",
      answer:
        "We deliver to Margao, Vasco, Colva, and across South and North Goa from the same Velim kitchen. Share your exact delivery location for timing and fee.",
    },
  ],
  ui: {
    occasionsTitle: "Cakes for Margao & South Goa",
    orderLead:
      "Delivery in Margao or pickup in Velim — same four steps from WhatsApp to your celebration.",
    galleryTitle: "Cakes we deliver to Margao",
    faqTitle: "Margao cake delivery — FAQs",
    nearbyTitle: "More South Goa areas",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Margao, Goa in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom superhero birthday cake delivered in Margao South Goa by Sweet Bites",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Margao",
    ctaTitle: "Ready to order cake delivery in Margao?",
    ctaLead:
      "Send your date, Margao area or landmark, guest count, and a theme or gallery photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Margao orders",
  },
};
