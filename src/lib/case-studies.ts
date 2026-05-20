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

export const CASE_STUDIES_INDEX_DESCRIPTION = `${site.name} case studies — how Muskan delivers near-impossible custom cakes in Goa: Barbie castle cakes, Spiderman character cakes, unicorn horn structures & more. Real briefs, structure, delivery & WhatsApp ${site.phone}.`;

export const CASE_STUDIES_INDEX_KEYWORDS = [
  "custom cake case study Goa",
  "Barbie castle cake Goa",
  "Spiderman cake baker Goa",
  "unicorn cake Goa",
  "wedding cake case study Goa",
  "rasmalai cake Goa",
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
