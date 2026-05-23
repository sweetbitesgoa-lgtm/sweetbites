import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CreationDetail } from "@/components/creations/CreationDetail";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllSlugs, getCreationBySlug, getSimilarCreations } from "@/lib/catalog";
import { getCaseStudyByCreationSlug } from "@/lib/case-studies";
import { SimilarCreations } from "@/components/creations/SimilarCreations";
import {
  buildPageMetadata,
  getBreadcrumbJsonLd,
  getCreationProductJsonLd,
  getFaqPageJsonLd,
} from "@/lib/seo";
import { getCreationSeoContent } from "@/lib/seo-content";
import { site } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const creation = getCreationBySlug(slug);
  if (!creation) return { title: "Creation not found" };

  const occasion = creation.occasion[0]?.replace(/-/g, " ") ?? "custom";

  return buildPageMetadata({
    title: creation.title,
    description:
      creation.description.length > 155
        ? `${creation.description.slice(0, 152)}…`
        : creation.description,
    path: `/creations/${slug}`,
    keywords: [`${creation.title} cake`, `${occasion} cake Goa`],
    ogImage: creation.cover,
    ogImageAlt: `${creation.title} — ${site.name}, Goa`,
  });
}

export default async function CreationPage({ params }: PageProps) {
  const { slug } = await params;
  const creation = getCreationBySlug(slug);
  if (!creation) notFound();

  const seo = getCreationSeoContent(creation);
  const similar = getSimilarCreations(creation, 4);
  const caseStudy = getCaseStudyByCreationSlug(slug);

  return (
    <>
      <JsonLd
        data={[
          getCreationProductJsonLd(creation),
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Creations", path: "/creations" },
            { name: creation.title, path: `/creations/${slug}` },
          ]),
          ...(seo.faqs ? [getFaqPageJsonLd(seo.faqs)] : []),
        ]}
      />
      <section className="bg-cream min-h-[60vh]">
        <CreationDetail creation={creation} />
      </section>
      <SimilarCreations current={creation} creations={similar} caseStudy={caseStudy} />
      <SeoContentSection {...seo} className="bg-blush/20" />
    </>
  );
}
