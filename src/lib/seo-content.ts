import { deliveryAreas, site } from "@/lib/content";

export type SeoFaq = { question: string; answer: string };

export type SeoPageContent = {
  heading: string;
  paragraphs: string[];
  subsections?: { title: string; paragraphs: string[] }[];
  listTitle?: string;
  listItems?: readonly string[];
  faqs?: SeoFaq[];
};

const wa = `WhatsApp ${site.phone}`;
const domain = site.domain;

export const homeSeo: SeoPageContent = {
  heading: "Custom cakes in Goa — order on WhatsApp at Sweet Bites",
  paragraphs: [
    `Welcome to ${site.name} (${site.tagline}) — a Goa home bakery at ${domain} specialising in custom birthday cakes, wedding tiers, anniversary designs, bento boxes, character cakes for kids, and festive orders across Panaji, Margao, Calangute, Mapusa, and all of North & South Goa.`,
    `Every photo in our Celebration Scrapbook is a real cake Muskan has baked and delivered. Browse 160+ creations, watch Behind the Bite decorating reels, and message us on ${wa} to check your date and get a personalised quote — usually within a few hours on working days.`,
    `We work with Belgian chocolate, Alphonso mango, red velvet, vanilla bean, eggless sponges, and Goan-inspired flavours. Whether you need a Barbie castle, a floral haldi cake, or a minimalist bento for two, we design around your theme, guest count, and budget.`,
    `Most custom cakes need ${site.bookAheadDays} lead time. Weddings, Christmas, and long weekends fill quickly — book early. Pickup is available from Panaji; we also deliver across Goa with a fee based on distance.`,
  ],
  subsections: [
    {
      title: "Popular cake types we make in Goa",
      paragraphs: [
        "Birthday cakes with fondant toppers, number cakes, and theme designs (superheroes, Barbie, Cocomelon, football). Wedding and engagement tiers with buttercream florals. Haldi and welcome cakes with marigold-inspired colours. Bento and tin cakes for intimate celebrations. Chocolate slices, cupcakes, and cookie boxes for office parties.",
      ],
    },
    {
      title: "Why customers choose Sweet Bites",
      paragraphs: [
        "Handcrafted by one baker who cares about your story — not a factory line. Transparent quotes on WhatsApp before you confirm. Real photos of past work at sweetbites.me/creations so you know exactly what style to expect. Flexible customisation: colours, flavours, size, and toppers adapted to your event.",
      ],
    },
  ],
  listTitle: "Areas we deliver custom cakes in Goa",
  listItems: deliveryAreas,
  faqs: [
    {
      question: "How do I order from sweetbites.me?",
      answer: `Visit ${domain}, pick a design you like, and tap Order on WhatsApp — or message ${site.phone} directly with your date, guest count, and theme. We confirm availability and send a quote.`,
    },
    {
      question: "What is Sweet Bites WhatsApp number?",
      answer: `Our WhatsApp order line is ${site.phone} (${site.phoneRaw}). Save the number and send your occasion, date, and reference photos anytime.`,
    },
    {
      question: "Does Sweet Bites deliver outside Panaji?",
      answer:
        "Yes. We deliver across North Goa (Mapusa, Calangute, Candolim, Baga) and South Goa (Margao, Vasco) as well as pickup in Panaji. Delivery fee is shared in your quote.",
    },
  ],
};

export const creationsSeo: SeoPageContent = {
  heading: "Custom cake gallery Goa — 160+ real designs at sweetbites.me",
  paragraphs: [
    `This gallery at ${domain}/creations is Muskan's full portfolio: birthday cakes, wedding and haldi designs, kids character cakes, bento tins, chocolate slices, anniversary hearts, and seasonal specials — every image from a real order in Goa.`,
    "Use filters to narrow by occasion (birthday, wedding, kids), format (bento, tin, slice), colour, or designs that include a process reel. Each card links to a full story with more photos, optional video, and a one-tap WhatsApp button to order a similar cake.",
    `Not sure which design fits? Message ${wa} with two or three favourites and your event details. We'll suggest sizes, flavours, and pricing. You can also combine elements — for example, colours from one cake and the topper style from another.`,
    "All prices are shared on request because every order differs by size, detail level, and delivery distance. Our 6-inch cakes typically start around ₹1,200 for 6–8 guests; tiered and fondant-heavy designs are quoted individually.",
  ],
  subsections: [
    {
      title: "Birthday cakes in Goa",
      paragraphs: [
        "From pastel buttercream and floral bows to superhero and cartoon character cakes — our birthday section is one of the largest on sweetbites.me. Number cakes, rainbow layers, and chocolate drip designs are customer favourites in Panaji and beach areas.",
      ],
    },
    {
      title: "Wedding, haldi & anniversary cakes",
      paragraphs: [
        "Elegant tiers, welcome boards, haldi yellow themes, and heart-shaped anniversary cakes. We coordinate timing with your venue or planner and recommend tasting/consultation via WhatsApp before your wedding week.",
      ],
    },
    {
      title: "Bento cakes & small celebrations",
      paragraphs: [
        "Personal-sized bento boxes and tin cakes are perfect for couples, proposals, and intimate gatherings. They photograph beautifully for Instagram and cost less than large tiered cakes while still feeling premium.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I order a cake that looks like one in the gallery?",
      answer:
        "Yes. Open any creation, tap Order on WhatsApp, and we'll use that design as your reference. Colours, wording, and size can all be changed.",
    },
    {
      question: "How many cake designs does Sweet Bites have?",
      answer:
        "Over 160 creations and growing — every folder is a real cake we've made for customers in Goa, updated on sweetbites.me.",
    },
    {
      question: "Do you make custom cakes not shown in the gallery?",
      answer: `Absolutely. Send Pinterest or Instagram references to ${site.phone} on WhatsApp. If we can execute it with our style, we'll quote it fairly.`,
    },
  ],
};

export const reelsSeo: SeoPageContent = {
  heading: "Cake decorating reels — Behind the Bite at Sweet Bites Goa",
  paragraphs: [
    `Our reels page shows how custom cakes are actually made in Muskan's Goa kitchen: stacking sponges, crumb coating, piping buttercream flowers, placing fondant toppers, and the moment before delivery. These are not stock videos — they are real orders from sweetbites.me customers.`,
    "Hover or tap a reel to preview. Reels tied to a creation open that cake's full gallery so you can see still photos and order the same style on WhatsApp. Standalone studio reels show techniques you might want on your own cake.",
    `Couples and parents often share our reels when explaining their vision to family. If you see a technique you love — rosettes, ganache drip, gold leaf, or a particular colour palette — screenshot it and send to ${wa} with your date.`,
    "Video helps you trust the finish before you book. Combined with our written reviews and 160+ photo gallery, you get a complete picture of Sweet Bites quality before paying a deposit.",
  ],
  subsections: [
    {
      title: "Why we share cake process videos",
      paragraphs: [
        "Custom cake buyers want proof of skill, not just pretty photos. Reels show steady hands, clean piping, and how structures are supported — especially important for tiered wedding cakes and heavy fondant toppers.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I request a cake exactly like a reel?",
      answer:
        "Yes — note the reel or creation name on WhatsApp. We'll confirm if your date is available and quote based on size and complexity.",
    },
    {
      question: "Where can I order after watching a reel?",
      answer: `Message ${site.phone} on WhatsApp or visit ${domain}/order for flavour and size guidance before you send your reference.`,
    },
  ],
};

export const orderSeo: SeoPageContent = {
  heading: "Order custom cakes in Goa — WhatsApp booking at sweetbites.me",
  paragraphs: [
    `Sweet Bites takes all cake orders on ${wa} — no online payment forms. Message ${site.phone} with your occasion, event date, guest count, delivery area in Goa, preferred flavours, and photos from our gallery or your own references.`,
    "Muskan replies with availability, recommended size, and a clear quote (cake + delivery if applicable). Once you approve, we schedule baking and share updates. Payment terms are confirmed on WhatsApp — typically advance for large wedding orders.",
    `Browse flavours below — Belgian chocolate, Alphonso mango, red velvet, vanilla, coffee mocha, coconut pineapple, strawberry cream, and salted caramel. Eggless sponges available. Sizes from 6 inch (6–8 guests, from ₹1,200) to custom multi-tier cakes for 25+ guests.`,
    `Lead time: ${site.bookAheadDays} for most custom designs. Simple buttercream birthdays may be possible sooner — ask honestly on WhatsApp. We serve Panaji pickup and delivery across Goa; see our contact page for studio hours.`,
  ],
  subsections: [
    {
      title: "What to include in your WhatsApp message",
      paragraphs: [
        "1) Occasion — birthday, wedding, haldi, etc. 2) Date and time you need the cake. 3) Number of guests or desired size. 4) Theme, colours, name/age. 5) Reference link from sweetbites.me or an image. 6) Pickup or delivery address in Goa.",
      ],
    },
    {
      title: "Pricing & deposits",
      paragraphs: [
        "Every cake is quoted individually. Factors include size, fondant vs buttercream, figurines, delivery distance, and peak dates. We'll never surprise you — the WhatsApp quote is what we stand by unless you request changes.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the WhatsApp number for Sweet Bites orders?",
      answer: `Order on WhatsApp: ${site.phone} (${site.phoneRaw}). This is the only booking channel for cakes at ${domain}.`,
    },
    {
      question: "Can I order a cake for tomorrow?",
      answer:
        "Sometimes, for simpler designs if the kitchen has capacity — message us immediately. Complex fondant or tiered cakes need several days' notice.",
    },
    {
      question: "Do you offer eggless cakes in Goa?",
      answer:
        "Yes. Mention eggless when you WhatsApp and we'll suggest suitable flavours and sponges.",
    },
  ],
};

export const contactSeo: SeoPageContent = {
  heading: "Contact Sweet Bites Goa — sweetbites.me | WhatsApp orders",
  paragraphs: [
    `${site.name} is based in Panaji, North Goa. Our website is ${domain} — browse cakes online anytime, but place orders exclusively via ${wa} at ${site.phone}.`,
    `Studio hours: ${site.hours}. Closed Mondays. Visits are by appointment so Muskan can focus on active orders — message before you come. For directions, use the map on this page or search Sweet Bites Panaji on Google Maps.`,
    `Follow ${site.instagramHandle} on Instagram for new creations, seasonal specials (like Alphonso mango season), and reel previews. Instagram DMs are fine for questions, but WhatsApp is fastest for quotes and booking.`,
    "We do not take cake orders by email. Phone calls are welcome for quick questions; for photos and references, WhatsApp is essential.",
  ],
  listTitle: "Cake delivery areas from Panaji",
  listItems: deliveryAreas,
  faqs: [
    {
      question: "What is Sweet Bites phone number?",
      answer: `Call or WhatsApp ${site.phone}. For cake orders, WhatsApp is preferred so we can see your reference images.`,
    },
    {
      question: "What is the official Sweet Bites website?",
      answer: `Our official site is https://${domain} — the creations gallery, reels, and order guide are all here.`,
    },
    {
      question: "Can I visit the bakery without ordering?",
      answer:
        "Message on WhatsApp first to confirm Muskan is available. We operate by appointment to maintain quality on scheduled orders.",
    },
  ],
};

export const aboutSeo: SeoPageContent = {
  heading: "About Muskan & Sweet Bites — custom cake baker in Goa",
  paragraphs: [
    `Sweet Bites (${domain}) is Muskan's home bakery in Goa — born from decorating cakes for friends and family and grown through word of mouth across weddings, birthdays, and festive celebrations.`,
    "Unlike commercial cake factories, every Sweet Bites order is designed and decorated by Muskan herself: one conversation on WhatsApp, one sketch or reference board, one kitchen schedule, one delivery or pickup. That focus is why customers in Panaji, Margao, and resort areas return for their next milestone.",
    "Ingredients matter: real butter, fresh fruit, quality chocolate, local Alphonso mango in season, and Goan cashew in select recipes. We do not use shortcuts that compromise taste or stability on a hot Goan afternoon.",
    `Today the portfolio at sweetbites.me holds 160+ documented creations — proof of range from kids' character cakes to elegant wedding florals. New designs are added after real orders, not copied from catalogues.`,
  ],
  subsections: [
    {
      title: "Muskan's approach to custom cake design",
      paragraphs: [
        "Listen first — understand the person being celebrated, not just the Pinterest board. Adapt designs to Goa heat and travel time (sturdy structures, sensible fillings). Communicate clearly on WhatsApp about what is possible by your date and budget.",
      ],
    },
    {
      title: "Order your next celebration cake",
      paragraphs: [
        `Ready to start? Browse /creations on ${domain}, save what you love, and message ${site.phone} on WhatsApp. We'll reply with warmth, honesty, and a quote you can trust.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Who is the baker behind Sweet Bites?",
      answer:
        "Muskan is the founder and sole decorator for custom orders — Sweet Bites by Muskan is the brand customers know in Goa.",
    },
    {
      question: "Where can I see Sweet Bites cake work?",
      answer: `Visit ${domain}/creations for photos and ${domain}/reels for process videos — then WhatsApp ${site.phone} to book.`,
    },
  ],
};

export function getCreationSeoContent(creation: {
  title: string;
  slug: string;
  occasion: string[];
  format: string[];
  aesthetic: string[];
  tags: string[];
}): SeoPageContent {
  const occ =
    creation.occasion.length > 0
      ? creation.occasion.map((o) => o.replace(/-/g, " ")).join(", ")
      : "celebration";
  const fmt =
    creation.format.length > 0
      ? creation.format.join(", ")
      : "custom";
  const look =
    creation.aesthetic.length > 0
      ? creation.aesthetic.join(", ")
      : "hand-piped";

  return {
    heading: `Order ${creation.title} — custom ${occ} cake in Goa`,
    paragraphs: [
      `The "${creation.title}" is a ${look} ${fmt} cake for ${occ} events, made by Muskan at Sweet Bites (${domain}). Photos on this page are from a real customer order — your version can match closely or be personalised with different colours, a name plaque, age numbers, or serving size.`,
      `Sweet Bites serves Goa-wide: Panaji pickup, delivery to Margao, Mapusa, Calangute, Candolim, Vasco, and surrounding areas. We bake eggless sponges on request and offer flavours including chocolate, mango, red velvet, and vanilla.`,
      `To book this design, tap Order on WhatsApp (${site.phone}) and mention "${creation.title}" or link sweetbites.me/creations/${creation.slug}. Include your event date, guest count, and any changes — we'll confirm availability and send a quote, usually within 24 hours on business days.`,
      `Recommended lead time is ${site.bookAheadDays} for detailed buttercream and fondant work. Rush dates may work for simpler finishes — ask on WhatsApp and we'll give an honest yes or no.`,
      `Why order from Sweet Bites? 160+ proven designs online, process reels showing real skill, transparent WhatsApp quotes, and a baker who treats your celebration personally — not as a production line ticket.`,
    ],
    subsections: [
      {
        title: `Similar ${occ} cakes you may like`,
        paragraphs: [
          `Browse more ${occ} designs at sweetbites.me/creations${creation.occasion[0] ? `?occasion=${creation.occasion[0]}` : ""}. Filter by colour or format to compare options before you message ${site.phone}.`,
        ],
      },
    ],
    faqs: [
      {
        question: `How much does a ${creation.title} cake cost?`,
        answer:
          "Price depends on size, customisation, and delivery. WhatsApp us your guest count and date for an exact quote — 6-inch cakes often start around ₹1,200; larger or fondant designs cost more.",
      },
      {
        question: `Can I change colours on the ${creation.title} design?`,
        answer:
          "Yes. Share your palette on WhatsApp — we adapt the same layout to your theme regularly.",
      },
      {
        question: "How do I order this cake from Sweet Bites?",
        answer: `Message ${site.phone} on WhatsApp or use the Order button on this page. Official website: ${domain}.`,
      },
    ],
  };
}

/** @deprecated use getCreationSeoContent */
export function getCreationSeoParagraphs(creation: Parameters<typeof getCreationSeoContent>[0]): string[] {
  return getCreationSeoContent(creation).paragraphs;
}

/** Legacy exports for pages still importing named blocks */
export const homeSeoIntro = { heading: homeSeo.heading, paragraphs: homeSeo.paragraphs };
