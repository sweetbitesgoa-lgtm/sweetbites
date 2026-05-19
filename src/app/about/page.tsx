import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/content";
import { siteMedia } from "@/lib/site-media";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { WhatsAppOrderCard } from "@/components/order/WhatsAppOrderCard";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { aboutSeo } from "@/lib/seo-content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Muskan — Sweet Bites Goa Baker",
  description:
    `Meet Muskan, founder of Sweet Bites at sweetbites.me — custom wedding & birthday cakes in Goa. WhatsApp ${site.phone} to order.`,
  path: "/about",
  keywords: [
    "Muskan cake baker Goa",
    "Sweet Bites about",
    "home bakery Panaji",
    "sweetbites.me Muskan",
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
      <PageHero
        title="About Sweet Bites & Muskan"
        description={`Goa's celebration cake studio at ${site.domain} — handcrafted orders via WhatsApp ${site.phone}.`}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          Order on WhatsApp
        </Button>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl ring-4 ring-gold/20">
            <Image
              src={siteMedia.heroPoster}
              alt="Muskan decorating a custom wedding cake at Sweet Bites Goa sweetbites.me"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
              Meet Muskan
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-cocoa sm:text-4xl">
              Baking joy, one cake at a time
            </h2>
            <div className="mt-6 space-y-4 text-cocoa/75 leading-relaxed">
              <p>
                Sweet Bites began in a small Goa kitchen with a simple belief:
                every celebration deserves a cake as unique as the people
                gathering around it. Muskan started decorating cakes for friends
                and family — word spread, and soon weddings, birthdays, and
                festive events across Goa were calling for her signature touch.
              </p>
              <p>
                Today the full portfolio lives at{" "}
                <a href={site.url} className="font-semibold text-terracotta hover:underline">
                  {site.domain}
                </a>{" "}
                — 160+ real creations and growing. Each order is still
                hand-crafted with premium ingredients and the warmth only a home
                baker can bring.
              </p>
              <p>
                When you order from Sweet Bites, you&apos;re inviting Muskan into
                your celebration. Browse{" "}
                <a href="/creations" className="font-semibold text-terracotta hover:underline">
                  creations
                </a>{" "}
                and message{" "}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-terracotta hover:underline"
                >
                  {site.phone}
                </a>{" "}
                on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Fresh ingredients",
                text: "Real butter, fresh fruit, and quality chocolate — never shortcuts.",
              },
              {
                title: "Custom design",
                text: "Themes, toppers, colours, and flavours tailored to your vision.",
              },
              {
                title: "Goa delivery",
                text: "Pickup in Panaji or delivery across North & South Goa.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-cream p-8 text-center shadow-sm"
              >
                <h3 className="font-display text-xl font-semibold text-cocoa">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cocoa/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-lg px-4">
          <WhatsAppOrderCard variant="compact" />
        </div>
      </section>

      <SeoContentSection {...aboutSeo} />

      <section className="bg-sage py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-3xl font-semibold text-white">
            Let&apos;s create something sweet together
          </h2>
          <p className="mt-4 text-white/80">
            Message {site.phone} on WhatsApp · {site.domain}
          </p>
          <div className="mt-8">
            <Button
              href={getWhatsAppUrl()}
              variant="primary"
              external
              className="!bg-white !text-sage hover:!bg-cream"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
