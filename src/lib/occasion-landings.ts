import { site } from "@/lib/content";
import { filterCreations, type Creation } from "@/lib/catalog";
import type { BookingPathId } from "@/lib/order-booking";
import { SITE_URL } from "@/lib/seo";

export type OccasionLanding = {
  slug: string;
  focusKeyword: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  catalogFilter: { occasion?: string; format?: string };
  bookingPathId?: BookingPathId;
  hero: {
    badge: string;
    title: string;
    lead: string;
    image: string;
    imageAlt: string;
  };
  intro: string[];
  highlights: { title: string; text: string }[];
  ideas: { title: string; description: string; href: string; label: string }[];
  relatedLinks: { href: string; label: string; description?: string }[];
  faqs: { question: string; answer: string }[];
  galleryTitle: string;
  galleryLead: string;
  ctaTitle: string;
  ctaLead: string;
};

const landings: OccasionLanding[] = [
  {
    slug: "wedding-cakes-goa",
    focusKeyword: "wedding cake Goa",
    metaTitle: "Wedding cakes in Goa — custom tiers & delivery",
    metaDescription: `Order wedding cakes in Goa from ${site.name} — tiered reception designs, welcome tables, eggless options. Baked in ${site.studioCity}, delivered across North & South Goa. WhatsApp ${site.phone}.`,
    keywords: [
      "wedding cake Goa",
      "wedding cake delivery Goa",
      "custom wedding cake Muskan",
      "reception cake South Goa",
      "tiered wedding cake Calangute",
    ],
    catalogFilter: { occasion: "wedding" },
    bookingPathId: "wedding",
    hero: {
      badge: "Weddings & receptions",
      title: "Wedding cakes in Goa",
      lead: `From intimate courthouse celebrations to full reception tiers — Muskan designs and delivers wedding cakes across Goa from our ${site.studioCity} kitchen. Share your date, guest count, and venue on WhatsApp for a clear quote.`,
      image: "/images/wedding-cake/659772208_18092845286170730_8159590204106277210_n..webp",
      imageAlt: "Wedding cake Goa — tiered white reception cake by Sweet Bites",
    },
    intro: [
      `A **wedding cake Goa** families trust needs more than white frosting — it needs stable tiers, a delivery plan for your venue, and honest talk about Goan heat. Every design on sweetbites.me is a real cake Muskan has baked, not a stock photo.`,
      `We coordinate with planners and families in Panaji, beach resorts in Calangute and Candolim, and home receptions in Margao. Browse the gallery, send references, and we reply on WhatsApp with sizes, flavours, and delivery timing.`,
    ],
    highlights: [
      {
        title: "Multi-tier structure",
        text: "Central dowelling, chilled transport, and venue handover notes — see our wedding case study for how we work.",
      },
      {
        title: "Flavour pairing",
        text: "Vanilla, chocolate, mango in season, and eggless sponges for mixed families.",
      },
      {
        title: "Lead time",
        text: `Book ${site.bookAheadDays} minimum; complex fondant and tall tiers need longer — especially peak wedding season.`,
      },
    ],
    ideas: [
      {
        title: "Reception tier cake",
        description: "Classic white tiers with gold or floral accents for 80–150 guests.",
        href: "/creations/wedding-cake",
        label: "Wedding gallery",
      },
      {
        title: "Welcome table cake",
        description: "Smaller showpiece for guest arrivals — pairs with a main tier later.",
        href: "/creations?occasion=wedding",
        label: "All wedding designs",
      },
      {
        title: "Haldi ceremony",
        description: "Yellow marigold styles for pre-wedding functions — often booked alongside reception cake.",
        href: "/haldi-cakes-goa",
        label: "Haldi cakes Goa",
      },
    ],
    relatedLinks: [
      {
        href: "/blog/wedding-cake-delivery-goa-checklist",
        label: "Wedding delivery checklist",
        description: "What to send before your date",
      },
      {
        href: "/case-studies/wedding-cake-goa-case-study",
        label: "Wedding case study",
        description: "Three tiers, venue changes & delivery",
      },
      {
        href: "/locations",
        label: "Delivery areas",
        description: "Towns we serve across Goa",
      },
    ],
    faqs: [
      {
        question: "How far in advance should we book a wedding cake in Goa?",
        answer: `Most wedding cakes need 2–3 weeks; peak Saturdays fill earlier. Message ${site.phone} with your date — Muskan will say honestly if the oven schedule has space.`,
      },
      {
        question: "Do you deliver wedding cakes to beach resorts?",
        answer:
          "Yes — North and South Goa resorts and halls. Share venue photos and timing on WhatsApp; delivery fee depends on distance from Velim.",
      },
      {
        question: "Can we have eggless wedding cake?",
        answer:
          "Yes — mention eggless on line one. Muskan suggests flavours that hold up for your guest count and venue.",
      },
    ],
    galleryTitle: "Wedding cake inspiration",
    galleryLead: "Real reception and celebration cakes from our Goa gallery.",
    ctaTitle: "Plan your wedding cake on WhatsApp",
    ctaLead: "Send date, guest count, venue town, and photos you love from our gallery.",
  },
  {
    slug: "birthday-cakes-goa",
    focusKeyword: "birthday cake Goa",
    metaTitle: "Birthday cakes in Goa — custom designs & delivery",
    metaDescription: `Order birthday cakes in Goa — buttercream, themed toppers, eggless sponges. ${site.name} in ${site.studioCity} delivers to Margao, Panaji, beaches & more. WhatsApp ${site.phone}.`,
    keywords: [
      "birthday cake Goa",
      "custom birthday cake Goa",
      "birthday cake delivery Margao",
      "order birthday cake WhatsApp",
      "adult birthday cake Goa",
    ],
    catalogFilter: { occasion: "birthday" },
    bookingPathId: "birthday",
    hero: {
      badge: "Birthdays & milestones",
      title: "Birthday cakes in Goa",
      lead: "Milestone birthdays, surprise parties, and office celebrations — Muskan builds custom birthday cakes with real gallery photos, clear WhatsApp quotes, and delivery across Goa.",
      image:
        "/images/golden-cream-birthday-cake/624880407_18052417967703847_5140043511432543654_n..webp",
      imageAlt: "Birthday cake Goa — golden cream celebration cake by Sweet Bites",
    },
    intro: [
      `Whether you need a simple buttercream round or a showstopper for a 40th, a **birthday cake Goa** order starts the same way: pick a design from our gallery, message Muskan on WhatsApp with your date and town, and get a quote that includes delivery or Velim pickup.`,
      `We bake in ${site.studioCity} and serve families in Margao, Mapusa, beach towns, and society halls — with eggless options when you ask early.`,
    ],
    highlights: [
      {
        title: "Themes & toppers",
        text: "Numbers, florals, gold accents, and colour palettes from your reference photos.",
      },
      {
        title: "Sizes for every party",
        text: "From bento-sized surprises to tiers for 30+ guests — sizes and pricing on WhatsApp.",
      },
      {
        title: "Kids vs adults",
        text: "Character cakes for children are a separate lead time — see our kids birthday page.",
      },
    ],
    ideas: [
      {
        title: "Buttercream celebrations",
        description: "Classic rounds with personalised writing and fresh florals.",
        href: "/creations?occasion=birthday",
        label: "Birthday gallery",
      },
      {
        title: "Bento surprise",
        description: "Small tin cakes perfect beside a main birthday cake.",
        href: "/bento-cakes-goa",
        label: "Bento cakes Goa",
      },
      {
        title: "Ready-made flavours",
        description: "Black Forest, red velvet & more when the oven has capacity.",
        href: "/cakes-menu",
        label: "Cakes menu",
      },
    ],
    relatedLinks: [
      {
        href: "/blog/eggless-birthday-cake-goa-flavours",
        label: "Eggless birthday guide",
      },
      {
        href: "/kids-birthday-cakes-goa",
        label: "Kids birthday cakes",
      },
      { href: "/order", label: "How to book" },
    ],
    faqs: [
      {
        question: "How much does a birthday cake cost in Goa?",
        answer:
          "Our 6-inch cakes start around ₹1,200; themed fondant and character designs are quoted individually on WhatsApp after you share references and guest count.",
      },
      {
        question: "Can I order a birthday cake for tomorrow?",
        answer: `Sometimes — message ${site.phone} with your town and flavour. Ready-made menu cakes may be faster than full custom designs.`,
      },
      {
        question: "Do you deliver birthday cakes to North Goa beaches?",
        answer:
          "Yes — Calangute, Candolim, Baga, Anjuna, Panaji, and more. Delivery fee is confirmed in your quote.",
      },
    ],
    galleryTitle: "Birthday cake gallery",
    galleryLead: "Tap a cake to view details — screenshot favourites for WhatsApp.",
    ctaTitle: "Book your birthday cake",
    ctaLead: "Message with date, age or milestone, guest count, and your area in Goa.",
  },
  {
    slug: "haldi-cakes-goa",
    focusKeyword: "haldi cake Goa",
    metaTitle: "Haldi cakes in Goa — yellow ceremony designs",
    metaDescription: `Order haldi cakes in Goa — marigold yellow buttercream, eggless options, delivery to home & resorts. ${site.name} · WhatsApp ${site.phone}.`,
    keywords: [
      "haldi cake Goa",
      "haldi ceremony cake",
      "yellow wedding cake Goa",
      "pre-wedding cake Muskan",
      "marigold cake Goa",
    ],
    catalogFilter: { occasion: "haldi" },
    bookingPathId: "wedding",
    hero: {
      badge: "Pre-wedding · Haldi",
      title: "Haldi cakes in Goa",
      lead: "Marigold yellow, gold accents, and gentle flavours for haldi mornings — Muskan designs ceremony cakes that photograph beautifully and survive Goan warmth when you share venue details early.",
      image: "/images/haldi-design-cake/498586910_18060535466170730_970917338585622900_n..webp",
      imageAlt: "Haldi cake Goa — yellow marigold-style ceremony cake by Sweet Bites",
    },
    intro: [
      `A **haldi cake Goa** is often booked in the same WhatsApp thread as the main wedding tier — different date, softer palette, and sometimes a smaller guest count at home or a resort lawn.`,
      `Muskan bakes in ${site.studioCity} and delivers across Goa with the same care as reception cakes: shaded table photos, timing before turmeric games, and eggless sponges when elders need them.`,
    ],
    highlights: [
      {
        title: "Ceremony-first colours",
        text: "Marigold yellow, gold piping, floral accents — not generic birthday palettes.",
      },
      {
        title: "Morning & afternoon timing",
        text: "Outdoor haldis need earlier delivery slots and simpler toppers — we advise honestly.",
      },
      {
        title: "Pairs with wedding cake",
        text: "One conversation can cover haldi + reception dates and separate quotes.",
      },
    ],
    ideas: [
      {
        title: "Haldi design cake",
        description: "Reference our marigold-style celebration cake for WhatsApp.",
        href: "/creations/haldi-design-cake",
        label: "Haldi gallery",
      },
      {
        title: "Wedding reception tier",
        description: "Book the main white tier for your reception in the same thread.",
        href: "/wedding-cakes-goa",
        label: "Wedding cakes Goa",
      },
      {
        title: "Journal guide",
        description: "Colours, timing, and what to message Muskan.",
        href: "/blog/haldi-cake-goa-tradition-guide",
        label: "Haldi planning guide",
      },
    ],
    relatedLinks: [
      { href: "/blog/haldi-cake-goa-tradition-guide", label: "Haldi tradition guide" },
      { href: "/creations?occasion=haldi", label: "All haldi designs" },
      { href: "/locations", label: "Delivery areas" },
    ],
    faqs: [
      {
        question: "When should I order a haldi cake in Goa?",
        answer: `Treat it like a wedding order — ${site.bookAheadDays} minimum, longer if you need fondant detail or fresh florals.`,
      },
      {
        question: "Will turmeric stain affect the cake?",
        answer:
          "We ask where the cake table sits relative to haldi games and may simplify toppers. Share venue photos on WhatsApp.",
      },
      {
        question: "Can haldi and wedding cakes match in flavour?",
        answer:
          "Yes — mango, cardamom-vanilla, and pistachio are popular for both; Muskan can align flavours across both dates.",
      },
    ],
    galleryTitle: "Haldi & pre-wedding cakes",
    galleryLead: "Yellow ceremony designs from our Goa kitchen.",
    ctaTitle: "Book your haldi cake",
    ctaLead: "WhatsApp your haldi date, venue town, and guest count.",
  },
  {
    slug: "kids-birthday-cakes-goa",
    focusKeyword: "kids birthday cake Goa",
    metaTitle: "Kids birthday cakes in Goa — characters & themes",
    metaDescription: `Spiderman, unicorn, Barbie & themed kids birthday cakes in Goa. Custom designs by Muskan — WhatsApp ${site.phone} for quotes & delivery.`,
    keywords: [
      "kids birthday cake Goa",
      "character cake Goa",
      "Spiderman cake Goa",
      "unicorn cake Goa",
      "children birthday cake delivery",
    ],
    catalogFilter: { occasion: "kids" },
    bookingPathId: "birthday",
    hero: {
      badge: "Kids & characters",
      title: "Kids birthday cakes in Goa",
      lead: "Character cakes, bright buttercream, and sculpted toppers — Muskan builds kids birthday cakes parents trust for structure, delivery, and honest lead times across Goa.",
      image: "/images/spiderman-cake/619485602_17929184628193772_648480827065862935_n..webp",
      imageAlt: "Kids birthday cake Goa — Spiderman character cake by Sweet Bites",
    },
    intro: [
      `A **kids birthday cake Goa** brief usually arrives with a screenshot and one non-negotiable: "make it look like this." Muskan replies with what is achievable in your timeline — proportional characters, stable delivery, and eggless options for classmates.`,
      `Browse Spiderman, unicorn, Barbie, and more in our gallery and case studies before you message — it speeds up quotes and sets realistic expectations.`,
    ],
    highlights: [
      {
        title: "Character expertise",
        text: "Documented case studies for Spiderman, Barbie castle, unicorn & more.",
      },
      {
        title: "Venue-aware delivery",
        text: "Pool parties, society halls, and beach homes — share photos early.",
      },
      {
        title: "Bento add-ons",
        text: "Classmate tins beside the main cake — popular for school-age parties.",
      },
    ],
    ideas: [
      {
        title: "Spiderman & superheroes",
        description: "Dimensional webs and bold colours — allow 7–8 days lead time.",
        href: "/creations/spiderman-cake",
        label: "Spiderman cake",
      },
      {
        title: "Barbie & castle themes",
        description: "Multi-tier pink designs for bigger celebrations.",
        href: "/case-studies/barbie-castle-cake-goa-case-study",
        label: "Barbie case study",
      },
      {
        title: "Kids theme guide",
        description: "What to send Muskan on WhatsApp before you pay.",
        href: "/blog/kids-birthday-cake-goa-character-themes",
        label: "Planning guide",
      },
    ],
    relatedLinks: [
      { href: "/case-studies", label: "All case studies" },
      { href: "/reels", label: "Watch piping & finishes" },
      { href: "/creations?occasion=kids", label: "Kids gallery" },
    ],
    faqs: [
      {
        question: "How long do character cakes take in Goa?",
        answer:
          "Simple buttercream themes fit in 5–7 days; Spiderman, castle, and unicorn-scale designs often need 8–10 days — message early for Saturday parties.",
      },
      {
        question: "Can you copy any cartoon from the internet?",
        answer:
          "Muskan adapts proportions and colours for stability in Goan humidity — send references and she will say what fits your date.",
      },
      {
        question: "Do you make eggless kids cakes?",
        answer:
          "Yes — mention eggless on WhatsApp; see our eggless flavours guide for sponge options.",
      },
    ],
    galleryTitle: "Kids & character cakes",
    galleryLead: "Real theme cakes delivered across Goa.",
    ctaTitle: "Order a kids birthday cake",
    ctaLead: "Send child's age, theme, date, and delivery town on WhatsApp.",
  },
  {
    slug: "anniversary-cakes-goa",
    focusKeyword: "anniversary cake Goa",
    metaTitle: "Anniversary cakes in Goa — couples & milestones",
    metaDescription: `Custom anniversary cakes in Goa — hearts, gold details, eggless options. ${site.name} delivers from ${site.studioCity}. WhatsApp ${site.phone}.`,
    keywords: [
      "anniversary cake Goa",
      "anniversary cake delivery Goa",
      "couple cake Goa",
      "custom anniversary cake Muskan",
    ],
    catalogFilter: { occasion: "anniversary" },
    bookingPathId: "anniversary",
    hero: {
      badge: "Anniversaries & milestones",
      title: "Anniversary cakes in Goa",
      lead: "Romantic buttercream, gold accents, and personalised writing for years together — Muskan crafts anniversary cakes for home dinners, resorts, and surprise deliveries across Goa.",
      image:
        "/images/cream-heart-anniversery-cake/482668294_18053699921170730_1765706686871389592_n..webp",
      imageAlt:
        "Anniversary cake Goa — cream heart celebration cake by Sweet Bites Muskan",
    },
    intro: [
      `An **anniversary cake Goa** couples love is elegant without being fussy — readable names, stable florals, and flavours that suit a quiet dinner or a family gathering.`,
      `Message Muskan with years, names, date, and whether you need eggless. We deliver from ${site.studioCity} to Panaji, Margao, beaches, and villages statewide.`,
    ],
    highlights: [
      {
        title: "Personalised writing",
        text: "Short names and years read better than long cursive in warm rooms.",
      },
      {
        title: "Heart & gold styling",
        text: "Peach cream, chocolate, and floral finishes from our gallery.",
      },
      {
        title: "Surprise-friendly",
        text: "Bento-sized cakes work when only two of you are celebrating.",
      },
    ],
    ideas: [
      {
        title: "Peach cream anniversary",
        description: "Soft romantic palette for home celebrations.",
        href: "/creations/anniversary-peach-cream-cake",
        label: "Peach cream cake",
      },
      {
        title: "Bento for two",
        description: "Intimate tin cake with a short message on top.",
        href: "/bento-cakes-goa",
        label: "Bento cakes",
      },
      {
        title: "Full gallery",
        description: "Browse all anniversary-tagged designs.",
        href: "/creations?occasion=anniversary",
        label: "Anniversary gallery",
      },
    ],
    relatedLinks: [
      { href: "/order", label: "How to book" },
      { href: "/locations", label: "Delivery areas" },
      { href: "/blog/book-custom-cake-goa-whatsapp", label: "WhatsApp tips" },
    ],
    faqs: [
      {
        question: "Can you write our names and years on the cake?",
        answer:
          "Yes — send exact spelling on WhatsApp. Muskan confirms font size for your cake diameter.",
      },
      {
        question: "What size for an anniversary dinner for two?",
        answer:
          "A bento or 6-inch cake is often enough; family dinners may need 8-inch or larger — we quote on guest count.",
      },
      {
        question: "Do you deliver surprise anniversary cakes?",
        answer:
          "Yes — share delivery address and a contact who can receive the cake at the agreed time.",
      },
    ],
    galleryTitle: "Anniversary cake ideas",
    galleryLead: "Celebration cakes for couples and families in Goa.",
    ctaTitle: "Celebrate your anniversary",
    ctaLead: "WhatsApp your date, names, and delivery area in Goa.",
  },
  {
    slug: "bento-cakes-goa",
    focusKeyword: "bento cake Goa",
    metaTitle: "Bento cakes in Goa — mini tins & delivery",
    metaDescription: `Order bento cakes in Goa — cute tin cakes for 1–6 people, birthdays & anniversaries. ${site.name} · WhatsApp ${site.phone}.`,
    keywords: [
      "bento cake Goa",
      "mini cake Goa",
      "bento birthday cake Goa",
      "order bento cake WhatsApp",
      "personalized bento cake",
    ],
    catalogFilter: { format: "bento" },
    hero: {
      badge: "Bento & mini cakes",
      title: "Bento cakes in Goa",
      lead: "Small, photogenic cakes in a tin — perfect for couples, surprises, and add-ons beside a main celebration cake. Every bento is baked to order in Velim, not pulled from a shop counter.",
      image: "/images/bento-cake/491142105_18057367328170730_7039415400764743136_n..webp",
      imageAlt: "Bento cake Goa — decorated tin cake by Sweet Bites Muskan",
    },
    intro: [
      `A **bento cake Goa** order suits intimate moments: anniversaries on the beach, office desk surprises, or a second sweet for the kids' table. Muskan personalises colours, short messages, and flavours inside a compact tin.`,
      `Pair a bento with a larger birthday or wedding cake in one WhatsApp thread — we plan oven space once.`,
    ],
    highlights: [
      {
        title: "1–6 servings",
        text: "Ideal when you want photos without days of leftovers.",
      },
      {
        title: "Eggless available",
        text: "Mention dietary needs on your first message.",
      },
      {
        title: "Fast lead times",
        text: `Simple bentos often fit ${site.bookAheadDays}; hand-painted detail needs more notice.`,
      },
    ],
    ideas: [
      {
        title: "Classic bento",
        description: "Reference photos for your WhatsApp order.",
        href: "/creations/bento-cake",
        label: "Bento gallery",
      },
      {
        title: "Birthday bento",
        description: "Age toppers and bright colours for kids.",
        href: "/creations/birthday-bento-cake",
        label: "Birthday bento",
      },
      {
        title: "Bento guide",
        description: "Sizes, flavours, and delivery across Goa.",
        href: "/blog/bento-cake-goa-order-guide",
        label: "Bento journal guide",
      },
    ],
    relatedLinks: [
      { href: "/blog/bento-cake-goa-order-guide", label: "Bento order guide" },
      { href: "/cakes-menu", label: "Ready-made menu" },
      { href: "/birthday-cakes-goa", label: "Birthday cakes" },
    ],
    faqs: [
      {
        question: "How much is a bento cake in Goa?",
        answer:
          "Price depends on design, not just tin size — Muskan quotes on WhatsApp after you share date and reference photos.",
      },
      {
        question: "Can you deliver one bento to North Goa?",
        answer:
          "Yes — short drives and resort deliveries are common; fee is confirmed in your quote.",
      },
      {
        question: "Can I order bento plus a large cake?",
        answer:
          "Yes — one WhatsApp conversation can cover both; mention both dates if they differ.",
      },
    ],
    galleryTitle: "Bento cake gallery",
    galleryLead: "Mini tin designs from Sweet Bites — screenshot and send on WhatsApp.",
    ctaTitle: "Order a bento cake",
    ctaLead: "Message with date, message on top, flavour, and your Goa town.",
  },
];

export function getAllOccasionLandings(): OccasionLanding[] {
  return landings;
}

export function getOccasionLandingSlugs(): string[] {
  return landings.map((l) => l.slug);
}

export function getOccasionLandingBySlug(slug: string): OccasionLanding | undefined {
  return landings.find((l) => l.slug === slug);
}

export function occasionLandingPath(slug: string): string {
  return `/${slug}`;
}

export function getCreationsForOccasionLanding(
  landing: OccasionLanding,
  limit = 6,
): Creation[] {
  const filtered = filterCreations({
    occasion: landing.catalogFilter.occasion ?? null,
    format: landing.catalogFilter.format ?? null,
  });
  const featured = filtered.filter((c) => c.featured);
  const rest = filtered.filter((c) => !c.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function getOccasionLandingJsonLd(landing: OccasionLanding): Record<string, unknown> {
  const base = SITE_URL.replace(/\/$/, "");
  const url = `${base}${occasionLandingPath(landing.slug)}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: landing.metaTitle,
    description: landing.metaDescription,
    url,
    about: {
      "@type": "Service",
      name: landing.focusKeyword,
      areaServed: { "@type": "State", name: "Goa" },
      provider: { "@type": "Bakery", name: site.name, url: site.url },
    },
  };
}

export const OCCASION_FOOTER_LINKS = landings.map((l) => ({
  href: occasionLandingPath(l.slug),
  label: l.hero.title.replace(" in Goa", ""),
}));

/** Short labels for header / hero beside site name */
export const HEADER_OCCASION_LINKS = [
  { href: occasionLandingPath("wedding-cakes-goa"), label: "Wedding" },
  { href: occasionLandingPath("birthday-cakes-goa"), label: "Birthday" },
  { href: occasionLandingPath("kids-birthday-cakes-goa"), label: "Kids" },
  {
    href: occasionLandingPath("anniversary-cakes-goa"),
    label: "Anniversary",
    image:
      "/images/cream-heart-anniversery-cake/482668294_18053699921170730_1765706686871389592_n..webp",
    imageAlt: "Anniversary cake Goa — cream heart cake",
  },
  { href: occasionLandingPath("bento-cakes-goa"), label: "Bento" },
] as const;
