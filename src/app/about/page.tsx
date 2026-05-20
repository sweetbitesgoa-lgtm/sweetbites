import type { Metadata } from "next";
import { site } from "@/lib/content";
import { AboutPageView } from "@/components/about/AboutPageView";
import { JsonLd } from "@/components/seo/JsonLd";
import { aboutSeo } from "@/lib/seo-content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Muskan & Sweet Bites",
  description: `Meet Muskan — the heart behind Sweet Bites in ${site.studioCity}, Goa. A home bakery built on late-night WhatsApps, real celebrations, and cakes that carry how you feel.`,
  path: "/about",
  keywords: [
    "Muskan baker Goa",
    `home bakery ${site.studioCity}`,
    "Sweet Bites story",
    "custom cake baker Goa",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          ...(aboutSeo.faqs ? [getFaqPageJsonLd(aboutSeo.faqs)] : []),
        ]}
      />
      <AboutPageView />
    </>
  );
}
