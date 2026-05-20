import type { Metadata } from "next";
import Link from "next/link";
import { SecondaryPageHero } from "@/components/layout/SecondaryPageHero";
import { ReelsWall } from "@/components/reels/ReelsWall";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { reelsSeo } from "@/lib/seo-content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/content";
import { getAllReels } from "@/lib/catalog";
import { siteMedia } from "@/lib/site-media";

export const metadata: Metadata = buildPageMetadata({
  title: "Kitchen reels",
  description:
    "Short clips from Muskan's kitchen — stacking, piping, toppers and the last look before delivery. Watch, then message on WhatsApp if you want a cake like it.",
  path: "/reels",
  keywords: ["cake decorating Goa", "baker reels"],
});

export default function ReelsPage() {
  const firstReel = getAllReels()[0];
  const heroPoster = firstReel?.cover ?? siteMedia.heroPoster;
  const heroAlt = firstReel?.title
    ? `${firstReel.title} — kitchen reel, ${site.name}`
    : `Cake decorating reel — ${site.name}, ${site.studioCity}, Goa`;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Reels", path: "/reels" },
          ]),
          ...(reelsSeo.faqs ? [getFaqPageJsonLd(reelsSeo.faqs)] : []),
        ]}
      />
      <SecondaryPageHero
        label="Video"
        title="Behind the scenes in the kitchen"
        description={`Short clips from ${site.studioCity} — piping, stacking, and the moment before a cake leaves for delivery. Tap through to the full cake when you see something you love.`}
        image={{
          src: heroPoster,
          alt: heroAlt,
          priority: true,
        }}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          WhatsApp Muskan
        </Button>
        <Button href="/creations" variant="outline" className="rounded-md px-5">
          Still gallery
        </Button>
      </SecondaryPageHero>

      <section className="border-b border-line bg-cream/70 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ReelsWall />
          <p className="mt-12 max-w-xl text-sm leading-relaxed text-muted">
            Prefer still photos?{" "}
            <Link
              href="/creations"
              className="font-medium text-cocoa underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta"
            >
              Browse the full gallery
            </Link>{" "}
            — same cakes, frozen in frame.
          </p>
        </div>
      </section>

      <SeoContentSection {...reelsSeo} className="border-t border-line bg-surface" />
    </>
  );
}
