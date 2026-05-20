import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Served at /robots.txt (App Router). Do not add public/robots.txt — that would
 * duplicate or conflict with this route.
 */
export default function robots(): MetadataRoute.Robots {
  const base = SITE_URL.replace(/\/$/, "");
  const host = new URL(base).host;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    host: `https://${host}`,
    sitemap: `${base}/sitemap.xml`,
  };
}
