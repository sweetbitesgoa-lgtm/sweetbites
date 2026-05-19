import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { ReelsWall } from "@/components/reels/ReelsWall";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { reelsSeo } from "@/lib/seo-content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Cake Decorating Reels Goa — Behind the Bite",
  description:
    `Watch Sweet Bites cake reels at sweetbites.me/reels — Muskan decorating custom cakes in Goa. Order on WhatsApp ${site.phone}.`,
  path: "/reels",
  keywords: [
    "cake decorating video Goa",
    "sweetbites.me reels",
    "baker Muskan Goa",
    "custom cake making video",
  ],
});

export default function ReelsPage() {
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
      <PageHero
        title="Behind the Bite — cake reels from Goa"
        description={`Real decorating videos from sweetbites.me. Tap a reel to view the cake — order on WhatsApp ${site.phone}.`}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          Order on WhatsApp
        </Button>
      </PageHero>
      <section className="bg-cocoa py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ReelsWall />
          <p className="mt-10 text-center text-sm text-cream/60">
            Inspired? Browse{" "}
            <Link
              href="/creations"
              className="font-semibold text-gold hover:text-gold-light"
            >
              all creations at sweetbites.me
            </Link>
          </p>
        </div>
      </section>
      <SeoContentSection {...reelsSeo} className="bg-blush/30" />
    </>
  );
}
