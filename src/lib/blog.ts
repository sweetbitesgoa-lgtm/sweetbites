import { site } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

/** Long-form meta description for /blog (SEO snippet). */
export const BLOG_INDEX_DESCRIPTION = `${site.name} Journal — free guides for Goa celebrations: book a custom cake on WhatsApp (${site.phone}), wedding delivery checklists, eggless birthday flavours, kids character cakes, bento cake orders, and honest timelines from Muskan's kitchen in ${site.studioCity}.`;

export const BLOG_INDEX_KEYWORDS = [
  "Sweet Bites blog Goa",
  "custom cake blog India",
  "how to order cake WhatsApp Goa",
  "wedding cake tips Goa",
  "eggless cake blog Goa",
  "Velim bakery journal",
  "Muskan cake advice",
  "birthday cake planning Goa",
  "tiered cake delivery Goa",
  "Goa celebration cake guide",
  "South Goa custom cake",
  "North Goa cake delivery tips",
  "kids birthday cake Goa",
  "bento cake Goa",
  "ready-made cakes Goa",
  "haldi cake Goa",
  "last-minute birthday cake Goa",
  "same-day cake Goa",
  "engagement cake Goa",
  "proposal cake Goa",
  "chocolate cake Goa",
  "chocolate cake delivery Goa",
  "anniversary cake Goa",
  "rasmalai cake Goa",
  "unicorn cake Goa",
  "photo cake Goa",
  "edible image cake Goa",
  "cake bouquet Goa",
  "mermaid cake Goa",
  "Doraemon cake Goa",
  "flamingo cake Goa",
  "tropical birthday cake Goa",
  "sweetbites.me journal",
] as const;

export function getBlogIndexKeywords(posts: BlogPost[]): string[] {
  const fromPosts = posts.flatMap((p) => p.keywords);
  return [...new Set([...BLOG_INDEX_KEYWORDS, ...fromPosts])];
}

export function getBlogListingJsonLd(posts: BlogPost[]): Record<string, unknown> {
  const base = SITE_URL.replace(/\/$/, "");
  const blogUrl = `${base}/blog`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${blogUrl}#blog`,
        name: `${site.name} Journal`,
        alternateName: "Sweet Bites Journal",
        description: BLOG_INDEX_DESCRIPTION,
        url: blogUrl,
        inLanguage: "en-IN",
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: {
            "@type": "ImageObject",
            url: `${base}${site.logo.startsWith("/") ? site.logo : `/${site.logo}`}`,
          },
        },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          description: p.excerpt,
          url: `${base}/blog/${p.slug}`,
          datePublished: `${p.publishedAt}T09:00:00+05:30`,
          author: {
            "@type": "Person",
            name: "Muskan",
            url: `${base}/about`,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${base}/blog/${p.slug}`,
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Latest journal articles",
        numberOfItems: posts.length,
        itemListElement: posts.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.title,
          item: `${base}/blog/${p.slug}`,
        })),
      },
    ],
  };
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "callout";
      text: string;
      title?: string;
      variant?: "tip" | "note";
    }
  | {
      type: "related";
      title: string;
      items: { href: string; label: string; description?: string }[];
    };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readMinutes: number;
  /** Primary SEO phrase — shown in article hero */
  focusKeyword: string;
  keywords: string[];
  relatedSlugs: string[];
  /** Optional hero photo (defaults to site showcase) */
  heroImage?: string;
  heroImageAlt?: string;
  /** Caption link under hero photo */
  heroGalleryHref?: string;
  heroGalleryLabel?: string;
  blocks: BlogBlock[];
};

/** Journal heroes — from creations gallery */
export const BLOG_BOOKING_HERO_IMAGE =
  "/images/golden-cream-birthday-cake/624880407_18052417967703847_5140043511432543654_n..webp";

export const BLOG_WEDDING_HERO_IMAGE =
  "/images/wedding-cake/659772208_18092845286170730_8159590204106277210_n..webp";

export const BLOG_KIDS_HERO_IMAGE =
  "/images/spiderman-cake/619485602_17929184628193772_648480827065862935_n..webp";

export const BLOG_BENTO_HERO_IMAGE =
  "/images/bento-cake/491142105_18057367328170730_7039415400764743136_n..webp";

export const BLOG_CAKES_MENU_HERO_IMAGE =
  "/images/rasmalai-special-cake/490789450_18058059911170730_8453845595451321352_n..webp";

export const BLOG_HALDI_HERO_IMAGE =
  "/images/haldi-design-cake/498586910_18060535466170730_970917338585622900_n..webp";

export const BLOG_LAST_MINUTE_HERO_IMAGE =
  "/images/bento-birthday-cake/550781468_18072158705170730_8642231030514791168_n..webp";

export const BLOG_ENGAGEMENT_HERO_IMAGE =
  "/images/anniversary-peach-cream-cake/557195900_18073537505170730_3370198253031180573_n..webp";

export const BLOG_CHOCOLATE_HERO_IMAGE =
  "/images/chocolate-special-cake/553327698_18073158064170730_6979116362068363965_n..webp";

export const BLOG_ANNIVERSARY_HERO_IMAGE =
  "/images/anniversary-cake/497297871_18060134072170730_8307687261670369862_n..webp";

export const BLOG_RASMALAI_HERO_IMAGE =
  "/images/rasmalai-cake/655270937_18137507944502855_1170683226125899544_n..webp";

export const BLOG_UNICORN_HERO_IMAGE =
  "/images/unicorn-cake/572183692_18077522492170730_392051892465413783_n. - Copy - Copy.webp";

export const BLOG_PHOTO_HERO_IMAGE =
  "/images/image-cake/494774540_18058822700170730_1726010468788488612_n..webp";

export const BLOG_BOUQUET_HERO_IMAGE =
  "/images/sweet-bouquet/626555743_18150211366447228_3216976923459080994_n..webp";

export const BLOG_MERMAID_HERO_IMAGE =
  "/images/marmaid-cake/569391549_18077044856170730_1366736127232657831_n..webp";

export const BLOG_DORAEMON_HERO_IMAGE =
  "/images/doremon-family-cake/496857347_18059681900170730_4573398989023979467_n..webp";

export const BLOG_FLAMINGO_HERO_IMAGE =
  "/images/flamingo-cake/655187695_18066879632644223_3948263265025615855_n..jpg";

export const BLOG_EXPLORE_LINKS = [
  { href: "/creations", label: "Cake gallery", description: "160+ real designs to reference on WhatsApp" },
  { href: "/order", label: "How to book", description: "Step-by-step ordering & lead times" },
  { href: "/locations", label: "Delivery areas", description: "North & South Goa towns we serve" },
  { href: "/locations/velim", label: "Velim studio", description: "Kitchen address, map & pickup" },
  { href: "/contact", label: "Contact & hours", description: "Studio visits by appointment" },
  { href: "/about", label: "About Muskan", description: "Story behind Sweet Bites" },
] as const;

const posts: BlogPost[] = [
  {
    slug: "book-custom-cake-goa-whatsapp",
    title: "How to book a custom cake in Goa (without losing your mind)",
    excerpt:
      "A calm, practical guide to messaging Muskan on WhatsApp — what to send first, how lead times work, and why a few photos beat a long essay.",
    publishedAt: "2026-05-08",
    readMinutes: 11,
    focusKeyword: "custom cake in Goa",
    keywords: [
      "book custom cake Goa",
      "WhatsApp cake order Goa",
      "Sweet Bites lead time",
      "Velim bakery",
      "custom cake in Goa",
    ],
    relatedSlugs: [
      "wedding-cake-delivery-goa-checklist",
      "eggless-birthday-cake-goa-flavours",
    ],
    heroImage: BLOG_BOOKING_HERO_IMAGE,
    heroImageAlt:
      "Golden cream birthday cake — custom cake in Goa by Sweet Bites, order on WhatsApp",
    heroGalleryHref: "/creations/golden-cream-birthday-cake",
    heroGalleryLabel: "Golden cream birthday cake",
    blocks: [
      {
        type: "p",
        text: `If you have ever stared at your phone before texting a baker, you are not alone. Most families searching for a **custom cake in Goa** say the same thing: they were not sure what to write, or whether their idea was "too vague." Here is the truth Muskan at [${site.name}](/about) wishes everyone knew: a messy first message is perfectly fine. Warmth and honesty beat polished paragraphs.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: `This guide is for anyone planning a **custom cake in Goa** — birthday, wedding tier, or office celebration — who wants a clear **WhatsApp cake order** path before paying a deposit.`,
      },
      {
        type: "h2",
        text: "Start with three things",
        id: "start-with-three-things",
      },
      {
        type: "p",
        text: "Before you overthink it, try to include your celebration date, roughly how many people you are feeding, and one line about the vibe — kids birthday, quiet anniversary at home, big Goan wedding, office send-off. That is enough for us to reply with sensible next questions when you **book custom cake Goa** slots through WhatsApp.",
      },
      {
        type: "ul",
        items: [
          "A screenshot or link from our [cake gallery](/creations) if something caught your eye (not required, but it helps Muskan quote faster).",
          "Any dietary note that matters — see our journal piece on [eggless birthday cakes in Goa](/blog/eggless-birthday-cake-goa-flavours) if that applies.",
          "Your area for delivery — browse [delivery areas across Goa](/locations) or mention pickup from our [Velim studio](/locations/velim).",
        ],
      },
      {
        type: "h2",
        text: "Why WhatsApp, really?",
        id: "why-whatsapp",
      },
      {
        type: "p",
        text: "Cakes are visual. A quick voice note, a photo of the venue table, or a messy Pinterest board tells Muskan more than a formal email. **WhatsApp cake order Goa** is also where she sends a clear quote, sketch ideas, and honest timing — especially when Saturday slots are tight or weather might affect a long coastal drive to [Calangute](/locations/calangute) or [Margao](/locations/margao).",
      },
      {
        type: "p",
        text: `Most **custom cake in Goa** designs need about ${site.bookAheadDays} of lead time from our ${site.studioCity} kitchen. Tiered weddings, detailed fondant characters, or peak-season weekends often need longer — the [order guide](/order) spells out typical timelines. If your date is soon, still message; we will tell you straight away what is possible.`,
      },
      {
        type: "h3",
        text: "What a strong first message looks like",
      },
      {
        type: "p",
        text: 'Example: "Hi Muskan — 14 June, 35 guests, unicorn theme for 6-year-old, eggless, delivery near [Mapusa](/locations/mapusa). Loved your floral tier on sweetbites.me." That single block covers date, scale, theme, diet, and location — everything needed to start a **book custom cake Goa** conversation.',
      },
      {
        type: "h2",
        text: "Browse before you brief",
        id: "browse-before-brief",
      },
      {
        type: "p",
        text: "Spend ten minutes on [creations](/creations) and [reels](/reels) so you know what finish level you are drawn to — buttercream rustic, sharp fondant, bento box, or wedding tiers. Referencing a slug or photo shortens back-and-forth and helps Muskan suggest flavours that survive Goan heat at your venue.",
      },
      {
        type: "callout",
        variant: "note",
        title: "Studio visits",
        text: `Pickup and tasting conversations happen at our kitchen in ${site.studioCity}. Check [contact & hours](/contact) before you drive — visits are by appointment so active orders stay on schedule.`,
      },
      {
        type: "h2",
        text: "Delivery vs pickup — same cake, different planning",
        id: "delivery-vs-pickup",
      },
      {
        type: "p",
        text: "A **custom cake in Goa** can leave our kitchen by delivery van or your own boot at an agreed window. North Goa beach venues and South Goa church halls need different handover notes; our [locations hub](/locations) links town-specific tips. For weddings, read the dedicated [wedding cake delivery Goa checklist](/blog/wedding-cake-delivery-goa-checklist) before you confirm the venue table.",
      },
      {
        type: "related",
        title: "Plan your cake on sweetbites.me",
        items: [
          {
            href: "/order",
            label: "How to order",
            description: "Lead times, deposits, and what Muskan needs before bake day",
          },
          {
            href: "/creations",
            label: "Creations gallery",
            description: "Reference photos for your WhatsApp brief",
          },
          {
            href: "/locations/velim",
            label: "Velim studio & map",
            description: "Pickup address and Google Maps directions",
          },
        ],
      },
      {
        type: "p",
        text: `When you are ready, open WhatsApp to ${site.phone}, say hello, and send what you have. We would rather start a **custom cake in Goa** conversation today than have you wait until everything feels perfect on paper. The cake grows from that first hello.`,
      },
    ],
  },
  {
    slug: "wedding-cake-delivery-goa-checklist",
    title: "Wedding cake delivery in Goa — a small checklist that saves big stress",
    excerpt:
      "From Margao halls to North Goa resorts: what to confirm with your venue, how timing works with heat, and how Muskan plans handover so your tiers arrive proud, not panicked.",
    publishedAt: "2026-05-12",
    readMinutes: 12,
    focusKeyword: "wedding cake delivery Goa",
    keywords: [
      "wedding cake delivery Goa",
      "tiered cake Goa",
      "beach wedding cake India",
      "Sweet Bites wedding",
      "wedding cake Goa",
    ],
    relatedSlugs: [
      "book-custom-cake-goa-whatsapp",
      "eggless-birthday-cake-goa-flavours",
    ],
    heroImage: BLOG_WEDDING_HERO_IMAGE,
    heroImageAlt:
      "Tiered wedding cake handcrafted by Sweet Bites for a Goa celebration — wedding cake delivery Goa",
    heroGalleryHref: "/creations/wedding-cake",
    heroGalleryLabel: "Wedding cake gallery",
    blocks: [
      {
        type: "p",
        text: `Your wedding cake is not just dessert — it is in half the photos, and it carries the emotional weight of the whole day. That is why **wedding cake delivery Goa** is never treated like "just dropping off a parcel" at [${site.name}](/about). Heat, traffic, and uneven resort paths all get factored into the plan before a **tiered cake Goa** leaves our ${site.studioCity} kitchen.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Use this checklist when you have locked your venue in North or South Goa and need a reliable **wedding cake delivery Goa** handover — especially for outdoor or beach receptions.",
      },
      {
        type: "h2",
        text: "Lock the handover window early",
        id: "handover-window",
      },
      {
        type: "p",
        text: "Tell us whether the cake should arrive during room setup, guest arrival, or just before you walk in. Muskan prefers a clear window — usually morning or early afternoon for outdoor coastal venues — so sponge is not sitting in direct sun while speeches run long. This is the heart of stress-free **wedding cake delivery Goa** planning.",
      },
      {
        type: "ul",
        items: [
          "A pin or landmark for the exact drop-off point (many [Calangute](/locations/calangute) and [Candolim](/locations/candolim) resorts have multiple gates).",
          "One on-site contact who can receive the **tiered cake Goa** and confirm it arrived in good shape.",
          "Whether the cake table is indoors, shaded, or fully open — we may suggest structure or buttercream tweaks for **beach wedding cake India** conditions.",
        ],
      },
      {
        type: "h2",
        text: "South Goa, North Goa — same kitchen, different timing",
        id: "south-north-timing",
      },
      {
        type: "p",
        text: `Our kitchen is in [${site.studioCity}](/locations/velim), South Goa. **Wedding cake delivery Goa** to [Margao](/locations/margao), [Colva](/locations/colva), [Vasco](/locations/vasco), and nearby towns often has gentler drive times than a Saturday run up to [Panaji](/locations/panaji) or [Anjuna](/locations/anjuna). That does not mean we will not go — it means we quote honestly for distance and schedule the route so tiers travel as little as possible before you cut them.`,
      },
      {
        type: "h3",
        text: "Structure, weather, and buttercream",
      },
      {
        type: "p",
        text: "Humidity and afternoon sun change how a **tiered cake Goa** should be built. Dowels, board sizes, and whether figurines are fondant or chocolate may shift after you describe the table placement. Share venue photos on WhatsApp the same way you would for any [custom cake in Goa](/blog/book-custom-cake-goa-whatsapp) order — visuals prevent surprises.",
      },
      {
        type: "h2",
        text: "Welcome tables, dessert spreads, and second cakes",
        id: "welcome-tables",
      },
      {
        type: "p",
        text: "If you are planning a welcome table or separate dessert spread, mention it early. Sometimes two smaller **wedding cake Goa** designs beat one enormous tier for logistics and guest flow — Muskan will talk you through it without upselling. Browse [creations](/creations) for tier inspiration and [reels](/reels) for how finishes look in real light.",
      },
      {
        type: "callout",
        variant: "note",
        title: "Book early",
        text: `Peak wedding weekends fill ${site.bookAheadDays} or more ahead. Start on the [order page](/order) then confirm details on WhatsApp at ${site.phone} — same path as every **wedding cake delivery Goa** enquiry.`,
      },
      {
        type: "h2",
        text: "Eggless, flavours, and guest counts",
        id: "eggless-flavours",
      },
      {
        type: "p",
        text: "Many wedding parties need an eggless tier for family or friends. Our journal on [eggless birthday cake Goa flavours](/blog/eggless-birthday-cake-goa-flavours) applies to weddings too — mention diet upfront so sponges and fillings are chosen together, not patched on at the end.",
      },
      {
        type: "related",
        title: "Keep planning on sweetbites.me",
        items: [
          {
            href: "/locations",
            label: "All delivery areas",
            description: "Town pages with local notes for your venue",
          },
          {
            href: "/contact",
            label: "Contact & studio map",
            description: "Directions to Velim and appointment hours",
          },
          {
            href: "/blog/book-custom-cake-goa-whatsapp",
            label: "How to book on WhatsApp",
            description: "First message templates for any celebration",
          },
        ],
      },
      {
        type: "p",
        text: "When the day comes, you should be looking at your partner, your family, your friends — not worrying about fondant in the car. That peace of mind is what this **wedding cake delivery Goa** checklist is for.",
      },
    ],
  },
  {
    slug: "eggless-birthday-cake-goa-flavours",
    title: "Eggless birthday cakes in Goa — flavours that still feel celebratory",
    excerpt:
      "Families often ask for eggless first and worry about taste second. Here is how we approach eggless sponges, pairings that work in Goan heat, and how to plan a kid's cake that adults secretly finish.",
    publishedAt: "2026-05-16",
    readMinutes: 10,
    focusKeyword: "eggless birthday cake Goa",
    keywords: [
      "eggless cake Goa",
      "eggless birthday cake South Goa",
      "custom eggless cake Velim",
      "kids birthday cake Goa",
      "eggless birthday cake Goa",
    ],
    relatedSlugs: [
      "book-custom-cake-goa-whatsapp",
      "wedding-cake-delivery-goa-checklist",
    ],
    blocks: [
      {
        type: "p",
        text: `**Eggless birthday cake Goa** orders are among the most common messages Muskan receives at [${site.name}](/about). Eggless is not a compromise label at our [Velim kitchen](/locations/velim) — it is another way to bake with care. The goal is always the same: a sponge that stays moist, carries flavour well, and supports the design you fell in love with in the [gallery](/creations).`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Whether you need a **kids birthday cake Goa** or a grown-up milestone, lead with the word eggless in your first WhatsApp line so sponges, fillings, and colours are planned together.",
      },
      {
        type: "h2",
        text: "Flavours that feel familiar on a Goan table",
        id: "flavours-goan-table",
      },
      {
        type: "p",
        text: "Belgian chocolate, Alphonso mango when season allows, vanilla bean, coffee mocha, and salted caramel are frequent picks for **eggless cake Goa** — not because they are trendy lists, but because they photograph well and survive a warm room when your party runs long. If grandma prefers something gentler, we steer toward coconut, pineapple, or light strawberry cream.",
      },
      {
        type: "ul",
        items: [
          "Tell us early if eggless is essential for the whole **eggless birthday cake Goa** or just one tier at a wedding — see our [wedding delivery checklist](/blog/wedding-cake-delivery-goa-checklist) for tiered events.",
          "Mention if the party is mostly kids — we adjust sweetness and colours with that in mind.",
          'If adults want a second smaller cake, we can quote a [bento-style design](/creations) alongside the hero cake.',
          "Share your town — [Ponda](/locations/ponda), [Baga](/locations/baga), [Mapusa](/locations/mapusa), and other [delivery areas](/locations) all use the same kitchen with distance-aware timing.",
        ],
      },
      {
        type: "h2",
        text: "Design without fear",
        id: "design-without-fear",
      },
      {
        type: "p",
        text: 'Parents often apologise for "not having a theme yet." Kids change their minds; that is normal. Send a character name, a colour your child keeps pointing at, or a toy photo — Muskan has turned simpler briefs into joyful **kids birthday cake Goa** centrepieces. Watch [reels](/reels) for how characters and buttercream textures look on camera.',
      },
      {
        type: "h3",
        text: "Bento boxes and small gatherings",
      },
      {
        type: "p",
        text: "Not every **eggless birthday cake Goa** needs a three-tier tower. Bento tins suit home parties, office desks, and intimate dinners for two. They still count as a **custom eggless cake Velim** bake — same WhatsApp process, shorter lead time when design is simple.",
      },
      {
        type: "h2",
        text: "How to book your eggless date",
        id: "how-to-book",
      },
      {
        type: "p",
        text: `Read [how to book a custom cake in Goa](/blog/book-custom-cake-goa-whatsapp) for first-message tips, then open the [order guide](/order) for lead times. Most eggless birthdays need ${site.bookAheadDays} ahead; fondant-heavy themes need more. Studio pickup is available — [contact](/contact) lists hours and map links.`,
      },
      {
        type: "related",
        title: "Explore Sweet Bites",
        items: [
          {
            href: "/creations",
            label: "Creations gallery",
            description: "Eggless-friendly designs you can reference by photo",
          },
          {
            href: "/order",
            label: "Book a cake",
            description: "Steps, deposits, and celebration timelines",
          },
          {
            href: "/locations/velim",
            label: "Velim studio",
            description: "Pickup address for South Goa families",
          },
        ],
      },
      {
        type: "p",
        text: `When you are ready, message ${site.phone} on WhatsApp with your date, guest count, and eggless up front. We will reply with flavour ideas for your **eggless birthday cake Goa** — and a timeline that respects how precious a birthday morning feels.`,
      },
    ],
  },
  {
    slug: "kids-birthday-cake-goa-character-themes",
    title: "Kids birthday cakes in Goa — themes, characters & what to send on WhatsApp",
    excerpt:
      "From Spiderman and unicorns to football and Barbie — how Muskan plans a kids birthday cake Goa families actually love, without you needing a perfect Pinterest board.",
    publishedAt: "2026-05-18",
    readMinutes: 12,
    focusKeyword: "kids birthday cake Goa",
    keywords: [
      "kids birthday cake Goa",
      "character cake Goa",
      "Spiderman cake Goa",
      "unicorn cake delivery Goa",
      "custom kids cake Velim",
      "theme birthday cake South Goa",
    ],
    relatedSlugs: [
      "book-custom-cake-goa-whatsapp",
      "eggless-birthday-cake-goa-flavours",
    ],
    heroImage: BLOG_KIDS_HERO_IMAGE,
    heroImageAlt:
      "Spiderman kids birthday cake Goa — custom character cake by Sweet Bites",
    heroGalleryHref: "/creations/spiderman-cake",
    heroGalleryLabel: "Spiderman cake gallery",
    blocks: [
      {
        type: "p",
        text: `Planning a **kids birthday cake Goa** party often starts with a child who wants "that exact cake from the phone" — and a parent wondering if any baker in Goa can actually pull it off. At [${site.name}](/about), Muskan treats character cakes, number toppers, and bright buttercream the same way she treats wedding tiers: real photos, honest timelines, and WhatsApp replies that do not leave you guessing.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "This guide is for parents and relatives ordering a **kids birthday cake Goa** — theme, size, eggless needs, and delivery to your town — before you pay a deposit.",
      },
      {
        type: "h2",
        text: "You do not need a finished theme on day one",
        id: "theme-day-one",
      },
      {
        type: "p",
        text: 'The most helpful first message is not a novel — it is date, child\'s age, guest count, and one anchor: "loves Spiderman," "wants pink unicorn," "obsessed with football." Muskan can suggest sizes and finishes from the [creations gallery](/creations) and [reels](/reels) so you see what is realistic for your budget and lead time.',
      },
      {
        type: "ul",
        items: [
          "Send a screenshot of a cake you like on sweetbites.me — e.g. [Spiderman](/creations/spiderman-cake), [unicorn](/creations/unicorn-cake), or [Barbie](/creations/barbie-cake) designs.",
          "Mention eggless early if needed — see [eggless birthday cake Goa flavours](/blog/eggless-birthday-cake-goa-flavours).",
          "Say your area: [Margao](/locations/margao), [Panaji](/locations/panaji), [Calangute](/locations/calangute), or pickup from [Velim](/locations/velim).",
        ],
      },
      {
        type: "h2",
        text: "Size, servings & the “wow” moment",
        id: "size-servings",
      },
      {
        type: "p",
        text: "A **kids birthday cake Goa** order usually lands between a single-tier buttercream design and a taller fondant character cake. Muskan will ask how many kids and adults are eating, whether you want a number topper, and if cupcakes or a [bento cake](/blog/bento-cake-goa-order-guide) should sit alongside the main cake for classmates or cousins.",
      },
      {
        type: "h3",
        text: "Character cakes vs simpler buttercream",
      },
      {
        type: "p",
        text: `Detailed figurines and sharp fondant take longer than rustic buttercream with a printed theme or sculpted accents. Peak Saturday slots in tourist season fill fast — plan **${site.bookAheadDays}** minimum, longer for complex characters. The [order guide](/order) explains deposits and bake-day photos Muskan sends before delivery.`,
      },
      {
        type: "h2",
        text: "Delivery, heat & party timing",
        id: "delivery-heat",
      },
      {
        type: "p",
        text: "Home parties, society halls, and beach resorts all need different handover windows. Afternoon sun at a poolside venue in [Colva](/locations/colva) or [Baga](/locations/baga) is not the same as an air-conditioned room in [Ponda](/locations/ponda). Share venue photos on WhatsApp the way you would for [wedding cake delivery Goa](/blog/wedding-cake-delivery-goa-checklist) — it changes structure and transport choices.",
      },
      {
        type: "callout",
        variant: "note",
        title: "First time ordering?",
        text: `Read [how to book a custom cake in Goa](/blog/book-custom-cake-goa-whatsapp) for message templates, then message ${site.phone} with your child's age and theme.`,
      },
      {
        type: "h2",
        text: "Ideas when your child changes their mind",
        id: "changing-minds",
      },
      {
        type: "p",
        text: "Last-minute theme swaps happen. If you message early enough, colour palette and topper can shift without restarting the whole **character cake Goa** plan. Muskan keeps the conversation practical — what can change before bake day, what cannot — so you are not surprised on the morning of the party.",
      },
      {
        type: "related",
        title: "Keep planning on sweetbites.me",
        items: [
          {
            href: "/creations?occasion=kids",
            label: "Kids occasion gallery",
            description: "Filter creations for children's birthdays and themes",
          },
          {
            href: "/reels",
            label: "Reels",
            description: "See piping, toppers, and finishes in motion",
          },
          {
            href: "/order",
            label: "How to order",
            description: "Lead times and WhatsApp booking steps",
          },
        ],
      },
      {
        type: "p",
        text: `When you are ready, open WhatsApp to ${site.phone} with date, age, theme, and location. A **kids birthday cake Goa** should feel like joy for your child — and calm for you — and that is what we bake toward.`,
      },
    ],
  },
  {
    slug: "bento-cake-goa-order-guide",
    title: "Bento cakes in Goa — sizes, flavours & how to order the cute tin",
    excerpt:
      "Small, photogenic, perfect for two or a table of six — everything you need to know about ordering a bento cake Goa families request for birthdays, anniversaries, and “just because” surprises.",
    publishedAt: "2026-05-20",
    readMinutes: 11,
    focusKeyword: "bento cake Goa",
    keywords: [
      "bento cake Goa",
      "bento birthday cake Goa",
      "mini cake delivery Goa",
      "custom bento cake Velim",
      "order bento cake WhatsApp",
    ],
    relatedSlugs: [
      "book-custom-cake-goa-whatsapp",
      "kids-birthday-cake-goa-character-themes",
    ],
    heroImage: BLOG_BENTO_HERO_IMAGE,
    heroImageAlt:
      "Decorated bento cake in a tin — bento cake Goa by Sweet Bites, Muskan",
    heroGalleryHref: "/creations/bento-cake",
    heroGalleryLabel: "Bento cake gallery",
    blocks: [
      {
        type: "p",
        text: `A **bento cake Goa** order is the answer when you want something intimate, Instagram-ready, and easier to carry than a three-tier tower. These small tins suit couples, best friends, office desks, and parents who want a second sweet for the kids' table without ordering a second full **custom cake in Goa**. Muskan bakes every bento to order from our [${site.studioCity} kitchen](/locations/velim) — not pulled from a shop counter.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Use this guide when you are comparing a **bento cake Goa** versus a classic round cake — portions, flavours, delivery, and what to write on WhatsApp.",
      },
      {
        type: "h2",
        text: "What is a bento cake (and who is it for)?",
        id: "what-is-bento",
      },
      {
        type: "p",
        text: "Bento cakes are compact, usually single-serving or small-group sizes, decorated in the tin they are served from. In Goa they are popular for anniversaries on the beach, surprise breakfasts, and add-ons beside a larger **kids birthday cake Goa** — see our [kids theme guide](/blog/kids-birthday-cake-goa-character-themes) if you are planning both.",
      },
      {
        type: "ul",
        items: [
          "Ideal for 1–6 people depending on design and sponge height.",
          "Great when you want a photo moment without leftover cake for days.",
          "Works with eggless sponges — mention diet on the first WhatsApp line.",
          "Browse [bento birthday](/creations/bento-birthday-cake) and [bento rainbow](/creations/bento-rainbow-cake) styles in the gallery.",
        ],
      },
      {
        type: "h2",
        text: "Flavours & toppers that survive Goan weather",
        id: "flavours-toppers",
      },
      {
        type: "p",
        text: "Chocolate, vanilla, mango when in season, and coffee-based sponges are common **bento cake Goa** picks because they hold up in warm rooms. Fresh cream toppers and delicate florals may be simplified if your party is outdoors — Muskan will say so honestly when you share the venue on WhatsApp, similar to how we plan [wedding cake delivery Goa](/blog/wedding-cake-delivery-goa-checklist).",
      },
      {
        type: "h3",
        text: "Personalisation without overcomplicating",
      },
      {
        type: "p",
        text: 'Names, ages, short messages, and small fondant accents beat enormous figurines in a tiny tin. Send a colour swatch or a link to a [creation you love](/creations) — "like this bento but blue and gold" is a strong brief.',
      },
      {
        type: "h2",
        text: "Lead time, price & pairing with a main cake",
        id: "lead-time-price",
      },
      {
        type: "p",
        text: `Simple bentos often fit inside ${site.bookAheadDays} lead time; intricate hand-painting needs more notice. Price depends on design, not just tin size — Muskan quotes on WhatsApp after you share date and photos. Many families order a bento plus a larger round cake for guests; one conversation can cover both.`,
      },
      {
        type: "callout",
        variant: "note",
        title: "Booking steps",
        text: `Follow [how to book a custom cake in Goa](/blog/book-custom-cake-goa-whatsapp), then message ${site.phone} with the word bento, your date, and delivery area from our [locations hub](/locations).`,
      },
      {
        type: "h2",
        text: "Delivery across North & South Goa",
        id: "delivery-goa",
      },
      {
        type: "p",
        text: "Bentos travel in secure boxes from Velim to [Vasco](/locations/vasco), [Mapusa](/locations/mapusa), [Candolim](/locations/candolim), and beyond. Short drives help, but we still deliver north on busy weekends — distance and timing are confirmed in your quote, not guessed after payment.",
      },
      {
        type: "related",
        title: "Explore bento & more",
        items: [
          {
            href: "/creations/bento-cake",
            label: "Bento cake creation",
            description: "Reference photos for your WhatsApp order",
          },
          {
            href: "/creations/birthday-bento-cake",
            label: "Birthday bento",
            description: "More birthday tin inspiration",
          },
          {
            href: "/contact",
            label: "Contact & hours",
            description: "Studio pickup by appointment in Velim",
          },
        ],
      },
      {
        type: "p",
        text: `Ready for a small cake with a big smile? Message ${site.phone} — Muskan will help you choose a **bento cake Goa** design that fits your moment, your people, and your date.`,
      },
    ],
  },
  {
    slug: "ready-made-cakes-goa-menu-guide",
    title: "Ready-made cakes in Goa — Sweet Bites menu, flavours & how to order today",
    excerpt:
      "Black Forest, rasmalai, bento, rainbow & more — how to use our printed cakes menu, check same-day availability on WhatsApp, and when a custom creation is still the better fit.",
    publishedAt: "2026-05-22",
    readMinutes: 10,
    focusKeyword: "ready-made cakes Goa",
    keywords: [
      "ready-made cakes Goa",
      "readymade cake Goa",
      "Sweet Bites cake menu",
      "cake flavours Goa WhatsApp",
      "bento cake ready-made",
      "Velim bakery menu",
    ],
    relatedSlugs: [
      "book-custom-cake-goa-whatsapp",
      "bento-cake-goa-order-guide",
    ],
    heroImage: BLOG_CAKES_MENU_HERO_IMAGE,
    heroImageAlt:
      "Rasmalai ready-made cake Goa — premium flavour on Sweet Bites menu",
    heroGalleryHref: "/cakes-menu",
    heroGalleryLabel: "View full cakes menu",
    blocks: [
      {
        type: "p",
        text: `Not every celebration needs a three-week fondant brief. Many families in Goa want a trusted **ready-made cakes Goa** option — a flavour from our printed board, a quick WhatsApp yes on availability, and pickup or delivery from Muskan's kitchen in [${site.studioCity}](/locations/velim). This guide explains our [/cakes-menu](/cakes-menu) page, how it differs from the [creations gallery](/creations), and what to message on ${site.phone}.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Use this article when you are comparing **ready-made cakes Goa** versus a full custom design — speed, flavour list, and honest limits on decoration.",
      },
      {
        type: "h2",
        text: "What is on the Sweet Bites cakes menu?",
        id: "what-on-menu",
      },
      {
        type: "p",
        text: "Our menu board groups flavours into Regular, Fruit, Premium, and Special — from Chocolate Chip and Black Forest to Rasmalai, Rainbow, Bento, and Dream cakes. The online [/cakes-menu](/cakes-menu) mirrors that board: tap any flavour and WhatsApp opens with the name filled in.",
      },
      {
        type: "ul",
        items: [
          "**Regular:** everyday favourites — mud cake, red velvet, oreo, and more.",
          "**Fruit:** strawberry, mango, blueberry — ask what is in season.",
          "**Premium:** Ferrero, Kitkat, rasmalai, rabdi, rainbow — see our [rasmalai case study](/case-studies/rasmalai-cake-goa-case-study) for custom scale.",
          "**Special:** bento and dream formats — pair with our [bento guide](/blog/bento-cake-goa-order-guide) if you want a tiny tin plus a round cake.",
        ],
      },
      {
        type: "h2",
        text: "Ready-made vs custom — which should you choose?",
        id: "ready-vs-custom",
      },
      {
        type: "p",
        text: "Choose **ready-made cakes Goa** when you need a known flavour fast, decorations are simple, and your date is soon. Choose [custom cake in Goa](/blog/book-custom-cake-goa-whatsapp) when you need theme sculpts, wedding scale, or a character cake like [Spiderman](/creations/spiderman-cake) — those use longer lead times and different pricing.",
      },
      {
        type: "h3",
        text: "Same-day and next-day reality",
      },
      {
        type: "p",
        text: "Muskan confirms oven space per day on WhatsApp — we do not promise every menu flavour every afternoon. Sending your flavour, size, and [delivery town](/locations) early in the morning helps. Weekend slots fill faster in tourist season.",
      },
      {
        type: "h2",
        text: "How to order from the menu (message template)",
        id: "how-to-order",
      },
      {
        type: "ul",
        items: [
          "Open [/cakes-menu](/cakes-menu) and tap **Order** on your flavour.",
          "Add preferred date, pickup or delivery area, and servings if you know them.",
          "Mention eggless if needed — see [eggless birthday flavours](/blog/eggless-birthday-cake-goa-flavours).",
          "Wait for Muskan's reply with price and today's bake capacity.",
        ],
      },
      {
        type: "callout",
        variant: "note",
        title: "Studio pickup",
        text: `Pickup is by appointment at our [Velim studio](/locations/velim). Delivery covers North and South Goa towns listed on our [locations hub](/locations).`,
      },
      {
        type: "h2",
        text: "When the menu flavour is a starting point only",
        id: "starting-point",
      },
      {
        type: "p",
        text: 'Many premium menu names link to similar [creations](/creations) — "like your rasmalai cake but with gold writing for engagement" is a strong brief. Browse photos, then message with the menu flavour plus your event type.',
      },
      {
        type: "related",
        title: "Keep exploring",
        items: [
          { href: "/cakes-menu", label: "Cakes menu", description: "All flavours with WhatsApp order" },
          { href: "/creations", label: "Custom gallery", description: "160+ designs for bigger briefs" },
          { href: "/order", label: "How to book", description: "Deposits and lead times" },
        ],
      },
      {
        type: "p",
        text: `Hungry for a flavour on the board? Message ${site.phone} — Muskan will tell you what is baking today and whether your **ready-made cakes Goa** order fits pickup or delivery.`,
      },
    ],
  },
  {
    slug: "haldi-cake-goa-tradition-guide",
    title: "Haldi cakes in Goa — colours, timing & what to send Muskan on WhatsApp",
    excerpt:
      "Yellow marigold vibes without a melting mess — how families order a haldi cake Goa guests actually photograph, from home ceremonies to resort lawns.",
    publishedAt: "2026-05-25",
    readMinutes: 12,
    focusKeyword: "haldi cake Goa",
    keywords: [
      "haldi cake Goa",
      "haldi ceremony cake",
      "yellow wedding cake Goa",
      "Indian wedding cake Muskan",
      "marigold cake Goa",
      "pre-wedding cake delivery Goa",
    ],
    relatedSlugs: [
      "wedding-cake-delivery-goa-checklist",
      "book-custom-cake-goa-whatsapp",
    ],
    heroImage: BLOG_HALDI_HERO_IMAGE,
    heroImageAlt:
      "Haldi design cake Goa — yellow marigold-style celebration cake by Sweet Bites",
    heroGalleryHref: "/creations/haldi-design-cake",
    heroGalleryLabel: "Haldi cake gallery",
    blocks: [
      {
        type: "p",
        text: `A **haldi cake Goa** families love is bright on camera, gentle on the stomach after a long ceremony, and realistic about turmeric fingers near fondant. At [${site.name}](/about), Muskan designs [haldi cakes](/creations/haldi-design-cake) for home functions in [Ponda](/locations/ponda), poolside haldis in [Candolim](/locations/candolim), and society lawns in [Margao](/locations/margao) — with the same delivery discipline we use for [wedding cakes](/blog/wedding-cake-delivery-goa-checklist).`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "This guide is for hosts ordering a **haldi cake Goa** — palette, timing, eggless needs, and venue photos — before you lock your ceremony date.",
      },
      {
        type: "h2",
        text: "What makes a haldi cake different from a birthday cake?",
        id: "different-from-birthday",
      },
      {
        type: "p",
        text: "Haldi ceremonies favour marigold yellow, gold accents, floral piping, and sometimes minimal writing in English or Devanagari. The cake often appears mid-morning or early afternoon — warmer than evening weddings — so buttercream stability matters more than on a **kids birthday cake Goa** timeline.",
      },
      {
        type: "ul",
        items: [
          "Send venue photos: shaded veranda vs open lawn changes our advice.",
          "Mention if turmeric games happen beside the cake table.",
          "Share guest count — haldis range from 30 at home to 150 at resorts.",
          "Browse [/creations/haldi-design-cake](/creations/haldi-design-cake) and our [wedding cake case study](/case-studies/wedding-cake-goa-case-study) for scale references.",
        ],
      },
      {
        type: "h2",
        text: "Flavours that pair with haldi menus",
        id: "flavours",
      },
      {
        type: "p",
        text: "Mango when in season, cardamom-vanilla, pistachio, and light chocolate are popular **haldi cake Goa** choices — they survive warm rooms better than pure white chocolate ganache outdoors. Eggless sponges are common for mixed families; flag that on line one of WhatsApp.",
      },
      {
        type: "h3",
        text: "Matching your wedding cake later",
      },
      {
        type: "p",
        text: "Many couples order a simpler haldi design, then a taller white tier cake for the reception. One WhatsApp thread can cover both dates if you message early — Muskan will separate quotes and bake schedules clearly.",
      },
      {
        type: "h2",
        text: "Lead time, delivery & the turmeric problem",
        id: "lead-time-delivery",
      },
      {
        type: "p",
        text: `Plan at least ${site.bookAheadDays} for buttercream haldis with fresh florals; fondant-heavy designs need longer. Delivery timing should avoid leaving the cake in direct sun while guests arrive — we ask for a shaded table photo the day before, similar to our [wedding delivery checklist](/blog/wedding-cake-delivery-goa-checklist).`,
      },
      {
        type: "callout",
        variant: "note",
        title: "Booking steps",
        text: `Read [how to book a custom cake in Goa](/blog/book-custom-cake-goa-whatsapp), then message ${site.phone} with haldi date, venue town, and a link to a creation you like.`,
      },
      {
        type: "h2",
        text: "Pairing with ready-made menu cakes",
        id: "pairing-menu",
      },
      {
        type: "p",
        text: "Some families add a [ready-made flavour](/cakes-menu) for an after-party at home while the main haldi cake is custom. Tell Muskan both needs in one message so oven space is planned once.",
      },
      {
        type: "related",
        title: "Explore on sweetbites.me",
        items: [
          { href: "/creations/haldi-design-cake", label: "Haldi design cake", description: "Reference photos for WhatsApp" },
          { href: "/creations/wedding-cake", label: "Wedding cakes", description: "Reception tier inspiration" },
          { href: "/contact", label: "Contact", description: "Studio hours & map" },
        ],
      },
      {
        type: "p",
        text: `Ready for marigold yellow on your table? Message ${site.phone} with date, venue photos, and guest count — Muskan will guide your **haldi cake Goa** from brief to handover.`,
      },
    ],
  },
  {
    slug: "last-minute-birthday-cake-goa-guide",
    title: "Last-minute birthday cake in Goa — same-week orders that actually work",
    excerpt:
      "Forgot to book? Party moved forward? How to ask Muskan honestly for a last-minute birthday cake Goa families still love — menu flavours, bentos, delivery towns, and what cannot be rushed.",
    publishedAt: "2026-05-26",
    readMinutes: 11,
    focusKeyword: "last-minute birthday cake Goa",
    keywords: [
      "last-minute birthday cake Goa",
      "same-day cake Goa",
      "urgent cake delivery Goa",
      "birthday cake tomorrow Goa",
      "quick cake order WhatsApp Goa",
      "Velim bakery same week",
    ],
    relatedSlugs: [
      "ready-made-cakes-goa-menu-guide",
      "bento-cake-goa-order-guide",
      "book-custom-cake-goa-whatsapp",
    ],
    heroImage: BLOG_LAST_MINUTE_HERO_IMAGE,
    heroImageAlt:
      "Bento birthday cake Goa — last-minute celebration cake by Sweet Bites, order on WhatsApp",
    heroGalleryHref: "/creations/bento-birthday-cake",
    heroGalleryLabel: "Bento birthday cake",
    blocks: [
      {
        type: "p",
        text: `If you are reading this the night before a party — or the morning of — you are not the first family searching for a **last-minute birthday cake Goa** baker who will reply honestly instead of over-promising. At [${site.name}](/about), Muskan would rather say "here is what we can bake today" than deliver a rushed fondant sculpture that collapses in Goan heat. This guide covers what fits a tight timeline, what needs more days, and exactly what to send on WhatsApp at ${site.phone}.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Use this article when you need a **last-minute birthday cake Goa** — same-week, tomorrow, or even today — and want realistic options before you message Muskan.",
      },
      {
        type: "h2",
        text: "What can Muskan usually do on short notice?",
        id: "what-fits-short-notice",
      },
      {
        type: "p",
        text: "Short-notice orders work best when the design is simple and the flavour comes from our [ready-made cakes menu](/cakes-menu). Buttercream writing, fresh fruit, classic sponges, and [bento tins](/blog/bento-cake-goa-order-guide) are the sweet spot for a **same-day cake Goa** ask — not three-tier fondant characters.",
      },
      {
        type: "ul",
        items: [
          "**Menu flavours:** Black Forest, chocolate, red velvet, mango (in season) — tap Order on [/cakes-menu](/cakes-menu) and add your date.",
          "**Bento birthdays:** Small tins for home parties — see our [bento birthday cake](/creations/bento-birthday-cake) in the gallery.",
          "**Simple custom:** One-tier buttercream, a name, a colour theme — often doable within 2–4 days if the oven has space.",
          "**Eggless:** Possible on short notice — say eggless in line one; read [eggless birthday flavours](/blog/eggless-birthday-cake-goa-flavours) for pairings.",
        ],
      },
      {
        type: "h2",
        text: "What needs more lead time (even if you beg nicely)",
        id: "needs-more-time",
      },
      {
        type: "p",
        text: "Some designs cannot be compressed without hurting quality. Muskan will tell you straight — that honesty saves a birthday meltdown at pickup time.",
      },
      {
        type: "ul",
        items: [
          `Sculpted characters and heavy fondant — see our [kids birthday cake guide](/blog/kids-birthday-cake-goa-character-themes); plan ${site.bookAheadDays} when possible.`,
          "Multi-tier wedding-scale cakes — use the [wedding delivery checklist](/blog/wedding-cake-delivery-goa-checklist) instead.",
          "Fresh sugar flowers or complex hand-piped scenes — drying time is non-negotiable in humid Goa.",
          "Peak Saturday evenings in tourist season — message early morning for the best chance.",
        ],
      },
      {
        type: "h3",
        text: "The honest WhatsApp message",
      },
      {
        type: "p",
        text: 'Start with: "Birthday tomorrow / this weekend — is anything simple possible?" Add guest count, eggless yes/no, pickup in [Velim](/locations/velim) or delivery town ([Margao](/locations/margao), [Panaji](/locations/panaji), [Calangute](/locations/calangute), etc.). Attach one gallery photo only if you want a similar vibe — not ten Pinterest boards.',
      },
      {
        type: "h2",
        text: "Pickup vs delivery on a rush order",
        id: "pickup-vs-delivery",
      },
      {
        type: "p",
        text: "Studio pickup from Ubdando is often fastest — you control timing and avoid traffic surprises. Delivery is still possible for a **last-minute birthday cake Goa** order when Muskan confirms driver availability and distance from our kitchen. Check your town on the [locations hub](/locations); fees are quoted before you pay.",
      },
      {
        type: "callout",
        variant: "note",
        title: "Studio hours",
        text: `We are open ${site.hours} (closed Mondays). You can WhatsApp any day — replies during studio hours. [Contact](/contact) has map, template message, and visit tips.`,
      },
      {
        type: "h2",
        text: "Three paths that save the party",
        id: "three-paths",
      },
      {
        type: "p",
        text: "When the clock is tight, pick one path and commit — switching from custom to menu mid-thread slows everyone down.",
      },
      {
        type: "ul",
        items: [
          "**Path 1 — Menu flavour:** Fastest. Choose from [/cakes-menu](/cakes-menu), message date + town, confirm price on WhatsApp.",
          "**Path 2 — Bento surprise:** Perfect for partners, office desks, or kids after school — smaller bake, quicker turnaround.",
          "**Path 3 — Gallery-inspired simple custom:** Send one [creations](/creations) link like [golden cream birthday](/creations/golden-cream-birthday-cake) and ask for a simplified version.",
        ],
      },
      {
        type: "h2",
        text: "After the panic — plan the next birthday properly",
        id: "plan-next-time",
      },
      {
        type: "p",
        text: `Once this party is saved, bookmark [how to book a custom cake in Goa](/blog/book-custom-cake-goa-whatsapp) and message ${site.bookAheadDays} ahead next time. Character cakes, wedding-adjacent designs, and resort deliveries all breathe easier with a calendar, not a countdown.`,
      },
      {
        type: "related",
        title: "Keep exploring",
        items: [
          { href: "/cakes-menu", label: "Cakes menu", description: "Flavours with one-tap WhatsApp order" },
          { href: "/creations/bento-birthday-cake", label: "Bento birthday cake", description: "Small tin inspiration" },
          { href: "/contact", label: "Contact", description: "WhatsApp template & studio map" },
        ],
      },
      {
        type: "p",
        text: `Need a cake sooner than you thought? Message ${site.phone} now with your date, town, and how many you are feeding — Muskan will tell you what is realistically possible for your **last-minute birthday cake Goa** without the stress.`,
      },
    ],
  },
  {
    slug: "engagement-cake-goa-proposal-guide",
    title: "Engagement cakes in Goa — proposal nights, ring reveals & designs that photograph like love",
    excerpt:
      "Beach dinner, villa surprise, or family lunch — how to plan an engagement cake Goa guests will talk about: flavours, size, secrecy on WhatsApp, delivery to Candolim, Panaji & beyond, and pairing with your wedding cake later.",
    publishedAt: "2026-07-05",
    readMinutes: 13,
    focusKeyword: "engagement cake Goa",
    keywords: [
      "engagement cake Goa",
      "proposal cake Goa",
      "ring reveal cake Goa",
      "romantic cake delivery Goa",
      "anniversary engagement cake Muskan",
      "beach proposal cake Candolim",
      "custom engagement cake Velim",
    ],
    relatedSlugs: [
      "wedding-cake-delivery-goa-checklist",
      "haldi-cake-goa-tradition-guide",
      "book-custom-cake-goa-whatsapp",
    ],
    heroImage: BLOG_ENGAGEMENT_HERO_IMAGE,
    heroImageAlt:
      "Engagement peach cream cake Goa — romantic celebration cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/anniversary-peach-cream-cake",
    heroGalleryLabel: "Peach cream engagement style",
    blocks: [
      {
        type: "p",
        text: `An **engagement cake Goa** moment is rarely loud — it is a held breath: candles on a terrace in [Panaji](/locations/panaji), a ring box beside dessert in [Candolim](/locations/candolim), or both families meeting for the first time over something beautiful on the table. At [${site.name}](/about), Muskan designs engagement and proposal cakes that feel intimate, photograph cleanly in golden hour, and still survive Goan warmth. This guide is for couples (and the friend planning the surprise) who want clarity before WhatsApp — not Pinterest panic.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword · read this first",
        text: "Searching **engagement cake Goa** or **proposal cake Goa**? Send your date, venue town, guest count, and whether the ring moment is secret — Muskan plans delivery and design around surprise, not just aesthetics.",
      },
      {
        type: "h2",
        text: "Proposal cake vs engagement party cake — two different stories",
        id: "proposal-vs-party",
      },
      {
        type: "p",
        text: "A **proposal cake Goa** dinner for two might be a [bento tin](/blog/bento-cake-goa-order-guide) with initials, a single heart tier, or a small [cream heart design](/creations/cream-heart-cake) — subtle enough that the ring stays the star. An engagement party for thirty needs height, portions, and a palette that matches sarees, florals, or your villa decor.",
      },
      {
        type: "ul",
        items: [
          "**Just the two of you:** bento, 6-inch heart, or peach-cream like our [anniversary peach cream](/creations/anniversary-peach-cream-cake) gallery cake.",
          "**Family lunch (15–40 guests):** one-tier or two-tier buttercream — gold dust, fresh florals, minimal writing.",
          "**Beach / pool venue:** lighter colours, stable buttercream, delivery timed before sunset glare — see [wedding delivery tips](/blog/wedding-cake-delivery-goa-checklist) for heat logic.",
          "**After haldi, before wedding:** pair with our [haldi cake guide](/blog/haldi-cake-goa-tradition-guide) so colours do not clash across events.",
        ],
      },
      {
        type: "h2",
        text: "Design ideas that look expensive but bake reliably",
        id: "design-ideas",
      },
      {
        type: "p",
        text: "Muskan's engagement portfolio leans romantic, not cluttered: blush and gold, fresh roses, pearl dots, delicate piping, and short phrases — names, date, or a single line in English or Devanagari. Avoid tiny fondant figurines on outdoor nights; buttercream and fresh flowers forgive humidity better.",
      },
      {
        type: "h3",
        text: "Flavours couples actually reorder",
      },
      {
        type: "ul",
        items: [
          "**Peach cream & vanilla-cardamom** — soft, camera-friendly, pairs with Indian sweets on the side.",
          "**Belgian chocolate + raspberry** — classic proposal dinner energy.",
          "**Mango Alphonso (in season)** — very Goa; ask what is ripe that week.",
          "**Eggless sponges** — common for mixed families; flag on line one of WhatsApp.",
        ],
      },
      {
        type: "callout",
        variant: "note",
        title: "Keep the secret",
        text: `Planning a surprise? Message Muskan from a friend's number or say "proposal — do not call the partner." She coordinates delivery to restaurant staff, villa hosts, or [Calangute](/locations/calangute) / [Margao](/locations/margao) venues without spoiling the moment.`,
      },
      {
        type: "h2",
        text: "Timeline: when to book Muskan",
        id: "timeline",
      },
      {
        type: "p",
        text: `Simple **engagement cake Goa** designs often fit ${site.bookAheadDays}. Fresh florals, gold-leaf detail, or matching a complex Pinterest board needs longer — especially December–February wedding season. If you also need a [wedding cake](/creations/wedding-cake), start one WhatsApp thread for both dates; Muskan separates quotes and bake schedules clearly.`,
      },
      {
        type: "ul",
        items: [
          "2+ weeks: two-tier, fresh flowers, custom topper, delivery to beach resort.",
          "1 week: single-tier hearts, buttercream roses, studio pickup in [Velim](/locations/velim).",
          "Rush: ask honestly — bento or menu-style round cake may be possible; see [last-minute birthday guide](/blog/last-minute-birthday-cake-goa-guide) for rush etiquette (same kitchen rules).",
        ],
      },
      {
        type: "h2",
        text: "What to send on WhatsApp (copy-friendly brief)",
        id: "whatsapp-brief",
      },
      {
        type: "ul",
        items: [
          "Date + time dessert is served (not just dinner start).",
          "Venue town + indoor/outdoor + photo of table if you have it.",
          "Guest count and whether the ring moment is a surprise.",
          "Link to a [creations](/creations) photo you love — or our [/anniversary-cakes-goa](/anniversary-cakes-goa) occasion guide.",
          "Eggless, nut-free, or alcohol in venue — mention early.",
        ],
      },
      {
        type: "p",
        text: `Full booking steps live in [how to book a custom cake in Goa](/blog/book-custom-cake-goa-whatsapp). Use the [contact template](/contact) if you prefer a structured first message.`,
      },
      {
        type: "h2",
        text: "Delivery across Goa — without melting the moment",
        id: "delivery",
      },
      {
        type: "p",
        text: "Engagement dinners run late; Muskan schedules handover so buttercream is not sitting in a hot car during traffic. Pickup from Ubdando works for self-managed surprises. Delivery covers North and South Goa — fee confirmed before payment on WhatsApp, same as every [custom cake in Goa](/blog/book-custom-cake-goa-whatsapp) order.",
      },
      {
        type: "h2",
        text: "Budget: what moves the quote",
        id: "budget",
      },
      {
        type: "p",
        text: "Size and servings matter more than the word engagement. A bento surprise and a two-tier party cake are different projects. Gold dust, fresh florals, delivery distance, and eggless sponges each line-item in Muskan's reply — no hidden total at pickup. Homepage [guide prices](/order) are starting points; your quote is personal.",
      },
      {
        type: "related",
        title: "Plan your celebration",
        items: [
          { href: "/anniversary-cakes-goa", label: "Anniversary cakes Goa", description: "Romantic guides & gallery picks" },
          { href: "/creations/anniversary-peach-cream-cake", label: "Peach cream cake", description: "Engagement-style reference photo" },
          { href: "/wedding-cakes-goa", label: "Wedding cakes Goa", description: "Book the big day next" },
          { href: "/contact", label: "Contact Muskan", description: "WhatsApp template & studio map" },
        ],
      },
      {
        type: "p",
        text: `Ready to make the table part of the story? Message ${site.phone} with your date, town, and whether it is a secret — Muskan will help you choose an **engagement cake Goa** that feels as intentional as the yes.`,
      },
    ],
  },
  {
    slug: "chocolate-cake-goa-ultimate-guide",
    title: "Chocolate cake in Goa — 13 styles, honest flavour talk & how to pick the one your guests won't stop eating",
    excerpt:
      "Mud cake or mousse? Ganache drip or buttercream swirl? Belgian dark or milk chocolate sponge? The only chocolate cake Goa guide that tells you what actually works in heat, which designs travel safely, and how to order on WhatsApp from a real baker who doesn't hide behind stock photos.",
    publishedAt: "2026-07-10",
    readMinutes: 14,
    focusKeyword: "chocolate cake Goa",
    keywords: [
      "chocolate cake Goa",
      "chocolate cake delivery Goa",
      "chocolate birthday cake Goa",
      "chocolate cake order WhatsApp",
      "best chocolate cake Velim",
      "chocolate drip cake Goa",
      "custom chocolate cake Muskan",
      "chocolate sphere cake Goa",
      "Ferrero cake Goa",
      "chocolate cake price Goa",
    ],
    relatedSlugs: [
      "ready-made-cakes-goa-menu-guide",
      "book-custom-cake-goa-whatsapp",
      "eggless-birthday-cake-goa-flavours",
    ],
    heroImage: BLOG_CHOCOLATE_HERO_IMAGE,
    heroImageAlt:
      "Chocolate special cake Goa — Belgian chocolate drip cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/chocolate-special-cake",
    heroGalleryLabel: "Chocolate special cake",
    blocks: [
      {
        type: "p",
        text: `"Just chocolate" is never just chocolate. Every week, Muskan receives messages saying exactly that — and within three WhatsApp replies the order becomes specific: dark ganache with a drip, eggless chocolate sponge with coffee buttercream, a [chocolate sphere](/creations/chocolate-sphere-cake) you crack open at the table, or a [Ferrero-topped showpiece](/case-studies/ferrero-cake-goa-case-study) for an anniversary. This guide breaks down every **chocolate cake Goa** style Muskan bakes at [${site.name}](/about), so you can skip the vague "chocolate flavour please" message and send something that gets you an accurate quote faster.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Use this guide when searching **chocolate cake Goa**, **chocolate cake delivery Goa**, or **chocolate birthday cake Goa** — it covers styles, flavour combinations, eggless options, realistic pricing, and how to order on WhatsApp.",
      },
      {
        type: "h2",
        text: "The chocolate family tree at Sweet Bites",
        id: "styles",
      },
      {
        type: "p",
        text: "Not all chocolate cakes come from the same recipe. Here is what Muskan actually bakes — and what each style is best for.",
      },
      {
        type: "ul",
        items: [
          "**[Chocolate Cake](/creations/chocolate-cake)** — the starting point. Rich sponge, chocolate buttercream, clean finish. Works for any guest count and any occasion. This is the **chocolate cake Goa** families default to when they want zero risk and maximum satisfaction.",
          "**[Chocolate Special Cake](/creations/chocolate-special-cake)** — elevated with Belgian couverture, layered ganache, and finishing details that photograph like a magazine. The hero image above is this cake.",
          "**[Chocolate Heart Birthday](/creations/chocolate-heart-birthday-cake)** — heart-shaped, romantic, great for couples and small parties.",
          "**[Chocolate Sphere](/creations/chocolate-sphere-cake)** — the crowd-stopper. A hollow chocolate shell you crack open to reveal the cake inside. See our [sphere case study](/case-studies/chocolate-sphere-cake-goa-case-study) for how it travels.",
          "**[Chocolate Sponge Cake](/creations/chocolate-sponge-cake)** — lighter, airier crumb for guests who prefer softness over density.",
          "**[Chocolate Syrup Cream](/creations/chocolate-syrup-cream-cake)** — drizzled chocolate syrup over cream frosting. Looks indulgent, tastes less heavy than ganache.",
          "**[Chocolate Bar Cake](/creations/chocolate-bar-cake)** — loaded with KitKat, Dairy Milk, or Oreo bars around the sides. A favourite for teen birthdays.",
          "**[Chocolate Tin Cake](/creations/chocolate-tin-cake)** — bento-format. Tiny, personal, [perfect for surprises](/blog/bento-cake-goa-order-guide).",
          "**[Chocolate Tin Anniversary](/creations/chocolate-tin-anniversary-cake)** — same tin magic, anniversary palette.",
          "**[Chocolate White Cream](/creations/chocolate-white-cream-cake)** — dual-tone: white cream exterior with hidden chocolate layers inside.",
          "**[Chocolate Slice Cake](/creations/chocolate-slice-cake)** — pre-portioned, great for office parties and box events.",
          "**[Blue Chocolate Bar Cake](/creations/blue-chocolate-bar-cake)** — colour-themed chocolate for themed parties that still want chocolate flavour.",
          "**[Cream Chocolate Birthday](/creations/cream-chocolate-birthday-cake)** — cream-first with chocolate accents. Lighter look, still chocolate soul.",
        ],
      },
      {
        type: "h2",
        text: "Which chocolate style suits your occasion?",
        id: "occasion-match",
      },
      {
        type: "p",
        text: "The right **chocolate cake delivery Goa** order starts with context, not just flavour. Here is how Muskan matches style to moment.",
      },
      {
        type: "ul",
        items: [
          "**Kids birthday:** [Chocolate Bar Cake](/creations/chocolate-bar-cake) or [Blue Chocolate](/creations/blue-chocolate-bar-cake) — visual excitement, bar toppings, theme colours. See also our [kids birthday cake guide](/blog/kids-birthday-cake-goa-character-themes).",
          "**Romantic dinner / proposal:** [Chocolate Heart](/creations/chocolate-heart-birthday-cake) or [Chocolate Tin Anniversary](/creations/chocolate-tin-anniversary-cake). Pair with our [engagement cake guide](/blog/engagement-cake-goa-proposal-guide).",
          "**Family milestone (50th, retirement):** [Chocolate Special](/creations/chocolate-special-cake) — the sophistication guests expect. Similar vibe to our [golden cream case study](/case-studies/golden-cream-cake-goa-case-study).",
          "**Office celebration:** [Chocolate Slice](/creations/chocolate-slice-cake) or a classic [Chocolate Cake](/creations/chocolate-cake) — easy to portion, no fuss.",
          '**"Wow" moment at a party:** [Chocolate Sphere](/creations/chocolate-sphere-cake) — crack it live, film it. See [the case study](/case-studies/chocolate-sphere-cake-goa-case-study).',
          "**Last-minute surprise:** [Chocolate Tin](/creations/chocolate-tin-cake) bento — often doable within 2–4 days. Read [last-minute guide](/blog/last-minute-birthday-cake-goa-guide).",
        ],
      },
      {
        type: "h2",
        text: "Eggless chocolate — the honest version",
        id: "eggless",
      },
      {
        type: "p",
        text: `Many families search **chocolate cake Goa** with eggless as a silent requirement they forget to mention until payment. Mention it on line one — Muskan adjusts sponge recipe, filling density, and sometimes colour intensity. Belgian chocolate stays the same; what changes is binding and moisture. Our [eggless birthday cake guide](/blog/eggless-birthday-cake-goa-flavours) covers how flavours shift. The short answer: eggless chocolate is one of our strongest categories because the cocoa itself carries so much flavour that nobody feels like they are "settling."`,
      },
      {
        type: "h2",
        text: "Chocolate + what? Flavour pairings Muskan recommends",
        id: "flavour-pairings",
      },
      {
        type: "p",
        text: "Pure chocolate is perfect — and sometimes a pairing elevates it. These are the ones that genuinely work in Goan conditions.",
      },
      {
        type: "ul",
        items: [
          "**Chocolate + coffee:** mocha sponge, subtle bitterness that adults love.",
          "**Chocolate + salted caramel:** sweet-salt tension. Ask for the drip to be visible on the exterior.",
          "**Chocolate + raspberry:** European classic. Fresh berry compote between layers; ask what is seasonal.",
          "**Chocolate + Ferrero / hazelnut:** premium finish; see our [Ferrero case study](/case-studies/ferrero-cake-goa-case-study).",
          "**Chocolate + mango (in season):** sounds odd, works beautifully with white chocolate mousse in between.",
          "**Chocolate + peanut butter:** niche but requested. Works best in cooler months; Muskan will say if conditions suit.",
        ],
      },
      {
        type: "h2",
        text: "How chocolate cakes survive Goan heat",
        id: "heat-survival",
      },
      {
        type: "p",
        text: "This is where most bakeries fail and Muskan does not bluff. Dark ganache sets firmer than white — better for outdoor venues. Buttercream chocolate cakes need shade or AC; pure fondant-over-chocolate feels heavy in humidity. Muskan adjusts cocoa butter ratios, delivery timing, and even cake stand placement advice based on your venue. If you are hosting at a beach or poolside, see our [wedding delivery checklist](/blog/wedding-cake-delivery-goa-checklist) — the heat logic is identical.",
      },
      {
        type: "callout",
        variant: "note",
        title: "Delivery across Goa",
        text: `Chocolate cakes from our [${site.studioCity} kitchen](/locations/velim) travel in chilled upright boxes. Delivery covers [Panaji](/locations/panaji), [Margao](/locations/margao), [Calangute](/locations/calangute), [Mapusa](/locations/mapusa), [Vasco](/locations/vasco), [Candolim](/locations/candolim), and more — fee is confirmed on WhatsApp before you pay.`,
      },
      {
        type: "h2",
        text: "Pricing: what moves a chocolate cake quote",
        id: "pricing",
      },
      {
        type: "p",
        text: "A classic [Chocolate Cake](/creations/chocolate-cake) starts at the same guide prices as any sponge on our [/order](/order) page. What raises the quote: Belgian couverture (vs compound chocolate), sphere construction, fresh fruit fillings, bar-loaded exteriors, delivery distance, and eggless adjustments. Muskan itemises everything on WhatsApp — no mystery total at pickup.",
      },
      {
        type: "ul",
        items: [
          "**6-inch round:** from ₹1,200 — perfect for home dinners, 6–8 guests.",
          "**8-inch round:** from ₹1,800 — birthday parties, 10–14 guests.",
          "**10-inch or custom tier:** from ₹2,500 — milestone events, 18–25+ guests.",
          "**Bento tin:** ask for quote — smaller format, higher per-gram design cost.",
          "**Sphere:** structural + mould work priced separately. [Sphere case study](/case-studies/chocolate-sphere-cake-goa-case-study) has details.",
        ],
      },
      {
        type: "h2",
        text: "How to order your chocolate cake on WhatsApp",
        id: "how-to-order",
      },
      {
        type: "p",
        text: `Open WhatsApp to ${site.phone} and include: date, guest count, occasion, eggless yes/no, delivery town or pickup, and a link to one of the 13 chocolate creations above. Full steps live in [how to book a custom cake in Goa](/blog/book-custom-cake-goa-whatsapp). For menu-board flavours, tap Order on [/cakes-menu](/cakes-menu).`,
      },
      {
        type: "h3",
        text: "From the ready-made menu vs custom",
      },
      {
        type: "p",
        text: "Our [ready-made cakes menu](/blog/ready-made-cakes-goa-menu-guide) includes chocolate mud, chocolate truffle, and oreo chocolate. These are faster than fully custom designs. If you want a gallery-level [Chocolate Special](/creations/chocolate-special-cake) or a [sphere reveal](/creations/chocolate-sphere-cake), that is custom territory — plan ${site.bookAheadDays} ahead.",
      },
      {
        type: "related",
        title: "Explore chocolate at Sweet Bites",
        items: [
          { href: "/creations/chocolate-special-cake", label: "Chocolate Special", description: "Belgian couverture flagship" },
          { href: "/creations/chocolate-sphere-cake", label: "Chocolate Sphere", description: "Crack-open showstopper" },
          { href: "/case-studies/ferrero-cake-goa-case-study", label: "Ferrero case study", description: "Hazelnut + gold leaf story" },
          { href: "/cakes-menu", label: "Cakes menu", description: "Ready-made chocolate flavours" },
        ],
      },
      {
        type: "p",
        text: `Every **chocolate cake Goa** order starts with one honest message. Send your date, guest count, and a gallery link to ${site.phone} — Muskan will reply with flavour ideas, eggless adjustments, and a quote you can hold her to. No surprises except the good kind.`,
      },
    ],
  },
  {
    slug: "anniversary-cake-goa-complete-guide",
    title: "Anniversary cakes in Goa — years, flavours, romantic designs & how to surprise without Pinterest stress",
    excerpt:
      "First anniversary or golden fifty — how to choose an anniversary cake Goa couples actually finish: heart tiers, peach cream, photo toppers, eggless for family lunch, delivery to Panaji villas & Candolim terraces, and WhatsApp quotes Muskan explains line by line.",
    publishedAt: "2026-07-14",
    readMinutes: 13,
    focusKeyword: "anniversary cake Goa",
    keywords: [
      "anniversary cake Goa",
      "anniversary cake delivery Goa",
      "romantic cake Goa",
      "heart anniversary cake",
      "peach cream anniversary cake",
      "eggless anniversary cake Goa",
      "custom anniversary cake Muskan",
      "anniversary cake price Goa",
    ],
    relatedSlugs: [
      "engagement-cake-goa-proposal-guide",
      "chocolate-cake-goa-ultimate-guide",
      "book-custom-cake-goa-whatsapp",
    ],
    heroImage: BLOG_ANNIVERSARY_HERO_IMAGE,
    heroImageAlt:
      "Anniversary cake Goa — romantic celebration cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/anniversary-cake",
    heroGalleryLabel: "Anniversary cake gallery",
    blocks: [
      {
        type: "p",
        text: `An **anniversary cake Goa** order is rarely about sugar alone — it is about saying "I still choose you" in front of family, on a hotel terrace, or at home after the kids sleep. At [${site.name}](/about), Muskan designs anniversary cakes from quiet heart tins for two to golden tiers for fifty guests. This guide covers styles, flavours, sizing, secrecy, and delivery so your celebration feels personal — not copied from a template board.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **anniversary cake Goa**? Send years celebrated, guest count, venue town, eggless yes/no, and one gallery photo you love — Muskan replies with size, flavour, and delivery before payment.",
      },
      {
        type: "h2",
        text: "Anniversary styles Muskan bakes most often",
        id: "styles",
      },
      {
        type: "ul",
        items: [
          "**[Anniversary Cake](/creations/anniversary-cake)** — classic romantic buttercream, roses, gold accents, works for 10–30 guests.",
          "**[Peach cream anniversary](/creations/anniversary-peach-cream-cake)** — blush palette, soft florals; same family as our [engagement case study](/case-studies/engagement-peach-cream-cake-goa-case-study).",
          "**[Cream heart anniversary](/creations/cream-heart-anniversery-cake)** — intimate dinners, 6–8 servings.",
          "**[Image anniversary cake](/creations/image-anniversary-cake)** — edible photo of the couple on top — see our [heart anniversary case study](/case-studies/anniversary-heart-cake-goa-case-study).",
          "**[Chocolate tin anniversary](/creations/chocolate-tin-anniversary-cake)** — surprise format for two at home.",
          "**[Special anniversary](/creations/special-anniversary-cake)** — milestone years with elevated finishing.",
        ],
      },
      {
        type: "h2",
        text: "Match the cake to the year — and the room",
        id: "years",
      },
      {
        type: "p",
        text: "First anniversaries often want hearts and initials. Ten-year marks lean classic gold. Twenty-five and fifty need height without looking like a wedding repeat — Muskan separates **anniversary cake Goa** palettes from [wedding cakes](/wedding-cakes-goa) so photos do not feel like the wrong event. If you are also planning haldi or engagement soon, read our [engagement journal](/blog/engagement-cake-goa-proposal-guide) so colours stay coordinated.",
      },
      {
        type: "ul",
        items: [
          "**1st–3rd year:** bento tin, heart tier, or 6-inch round — serves 4–8.",
          "**5th–10th year:** 8-inch with roses, gold dust, short message in English or Devanagari.",
          "**25th / 50th:** two-tier buttercream or [golden cream](/creations/golden-cream-cake) inspiration — book 2+ weeks.",
          "**Villa dinner for two:** [peach cream](/creations/anniversary-peach-cream-cake) or [chocolate heart](/creations/chocolate-heart-birthday-cake) scaled down.",
        ],
      },
      {
        type: "h2",
        text: "Flavours couples reorder in Goa",
        id: "flavours",
      },
      {
        type: "ul",
        items: [
          "**Peach cream + vanilla-cardamom** — camera-friendly, pairs with Indian sweets on the side.",
          "**Belgian chocolate** — see our [chocolate cake guide](/blog/chocolate-cake-goa-ultimate-guide).",
          "**Rasmalai-inspired sponge** — for families who want mithai soul in cake form — [rasmalai journal](/blog/rasmalai-cake-goa-guide).",
          "**Eggless sponges** — flag on line one; common for mixed-family lunches.",
          "**Mango Alphonso (seasonal)** — very Goa for summer anniversaries.",
        ],
      },
      {
        type: "h2",
        text: "Surprise dinners vs family lunches",
        id: "surprise",
      },
      {
        type: "p",
        text: "Surprise orders need a friend's WhatsApp, restaurant fridge coordination, or villa host contact — same playbook as [engagement delivery](/blog/engagement-cake-goa-proposal-guide). Family lunches need portions and eggless notes upfront. Muskan asks for dessert time, not only dinner start, so buttercream is not sitting in a hot car.",
      },
      {
        type: "callout",
        variant: "note",
        title: "Delivery",
        text: `Anniversary cakes leave our [${site.studioCity} studio](/locations/velim) in upright chilled boxes. [Panaji](/locations/panaji), [Margao](/locations/margao), [Candolim](/locations/candolim), and resort venues follow the same [wedding delivery heat rules](/blog/wedding-cake-delivery-goa-checklist).`,
      },
      {
        type: "h2",
        text: "How to book on WhatsApp",
        id: "book",
      },
      {
        type: "p",
        text: `Message ${site.phone} with date, years celebrated, guest count, town, eggless needs, and a [/creations](/creations) link. Full steps: [book custom cake Goa](/blog/book-custom-cake-goa-whatsapp). Browse [/anniversary-cakes-goa](/anniversary-cakes-goa) for occasion picks.`,
      },
      {
        type: "related",
        title: "Plan your anniversary",
        items: [
          { href: "/anniversary-cakes-goa", label: "Anniversary cakes Goa", description: "Occasion hub & gallery picks" },
          { href: "/creations/anniversary-peach-cream-cake", label: "Peach cream cake", description: "Romantic reference photo" },
          { href: "/case-studies/anniversary-heart-cake-goa-case-study", label: "Heart case study", description: "Real couple brief" },
          { href: "/contact", label: "Contact Muskan", description: "WhatsApp template" },
        ],
      },
      {
        type: "p",
        text: `Your years together deserve a cake that feels written for you — not printed for everyone. Send your date and town to ${site.phone}; Muskan will help you choose an **anniversary cake Goa** worth photographing before the first slice.`,
      },
    ],
  },
  {
    slug: "rasmalai-cake-goa-guide",
    title: "Rasmalai cake in Goa — Indian dessert flavours, soaking logic & why families book it twice",
    excerpt:
      "Cardamom sponge, saffron milk soak, pistachio finish — the honest rasmalai cake Goa guide: eggless options, wedding and birthday sizing, heat tips, gallery links, and how Muskan balances mithai nostalgia with buttercream that travels.",
    publishedAt: "2026-07-16",
    readMinutes: 12,
    focusKeyword: "rasmalai cake Goa",
    keywords: [
      "rasmalai cake Goa",
      "Indian fusion cake Goa",
      "mithai cake Goa",
      "eggless rasmalai cake",
      "rasmalai birthday cake",
      "custom rasmalai cake Muskan",
      "rasmalai cake delivery Goa",
      "Sweet Bites rasmalai",
    ],
    relatedSlugs: [
      "eggless-birthday-cake-goa-flavours",
      "haldi-cake-goa-tradition-guide",
      "ready-made-cakes-goa-menu-guide",
    ],
    heroImage: BLOG_RASMALAI_HERO_IMAGE,
    heroImageAlt:
      "Rasmalai cake Goa — Indian fusion celebration cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/rasmalai-cake",
    heroGalleryLabel: "Rasmalai cake gallery",
    blocks: [
      {
        type: "p",
        text: `A **rasmalai cake Goa** order usually starts with nostalgia — "like the sweet shop, but for a birthday." At [${site.name}](/about), Muskan builds rasmalai-inspired layers: cardamom sponge, milk soak, light cream, pistachio and saffron accents. It is not a slab of mithai on sponge; it is engineered to slice cleanly, survive Goan warmth better than heavy ganache, and photograph gold-white on Indian celebration tables. This guide explains both gallery styles — [Rasmalai Cake](/creations/rasmalai-cake) and [Rasmalai Special](/creations/rasmalai-special-cake) — and how to order without over-soaking or under-flavouring.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "**Rasmalai cake Goa** searches spike around birthdays, haldi, and family milestones. Tell Muskan guest count, eggless needs, and whether you want light soak or richer mithai intensity.",
      },
      {
        type: "h2",
        text: "Two rasmalai cakes in the gallery — which to pick",
        id: "which-style",
      },
      {
        type: "ul",
        items: [
          "**[Rasmalai Cake](/creations/rasmalai-cake)** — elegant white-gold finish, balanced soak, great for adults who want familiar flavour without heaviness.",
          "**[Rasmalai Special Cake](/creations/rasmalai-special-cake)** — more decorative finishing, popular for milestones — see our [rasmalai case study](/case-studies/rasmalai-cake-goa-case-study) for structure notes.",
          "**[Rabdi dream cake](/creations/rabdi-dream-cake)** — cousin flavour family if you want thicker milk notes — [rabdi case study](/case-studies/rabdi-dream-cake-goa-case-study).",
        ],
      },
      {
        type: "h2",
        text: "What makes rasmalai cake different from vanilla sponge",
        id: "difference",
      },
      {
        type: "p",
        text: "Standard birthday sponge is neutral; **rasmalai cake Goa** layers carry cardamom, reduced milk soak, and sometimes saffron thread on top. Muskan controls soak volume per tier so the base does not collapse — the failure mode at bakeries that pour syrup like a home experiment. Eggless sponges work well here because cardamom and milk carry flavour when eggs are absent; read our [eggless flavours guide](/blog/eggless-birthday-cake-goa-flavours).",
      },
      {
        type: "h2",
        text: "Best occasions for rasmalai cake",
        id: "occasions",
      },
      {
        type: "ul",
        items: [
          "**Parents' birthdays** — familiar taste across generations.",
          "**Haldi & pre-wedding lunches** — pairs with yellow decor; see [haldi cake guide](/blog/haldi-cake-goa-tradition-guide).",
          "**Office milestones** — slices cleanly; less messy than chocolate drip in AC halls.",
          "**Kids parties with Indian menu** — often eggless; moderate sweetness vs character cakes.",
        ],
      },
      {
        type: "h2",
        text: "Heat, travel, and serving time",
        id: "heat",
      },
      {
        type: "p",
        text: "Milk-soaked sponges need fridge time before display, then shade or AC for outdoor venues. Muskan schedules delivery closer to dessert than to dinner start — same discipline as [wedding cake delivery](/blog/wedding-cake-delivery-goa-checklist). For [Margao](/locations/margao) and [Panaji](/locations/panaji) home parties, a kitchen fridge photo before delivery prevents surprises.",
      },
      {
        type: "h2",
        text: "Menu board vs fully custom rasmalai",
        id: "menu-vs-custom",
      },
      {
        type: "p",
        text: "Our [cakes menu](/cakes-menu) may list mithai-adjacent flavours on faster timelines. Gallery **[Rasmalai Special](/creations/rasmalai-special-cake)** designs need custom lead time — usually ${site.bookAheadDays} minimum, longer during wedding season. The [ready-made menu guide](/blog/ready-made-cakes-goa-menu-guide) explains when to pick menu vs gallery reference.",
      },
      {
        type: "h2",
        text: "WhatsApp brief for rasmalai orders",
        id: "whatsapp",
      },
      {
        type: "ul",
        items: [
          "Date + guest count + eggless yes/no.",
          "Link to rasmalai-cake or rasmalai-special-cake gallery photo.",
          "Indoor/outdoor venue and dessert time.",
          "Light vs rich soak preference (Muskan will recommend).",
          "Delivery town or [Velim pickup](/locations/velim).",
        ],
      },
      {
        type: "related",
        title: "Explore Indian fusion cakes",
        items: [
          { href: "/creations/rasmalai-special-cake", label: "Rasmalai special", description: "Milestone finishing" },
          { href: "/case-studies/rasmalai-cake-goa-case-study", label: "Rasmalai case study", description: "Soak & structure story" },
          { href: "/cakes-menu", label: "Cakes menu", description: "Faster flavour picks" },
          { href: "/order", label: "Book a cake", description: "Lead times & deposits" },
        ],
      },
      {
        type: "p",
        text: `Want mithai memory in cake form? Message ${site.phone} with your date and a gallery link — Muskan will quote a **rasmalai cake Goa** your family recognises on the first bite.`,
      },
    ],
  },
  {
    slug: "unicorn-cake-goa-order-guide",
    title: "Unicorn cakes in Goa — rainbow buttercream, horn structure & birthday magic that survives pool parties",
    excerpt:
      "Pastel mane, gold horn, sprinkles that photograph — the unicorn cake Goa guide for parents: sizing for 15 kids, cream vs fondant, eggless sponges, delivery to Calangute villas, and WhatsApp briefs Muskan uses for real gallery unicorns.",
    publishedAt: "2026-07-18",
    readMinutes: 13,
    focusKeyword: "unicorn cake Goa",
    keywords: [
      "unicorn cake Goa",
      "unicorn birthday cake Goa",
      "rainbow unicorn cake",
      "kids unicorn cake delivery",
      "pastel birthday cake Goa",
      "eggless unicorn cake",
      "custom unicorn cake Muskan",
      "unicorn cake price Goa",
    ],
    relatedSlugs: [
      "kids-birthday-cake-goa-character-themes",
      "bento-cake-goa-order-guide",
      "eggless-birthday-cake-goa-flavours",
    ],
    heroImage: BLOG_UNICORN_HERO_IMAGE,
    heroImageAlt:
      "Unicorn cake Goa — pastel rainbow kids birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/unicorn-cake",
    heroGalleryLabel: "Unicorn cake gallery",
    blocks: [
      {
        type: "p",
        text: `The **unicorn cake Goa** message usually arrives with a screenshot, a child saying "rainbow," and a party date that feels tomorrow. At [${site.name}](/about), Muskan has baked unicorns for home parties, school celebrations, and poolside birthdays from [Velim](/locations/velim) to [Calangute](/locations/calangute) — buttercream manes, structured horns, edible glitter that survives photos without looking grey in humid air. This guide is for parents who want the magic without the meltdown — sizing, technique, eggless notes, and honest timelines.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **unicorn cake Goa** or **unicorn birthday cake Goa**? Send child's age, guest count, eggless needs, and one gallery photo — Muskan quotes size and delivery before you pay.",
      },
      {
        type: "h2",
        text: "What our unicorn cake actually includes",
        id: "what-includes",
      },
      {
        type: "p",
        text: "Our [Unicorn Cake](/creations/unicorn-cake) gallery design uses pastel rainbow buttercream, a gold-accent horn, lash details, and sprinkle texture kids touch immediately. It is not a licensed character mould — it is Muskan's unicorn silhouette parents reference on WhatsApp. For multi-colour layers inside, pair with [double layered rainbow](/creations/double-layered-rainbow-cake) inspiration or our [rainbow case study](/case-studies/rainbow-cake-goa-case-study).",
      },
      {
        type: "h2",
        text: "Cream unicorn vs fondant unicorn — what Muskan recommends",
        id: "cream-vs-fondant",
      },
      {
        type: "ul",
        items: [
          "**Buttercream mane (recommended):** softer look, faster drying in Goa, kids eat everything.",
          "**Fondant horn & ears:** possible for sharp edges; Muskan limits fondant volume outdoors.",
          "**Printed wafer faces:** fast but flat — we steer parents toward piped eyes for photos.",
          "**Bento unicorn:** smaller format — see [bento guide](/blog/bento-cake-goa-order-guide) and [bento case study](/case-studies/bento-cake-goa-case-study).",
        ],
      },
      {
        type: "h2",
        text: "Sizing for kids parties",
        id: "sizing",
      },
      {
        type: "ul",
        items: [
          "**10–12 kids:** 6-inch unicorn + cupcakes optional.",
          "**15–20 kids:** 8-inch hero cake — most common **unicorn birthday cake Goa** order.",
          "**25+ kids:** 8-inch unicorn + [menu round](/cakes-menu) backup cake same palette.",
          "**Twins / joint party:** two small unicorns or one tier split colours — message early.",
        ],
      },
      {
        type: "h2",
        text: "Eggless, nuts, and sweetness",
        id: "eggless",
      },
      {
        type: "p",
        text: "Many unicorn parties need eggless sponge for classmates. Mention on line one — Muskan adjusts moisture and colour stability. Nut-free classrooms are common; flag restrictions before piping starts. Flavour pairings that work: vanilla, strawberry cream, light chocolate — details in our [eggless birthday guide](/blog/eggless-birthday-cake-goa-flavours).",
      },
      {
        type: "h2",
        text: "Pool parties, gardens, and Goan heat",
        id: "heat",
      },
      {
        type: "p",
        text: "Pastel buttercream softens faster than dark chocolate in sun. Muskan pre-chills, delivers close to cake-cutting, and asks for shaded tables — same rules as [last-minute pool parties](/blog/last-minute-birthday-cake-goa-guide). Avoid setting the unicorn facing direct afternoon glare for photos.",
      },
      {
        type: "h2",
        text: "Timeline and character alternatives",
        id: "timeline",
      },
      {
        type: "p",
        text: `Simple unicorn designs often fit ${site.bookAheadDays}. Extra sugar flowers, double tiers, or matching cupcakes need longer. If your child switches from unicorn to [Spiderman](/case-studies/spiderman-cake-goa-case-study) or [Barbie](/case-studies/barbie-castle-cake-goa-case-study) three days before the party, message immediately — our [kids character guide](/blog/kids-birthday-cake-goa-character-themes) explains what can change on short notice.`,
      },
      {
        type: "h2",
        text: "WhatsApp message template",
        id: "whatsapp",
      },
      {
        type: "ul",
        items: [
          "Child's age + party date + time cake is cut.",
          "Guest count + eggless / nut-free notes.",
          "Link to [/creations/unicorn-cake](/creations/unicorn-cake).",
          "Delivery town or pickup — [contact](/contact) for studio map.",
          "Indoor / pool / garden venue.",
        ],
      },
      {
        type: "related",
        title: "Kids celebration picks",
        items: [
          { href: "/creations/unicorn-cake", label: "Unicorn gallery", description: "Reference on WhatsApp" },
          { href: "/case-studies/unicorn-cake-goa-case-study", label: "Unicorn case study", description: "Real party brief" },
          { href: "/blog/kids-birthday-cake-goa-character-themes", label: "Character cake guide", description: "Theme planning" },
          { href: "/order", label: "Book a cake", description: "Lead times" },
        ],
      },
      {
        type: "p",
        text: `Ready for the horn photo moment? Message ${site.phone} with date, guest count, and the unicorn gallery link — Muskan will plan a **unicorn cake Goa** your child recognises before the candles go on.`,
      },
    ],
  },
  {
    slug: "photo-cake-goa-order-guide",
    title: "Photo cakes in Goa — edible prints that stay sharp, file tips & when Muskan says no",
    excerpt:
      "Dad's portrait, your wedding still, a pet who passed — the honest photo cake Goa guide: resolution rules, eggless sponges, anniversary vs birthday sizing, hall humidity, and how to order on WhatsApp without a blurry disaster on the table.",
    publishedAt: "2026-07-22",
    readMinutes: 12,
    focusKeyword: "photo cake Goa",
    keywords: [
      "photo cake Goa",
      "edible image cake Goa",
      "picture cake Goa",
      "custom photo cake Muskan",
      "photo cake delivery Goa",
      "anniversary photo cake",
      "birthday photo cake Goa",
      "image cake order WhatsApp",
    ],
    relatedSlugs: [
      "anniversary-cake-goa-complete-guide",
      "book-custom-cake-goa-whatsapp",
      "eggless-birthday-cake-goa-flavours",
    ],
    heroImage: BLOG_PHOTO_HERO_IMAGE,
    heroImageAlt:
      "Photo cake Goa — edible image print cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/image-cake",
    heroGalleryLabel: "Image cake gallery",
    blocks: [
      {
        type: "p",
        text: `A **photo cake Goa** order is personal before it is pretty. Muskan at [${site.name}](/about) has printed fathers turning sixty, couples on decade anniversaries, and children holding their first puppy — on [Image Cake](/creations/image-cake) and [Image Anniversary Cake](/creations/image-anniversary-cake) designs where the face still looks like the person when the room goes quiet. This guide explains what makes edible prints work in Goan humidity, which photos fail (and why), and how to message so your quote is accurate the first time.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **photo cake Goa** or **edible image cake Goa**? Send the original photo file (not a forwarded WhatsApp blur), date, guest count, eggless yes/no, and indoor vs outdoor venue.",
      },
      {
        type: "h2",
        text: "Photo cake vs character cake — know the difference",
        id: "photo-vs-character",
      },
      {
        type: "p",
        text: "Character cakes use piped or moulded designs — see our [kids character guide](/blog/kids-birthday-cake-goa-character-themes). **Picture cake Goa** orders use edible ink on a thin sheet placed on buttercream or fondant. Your real photo is the design. Muskan checks every file before accepting payment; she would rather say \"send a better photo\" than deliver a pixelated face.",
      },
      {
        type: "h2",
        text: "File rules that decide print quality",
        id: "file-rules",
      },
      {
        type: "ul",
        items: [
          "**Send the original** — from camera roll, Google Photos download, or email attachment.",
          "**Avoid Instagram screenshots** — compression destroys faces at cake size.",
          "**Portrait crops:** face should fill roughly one-third of the frame for 8-inch rounds.",
          "**Contrast matters** — very dark photos lose cheek detail on edible ink.",
          "**Rights & respect:** only send photos you own or have permission to print.",
        ],
      },
      {
        type: "p",
        text: "Our [photo cake case study](/case-studies/photo-cake-goa-case-study) walks through a 60th birthday in [Ponda](/locations/ponda) where the son first sent a 480px Facebook crop — Muskan waited for a 2400px scan before baking.",
      },
      {
        type: "h2",
        text: "Birthday photo cakes vs anniversary photo cakes",
        id: "occasions",
      },
      {
        type: "ul",
        items: [
          "**Milestone birthdays (40, 50, 60):** 8-inch round, buttercream border, short message on board — see [image cake](/creations/image-cake).",
          "**Anniversaries:** romantic frame, gold accents, peach or cream palette — [image anniversary](/creations/image-anniversary-cake) or [anniversary journal](/blog/anniversary-cake-goa-complete-guide).",
          "**Couples at home:** smaller [cream heart](/creations/cream-heart-cake) with photo topper option — ask Muskan.",
          "**Kids with pet photos:** eggless common; simpler borders survive little hands.",
        ],
      },
      {
        type: "h2",
        text: "Eggless, flavour, and what guests actually eat",
        id: "flavour",
      },
      {
        type: "p",
        text: "The edible sheet is thin; flavour comes from sponge and buttercream beneath. Eggless vanilla and chocolate are the most requested for **photo cake Goa** family lunches. Muskan matches sweetness to mixed-age tables — details in our [eggless birthday guide](/blog/eggless-birthday-cake-goa-flavours). The print itself is not egg-based; always mention eggless sponge separately.",
      },
      {
        type: "h2",
        text: "Buttercream frame — hiding the sheet edge",
        id: "frame",
      },
      {
        type: "p",
        text: "Bare print edges photograph badly. Muskan pipes a buttercream border in your tablecloth or decor colours so guests see portrait + finishing, not a white rectangle seam. For anniversaries, gold ribbon piping is common; for birthdays, name and age on the board.",
      },
      {
        type: "h2",
        text: "Heat, halls, and fridge timing",
        id: "heat",
      },
      {
        type: "p",
        text: "Edible ink softens in humidity if the cake sits out during long speeches. AC halls in [Margao](/locations/margao), [Panaji](/locations/panaji), and [Mapusa](/locations/mapusa) still need fridge time until dessert. Muskan delivers closer to cutting than to dinner start — same logic as [wedding cake delivery](/blog/wedding-cake-delivery-goa-checklist). Beach terraces need shade; she will say if a photo cake is the wrong format outdoors.",
      },
      {
        type: "callout",
        variant: "note",
        title: "When Muskan suggests a different design",
        text: "If your only file is too small, Muskan may offer piped initials, a [golden cream](/creations/golden-cream-cake) milestone cake, or waiting one day while you source a better scan — honesty beats a blurry tribute.",
      },
      {
        type: "h2",
        text: "Sizing and backup portions",
        id: "sizing",
      },
      {
        type: "ul",
        items: [
          "**6-inch:** intimate dinner, 6–8 slices.",
          "**8-inch:** most photo cakes — 14–18 slices.",
          "**10-inch or tier:** large family events — book 2+ weeks.",
          "**Cupcakes with mini prints:** office parties — ask availability.",
          "**Extra menu cake:** when guest count exceeds photo cake slices — [cakes menu](/cakes-menu).",
        ],
      },
      {
        type: "h2",
        text: "Pricing — what moves the quote",
        id: "pricing",
      },
      {
        type: "p",
        text: "Print setup, size, buttercream frame complexity, eggless sponge, and delivery distance each line-item on WhatsApp. Photo cakes are not cheaper because they look simple — file prep and print alignment take skill. [/order](/order) shows starting sizes; your quote is personal.",
      },
      {
        type: "h2",
        text: "WhatsApp brief (copy-friendly)",
        id: "whatsapp",
      },
      {
        type: "ul",
        items: [
          "Attach original photo file + say occasion (birthday / anniversary).",
          "Date + dessert time + venue town + indoor/outdoor.",
          "Guest count + eggless yes/no.",
          "Link to [image cake](/creations/image-cake) if you love a layout.",
          "Full booking steps: [custom cake WhatsApp guide](/blog/book-custom-cake-goa-whatsapp).",
        ],
      },
      {
        type: "related",
        title: "Photo & milestone cakes",
        items: [
          { href: "/case-studies/photo-cake-goa-case-study", label: "Photo cake case study", description: "60th birthday Ponda story" },
          { href: "/creations/image-anniversary-cake", label: "Image anniversary cake", description: "Romantic photo layout" },
          { href: "/case-studies/anniversary-heart-cake-goa-case-study", label: "Heart case study", description: "Non-photo romantic option" },
          { href: "/contact", label: "Contact Muskan", description: "Send your file here" },
        ],
      },
      {
        type: "p",
        text: `The photo on the cake should look like someone you love — not a guess. Message ${site.phone} with the best file you have; Muskan will tell you straight if it will print well for your **photo cake Goa** before you pay.`,
      },
    ],
  },
  {
    slug: "cake-bouquet-goa-order-guide",
    title: "Cake bouquets in Goa — cupcake roses, office surprises & when flowers should be edible",
    excerpt:
      "Twelve stems, buttercream roses, upright delivery to Panaji offices — the cake bouquet Goa guide: structure, eggless cupcakes, surprise handoffs, Mother's Day timing, and how Muskan builds sweet bouquets that photograph like florals.",
    publishedAt: "2026-07-26",
    readMinutes: 11,
    focusKeyword: "cake bouquet Goa",
    keywords: [
      "cake bouquet Goa",
      "cupcake bouquet Goa",
      "sweet bouquet cake Goa",
      "cupcake bouquet delivery Goa",
      "birthday bouquet cake",
      "office surprise cake Goa",
      "alternative to flowers cake",
    ],
    relatedSlugs: [
      "bento-cake-goa-order-guide",
      "anniversary-cake-goa-complete-guide",
      "book-custom-cake-goa-whatsapp",
    ],
    heroImage: BLOG_BOUQUET_HERO_IMAGE,
    heroImageAlt:
      "Cake bouquet Goa — cupcake sweet bouquet by Sweet Bites Muskan",
    heroGalleryHref: "/creations/sweet-bouquet",
    heroGalleryLabel: "Sweet bouquet gallery",
    blocks: [
      {
        type: "p",
        text: `A **cake bouquet Goa** order starts when someone says, "Flowers wilt — she prefers cake." Muskan's [Sweet Bouquet](/creations/sweet-bouquet) wraps buttercream roses on cupcakes like a floral delivery — upright box, stem paper, message card — without the vase problem. This guide covers sizing, office surprises, eggless portions, and delivery rules so your **cupcake bouquet Goa** arrives styled, not sideways.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **cake bouquet Goa**? Send how many people will share, delivery address type (office/home), eggless count, and surprise yes/no — Muskan quotes stems, flavours, and handoff before payment.",
      },
      {
        type: "h2",
        text: "What a sweet bouquet includes",
        id: "what-includes",
      },
      {
        type: "ul",
        items: [
          "Individual cupcakes on secure stems — not loose in a bag.",
          "Buttercream rose piping in your palette (blush, cream, gold).",
          "Wrapped bouquet paper + ribbon + optional message tag.",
          "Tall upright transport box — see our [bouquet case study](/case-studies/sweet-bouquet-cake-goa-case-study).",
          "Gallery video at [/creations/sweet-bouquet](/creations/sweet-bouquet) for WhatsApp reference.",
        ],
      },
      {
        type: "h2",
        text: "When a bouquet beats a round cake",
        id: "when-bouquet",
      },
      {
        type: "ul",
        items: [
          "**Office birthdays (8–15 people)** — no knife, no half cake left in pantry.",
          "**Flower alternative** — photos look floral; nothing to throw away.",
          "**Add-on surprise** — bouquet at work, [bento tin](/blog/bento-cake-goa-order-guide) at home.",
          "**Mother's Day / Valentine's** — book early; March and February fill fast.",
          "**Anniversary lunch** — pair with a dinner [anniversary cake](/blog/anniversary-cake-goa-complete-guide) later.",
        ],
      },
      {
        type: "h2",
        text: "Office delivery without spoiling the surprise",
        id: "office",
      },
      {
        type: "p",
        text: "Muskan asks for reception or security contact, pantry fridge photo, and a cue word — driver delivers to gate, not the birthday person's desk. Same secrecy as [engagement reveals](/blog/engagement-cake-goa-proposal-guide). **Cupcake bouquet delivery Goa** fails when clients say \"leave in sun at reception.\"",
      },
      {
        type: "h2",
        text: "Flavours and eggless cupcakes",
        id: "flavour",
      },
      {
        type: "p",
        text: "Office bouquets lean eggless vanilla and light chocolate — easy sharing in AC. Home surprises can add mango or strawberry cream. Flag eggless count on line one; see [eggless birthday guide](/blog/eggless-birthday-cake-goa-flavours).",
      },
      {
        type: "h2",
        text: "How to order on WhatsApp",
        id: "whatsapp",
      },
      {
        type: "ul",
        items: [
          "Date + delivery town ([Panaji](/locations/panaji), [Margao](/locations/margao), etc.).",
          "Stem count = people sharing (usually 10–15).",
          "Office vs home handoff + surprise yes/no.",
          "Link to [sweet bouquet](/creations/sweet-bouquet) gallery.",
          "Full steps: [book custom cake](/blog/book-custom-cake-goa-whatsapp).",
        ],
      },
      {
        type: "related",
        title: "Surprise celebrations",
        items: [
          { href: "/case-studies/sweet-bouquet-cake-goa-case-study", label: "Bouquet case study", description: "Panaji office story" },
          { href: "/creations/sweet-bouquet", label: "Sweet bouquet gallery", description: "Video reference" },
          { href: "/contact", label: "Contact Muskan", description: "Office delivery brief" },
          { href: "/order", label: "Book a cake", description: "Lead times" },
        ],
      },
      {
        type: "p",
        text: `Want flowers that get eaten? Message ${site.phone} with date, stem count, and delivery type — Muskan will plan a **cake bouquet Goa** that survives the elevator ride.`,
      },
    ],
  },
  {
    slug: "mermaid-cake-goa-order-guide",
    title: "Mermaid cakes in Goa — teal ombré scales, tail details & garden parties that need shade",
    excerpt:
      "Under-the-sea birthdays without melted tails — the mermaid cake Goa guide: scale piping, buttercream vs fondant, eggless sponges, Mapusa garden timing, and WhatsApp briefs for Muskan's marmaid-cake gallery designs.",
    publishedAt: "2026-07-28",
    readMinutes: 12,
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
    relatedSlugs: [
      "unicorn-cake-goa-order-guide",
      "kids-birthday-cake-goa-character-themes",
      "eggless-birthday-cake-goa-flavours",
    ],
    heroImage: BLOG_MERMAID_HERO_IMAGE,
    heroImageAlt:
      "Mermaid cake Goa — teal ombré kids birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/marmaid-cake",
    heroGalleryLabel: "Mermaid cake gallery",
    blocks: [
      {
        type: "p",
        text: `Between unicorns and princess castles, **mermaid cake Goa** parents want teal ombré, piped scales, pearl dots, and a tail kids touch before candles. Muskan bakes [Mermaid Cake](/creations/marmaid-cake) designs with buttercream-first philosophy — most of what guests eat is cream and sponge, not heavy fondant. This guide covers sizing, garden heat, eggless notes, and how our [mermaid case study](/case-studies/mermaid-cake-goa-case-study) survived a Mapusa shower.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "**Mermaid birthday cake Goa** orders need child's age, guest count, garden vs indoor, and eggless yes/no — Muskan quotes structure and chill time together.",
      },
      {
        type: "h2",
        text: "Mermaid vs unicorn — choosing the theme",
        id: "mermaid-vs-unicorn",
      },
      {
        type: "p",
        text: "Same age group, different hero. Read our [unicorn journal](/blog/unicorn-cake-goa-order-guide) for horn-and-mane parties. Mermaid palettes run teal, purple, shell pink — better for \"under the sea\" briefs. Muskan can sketch both from gallery links before you commit.",
      },
      {
        type: "h2",
        text: "Scale texture without covering the whole cake in fondant",
        id: "scales",
      },
      {
        type: "p",
        text: "Piped scale arcs in three teal shades create ombré on the sides — petal tip work, not a fondant sheet kids peel off. Limited fondant on the tail accent only. Same approach as [pink butterfly](/case-studies/pink-butterfly-cake-goa-case-study) garden parties: buttercream survives Goa better outdoors.",
      },
      {
        type: "h2",
        text: "Sizing for kids parties",
        id: "sizing",
      },
      {
        type: "ul",
        items: [
          "**10–14 kids:** 7-inch mermaid hero + matching cupcakes.",
          "**15–20 kids:** 8-inch cake — most common order.",
          "**25+:** 8-inch mermaid + [menu round](/cakes-menu) backup same palette.",
          "**Bento mermaid:** smaller surprise — [bento guide](/blog/bento-cake-goa-order-guide).",
        ],
      },
      {
        type: "h2",
        text: "Garden shade, rain, and monsoon buffers",
        id: "heat",
      },
      {
        type: "p",
        text: "Ombré buttercream smears if rain hits exposed tops. Muskan pre-chills, delivers close to cutting, asks for gazebo or shaded table photos beforehand. Indoor [Margao](/locations/margao) halls are easier; garden parties need fridge until reveal — see [last-minute pool guide](/blog/last-minute-birthday-cake-goa-guide) for timing logic.",
      },
      {
        type: "h2",
        text: "Eggless and flavour pairings",
        id: "eggless",
      },
      {
        type: "p",
        text: "Eggless vanilla + strawberry cream inside keeps pink mermaid energy without red food colour overload. Classmate allergies: mention on line one. Details in [eggless birthday guide](/blog/eggless-birthday-cake-goa-flavours).",
      },
      {
        type: "h2",
        text: "WhatsApp brief",
        id: "whatsapp",
      },
      {
        type: "ul",
        items: [
          "Age + date + cake-cutting time.",
          "Guest count + eggless / nut-free notes.",
          "Link to [/creations/marmaid-cake](/creations/marmaid-cake).",
          "Garden / pool / indoor venue.",
          "Character backup if child changes mind — [kids guide](/blog/kids-birthday-cake-goa-character-themes).",
        ],
      },
      {
        type: "related",
        title: "Girls birthday themes",
        items: [
          { href: "/case-studies/mermaid-cake-goa-case-study", label: "Mermaid case study", description: "Mapusa garden story" },
          { href: "/creations/marmaid-cake", label: "Mermaid gallery", description: "Teal ombré reference" },
          { href: "/case-studies/unicorn-cake-goa-case-study", label: "Unicorn case study", description: "Compare themes" },
          { href: "/order", label: "Book a cake", description: "Lead times" },
        ],
      },
      {
        type: "p",
        text: `Planning under-the-sea magic? Message ${site.phone} with date, guest count, and the mermaid gallery link — Muskan will quote a **mermaid cake Goa** worth the tail photo before candles.`,
      },
    ],
  },
  {
    slug: "doraemon-cake-goa-order-guide",
    title: "Doraemon cakes in Goa — Nobita, Shizuka, cream piping & the five-character birthday checklist",
    excerpt:
      "Your child names every friend on the show — the Doraemon cake Goa guide: single vs family designs, cream vs fondant, eggless sponges, Margao walk-up delivery, and WhatsApp briefs Muskan uses for gallery doremon cakes.",
    publishedAt: "2026-07-30",
    readMinutes: 13,
    focusKeyword: "Doraemon cake Goa",
    keywords: [
      "Doraemon cake Goa",
      "Doraemon birthday cake Goa",
      "Doraemon family cake Goa",
      "Nobita cake Goa",
      "character cake delivery Goa",
      "cream Doraemon cake Muskan",
      "cartoon cake Goa kids",
    ],
    relatedSlugs: [
      "kids-birthday-cake-goa-character-themes",
      "eggless-birthday-cake-goa-flavours",
      "book-custom-cake-goa-whatsapp",
    ],
    heroImage: BLOG_DORAEMON_HERO_IMAGE,
    heroImageAlt:
      "Doraemon family cake Goa — five-character cream birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/doremon-family-cake",
    heroGalleryLabel: "Doraemon family gallery",
    blocks: [
      {
        type: "p",
        text: `A **Doraemon cake Goa** message often says "just Doraemon" — then the child adds Nobita, Shizuka, Suneo, and Gian. At [${site.name}](/about), Muskan pipes cartoon faces in buttercream on [Doraemon Family Cake](/creations/doremon-family-cake) and single-hero [Doraemon Cream Cake](/creations/doremon-cream-cake) designs — no stock moulds, no wafer sheets that look flat in real life. This guide covers character count, cream technique, eggless sponges, and delivery — including how our [Doraemon case study](/case-studies/doraemon-family-cake-goa-case-study) passed a four-year-old's face-by-face inspection.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **Doraemon birthday cake Goa**? Send character names, child's age, guest count, cream vs fondant preference, and eggless yes/no.",
      },
      {
        type: "h2",
        text: "Single Doraemon vs full family",
        id: "single-vs-family",
      },
      {
        type: "ul",
        items: [
          "**[Doraemon Cream Cake](/creations/doremon-cream-cake)** — one hero, faster timeline, smaller parties.",
          "**[Doraemon Family Cake](/creations/doremon-family-cake)** — five characters, higher piping labour — see [case study](/case-studies/doraemon-family-cake-goa-case-study).",
          "**Bento Doraemon** — tiny surprise format — [bento guide](/blog/bento-cake-goa-order-guide).",
          "**Gallery video** on family creation shows scale before you order.",
        ],
      },
      {
        type: "h2",
        text: "Cream piping vs fondant vs printed faces",
        id: "technique",
      },
      {
        type: "p",
        text: "Kids peel fondant; prints look flat. Muskan recommends buttercream piping with separate colour bags per character — Doraemon blue tested under kitchen light before party lighting. Send a **screenshot from the show**, not fan art, so colours match what your child watches on TV.",
      },
      {
        type: "h2",
        text: "Sizing and eggless classrooms",
        id: "sizing",
      },
      {
        type: "ul",
        items: [
          "**12–16 kids:** 8-inch with 3–5 characters on top/sides.",
          "**20+ kids:** 8-inch hero + [menu backup](/cakes-menu) or cupcakes.",
          "**Eggless whole cake** — common; mention on line one.",
          "**Nut-free** — flag before piping starts.",
        ],
      },
      {
        type: "p",
        text: "Flavour pairings: eggless chocolate or vanilla — [eggless guide](/blog/eggless-birthday-cake-goa-flavours). Character cakes need stable sponge more than exotic fillings.",
      },
      {
        type: "h2",
        text: "Delivery — stairs, heat, and the face-check moment",
        id: "delivery",
      },
      {
        type: "p",
        text: "Multi-character cakes travel upright, pre-chilled. Apartments without lifts need extra buffer — our case study climbed three flights in [Margao](/locations/margao). Muskan asks for counter or fridge photos; ventilation holes in boxes prevent condensation smearing piped eyes.",
      },
      {
        type: "h2",
        text: "Timeline vs other character cakes",
        id: "timeline",
      },
      {
        type: "p",
        text: `Five-character cream cakes need ${site.bookAheadDays} minimum — longer during school birthday season. Simpler single Doraemon may fit shorter windows. Also available: [Spiderman](/case-studies/spiderman-cake-goa-case-study), [Cocomelon](/case-studies/cocomelon-cake-goa-case-study), [Barbie](/case-studies/barbie-castle-cake-goa-case-study) — [kids character guide](/blog/kids-birthday-cake-goa-character-themes) compares lead times.`,
      },
      {
        type: "h2",
        text: "WhatsApp template",
        id: "whatsapp",
      },
      {
        type: "ul",
        items: [
          "Child's age + party date + cutting time.",
          "Character list (Doraemon only or full gang).",
          "Guest count + eggless / nut-free.",
          "Gallery link: [doremon-family-cake](/creations/doremon-family-cake) or [doremon-cream-cake](/creations/doremon-cream-cake).",
          "Delivery town or [Velim pickup](/locations/velim).",
        ],
      },
      {
        type: "related",
        title: "Character celebrations",
        items: [
          { href: "/case-studies/doraemon-family-cake-goa-case-study", label: "Doraemon case study", description: "Five-character Margao story" },
          { href: "/creations/doremon-cream-cake", label: "Doraemon cream cake", description: "Single-character option" },
          { href: "/blog/kids-birthday-cake-goa-character-themes", label: "Kids cake guide", description: "Theme planning" },
          { href: "/contact", label: "Contact Muskan", description: "WhatsApp template" },
        ],
      },
      {
        type: "p",
        text: `Your child will check every face at the table. Message ${site.phone} with character names, age, and guest count — Muskan will quote a **Doraemon cake Goa** they recognise before the first bite.`,
      },
    ],
  },
  {
    slug: "flamingo-cake-goa-order-guide",
    title: "Flamingo cakes in Goa — tropical pink parties, pool timing & buttercream that beats the splash zone",
    excerpt:
      "Pool floats on Pinterest, real cake by the water in Candolim — the flamingo cake Goa guide: feather piping, gold accents, eggless sponges, post-swim delivery timing, and WhatsApp briefs Muskan uses for gallery flamingo designs.",
    publishedAt: "2026-08-08",
    readMinutes: 12,
    focusKeyword: "flamingo cake Goa",
    keywords: [
      "flamingo cake Goa",
      "flamingo birthday cake Goa",
      "tropical birthday cake Goa",
      "pool party cake Goa",
      "pink flamingo cake Muskan",
      "girls birthday cake Candolim",
      "custom flamingo cake Velim",
    ],
    relatedSlugs: [
      "unicorn-cake-goa-order-guide",
      "mermaid-cake-goa-order-guide",
      "kids-birthday-cake-goa-character-themes",
    ],
    heroImage: BLOG_FLAMINGO_HERO_IMAGE,
    heroImageAlt:
      "Flamingo cake Goa — tropical pink birthday cake by Sweet Bites Muskan",
    heroGalleryHref: "/creations/flamingo-cake",
    heroGalleryLabel: "Flamingo cake gallery",
    blocks: [
      {
        type: "p",
        text: `A **flamingo cake Goa** order usually arrives with inflatable birds and pink sunglasses — the cake must match the vibe without wilting beside a splash zone. At [${site.name}](/about), Muskan pipes feather texture on [Flamingo Cake](/creations/flamingo-cake) designs with buttercream-first finishing — edible, photogenic, and timed for when kids leave the pool. Our [flamingo case study](/case-studies/flamingo-cake-goa-case-study) documents a Candolim villa party; this guide helps you plan yours before WhatsApp.`,
      },
      {
        type: "callout",
        variant: "tip",
        title: "Focus keyword",
        text: "Searching **flamingo birthday cake Goa**? Send pool vs indoor, guest count, eggless needs, and cake-cutting time — not just party start time.",
      },
      {
        type: "h2",
        text: "What a flamingo cake includes at Sweet Bites",
        id: "what-includes",
      },
      {
        type: "ul",
        items: [
          "Piped feather arcs in layered pinks — not a flat printed sheet.",
          "Gold beak accent and optional name/age on board.",
          "Eggless vanilla or strawberry cream fillings on request.",
          "Gallery [video](/creations/flamingo-cake) for WhatsApp reference.",
          "Buttercream body — kids eat everything, no fondant peel pile.",
        ],
      },
      {
        type: "h2",
        text: "Flamingo vs unicorn vs mermaid vs butterfly",
        id: "theme-pick",
      },
      {
        type: "p",
        text: "Same age group, different hero. [Unicorn](/blog/unicorn-cake-goa-order-guide) for rainbow manes; [mermaid](/blog/mermaid-cake-goa-order-guide) for teal ombré; [pink butterfly](/case-studies/pink-butterfly-cake-goa-case-study) for gardens. **Flamingo cake Goa** wins when the brief says pool, tropical, or flamingo props — Muskan can sketch palettes from gallery links before you commit.",
      },
      {
        type: "h2",
        text: "Pool parties: timing beats decoration",
        id: "pool-timing",
      },
      {
        type: "p",
        text: "Chlorine splash and 3 PM sun soften buttercream faster than hall AC. Muskan schedules delivery after swim time — cake in kitchen fridge until reveal under gazebo shade. Never deliver when kids are still in the pool unless venue has reliable AC pantry. Same rules as [last-minute pool parties](/blog/last-minute-birthday-cake-goa-guide) and our Candolim [case study](/case-studies/flamingo-cake-goa-case-study).",
      },
      {
        type: "h2",
        text: "Sizing for kids birthdays",
        id: "sizing",
      },
      {
        type: "ul",
        items: [
          "**10–14 kids:** 7-inch flamingo hero.",
          "**15–20 kids:** 8-inch — most common **flamingo birthday cake Goa** order.",
          "**25+:** 8-inch hero + [menu round](/cakes-menu) or cupcakes same palette.",
          "**Cupcake cluster:** flamingo toppers — ask availability on shorter timelines.",
        ],
      },
      {
        type: "h2",
        text: "Colour under Goan sunlight",
        id: "colour",
      },
      {
        type: "p",
        text: "Phone cameras wash pastels outdoors. Muskan deepens pink one shade versus your screen swatch so photos still read tropical, not white. Gold accents stay minimal — fingerprints show in humidity.",
      },
      {
        type: "h2",
        text: "Eggless, nuts, and classroom rules",
        id: "eggless",
      },
      {
        type: "p",
        text: "Flag eggless on line one — common for mixed families and school parties. Nut-free classrooms need a note before piping. Flavour pairings: vanilla, strawberry cream, light chocolate — see [eggless birthday guide](/blog/eggless-birthday-cake-goa-flavours).",
      },
      {
        type: "h2",
        text: "Delivery across Goa",
        id: "delivery",
      },
      {
        type: "p",
        text: `Cakes leave our [${site.studioCity} kitchen](/locations/velim) upright and pre-chilled. [Candolim](/locations/candolim), [Calangute](/locations/calangute), [Panaji](/locations/panaji), [Margao](/locations/margao), and villa venues need fridge photos before Muskan confirms handover time.`,
      },
      {
        type: "h2",
        text: "WhatsApp brief",
        id: "whatsapp",
      },
      {
        type: "ul",
        items: [
          "Child's age + date + cake-cutting time.",
          "Pool / garden / indoor venue.",
          "Guest count + eggless / nut-free.",
          "Link to [/creations/flamingo-cake](/creations/flamingo-cake).",
          "Booking steps: [custom cake WhatsApp guide](/blog/book-custom-cake-goa-whatsapp).",
        ],
      },
      {
        type: "related",
        title: "Tropical celebrations",
        items: [
          { href: "/case-studies/flamingo-cake-goa-case-study", label: "Flamingo case study", description: "Candolim pool party story" },
          { href: "/creations/flamingo-cake", label: "Flamingo gallery", description: "Video reference" },
          { href: "/blog/mermaid-cake-goa-order-guide", label: "Mermaid journal", description: "Compare pink themes" },
          { href: "/contact", label: "Contact Muskan", description: "Pool party brief" },
        ],
      },
      {
        type: "p",
        text: `Planning a tropical birthday? Message ${site.phone} with date, guest count, and pool vs indoor — Muskan will quote a **flamingo cake Goa** timed for the splash zone, not against it.`,
      },
    ],
  },
];

export function getRelatedBlogPosts(slug: string, limit = 2): BlogPost[] {
  const post = getBlogPostBySlug(slug);
  if (!post) return [];
  const related = post.relatedSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is BlogPost => Boolean(p))
    .slice(0, limit);
  if (related.length >= limit) return related;
  const extras = posts
    .filter((p) => p.slug !== slug && !related.some((r) => r.slug === p.slug))
    .slice(0, limit - related.length);
  return [...related, ...extras];
}

export function getAllBlogPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postCanonicalUrl(slug: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  return `${base}/blog/${slug}`;
}
