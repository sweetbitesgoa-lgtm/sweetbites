import { site } from "@/lib/content";
import type { BlogBlock } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

export type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readMinutes: number;
  focusKeyword: string;
  keywords: string[];
  /** Catalog creation this documents */
  creationSlug: string;
  difficulty: string;
  leadTime: string;
  celebrationType: string;
  relatedSlugs: string[];
  heroImage: string;
  heroImageAlt: string;
  heroGalleryHref: string;
  heroGalleryLabel: string;
  blocks: BlogBlock[];
};

export const CASE_STUDIES_INDEX_DESCRIPTION = `${site.name} case studies — how Muskan delivers near-impossible custom cakes in Goa: Barbie castle, Spiderman, Cocomelon, butterflies, chocolate spheres, golden cream tiers, wedding cakes, haldi, Ferrero, rabdi, rainbow & more. Real briefs, structure, delivery & WhatsApp ${site.phone}.`;

export const CASE_STUDIES_INDEX_KEYWORDS = [
  "custom cake case study Goa",
  "Barbie castle cake Goa",
  "Spiderman cake baker Goa",
  "Cocomelon cake Goa",
  "butterfly birthday cake Goa",
  "chocolate sphere cake Goa",
  "Matilda cake Goa",
  "football birthday cake Goa",
  "unicorn cake Goa",
  "wedding cake case study Goa",
  "rasmalai cake Goa",
  "rabdi cake Goa",
  "haldi cake Goa",
  "Ferrero cake Goa",
  "rainbow cake Goa",
  "anniversary heart cake Goa",
  "golden cream cake Goa",
  "engagement cake Goa",
  "proposal cake Goa",
  "peach cream cake Goa",
  "last-minute birthday cake Goa",
  "bento birthday cake Goa",
  "Doraemon cake Goa",
  "Doraemon birthday cake Goa",
  "photo cake Goa",
  "edible image cake Goa",
  "chocolate bar cake Goa",
  "mermaid cake Goa",
  "cake bouquet Goa",
  "cupcake bouquet Goa",
  "sweet bouquet cake Goa",
  "flamingo cake Goa",
  "Boss Baby cake Goa",
  "car birthday cake Goa",
  "minicar cake Goa",
  "rakshabandhan cake Goa",
  "Rakhi cake Goa",
  "festival cake Muskan",
  "farewell cake Goa",
  "office farewell cake Goa",
  "corporate cake delivery Goa",
  "modern anniversary cake Goa",
  "minimalist anniversary cake Goa",
  "light blue birthday cake Goa",
  "pastel birthday cake Goa",
  "blue birthday cake Goa",
  "character cake Sweet Bites",
  "impossible cake design Goa",
  "fondant cake Muskan",
  "kids theme cake Goa",
  "sweetbites.me case study",
] as const;

export function getCaseStudyIndexKeywords(studies: CaseStudy[]): string[] {
  return [...new Set([...CASE_STUDIES_INDEX_KEYWORDS, ...studies.flatMap((s) => s.keywords)])];
}

export function getCaseStudyListingJsonLd(studies: CaseStudy[]): Record<string, unknown> {
  const base = SITE_URL.replace(/\/$/, "");
  const url = `${base}/case-studies`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${site.name} Case Studies`,
    description: CASE_STUDIES_INDEX_DESCRIPTION,
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: studies.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `${base}/case-studies/${s.slug}`,
      })),
    },
  };
}

function caseStudyJsonLd(study: CaseStudy): Record<string, unknown> {
  const base = SITE_URL.replace(/\/$/, "");
  const url = `${base}/case-studies/${study.slug}`;
  const imageUrl = `${base}${study.heroImage.startsWith("/") ? study.heroImage : `/${study.heroImage}`}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.excerpt,
    keywords: study.keywords.join(", "),
    datePublished: `${study.publishedAt}T09:00:00+05:30`,
    author: { "@type": "Person", name: "Muskan", url: `${base}/about` },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    image: imageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

export function getCaseStudyArticleJsonLd(study: CaseStudy): Record<string, unknown> {
  return caseStudyJsonLd(study);
}

const studies: CaseStudy[] = [
  {
    slug: "barbie-castle-cake-goa-case-study",
    title: "Case study: Barbie castle cake in Goa — turrets, doll scale & a deadline that would not move",
    excerpt:
      "How Sweet Bites built a pink castle Barbie cake parents called “impossible” — structure for Goan heat, doll proportions, and delivery to South Goa without a single turret snapping.",
    publishedAt: "2026-05-24",
    readMinutes: 15,
    focusKeyword: "Barbie castle cake Goa",
    keywords: [
      "Barbie castle cake Goa",
      "Barbie cake delivery Goa",
      "castle cake structure",
      "custom Barbie cake India",
      "kids castle birthday cake",
      "Sweet Bites Barbie",
    ],
    creationSlug: "barbie-castle-cake",
    difficulty: "Near-impossible · multi-tier structure",
    leadTime: "9–10 days",
    celebrationType: "6th birthday · 40 guests",
    relatedSlugs: ["spiderman-cake-goa-case-study", "unicorn-cake-goa-case-study"],
    heroImage:
      "/images/barbie-castle-cake/554820726_18073205381170730_7714652738539868659_n..webp",
    heroImageAlt:
      "Barbie castle cake Goa — pink turrets and doll topper by Sweet Bites Muskan",
    heroGalleryHref: "/creations/barbie-castle-cake",
    heroGalleryLabel: "View Barbie castle creation",
    blocks: [
      {
        type: "p",
        text: `Most bakeries in Goa will politely decline a full **Barbie castle cake Goa** brief — too many vertical points, too much pink fondant in humid air, and a child who has already seen a reel where every turret lights up. This case study walks through how Muskan at [${site.name}](/about) said yes anyway, and what it took to deliver the [Barbie Castle Cake](/creations/barbie-castle-cake) you see in our gallery (including the process [reel](/reels)).`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Parents searching **Barbie castle cake Goa** usually need proof that structure, doll scale, and beach-town delivery can coexist — this is that proof.",
      },
      {
        type: "h2",
        text: "The brief: “Make it look like the video”",
        id: "the-brief",
      },
      {
        type: "p",
        text: "The family messaged on WhatsApp from [Margao](/locations/margao) with a Pinterest collage, a screenshot of our castle creation, and one non-negotiable line: their daughter must recognise Barbie on the top tier. Guest count was ~40; venue was a shaded society hall, not open beach — that mattered for structure choices.",
      },
      {
        type: "ul",
        items: [
          "Reference: [Barbie castle cake](/creations/barbie-castle-cake) on sweetbites.me plus two foreign reels with LED tiers (we clarified what was achievable locally).",
          "Colours: hot pink, blush, gold accents — no airbrush booth on site, all hand-toned fondant.",
          "Diet: standard sponge (not eggless) — if you need eggless, see our [eggless birthday guide](/blog/eggless-birthday-cake-goa-flavours).",
          "Timeline: party on a Sunday; message arrived the previous Tuesday — **9 days**, tighter than our usual [book ahead window](/order).",
        ],
      },
      {
        type: "h2",
        text: "Why this design is “next to impossible” in Goa",
        id: "why-impossible",
      },
      {
        type: "p",
        text: "A **Barbie castle cake Goa** order fails when treated like a flat birthday round with toys stuck on top. Real castles need graduated tiers, internal dowelling, turrets with surface area that catches humidity, and transport vibration on laterite roads. North and South Goa deliveries add time-in-van risk — the same constraints we document for [wedding cake delivery Goa](/blog/wedding-cake-delivery-goa-checklist).",
      },
      {
        type: "h3",
        text: "Humidity vs tall fondant",
      },
      {
        type: "p",
        text: "Muskan shortened unsupported fondant pillars, used a hybrid buttercream base coat under pink panels, and scheduled turret assembly **morning-of** rather than 24 hours early. That decision alone prevented the “wilting castle” look many imported templates assume will work in air-conditioned bakeries.",
      },
      {
        type: "h2",
        text: "Build phases Muskan actually followed",
        id: "build-phases",
      },
      {
        type: "ul",
        items: [
          "**Day 1–3:** Sponge bake, fill, crumb coat; internal boards sized for three-tier load.",
          "**Day 4–6:** Fondant panels, turret cones, door cut-outs; doll pedestal reinforced separately.",
          "**Day 7:** Dry fit at studio in [Velim](/locations/velim) — photos sent on WhatsApp for parent approval.",
          "**Day 8:** Final assembly; box plan for vertical clearance in delivery car.",
          "**Day 9:** Morning delivery window to Margao; on-site contact received cake 90 minutes before guests.",
        ],
      },
      {
        type: "callout",
        variant: "note",
        title: "WhatsApp proof points",
        text: `Muskan sent three progress photos and one short video before payment balance — standard for complex [custom cake in Goa](/blog/book-custom-cake-goa-whatsapp) orders. Message ${site.phone} if you want the same visibility on your date.`,
      },
      {
        type: "h2",
        text: "Delivery & handover",
        id: "delivery",
      },
      {
        type: "p",
        text: "Castle cakes never travel sideways. Our driver used a marked upright box, low-speed route via [Colva](/locations/colva) bypass, and handoff to the father at the hall kitchen — not the balloon-decorated entrance where kids would bump it. That operational detail is half of a successful **Barbie cake delivery Goa** story.",
      },
      {
        type: "h2",
        text: "Outcome & what we would tell the next parent",
        id: "outcome",
      },
      {
        type: "p",
        text: "The birthday girl recognised Barbie immediately; parents reported zero tier shift after two hours in a crowded hall. If you love this scale of work, budget time and cost honestly — castle themes are not quick [bento cake](/blog/bento-cake-goa-order-guide) jobs. Browse more [kids cakes](/creations?occasion=kids) or [Barbie birthday](/creations/barbie-birthday-cake) variants, then start a thread on WhatsApp with your date and hall photos.",
      },
      {
        type: "related",
        title: "Related on sweetbites.me",
        items: [
          {
            href: "/creations/barbie-castle-cake",
            label: "Barbie Castle Cake gallery",
            description: "Full photos & reel for this exact style",
          },
          {
            href: "/case-studies/spiderman-cake-goa-case-study",
            label: "Spiderman case study",
            description: "Character sculpt & web-pattern challenge",
          },
          {
            href: "/order",
            label: "How to order",
            description: "Lead times for complex kids themes",
          },
        ],
      },
    ],
  },
  {
    slug: "spiderman-cake-goa-case-study",
    title: "Case study: Spiderman cake in Goa — webs, gravity & a five-year-old’s non-negotiable",
    excerpt:
      "A full Spiderman character cake with dimensional webbing and red-blue coverage — why most templates collapse in Goan humidity, and how Muskan engineered this one for North Goa delivery.",
    publishedAt: "2026-05-26",
    readMinutes: 14,
    focusKeyword: "Spiderman cake Goa",
    keywords: [
      "Spiderman cake Goa",
      "Spiderman birthday cake delivery",
      "character cake Goa",
      "superhero cake Muskan",
      "custom Spiderman cake India",
      "Sweet Bites Spiderman",
    ],
    creationSlug: "spiderman-cake",
    difficulty: "Near-impossible · character + web geometry",
    leadTime: "7–8 days",
    celebrationType: "5th birthday · home party",
    relatedSlugs: ["barbie-castle-cake-goa-case-study", "unicorn-cake-goa-case-study"],
    heroImage:
      "/images/spiderman-cake/619485602_17929184628193772_648480827065862935_n..webp",
    heroImageAlt:
      "Spiderman cake Goa — custom superhero birthday cake by Sweet Bites",
    heroGalleryHref: "/creations/spiderman-cake",
    heroGalleryLabel: "View Spiderman creation",
    blocks: [
      {
        type: "p",
        text: `**Spiderman cake Goa** requests spike every school holiday — and most end with “Can you do the face?” Muskan’s answer for this order was yes, with conditions: no floating mask illusions, no unsupported web spans wider than a palm, and a parent who understood that our [Spiderman Cake](/creations/spiderman-cake) is hand-built in [${site.studioCity}](/locations/velim), not shipped from a metro franchise bakery.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "This case study is for parents comparing bakers on **Spiderman cake Goa** results — structure, colours, and honest delivery photos, not stock images.",
      },
      {
        type: "h2",
        text: "Brief from a Panaji family",
        id: "brief",
      },
      {
        type: "p",
        text: "WhatsApp thread started with a photo of our gallery Spiderman, then a cartoon screenshot where the body is 90% head. Muskan reset expectations: our style keeps proportional torso, raised web lines, and clean blue border — achievable for a [kids birthday cake Goa](/blog/kids-birthday-cake-goa-character-themes) timeline of eight days.",
      },
      {
        type: "ul",
        items: [
          "Venue: apartment party in [Panaji](/locations/panaji) — stairs only, no lift; box had to be manageable for two adults.",
          "Flavour: chocolate sponge + chocolate buttercream (helps dark web visibility).",
          "Size: single tall barrel serving ~18 kids plus adults tasting — not a sheet cake.",
          "Add-on: name plaque in fondant — short, bold lettering survives photos better than cursive in humidity.",
        ],
      },
      {
        type: "h2",
        text: "Why Spiderman is harder than it looks online",
        id: "why-hard",
      },
      {
        type: "p",
        text: "Template reels use cold studios. A **Spiderman cake Goa** bake fights afternoon room temperature, finger smudges on red fondant, and black web lines that bleed if applied too early. Muskan uses structured drying intervals and keeps white eyes separate until the last hour so they stay crisp.",
      },
      {
        type: "h3",
        text: "Web pattern without collapse",
      },
      {
        type: "p",
        text: "We pipe royal-icing-style webbing on thin fondant strips where needed, rather than carving deep grooves that crack when the cake flexes in transit. That technique difference is why cheap supermarket cakes look flat while Muskan’s [character cake Goa](/creations/spiderman-cake) reads three-dimensional in phone photos.",
      },
      {
        type: "h2",
        text: "Engineering & timeline",
        id: "timeline",
      },
      {
        type: "ul",
        items: [
          "Internal dowel through barrel tier for any topper weight.",
          "Red base: two-tone panels to avoid monotonous plastic-red sheen.",
          "Face sculpt: fondant + edible paint; no plastic toy mask (parent requested edible-only).",
          "Night-before: webs applied; morning touch-up before box.",
          "Delivery: upright drive to Panaji; photo sent five minutes after handoff.",
        ],
      },
      {
        type: "h2",
        text: "Heat, delivery & the stairs problem",
        id: "delivery-heat",
      },
      {
        type: "p",
        text: "June humidity in Goa softens red fondant faster than winter weddings in [Candolim](/locations/candolim). We chose a late-morning drop, asked the family to keep the cake indoors until singing, and sent a one-page care note on WhatsApp — same discipline as [wedding cake delivery Goa](/blog/wedding-cake-delivery-goa-checklist) handovers.",
      },
      {
        type: "h2",
        text: "Result & reorder pattern",
        id: "result",
      },
      {
        type: "p",
        text: "The child recognised Spiderman without prompting; parents reordered a [bento cake](/blog/bento-cake-goa-order-guide) for school the following month. If your brief is similar, send date, stairs/venue photos, and our creation link — Muskan replies on ${site.phone} with whether **Spiderman cake Goa** fits that week’s oven schedule.",
      },
      {
        type: "related",
        title: "Explore further",
        items: [
          { href: "/creations/spiderman-cake", label: "Spiderman gallery", description: "Order a similar design" },
          { href: "/reels", label: "Reels", description: "Watch piping & finishes in motion" },
          { href: "/blog/kids-birthday-cake-goa-character-themes", label: "Kids theme guide", description: "How to brief character cakes" },
        ],
      },
    ],
  },
  {
    slug: "unicorn-cake-goa-case-study",
    title: "Case study: Unicorn cake in Goa — gold horn, rainbow buttercream & structure that survives photos",
    excerpt:
      "Unicorn cakes look simple on Instagram; in Goa they test every rule about horn anchoring, pastel stability, and delivery. Inside Muskan’s unicorn build for a North Goa beach-adjacent home.",
    publishedAt: "2026-05-28",
    readMinutes: 14,
    focusKeyword: "unicorn cake Goa",
    keywords: [
      "unicorn cake Goa",
      "rainbow unicorn birthday cake",
      "unicorn cake delivery North Goa",
      "gold horn cake structure",
      "custom unicorn cake Muskan",
      "Sweet Bites unicorn",
    ],
    creationSlug: "unicorn-cake",
    difficulty: "Near-impossible · horn torque & pastel bleed",
    leadTime: "8 days",
    celebrationType: "7th birthday · poolside villa",
    relatedSlugs: ["barbie-castle-cake-goa-case-study", "spiderman-cake-goa-case-study"],
    heroImage:
      "/images/unicorn-cake/572183692_18077522492170730_392051892465413783_n. - Copy - Copy.webp",
    heroImageAlt:
      "Unicorn cake Goa — rainbow buttercream and gold horn by Sweet Bites",
    heroGalleryHref: "/creations/unicorn-cake",
    heroGalleryLabel: "View unicorn creation",
    blocks: [
      {
        type: "p",
        text: `The **unicorn cake Goa** trend is deceptively cruel: soft colours that mute in humidity, a horn that wants to dive into the table, and children who expect glitter-level magic from a home kitchen in [${site.studioCity}](/locations/velim). This case study documents the [Unicorn Cake](/creations/unicorn-cake) Muskan delivered near [Calangute](/locations/calangute) — with the process clip on our [reels](/reels) page — and why we classify it alongside Barbie and Spiderman as a near-impossible kids theme done right.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Families googling **unicorn cake Goa** need a baker who understands horn physics and pastel stability — not a printed topper on a supermarket sponge.",
      },
      {
        type: "h2",
        text: "Brief: pastel dream, poolside reality",
        id: "brief",
      },
      {
        type: "p",
        text: "A villa host messaged after seeing our unicorn reel. Party was poolside with partial shade; afternoon sun on the cake table was the main risk. Guest count ~25; they wanted rainbow buttercream mane, gold horn, edible eyes — no plastic unicorn toy.",
      },
      {
        type: "ul",
        items: [
          "Flavour: vanilla bean + strawberry compote filling (light colour inside helps if outer pastel shifts).",
          "Eggless sibling cupcake add-on — coordinated via [eggless flavours guide](/blog/eggless-birthday-cake-goa-flavours).",
          "Reference gallery: [/creations/unicorn-cake](/creations/unicorn-cake) plus [rainbow cake](/creations/rainbow-cake) for colour direction.",
          "Lead time: eight days — one day longer than minimum after Muskan flagged outdoor table.",
        ],
      },
      {
        type: "h2",
        text: "Why unicorn cakes fail in warm venues",
        id: "why-fail",
      },
      {
        type: "p",
        text: "A **unicorn cake Goa** disaster usually involves a horn glued only to fondant skin, buttercream roses that melt into one pink smear, and silver dust that photographs grey. Muskan anchors horns through a hidden skewer into a chocolate core cap, and keeps the mane piped in stable stages rather than one marathon session.",
      },
      {
        type: "h3",
        text: "Pastel buttercream in coastal air",
      },
      {
        type: "p",
        text: "We slightly deepen pink and purple tones versus Pinterest swatches because cameras restore them to “pastel” after five minutes outdoors. Clients who insist on ultra-light tones get a printed colour disclaimer on WhatsApp — transparency prevents bad reviews when nature does what it does.",
      },
      {
        type: "h2",
        text: "Build sequence",
        id: "build",
      },
      {
        type: "ul",
        items: [
          "Two-tier barrel: bottom for servings, top narrowed for unicorn head proportion.",
          "Horn: gum-paste + gold paint; cured 48 hours before install.",
          "Ears: separate pieces; attached after chill cycle.",
          "Mane: rainbow rosettes piped cold; transported with side support foam.",
          "Delivery: early slot before pool games; table moved to shaded veranda per Muskan’s request.",
        ],
      },
      {
        type: "h2",
        text: "Coordination with venue & parents",
        id: "venue",
      },
      {
        type: "p",
        text: "Muskan asked for a photo of the table, umbrella orientation, and when candles would happen. That mirrors our [wedding delivery checklist](/blog/wedding-cake-delivery-goa-checklist) logic applied to a **unicorn cake Goa** kids party — operational, not fussy.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Horn intact through singing; mane softened slightly by hour three but held shape for photos parents cared about. They later booked a [Barbie castle](/case-studies/barbie-castle-cake-goa-case-study) for a cousin — proof that trust comes from process visibility. Want similar? Message ${site.phone} with venue photos and date, or read [how to book](/blog/book-custom-cake-goa-whatsapp) first.",
      },
      {
        type: "related",
        title: "Keep exploring",
        items: [
          { href: "/creations/unicorn-cake", label: "Unicorn creation", description: "Photos + reel" },
          { href: "/case-studies", label: "All case studies", description: "Barbie, Spiderman & more" },
          { href: "/locations/calangute", label: "Calangute delivery", description: "North Goa area notes" },
        ],
      },
    ],
  },
  {
    slug: "wedding-cake-goa-case-study",
    title: "Case study: Wedding cake in Goa — three tiers, monsoon timing & a venue that changed twice",
    excerpt:
      "How Sweet Bites delivered a three-tier wedding cake from Velim to a South Goa reception — dowelling, flavour pairing for 120 guests, and handover when the couple moved the cake table at the last minute.",
    publishedAt: "2026-05-30",
    readMinutes: 16,
    focusKeyword: "wedding cake Goa",
    keywords: [
      "wedding cake Goa",
      "wedding cake delivery South Goa",
      "three tier wedding cake Muskan",
      "custom wedding cake Velim",
      "Sweet Bites wedding",
      "reception cake Goa",
    ],
    creationSlug: "wedding-cake",
    difficulty: "Complex · multi-tier + logistics",
    leadTime: "14–18 days",
    celebrationType: "Wedding reception · 120 guests",
    relatedSlugs: ["rasmalai-cake-goa-case-study", "barbie-castle-cake-goa-case-study"],
    heroImage:
      "/images/wedding-cake/659772208_18092845286170730_8159590204106277210_n..webp",
    heroImageAlt:
      "Wedding cake Goa — three-tier white reception cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/wedding-cake",
    heroGalleryLabel: "View wedding cake creation",
    blocks: [
      {
        type: "p",
        text: `A **wedding cake Goa** order is never only about frosting — it is guest count, venue changes, monsoon humidity, and relatives who want “just one more tier.” This case study follows the [Wedding Cake](/creations/wedding-cake) Muskan built for a South Goa reception: white buttercream, gold accents, and a delivery plan that survived two table moves before the couple’s entrance.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Couples comparing **wedding cake Goa** bakers should ask about dowelling, delivery windows, and backup plans when venues shift — not only Pinterest photos.",
      },
      {
        type: "h2",
        text: "Brief from the wedding planner & bride",
        id: "brief",
      },
      {
        type: "p",
        text: "The planner found us on Instagram after seeing our [reels](/reels). The bride wanted clean white tiers with subtle gold, not heavy fondant draping that sweats in coastal air. Guest count ~120; cutting ceremony after dinner, not at noon in direct sun.",
      },
      {
        type: "ul",
        items: [
          "Reference: [/creations/wedding-cake](/creations/wedding-cake) plus a mood board of florals (we matched palette, not copied stems).",
          "Flavours: vanilla bean + raspberry fill on middle tier; chocolate bottom for guests who skip fruit.",
          "Eggless portion: separate sheet discussed — see [eggless flavours](/blog/eggless-birthday-cake-goa-flavours) for how we split orders.",
          "Venue: resort near [Colva](/locations/colva) — indoor ballroom with AC for most of the evening.",
        ],
      },
      {
        type: "h2",
        text: "Why wedding cakes fail in Goa receptions",
        id: "why-fail",
      },
      {
        type: "p",
        text: "A **wedding cake Goa** disaster is usually structural: tiers sliding on a wobbly stand, buttercream melting during outdoor photos, or a driver asked to lay the box flat. Muskan uses central dowelling, chilled transport, and a written handover checklist — the same discipline as our public [wedding delivery guide](/blog/wedding-cake-delivery-goa-checklist).",
      },
      {
        type: "h3",
        text: "When the venue moves the table",
      },
      {
        type: "p",
        text: "Two hours before delivery, the coordinator moved the cake table from the ballroom to a covered veranda “for photos.” Muskan asked for a new floor photo, confirmed level surface and distance from kitchen heat, and adjusted delivery time so the cake was not sitting in pre-guest humidity. Flexibility without panic is part of professional **wedding cake delivery Goa** work.",
      },
      {
        type: "h2",
        text: "Build & tasting timeline",
        id: "timeline",
      },
      {
        type: "ul",
        items: [
          "Week 1: WhatsApp brief + deposit; flavour tasting slot at [Velim studio](/locations/velim).",
          "Week 2: Dummy stack for height approval; gold paint tests on spare fondant.",
          "Bake week: tiers staggered; each tier chilled before stack.",
          "Day before: partial stack at studio; final tier transported separately for safety.",
          "Wedding day: morning delivery; on-site photo to planner before guests arrive.",
        ],
      },
      {
        type: "h2",
        text: "Coordination with catering & photography",
        id: "coordination",
      },
      {
        type: "p",
        text: "Muskan shared a one-page note with catering: when to move the cake for cutting, knife provided by venue, and no sparklers near buttercream. Photographers got five minutes of shade-side shots before guests crowded — small detail, big difference for **wedding cake Goa** albums.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "All tiers stable through cutting; leftovers boxed for the couple’s hotel. The planner booked a [rasmalai cake](/case-studies/rasmalai-cake-goa-case-study) for the bride’s family lunch the next week. Planning your reception? Message ${site.phone} with date, guest count, and venue photos — or start with [how to book](/blog/book-custom-cake-goa-whatsapp).",
      },
      {
        type: "related",
        title: "Related on sweetbites.me",
        items: [
          { href: "/creations/wedding-cake", label: "Wedding cake gallery", description: "Photos & reel" },
          { href: "/blog/wedding-cake-delivery-goa-checklist", label: "Delivery checklist", description: "What to send before your date" },
          { href: "/locations", label: "Delivery areas", description: "Towns we serve across Goa" },
        ],
      },
    ],
  },
  {
    slug: "rasmalai-cake-goa-case-study",
    title: "Case study: Rasmalai cake in Goa — milk soak, tier weight & a mithai-inspired wedding add-on",
    excerpt:
      "Rasmalai cakes look simple on a menu board until you balance milk syrup, sponge density, and delivery in Goan heat. Inside Muskan’s build for a family that wanted Indian flavour without sacrificing structure.",
    publishedAt: "2026-06-02",
    readMinutes: 14,
    focusKeyword: "rasmalai cake Goa",
    keywords: [
      "rasmalai cake Goa",
      "mithai cake Goa",
      "Indian wedding cake Goa",
      "rasmalai birthday cake Muskan",
      "Sweet Bites rasmalai",
      "premium cake Goa",
    ],
    creationSlug: "rasmalai-special-cake",
    difficulty: "Complex · moisture + soak balance",
    leadTime: "7–9 days",
    celebrationType: "Engagement lunch · 55 guests",
    relatedSlugs: ["wedding-cake-goa-case-study", "unicorn-cake-goa-case-study"],
    heroImage:
      "/images/rasmalai-special-cake/491518421_18058059962170730_4211335525194578377_n..webp",
    heroImageAlt:
      "Rasmalai cake Goa — mithai-style premium cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/rasmalai-special-cake",
    heroGalleryLabel: "View rasmalai creation",
    blocks: [
      {
        type: "p",
        text: `**Rasmalai cake Goa** orders sit between our [ready-made cakes menu](/cakes-menu) and full custom sculpts — families want cardamom, saffron, and that familiar mithai note, but they still need a cake that travels from [${site.studioCity}](/locations/velim) to [Margao](/locations/margao) without collapsing. This case study documents the [Rasmalai Special Cake](/creations/rasmalai-special-cake) Muskan made for an engagement lunch, including why soak level matters as much as rosette piping.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "If you are googling **rasmalai cake Goa**, compare bakers on moisture control and real photos — not stock images of generic yellow sponges.",
      },
      {
        type: "h2",
        text: "Brief: “Tastes like rasmalai, cuts like a wedding cake”",
        id: "brief",
      },
      {
        type: "p",
        text: "The family messaged after seeing our gallery rasmalai and the flavour list on [/cakes-menu](/cakes-menu). They needed one showstopper for 55 guests at a home hall — eggless for elders, standard sponge optional for a second small tier (declined to keep one unified flavour).",
      },
      {
        type: "ul",
        items: [
          "Design: white cream rosettes, saffron milk drizzle, pistachio dust — no heavy fondant blanket.",
          "Reference: [/creations/rasmalai-special-cake](/creations/rasmalai-special-cake) plus our [rabdi cake](/creations/rabdi-cake) for colour tone.",
          "Timeline: nine days — engagement on a Sunday; message on the prior Friday week.",
          "Add-on question: cupcakes for kids — Muskan quoted separately; they chose one tall cake only.",
        ],
      },
      {
        type: "h2",
        text: "Why rasmalai cakes are technically tricky",
        id: "why-tricky",
      },
      {
        type: "p",
        text: "Too much milk soak and tiers compress; too little and the **rasmalai cake Goa** name feels like plain vanilla with nuts on top. Muskan soaks controlled layers, drains briefly, and builds with a firmer buttercream ring so the sponge does not slide under rosette weight.",
      },
      {
        type: "h3",
        text: "Eggless sponge in humid halls",
      },
      {
        type: "p",
        text: "Eggless sponges for mithai flavours need tighter crumb and slightly less syrup than egg-based versions. We flag this on WhatsApp the same way we do for [eggless birthday cake Goa](/blog/eggless-birthday-cake-goa-flavours) orders — honesty prevents “too dense” feedback after the party.",
      },
      {
        type: "h2",
        text: "Build sequence",
        id: "build",
      },
      {
        type: "ul",
        items: [
          "Sponge bake with cardamom in batter — not only in soak.",
          "Syrup rested and cooled; applied in measured passes, not poured.",
          "Buttercream chill between rosette rows.",
          "Pistachio and saffron garnish last hour only.",
          "Boxed upright; 45-minute drive to Margao; photo sent on arrival.",
        ],
      },
      {
        type: "h2",
        text: "Menu board vs custom rasmalai",
        id: "menu-vs-custom",
      },
      {
        type: "p",
        text: "Sweet Bites lists **Rasmalai Cake** on our printed [cakes menu](/cakes-menu) for ready-made orders when the oven schedule allows. Custom versions like this case add height, writing, and event timing — message ${site.phone} with your date and we will say which path fits.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Elders recognised the flavour immediately; the cake held shape through two hours of photos and speeches. The family rebooked a [wedding tier cake](/case-studies/wedding-cake-goa-case-study) for the main reception two months later. Want similar? Send our creation link and guest count on WhatsApp.",
      },
      {
        type: "related",
        title: "Explore further",
        items: [
          { href: "/creations/rasmalai-special-cake", label: "Rasmalai gallery", description: "Order a similar design" },
          { href: "/cakes-menu", label: "Ready-made menu", description: "Flavours including rasmalai" },
          { href: "/blog/wedding-cake-delivery-goa-checklist", label: "Wedding delivery guide", description: "Handover tips for big events" },
        ],
      },
    ],
  },
  {
    slug: "haldi-cake-goa-case-study",
    title: "Case study: Haldi cake in Goa — marigold yellow, turmeric timing & a lawn that was not in the brief",
    excerpt:
      "Pre-wedding haldi cakes fail when treated like afternoon birthday buttercream. How Muskan planned yellow tones, eggless sponge, and delivery before the turmeric games at a North Goa home.",
    publishedAt: "2026-06-05",
    readMinutes: 14,
    focusKeyword: "haldi cake Goa",
    keywords: [
      "haldi cake Goa",
      "haldi ceremony cake",
      "pre-wedding cake Muskan",
      "yellow marigold cake Goa",
      "eggless haldi cake",
      "Sweet Bites haldi",
    ],
    creationSlug: "haldi-design-cake",
    difficulty: "Complex · heat + ceremony timing",
    leadTime: "8–10 days",
    celebrationType: "Haldi at home · 45 guests",
    relatedSlugs: ["wedding-cake-goa-case-study", "rasmalai-cake-goa-case-study"],
    heroImage:
      "/images/haldi-design-cake/498586910_18060535466170730_970917338585622900_n..webp",
    heroImageAlt: "Haldi cake Goa — yellow marigold-style ceremony cake by Sweet Bites",
    heroGalleryHref: "/creations/haldi-design-cake",
    heroGalleryLabel: "View haldi creation",
    blocks: [
      {
        type: "p",
        text: `A **haldi cake Goa** family books is often their first order with us — days before the white wedding tier. Muskan treats it as its own event: marigold palette, morning light, turmeric nearby, and elders who need eggless sponge. This case study walks through the [Haldi Design Cake](/creations/haldi-design-cake) we delivered near [Mapusa](/locations/mapusa), using the same venue discipline as our [wedding delivery guide](/blog/wedding-cake-delivery-goa-checklist).`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **haldi cake Goa**? Ask bakers how they handle outdoor tables, turmeric games, and eggless requests — not only yellow food colouring.",
      },
      {
        type: "h2",
        text: "Brief from the bride’s mother",
        id: "brief",
      },
      {
        type: "p",
        text: "WhatsApp thread included our haldi gallery photo, a marigold garland reference, and a firm date — haldi on Thursday, wedding on Sunday. Guest count modest (~45) but the cake table sat on a lawn beside the haldi mat.",
      },
      {
        type: "ul",
        items: [
          "Eggless vanilla-cardamom sponge for mixed family diet.",
          "Fresh cream finish — fondant avoided because of direct sun between 11 AM and 1 PM.",
          "Writing in English + Devanagari initials — short lines only.",
          "Second quote requested for [wedding cake](/case-studies/wedding-cake-goa-case-study) in same conversation.",
        ],
      },
      {
        type: "h2",
        text: "Why haldi mornings are harder than they look",
        id: "why-hard",
      },
      {
        type: "p",
        text: "Yellow buttercream that looks perfect in a cold kitchen can mute to beige outdoors. Muskan deepens saffron and marigold tones slightly so photos still read festive. Turmeric on hands near the table means simpler toppers — no dangling florals guests will brush.",
      },
      {
        type: "h2",
        text: "Delivery & table plan",
        id: "delivery",
      },
      {
        type: "ul",
        items: [
          "Venue photo received evening before — Muskan flagged lack of shade; family added umbrella same night.",
          "Delivery 9:30 AM — before guests in full yellow dress.",
          "Cake placed on inner veranda first, moved to lawn only for 15-minute photo window.",
          "WhatsApp photo to mother before anyone cut the first flower garland.",
        ],
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Cake held colour through noon; wedding tier booked in same thread. Read our [haldi tradition guide](/blog/haldi-cake-goa-tradition-guide) or [/haldi-cakes-goa](/haldi-cakes-goa) landing page, then message ${site.phone} with your ceremony date and lawn photos.",
      },
      {
        type: "related",
        title: "Related",
        items: [
          { href: "/haldi-cakes-goa", label: "Haldi cakes guide", description: "Planning & WhatsApp tips" },
          { href: "/creations/haldi-design-cake", label: "Haldi gallery", description: "Reference photos" },
          { href: "/wedding-cakes-goa", label: "Wedding cakes", description: "Reception tiers" },
        ],
      },
    ],
  },
  {
    slug: "ferrero-cake-goa-case-study",
    title: "Case study: Ferrero Rocher cake in Goa — chocolate shell, hazelnut crunch & a deadline before checkout",
    excerpt:
      "Ferrero cakes look like chocolate spheres until weight, humidity, and travel hit. Inside Muskan’s Ferrero special build for a Margao anniversary with a four-hour delivery window.",
    publishedAt: "2026-06-08",
    readMinutes: 13,
    focusKeyword: "Ferrero cake Goa",
    keywords: [
      "Ferrero cake Goa",
      "Ferrero Rocher cake delivery",
      "chocolate hazelnut cake Muskan",
      "anniversary chocolate cake Goa",
      "premium cake Goa",
      "Sweet Bites Ferrero",
    ],
    creationSlug: "ferraro-special-cake",
    difficulty: "Complex · weight + chocolate stability",
    leadTime: "7 days",
    celebrationType: "Anniversary dinner · 12 guests",
    relatedSlugs: ["rasmalai-cake-goa-case-study", "wedding-cake-goa-case-study"],
    heroImage:
      "/images/ferraro-special-cake/655117931_18106640332846451_6047524932188940240_n..webp",
    heroImageAlt: "Ferrero cake Goa — chocolate Ferrero Rocher style cake by Sweet Bites",
    heroGalleryHref: "/creations/ferraro-special-cake",
    heroGalleryLabel: "View Ferrero creation",
    blocks: [
      {
        type: "p",
        text: `**Ferrero cake Goa** searches spike around anniversaries and premium birthdays — clients want the gold-wrapper look without a cake that collapses in the car. Muskan documents this [Ferrero Special Cake](/creations/ferraro-special-cake) for a couple in [Margao](/locations/margao): hazelnut sponge, chocolate ganache, and Ferrero toppers added only after chill.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Compare **Ferrero cake Goa** bakers on real photos of finished cakes — not stock spheres — and ask how chocolate travels in afternoon heat.",
      },
      {
        type: "h2",
        text: "Brief: surprise dinner, tight window",
        id: "brief",
      },
      {
        type: "p",
        text: "Husband messaged from our [cakes menu](/cakes-menu) Ferrero line and gallery special. Needed eggless-adjacent (wife avoids eggs when possible — Muskan offered dense chocolate hazelnut without eggless label if sponge was standard with egg; client chose standard for texture). Dinner at 7 PM; pickup requested 3 PM from Velim.",
      },
      {
        type: "ul",
        items: [
          "8-inch single tier — 12 guests, no leftovers requested.",
          "Gold ribbon writing — two names, one line.",
          "Reference: [/creations/ferraro-special-cake](/creations/ferraro-special-cake).",
          "Also on menu board as Ferrero Rocher ready-made when oven allows.",
        ],
      },
      {
        type: "h2",
        text: "Chocolate in Goan warmth",
        id: "chocolate",
      },
      {
        type: "p",
        text: "Ganache softens faster than buttercream roses. Muskan keeps the cake chilled until handoff, uses a darker chocolate shell for structure, and adds whole Ferrero pieces at the studio door — not the night before. That is why the **Ferrero cake Goa** photo matches what arrived at the restaurant.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Restaurant kept cake in AC back office until dessert; couple sent a thank-you reel clip. Want similar? Message ${site.phone} with date, guest count, and whether pickup or delivery to your Goa town works better.",
      },
      {
        type: "related",
        title: "Explore",
        items: [
          { href: "/creations/ferraro-special-cake", label: "Ferrero gallery" },
          { href: "/anniversary-cakes-goa", label: "Anniversary guide" },
          { href: "/cakes-menu", label: "Ready-made menu" },
        ],
      },
    ],
  },
  {
    slug: "rainbow-cake-goa-case-study",
    title: "Case study: Rainbow cake in Goa — hidden layers, buttercream rosettes & a reveal that had to stay secret",
    excerpt:
      "Rainbow cakes fail when layers bleed or the outer rosettes melt before the surprise cut. How Muskan built a double-height rainbow for a Calangute birthday with a reveal moment on video.",
    publishedAt: "2026-06-10",
    readMinutes: 14,
    focusKeyword: "rainbow cake Goa",
    keywords: [
      "rainbow cake Goa",
      "rainbow birthday cake delivery",
      "double layer rainbow cake Muskan",
      "colourful cake Goa",
      "Sweet Bites rainbow",
      "kids rainbow cake Goa",
    ],
    creationSlug: "double-layered-rainbow-cake",
    difficulty: "Near-impossible · colour stability + height",
    leadTime: "8 days",
    celebrationType: "10th birthday · beach-adjacent villa",
    relatedSlugs: ["unicorn-cake-goa-case-study", "barbie-castle-cake-goa-case-study"],
    heroImage:
      "/images/double-layered-rainbow-cake/670355391_18093775997170730_3698923811068689438_n..webp",
    heroImageAlt: "Rainbow cake Goa — double layered rainbow cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/double-layered-rainbow-cake",
    heroGalleryLabel: "View rainbow creation",
    blocks: [
      {
        type: "p",
        text: `A **rainbow cake Goa** order is often for the reaction at the first slice — which means clean colour boundaries inside and stable rosettes outside. Muskan’s [Double Layered Rainbow Cake](/creations/double-layered-rainbow-cake) for a [Calangute](/locations/calangute) villa party paired with our [reels](/reels) process clip so parents knew what they were booking.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "If you need a **rainbow cake Goa** delivery, ask how colours are built inside versus painted on the outside only.",
      },
      {
        type: "h2",
        text: "Brief: “Surprise when we cut”",
        id: "brief",
      },
      {
        type: "p",
        text: "Mother wanted neutral white-cream outside so the rainbow stayed secret until knife-through. Ten-year-old, ~22 kids, pool nearby — afternoon party with partial shade on the cake table.",
      },
      {
        type: "ul",
        items: [
          "Six thin colour layers per tier — no artificial aftertaste requested.",
          "Buttercream rosettes outside — piped cold, transported chilled.",
          "Also listed on [/cakes-menu](/cakes-menu) as Rainbow Cake for ready-made orders.",
          "Linked [unicorn](/case-studies/unicorn-cake-goa-case-study) gallery for pastel inspiration — chose bolder interior instead.",
        ],
      },
      {
        type: "h2",
        text: "Build & reveal moment",
        id: "build",
      },
      {
        type: "ul",
        items: [
          "Layers baked day apart to reduce kitchen humidity load.",
          "Crumb coat white — colour only inside cuts.",
          "Second tier dowelled; rosettes applied morning-of.",
          "Delivery early afternoon; cake stayed in villa kitchen until singing.",
          "Family videoed slice — shared on WhatsApp same evening.",
        ],
      },
      {
        type: "h2",
        text: "Poolside heat",
        id: "heat",
      },
      {
        type: "p",
        text: "Rosettes softened slightly by hour three but held shape for photos that mattered. Muskan’s note: neutral outside + rainbow inside is a strong **rainbow cake Goa** strategy when parties run hot.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Kids reacted on first cut; mother booked a [bento](/blog/bento-cake-goa-order-guide) for school the next week. Message ${site.phone} with date, guest count, and villa or hall photos.",
      },
      {
        type: "related",
        title: "Keep exploring",
        items: [
          { href: "/creations/double-layered-rainbow-cake", label: "Rainbow gallery + reel" },
          { href: "/kids-birthday-cakes-goa", label: "Kids birthday guide" },
          { href: "/locations/calangute", label: "Calangute delivery" },
        ],
      },
    ],
  },
  {
    slug: "bento-cake-goa-case-study",
    title: "Case study: Bento cake in Goa — surprise tin, midnight message & delivery before office hours",
    excerpt:
      "Bento cakes win when the message is short, the tin travels upright, and expectations stay realistic. A Margao anniversary surprise built in one day’s notice — almost.",
    publishedAt: "2026-06-12",
    readMinutes: 12,
    focusKeyword: "bento cake Goa",
    keywords: [
      "bento cake Goa",
      "surprise bento cake delivery",
      "mini cake Goa Muskan",
      "anniversary bento cake",
      "order bento WhatsApp",
      "Sweet Bites bento",
    ],
    creationSlug: "birthday-bento-cake",
    difficulty: "Rush · small format precision",
    leadTime: "3 days (rush)",
    celebrationType: "Anniversary surprise · 2 people",
    relatedSlugs: ["ferrero-cake-goa-case-study", "rainbow-cake-goa-case-study"],
    heroImage:
      "/images/birthday-bento-cake/650632700_17960557692063227_8656779859842787014_n..webp",
    heroImageAlt: "Bento cake Goa — birthday bento tin cake by Sweet Bites",
    heroGalleryHref: "/creations/birthday-bento-cake",
    heroGalleryLabel: "View bento creation",
    blocks: [
      {
        type: "p",
        text: `A **bento cake Goa** order is the opposite of a castle tier — tiny canvas, one message line, and a recipient who must not see the tin early. This case study covers a [Birthday Bento Cake](/creations/birthday-bento-cake) Muskan squeezed in for a [Margao](/locations/margao) anniversary when the husband messaged late but honestly.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "**Bento cake Goa** works best with a clear flavour, short text, and realistic timing — not a full figurine scene in a 4-inch tin.",
      },
      {
        type: "h2",
        text: "Brief: Wednesday message, Saturday anniversary",
        id: "brief",
      },
      {
        type: "p",
        text: "Client saw our [bento guide](/blog/bento-cake-goa-order-guide) and gallery tin. Needed delivery Saturday 8 AM before wife left for work — eggless chocolate, “5 years” and two initials only.",
      },
      {
        type: "ul",
        items: [
          "Flavour: eggless chocolate sponge + light coffee buttercream.",
          "Colours: blush pink tin wrap aesthetic in photo — matched in buttercream.",
          "No figurines — handwriting-style piping only.",
          "Pickup declined; delivery to apartment lobby with security coordination.",
        ],
      },
      {
        type: "h2",
        text: "Why bentos need different rules",
        id: "rules",
      },
      {
        type: "p",
        text: "Small surface area shows every smudge; Muskan limits to two colours and one focal message. Tin lid must travel locked — same upright discipline as tier cakes, scaled down.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Delivered 7:45 AM; security held box until husband arrived. Wife’s office WhatsApp photo made Muskan’s week. Planning a small surprise? See [/bento-cakes-goa](/bento-cakes-goa) or message ${site.phone}.",
      },
      {
        type: "related",
        title: "Related",
        items: [
          { href: "/bento-cakes-goa", label: "Bento cakes guide" },
          { href: "/creations/bento-cake", label: "Classic bento gallery" },
          { href: "/blog/bento-cake-goa-order-guide", label: "Bento journal" },
        ],
      },
    ],
  },
  {
    slug: "matilda-cake-goa-case-study",
    title: "Case study: Matilda cake in Goa — book stack, chocolate drip & a seven-year-old who knew every scene",
    excerpt:
      "Literary kids cakes fail when the book stack leans or the drip sets too soft for delivery. How Muskan built a Matilda-themed birthday cake for a Mapusa society hall — and kept the chocolate curtain intact on laterite roads.",
    publishedAt: "2026-06-14",
    readMinutes: 15,
    focusKeyword: "Matilda cake Goa",
    keywords: [
      "Matilda cake Goa",
      "book cake Goa kids",
      "literary birthday cake Muskan",
      "chocolate drip cake delivery",
      "kids character cake Goa",
      "Sweet Bites Matilda",
    ],
    creationSlug: "matilda-cake",
    difficulty: "Complex · stacked books + drip timing",
    leadTime: "8 days",
    celebrationType: "7th birthday · 35 guests",
    relatedSlugs: ["spiderman-cake-goa-case-study", "unicorn-cake-goa-case-study"],
    heroImage:
      "/images/matilda-cake/572167049_18077596592170730_3871403483041117435_n..webp",
    heroImageAlt: "Matilda cake Goa — book stack kids birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/matilda-cake",
    heroGalleryLabel: "View Matilda creation",
    blocks: [
      {
        type: "p",
        text: `A **Matilda cake Goa** parent usually arrives with a still from the film, a stack of book references, and one fear: will the chocolate drip melt before the kids sing? Muskan’s [Matilda Cake](/creations/matilda-cake) for a [Mapusa](/locations/mapusa) society party shows how literary themes get the same structural respect as superheroes — dowelling, drip schedule, and a process [reel](/reels) sent before balance payment.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Why this matters if you are searching Matilda cake Goa",
        text: "Book-stack toppers are top-heavy. Ask your baker how they travel upright and when drip is applied — not only how pink the buttercream is.",
      },
      {
        type: "h2",
        text: "Brief: “She has watched Matilda six times”",
        id: "brief",
      },
      {
        type: "p",
        text: "Mother messaged with our gallery link and a photo of stacked vintage books from Pinterest. Daughter turning seven; ~35 kids in a shaded society hall — better than open lawn, but still warm by 4 PM. Eggless sponge requested for classmates.",
      },
      {
        type: "ul",
        items: [
          "Two-tier buttercream base — books and Matilda figurine on top board.",
          "Colours: burgundy, cream, chocolate drip — no airbrush booth on site.",
          "Writing: “Happy 7th” plus child’s name — confirmed spelling on WhatsApp.",
          "Linked [kids birthday guide](/kids-birthday-cakes-goa) for lead-time expectations.",
        ],
      },
      {
        type: "h2",
        text: "Build: when the drip goes on",
        id: "build",
      },
      {
        type: "p",
        text: "Muskan pipes book spines in fondant panels day five, assembles stack on a separate board day seven, and applies chocolate drip **morning-of** after chill. Drip too early in Goan humidity = curtain on the table instead of on the cake. That single scheduling choice is half of a successful **Matilda cake Goa** delivery.",
      },
      {
        type: "callout",
        variant: "note",
        title: "WhatsApp proof",
        text: `Progress photos on days 3, 5, and morning-of — same transparency as our [Spiderman case study](/case-studies/spiderman-cake-goa-case-study). Message ${site.phone} if you want that visibility.`,
      },
      {
        type: "h2",
        text: "Delivery & the society hall handoff",
        id: "delivery",
      },
      {
        type: "ul",
        items: [
          "Upright box — books never travel flat.",
          "Driver route via internal Mapusa roads to avoid long vibration on stack.",
          "Handoff to father in hall kitchen 75 minutes before kids arrived.",
          "Cake stayed on steel table away from entrance balloons — no bumper risk.",
        ],
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Girl recognised the book stack immediately; drip held through photos and cake cutting. Family booked a [unicorn](/case-studies/unicorn-cake-goa-case-study) for a cousin three months later. Planning a literary theme? Send date, hall photos, and our creation link on WhatsApp.",
      },
      {
        type: "related",
        title: "Keep exploring",
        items: [
          { href: "/creations/matilda-cake", label: "Matilda gallery + reel" },
          { href: "/kids-birthday-cakes-goa", label: "Kids birthday guide" },
          { href: "/blog/kids-birthday-cake-goa-character-themes", label: "Character planning journal" },
        ],
      },
    ],
  },
  {
    slug: "football-cake-goa-case-study",
    title: "Case study: Football birthday cake in Goa — pitch green, goal posts & a Saturday that booked out early",
    excerpt:
      "Sports cakes look easy until the ball fondant dents in the car. Muskan’s football design cake for a Vasco society tournament party — structure, buttercream pitch lines, and delivery before the kids’ match ended.",
    publishedAt: "2026-06-16",
    readMinutes: 14,
    focusKeyword: "football birthday cake Goa",
    keywords: [
      "football birthday cake Goa",
      "football cake design Muskan",
      "sports birthday cake delivery",
      "boys birthday cake Goa",
      "soccer cake Goa",
      "Sweet Bites football cake",
    ],
    creationSlug: "football-design-birthday-cake",
    difficulty: "Medium-high · field lines + ball weight",
    leadTime: "7 days",
    celebrationType: "9th birthday · society tournament",
    relatedSlugs: ["spiderman-cake-goa-case-study", "matilda-cake-goa-case-study"],
    heroImage:
      "/images/football-design-birthday-cake/670397450_18093090290170730_8162724405892477661_n..webp",
    heroImageAlt: "Football birthday cake Goa — green pitch design cake by Sweet Bites",
    heroGalleryHref: "/creations/football-design-birthday-cake",
    heroGalleryLabel: "View football creation",
    blocks: [
      {
        type: "p",
        text: `**Football birthday cake Goa** orders spike every World Cup season — but most families need a cake for a local society tournament, not a TV studio set. Muskan’s [Football Design Birthday Cake](/creations/football-design-birthday-cake) for [Vasco](/locations/vasco) shows how pitch-green buttercream, white line piping, and a fondant ball survive heat when you plan handoff like a match schedule.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **football birthday cake Goa**? Send Muskan a photo of the party venue — open ground vs shaded pavilion changes everything.",
      },
      {
        type: "h2",
        text: "Brief: cake after the match, not before",
        id: "brief",
      },
      {
        type: "p",
        text: "Father coaches U-10; wanted cake ready when kids returned from the ground at 5:30 PM. Theme: green pitch, one goal-post topper, jersey number 9 in white. ~28 kids; standard sponge (not eggless). Message arrived on a Monday for Saturday — tight but honest.",
      },
      {
        type: "ul",
        items: [
          "Single 10-inch tier — enough for kids + parents without a second dessert.",
          "Buttercream field — fondant ball made hollow-ish to reduce weight.",
          "Colours matched FC Goa scarf photo client sent — not generic neon green.",
          "Reel on creation page used as reference — saved two revision rounds.",
        ],
      },
      {
        type: "h2",
        text: "Why sports cakes are not “flat rounds with a ball”",
        id: "why-hard",
      },
      {
        type: "p",
        text: "White line piping on green buttercream shows every smudge when kids lean in. Muskan chills the tier before lines, uses a guide comb, and keeps the fondant ball in a separate small box until handoff — same discipline as character toppers on **football birthday cake Goa** deliveries to beach areas.",
      },
      {
        type: "h2",
        text: "Heat & handoff at the pavilion",
        id: "heat",
      },
      {
        type: "ul",
        items: [
          "Delivery 5:00 PM — cake in pavilion store room, not open bench.",
          "Muskan flagged weak shade in venue photo; family moved table under awning.",
          "Ball placed on cake on site — zero dents from transport.",
          "Kids wore muddy boots; cake table roped off with chairs — simple win.",
        ],
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Team photo with cake went to WhatsApp group same evening; coach rebooked a [rainbow](/case-studies/rainbow-cake-goa-case-study) for a younger sibling. Want a pitch-themed cake? Message ${site.phone} with date, guest count, and whether the party is outdoors.",
      },
      {
        type: "related",
        title: "Explore",
        items: [
          { href: "/creations/football-design-birthday-cake", label: "Football gallery + reel" },
          { href: "/kids-birthday-cakes-goa", label: "Kids birthday guide" },
          { href: "/birthday-cakes-goa", label: "Birthday cakes Goa" },
        ],
      },
    ],
  },
  {
    slug: "rabdi-dream-cake-goa-case-study",
    title: "Case study: Rabdi dream cake in Goa — desi luxury, slow soak & a wedding-week family dinner",
    excerpt:
      "Rabdi cakes fail when the soak is rushed or the rose petals wilt before photos. How Muskan layered rabdi flavour, pistachio crunch, and gold accents for a Ponda home dinner the night before a white wedding tier.",
    publishedAt: "2026-06-18",
    readMinutes: 15,
    focusKeyword: "rabdi cake Goa",
    keywords: [
      "rabdi cake Goa",
      "rabdi dream cake Muskan",
      "Indian fusion cake Goa",
      "premium dessert cake Goa",
      "wedding week cake Goa",
      "Sweet Bites rabdi",
    ],
    creationSlug: "rabdi-dream-cake",
    difficulty: "Near-impossible · soak timing + heat",
    leadTime: "10 days",
    celebrationType: "Pre-wedding family dinner · 60 guests",
    relatedSlugs: ["rasmalai-cake-goa-case-study", "wedding-cake-goa-case-study"],
    heroImage:
      "/images/rabdi-dream-cake/571766742_18077245361170730_3409980196157018422_n..webp",
    heroImageAlt: "Rabdi dream cake Goa — Indian fusion celebration cake by Sweet Bites",
    heroGalleryHref: "/creations/rabdi-dream-cake",
    heroGalleryLabel: "View rabdi dream creation",
    blocks: [
      {
        type: "p",
        text: `A **rabdi cake Goa** family books when they want guests to taste the sweet shop, not just see frosting. Muskan’s [Rabdi Dream Cake](/creations/rabdi-dream-cake) for a [Ponda](/locations/ponda) home dinner — booked in the same WhatsApp thread as a [white wedding tier](/case-studies/wedding-cake-goa-case-study) two days later — shows how desi luxury needs soak time, restrained florals, and honest talk about afternoon humidity.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Rabdi vs rasmalai — what to ask",
        text: "**Rabdi cake Goa** is richer and slower-soaked; **rasmalai** is lighter and milk-forward. Tell Muskan which dessert your elders actually eat at functions.",
      },
      {
        type: "h2",
        text: "Brief: family dinner before the big white cake",
        id: "brief",
      },
      {
        type: "p",
        text: "Bride’s uncle messaged after loving our [rasmalai case study](/case-studies/rasmalai-cake-goa-case-study). Needed a showpiece for ~60 at home — rabdi flavour, pistachio, rose petals, gold leaf accents. Dinner Thursday; wedding Saturday. Eggless sponge non-negotiable for elders.",
      },
      {
        type: "ul",
        items: [
          "Two-tier: cardamom sponge, rabdi soak between layers, light mascarpone-style finish.",
          "Decor: edible rose, pistachio dust, gold — no heavy fondant blanket.",
          "Delivery 6 PM — cake cut after dinner, not left on veranda all afternoon.",
          "Second quote in thread for wedding tier — separate bake schedule, one conversation.",
        ],
      },
      {
        type: "h2",
        text: "Soak schedule Muskan will not skip",
        id: "soak",
      },
      {
        type: "p",
        text: "Rabdi syrup applied in passes — not one flood the night before. Layers rest chilled; finish and florals morning-of. Rush this step and the **rabdi cake Goa** sags in the middle while the top still looks perfect — the failure mode Muskan avoids by blocking oven time like a wedding week, not a casual birthday.",
      },
      {
        type: "h2",
        text: "Veranda dinner, warm air",
        id: "heat",
      },
      {
        type: "ul",
        items: [
          "Family moved cake from outer veranda to dining room when Muskan flagged 4 PM sun.",
          "Gold leaf applied at studio — not on site in breeze.",
          "Uncle sent voice note thank-you in Konkani — reel clip shared next day.",
          "Wedding tier delivered Saturday without changing soak recipe — flavour matched.",
        ],
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Elders asked for recipe card (Muskan shares flavour notes, not full commercial recipe). Wedding tier booked in same thread. Want desi luxury? Compare [rasmalai](/case-studies/rasmalai-cake-goa-case-study) and rabdi galleries, then message ${site.phone} with guest count and dinner timing.",
      },
      {
        type: "related",
        title: "Related",
        items: [
          { href: "/creations/rabdi-dream-cake", label: "Rabdi dream gallery + reel" },
          { href: "/wedding-cakes-goa", label: "Wedding cakes guide" },
          { href: "/cakes-menu", label: "Ready-made menu" },
        ],
      },
    ],
  },
  {
    slug: "anniversary-heart-cake-goa-case-study",
    title: "Case study: Anniversary heart cake in Goa — cream roses, 25 years & a Candolim sunset surprise",
    excerpt:
      "Heart cakes tip when dowelling is wrong or names are too long for warm buttercream. Muskan’s cream heart anniversary cake — surprise delivery to a resort villa, short writing, and florals that held through golden hour.",
    publishedAt: "2026-06-20",
    readMinutes: 13,
    focusKeyword: "anniversary heart cake Goa",
    keywords: [
      "anniversary heart cake Goa",
      "heart shaped cake delivery",
      "cream rose anniversary cake",
      "couple cake Candolim",
      "25th anniversary cake Muskan",
      "Sweet Bites anniversary",
    ],
    creationSlug: "cream-heart-anniversery-cake",
    difficulty: "Complex · heart balance + romantic piping",
    leadTime: "8 days",
    celebrationType: "25th anniversary · surprise for 2 + family dinner",
    relatedSlugs: ["ferrero-cake-goa-case-study", "bento-cake-goa-case-study"],
    heroImage:
      "/images/cream-heart-anniversery-cake/482668294_18053699921170730_1765706686871389592_n..webp",
    heroImageAlt: "Anniversary heart cake Goa — cream heart cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/cream-heart-anniversery-cake",
    heroGalleryLabel: "View anniversary heart creation",
    blocks: [
      {
        type: "p",
        text: `An **anniversary heart cake Goa** search is usually urgent and emotional — husband or daughter, a resort in [Candolim](/locations/candolim), and a photo of our [Cream Heart Anniversary Cake](/creations/cream-heart-anniversery-cake). Muskan treats heart shapes like engineering: internal board, centred weight, short writing, and delivery timed for sunset photos before dinner service takes over the villa table.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "For **anniversary heart cake Goa**, send exact names and years on WhatsApp — Muskan will shorten copy if the heart diameter is under 8 inches.",
      },
      {
        type: "h2",
        text: "Brief: 25 years, daughter organising the surprise",
        id: "brief",
      },
      {
        type: "p",
        text: "Daughter in Mumbai coordinated; parents at Candolim villa. Needed cake on balcony at 6:30 PM while parents were on the beach — peach cream, buttercream roses, “25” and first names only. Eggless vanilla for mother. Eight extra slices for villa staff who helped all week.",
      },
      {
        type: "ul",
        items: [
          "Heart pan + support board — not a round carved into heart (cleaner edges).",
          "Flavour: eggless vanilla + peach buttercream — light for warm evening.",
          "Fresh cream roses — added at studio, not day before.",
          "Linked [/anniversary-cakes-goa](/anniversary-cakes-goa) guide for daughter’s planning.",
        ],
      },
      {
        type: "h2",
        text: "Why heart cakes need different dowelling",
        id: "structure",
      },
      {
        type: "p",
        text: "Points of a heart carry weight unevenly. Muskan uses a centred dowel into the board and keeps rose clusters on the upper curves — not the tip — so transport on coastal roads does not compress the point. That is the difference between a Pinterest heart and a delivered **anniversary heart cake Goa** families actually photograph.",
      },
      {
        type: "h2",
        text: "Resort handoff & golden hour",
        id: "delivery",
      },
      {
        type: "ul",
        items: [
          "Concierge contact on WhatsApp — cake to villa fridge, not pool deck.",
          "Driver photo to daughter in Mumbai before parents returned.",
          "Placed on balcony table 6:20 PM — roses intact in sea breeze.",
          "Parents’ sunset photo used on Google review same week.",
        ],
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Mother cried; father asked for Muskan’s card for a colleague’s [Ferrero](/case-studies/ferrero-cake-goa-case-study) anniversary. Daughter later ordered a [bento](/case-studies/bento-cake-goa-case-study) for parents’ flight home. Planning a heart cake? Message ${site.phone} with date, resort name, and exact writing.",
      },
      {
        type: "related",
        title: "Keep exploring",
        items: [
          { href: "/creations/cream-heart-anniversery-cake", label: "Heart anniversary gallery + reel" },
          { href: "/anniversary-cakes-goa", label: "Anniversary guide" },
          { href: "/locations/candolim", label: "Candolim delivery" },
        ],
      },
    ],
  },
  {
    slug: "cocomelon-cake-goa-case-study",
    title: "Case study: Cocomelon cake in Goa — toddler faces, bright colours & a party that started at 10 AM",
    excerpt:
      "Toddler character cakes fail when proportions look wrong or colours fade outdoors. How Muskan built a Cocomelon kids cake for a Panaji apartment party — with a process reel the parents shared before cutting.",
    publishedAt: "2026-06-22",
    readMinutes: 14,
    focusKeyword: "Cocomelon cake Goa",
    keywords: [
      "Cocomelon cake Goa",
      "Cocomelon birthday cake Muskan",
      "toddler cake delivery Goa",
      "kids character cake Panaji",
      "JJ cake Goa",
      "Sweet Bites Cocomelon",
    ],
    creationSlug: "cocomelon-kids-cake",
    difficulty: "Medium-high · character faces + bright buttercream",
    leadTime: "7–8 days",
    celebrationType: "2nd birthday · 20 guests",
    relatedSlugs: ["spiderman-cake-goa-case-study", "matilda-cake-goa-case-study"],
    heroImage:
      "/images/cocomelon-kids-cake/543643115_18071286953170730_6909029689256817591_n..jpg",
    heroImageAlt: "Cocomelon cake Goa — kids birthday character cake by Sweet Bites",
    heroGalleryHref: "/creations/cocomelon-kids-cake",
    heroGalleryLabel: "View Cocomelon creation",
    blocks: [
      {
        type: "p",
        text: `A **Cocomelon cake Goa** order usually means a parent who has heard “JJ” on loop for months and wants the face to look right — not like a generic green circle. Muskan’s [Cocomelon Kids Cake](/creations/cocomelon-kids-cake) for a [Panaji](/locations/panaji) apartment party shows how toddler themes get the same planning as bigger character cakes: face proportions, chilled delivery, and a [reel](/reels) sent before balance payment.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **Cocomelon cake Goa**? Send Muskan a screenshot of the character your child means — and whether the party is indoors — before you lock a Saturday date.",
      },
      {
        type: "h2",
        text: "Brief: second birthday, small guest list",
        id: "brief",
      },
      {
        type: "p",
        text: "Mother messaged with our gallery Cocomelon photo and a foreign reel where the face looked too flat. Party at home, ~20 people, mostly toddlers. Morning slot 10 AM — cooler than afternoon beach parties but still humid.",
      },
      {
        type: "ul",
        items: [
          "Single tier, 8-inch — enough for kids + parents without waste.",
          "Colours: watermelon red, leaf green, soft yellow — hand-mixed, not neon gel overload.",
          "Eggless sponge for two allergic cousins — flagged on line one.",
          "Linked [/kids-birthday-cakes-goa](/kids-birthday-cakes-goa) for lead-time expectations.",
        ],
      },
      {
        type: "h2",
        text: "Face work Muskan will not rush",
        id: "face",
      },
      {
        type: "p",
        text: "Toddler faces need bigger eyes and simpler mouths than Pinterest teen characters. Muskan sketches on paper first, pipes on a separate board, then places the face on the tier morning-of so transport does not smear cheeks. That workflow is why this **Cocomelon cake Goa** matched the gallery photo the parents approved on WhatsApp.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Child pointed at the face and said the name immediately; parents shared the reel in the family group. Aunt booked [Spiderman](/case-studies/spiderman-cake-goa-case-study) for a cousin six weeks later. Message ${site.phone} with date, indoor/outdoor, and our creation link.",
      },
      {
        type: "related",
        title: "Explore",
        items: [
          { href: "/creations/cocomelon-kids-cake", label: "Cocomelon gallery + reel" },
          { href: "/kids-birthday-cakes-goa", label: "Kids birthday guide" },
          { href: "/blog/kids-birthday-cake-goa-character-themes", label: "Character planning journal" },
        ],
      },
    ],
  },
  {
    slug: "pink-butterfly-cake-goa-case-study",
    title: "Case study: Pink butterfly cake in Goa — pastel wings, gold dust & a first birthday in Candolim",
    excerpt:
      "Butterfly cakes look delicate until Goa humidity softens wings before photos. Muskan’s pink butterfly birthday cake for a beach-adjacent villa — wafer wings, buttercream roses, and delivery timed for shade.",
    publishedAt: "2026-06-24",
    readMinutes: 13,
    focusKeyword: "butterfly birthday cake Goa",
    keywords: [
      "butterfly birthday cake Goa",
      "pink butterfly cake Muskan",
      "pastel birthday cake Goa",
      "first birthday cake Candolim",
      "girls birthday cake Goa",
      "Sweet Bites butterfly cake",
    ],
    creationSlug: "pink-butterfly-birthday-cake",
    difficulty: "Complex · wafer wings + pastel stability",
    leadTime: "8 days",
    celebrationType: "1st birthday · 30 guests",
    relatedSlugs: ["unicorn-cake-goa-case-study", "rainbow-cake-goa-case-study"],
    heroImage:
      "/images/pink-butterfly-birthday-cake/653406090_18038518757574751_2590818537000039774_n..webp",
    heroImageAlt: "Pink butterfly birthday cake Goa — pastel cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/pink-butterfly-birthday-cake",
    heroGalleryLabel: "View butterfly creation",
    blocks: [
      {
        type: "p",
        text: `A **butterfly birthday cake Goa** search often comes from parents who want soft pink, gold dust, and wings that still look crisp in photos — not melted fondant an hour after delivery. This case study follows Muskan’s [Pink Butterfly Birthday Cake](/creations/pink-butterfly-birthday-cake) for a first birthday near [Candolim](/locations/candolim), with the same shade discipline we use on [unicorn](/case-studies/unicorn-cake-goa-case-study) pastels.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Pastel in Goa",
        text: "We deepen blush and lavender slightly for outdoor **butterfly birthday cake Goa** orders — cameras restore the softness parents expect from Pinterest.",
      },
      {
        type: "h2",
        text: "Brief: “Soft, not babyish”",
        id: "brief",
      },
      {
        type: "p",
        text: "Parents wanted elegant, not cartoon-heavy — butterflies on wires, buttercream roses, gold dust, name on board. Villa lawn with partial shade; party 5 PM. Standard sponge; ~30 guests.",
      },
      {
        type: "ul",
        items: [
          "Two-tier visual — one cake tier plus elevated butterfly board for height in photos.",
          "Wafer wings attached at studio door — not night before.",
          "Number “1” gold topper — confirmed spelling and font on WhatsApp.",
          "Second gallery angle shared from [/creations/pink-butterfly-birthday-cake](/creations/pink-butterfly-birthday-cake).",
        ],
      },
      {
        type: "h2",
        text: "Wings and heat",
        id: "wings",
      },
      {
        type: "p",
        text: "Muskan uses dried wafer or thin fondant wings with wire supports — lighter than full fondant sculptures. Cake stayed in villa kitchen until parents moved it to the lawn table under umbrella for 20 minutes of photos. One wing tip softened slightly; still read beautifully on Instagram — honest expectation-setting is part of **butterfly birthday cake Goa** planning.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Grandparents praised elegance; mother rebooked a [rainbow](/case-studies/rainbow-cake-goa-case-study) for an older child. Planning pastels? Message ${site.phone} with venue photos and date.",
      },
      {
        type: "related",
        title: "Related",
        items: [
          { href: "/creations/pink-butterfly-birthday-cake", label: "Butterfly gallery" },
          { href: "/birthday-cakes-goa", label: "Birthday cakes guide" },
          { href: "/locations/candolim", label: "Candolim delivery" },
        ],
      },
    ],
  },
  {
    slug: "chocolate-sphere-cake-goa-case-study",
    title: "Case study: Chocolate sphere cake in Goa — round shell, hidden surprise & a corporate send-off",
    excerpt:
      "Sphere cakes collapse when the shell is too thin or chocolate travels warm. Muskan’s chocolate sphere for a Panaji office farewell — structure, ganache schedule, and handoff in AC.",
    publishedAt: "2026-06-26",
    readMinutes: 14,
    focusKeyword: "chocolate sphere cake Goa",
    keywords: [
      "chocolate sphere cake Goa",
      "sphere cake delivery Goa",
      "chocolate surprise cake Muskan",
      "corporate cake Goa",
      "premium chocolate cake Goa",
      "Sweet Bites sphere cake",
    ],
    creationSlug: "chocolate-sphere-cake",
    difficulty: "Near-impossible · sphere weight + chocolate temper",
    leadTime: "9 days",
    celebrationType: "Office farewell · 25 colleagues",
    relatedSlugs: ["ferrero-cake-goa-case-study", "rabdi-dream-cake-goa-case-study"],
    heroImage:
      "/images/chocolate-sphere-cake/656803683_18087749065975887_8207759847287124871_n..webp",
    heroImageAlt: "Chocolate sphere cake Goa — round chocolate celebration cake by Sweet Bites",
    heroGalleryHref: "/creations/chocolate-sphere-cake",
    heroGalleryLabel: "View sphere creation",
    blocks: [
      {
        type: "p",
        text: `A **chocolate sphere cake Goa** brief is the adult version of “make it wow” — round shell, crack-to-reveal moment, often for offices or anniversaries. Muskan’s [Chocolate Sphere Cake](/creations/chocolate-sphere-cake) for a [Panaji](/locations/panaji) farewell lunch shows how sphere formats need chocolate thickness, chilled transport, and a reveal plan — not just a Pinterest mould photo.`,
      },
      {
        type: "callout",
        variant: "note",
        title: "Different from Ferrero",
        text: "Our [Ferrero case study](/case-studies/ferrero-cake-goa-case-study) covers hazelnut tiers; **chocolate sphere cake Goa** is about the round shell and crack moment — ask which format fits your event.",
      },
      {
        type: "h2",
        text: "Brief: colleague farewell, office AC",
        id: "brief",
      },
      {
        type: "p",
        text: "HR messaged with sphere photos from our gallery and a two-day deadline — tight. Colleague leaving; 25 people; lunchroom with AC. Dark chocolate exterior, gold leaf, company colours on base board only.",
      },
      {
        type: "ul",
        items: [
          "Sphere ~10-inch visual on stand — not a full ball guests cannot slice.",
          "Interior: chocolate sponge + ganache — revealed when shell is cracked.",
          "Delivery 11:30 AM; cake in office kitchen fridge until 1 PM lunch.",
          "Muskan declined extra floating spheres — stability over Pinterest extras.",
        ],
      },
      {
        type: "h2",
        text: "Build & crack moment",
        id: "build",
      },
      {
        type: "p",
        text: "Shell moulded in passes, chilled between layers. Muskan rehearsed crack technique on video for the organiser — tap with wooden spoon, not knife — so the **chocolate sphere cake Goa** moment looked intentional on camera. Sphere traveled in a custom upright box, same discipline as tier cakes.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Team cracked it together; video went to the colleague on WhatsApp abroad. HR saved Muskan’s number for Diwali hampers and a future [Ferrero](/case-studies/ferrero-cake-goa-case-study) order. Want a sphere? Message ${site.phone} with date, guest count, and whether you have fridge space.",
      },
      {
        type: "related",
        title: "Keep exploring",
        items: [
          { href: "/creations/chocolate-sphere-cake", label: "Sphere gallery" },
          { href: "/cakes-menu", label: "Ready-made menu" },
          { href: "/locations/panaji", label: "Panaji delivery" },
        ],
      },
    ],
  },
  {
    slug: "golden-cream-cake-goa-case-study",
    title: "Case study: Golden cream birthday cake in Goa — elegant buttercream, 50th gold & a hall full of family",
    excerpt:
      "Milestone birthdays need readable gold, stable roses, and portions for 60 without a wedding budget. How Muskan built a golden cream cake for a Margao golden anniversary-style 50th.",
    publishedAt: "2026-06-28",
    readMinutes: 13,
    focusKeyword: "golden cream birthday cake Goa",
    keywords: [
      "golden cream birthday cake Goa",
      "50th birthday cake Goa",
      "gold buttercream cake Muskan",
      "elegant birthday cake Margao",
      "milestone cake delivery Goa",
      "Sweet Bites golden cake",
    ],
    creationSlug: "golden-cream-birthday-cake",
    difficulty: "Medium · gold tone + large tier portions",
    leadTime: "8 days",
    celebrationType: "50th birthday · 60 guests",
    relatedSlugs: ["anniversary-heart-cake-goa-case-study", "wedding-cake-goa-case-study"],
    heroImage:
      "/images/golden-cream-birthday-cake/624880407_18052417967703847_5140043511432543654_n..webp",
    heroImageAlt: "Golden cream birthday cake Goa — gold buttercream cake by Sweet Bites",
    heroGalleryHref: "/creations/golden-cream-birthday-cake",
    heroGalleryLabel: "View golden cream creation",
    blocks: [
      {
        type: "p",
        text: `A **golden cream birthday cake Goa** family books when they want elegance without a full wedding tier — buttercream roses, gold dust, and writing that reads in a crowded hall. Muskan’s [Golden Cream Birthday Cake](/creations/golden-cream-birthday-cake) for a [Margao](/locations/margao) society function shows how milestone palettes differ from kids character work: fewer toppers, more portion planning, honest talk about gold in warm rooms.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "For **golden cream birthday cake Goa**, send guest count early — Muskan sizes tiers so you are not left with three kilos of leftovers or a cake that runs out before cousins are served.",
      },
      {
        type: "h2",
        text: "Brief: fiftieth, not a wedding",
        id: "brief",
      },
      {
        type: "p",
        text: "Daughter organised from Dubai over WhatsApp — references our golden gallery photo and a simpler wedding tier from a cousin’s event. ~60 guests, society hall, evening 7 PM. Eggless option for father; standard for rest.",
      },
      {
        type: "ul",
        items: [
          "Two-tier buttercream — gold palette, cream roses, edible gold dust.",
          "Writing: “50” and first name only — large enough for hall photos.",
          "Flavour: vanilla-cardamom sponge + light buttercream — not heavy chocolate in heat.",
          "Delivery coordinated with hall caretaker — cake to side room, not entrance.",
        ],
      },
      {
        type: "h2",
        text: "Gold that photographs",
        id: "gold",
      },
      {
        type: "p",
        text: "Muskan uses edible gold dust and deep buttercream base tones so cameras pick up warmth under hall lights. Roses piped day-of; dust applied at studio. Same shade thinking as [anniversary heart](/case-studies/anniversary-heart-cake-goa-case-study) cakes — readable, not brassy.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Father’s speech mentioned the cake by name; family booked Muskan for a niece’s [wedding](/case-studies/wedding-cake-goa-case-study) six months out. Planning a milestone? See [/birthday-cakes-goa](/birthday-cakes-goa) or message ${site.phone}.",
      },
      {
        type: "related",
        title: "Related",
        items: [
          { href: "/creations/golden-cream-birthday-cake", label: "Golden cream gallery" },
          { href: "/birthday-cakes-goa", label: "Birthday guide" },
          { href: "/locations/margao", label: "Margao delivery" },
        ],
      },
    ],
  },
  {
    slug: "bento-birthday-cake-goa-case-study",
    title: "Case study: Last-minute bento birthday cake in Goa — 48 hours, beach villa & a party-to-table plan",
    excerpt:
      "Parents messaged mid-week for a Saturday poolside party in Calangute. How Muskan turned a tight timeline into a bento birthday cake Goa kids could photograph — plus a larger round cake for cousins.",
    publishedAt: "2026-07-02",
    readMinutes: 14,
    focusKeyword: "last-minute birthday cake Goa",
    keywords: [
      "last-minute birthday cake Goa",
      "bento birthday cake Goa",
      "rush birthday cake Calangute",
      "same-week cake delivery Goa",
      "kids birthday bento Muskan",
      "Sweet Bites last minute",
    ],
    creationSlug: "bento-birthday-cake",
    difficulty: "Rush · dual format (bento + round)",
    leadTime: "48 hours",
    celebrationType: "8th birthday · 18 guests · poolside",
    relatedSlugs: ["bento-cake-goa-case-study", "golden-cream-cake-goa-case-study"],
    heroImage:
      "/images/bento-birthday-cake/550781468_18072158705170730_8642231030514791168_n..webp",
    heroImageAlt:
      "Bento birthday cake Goa — last-minute kids celebration cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/bento-birthday-cake",
    heroGalleryLabel: "View bento birthday creation",
    blocks: [
      {
        type: "p",
        text: `Most **last-minute birthday cake Goa** stories start with guilt — “we forgot to book,” “school moved the party forward,” “guests are already flying in.” This case study is different because the family did the right thing: they messaged Muskan at [${site.name}](/about) honestly on a Wednesday for a Saturday [Calangute](/locations/calangute) pool party, accepted simpler decoration, and split the order into a hero [bento birthday cake](/creations/bento-birthday-cake) for the birthday child plus a larger round cake for cousins. No fondant characters. No impossible tier stack. Just a plan that fit the oven.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "If you are searching **last-minute birthday cake Goa**, send date + town + guest count first — Muskan replies with what is realistically bakeable, not what looks best on Pinterest.",
      },
      {
        type: "h2",
        text: "The brief: Wednesday panic, Saturday pool",
        id: "brief",
      },
      {
        type: "p",
        text: "Mother messaged from a rented villa near Calangute with one gallery link to our bento birthday photo, guest count ~18 (mostly kids), and a hard 4 PM poolside reveal. Eggless sponge required for two cousins. She had read our [last-minute birthday guide](/blog/last-minute-birthday-cake-goa-guide) ten minutes earlier.",
      },
      {
        type: "ul",
        items: [
          "Hero: bento tin — name, age “8”, pastel buttercream, small sprinkles only.",
          "Secondary: 1.5 kg round chocolate-vanilla — same palette, simpler top.",
          "Theme: “colourful birthday” — no licensed character on 48-hour timeline.",
          "Delivery 3:30 PM; cake to villa kitchen fridge until reveal.",
        ],
      },
      {
        type: "h2",
        text: "Why Muskan said yes (and what she declined)",
        id: "yes-and-no",
      },
      {
        type: "p",
        text: "Oven space existed because a wedding tier had shifted to the following week. Muskan agreed to buttercream + sprinkles but declined a unicorn figurine and extra sugar flowers — drying time was not there. That conversation happened in one WhatsApp voice note so expectations stayed clear. Rush orders fail when clients keep adding details after the schedule is locked.",
      },
      {
        type: "h3",
        text: "Bento + round: one thread, two bakes",
      },
      {
        type: "p",
        text: "The **bento birthday cake Goa** tin travels upright in a small box; the round cake uses the same upright discipline as our [wedding delivery](/case-studies/wedding-cake-goa-case-study) runs — non-slip base, chilled handover, photo of fridge space before Muskan leaves the studio. Villa host sent a kitchen photo; AC was strong enough.",
      },
      {
        type: "h2",
        text: "Delivery on tourist-season Saturday roads",
        id: "delivery",
      },
      {
        type: "p",
        text: "Calangute traffic on Saturday afternoons is unpredictable. Muskan built a 45-minute buffer and asked the client to share live location when the driver crossed Porvorim. Tin and round cake traveled in separate boxes so a tilt on one did not ruin both. Same checklist as our [bento case study](/case-studies/bento-cake-goa-case-study), scaled up for a kids party.",
      },
      {
        type: "callout",
        variant: "note",
        title: "Menu alternative",
        text: "If even 48 hours feels tight, families sometimes pick a [ready-made menu flavour](/cakes-menu) for the larger cake and only custom-bake the bento — tell Muskan both needs in one message.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: `Birthday girl saw the tin first — photos before swimming. Round cake served after games; eggless cousins had their slice without a second bake. Mother left a Google review mentioning honest timing; father saved Muskan’s number for a future [golden cream milestone](/case-studies/golden-cream-cake-goa-case-study). Need a rush birthday? Read [/blog/last-minute-birthday-cake-goa-guide](/blog/last-minute-birthday-cake-goa-guide) then message ${site.phone}.`,
      },
      {
        type: "related",
        title: "Keep exploring",
        items: [
          { href: "/creations/bento-birthday-cake", label: "Bento birthday gallery" },
          { href: "/blog/last-minute-birthday-cake-goa-guide", label: "Last-minute journal guide" },
          { href: "/locations/calangute", label: "Calangute delivery" },
        ],
      },
    ],
  },
  {
    slug: "engagement-peach-cream-cake-goa-case-study",
    title: "Case study: Engagement cake in Goa — peach cream, ring reveal & a Candolim terrace at golden hour",
    excerpt:
      "She planned a proposal dinner for two; Muskan designed a peach cream engagement cake Goa that hid the ring moment, survived sea breeze, and became the photo every guest reshared — without stealing the yes.",
    publishedAt: "2026-07-06",
    readMinutes: 15,
    focusKeyword: "engagement cake Goa",
    keywords: [
      "engagement cake Goa",
      "proposal cake Goa",
      "peach cream cake Goa",
      "romantic cake delivery Candolim",
      "ring reveal dessert Goa",
      "anniversary peach cream Muskan",
      "Sweet Bites engagement",
    ],
    creationSlug: "anniversary-peach-cream-cake",
    difficulty: "Medium · romantic palette + surprise timing",
    leadTime: "6 days",
    celebrationType: "Proposal dinner · 2 guests + staff",
    relatedSlugs: [
      "anniversary-heart-cake-goa-case-study",
      "wedding-cake-goa-case-study",
      "golden-cream-cake-goa-case-study",
    ],
    heroImage:
      "/images/anniversary-peach-cream-cake/557195900_18073537505170730_3370198253031180573_n..webp",
    heroImageAlt:
      "Engagement peach cream cake Goa — romantic proposal cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/anniversary-peach-cream-cake",
    heroGalleryLabel: "Peach cream engagement cake",
    blocks: [
      {
        type: "p",
        text: `The best **engagement cake Goa** stories are quiet until dessert — then everyone pulls out their phones. This case study follows a proposal dinner Muskan baked for a couple in [Candolim](/locations/candolim): a peach-and-cream heart tier inspired by our [Anniversary Peach Cream Cake](/creations/anniversary-peach-cream-cake), timed for golden hour, coordinated with restaurant staff, and built so the ring moment still felt like the headline.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Planning a **proposal cake Goa** or small engagement dinner? Send venue photos, surprise yes/no, and dessert time — Muskan designs delivery around the reveal, not just the frosting.",
      },
      {
        type: "h2",
        text: "The brief: “She cannot suspect the cake either”",
        id: "brief",
      },
      {
        type: "p",
        text: `A groom messaged from a friend's WhatsApp — partner thought they were celebrating a work promotion. Terrace table for two, 7:30 PM, ocean breeze. He wanted blush peach, soft gold, fresh roses, initials only, and a cake small enough that staff could hide it until mains cleared. He had read our [engagement cake journal](/blog/engagement-cake-goa-proposal-guide) and sent our gallery peach cream link.`,
      },
      {
        type: "ul",
        items: [
          "6-inch heart-tier illusion on round base — serves 4–6 (staff tasted leftovers).",
          "Flavour: peach compote + vanilla-cardamom sponge + light buttercream.",
          "Eggless sponge for her dietary note — confirmed on line one.",
          "No topper figurines — ring box stays the hero prop.",
          "Delivery 6:45 PM to restaurant cold room; plated 8:05 PM by waiter.",
        ],
      },
      {
        type: "h2",
        text: "Design choices for Goan terraces",
        id: "design",
      },
      {
        type: "p",
        text: "Muskan deepened peach tones slightly versus Pinterest swatches — phone cameras wash pastels outdoors. Gold dust on rose petals only, not whole tiers (fingerprints and breeze). Piping stayed low-profile so wind did not snap delicate extensions. Same colour discipline as our [anniversary heart case study](/case-studies/anniversary-heart-cake-goa-case-study), tuned for two people not forty.",
      },
      {
        type: "h3",
        text: "Why not fondant for this reveal",
      },
      {
        type: "p",
        text: "Fondant looks crisp in air-conditioned halls; terraces need buttercream flexibility. The client asked for a glossy mirror finish — Muskan offered a compromise: glazed peach gel on one accent heart, buttercream everywhere else. He chose reliability over risk. That honesty is part of why **engagement cake Goa** orders succeed on WhatsApp at ${site.phone}.",
      },
      {
        type: "h2",
        text: "Coordinating the surprise with the restaurant",
        id: "coordination",
      },
      {
        type: "p",
        text: "Muskan called the duty manager after payment confirmation — box dimensions, fridge shelf, who plates dessert. The groom received a checklist: confirm fridge photo, silence phone notifications, tell waiter the cue word. Delivery driver handed to kitchen, not the table — zero walk-through with partner present.",
      },
      {
        type: "callout",
        variant: "note",
        title: "Planning your own reveal",
        text: "Villa proposals in [Calangute](/locations/calangute) or [Anjuna](/locations/anjuna) follow the same playbook: fridge photo, shaded table, dessert time separate from dinner start. See our [wedding delivery checklist](/blog/wedding-cake-delivery-goa-checklist) for heat and timing logic.",
      },
      {
        type: "h2",
        text: "Golden hour handover",
        id: "delivery",
      },
      {
        type: "p",
        text: "Saturday traffic from [Velim](/locations/velim) to Candolim left a 50-minute buffer. Cake traveled upright in a chilled box; non-slip base taped inside. Restaurant sent a WhatsApp photo of the fridge shelf — Muskan approved before the driver left. At 8:05 PM the waiter placed the cake, stepped back, and the groom opened the ring box beside it.",
      },
      {
        type: "h2",
        text: "Outcome — and the wedding thread",
        id: "outcome",
      },
      {
        type: "p",
        text: `She said yes before the second bite — photos used our cake and the ring in one frame. The couple opened a second WhatsApp thread for a [wedding cake](/case-studies/wedding-cake-goa-case-study) nine months out; Muskan referenced this peach palette for the haldi brief later. Family members ordered a [golden cream milestone](/case-studies/golden-cream-cake-goa-case-study) for the engagement party the following weekend.`,
      },
      {
        type: "h2",
        text: "Order a similar engagement cake",
        id: "order-similar",
      },
      {
        type: "p",
        text: `Send date, town, guest count, and whether it is a secret. Browse [/anniversary-cakes-goa](/anniversary-cakes-goa) for romantic guides, or message ${site.phone} with a link to [peach cream](/creations/anniversary-peach-cream-cake) — Muskan will quote size, eggless options, and delivery before you pay.`,
      },
      {
        type: "related",
        title: "Keep exploring",
        items: [
          { href: "/blog/engagement-cake-goa-proposal-guide", label: "Engagement journal guide", description: "Proposal vs party sizing" },
          { href: "/creations/anniversary-peach-cream-cake", label: "Peach cream gallery", description: "Reference for WhatsApp" },
          { href: "/wedding-cakes-goa", label: "Wedding cakes Goa", description: "Plan the next celebration" },
        ],
      },
    ],
  },
  {
    slug: "doraemon-family-cake-goa-case-study",
    title: "Case study: Doraemon family cake in Goa — five characters, cream piping & a 4-year-old who checked every face",
    excerpt:
      "A mother in Margao wanted every Doraemon character on one cake for her son's 4th birthday. Muskan designed a multi-character cream Doraemon cake Goa kids could identify by name — hand-piped on buttercream, no fondant, delivered to a flat with no lift and 22 tiny guests waiting.",
    publishedAt: "2026-07-12",
    readMinutes: 13,
    focusKeyword: "Doraemon cake Goa",
    keywords: [
      "Doraemon cake Goa",
      "Doraemon birthday cake Goa",
      "Doraemon family cake Goa",
      "character cake delivery Margao",
      "kids cartoon cake Goa",
      "cream character cake Muskan",
      "Nobita Shizuka cake Goa",
      "custom kids cake Velim",
    ],
    creationSlug: "doremon-family-cake",
    difficulty: "High · five hand-piped characters on cream",
    leadTime: "8 days",
    celebrationType: "4th birthday · 22 kids · apartment party",
    relatedSlugs: [
      "cocomelon-cake-goa-case-study",
      "spiderman-cake-goa-case-study",
      "barbie-castle-cake-goa-case-study",
    ],
    heroImage:
      "/images/doremon-family-cake/496857347_18059681900170730_4573398989023979467_n..webp",
    heroImageAlt:
      "Doraemon family cake Goa — five-character cream birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/doremon-family-cake",
    heroGalleryLabel: "View Doraemon family creation",
    blocks: [
      {
        type: "p",
        text: `A **Doraemon cake Goa** order sounds simple until a four-year-old's mother says, "He will check if Gian is there." Not just Doraemon — Nobita, Shizuka, Suneo, and Gian. Five characters recognisable at preschool-eye level, on cream (not fondant), surviving a third-floor walk-up in [Margao](/locations/margao) with no lift. This case study documents how Muskan at [${site.name}](/about) turned a cartoon-obsessed brief into a cake the birthday boy inspected character by character — and approved.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **Doraemon cake Goa** or **Doraemon birthday cake Goa**? Send Muskan the character names your child loves, age, guest count, and whether cream or fondant — she matches technique to the party environment.",
      },
      {
        type: "h2",
        text: "The brief: five friends on one tier",
        id: "brief",
      },
      {
        type: "p",
        text: "The WhatsApp message arrived eight days before the party. Mother shared two screenshots from the show, our [Doraemon Family Cake](/creations/doremon-family-cake) gallery link, and a voice note explaining that her son watches the Hindi dub daily and calls characters by name. She was clear: all five friends, not just Doraemon alone. Eggless sponge, chocolate flavour inside, blue-and-white palette outside. Budget was flexible but she preferred cream over fondant — her son does not eat fondant decorations.",
      },
      {
        type: "ul",
        items: [
          "8-inch round cake — serves 22 kids + 8 adults with thin slices.",
          "Five characters: Doraemon (centre), Nobita, Shizuka, Suneo, Gian.",
          "Cream piping only — no fondant, no printed wafer sheets.",
          "Flavour: eggless chocolate sponge + vanilla buttercream + chocolate ganache drip accent.",
          "Delivery to 3rd-floor apartment in Margao — no lift.",
          "Party at 5 PM; cake needed by 4:15 PM for table setup.",
        ],
      },
      {
        type: "h2",
        text: "Why cream piping — not fondant, not prints",
        id: "cream-vs-fondant",
      },
      {
        type: "p",
        text: "Fondant gives clean cartoon edges but kids often peel it off. Printed wafer sheets look sharp on Instagram but feel flat in real life. Cream piping sits between the two: it has texture kids touch, colours they recognise, and a surface that is entirely edible without peeling anything away. The trade-off is precision — cream melts faster and lines blur under heat. Muskan compensated with firmer Swiss meringue buttercream for character outlines and softer American buttercream for background fills.",
      },
      {
        type: "h3",
        text: "Colour mixing for five characters",
      },
      {
        type: "p",
        text: "Doraemon's blue, Shizuka's pink, Gian's brown, Suneo's yellow, Nobita's orange shirt — each required a separate piping bag. Muskan mixed ten shades before starting: base colours plus skin tone, hair, eyes, and mouth for each character. The palette was tested on parchment under kitchen lighting first, because fluorescent light shifts blue toward teal and would make Doraemon look wrong in apartment lighting.",
      },
      {
        type: "callout",
        variant: "note",
        title: "Character reference tip",
        text: "Send Muskan a screenshot — not a Pinterest mood board. Cartoon characters have exact colour codes that shift across fan art. The official frame from the show is the safest reference for a **Doraemon birthday cake Goa** that your child will actually recognise.",
      },
      {
        type: "h2",
        text: "Structure: chocolate inside, cream outside",
        id: "structure",
      },
      {
        type: "p",
        text: "Three layers of eggless chocolate sponge, soaked lightly with vanilla syrup, filled with chocolate ganache, crumb-coated in white buttercream, then decorated. The ganache filling adds weight and moisture that kids prefer over dry sponge. Muskan chilled the crumb coat for 40 minutes before character piping — warm cream under piping smears outlines and ruins the face-check moment.",
      },
      {
        type: "ul",
        items: [
          "Bottom layer: chocolate sponge + ganache.",
          "Middle layer: chocolate sponge + vanilla cream.",
          "Top layer: chocolate sponge — flat surface for character piping.",
          "Crumb coat: white buttercream, chilled to firm.",
          "Characters: hand-piped with star and round tips, no stencils.",
        ],
      },
      {
        type: "h2",
        text: "The face-check test",
        id: "face-check",
      },
      {
        type: "p",
        text: `Four-year-olds are brutal critics. This child pointed to each character and named them — Gian was confirmed last because his brown shade was darker than the TV version. Muskan had anticipated this: she matched Gian's tone to the 2024 movie poster (slightly warmer brown) rather than the classic series (grey-brown). The mother sent a photo of her son pointing at the cake with the caption "inspector approved." That photo lives in our [Doraemon gallery](/creations/doremon-family-cake).`,
      },
      {
        type: "h2",
        text: "Delivery: third-floor walk-up in Margao heat",
        id: "delivery",
      },
      {
        type: "p",
        text: "No lift means the driver carries the cake upright on a non-slip board, one flight at a time. Muskan pre-chilled the cake to 6°C so it had thermal buffer during the climb. The box was taped shut with ventilation holes — sealed boxes sweat, which ruins cream piping. Delivery time was 4:10 PM, five minutes early; the mother had cleared counter space and a fan was pointed away from the table. Same delivery discipline as our [Cocomelon case study](/case-studies/cocomelon-cake-goa-case-study), different staircase.",
      },
      {
        type: "ul",
        items: [
          "Pre-chilled to 6°C at the [Velim](/locations/velim) studio.",
          "Non-slip board inside box — prevents slide on tilted stairs.",
          "Ventilation holes in box lid — stops condensation.",
          "Driver climbed three flights at steady pace; no running.",
          "Mother sent counter photo beforehand — fan direction confirmed.",
        ],
      },
      {
        type: "h2",
        text: "Pricing: what multi-character cream cakes cost",
        id: "pricing",
      },
      {
        type: "p",
        text: "Character count drives labour, not just size. A single-character [Doraemon Cream Cake](/creations/doremon-cream-cake) is simpler than the five-character family version. Eggless sponge, delivery distance to Margao, and hand-piping time are each line-items Muskan confirms before payment on WhatsApp. Our [/order](/order) page shows starting prices; a five-character cream cake quotes higher than a single-character because piping time nearly triples.",
      },
      {
        type: "h2",
        text: "Other character cakes at Sweet Bites",
        id: "other-characters",
      },
      {
        type: "p",
        text: "If your child loves a different show, the process is identical: send character names, screenshot, and party details. Muskan has delivered [Spiderman](/case-studies/spiderman-cake-goa-case-study), [Cocomelon](/case-studies/cocomelon-cake-goa-case-study), [Barbie Castle](/case-studies/barbie-castle-cake-goa-case-study), [Matilda](/case-studies/matilda-cake-goa-case-study), and [Unicorn](/case-studies/unicorn-cake-goa-case-study) cakes across Goa. Read our [kids birthday cake guide](/blog/kids-birthday-cake-goa-character-themes) for theme planning tips.",
      },
      {
        type: "related",
        title: "Explore character cakes",
        items: [
          { href: "/creations/doremon-family-cake", label: "Doraemon family gallery", description: "Five-character reference photo" },
          { href: "/creations/doremon-cream-cake", label: "Doraemon cream cake", description: "Single-character version" },
          { href: "/blog/kids-birthday-cake-goa-character-themes", label: "Kids cake guide", description: "Theme planning on WhatsApp" },
          { href: "/contact", label: "Contact Muskan", description: "WhatsApp template & studio map" },
        ],
      },
      {
        type: "p",
        text: `Your child has a favourite character and a birthday coming up. Message ${site.phone} with the character names, age, guest count, and party town — Muskan will reply with technique options, eggless notes, and a quote for your **Doraemon cake Goa** (or whichever hero your child inspects at the table).`,
      },
    ],
  },
  {
    slug: "photo-cake-goa-case-study",
    title: "Case study: Photo cake in Goa — edible print, sharp faces & a 60th birthday that made Dad cry",
    excerpt:
      "Blurry prints and peeling sheets ruin photo cakes. How Muskan delivered a photo cake Goa family trusted: high-res file check, eggless sponge, buttercream frame, delivery to a Ponda hall, and a gallery image-cake reference the son sent at midnight.",
    publishedAt: "2026-07-15",
    readMinutes: 14,
    focusKeyword: "photo cake Goa",
    keywords: [
      "photo cake Goa",
      "edible image cake Goa",
      "picture cake Goa",
      "custom photo cake Muskan",
      "anniversary photo cake Goa",
      "birthday photo cake delivery",
      "image cake Goa",
    ],
    creationSlug: "image-cake",
    difficulty: "Medium · print quality + humidity control",
    leadTime: "7 days",
    celebrationType: "60th birthday · 45 guests · hall",
    relatedSlugs: [
      "anniversary-heart-cake-goa-case-study",
      "golden-cream-cake-goa-case-study",
      "engagement-peach-cream-cake-goa-case-study",
    ],
    heroImage:
      "/images/image-cake/494774540_18058822700170730_1726010468788488612_n..webp",
    heroImageAlt:
      "Photo cake Goa — edible image print celebration cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/image-cake",
    heroGalleryLabel: "View image cake creation",
    blocks: [
      {
        type: "p",
        text: `A **photo cake Goa** order is emotional before it is technical — a father's portrait at sixty, a couple on their tenth anniversary, a child who wants their dog on buttercream. At [${site.name}](/about), Muskan bakes [Image Cake](/creations/image-cake) designs with edible sheets that stay sharp in humid halls when the file, frame, and fridge timing are right. This case study follows a son in [Ponda](/locations/ponda) who messaged at midnight with a phone photo and needed a cake that would not embarrass him in front of forty-five relatives.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **photo cake Goa** or **edible image cake Goa**? Send the highest-resolution photo you have (original file, not a WhatsApp-forwarded blur) plus date, guest count, and venue type.",
      },
      {
        type: "h2",
        text: "The brief: one good photo, one chance",
        id: "brief",
      },
      {
        type: "p",
        text: "The client wanted his father's portrait on an 8-inch round — eggless vanilla sponge, chocolate buttercream border, gold ribbon piping. He had a cropped JPEG from Facebook. Muskan asked for the original image from Google Photos or email; the first file was 480px wide and would print fuzzy. The son found a 2400px scan from an old album photo on WhatsApp — acceptable after Muskan checked contrast and face size on screen.",
      },
      {
        type: "ul",
        items: [
          "8-inch round — serves ~20 generous slices; second tray of [menu cupcakes](/cakes-menu) for extra guests.",
          "Edible print centred; buttercream frame hides sheet edges.",
          "Message on board: \"60 & still our hero\" in English.",
          "Hall in Ponda — AC on, dessert at 9 PM after speeches.",
          "Delivery 7:45 PM; cake in venue fridge until reveal.",
        ],
      },
      {
        type: "h2",
        text: "Why print quality matters more than decoration",
        id: "print-quality",
      },
      {
        type: "p",
        text: "Cheap **picture cake Goa** orders fail when bakeries accept any screenshot. Muskan rejects files that will look pixelated — she would rather delay one day than deliver a face guests cannot recognise. For anniversaries, our [image anniversary cake](/creations/image-anniversary-cake) follows the same file checklist; the [anniversary heart case study](/case-studies/anniversary-heart-cake-goa-case-study) shows a different romantic layout without a full photo top.",
      },
      {
        type: "h3",
        text: "File checklist Muskan sends on WhatsApp",
      },
      {
        type: "ul",
        items: [
          "Original photo — not a screenshot of Instagram.",
          "Face at least 30% of crop area for portrait cakes.",
          "Good contrast — very dark photos lose detail on edible ink.",
          "Tell us if you need eggless sponge for the whole cake.",
          "Avoid busy backgrounds unless you want them printed too.",
        ],
      },
      {
        type: "h2",
        text: "Buttercream frame vs bare print edge",
        id: "frame",
      },
      {
        type: "p",
        text: "Edible sheets sit on fondant or buttercream. Muskan uses a buttercream border on **photo cake Goa** orders so the sheet edge is not visible in photos — guests see portrait + gold piping, not a white rectangle seam. The frame colour matched the hall's maroon tablecloth; the son sent a table photo on day three of planning.",
      },
      {
        type: "h2",
        text: "Humidity in a Ponda hall",
        id: "humidity",
      },
      {
        type: "p",
        text: "AC halls are kinder than beach terraces but doors still open. Muskan pre-chilled the cake, delivered in a sealed box with ventilation holes, and asked the venue to keep it in the fridge until speeches ended. Same discipline as [wedding tier delivery](/case-studies/wedding-cake-goa-case-study) — dessert time drives handover, not dinner start.",
      },
      {
        type: "h2",
        text: "Outcome — and the reorder",
        id: "outcome",
      },
      {
        type: "p",
        text: "The father cried before cutting; the print stayed sharp in every photo. Two cousins asked for Muskan's number for a [golden cream milestone](/case-studies/golden-cream-cake-goa-case-study) the following month. The son later ordered a smaller [image cake](/creations/image-cake) for his mother's birthday with the same file workflow — second order took half the planning time.",
      },
      {
        type: "related",
        title: "Photo & milestone cakes",
        items: [
          { href: "/creations/image-cake", label: "Image cake gallery", description: "Reference for WhatsApp" },
          { href: "/blog/anniversary-cake-goa-complete-guide", label: "Anniversary journal", description: "Romantic sizing tips" },
          { href: "/anniversary-cakes-goa", label: "Anniversary cakes Goa", description: "Occasion hub" },
          { href: "/contact", label: "Contact Muskan", description: "Send your photo file" },
        ],
      },
      {
        type: "p",
        text: `Have a photo that matters? Message ${site.phone} with the original file, date, and guest count — Muskan will tell you honestly if it will print well for your **photo cake Goa** before you pay.`,
      },
    ],
  },
  {
    slug: "chocolate-bar-cake-goa-case-study",
    title: "Case study: Chocolate bar cake in Goa — KitKat walls, teen birthday energy & a pool party that started late",
    excerpt:
      "Teens want chocolate bar cake Goa parents can photograph: real bars on buttercream, eggless sponge, delivery to a Calangute villa pool, and a Muskan plan that survived a delayed party without bars sliding off.",
    publishedAt: "2026-07-17",
    readMinutes: 13,
    focusKeyword: "chocolate bar cake Goa",
    keywords: [
      "chocolate bar cake Goa",
      "KitKat cake Goa",
      "chocolate birthday cake teens",
      "eggless chocolate bar cake",
      "custom chocolate cake Muskan",
      "Sweet Bites chocolate bar",
    ],
    creationSlug: "chocolate-bar-cake",
    difficulty: "Medium · bar adhesion + heat",
    leadTime: "6 days",
    celebrationType: "14th birthday · 16 teens · pool villa",
    relatedSlugs: [
      "chocolate-sphere-cake-goa-case-study",
      "ferrero-cake-goa-case-study",
      "bento-birthday-cake-goa-case-study",
    ],
    heroImage:
      "/images/chocolate-bar-cake/626525648_18171346243384251_8089063330969105323_n..webp",
    heroImageAlt:
      "Chocolate bar cake Goa — KitKat style birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/chocolate-bar-cake",
    heroGalleryLabel: "Chocolate bar cake gallery",
    blocks: [
      {
        type: "p",
        text: `A **chocolate bar cake Goa** brief sounds easy — "stick chocolates on a cake" — until humidity softens buttercream and bars slide during a pool party that starts two hours late. Muskan's [Chocolate Bar Cake](/creations/chocolate-bar-cake) for a fourteen-year-old in [Calangute](/locations/calangute) used chilled ganache bands, bar weight planning, and delivery timed to the real cake-cutting moment, not the invitation time.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "**Chocolate bar cake Goa** orders need guest count, bar brands you want (KitKat, Dairy Milk, Oreo), eggless yes/no, and whether the party is poolside — Muskan adjusts adhesion and chill time.",
      },
      {
        type: "h2",
        text: "The brief: teen boy, chocolate everything",
        id: "brief",
      },
      {
        type: "p",
        text: "Mother messaged with our gallery chocolate bar photo and a Pinterest board of drip cakes. Son wanted bars around the sides, chocolate sponge, name in gold, age 14. Party moved from 4 PM to 6 PM the day before — Muskan shifted delivery from 3:30 to 5:45 after confirming villa fridge space.",
      },
      {
        type: "ul",
        items: [
          "8-inch round + bar wall — serves 16 teens with hungry slices.",
          "Eggless chocolate sponge — whole cake for classmates.",
          "KitKat fingers vertical, Dairy Milk squares on top accents.",
          "Ganache drip limited to back side — less melt facing pool.",
          "Backup: extra bars in box if one piece shifts during photos.",
        ],
      },
      {
        type: "h2",
        text: "Structure: why bars slide (and how we prevent it)",
        id: "structure",
      },
      {
        type: "p",
        text: "Bars need a firm ring of ganache or chilled buttercream, not soft whipped cream. Muskan chills the cake 45 minutes after bar placement, then transports upright. For **KitKat cake Goa** style walls, she counts bar length around circumference before buying stock — no awkward gaps in photos. See our [chocolate cake journal](/blog/chocolate-cake-goa-ultimate-guide) for sponge options; bars are decoration, not structure.",
      },
      {
        type: "h2",
        text: "Pool villa heat — delayed party reality",
        id: "heat",
      },
      {
        type: "p",
        text: "Pool parties run late; shade moves. Cake stayed in villa kitchen fridge until the boy's friends finished pool photos. Mother sent a fridge photo the morning of delivery — Muskan approved shelf space. Same late-party logic as our [last-minute bento case study](/case-studies/bento-birthday-cake-goa-case-study), different decoration risk.",
      },
      {
        type: "h3",
        text: "Blue chocolate bar variant",
      },
      {
        type: "p",
        text: "Families sometimes request colour-themed bars — our [Blue Chocolate Bar Cake](/creations/blue-chocolate-bar-cake) uses the same adhesion method with a different palette. Mention theme colour on line one of WhatsApp.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Bars stayed in place through cutting; teens filmed the drip slice for Instagram. Mother rebooked a [Ferrero](/case-studies/ferrero-cake-goa-case-study) cake for Diwali — less bar weight, same kitchen. Want a bar cake? Message ${site.phone} with date, guest count, and bar preferences.",
      },
      {
        type: "related",
        title: "Chocolate celebrations",
        items: [
          { href: "/creations/chocolate-bar-cake", label: "Chocolate bar gallery" },
          { href: "/blog/chocolate-cake-goa-ultimate-guide", label: "Chocolate journal", description: "13 styles explained" },
          { href: "/creations/blue-chocolate-bar-cake", label: "Blue bar cake", description: "Colour-themed variant" },
          { href: "/order", label: "Book a cake", description: "Lead times" },
        ],
      },
    ],
  },
  {
    slug: "mermaid-cake-goa-case-study",
    title: "Case study: Mermaid cake in Goa — scales, teal ombré & a 5-year-old who only cared about the tail",
    excerpt:
      "Mermaid cake Goa orders need scale texture that photographs, buttercream that survives garden shade, and a tail detail kids touch first. Muskan's marmaid-cake design for a Mapusa garden party — eggless vanilla, ombré fins, and delivery past a monsoon shower.",
    publishedAt: "2026-07-20",
    readMinutes: 14,
    focusKeyword: "mermaid cake Goa",
    keywords: [
      "mermaid cake Goa",
      "mermaid birthday cake Goa",
      "under the sea cake Goa",
      "teal ombre cake Goa",
      "girls birthday cake Goa",
      "eggless mermaid cake",
      "custom mermaid cake Muskan",
    ],
    creationSlug: "marmaid-cake",
    difficulty: "High · ombré scales + tail sculpt on cream",
    leadTime: "10 days",
    celebrationType: "5th birthday · 14 kids · garden",
    relatedSlugs: [
      "unicorn-cake-goa-case-study",
      "pink-butterfly-cake-goa-case-study",
      "cocomelon-cake-goa-case-study",
    ],
    heroImage:
      "/images/marmaid-cake/569391549_18077044856170730_1366736127232657831_n..webp",
    heroImageAlt:
      "Mermaid cake Goa — teal ombré kids birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/marmaid-cake",
    heroGalleryLabel: "Mermaid cake gallery",
    blocks: [
      {
        type: "p",
        text: `Between unicorn horns and princess castles, the **mermaid cake Goa** niche is its own Pinterest galaxy — scales, shells, teal ombré, and a tail that must survive five-year-old hands. Muskan's [Mermaid Cake](/creations/marmaid-cake) for a [Mapusa](/locations/mapusa) garden party combined piped scale texture, fondant tail accent (limited volume), and eggless vanilla sponge — then delivered through a short monsoon shower without smearing the ombré.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "**Mermaid birthday cake Goa** parents should send child's age, guest count, indoor vs garden, and whether they want tail on top or side — Muskan quotes structure and chill time together.",
      },
      {
        type: "h2",
        text: "The brief: under-the-sea, not under-the-tarp",
        id: "brief",
      },
      {
        type: "p",
        text: "Mother wanted teal-to-purple ombré, scale piping, pearl dots, and a mermaid tail on top. Daughter rejected unicorns that week — mermaid only. Garden in Mapusa, 14 kids, eggless for two classmates, party 4 PM in August humidity. Muskan asked for a shaded table photo; mother moved table under a gazebo after seeing the forecast.",
      },
      {
        type: "ul",
        items: [
          "7-inch tall illusion — two layers, scale texture on sides.",
          "Eggless vanilla sponge + strawberry cream filling (light pink inside).",
          "Fondant tail accent on top; scales piped in buttercream.",
          "Shell and pearl sugar details — edible, no plastic picks.",
          "Matching six cupcakes for younger cousins — same palette.",
        ],
      },
      {
        type: "h2",
        text: "Scale texture without fondant covering the whole cake",
        id: "scales",
      },
      {
        type: "p",
        text: "Full fondant mermaids look sharp but kids peel them. Muskan piped scale arcs with a small petal tip in three teal shades — ombré on the cake, not in a mixing bowl only. The technique matches our [unicorn case study](/case-studies/unicorn-cake-goa-case-study) buttercream-first philosophy: most of what guests eat is cream and sponge, not modelling paste.",
      },
      {
        type: "h2",
        text: "Garden shade, monsoon buffer, and fridge timing",
        id: "delivery",
      },
      {
        type: "p",
        text: "Delivery left [Velim](/locations/velim) at 3:20 PM through light rain — box sealed, cake upright. Driver handed to mother at door; cake went straight to kitchen fridge until 3:55 PM. Gazebo table, fan away from cake. Muskan's [pink butterfly case study](/case-studies/pink-butterfly-cake-goa-case-study) used similar garden rules; mermaid ombré is more sensitive to water droplets on exposed top.",
      },
      {
        type: "h2",
        text: "Unicorn vs mermaid — when parents hesitate",
        id: "unicorn-vs-mermaid",
      },
      {
        type: "p",
        text: "Same age group, same party size — different hero. Read our [unicorn cake journal](/blog/unicorn-cake-goa-order-guide) and [kids character guide](/blog/kids-birthday-cake-goa-character-themes). Muskan can sketch both palettes on WhatsApp from gallery links before you commit.",
      },
      {
        type: "h2",
        text: "Outcome — tail touched first",
        id: "outcome",
      },
      {
        type: "p",
        text: "The birthday girl touched the tail before candles — mother laughed, photos still looked styled. Two school parents ordered [Cocomelon](/case-studies/cocomelon-cake-goa-case-study) and a smaller [bento mermaid](/creations/bento-cake) follow-up. Want a mermaid? Message ${site.phone} with date, garden/indoor, and gallery link.",
      },
      {
        type: "related",
        title: "Girls birthday themes",
        items: [
          { href: "/creations/marmaid-cake", label: "Mermaid gallery", description: "Teal ombré reference" },
          { href: "/blog/unicorn-cake-goa-order-guide", label: "Unicorn journal", description: "Compare themes" },
          { href: "/case-studies/pink-butterfly-cake-goa-case-study", label: "Butterfly case study", description: "Garden party notes" },
          { href: "/contact", label: "Contact Muskan", description: "WhatsApp template" },
        ],
      },
    ],
  },
  {
    slug: "sweet-bouquet-cake-goa-case-study",
    title: "Case study: Cake bouquet in Goa — cupcake roses, office surprise & a delivery that beat flower shops",
    excerpt:
      "He wanted flowers but she is diabetic — Muskan built a sweet bouquet Goa office surprise: buttercream roses on cupcakes, structural wrap, Panaji handoff before lunch, and a cake bouquet that photographed like florals without wilting in AC.",
    publishedAt: "2026-07-24",
    readMinutes: 13,
    focusKeyword: "cake bouquet Goa",
    keywords: [
      "cake bouquet Goa",
      "cupcake bouquet Goa",
      "sweet bouquet cake Goa",
      "cupcake bouquet delivery Goa",
      "birthday bouquet cake Muskan",
      "alternative to flowers cake Goa",
      "Sweet Bites bouquet",
    ],
    creationSlug: "sweet-bouquet",
    difficulty: "Medium · structure + transport upright",
    leadTime: "5 days",
    celebrationType: "Wife's birthday · office surprise · 12 colleagues",
    relatedSlugs: [
      "bento-cake-goa-case-study",
      "anniversary-heart-cake-goa-case-study",
      "engagement-peach-cream-cake-goa-case-study",
    ],
    heroImage:
      "/images/sweet-bouquet/626555743_18150211366447228_3216976923459080994_n..webp",
    heroImageAlt:
      "Cake bouquet Goa — cupcake sweet bouquet by Sweet Bites Muskan",
    heroGalleryHref: "/creations/sweet-bouquet",
    heroGalleryLabel: "Sweet bouquet gallery",
    blocks: [
      {
        type: "p",
        text: `A **cake bouquet Goa** order is what happens when flowers are beautiful but the person you love does not want sugar from a random shop box — they want thought. Muskan's [Sweet Bouquet](/creations/sweet-bouquet) for a [Panaji](/locations/panaji) office surprise replaced a rose delivery with buttercream roses on cupcakes, wrapped like florals, handed to reception before lunch. No wilting. No vase. Every stem edible.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **cake bouquet Goa** or **cupcake bouquet Goa**? Send occasion, how many people will share, delivery address type (office/home), and whether you need eggless cupcakes.",
      },
      {
        type: "h2",
        text: "The brief: flowers, but make them cake",
        id: "brief",
      },
      {
        type: "p",
        text: "Husband messaged four days before his wife's birthday. She manages a small team; twelve people in the office. Flowers were the default plan until he remembered she prefers small portions and less sugary frosting than supermarket cupcakes. He sent our sweet bouquet gallery photo and asked: \"Can this reach her desk without tipping?\"",
      },
      {
        type: "ul",
        items: [
          "12 cupcake \"stems\" in a bouquet wrap — one per colleague plus her.",
          "Buttercream roses in blush and cream — not neon bakery pink.",
          "Eggless vanilla sponge on half the cupcakes — flagged for two colleagues.",
          "Message card: \"Happy birthday — sweeter than Monday meetings.\"",
          "Delivery 11:45 AM to office reception; surprise before 12:30 lunch.",
        ],
      },
      {
        type: "h2",
        text: "Structure: why bouquet cakes fail in transit",
        id: "structure",
      },
      {
        type: "p",
        text: "A **cupcake bouquet Goa** collapses when cupcakes are only skewered without a base box. Muskan builds an internal support board, wraps stems in food-safe paper, and tapes the cluster inside a tall upright box — same discipline as tier cakes. Each cupcake is chilled before assembly so buttercream roses firm up. The [Sweet Bouquet](/creations/sweet-bouquet) video in our gallery shows the finished height; transport is always upright, never flat.",
      },
      {
        type: "h3",
        text: "Office handoff without spoiling the surprise",
      },
      {
        type: "p",
        text: "Muskan asked for reception contact name and a \"hold in pantry\" plan. Driver delivered to security, not the birthday woman's desk — colleague met the box at the gate. Husband coordinated the cue word on WhatsApp. Same secrecy logic as our [engagement peach cream case study](/case-studies/engagement-peach-cream-cake-goa-case-study), smaller format.",
      },
      {
        type: "h2",
        text: "Flavour choices for shared office portions",
        id: "flavour",
      },
      {
        type: "p",
        text: "Office **cake bouquet Goa** orders need flavours coworkers will actually eat. Muskan used eggless vanilla and light chocolate on alternating cupcakes — not heavy red velvet in afternoon heat. For home surprises, mango or [rasmalai-inspired](/blog/rasmalai-cake-goa-guide) notes are popular; offices lean classic.",
      },
      {
        type: "h2",
        text: "When a bouquet beats a round cake",
        id: "when-bouquet",
      },
      {
        type: "ul",
        items: [
          "**Office with no cutting knife** — everyone grabs a cupcake stem.",
          "**Smaller guest count (8–15)** — no leftover half cake in the fridge.",
          "**Flower alternative** — photos look floral; recipient is not stuck with a vase.",
          "**Add-on to a dinner cake** — pair with a [bento tin](/case-studies/bento-cake-goa-case-study) at home later.",
          "**Mother's Day / Valentine's** — message Muskan early; March and February book fast.",
        ],
      },
      {
        type: "h2",
        text: "Delivery in Panaji traffic",
        id: "delivery",
      },
      {
        type: "p",
        text: "Mid-morning delivery from [Velim](/locations/velim) avoided lunch-hour congestion. Box traveled front-seat upright with non-slip base. Reception sent a pantry photo — AC on, shelf clear. Muskan will not release a bouquet without confirming upright storage; **cupcake bouquet delivery Goa** fails when clients say \"just leave at desk\" in sun.",
      },
      {
        type: "h2",
        text: "Outcome — colleagues asked for the number",
        id: "outcome",
      },
      {
        type: "p",
        text: "The team photo looked like a luxury flower delivery until someone bit a rose. Two colleagues messaged for [anniversary heart](/case-studies/anniversary-heart-cake-goa-case-study) orders the same week. Husband booked a [peach cream dinner cake](/creations/anniversary-peach-cream-cake) for that night — bouquet for office, round cake for home.",
      },
      {
        type: "h2",
        text: "Order a similar cake bouquet",
        id: "order",
      },
      {
        type: "p",
        text: `Send date, delivery town, how many cupcakes, eggless count, and office vs home handoff. Browse [/creations/sweet-bouquet](/creations/sweet-bouquet) or message ${site.phone} — Muskan quotes structure, flavours, and delivery before payment.`,
      },
      {
        type: "related",
        title: "Surprise celebrations",
        items: [
          { href: "/creations/sweet-bouquet", label: "Sweet bouquet gallery", description: "Video & reference photo" },
          { href: "/blog/anniversary-cake-goa-complete-guide", label: "Anniversary journal", description: "Pair bouquet + dinner cake" },
          { href: "/blog/bento-cake-goa-order-guide", label: "Bento guide", description: "Small second surprise" },
          { href: "/contact", label: "Contact Muskan", description: "Office delivery brief" },
        ],
      },
    ],
  },
  {
    slug: "flamingo-cake-goa-case-study",
    title: "Case study: Flamingo cake in Goa — tropical pink, pool party & buttercream that survived splash zone",
    excerpt:
      "Flamingo pool float on Pinterest, real party by the water in Candolim — Muskan built a flamingo cake Goa with piped pink feathers, gold accents, eggless sponge, and delivery timed after the kids left the splash zone.",
    publishedAt: "2026-08-02",
    readMinutes: 13,
    focusKeyword: "flamingo cake Goa",
    keywords: [
      "flamingo cake Goa",
      "flamingo birthday cake Goa",
      "tropical birthday cake Goa",
      "pool party cake Candolim",
      "pink flamingo cake Muskan",
      "girls birthday cake Goa",
    ],
    creationSlug: "flamingo-cake",
    difficulty: "Medium · tropical palette + outdoor timing",
    leadTime: "7 days",
    celebrationType: "7th birthday · 18 kids · pool villa",
    relatedSlugs: [
      "pink-butterfly-cake-goa-case-study",
      "mermaid-cake-goa-case-study",
      "unicorn-cake-goa-case-study",
    ],
    heroImage:
      "/images/flamingo-cake/655187695_18066879632644223_3948263265025615855_n..jpg",
    heroImageAlt:
      "Flamingo cake Goa — tropical pink birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/flamingo-cake",
    heroGalleryLabel: "Flamingo cake gallery",
    blocks: [
      {
        type: "p",
        text: `A **flamingo cake Goa** brief usually arrives with pool floats and pink sunglasses — the cake has to match the vibe without melting beside a splash zone. Muskan's [Flamingo Cake](/creations/flamingo-cake) for a [Candolim](/locations/candolim) villa party used piped feather texture, gold beak accents, and eggless vanilla sponge — delivered after swim time, displayed under gazebo shade. The gallery video shows the finished height; this case study explains the timing that made it work.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **flamingo birthday cake Goa**? Send pool vs indoor, guest count, eggless needs, and cake-cutting time separate from swim start.",
      },
      {
        type: "h2",
        text: "The brief: tropical theme, zero fondant peel",
        id: "brief",
      },
      {
        type: "p",
        text: "Mother wanted flamingo pink, gold details, name and age 7 — no fondant characters kids would peel. Eighteen kids, eggless for three classmates, party at rented villa with pool. She linked our flamingo gallery and a photo of pink tableware.",
      },
      {
        type: "ul",
        items: [
          "8-inch round — serves 18 kids with modest slices.",
          "Piped feather arcs in three pinks + gold dust on beak accent.",
          "Eggless vanilla sponge + strawberry cream filling.",
          "Cake reveal 4:30 PM — pool session ends 4 PM sharp.",
          "Gazebo table, fan pointed away from cake stand.",
        ],
      },
      {
        type: "h2",
        text: "Flamingo vs butterfly vs mermaid — picking the pink theme",
        id: "theme-choice",
      },
      {
        type: "p",
        text: "Same age, same palette family — different hero. [Pink butterfly](/case-studies/pink-butterfly-cake-goa-case-study) suits gardens; [mermaid](/case-studies/mermaid-cake-goa-case-study) suits teal ombré; **flamingo cake Goa** fits pool and tropical briefs. Muskan sends palette swatches on WhatsApp when parents hesitate between three Pinterest boards.",
      },
      {
        type: "h2",
        text: "Pool party timing — the part bakeries skip",
        id: "timing",
      },
      {
        type: "p",
        text: "Chlorine splash and afternoon sun destroy buttercream faster than hall AC. Muskan refused delivery at 2 PM when kids were still in the pool — cake would sit wilting for two hours. Driver arrived 4:15 PM; cake stayed in kitchen fridge until 4:25 PM. Same late-handover logic as [last-minute bento pool party](/case-studies/bento-birthday-cake-goa-case-study).",
      },
      {
        type: "h2",
        text: "Structure and colour under Goan light",
        id: "colour",
      },
      {
        type: "p",
        text: "Phone cameras wash pastels outdoors. Muskan deepened pink one shade versus screen swatch so **flamingo birthday cake Goa** photos still read pink, not white. Gold beak accent used sparingly — fingerprints show on humid afternoons.",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Candles lit at 4:35 PM; pool towels still damp in background — photos looked styled anyway. Aunt booked a [unicorn](/case-studies/unicorn-cake-goa-case-study) for September. Want flamingo? Message ${site.phone} with pool/indoor and cutting time.",
      },
      {
        type: "related",
        title: "Tropical girls birthdays",
        items: [
          { href: "/creations/flamingo-cake", label: "Flamingo gallery", description: "Video reference" },
          { href: "/case-studies/pink-butterfly-cake-goa-case-study", label: "Butterfly case study", description: "Garden pink theme" },
          { href: "/blog/unicorn-cake-goa-order-guide", label: "Unicorn journal", description: "Compare themes" },
          { href: "/contact", label: "Contact Muskan", description: "Pool party brief" },
        ],
      },
    ],
  },
  {
    slug: "boss-baby-cake-goa-case-study",
    title: "Case study: Boss Baby cake in Goa — suit piping, briefcase detail & a first birthday that meant business",
    excerpt:
      "Corporate joke theme for a one-year-old — Muskan delivered a Boss Baby cake Goa with cream suit piping, tiny tie, eggless sponge for family lunch in Vasco, and a design cute enough for photos without licensing headaches.",
    publishedAt: "2026-08-04",
    readMinutes: 12,
    focusKeyword: "Boss Baby cake Goa",
    keywords: [
      "Boss Baby cake Goa",
      "Boss Baby birthday cake",
      "first birthday cake Goa",
      "character cake Vasco",
      "cream character cake Muskan",
      "kids theme cake Goa",
    ],
    creationSlug: "boss-baby-cake",
    difficulty: "Medium · character likeness in cream",
    leadTime: "8 days",
    celebrationType: "1st birthday · 25 family · home lunch",
    relatedSlugs: [
      "doraemon-family-cake-goa-case-study",
      "cocomelon-cake-goa-case-study",
      "barbie-castle-cake-goa-case-study",
    ],
    heroImage:
      "/images/boss-baby-cake/496302600_18059405171170730_3121435538125923088_n..webp",
    heroImageAlt:
      "Boss Baby cake Goa — character first birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/boss-baby-cake",
    heroGalleryLabel: "Boss Baby gallery",
    blocks: [
      {
        type: "p",
        text: `A **Boss Baby cake Goa** order is half joke, half milestone — Dad wears a suit sticker; baby turns one; the cake needs a tie and attitude. Muskan's [Boss Baby Cake](/creations/boss-baby-cake) for a [Vasco](/locations/vasco) family lunch used buttercream suit piping and a cream face silhouette — not licensed moulds, not wafer print — so the design photographs clearly and stays fully edible.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "**Boss Baby birthday cake** parents should send gallery link, age, guest count, eggless yes/no, and whether grandparents prefer less saturated colours.",
      },
      {
        type: "h2",
        text: "The brief: \"he already runs the house\"",
        id: "brief",
      },
      {
        type: "p",
        text: "Parents messaged with our Boss Baby gallery photo and a theme: white shirt, blue tie, briefcase motif on board. First birthday — mostly adults eating, baby smashes a cupcake separately. Eggless sponge for Jain relatives; 25 slices needed.",
      },
      {
        type: "ul",
        items: [
          "8-inch round hero + 6 smash cupcakes matching palette.",
          "Cream-piped suit + tie; face kept simple for first birthday photos.",
          "Eggless vanilla sponge + light chocolate buttercream.",
          "Message: \"CEO of Cuteness — Year 1\" on board.",
          "Home delivery [Vasco](/locations/vasco) — ground floor, no stairs drama.",
        ],
      },
      {
        type: "h2",
        text: "Character cakes without fondant armour",
        id: "technique",
      },
      {
        type: "p",
        text: "Licensed character cakes often mean fondant slabs kids discard. Muskan piped the **Boss Baby cake Goa** look in cream — same philosophy as [Doraemon family piping](/case-studies/doraemon-family-cake-goa-case-study). Parents get recognisable theme; guests eat everything except the board message.",
      },
      {
        type: "h2",
        text: "First birthday sizing — hero cake vs smash cupcake",
        id: "sizing",
      },
      {
        type: "p",
        text: "One-year-olds destroy a cupcake, not a tier. Muskan paired an 8-inch family cake with smash cupcakes so adults had clean slices and baby had a photo moment. [Bento tins](/blog/bento-cake-goa-order-guide) work for smaller guest counts.",
      },
      {
        type: "h2",
        text: "Delivery and home lunch timing",
        id: "delivery",
      },
      {
        type: "p",
        text: "Sunday lunch 1 PM; cake delivered 12:30 PM into kitchen fridge. Relatives arrived early — mother sent fridge photo morning-of. No outdoor heat issue; simpler than [Spiderman pool parties](/case-studies/spiderman-cake-goa-case-study).",
      },
      {
        type: "h2",
        text: "Outcome",
        id: "outcome",
      },
      {
        type: "p",
        text: "Grandfather posed with cake wearing his real tie. Cousin ordered [Cocomelon](/case-studies/cocomelon-cake-goa-case-study) two months later. Message ${site.phone} with age and gallery link for your **Boss Baby cake Goa** quote.",
      },
      {
        type: "related",
        title: "Character first birthdays",
        items: [
          { href: "/creations/boss-baby-cake", label: "Boss Baby gallery", description: "WhatsApp reference" },
          { href: "/blog/kids-birthday-cake-goa-character-themes", label: "Kids cake guide", description: "Theme planning" },
          { href: "/case-studies/doraemon-family-cake-goa-case-study", label: "Doraemon case study", description: "Cream piping story" },
          { href: "/order", label: "Book a cake", description: "Lead times" },
        ],
      },
    ],
  },
  {
    slug: "minicar-cake-goa-case-study",
    title: "Case study: Car birthday cake in Goa — minicar cream design, boy turns 6 & a Mapusa lane too narrow for drama",
    excerpt:
      "He wanted a race car, not a cartoon — Muskan built a minicar cake Goa with buttercream body lines, eggless chocolate sponge, delivery down a narrow Mapusa lane, and a six-year-old who vroomed before cutting.",
    publishedAt: "2026-08-06",
    readMinutes: 13,
    focusKeyword: "car birthday cake Goa",
    keywords: [
      "car birthday cake Goa",
      "minicar cake Goa",
      "boys birthday cake Goa",
      "car theme cake Muskan",
      "eggless car cake Goa",
      "custom kids cake Mapusa",
    ],
    creationSlug: "minicar-cake",
    difficulty: "Medium · sculpted cream lines + narrow delivery",
    leadTime: "6 days",
    celebrationType: "6th birthday · 12 kids · home party",
    relatedSlugs: [
      "football-cake-goa-case-study",
      "spiderman-cake-goa-case-study",
      "bento-birthday-cake-goa-case-study",
    ],
    heroImage:
      "/images/minicar-cake/622922953_18064333613280185_3167700282500130972_n..jpg",
    heroImageAlt:
      "Minicar cake Goa — car birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/minicar-cake",
    heroGalleryLabel: "Minicar cake gallery",
    blocks: [
      {
        type: "p",
        text: `After [football](/case-studies/football-cake-goa-case-study) and [Spiderman](/case-studies/spiderman-cake-goa-case-study), the **car birthday cake Goa** brief is refreshingly simple — wheels, body lines, maybe a number plate with age. Muskan's [Minicar Cake](/creations/minicar-cake) for a six-year-old in [Mapusa](/locations/mapusa) used buttercream sculpting on eggless chocolate sponge, red and black palette, gallery video as WhatsApp reference — delivered down a lane too narrow for parking drama.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **minicar cake Goa** or **car theme birthday cake**? Send child's age, favourite colour, eggless yes/no, and whether delivery is narrow lane / apartment.",
      },
      {
        type: "h2",
        text: "The brief: real car energy, not cartoon",
        id: "brief",
      },
      {
        type: "p",
        text: "Father said no characters — only cars. Son wanted red, black wheels, age 6 on a plate. Twelve kids, home party 5 PM, eggless chocolate inside. Mother sent minicar gallery link and asked if [Minicar Cream Cake](/creations/minicar-cream-cake) or sculpted version — chose sculpted for photos.",
      },
      {
        type: "ul",
        items: [
          "8-inch carved illusion — hood and cabin piped in buttercream.",
          "Eggless chocolate sponge + vanilla cream — kids prefer moist crumb.",
          "Oreo wheels — stable, edible, photographed well.",
          "Name on board; age on piped number plate.",
          "Lane delivery — driver walked final 40 metres upright box in hand.",
        ],
      },
      {
        type: "h2",
        text: "Minicar vs football vs character — boys theme math",
        id: "themes",
      },
      {
        type: "p",
        text: "Sports themes need field green; characters need face accuracy. **Car birthday cake Goa** orders focus on silhouette and colour — faster than five-character [Doraemon](/case-studies/doraemon-family-cake-goa-case-study) piping. Read [kids character guide](/blog/kids-birthday-cake-goa-character-themes) if your child switches themes mid-week.",
      },
      {
        type: "h2",
        text: "Narrow lane delivery in Mapusa",
        id: "delivery",
      },
      {
        type: "p",
        text: "Muskan asks for lane photos when GPS pins look tight. Driver parked on main road, walked box upright — non-slip base, pre-chilled cake. Mother met at corner. Same walk-up discipline as [Doraemon Margao stairs](/case-studies/doraemon-family-cake-goa-case-study), flat ground instead of flights.",
      },
      {
        type: "h2",
        text: "Eggless chocolate for classmates",
        id: "eggless",
      },
      {
        type: "p",
        text: "Half the class eggless — whole cake built eggless to avoid slice confusion. Muskan notes this on invoice and box label. [Eggless flavours guide](/blog/eggless-birthday-cake-goa-flavours) explains why chocolate works well without eggs.",
      },
      {
        type: "h2",
        text: "Outcome — vroom before knife",
        id: "outcome",
      },
      {
        type: "p",
        text: "Birthday boy made engine sounds for thirty seconds before cutting — parents got the video. Neighbour booked [bento birthday](/case-studies/bento-birthday-cake-goa-case-study) for a smaller party. Want a car cake? Message ${site.phone} with gallery link and lane delivery notes.",
      },
      {
        type: "related",
        title: "Boys birthday themes",
        items: [
          { href: "/creations/minicar-cake", label: "Minicar gallery", description: "Video reference" },
          { href: "/creations/minicar-cream-cake", label: "Minicar cream", description: "Simpler variant" },
          { href: "/case-studies/football-cake-goa-case-study", label: "Football case study", description: "Sports theme story" },
          { href: "/contact", label: "Contact Muskan", description: "Mapusa delivery brief" },
        ],
      },
    ],
  },
  {
    slug: "rakshabandhan-cake-goa-case-study",
    title: "Case study: Rakshabandhan cake in Goa — rakhri colours, sibling surprise & a Margao lunch before the flight",
    excerpt:
      "She tied rakhi at noon and needed dessert by 2 PM — Muskan baked a rakshabandhan cake Goa with marigold buttercream, eggless cardamom sponge, brother's name in Devanagari, and delivery to a Margao home before he flew out that evening.",
    publishedAt: "2026-08-10",
    readMinutes: 13,
    focusKeyword: "rakshabandhan cake Goa",
    keywords: [
      "rakshabandhan cake Goa",
      "Rakhi cake Goa",
      "rakhi design cake Muskan",
      "festival cake delivery Goa",
      "eggless rakhi cake",
      "Indian festival cake Goa",
      "Sweet Bites rakshabandhan",
    ],
    creationSlug: "rakshabandhan-design-cake",
    difficulty: "Medium · festival palette + tight same-day window",
    leadTime: "5 days",
    celebrationType: "Rakshabandhan · 20 family · home lunch",
    relatedSlugs: [
      "haldi-cake-goa-case-study",
      "rasmalai-cake-goa-case-study",
      "golden-cream-cake-goa-case-study",
    ],
    heroImage:
      "/images/rakshabandhan-design-cake/653985875_18099188872757844_229305606642926062_n..webp",
    heroImageAlt:
      "Rakshabandhan cake Goa — festival design cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/rakshabandhan-design-cake",
    heroGalleryLabel: "Rakshabandhan cake gallery",
    blocks: [
      {
        type: "p",
        text: `A **rakshabandhan cake Goa** order is about timing as much as colour — rakhi tied in the morning, brother's flight at 7 PM, cousins arriving with mithai, and one dessert that photographs before everyone is too full. Muskan's [Rakshabandhan Design Cake](/creations/rakshabandhan-design-cake) for a [Margao](/locations/margao) family used marigold and cream buttercream, eggless cardamom sponge, and a simple rakhri-thread motif piped on top — festive without looking like a wedding cake.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **rakshabandhan cake Goa** or **Rakhi cake Goa**? Send celebration date, lunch time, guest count, eggless needs, and whether you want names in English or Devanagari.",
      },
      {
        type: "h2",
        text: "The brief: rakhi morning, flight evening",
        id: "brief",
      },
      {
        type: "p",
        text: "Sister messaged five days before Rakshabandhan with our gallery photo and a tight window: family lunch 2 PM, brother leaving for university abroad at 7 PM. Twenty relatives, mixed ages, eggless for elders. She wanted marigold yellow, cream, a rakhri thread loop on top, and brother's name — not childish cartoon, not wedding gold overload.",
      },
      {
        type: "ul",
        items: [
          "8-inch round — serves 20 with mithai already on the table.",
          "Eggless cardamom-vanilla sponge + light saffron cream.",
          "Piped rakhri motif + marigold dots — no plastic toppers.",
          "Name in Devanagari on board; \"Bhai\" nickname smaller line.",
          "Delivery 1:30 PM; cake in dining fridge until 2:15 PM dessert.",
        ],
      },
      {
        type: "h2",
        text: "Festival palette without haldi yellow clash",
        id: "palette",
      },
      {
        type: "p",
        text: "Rakshabandhan colours sit close to [haldi](/case-studies/haldi-cake-goa-case-study) yellow — Muskan warmed marigold one step toward orange so photos separate from pre-wedding haldi boards in the family chat. Cream base kept the **rakshabandhan cake Goa** readable indoors. If you also need haldi that season, read our [haldi cake journal](/blog/haldi-cake-goa-tradition-guide) so events do not look identical.",
      },
      {
        type: "h2",
        text: "Eggless sponge for mixed family tables",
        id: "eggless",
      },
      {
        type: "p",
        text: "Festival lunches often include elders who skip eggs. Muskan baked the whole cake eggless — cardamom carries flavour when eggs are absent. For mithai-style richness, clients sometimes pair with [rasmalai cake](/blog/rasmalai-cake-goa-guide) at a separate event; this order stayed light after heavy sweets.",
      },
      {
        type: "h2",
        text: "Same-day rhythm: rakhi first, cake second",
        id: "timing",
      },
      {
        type: "p",
        text: "Muskan refused 9 AM delivery — buttercream would wait too long before lunch. 1:30 PM handoff let the family complete rakhi photos first. Mother sent fridge photo at 10 AM; shelf cleared. Same dessert-time discipline as [wedding delivery](/blog/wedding-cake-delivery-goa-checklist) — serve time drives schedule, not ceremony start.",
      },
      {
        type: "h2",
        text: "Delivery in Margao August humidity",
        id: "delivery",
      },
      {
        type: "p",
        text: "Cake traveled upright from [Velim](/locations/velim), pre-chilled, ventilation holes in box lid. Short monsoon shower en route — driver kept box inside cab, not monsoon bike seat. Indoor lunch with fan away from table; no outdoor pavilion risk.",
      },
      {
        type: "h2",
        text: "Outcome — airport WhatsApp photo",
        id: "outcome",
      },
      {
        type: "p",
        text: "Brother sent a cake photo from the airport lounge — half slice packed for him. Aunt booked [golden cream](/case-studies/golden-cream-cake-goa-case-study) for parents' anniversary in November. Muskan's calendar now blocks Rakshabandhan week early — message ${site.phone} two weeks ahead when possible.",
      },
      {
        type: "h2",
        text: "Order a similar Rakhi cake",
        id: "order",
      },
      {
        type: "p",
        text: `Send date, lunch time, guest count, eggless yes/no, and a link to [/creations/rakshabandhan-design-cake](/creations/rakshabandhan-design-cake). Browse [/creations](/creations) for marigold inspiration or ask Muskan to adapt [rasmalai special](/creations/rasmalai-special-cake) flavours for festival week.`,
      },
      {
        type: "related",
        title: "Festival celebrations",
        items: [
          { href: "/creations/rakshabandhan-design-cake", label: "Rakshabandhan gallery", description: "Two reference photos" },
          { href: "/blog/haldi-cake-goa-tradition-guide", label: "Haldi journal", description: "Colour coordination tips" },
          { href: "/case-studies/rasmalai-cake-goa-case-study", label: "Rasmalai case study", description: "Mithai-style cake story" },
          { href: "/contact", label: "Contact Muskan", description: "Festival week booking" },
        ],
      },
    ],
  },
  {
    slug: "farewell-cake-goa-case-study",
    title: "Case study: Farewell cake in Goa — office send-off, navy buttercream & a pantry fridge photo that saved lunch",
    excerpt:
      "HR needed a farewell cake Goa for thirty colleagues by Friday — Muskan delivered navy-and-gold buttercream, eggless chocolate inside, Panaji office pantry timing, and a design calmer than a sphere but still worth a team photo.",
    publishedAt: "2026-08-14",
    readMinutes: 13,
    focusKeyword: "farewell cake Goa",
    keywords: [
      "farewell cake Goa",
      "office farewell cake Goa",
      "corporate cake delivery Panaji",
      "colleague send-off cake Muskan",
      "eggless office cake Goa",
      "custom farewell cake Velim",
      "Sweet Bites corporate cake",
    ],
    creationSlug: "farewell-cake",
    difficulty: "Medium · corporate palette + office handoff",
    leadTime: "4 days",
    celebrationType: "Work farewell · 30 colleagues · office lunch",
    relatedSlugs: [
      "chocolate-sphere-cake-goa-case-study",
      "sweet-bouquet-cake-goa-case-study",
      "golden-cream-cake-goa-case-study",
    ],
    heroImage:
      "/images/farewell-cake/491440347_18058472321170730_7606664070831950751_n..webp",
    heroImageAlt:
      "Farewell cake Goa — office send-off cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/farewell-cake",
    heroGalleryLabel: "Farewell cake gallery",
    blocks: [
      {
        type: "p",
        text: `A **farewell cake Goa** order from HR rarely says "surprise" — it says Friday lunch, thirty portions, logo colours if possible, and a colleague who is embarrassed by loud decorations. Muskan's [Farewell Cake](/creations/farewell-cake) for a [Panaji](/locations/panaji) tech office used navy buttercream, restrained gold lines, eggless chocolate sponge, and delivery into a pantry fridge that HR photographed before Muskan left [Velim](/locations/velim).`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **farewell cake Goa** or **office farewell cake**? Send colleague count, lunch time, pantry/fridge yes/no, eggless needs, and whether you want a message on board only (no edible logo unless you own rights).",
      },
      {
        type: "h2",
        text: "The brief: Friday lunch, thirty people, calm design",
        id: "brief",
      },
      {
        type: "p",
        text: "HR messaged Monday for Friday — four days. Colleague leaving after five years; team lunch 1 PM; lunchroom AC. They loved our [chocolate sphere](/case-studies/chocolate-sphere-cake-goa-case-study) gallery but needed simpler budget and faster build. Chose farewell style: professional, not cartoon.",
      },
      {
        type: "ul",
        items: [
          "10-inch round — thin slices for 30 with cookies on the side.",
          "Eggless chocolate sponge + vanilla buttercream exterior.",
          "Navy + gold palette matching company slide deck (photo sent).",
          "Board message: \"Thank you, Arjun — we'll miss the stand-ups.\"",
          "Delivery 11:45 AM; cake in office pantry until 12:50 PM.",
        ],
      },
      {
        type: "h2",
        text: "Sphere vs farewell round — how Muskan advises HR",
        id: "sphere-vs-round",
      },
      {
        type: "p",
        text: "**Chocolate sphere cake Goa** moments wow on video but need longer lead time and fridge discipline. Farewell rounds slice faster in open-plan offices, cost less labour, and still photograph well with gold line work. HR picked round; Muskan noted sphere for the next senior exit.",
      },
      {
        type: "h2",
        text: "Office handoff: pantry photo rule",
        id: "handoff",
      },
      {
        type: "p",
        text: "Muskan will not deliver without a pantry or kitchen fridge photo — same rule as [cake bouquet office surprises](/case-studies/sweet-bouquet-cake-goa-case-study). Facilities manager sent shelf dimensions; driver placed cake mid-shelf, upright, door closed. Organiser got a WhatsApp checklist: no early display in warm lunchroom.",
      },
      {
        type: "h2",
        text: "Eggless for mixed dietary notes",
        id: "eggless",
      },
      {
        type: "p",
        text: "Three teammates flagged eggless on the lunch form. Muskan baked the whole **farewell cake Goa** eggless to avoid label confusion — chocolate sponge stays moist without eggs when cocoa is good. [Eggless birthday guide](/blog/eggless-birthday-cake-goa-flavours) explains the same logic for family parties.",
      },
      {
        type: "h2",
        text: "Delivery across Panaji traffic",
        id: "delivery",
      },
      {
        type: "p",
        text: "Friday late-morning traffic from Velim to Panaji got a 40-minute buffer. Cake pre-chilled; box with ventilation holes; non-slip base. Handed to security, escorted to pantry — colleague never saw the box walk through open office.",
      },
      {
        type: "h2",
        text: "Outcome — LinkedIn photo and a Diwali reorder",
        id: "outcome",
      },
      {
        type: "p",
        text: "Team photo at 1:05 PM; leaving colleague posted on LinkedIn the same day. HR booked [sweet bouquet](/case-studies/sweet-bouquet-cake-goa-case-study) stems for Diwali and asked about [golden cream](/case-studies/golden-cream-cake-goa-case-study) for a founder milestone. Message ${site.phone} with headcount and lunch time for your send-off.",
      },
      {
        type: "related",
        title: "Office celebrations",
        items: [
          { href: "/creations/farewell-cake", label: "Farewell gallery", description: "Reference on WhatsApp" },
          { href: "/case-studies/chocolate-sphere-cake-goa-case-study", label: "Sphere case study", description: "Premium send-off option" },
          { href: "/blog/book-custom-cake-goa-whatsapp", label: "Booking guide", description: "First message tips" },
          { href: "/locations/panaji", label: "Panaji delivery", description: "Office routes" },
        ],
      },
    ],
  },
  {
    slug: "modern-anniversary-cake-goa-case-study",
    title: "Case study: Modern anniversary cake in Goa — 25th dinner, geometric buttercream & an Anjuna terrace at sunset",
    excerpt:
      "They did not want a wedding repeat — Muskan designed a modern anniversary cake Goa with clean line work, eggless coffee sponge, twelve villa guests, delivery timed for sunset dessert, and a gallery video the couple sent to family abroad.",
    publishedAt: "2026-08-18",
    readMinutes: 14,
    focusKeyword: "modern anniversary cake Goa",
    keywords: [
      "modern anniversary cake Goa",
      "minimalist anniversary cake Goa",
      "25th anniversary cake Goa",
      "anniversary cake Anjuna",
      "contemporary cake Muskan",
      "eggless anniversary cake Goa",
      "villa anniversary cake delivery",
    ],
    creationSlug: "modern-design-anniversary",
    difficulty: "Medium · line precision + terrace timing",
    leadTime: "10 days",
    celebrationType: "25th anniversary · 12 guests · villa terrace",
    relatedSlugs: [
      "anniversary-heart-cake-goa-case-study",
      "golden-cream-cake-goa-case-study",
      "engagement-peach-cream-cake-goa-case-study",
    ],
    heroImage:
      "/images/modern-design-anniversary/564525161_18075559883170730_4410692070731136305_n..webp",
    heroImageAlt:
      "Modern anniversary cake Goa — contemporary 25th celebration cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/modern-design-anniversary",
    heroGalleryLabel: "Modern anniversary gallery",
    blocks: [
      {
        type: "p",
        text: `A **modern anniversary cake Goa** brief often starts with what the couple does not want — no gold cascade, no three tiers, no looking like their 2018 wedding photos. Muskan's [Modern Design Anniversary Cake](/creations/modern-design-anniversary) for a 25th in [Anjuna](/locations/anjuna) used taupe and blush buttercream, sharp line work, eggless coffee sponge, and delivery timed for sunset dessert on a twelve-person terrace — elegant enough for saris, calm enough for speeches.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Planning a **minimalist anniversary cake Goa**? Send years, guest count, terrace vs hall, eggless needs, and a gallery link — Muskan separates modern line work from [golden cream](/case-studies/golden-cream-cake-goa-case-study) milestones on WhatsApp.",
      },
      {
        type: "h2",
        text: "The brief: 25 years, twelve seats, no wedding déjà vu",
        id: "brief",
      },
      {
        type: "p",
        text: "Daughter organised from Mumbai on WhatsApp — parents' silver anniversary dinner at a rented Anjuna villa. Twelve guests, eggless for both parents, coffee and salted caramel flavours, dessert after sunset photos. They sent our modern anniversary gallery video and said \"exactly this line style, softer blush.\"",
      },
      {
        type: "ul",
        items: [
          "8-inch single tier — serves 12 after a full Goan dinner.",
          "Eggless coffee sponge + salted caramel buttercream.",
          "Taupe base, blush accent lines, minimal gold — not full metallic tier.",
          "Board: \"25 years — still choosing each other\" in English.",
          "Delivery 6:45 PM; cake in villa fridge until 8:10 PM dessert.",
        ],
      },
      {
        type: "h2",
        text: "Line work that survives phone cameras",
        id: "design",
      },
      {
        type: "p",
        text: "Modern cakes fail when lines wobble or colours clash with sunset orange sky. Muskan piped geometric arcs on a chilled crumb coat — rested 30 minutes before accent lines. She deepened taupe slightly so **modern anniversary cake Goa** photos read neutral, not grey. Compare with romantic [peach cream engagement](/case-studies/engagement-peach-cream-cake-goa-case-study) palettes if you want blush without geometry.",
      },
      {
        type: "h2",
        text: "Terrace wind and fridge coordination",
        id: "terrace",
      },
      {
        type: "p",
        text: "Anjuna sea breeze picks up after 7 PM. Villa host sent fridge and shaded table photos — Muskan approved before driver left [Velim](/locations/velim). Cake traveled upright, pre-chilled; fan pointed away from dessert table. Same dessert-time discipline as [wedding delivery checklist](/blog/wedding-cake-delivery-goa-checklist), scaled for twelve guests.",
      },
      {
        type: "h2",
        text: "Why not golden cream for this milestone",
        id: "why-not-golden",
      },
      {
        type: "p",
        text: "Couple explicitly rejected heavy gold — they had [golden cream](/case-studies/golden-cream-cake-goa-case-study) energy at a family 50th and wanted contrast. Muskan's reply on WhatsApp showed side-by-side gallery links: modern anniversary vs golden birthday. Daughter chose modern in one voice note. Clarity saves rush changes.",
      },
      {
        type: "h2",
        text: "Outcome — video to family abroad",
        id: "outcome",
      },
      {
        type: "p",
        text: "Parents cut cake at 8:15 PM with sunset behind — daughter live-streamed to siblings in Dubai. Son booked [anniversary heart](/case-studies/anniversary-heart-cake-goa-case-study) for a first anniversary the following month (smaller, romantic). Read our [modern anniversary journal](/blog/modern-anniversary-cake-goa-guide) before you message.",
      },
      {
        type: "h2",
        text: "Order a similar modern anniversary cake",
        id: "order",
      },
      {
        type: "p",
        text: `Send date, guest count, years, eggless yes/no, and [/creations/modern-design-anniversary](/creations/modern-design-anniversary). Message ${site.phone} — Muskan quotes line work, flavour, and villa delivery before payment.`,
      },
      {
        type: "related",
        title: "Anniversary milestones",
        items: [
          { href: "/blog/modern-anniversary-cake-goa-guide", label: "Modern anniversary journal", description: "Sizing & terrace tips" },
          { href: "/creations/modern-design-anniversary", label: "Gallery + video", description: "WhatsApp reference" },
          { href: "/blog/anniversary-cake-goa-complete-guide", label: "Anniversary guide", description: "Classic options too" },
          { href: "/contact", label: "Contact Muskan", description: "Villa delivery brief" },
        ],
      },
    ],
  },
  {
    slug: "light-blue-birthday-cake-goa-case-study",
    title: "Case study: Light blue birthday cake in Goa — pastel hall party, eggless sponge & a three-year-old who only wanted balloons",
    excerpt:
      "No cartoon, no fondant figures — Muskan baked a light blue birthday cake Goa for a Panaji hall: sky-blue buttercream, white pearls, eggless vanilla, twenty guests, and delivery timed for AC dessert after games.",
    publishedAt: "2026-08-22",
    readMinutes: 12,
    focusKeyword: "light blue birthday cake Goa",
    keywords: [
      "light blue birthday cake Goa",
      "pastel birthday cake Goa",
      "blue cake Goa kids",
      "eggless blue birthday cake",
      "hall birthday cake Panaji",
      "calm kids cake Muskan",
    ],
    creationSlug: "light-blue-birthday-cake",
    difficulty: "Easy–medium · pastel precision + hall timing",
    leadTime: "6 days",
    celebrationType: "3rd birthday · 20 kids · AC hall",
    relatedSlugs: [
      "pink-butterfly-cake-goa-case-study",
      "unicorn-cake-goa-case-study",
      "bento-birthday-cake-goa-case-study",
    ],
    heroImage:
      "/images/light-blue-birthday-cake/625107430_18139976260465801_3901213835978370165_n..webp",
    heroImageAlt:
      "Light blue birthday cake Goa — pastel kids birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/light-blue-birthday-cake",
    heroGalleryLabel: "Light blue birthday gallery",
    blocks: [
      {
        type: "p",
        text: `Some **light blue birthday cake Goa** orders begin with exhaustion — parents tired of character negotiations with a three-year-old who only repeats "balloons." Muskan's [Light Blue Birthday Cake](/creations/light-blue-birthday-cake) for a [Panaji](/locations/panaji) hall party gave sky-blue buttercream, white pearl dots, eggless vanilla sponge, and a name board that matched balloon decor without licensing or fondant figures.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "**Pastel birthday cake Goa** parents should send hall photos, balloon colours, eggless count, and cake-cutting time after games — not when guests arrive.",
      },
      {
        type: "h2",
        text: "The brief: balloons yes, cartoons no",
        id: "brief",
      },
      {
        type: "p",
        text: "Mother messaged with balloon arch photo (sky blue + white) and our gallery light blue cake. Twenty kids, mostly age 2–5, eggless for half the playgroup. Hall AC booked 3–6 PM; cake at 5:15 after games.",
      },
      {
        type: "ul",
        items: [
          "8-inch round — serves 20 with small slices + return-party snacks.",
          "Eggless vanilla sponge + strawberry cream filling (light pink inside).",
          "Sky-blue exterior, white pearl piping, silver board message.",
          "No fondant toppers — balloons carry the theme.",
          "Delivery 4:45 PM; hall manager fridge until 5:10 PM.",
        ],
      },
      {
        type: "h2",
        text: "Why Muskan steered away from unicorn",
        id: "why-not-unicorn",
      },
      {
        type: "p",
        text: "Father suggested [unicorn](/case-studies/unicorn-cake-goa-case-study) mid-week. Mother held firm — photos with grandparents needed calm palette. Muskan sent side-by-side gallery links; **light blue birthday cake Goa** stayed the plan. Flexibility without guilt is part of WhatsApp ordering.",
      },
      {
        type: "h2",
        text: "Pastel buttercream under hall lights",
        id: "colour",
      },
      {
        type: "p",
        text: "Fluorescent halls cool blue toward grey. Muskan warmed sky-blue one step and added white pearl contrast so cake read blue in phone photos, not silver. Same colour thinking as [pink butterfly](/case-studies/pink-butterfly-cake-goa-case-study) garden parties, easier indoors.",
      },
      {
        type: "h2",
        text: "Hall fridge handoff",
        id: "delivery",
      },
      {
        type: "p",
        text: "Hall manager sent fridge photo morning-of — Muskan approved shelf. Driver delivered 4:45 PM from [Velim](/locations/velim), upright box, pre-chilled. Games ran long; cake still fine at 5:20 PM because AC held. Outdoor [flamingo pool](/case-studies/flamingo-cake-goa-case-study) rules did not apply — dessert timing still mattered.",
      },
      {
        type: "h2",
        text: "Outcome — reuse theme next year",
        id: "outcome",
      },
      {
        type: "p",
        text: "Grandparents posed with cake and balloons — no character shame. Mother rebooked a [bento tin](/case-studies/bento-birthday-cake-goa-case-study) for a home celebration with cousins. Read [light blue journal](/blog/light-blue-birthday-cake-goa-order-guide) before messaging ${site.phone}.",
      },
      {
        type: "related",
        title: "Pastel parties",
        items: [
          { href: "/blog/light-blue-birthday-cake-goa-order-guide", label: "Light blue journal", description: "Sizing & venue tips" },
          { href: "/creations/light-blue-birthday-cake", label: "Gallery photo", description: "Reference on WhatsApp" },
          { href: "/case-studies/pink-butterfly-cake-goa-case-study", label: "Butterfly case study", description: "Garden pastel contrast" },
          { href: "/contact", label: "Contact Muskan", description: "Hall party brief" },
        ],
      },
    ],
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return [...studies].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getCaseStudySlugs(): string[] {
  return studies.map((s) => s.slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return studies.find((s) => s.slug === slug);
}

export function getCaseStudyByCreationSlug(creationSlug: string): CaseStudy | undefined {
  return studies.find((s) => s.creationSlug === creationSlug);
}

export function getRelatedCaseStudies(slug: string, limit = 2): CaseStudy[] {
  const study = getCaseStudyBySlug(slug);
  if (!study) return [];
  const related = study.relatedSlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter((s): s is CaseStudy => Boolean(s))
    .slice(0, limit);
  if (related.length >= limit) return related;
  const extras = studies
    .filter((s) => s.slug !== slug && !related.some((r) => r.slug === s.slug))
    .slice(0, limit - related.length);
  return [...related, ...extras];
}

export function caseStudyCanonicalUrl(slug: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  return `${base}/case-studies/${slug}`;
}
