export const site = {
  name: "Sweet Bites",
  tagline: "By Muskan",
  logo: "/images/logo.png",
  domain: "sweetbites.me",
  url: "https://sweetbites.me",
  location: "Goa, India",
  whatsapp: "917888042837",
  instagram: "https://www.instagram.com/sweet_bites_by_muskan/",
  instagramHandle: "@sweet_bites_by_muskan",
  email: "hello@sweetbites.me",
  phone: "+91 78880 42837",
  phoneRaw: "7888042837",
  address: "Velim, South Goa, India",
  hours: "Tue – Sun: 10:00 AM – 7:00 PM",
  mapsUrl: "https://maps.google.com/?q=Velim+Goa+Sweet+Bites",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Velim,+South+Goa,+India&z=14&hl=en&output=embed",
  stats: { celebrations: 500, rating: 4.9, reviewCount: 120 },
  bookAheadDays: "5–7 days",
  /** Kitchen location — use in contact/maps; hero & marketing lead with Goa-wide reach */
  studioCity: "Velim",
  /** Set when Google Business Profile is live — enables review link in UI */
  googleBusinessUrl: null as string | null,
} as const;

export const seasonalBanner = {
  enabled: true,
  title: "Weekends & wedding dates fill fast",
  message:
    "Book custom cakes 5–7 days ahead (longer for tiers & fondant themes). Message on WhatsApp to check your date.",
  ctaLabel: "Check availability",
} as const;

/** Short labels for hero marquee & reach messaging */
export const goaReach = {
  eyebrow: "Serving all of Goa",
  tagline:
    "North Goa, South Goa, beaches & villages — custom cakes delivered or ready for pickup.",
  heroTitle: "Custom cakes in Goa for every occasion of yours",
  heroLead:
    "Birthday, wedding & bento cakes hand-crafted by Muskan — from Calangute and Mapusa to Margao, Vasco, and beyond.",
} as const;

/** Major towns & beaches — homepage tags, order page, SEO lists */
export const deliveryAreas = [
  "Velim",
  "Panaji",
  "Taleigao",
  "Margao",
  "Mapusa",
  "Calangute",
  "Candolim",
  "Baga",
  "Vasco",
  "Ponda",
  "Anjuna",
  "Colva",
] as const;

export const orderSteps = [
  {
    title: "Share your vision",
    description:
      "Tell us the occasion, theme, flavours, and how many guests you're celebrating with.",
  },
  {
    title: "Design & quote",
    description:
      "Muskan sketches your cake concept and sends a custom quote within 24 hours on WhatsApp.",
  },
  {
    title: "Bake with love",
    description:
      "Fresh ingredients, hand-decorated details, and quality checks before delivery.",
  },
  {
    title: "Celebrate",
    description:
      "Pickup from our Goa kitchen or doorstep delivery across North & South Goa.",
  },
];

export const processSteps = [
  {
    title: "Theme & sketch",
    description: "We discuss your vision and plan the design.",
  },
  {
    title: "Bake fresh",
    description: "Layers baked with premium ingredients.",
  },
  {
    title: "Hand-decorate",
    description: "Muskan pipes, paints, and perfects every detail.",
  },
  {
    title: "Your celebration",
    description: "Delivery or pickup — ready to wow your guests.",
  },
];

export const flavors = [
  "Belgian Chocolate",
  "Mango Alphonso",
  "Red Velvet",
  "Vanilla Bean",
  "Coffee Mocha",
  "Coconut & Pineapple",
  "Strawberry Cream",
  "Salted Caramel",
];

export const sizes = [
  { label: "6 inch", serves: "6–8 guests", from: "₹1,200" },
  { label: "8 inch", serves: "10–14 guests", from: "₹1,800" },
  { label: "10 inch", serves: "18–22 guests", from: "₹2,500" },
  { label: "Custom tier", serves: "25+ guests", from: "Quote" },
];

export const trustPillars = [
  {
    title: "Handcrafted by Muskan",
    description: "One baker designs and decorates every order — no factory line.",
    icon: "✨",
  },
  {
    title: "Eggless on request",
    description: "Tell us on WhatsApp and we'll suggest the best flavours.",
    icon: "🌿",
  },
  {
    title: "160+ real designs",
    description: "Every photo is a cake we've actually made for Goa customers.",
    icon: "📸",
  },
  {
    title: "Delivery across Goa",
    description: `Pickup in ${site.studioCity} · home delivery North & South Goa.`,
    icon: "🚗",
  },
] as const;

export const meetMuskan = {
  eyebrow: "Meet the baker",
  title: "Muskan brings your celebration to life",
  paragraphs: [
    "Sweet Bites started in a home kitchen in Goa — decorating cakes for friends, then weddings, birthdays, and beach celebrations across the state.",
    "Every order is still one conversation on WhatsApp, one sketch, and one schedule in Muskan's kitchen. Browse the gallery, share your idea, and she'll reply with an honest quote.",
  ],
} as const;

export const testimonials = [
  {
    name: "Priya S.",
    location: "Panaji",
    text: "Muskan created the most beautiful wedding cake — guests couldn't stop taking photos. Every bite tasted as good as it looked!",
    rating: 5,
  },
  {
    name: "Rohan M.",
    location: "Margao",
    text: "Ordered a superhero cake for my son's 7th birthday. The details were incredible and delivery was right on time.",
    rating: 5,
  },
  {
    name: "Ananya K.",
    location: "Calangute",
    text: "Sweet Bites is our go-to for office celebrations. Professional, creative, and always fresh. Highly recommend!",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How do I order a cake from Sweet Bites?",
    answer:
      "Message us on WhatsApp at +91 78880 42837 or visit sweetbites.me to browse designs. Share your date, guest count, theme, and reference photos — we reply with a custom quote.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend 5–7 days for custom designs. Rush orders may be possible — WhatsApp us with your date and we'll confirm availability honestly.",
  },
  {
    question: "Do you deliver across Goa?",
    answer:
      "Yes! We deliver across North and South Goa — Margao, Mapusa, Calangute, Candolim, Vasco, beach areas, and more. Pickup is available from our Velim kitchen. Delivery fee depends on distance.",
  },
  {
    question: "Do you make eggless cakes?",
    answer:
      "Absolutely. We offer eggless sponges and many flavours. Mention your preference on WhatsApp and we'll suggest the best options.",
  },
  {
    question: "What is the minimum order price?",
    answer:
      "Our 6-inch cakes start around ₹1,200 and serve 6–8 guests. Tiered wedding cakes and elaborate fondant designs are quoted individually.",
  },
  {
    question: "Can I send a reference photo from Pinterest or Instagram?",
    answer:
      "Yes! Share reference images on WhatsApp along with your colour palette, guest count, and date. We'll adapt the design for your celebration.",
  },
  {
    question: "Where is Sweet Bites located?",
    answer:
      "Our kitchen is in Velim, South Goa — we serve customers across the state. Studio visits are by appointment Tuesday–Sunday. Orders are placed via WhatsApp at +91 78880 42837.",
  },
];

export const showcaseSection = {
  title: "Every slice tells your story",
  subtitle:
    "From intimate gatherings to grand Goan weddings — crafted with local flavours and heart.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/creations", label: "Creations" },
  { href: "/reels", label: "Reels" },
  { href: "/order", label: "Book" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
