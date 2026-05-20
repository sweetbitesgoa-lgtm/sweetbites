"use client";

import Link from "next/link";
import { site } from "@/lib/content";

/**
 * Shown until Google Business Profile exists — avoids fake embeds.
 * Set site.googleBusinessUrl in content.ts to swap for a live reviews link.
 */
export function ReviewsNote() {
  if (site.googleBusinessUrl) {
    return (
      <p className="mx-auto mt-6 max-w-lg text-center text-sm">
        <a
          href={site.googleBusinessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-terracotta hover:underline"
        >
          Read reviews on Google
        </a>
        <span className="text-cocoa/60"> · {site.stats.rating}★ from Goa customers</span>
      </p>
    );
  }

  return (
    <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-cocoa/55">
      Google listing coming soon. Until then, follow{" "}
      <Link
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-terracotta hover:underline"
      >
        {site.instagramHandle}
      </Link>{" "}
      for fresh cakes & reels, or message us on WhatsApp — {site.stats.reviewCount}+ happy
      orders across Goa.
    </p>
  );
}
