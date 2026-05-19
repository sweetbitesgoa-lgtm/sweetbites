import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SeasonalBanner } from "@/components/home/SeasonalBanner";
import { CakeScrollGallery } from "@/components/home/CakeScrollGallery";
import { ReelStrip } from "@/components/home/ReelStrip";
import { OccasionCards } from "@/components/home/OccasionCards";
import { FeaturedCakes } from "@/components/home/FeaturedCakes";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SocialProof } from "@/components/home/SocialProof";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { HomeSeoIntro } from "@/components/home/HomeSeoIntro";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs, site } from "@/lib/content";
import { homeSeo } from "@/lib/seo-content";
import { buildPageMetadata, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom Cakes in Goa — Order on WhatsApp",
  description:
    `Order custom birthday, wedding & bento cakes in Goa at ${site.domain}. 160+ designs by Muskan. WhatsApp ${site.phone} — delivery Panaji, Margao, Calangute & all Goa.`,
  path: "/",
  keywords: [
    "sweetbites.me",
    "Sweet Bites Goa",
    "custom cake order WhatsApp",
    "Muskan baker Panaji",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          getFaqPageJsonLd([...faqs, ...(homeSeo.faqs ?? [])]),
        ]}
      />
      <SeasonalBanner />
      <Hero />
      <CakeScrollGallery />
      <ReelStrip />
      <OccasionCards />
      <FeaturedCakes />
      <ProcessStrip />
      <ShowcaseSection />
      <HowItWorks />
      <SocialProof />
      <Testimonials />
      <FaqSection />
      <HomeSeoIntro />
      <CtaBanner />
    </>
  );
}
