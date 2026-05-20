import { getAllReels, getCatalog, getFeaturedCreations } from "@/lib/catalog";

const featured = getFeaturedCreations(1)[0];
const { standaloneReels } = getCatalog();
const withVideo = getCatalog().creations.find((c) => c.video);

const defaultPoster =
  featured?.cover ??
  "/images/wedding-cake/659772208_18092845286170730_8159590204106277210_n..webp";

const fallbackVideo =
  withVideo?.video ??
  standaloneReels[0]?.src ??
  "/videos/AQM1-lUmK5ZRh5yuIPl67VBVwc7cugkejne6ciUsvbVtwPleW1dokgj4QXA_GNNKC_ICFegA9YthmnAlkRoSublkOyRywVTf.mp4";

export type HeroClip = {
  video: string;
  poster: string;
};

/** All unique reel / creation videos for hero rotation */
export function getHeroVideoPool(): HeroClip[] {
  const seen = new Set<string>();
  const pool: HeroClip[] = [];

  for (const reel of getAllReels()) {
    if (seen.has(reel.src)) continue;
    seen.add(reel.src);
    pool.push({
      video: reel.src,
      poster: reel.cover ?? defaultPoster,
    });
  }

  if (pool.length === 0) {
    pool.push({ video: fallbackVideo, poster: defaultPoster });
  }

  return pool;
}

/** Client-only — call inside useEffect to avoid SSR/client mismatch */
export function pickRandomHeroClip(): HeroClip {
  const pool = getHeroVideoPool();
  return pool[Math.floor(Math.random() * pool.length)]!;
}

export const siteMedia = {
  heroVideo: fallbackVideo,
  heroPoster: defaultPoster,
  showcaseImage:
    getFeaturedCreations(6)[2]?.cover ??
    featured?.cover ??
    "/images/haldi-design-cake/498586910_18060535466170730_970917338585622900_n..webp",
  blogBookingHero:
    "/images/golden-cream-birthday-cake/624880407_18052417967703847_5140043511432543654_n..webp",
  blogWeddingHero: defaultPoster,
} as const;
