import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/content";
import {
  getAllCaseStudies,
  CASE_STUDIES_INDEX_DESCRIPTION,
  getCaseStudyIndexKeywords,
  getCaseStudyListingJsonLd,
} from "@/lib/case-studies";
import { buildPageMetadata, getBreadcrumbJsonLd, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { CaseStudyIndexView } from "@/components/case-studies/CaseStudyIndexView";

const studies = getAllCaseStudies();

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Case studies — impossible character cakes in Goa",
    description: CASE_STUDIES_INDEX_DESCRIPTION,
    path: "/case-studies",
    keywords: getCaseStudyIndexKeywords(studies),
    ogImage: studies[0]?.heroImage ?? DEFAULT_OG_IMAGE,
    ogImageAlt: `${site.name} case studies — Barbie, Spiderman & unicorn cakes in Goa`,
  }),
  authors: [{ name: "Muskan", url: `${site.url}/about` }],
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/case-studies" },
          ]),
          getCaseStudyListingJsonLd(studies),
        ]}
      />
      <CaseStudyIndexView studies={studies} />
    </>
  );
}
