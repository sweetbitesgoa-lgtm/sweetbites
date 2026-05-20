import type { Metadata } from "next";
import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SecondaryPageHero } from "@/components/layout/SecondaryPageHero";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { WhatsAppOrderCard } from "@/components/order/WhatsAppOrderCard";
import { ReviewsNote } from "@/components/home/ReviewsNote";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactSeo } from "@/lib/seo-content";
import { siteMedia } from "@/lib/site-media";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & studio hours",
  description:
    `We're in ${site.studioCity}, South Goa, open Tue–Sun. For cake orders, WhatsApp ${site.phone} — it's the fastest way to share photos and get a reply from Muskan.`,
  path: "/contact",
  keywords: ["Sweet Bites Velim", "cake shop Goa WhatsApp"],
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
          ...(contactSeo.faqs ? [getFaqPageJsonLd(contactSeo.faqs)] : []),
        ]}
      />
      <SecondaryPageHero
        label="Contact"
        title={`Say hello — ${site.domain}`}
        description={`Orders and quotes go through WhatsApp (${site.phone}) so Muskan can see your photos and reply properly. Studio visits in ${site.studioCity} are by appointment during the hours below.`}
        image={{
          src: siteMedia.heroPoster,
          alt: `Muskan at work — Sweet Bites custom cakes, ${site.studioCity}, Goa`,
          priority: true,
        }}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          <WhatsAppIconInline className="h-5 w-5" />
          Open WhatsApp
        </Button>
        <Button href={site.mapsUrl} variant="outline" external className="rounded-md px-5">
          Google Maps
        </Button>
      </SecondaryPageHero>

      <section className="border-b border-line bg-surface py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="divide-y divide-line rounded-lg border border-line bg-cream/40 lg:col-span-5">
            <div className="p-6 sm:p-8">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Studio
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cocoa">{site.address}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
              >
                Open in Maps
              </a>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Hours
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cocoa">{site.hours}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Closed Mondays. You can message any day — replies during studio hours.
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Reach us
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                <li>
                  <span className="text-muted">WhatsApp · </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-cocoa underline decoration-terracotta/35 underline-offset-4 hover:decoration-terracotta"
                  >
                    {site.phone}
                  </a>
                  <span className="text-muted"> — best for orders</span>
                </li>
                <li>
                  <span className="text-muted">Call · </span>
                  <a
                    href={`tel:+91${site.phoneRaw}`}
                    className="font-medium text-cocoa hover:text-terracotta"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="text-muted">Web · </span>
                  <a
                    href={site.url}
                    className="font-medium text-cocoa underline decoration-line underline-offset-4 hover:decoration-terracotta"
                  >
                    {site.domain}
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-cocoa underline decoration-line underline-offset-4 hover:decoration-terracotta"
                  >
                    {site.instagramHandle}
                  </a>
                  <span className="text-muted"> on Instagram</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <WhatsAppOrderCard />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream/50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-medium tracking-tight text-cocoa sm:text-2xl">
            Map · {site.studioCity}, Goa
          </h2>
          <div className="mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg bg-cream ring-1 ring-line sm:aspect-[21/9]">
            <iframe
              title={`Sweet Bites custom cakes — ${site.studioCity}, Goa location`}
              src={site.mapsEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <ReviewsNote />
        </div>
      </section>

      <SeoContentSection {...contactSeo} className="border-t border-line bg-surface" />
    </>
  );
}
