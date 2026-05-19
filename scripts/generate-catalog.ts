/**
 * Scans public/images and public/videos, writes src/data/catalog.json
 * Run: npx tsx scripts/generate-catalog.ts
 */
import fs from "fs/promises";
import path from "path";

const IMAGES_ROOT = path.join(process.cwd(), "public", "images");
const VIDEOS_ROOT = path.join(process.cwd(), "public", "videos");
const OUTPUT = path.join(process.cwd(), "src", "data", "catalog.json");
const OVERRIDES_PATH = path.join(
  process.cwd(),
  "src",
  "data",
  "catalog-overrides.json",
);

const IMAGE_EXT = new Set([".webp", ".jpg", ".jpeg", ".png"]);
const PREFERRED_ORDER = [".webp", ".jpg", ".jpeg", ".png", ".heic"];

type Overrides = {
  featured?: string[];
  titles?: Record<string, string>;
};

type Creation = {
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

const OCCASION_RULES: [string, RegExp][] = [
  ["birthday", /\bbirthday\b|birthda\b/i],
  ["anniversary", /\banniversary\b|anniversery\b/i],
  ["wedding", /\bwedding\b/i],
  ["welcome", /\bwelcome\b/i],
  ["haldi", /\bhaldi\b/i],
  ["rakshabandhan", /\brakshabandhan\b/i],
  ["teachers-day", /\bteacher'?s-day\b/i],
  ["womens-day", /\bwomen'?s-day\b/i],
  ["fathers-day", /\bfather'?s-day\b/i],
  ["farewell", /\bfarewell\b/i],
  ["kids", /\bkids\b|barbie|cocomelon|spiderman|doremon|motu-patlu|winnie|boss-baby|unicorn|snow-white|matilda/i],
];

const FORMAT_RULES: [string, RegExp][] = [
  ["bento", /\bbento\b/i],
  ["tin", /\btin\b/i],
  ["slice", /\bslice\b/i],
  ["cupcake", /\bcupcake\b/i],
  ["cookies", /\bcookies\b/i],
  ["bouquet", /\bbouquet\b/i],
  ["box", /\bbox\b|sweet-box\b/i],
  ["sphere", /\bsphere\b/i],
];

const AESTHETIC_RULES: [string, RegExp][] = [
  ["chocolate", /\bchocolate\b/i],
  ["floral", /\bflower\b|floral|rose\b|garland\b/i],
  ["butterfly", /\bbutterfly\b/i],
  ["heart", /\bheart\b/i],
  ["cream", /\bcream\b/i],
  ["rainbow", /\brainbow\b/i],
  ["gold", /\bgold(en)?\b/i],
  ["pastel", /\bpink\b|blue\b|purple\b|purpel\b|yellow\b|blush\b/i],
];

const COLOR_TAGS: [string, RegExp][] = [
  ["pink", /\bpink\b/i],
  ["blue", /\bblue\b/i],
  ["chocolate", /\bchocolate\b/i],
  ["white", /\bwhite\b/i],
  ["red", /\bred\b/i],
  ["yellow", /\byellow\b/i],
  ["purple", /\bpurple\b|purpel\b/i],
  ["green", /\bgreen\b/i],
];

function humanizeSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function matchRules(rules: [string, RegExp][], slug: string): string[] {
  return rules.filter(([, re]) => re.test(slug)).map(([id]) => id);
}

function buildDescription(
  title: string,
  occasion: string[],
  format: string[],
  aesthetic: string[],
): string {
  const occ =
    occasion.length > 0
      ? occasion[0].replace(/-/g, " ")
      : "celebration";
  const fmt = format.length > 0 ? `${format[0]} ` : "";
  const look =
    aesthetic.length > 0
      ? ` with ${aesthetic.slice(0, 2).join(" & ")} styling`
      : "";
  return `Order ${title} — custom ${fmt}${occ} cake in Goa${look}. By Sweet Bites (Muskan) at sweetbites.me. WhatsApp +91 78880 42837 for quote & delivery across Panaji, Margao & Goa.`;
}

function sortImages(files: string[]): string[] {
  return [...files].sort((a, b) => {
    const extA = path.extname(a).toLowerCase();
    const extB = path.extname(b).toLowerCase();
    const iA = PREFERRED_ORDER.indexOf(extA);
    const iB = PREFERRED_ORDER.indexOf(extB);
    return (iA === -1 ? 99 : iA) - (iB === -1 ? 99 : iB) || a.localeCompare(b);
  });
}

async function scanCreationFolder(
  slug: string,
  overrides: Overrides,
): Promise<Creation | null> {
  const dir = path.join(IMAGES_ROOT, slug);
  let entries: string[];
  try {
    entries = await fs.readdir(dir);
  } catch {
    return null;
  }

  const images: string[] = [];
  let video: string | undefined;

  for (const name of entries) {
    const ext = path.extname(name).toLowerCase();
    const rel = path.join("images", slug, name).replace(/\\/g, "/");
    if (ext === ".mp4") {
      if (!video) video = `/${rel}`;
    } else if (IMAGE_EXT.has(ext)) {
      images.push(`/${rel}`);
    }
  }

  const sorted = [...new Set(sortImages(images))];
  if (sorted.length === 0) return null;

  const occasion = matchRules(OCCASION_RULES, slug);
  const format = matchRules(FORMAT_RULES, slug);
  const aesthetic = matchRules(AESTHETIC_RULES, slug);
  const colorTags = matchRules(COLOR_TAGS, slug);
  const tags = [...new Set([...occasion, ...format, ...aesthetic, ...colorTags])];

  const title = overrides.titles?.[slug] ?? humanizeSlug(slug);
  const featured = overrides.featured?.includes(slug) ?? false;

  return {
    slug,
    title,
    cover: sorted[0],
    images: sorted,
    video,
    tags,
    occasion,
    format,
    aesthetic,
    featured,
    description: buildDescription(title, occasion, format, aesthetic),
  };
}

async function scanStandaloneVideos(): Promise<
  { src: string; slug?: string; title: string }[]
> {
  let files: string[] = [];
  try {
    files = await fs.readdir(VIDEOS_ROOT);
  } catch {
    return [];
  }

  return files
    .filter((f) => f.endsWith(".mp4"))
    .map((f) => ({
      src: `/videos/${f}`,
      title: "Studio reel",
    }));
}

async function main() {
  const overrideRaw = await fs.readFile(OVERRIDES_PATH, "utf-8");
  const overrides = JSON.parse(overrideRaw) as Overrides;

  const slugs = (await fs.readdir(IMAGES_ROOT, { withFileTypes: true }))
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  const creations: Creation[] = [];
  for (const slug of slugs) {
    const c = await scanCreationFolder(slug, overrides);
    if (c) creations.push(c);
  }

  creations.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.title.localeCompare(b.title);
  });

  const standaloneReels = await scanStandaloneVideos();

  const catalog = {
    generatedAt: new Date().toISOString(),
    creations,
    standaloneReels,
    filters: {
      occasions: [...new Set(creations.flatMap((c) => c.occasion))].sort(),
      formats: [...new Set(creations.flatMap((c) => c.format))].sort(),
      aesthetics: [...new Set(creations.flatMap((c) => c.aesthetic))].sort(),
      colors: [...new Set(creations.flatMap((c) => c.tags.filter((t) => COLOR_TAGS.some(([id]) => id === t))))].sort(),
    },
  };

  await fs.mkdir(path.dirname(OUTPUT), { recursive: true });
  await fs.writeFile(OUTPUT, JSON.stringify(catalog, null, 2));
  console.log(
    `Wrote ${creations.length} creations, ${standaloneReels.length} standalone reels → ${OUTPUT}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
