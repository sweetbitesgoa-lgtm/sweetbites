export const site = {
  name: "Sweet Bites",
  tagline: "By Muskan",
  domain: "sweetbites.me",
  url: "https://sweetbites.me",
  location: "Goa, India",
  whatsapp: "917888042837",
  instagram: "https://www.instagram.com/sweet_bites_by_muskan/",
  instagramHandle: "@sweet_bites_by_muskan",
  email: "hello@sweetbites.me",
  phone: "+91 78880 42837",
  phoneRaw: "7888042837",
  address: "Panaji, North Goa, India",
  hours: "Tue – Sun: 10:00 AM – 7:00 PM",
  mapsUrl: "https://maps.google.com/?q=Panaji+Goa+Sweet+Bites",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.589123!2d73.827!3d15.4909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPanaji%2C%20Goa!5e0!3m2!1sen!2sin!4v1",
  stats: { celebrations: 500, rating: 4.9, reviewCount: 120 },
  bookAheadDays: "5–7 days",
} as const;

export const deliveryAreas = [
  "Panaji & Taleigao",
  "Margao & South Goa",
  "Mapusa & North Goa",
  "Calangute, Candolim & Baga",
  "Vasco & Mormugao",
  "Ponda & interior villages (on request)",
] as const;

export const seasonalBanner = {
  active: true,
  emoji: "🥭",
  message:
    "Mango season specials — Alphonso layers available March through June",
  ctaHref: "/order",
  ctaLabel: "See flavours",
} as const;

export const localIngredients = [
  "Alphonso mango",
  "Goan cashew",
  "Fresh coconut",
  "Local farm eggs",
];

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
      "Yes! Pickup from Panaji and delivery across North and South Goa including Margao, Mapusa, Calangute, and Candolim. Delivery fee depends on distance.",
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
      "We're based in Panaji, North Goa. Studio visits are by appointment Tuesday–Sunday. Orders are placed via WhatsApp at +91 78880 42837.",
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
  { href: "/order", label: "Order" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
