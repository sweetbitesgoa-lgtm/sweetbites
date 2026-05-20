import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPageView } from "@/components/locations/LocationPageView";
import { RichLocationPage } from "@/components/locations/RichLocationPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/content";
import { getFeaturedCreations, getLocationHeroImages } from "@/lib/catalog";
import { getRichLocationContent } from "@/lib/location-content";
import {
  getAllLocationSlugs,
  getLocationBySlug,
} from "@/lib/locations";
import {
  buildPageMetadata,
  getBreadcrumbJsonLd,
  getFaqPageJsonLd,
  getLocationFeaturedItemListJsonLd,
  getLocationServicesJsonLd,
  getLocationWebPageJsonLd,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Location not found" };

  const rich = getRichLocationContent(slug);

  return buildPageMetadata({
    title: rich?.metaTitle ?? location.metaTitle,
    description: rich?.metaDescription ?? location.metaDescription,
    path: `/locations/${slug}`,
    keywords: rich?.keywords ?? [
      `custom cake ${location.name}`,
      `birthday cake ${location.name} Goa`,
      `cake delivery ${location.name}`,
      `wedding cake ${location.name}`,
    ],
    ogImageAlt: `Custom cakes in ${location.name}, Goa — ${site.name}`,
  });
}

export default async function LocationSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const rich = getRichLocationContent(slug);
  const faqs = rich?.faqs ?? location.faqs;
  const featured = getFeaturedCreations(6);
  const heroImages = getLocationHeroImages(10);
  const path = `/locations/${slug}`;

  const jsonLd: Record<string, unknown>[] = [
    getBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations" },
      { name: location.name, path },
    ]),
    getFaqPageJsonLd(faqs),
  ];

  if (rich) {
    jsonLd.push(
      getLocationWebPageJsonLd({
        placeName: location.name,
        path,
        title: rich.metaTitle,
        description: rich.metaDescription,
      }),
      getLocationFeaturedItemListJsonLd(location.name, featured),
      ...getLocationServicesJsonLd(
        location.name,
        rich.services.items.map((s) => ({
          title: s.title,
          description: s.description,
        })),
      ),
    );
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      {rich ? (
        <RichLocationPage
          content={rich}
          featured={featured}
          heroImages={heroImages}
        />
      ) : (
        <LocationPageView location={location} />
      )}
    </>
  );
}
