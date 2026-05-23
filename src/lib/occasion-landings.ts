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
  introHeading: string;
  intro: string[];
  pullQuote: { text: string; context?: string };
  whatsappChecklist: string[];
  highlights: { title: string; text: string }[];
  ideasSectionTitle?: string;
  ideasSectionLead?: string;
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
      lead: `Your wedding cake should feel like the celebration — not a stressful last-minute errand. Muskan builds tiered reception cakes from our ${site.studioCity} kitchen, plans delivery around your venue, and keeps you in the loop on WhatsApp until the cake is on the table.`,
      image: "/images/wedding-cake/659772208_18092845286170730_8159590204106277210_n..webp",
      imageAlt: "Wedding cake Goa — tiered white reception cake by Sweet Bites",
    },
    introHeading: "A wedding cake that survives Goa — and your guest list",
    intro: [
      "Most couples do not need a cake that looks good only in a studio photo. You need tiers that stay straight through photos, buttercream that holds in warm halls, and a baker who will tell you honestly if your Pinterest board needs one less fondant flower for a beach afternoon.",
      "Every wedding cake on sweetbites.me is from a real order Muskan has delivered — Panaji halls, Calangute resorts, Margao home receptions, and everything in between. Send your date, guest count, and a venue photo; you get a clear quote, not a vague maybe.",
      "Eggless sponges, mango in season, gold accents, fresh florals — we match flavour to your family and structure to your timeline. Complex fondant and tall tiers need more lead time; we say that upfront so your wedding week stays calm.",
    ],
    pullQuote: {
      text: "I would rather tell you to simplify one detail than promise a tier that wilts before your first dance. Your photos matter more than my portfolio.",
      context: "Muskan on wedding delivery in Goa",
    },
    whatsappChecklist: [
      "Wedding or reception date and approximate cutting time",
      "Guest count (or how many tiers you think you need)",
      "Venue name and town — plus a photo of where the cake table will sit",
      "Eggless or flavour preferences for mixed families",
      "One or two gallery links you love from sweetbites.me",
    ],
    highlights: [
      {
        title: "Built for real venues",
        text: "Dowelling, chilled transport, and handover notes — read our wedding case study for how a three-tier survived a venue change.",
      },
      {
        title: "Flavours guests remember",
        text: "Vanilla, chocolate, mango when in season, pistachio, and eggless sponges that still taste celebratory.",
      },
      {
        title: "Honest lead times",
        text: `Book ${site.bookAheadDays} minimum; peak Saturdays and full fondant designs fill earlier — we reply honestly if your date is tight.`,
      },
    ],
    ideasSectionTitle: "Three starting points couples love",
    ideasSectionLead: "Tap a card, screenshot what you like, and send it on WhatsApp — Muskan will adapt size and style to your guest count.",
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
    galleryTitle: "Wedding cakes families have cut in Goa",
    galleryLead: "Scroll, tap a design, and send Muskan the link — she quotes tiers, flavours, and delivery in one WhatsApp thread.",
    ctaTitle: "Let’s plan your wedding cake",
    ctaLead: "One message with your date and venue photo is enough to start. Muskan replies from Velim with sizes, flavours, and delivery timing you can share with family.",
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
      lead: "Turning six, turning forty, or surprising Mum at home — Muskan makes birthday cakes that look like your reference photo and arrive upright. Real gallery shots, straight WhatsApp quotes, delivery from Velim to every corner of Goa.",
      image:
        "/images/golden-cream-birthday-cake/624880407_18052417967703847_5140043511432543654_n..webp",
      imageAlt: "Birthday cake Goa — golden cream celebration cake by Sweet Bites",
    },
    introHeading: "Birthdays deserve a cake you are proud to carry in",
    intro: [
      "You should not have to guess the price or pray the writing is spelled right. Pick a cake from our gallery, tell Muskan the date and how many people you are feeding, and get a quote that includes delivery to your society hall, beach villa, or office — or pickup from Velim if you prefer.",
      "Buttercream rounds with fresh florals, gold number toppers, chocolate syrup finishes, eggless sponges for mixed families — we match the vibe you describe, not a generic catalogue photo from another city.",
      "Character cakes and big sculpted themes for kids need longer lead times; adult milestones and elegant buttercream often fit in a shorter window. We tell you which bucket your idea falls into before you pay a deposit.",
    ],
    pullQuote: {
      text: "Send me the cake you liked on our site and your party date — I will tell you what is realistic for Goa heat and your timeline, not what looks good on Instagram abroad.",
      context: "Muskan on birthday orders",
    },
    whatsappChecklist: [
      "Birthday date and time you need the cake ready",
      "Age or milestone (e.g. 40th, surprise for Mum)",
      "Rough guest count or cake size you have in mind",
      "Delivery town or pickup from Velim",
      "Gallery link or screenshot of a design you love",
    ],
    highlights: [
      {
        title: "Your colours, your words",
        text: "Numbers, florals, gold leaf, and handwriting-style names — we confirm spelling on WhatsApp before piping.",
      },
      {
        title: "Right size, no waste",
        text: "From a bento beside the main cake to tiers for thirty guests — Muskan sizes from your headcount.",
      },
      {
        title: "Kids themes = more time",
        text: "Spiderman, Barbie, unicorns — stunning, but a different schedule. See our kids birthday guide when little ones are involved.",
      },
    ],
    ideasSectionTitle: "Popular birthday paths",
    ideasSectionLead: "Elegant buttercream, a tin surprise, or a ready-made flavour when the oven has room — choose what fits your party.",
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
    galleryTitle: "Birthday cakes baked for Goa parties",
    galleryLead: "Every photo is a real order. Tap one, send it to Muskan, and ask how she would adapt it for your date and guest count.",
    ctaTitle: "Make their birthday unforgettable",
    ctaLead: "WhatsApp Muskan with the date, who you are celebrating, and one cake you love from the gallery — she handles the rest.",
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
      lead: "Marigold yellow, soft gold, and flavours elders actually enjoy — Muskan makes haldi cakes that glow in morning light and stay dignified when turmeric, sun, and happy chaos arrive together.",
      image: "/images/haldi-design-cake/498586910_18060535466170730_970917338585622900_n..webp",
      imageAlt: "Haldi cake Goa — yellow marigold-style ceremony cake by Sweet Bites",
    },
    introHeading: "Your haldi cake should feel like the ceremony — not an afterthought",
    intro: [
      "Haldi is not a birthday with yellow icing. It is marigold tones, gentle writing, often eggless sponge for mixed families, and a cake table that might sit on a lawn while games happen nearby. Muskan plans colour and timing for that reality.",
      "Many families book haldi and reception in one WhatsApp thread — different dates, different palettes, two clear quotes. Share photos of where the cake will sit; we have moved tables under shade the night before when outdoor light was too harsh.",
      "Cardamom-vanilla, mango in season, pistachio — flavours that pair with Indian sweets on the same table. We keep toppers simple when turmeric hands are close, so your photos still look festive without fondant disasters.",
    ],
    pullQuote: {
      text: "Yellow buttercream that looks perfect at 8 AM can look tired by noon outdoors — I deepen marigold tones slightly so your haldi photos still pop.",
      context: "Muskan on ceremony timing",
    },
    whatsappChecklist: [
      "Haldi date and approximate time the cake should be ready",
      "Home, resort, or lawn — plus a photo of the cake table area",
      "Guest count and eggless requirements if any",
      "Whether you are also booking a reception tier (same thread is fine)",
      "A yellow design you like from our haldi gallery",
    ],
    highlights: [
      {
        title: "Marigold, not neon",
        text: "Ceremony yellows and gold piping — palettes built for photos with garlands and traditional dress.",
      },
      {
        title: "Morning-smart delivery",
        text: "Outdoor haldis get earlier slots and simpler toppers; we say no to details that wilt before family photos.",
      },
      {
        title: "Wedding + haldi together",
        text: "One honest conversation, two dates, two quotes — flavours can match across both celebrations.",
      },
    ],
    ideasSectionTitle: "Plan haldi alongside your wedding",
    ideasSectionLead: "Start with our marigold reference cake, then line up the reception tier in the same WhatsApp chat if you like.",
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
    galleryTitle: "Haldi cakes that photographed beautifully",
    galleryLead: "Yellow ceremony designs from real Goan homes and resorts — tap to open, then send Muskan your favourite.",
    ctaTitle: "Book your haldi cake with confidence",
    ctaLead: "Send the haldi date, a venue photo, and guest count. Muskan replies with colour notes, flavour ideas, and delivery timing before turmeric games begin.",
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
      lead: "When your child says “I want it exactly like the video,” Muskan is the baker parents call — Spiderman, unicorns, Barbie castles, and bright buttercream that survives the party and the drive across Goa.",
      image: "/images/spiderman-cake/619485602_17929184628193772_648480827065862935_n..webp",
      imageAlt: "Kids birthday cake Goa — Spiderman character cake by Sweet Bites",
    },
    introHeading: "The cake your child points at — built to survive the party",
    intro: [
      "Kids birthday messages usually arrive with a screenshot and wide eyes: make it look like this. Muskan answers with what is achievable in your week — proportional characters, colours that hold in Goan humidity, and delivery that does not tip the webs or turrets.",
      "Read our case studies for Spiderman, Barbie castle, and unicorn before you message. Parents who do get faster quotes and fewer surprises on structure and lead time.",
      "Pool parties, society halls, beach villas — share venue photos early. Eggless options for classmates are common; mention them on line one. A bento for school the next day beside the main cake is a favourite add-on.",
    ],
    pullQuote: {
      text: "I will not promise a castle with twelve fragile turrets for next Saturday — I will promise a design your child recognises and a cake that arrives standing up.",
      context: "Muskan on character cakes",
    },
    whatsappChecklist: [
      "Child’s age and theme (Spiderman, unicorn, Barbie, football, etc.)",
      "Party date and whether it is a Saturday — those fill first",
      "Venue town and a photo if it is outdoors or poolside",
      "Guest count and eggless needs for classmates",
      "Screenshot from our gallery or case study you want to match",
    ],
    highlights: [
      {
        title: "Proof, not promises",
        text: "Case studies show how Spiderman, Barbie castle, and unicorn cakes were actually built and delivered.",
      },
      {
        title: "Delivery that respects structure",
        text: "Upright boxes, shaded handover, kitchen drop-off at halls — we plan around kids and crowds.",
      },
      {
        title: "Main cake + classmate bento",
        text: "Big wow cake for the party, small tin for school — one WhatsApp thread, one oven plan.",
      },
    ],
    ideasSectionTitle: "Themes kids ask for every week",
    ideasSectionLead: "Open a gallery or case study, screenshot it, and ask Muskan how she would adapt it for your date.",
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
    galleryTitle: "Kids cakes that made it to the party table",
    galleryLead: "Character and theme cakes from real Goa birthdays — tap, save, and send on WhatsApp.",
    ctaTitle: "Be the parent with the cake they dreamed of",
    ctaLead: "Message Muskan with age, theme, date, and town. She replies with lead time, structure notes, and a quote you can approve before the week gets busy.",
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
      lead: "Five years or fifty — Muskan makes anniversary cakes that feel intimate, photograph beautifully by candlelight, and arrive as a surprise your partner did not see coming.",
      image:
        "/images/cream-heart-anniversery-cake/482668294_18053699921170730_1765706686871389592_n..webp",
      imageAlt:
        "Anniversary cake Goa — cream heart celebration cake by Sweet Bites Muskan",
    },
    introHeading: "Celebrate the years with a cake that feels personal",
    intro: [
      "Anniversary cakes should whisper romance, not shout generic red hearts. Peach cream, soft gold, chocolate, fresh florals, and names spelled exactly as you send them — Muskan keeps writing short and readable so it still looks elegant in warm dining rooms.",
      "Dinner for two on the balcony, family lunch in Margao, resort surprise in Candolim — we deliver from Velim with timing you agree on WhatsApp, including lobby handoffs when only one of you knows.",
      "A full heart-shaped cake for the table, or a bento tin when you want something small and secret — eggless options when you mention them early. Years together deserve better than a last-minute supermarket round.",
    ],
    pullQuote: {
      text: "For anniversaries I keep messages short on the cake — your names and years should read clearly in a photo, not disappear in swirly script.",
      context: "Muskan on couple cakes",
    },
    whatsappChecklist: [
      "Anniversary date and time you want the cake delivered or ready",
      "Names and years exactly as they should appear on the cake",
      "Dinner for two vs family gathering — guest count helps size",
      "Delivery address or surprise handoff contact in Goa",
      "Eggless or flavour preference (chocolate, peach cream, etc.)",
    ],
    highlights: [
      {
        title: "Names that read in photos",
        text: "We confirm spelling and size on WhatsApp — no awkward corrections at the table.",
      },
      {
        title: "Hearts, gold, soft florals",
        text: "Romantic palettes from our gallery — adapted to your venue and portion size.",
      },
      {
        title: "Surprises welcome",
        text: "Bento tins for two, lobby delivery, early-morning handoffs — tell us the plan.",
      },
    ],
    ideasSectionTitle: "Romantic sizes for every plan",
    ideasSectionLead: "Heart cake for the family table, or a bento when it is just the two of you.",
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
    galleryTitle: "Anniversary cakes couples have shared",
    galleryLead: "Hearts, gold, and cream finishes from real orders — pick one and tell Muskan your years together.",
    ctaTitle: "Say it with a cake this year",
    ctaLead: "WhatsApp your date, names, years, and Goa town. Muskan sends a quote and keeps the surprise on track if only you are in the thread.",
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
      lead: "Tiny tin, big emotion — Muskan’s bento cakes are made for beach surprises, desk deliveries, anniversaries for two, and that second sweet beside the main birthday cake. Baked to order in Velim, never sitting on a shop shelf.",
      image: "/images/bento-cake/491142105_18057367328170730_7039415400764743136_n..webp",
      imageAlt: "Bento cake Goa — decorated tin cake by Sweet Bites Muskan",
    },
    introHeading: "Small cake, huge reaction — the bento way",
    intro: [
      "Bentos are for the moment you want photographed without feeding thirty people. A short message on top, two colours max, flavours you actually like — chocolate, coffee, blush buttercream — in a tin that travels upright like a tier cake, only smaller.",
      "Husbands messaging on Wednesday for Saturday anniversary, colleagues surprising someone at work, parents adding a classmate tin beside a Spiderman main cake — Muskan plans oven space once if you mention both orders in the same chat.",
      "Hand-painted detail and long messages do not belong on a four-inch surface; we guide you toward what looks clean and delivers on time. Eggless bentos are common — say so in your first line.",
    ],
    pullQuote: {
      text: "A bento is not a shrunken wedding cake — one clear message, two colours, and a tin that arrives upright. That is how you get the wow face in the photo.",
      context: "Muskan on bento orders",
    },
    whatsappChecklist: [
      "Date and time you need the bento (morning surprises need early delivery)",
      "Exact short message for the top — we confirm spelling",
      "Flavour and eggless yes/no",
      "Delivery town and address or Velim pickup",
      "Reference photo from our bento gallery",
    ],
    highlights: [
      {
        title: "Perfect portion",
        text: "One to six servings — celebration without a week of leftovers in the fridge.",
      },
      {
        title: "Surprise-ready",
        text: "Lobby handoffs, office timing, beach meet-ups — we coordinate on WhatsApp.",
      },
      {
        title: "Pairs with big cakes",
        text: `Simple bentos often fit ${site.bookAheadDays}; mention both dates if you are ordering a main cake too.`,
      },
    ],
    ideasSectionTitle: "Bento styles to copy on WhatsApp",
    ideasSectionLead: "Classic tin, birthday bright, or read the journal guide — then send one screenshot to Muskan.",
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
    galleryTitle: "Bento tins that made someone’s day",
    galleryLead: "Mini cakes from real orders — save your favourite and ask Muskan to match the vibe for your date.",
    ctaTitle: "Send a bento they will remember",
    ctaLead: "One WhatsApp with date, message, flavour, and town. Muskan quotes fast and tells you honestly if the design fits a bento canvas.",
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

