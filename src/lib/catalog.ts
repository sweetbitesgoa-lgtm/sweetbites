import catalogData from "@/data/catalog.json";

export type Creation = {
  slug: string;
  title: string;
  cover: string;
  images: string[];
  video?: string;
  tags: string[];
  occasion: string[];
  format: string[];
  aesthetic: string[];
  featured: boolean;
  description: string;
};

export type StandaloneReel = {
  src: string;
  slug?: string;
  title: string;
};

export type CatalogFilters = {
  occasions: string[];
  formats: string[];
  aesthetics: string[];
  colors: string[];
};

export type Catalog = {
  generatedAt: string;
  creations: Creation[];
  standaloneReels: StandaloneReel[];
  filters: CatalogFilters;
};

export type ReelItem = {
  id: string;
  src: string;
  title: string;
  creationSlug?: string;
  cover?: string;
};

const catalog = catalogData as Catalog;

export function getCatalog(): Catalog {
  return catalog;
}

export function getAllCreations(): Creation[] {
  return catalog.creations;
}

export function getFeaturedCreations(limit = 8): Creation[] {
  return catalog.creations.filter((c) => c.featured).slice(0, limit);
}

/** Up to `limit` unique cover/gallery URLs for location page hero rotation. */
export function getLocationHeroImages(limit = 10): string[] {
  const urls: string[] = [];
  const seen = new Set<string>();

  for (const creation of catalog.creations) {
    for (const src of [creation.cover, ...creation.images]) {
      if (!src || seen.has(src)) continue;
      seen.add(src);
      urls.push(src);
      if (urls.length >= limit) return urls;
    }
  }

  return urls;
}

export function getCreationBySlug(slug: string): Creation | undefined {
  return catalog.creations.find((c) => c.slug === slug);
}

function similarityScore(source: Creation, candidate: Creation): number {
  if (source.slug === candidate.slug) return -1;

  let score = 0;
  for (const o of source.occasion) {
    if (candidate.occasion.includes(o)) score += 10;
  }
  for (const f of source.format) {
    if (candidate.format.includes(f)) score += 8;
  }
  for (const a of source.aesthetic) {
    if (candidate.aesthetic.includes(a)) score += 6;
  }
  for (const t of source.tags) {
    if (candidate.tags.includes(t)) score += 3;
  }
  if (candidate.featured) score += 1;

  return score;
}

/** Label for the similar-creations section on detail pages */
export function getSimilarCreationsHeading(creation: Creation): string {
  const occasion = creation.occasion[0];
  if (occasion) {
    return `More ${occasion.replace(/-/g, " ")} cakes`;
  }
  const format = creation.format[0];
  if (format) {
    return `More ${format.replace(/-/g, " ")} cakes`;
  }
  return "Similar cakes you may like";
}

/** Related gallery picks — shared occasion/format/tags, featured preferred */
export function getSimilarCreations(creation: Creation, limit = 4): Creation[] {
  const scored = catalog.creations
    .filter((c) => c.slug !== creation.slug)
    .map((c) => ({ creation: c, score: similarityScore(creation, c) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.creation.title.localeCompare(b.creation.title));

  const picked: Creation[] = scored.map((x) => x.creation).slice(0, limit);

  if (picked.length >= limit) return picked;

  const seen = new Set([creation.slug, ...picked.map((c) => c.slug)]);

  const fillFeatured = catalog.creations.filter(
    (c) => c.featured && !seen.has(c.slug),
  );
  for (const c of fillFeatured) {
    if (picked.length >= limit) break;
    picked.push(c);
    seen.add(c.slug);
  }

  if (picked.length >= limit) return picked;

  for (const c of catalog.creations) {
    if (seen.has(c.slug)) continue;
    picked.push(c);
    if (picked.length >= limit) break;
  }

  return picked;
}

export function getAllSlugs(): string[] {
  return catalog.creations.map((c) => c.slug);
}

export function getCatalogFilters(): CatalogFilters {
  return catalog.filters;
}

export function filterCreations(params: {
  occasion?: string | null;
  format?: string | null;
  color?: string | null;
  hasVideo?: boolean;
  q?: string | null;
}): Creation[] {
  let list = catalog.creations;

  if (params.occasion) {
    list = list.filter((c) => c.occasion.includes(params.occasion!));
  }
  if (params.format) {
    list = list.filter((c) => c.format.includes(params.format!));
  }
  if (params.color) {
    list = list.filter((c) => c.tags.includes(params.color!));
  }
  if (params.hasVideo) {
    list = list.filter((c) => Boolean(c.video));
  }
  if (params.q?.trim()) {
    const q = params.q.trim().toLowerCase();
    list = list.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.slug.includes(q) ||
        c.tags.some((t) => t.includes(q)),
    );
  }

  return list;
}

export function getAllReels(): ReelItem[] {
  const fromCreations: ReelItem[] = catalog.creations
    .filter((c) => c.video)
    .map((c) => ({
      id: `creation-${c.slug}`,
      src: c.video!,
      title: c.title,
      creationSlug: c.slug,
      cover: c.cover,
    }));

  const standalone: ReelItem[] = catalog.standaloneReels.map((r, i) => ({
    id: `standalone-${i}`,
    src: r.src,
    title: r.title,
    cover: fromCreations[0]?.cover,
  }));

  return [...fromCreations, ...standalone];
}

export const celebrationPickers = [
  {
    id: "birthday",
    label: "Birthday",
    emoji: "🎂",
    description: "Confetti, numbers & themed toppers",
    href: "/birthday-cakes-goa",
    color: "bg-blush hover:bg-blush/80",
  },
  {
    id: "kids",
    label: "Kids & characters",
    emoji: "🦄",
    description: "Barbie, superheroes & fun shapes",
    href: "/kids-birthday-cakes-goa",
    color: "bg-sage-light hover:bg-sage-light/80",
  },
  {
    id: "wedding",
    label: "Wedding",
    emoji: "💍",
    description: "Tiers, welcome & reception cakes",
    href: "/wedding-cakes-goa",
    color: "bg-gold-light hover:bg-gold-light/80",
  },
  {
    id: "haldi",
    label: "Haldi",
    emoji: "🌼",
    description: "Yellow marigold ceremony cakes",
    href: "/haldi-cakes-goa",
    color: "bg-gold-light/70 hover:bg-gold-light/60",
  },
  {
    id: "bento",
    label: "Bento & tins",
    emoji: "🎁",
    description: "Personal-sized boxes & tin cakes",
    href: "/bento-cakes-goa",
    color: "bg-white hover:bg-cream ring-1 ring-cocoa/10",
  },
  {
    id: "slice",
    label: "Slices & treats",
    emoji: "🍰",
    description: "Slices, cookies & cupcakes",
    href: "/creations?format=slice",
    color: "bg-blush/60 hover:bg-blush/50",
  },
  {
    id: "festive",
    label: "Festive specials",
    emoji: "✨",
    description: "Rakhi, Teachers Day & seasonal",
    href: "/creations?occasion=teachers-day",
    color: "bg-sage-light/80 hover:bg-sage-light/70",
  },
] as const;
