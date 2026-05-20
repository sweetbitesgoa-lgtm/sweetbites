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
