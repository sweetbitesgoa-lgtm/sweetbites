import type { Metadata } from "next";
import { flavors, orderSteps, sizes, site } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppOrderCard } from "@/components/order/WhatsAppOrderCard";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { orderSeo } from "@/lib/seo-content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Order Custom Cake Goa — WhatsApp",
  description:
    `Order cakes at sweetbites.me via WhatsApp ${site.phone}. Flavours, sizes, 5–7 day lead time. Sweet Bites by Muskan — delivery across Goa.`,
  path: "/order",
  keywords: [
    "order cake WhatsApp Goa",
    "sweetbites.me order",
    "custom cake price Goa",
    "cake booking Panaji",
  ],
});

export default function OrderPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Order", path: "/order" },
          ]),
          ...(orderSeo.faqs ? [getFaqPageJsonLd(orderSeo.faqs)] : []),
        ]}
      />
      <PageHero
        title="Order your custom cake on WhatsApp"
        description={`Book at sweetbites.me — message ${site.phone} with your celebration details. Quotes from Muskan, delivery across Goa.`}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          WhatsApp {site.phone}
        </Button>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <WhatsAppOrderCard />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Flavors"
            title="Pick your favourite taste"
            description="Mix and match layers — we'll help you pair flavours with your theme."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {flavors.map((f) => (
              <li
                key={f}
                className="rounded-full border border-cocoa/10 bg-cream px-4 py-2 text-sm font-medium text-cocoa shadow-sm"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Sizes" title="Cakes for every gathering" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sizes.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-cocoa/5 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="font-display text-2xl font-semibold text-terracotta">
                  {s.label}
                </p>
                <p className="mt-2 text-sm text-cocoa/70">{s.serves}</p>
                <p className="mt-4 font-semibold text-cocoa">from {s.from}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-light py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="From WhatsApp message to celebration"
            description={`We recommend booking ${site.bookAheadDays} in advance. Message ${site.phone} to check rush availability.`}
          />
          <ol className="mt-8 space-y-6 max-w-2xl">
            {orderSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-cocoa">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-cocoa/70">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SeoContentSection {...orderSeo} />
    </>
  );
}
