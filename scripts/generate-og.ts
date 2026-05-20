/**
 * Builds public/og.jpg (1200×630) for Open Graph / Twitter cards.
 * Run: npx tsx scripts/generate-og.ts
 */
import { join } from "node:path";
import sharp from "sharp";

const source = join(
  process.cwd(),
  "public/images/wedding-cake/659772208_18092845286170730_8159590204106277210_n..webp",
);
const output = join(process.cwd(), "public/og.jpg");

async function main() {
  await sharp(source)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(output);
  console.log(`Wrote ${output}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
