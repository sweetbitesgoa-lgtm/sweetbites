export type LocationOccasionCard = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type LocationServiceItem = {
  title: string;
  description: string;
  href: string;
};

export type LocationNearbyPlace = {
  name: string;
  detail: string;
  href?: string;
};

export type LocationTestimonial = {
  name: string;
  location: string;
  text: string;
  rating: number;
};

export type RichLocationUi = {
  occasionsTitle: string;
  orderLead: string;
  galleryTitle: string;
  faqTitle: string;
  nearbyTitle: string;
  quickBookIntro: string;
  visitLabel: string;
  heroImageAlt: string;
  heroSecondaryCta: { href: string; label: string };
  pickupCtaLabel: string;
  ctaTitle: string;
  ctaLead: string;
  stickyWhatsappLabel: string;
};

export type RichLocationContent = {
  slug: string;
  /** Display name for WhatsApp & headings — e.g. Panaji */
  placeName: string;
  isStudio: boolean;
  nearbySlugs: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    badge: string;
    title: string;
    lead: string;
    stats: { value: string; label: string }[];
  };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  services: {
    title: string;
    intro: string;
    items: LocationServiceItem[];
  };
  occasions: LocationOccasionCard[];
  serviceArea: {
    title: string;
    intro: string;
    places: LocationNearbyPlace[];
  };
  testimonials: {
    title: string;
    items: LocationTestimonial[];
  };
  pricing: {
    title: string;
    intro: string;
  };
  localSeo: {
    title: string;
    paragraphs: string[];
  };
  visit: {
    title: string;
    note: string;
    bullets: string[];
    showMap: boolean;
    showMapsLink?: boolean;
    studioLink?: { href: string; label: string };
  };
  faqs: { question: string; answer: string }[];
  ui: RichLocationUi;
};
