import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactSeo } from "@/lib/seo-content";
import {
  CONTACT_KEYWORDS,
  CONTACT_PAGE_DESCRIPTION,
  CONTACT_PAGE_TITLE,
  contactPageFaqs,
  getContactHowToJsonLd,
  getContactWebPageJsonLd,
} from "@/lib/contact-page";
import { siteMedia } from "@/lib/site-media";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: CONTACT_PAGE_TITLE,
  description: CONTACT_PAGE_DESCRIPTION,
  path: "/contact",
  keywords: [...CONTACT_KEYWORDS],
  ogImage: siteMedia.contactHero,
  ogImageAlt: `Contact Sweet Bites — custom cakes and WhatsApp orders from Velim, Goa`,
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          getContactWebPageJsonLd(),
          getContactHowToJsonLd(),
          getFaqPageJsonLd([...contactPageFaqs]),
        ]}
      />
      <ContactPageContent />
      <SeoContentSection {...contactSeo} className="border-t border-line bg-surface" />
    </>
  );
}
