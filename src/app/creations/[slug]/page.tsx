import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CreationDetail } from "@/components/creations/CreationDetail";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllSlugs, getCreationBySlug } from "@/lib/catalog";
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

  const keywords = [
    `${creation.title} cake Goa`,
    `${creation.title} sweetbites.me`,
    ...creation.occasion.map((o) => `${o.replace(/-/g, " ")} cake Goa`),
    ...creation.format.map((f) => `${f} cake Goa`),
    `order cake WhatsApp ${site.phoneRaw}`,
  ];

  return buildPageMetadata({
    title: `${creation.title} — Custom Cake Goa`,
    description: creation.description,
    path: `/creations/${slug}`,
    keywords,
    ogImage: creation.cover,
  });
}

export default async function CreationPage({ params }: PageProps) {
  const { slug } = await params;
  const creation = getCreationBySlug(slug);
  if (!creation) notFound();

  const seo = getCreationSeoContent(creation);

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
      <SeoContentSection {...seo} className="bg-blush/20" />
    </>
  );
}
