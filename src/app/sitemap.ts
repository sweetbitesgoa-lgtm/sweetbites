import type { MetadataRoute } from "next";
import { getAllSlugs, getCatalog } from "@/lib/catalog";
import { getAllLocationSlugs } from "@/lib/locations";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllCaseStudies } from "@/lib/case-studies";
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
    {
      url: `${base}/blog`,
      lastModified: buildTime,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: `${base}/case-studies`,
      lastModified: buildTime,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/cakes-menu`,
      lastModified: buildTime,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T09:00:00+05:30`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

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

  const caseStudyRoutes: MetadataRoute.Sitemap = getAllCaseStudies().map((study) => ({
    url: `${base}/case-studies/${study.slug}`,
    lastModified: new Date(`${study.publishedAt}T09:00:00+05:30`),
    changeFrequency: "monthly" as const,
    priority: 0.76,
  }));

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...locationRoutes,
    ...creationRoutes,
  ];
}
