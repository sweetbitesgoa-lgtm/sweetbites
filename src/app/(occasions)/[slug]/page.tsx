import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OccasionLandingView } from "@/components/occasions/OccasionLandingView";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getCreationsForOccasionLanding,
  getOccasionLandingBySlug,
  getOccasionLandingJsonLd,
  getOccasionLandingSlugs,
  occasionLandingPath,
} from "@/lib/occasion-landings";
import { site } from "@/lib/content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getOccasionLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const landing = getOccasionLandingBySlug(slug);
  if (!landing) return { title: "Not found" };

  return buildPageMetadata({
    title: landing.metaTitle,
    description: landing.metaDescription,
    path: occasionLandingPath(slug),
    keywords: landing.keywords,
    ogImage: landing.hero.image,
    ogImageAlt: landing.hero.imageAlt,
  });
}

export default async function OccasionLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const landing = getOccasionLandingBySlug(slug);
  if (!landing) notFound();

  const creations = getCreationsForOccasionLanding(landing, 6);
  const path = occasionLandingPath(slug);

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Occasions", path: "/occasions" },
            { name: landing.hero.title, path },
          ]),
          getOccasionLandingJsonLd(landing),
          getFaqPageJsonLd(landing.faqs),
        ]}
      />
      <OccasionLandingView landing={landing} creations={creations} />
    </>
  );
}
