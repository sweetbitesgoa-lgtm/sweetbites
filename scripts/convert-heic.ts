/**
 * Converts all .heic files under public/images to .webp alongside originals.
 * Run: npx tsx scripts/convert-heic.ts
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const IMAGES_ROOT = path.join(process.cwd(), "public", "images");

async function walk(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.heic$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const heicFiles = await walk(IMAGES_ROOT);
  if (heicFiles.length === 0) {
    console.log("No HEIC files found.");
    return;
  }

  let converted = 0;
  let skipped = 0;

  for (const heicPath of heicFiles) {
    const webpPath = heicPath.replace(/\.heic$/i, ".webp");
    try {
      await fs.access(webpPath);
      skipped++;
      continue;
    } catch {
      /* webp does not exist yet */
    }

    await sharp(heicPath).webp({ quality: 85 }).toFile(webpPath);
    converted++;
    console.log(`Converted: ${path.relative(IMAGES_ROOT, heicPath)}`);
  }

  console.log(`Done. Converted: ${converted}, skipped (already exists): ${skipped}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
