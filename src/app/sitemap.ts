import type { MetadataRoute } from "next";
import { getAllSlugs, getCatalog } from "@/lib/catalog";
import { getAllLocationSlugs } from "@/lib/locations";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const { generatedAt } = getCatalog();
  const catalogModified = new Date(generatedAt);
  const buildTime = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: buildTime, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/creations`,
      lastModified: catalogModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/reels`,
      lastModified: catalogModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/order`,
      lastModified: buildTime,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: buildTime,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/contact`,
      lastModified: buildTime,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/locations`,
      lastModified: buildTime,
      changeFrequency: "weekly",
      priority: 0.88,
    },
  ];

  const locationRoutes: MetadataRoute.Sitemap = getAllLocationSlugs().map(
    (slug) => ({
      url: `${base}/locations/${slug}`,
      lastModified: buildTime,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    }),
  );

  const creationRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${base}/creations/${slug}`,
    lastModified: catalogModified,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticRoutes, ...locationRoutes, ...creationRoutes];
}
