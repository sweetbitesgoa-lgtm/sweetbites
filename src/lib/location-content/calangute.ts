import { site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import type { RichLocationContent } from "@/lib/location-content/types";

export const calanguteLocationContent: RichLocationContent = {
  slug: "calangute",
  placeName: "Calangute",
  isStudio: false,
  nearbySlugs: ["candolim", "baga", "anjuna", "mapusa"],
  metaTitle: `Beach & custom cakes in Calangute, Goa — delivery | ${site.name}`,
  metaDescription: `Wedding, birthday & resort cakes delivered to Calangute, Candolim & Baga. Baked in ${site.studioCity} by Muskan — WhatsApp ${site.phone} for North Goa beach celebrations.`,
  keywords: [
    "custom cake Calangute",
    "birthday cake Calangute Goa",
    "wedding cake Calangute beach",
    "cake delivery Calangute",
    "cake delivery Candolim",
    "resort cake Calangute",
    "bento cake Calangute",
    "eggless cake Calangute",
    "beach party cake Goa",
    "Sweet Bites Calangute",
    "North Goa beach cake",
  ],
  hero: {
    badge: "Beach belt · North Goa delivery",
    title: "Custom cakes for Calangute & the coast",
    lead: `Resort birthdays, beach weddings, and villa parties in Calangute deserve cakes that photograph well and taste fresh. ${site.name} bakes in ${site.studioCity} and delivers along the North Goa coast — Calangute, Candolim, and Baga included. Message on WhatsApp with your date and theme; Muskan sends a quote and real gallery photos.`,
    stats: [
      { value: `${site.stats.celebrations}+`, label: "Goa celebrations" },
      { value: String(site.stats.rating), label: "avg. rating" },
      { value: site.bookAheadDays, label: "book ahead" },
    ],
  },
  story: {
    eyebrow: "North Goa's beach strip",
    title: "Beach cakes for Calangute — baked in Velim",
    paragraphs: [
      `Calangute and the nearby coast see everything from intimate villa birthdays to larger wedding celebrations. We don't run a shop on the beach road — every ${site.name} cake is made to order in Muskan's kitchen in ${site.studioCity}, then delivered carefully so it arrives ready for your event.`,
      "Season matters here: December through February and long weekends fill quickly. Message early with your hotel, villa, or venue area, guest count, and a screenshot from sweetbites.me. We'll confirm flavours, size, delivery timing, and fee in one WhatsApp quote.",
      "Many beach guests also collect from our Velim studio by appointment if they're driving through South Goa — same designs, same quality. Whether you deliver or pickup, you work directly with Muskan on the details.",
    ],
  },
  services: {
    title: "Cake services in Calangute — what we deliver",
    intro:
      "Popular for the beach belt — weddings, resorts, and family holidays. All custom, nothing pre-made.",
    items: [
      {
        title: "Wedding & beach celebration cakes",
        description:
          "Floral tiers, welcome tables, and elegant buttercream for resorts and venues along Calangute.",
        href: "/creations?occasion=wedding",
      },
      {
        title: "Birthday cakes in Calangute",
        description:
          "Kids' themes, bento boxes, and party tiers for villa and hotel celebrations — share age and guest count.",
        href: "/creations?occasion=birthday",
      },
      {
        title: "Resort & villa party cakes",
        description:
          "Chocolate, tropical flavours, and themed designs for groups staying on the North Goa coast.",
        href: "/creations",
      },
      {
        title: "Eggless cakes for Calangute",
        description:
          "Eggless sponge on request — mention it on WhatsApp when you enquire about flavours and design.",
        href: "/order",
      },
    ],
  },
  occasions: [
    {
      title: "Beach weddings & engagements",
      description:
        "Tiers and table cakes for ceremonies and receptions — book well ahead for peak season weekends.",
      href: "/creations?occasion=wedding",
      label: "Wedding cakes",
    },
    {
      title: "Birthdays on the coast",
      description:
        "Colourful themes for kids and adults — delivered to your villa, hotel, or beachside venue.",
      href: "/creations?occasion=birthday",
      label: "Birthday gallery",
    },
    {
      title: "Welcome & anniversary cakes",
      description:
        "Floral finishes and personalised toppers for intimate gatherings and resort dinners.",
      href: "/creations",
      label: "Browse creations",
    },
    {
      title: "Delivery or Velim pickup",
      description:
        `Coastal delivery from ${site.studioCity}, or studio pickup by appointment — fee on WhatsApp.`,
      href: "/order",
      label: "How to order",
    },
  ],
  serviceArea: {
    title: "Calangute coast & North Goa delivery",
    intro:
      "We deliver along the beach belt from one kitchen. Share your hotel, resort, or villa pin for an accurate quote.",
    places: [
      {
        name: "Calangute",
        detail: "Beach road, resorts & villas — core delivery area",
      },
      {
        name: "Candolim",
        detail: "Next beach south — frequent weekend routes",
        href: locationPath("candolim"),
      },
      {
        name: "Baga",
        detail: "Parties and resort events — book early in season",
        href: locationPath("baga"),
      },
      {
        name: "Anjuna & Vagator",
        detail: "North coast events — quote by distance",
        href: locationPath("anjuna"),
      },
      {
        name: "Mapusa",
        detail: "Market town & inland villages",
        href: locationPath("mapusa"),
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
        text: "Sweet Bites is our go-to for office and resort celebrations along the coast. Professional, creative, and always fresh — delivery was right on time for our event in Calangute.",
        rating: 5,
      },
      {
        name: "Priya S.",
        location: "Panaji",
        text: "Muskan created a stunning wedding cake — guests couldn't stop taking photos. Every bite matched how beautiful it looked.",
        rating: 5,
      },
      {
        name: "Arjun K.",
        location: "Taleigao",
        text: "Clear WhatsApp communication and fair pricing. The cake looked exactly like the gallery photo Muskan shared before bake day.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Guide prices — Calangute delivery quote",
    intro: `Beach-season dates book fast. Cake price depends on design and size; delivery from ${site.studioCity} to Calangute is confirmed on WhatsApp — ${site.phone}.`,
  },
  localSeo: {
    title: "Custom & wedding cakes in Calangute, Goa",
    paragraphs: [
      "Searches like “wedding cake Calangute” or “birthday cake delivery Candolim” often come from visitors and locals planning something special on the beach. Sweet Bites is a home bakery in Velim — Muskan designs each cake after you share your brief, with real photos from sweetbites.me so you know what you're ordering.",
      "We deliver to Calangute, Candolim, Baga, and other North Goa coastal areas from the same kitchen. Peak tourist season and Saturday weddings need extra lead time — usually five to seven days for custom work, longer for large tiers or detailed fondant.",
      "There is no beachfront cake counter. Order on WhatsApp first with your venue or villa location; we'll confirm delivery window and fee before you commit.",
    ],
  },
  visit: {
    title: "Cake delivery to Calangute",
    note: `Cakes are baked in ${site.studioCity}. Message on WhatsApp before ordering — we'll confirm coastal delivery or studio pickup.`,
    bullets: [
      `Kitchen: ${site.address} (appointment only)`,
      "Delivery: Calangute, Candolim, Baga & North Goa coast",
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
      question: "Do you deliver cakes to Calangute beach and resorts?",
      answer: `Yes. We deliver custom cakes to Calangute, including hotels, villas, and venues along the beach belt. WhatsApp ${site.phone} with your location pin for a quote and available dates.`,
    },
    {
      question: "Do you deliver to Candolim and Baga from the same kitchen?",
      answer:
        "Yes. Candolim, Baga, and Calangute are all on our North Goa coastal delivery routes from Velim. Share your exact address or landmark for timing and fee.",
    },
    {
      question: "How early should I book a wedding cake in Calangute?",
      answer: `Wedding and large tier cakes need more lead time than simple birthdays — often longer than ${site.bookAheadDays}. Message as soon as your beach date is confirmed, especially in peak season.`,
    },
    {
      question: "How much does cake delivery to Calangute cost?",
      answer:
        "Delivery fee depends on distance from our Velim kitchen and is included in your WhatsApp quote before you confirm. No hidden charges — size, design, and delivery together.",
    },
    {
      question: "Can I order a birthday cake for a villa in Calangute?",
      answer:
        "Absolutely. Villa and private home parties are common — send guest count, date, theme, and your pin on WhatsApp. We'll suggest sizes and designs from the gallery.",
    },
    {
      question: "Do you make eggless cakes for Calangute orders?",
      answer:
        "Yes, eggless sponge is available on request. Mention it when you message, along with flavour and design preferences.",
    },
    {
      question: "Can I pick up instead of beach delivery?",
      answer: `Yes. Collect from our ${site.studioCity} studio by appointment (Tuesday–Sunday). Some coastal customers pick up when travelling south — message us to schedule.`,
    },
    {
      question: "Is there a cake shop on Calangute beach?",
      answer: `${site.name} is a home bakery in ${site.studioCity}. We don't sell ready-made cakes on the beach road — order on WhatsApp first, then we deliver or arrange pickup.`,
    },
    {
      question: "What cake styles suit beach celebrations in Calangute?",
      answer:
        "Floral wedding tiers, tropical and chocolate flavours, kids' birthday themes, bento boxes, and welcome cakes for resort events. Browse sweetbites.me and send what you like on WhatsApp.",
    },
  ],
  ui: {
    occasionsTitle: "Cakes for Calangute & the North Goa coast",
    orderLead:
      "Beach delivery or Velim pickup — same simple steps from WhatsApp to your celebration.",
    galleryTitle: "Cakes we deliver to Calangute",
    faqTitle: "Calangute & beach cake delivery — FAQs",
    nearbyTitle: "More North Goa beaches",
    quickBookIntro:
      "Tap an occasion — WhatsApp opens with Calangute, Goa in your message.",
    visitLabel: "Delivery",
    heroImageAlt:
      "Custom wedding and birthday cake delivered to Calangute beach Goa by Sweet Bites",
    heroSecondaryCta: { href: "/order", label: "How to order" },
    pickupCtaLabel: "Order for Calangute",
    ctaTitle: "Ready to order cake delivery in Calangute?",
    ctaLead:
      "Send your date, hotel or villa area, guest count, and a theme or gallery photo — Muskan usually replies within a few hours on studio days.",
    stickyWhatsappLabel: "WhatsApp — Calangute orders",
  },
};
