import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { CaseStudyArticleLayout } from "@/components/case-studies/CaseStudyArticleLayout";
import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
  getRelatedCaseStudies,
  getCaseStudyArticleJsonLd,
} from "@/lib/case-studies";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case study not found" };

  return buildPageMetadata({
    title: study.title,
    description: `${study.excerpt} Focus: ${study.focusKeyword}.`,
    path: `/case-studies/${slug}`,
    keywords: [...study.keywords, study.focusKeyword],
    ogImage: study.heroImage,
    ogImageAlt: study.heroImageAlt,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const path = `/case-studies/${slug}`;
  const relatedStudies = getRelatedCaseStudies(slug, 2);

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/case-studies" },
            { name: study.focusKeyword, path },
          ]),
          getCaseStudyArticleJsonLd(study),
        ]}
      />
      <CaseStudyArticleLayout study={study} relatedStudies={relatedStudies} />
    </>
  );
}
