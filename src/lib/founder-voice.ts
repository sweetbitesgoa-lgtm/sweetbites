import { site } from "@/lib/content";

/** Muskan-first copy — human, CEO-led, conversion-friendly. */
export const muskanFounder = {
  badge: "From Muskan",
  role: `Founder & head baker · ${site.name}`,
  signature: "— Muskan",
  signatureTitle: "Founder, Sweet Bites Goa",

  homepageQuote:
    "I don't run a cake factory. I run one kitchen, one WhatsApp, and one promise: your celebration deserves honesty before it deserves frosting.",

  headline: "I'll tell you the truth about your date — then bake like your family is in the room.",
  lead: `Every cake at ${site.name} still passes through my hands in ${site.studioCity}. If your idea is messy, send it messy. If your timeline is tight, ask straight. I'd rather say no to a design than deliver something I'm not proud of.`,

  letter: [
    `Hi — I'm Muskan. ${site.name} started the way most good things in Goa start: a cousin's birthday, a neighbour who told a neighbour, and a kitchen that smelled like vanilla at midnight.`,
    "Today there are reels, a gallery, and families from Panaji to Calangute — but the job hasn't changed. You message me. I read it like a person, not a ticket. I tell you what's possible on your date, what will survive the heat, and what it will actually cost before you pay a rupee.",
    "I'm not trying to be the biggest bakery in Goa. I'm trying to be the one you text again when your daughter turns seven, when your sister gets engaged, when your office finally hits that milestone. That's the business I'm building — one honest conversation at a time.",
  ],

  promises: [
    {
      icon: "💬",
      title: "You talk to me",
      body: "Not a call centre. Not a bot. Muskan on WhatsApp — the same person who pipes your cake.",
    },
    {
      icon: "📋",
      title: "Price before the oven",
      body: "Size, flavour, eggless, delivery — quoted clearly on WhatsApp. No surprise total at pickup.",
    },
    {
      icon: "🎂",
      title: "Real photos only",
      body: "Gallery & case studies are cakes we made for Goa families — ask for something similar anytime.",
    },
    {
      icon: "🌴",
      title: "Built for Goa heat",
      body: "Buttercream timing, delivery boxes, shaded tables — designed for how celebrations actually run here.",
    },
  ] as const,

  orderHook: {
    eyebrow: "Muskan's promise on every order",
    title: "No checkout. No guesswork. Just a real reply.",
    body: `Send your date, town, and a photo — even a screenshot is enough. I'll tell you yes, no, or "let's simplify this" before you confirm. That's how ${site.bookAheadDays} lead times actually protect quality, not delay you for fun.`,
  },

  contactHook:
    "You don't need a perfect brief. You need a real person who answers. That's me — message anytime; I reply during studio hours.",

  cta: {
    headline: "Your celebration deserves a baker who shows up",
    body: `Share the date, the doubt, the half-formed idea. I'll meet you on WhatsApp at ${site.phone} — with warmth, clarity, and a quote you can trust.`,
    primary: "Message Muskan",
    secondary: "See how to book",
  },
} as const;
