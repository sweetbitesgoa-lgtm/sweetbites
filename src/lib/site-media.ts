import { getCatalog, getFeaturedCreations } from "@/lib/catalog";

const featured = getFeaturedCreations(1)[0];
const { standaloneReels } = getCatalog();
const withVideo = getCatalog().creations.find((c) => c.video);

export const siteMedia = {
  heroVideo:
    withVideo?.video ??
    standaloneReels[0]?.src ??
    "/videos/AQM1-lUmK5ZRh5yuIPl67VBVwc7cugkejne6ciUsvbVtwPleW1dokgj4QXA_GNNKC_ICFegA9YthmnAlkRoSublkOyRywVTf.mp4",
  heroPoster:
    featured?.cover ??
    "/images/wedding-cake/659772208_18092845286170730_8159590204106277210_n..webp",
  showcaseImage:
    getFeaturedCreations(6)[2]?.cover ??
    featured?.cover ??
    "/images/haldi-design-cake/498586910_18060535466170730_970917338585622900_n..webp",
} as const;
