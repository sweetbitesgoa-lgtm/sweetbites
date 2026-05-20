import type { Creation } from "@/lib/catalog";
import { site } from "@/lib/content";

/** Descriptive alt text for catalog images (local SEO) */
export function formatCreationImageAlt(creation: Creation): string {
  const occasion =
    creation.occasion[0]?.replace(/-/g, " ") ??
    creation.format[0]?.replace(/-/g, " ") ??
    "custom";
  return `${creation.title} — ${occasion} cake in Goa by ${site.name}`;
}
