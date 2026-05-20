"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { orderSteps, site, sizes, trustPillars } from "@/lib/content";
import { homeQuickBookChips, getBookingPathMessage } from "@/lib/order-booking";
import type { Creation } from "@/lib/catalog";
import { formatCreationImageAlt } from "@/lib/creation-seo";
import type { RichLocationContent } from "@/lib/location-content/types";
import { getLocationBySlug, locationPath } from "@/lib/locations";
import { siteMedia } from "@/lib/site-media";
import { getLocationWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";
import { ReviewsNote } from "@/components/home/ReviewsNote";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";


function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-medium tracking-wide text-muted">{children}</p>
  );
}

function LocationHeroImage({
  images,
  alt,
  fallback,
}: {
  images: string[];
  alt: string;
  fallback: string;
}) {
  const pool = useMemo(
    () => (images.length > 0 ? images : [fallback]),
    [images, fallback],
  );
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    setSrc(pool[Math.floor(Math.random() * pool.length)]!);
  }, [pool]);

  return (
    <motion.div
      className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_32px_64px_-28px_rgba(44,24,16,0.35)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: src ? 1 : 0 }}
      transition={{ duration: 0.35 }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 bg-cocoa/[0.06]" aria-hidden />
      )}
    </motion.div>
  );
}

type RichLocationPageProps = {
  content: RichLocationContent;
  featured: Creation[];
  heroImages?: string[];
};

export function RichLocationPage({
  content,
  featured,
  heroImages,
}: RichLocationPageProps) {
  const reducedMotion = useReducedMotion();
  const nearby = content.nearbySlugs
    .map((s) => getLocationBySlug(s))
    .filter(Boolean);
  const heroPool =
    heroImages ??
    featured
      .flatMap((c) => [c.cover, ...c.images])
      .filter((src, i, arr) => src && arr.indexOf(src) === i)
      .slice(0, 10);
  const place = content.placeName;

  return (
    <motion.div
      className="bg-surface text-cocoa"
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={reducedMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      {/* Hero */}
      <section className="location-hero-glow border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cocoa/[0.04] px-3.5 py-1.5 text-[13px] font-medium text-cocoa">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden />
              {content.hero.badge}
            </span>
            <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-cocoa">
              {content.hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-[17px] leading-[1.65] text-muted">
              {content.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={getLocationWhatsAppUrl(place)}
                variant="whatsapp"
                external
              >
                <WhatsAppIconInline className="h-5 w-5" />
                Message on WhatsApp
              </Button>
              <Button
                href={content.ui.heroSecondaryCta.href}
                variant="outline"
              >
                {content.ui.heroSecondaryCta.label}
              </Button>
            </div>
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8">
              {content.hero.stats.map((stat) => (
                <motion.div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-semibold tabular-nums text-cocoa">
                    {stat.value}
                  </dd>
                  <dd className="mt-0.5 text-sm text-muted">{stat.label}</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <LocationHeroImage
              images={heroPool}
              alt={content.ui.heroImageAlt}
              fallback={siteMedia.showcaseImage}
            />
            <p className="mt-4 text-center text-sm text-muted lg:text-left">
              {site.name} · {site.tagline} · {site.studioCity}, Goa
            </p>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-line py-12 sm:py-14" aria-label="Why Sweet Bites">
        <motion.ul
          className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-line bg-line px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-40px" }}
        >
          {trustPillars.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              transition={defaultTransition}
              className="bg-surface p-6"
            >
              <h2 className="font-display text-[15px] font-semibold leading-snug text-cocoa">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Quick book */}
      <section className="border-b border-line py-10 sm:py-12" aria-label="Quick order by occasion">
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <SectionLabel>Quick order</SectionLabel>
          <p className="mt-2 max-w-lg text-muted">{content.ui.quickBookIntro}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {homeQuickBookChips.map((chip) => {
              const base =
                "pathId" in chip
                  ? getBookingPathMessage(chip.pathId)
                  : chip.message;
              const message = `${base}\n\nI'm in ${place}, Goa.`;
              return (
                <li key={chip.id}>
                  <a
                    href={getWhatsAppUrl(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-medium text-cocoa transition-colors hover:border-terracotta/35 hover:text-terracotta"
                  >
                    <span aria-hidden>{chip.emoji}</span>
                    {chip.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </section>

      {/* Services — keyword headings */}
      <section
        className="border-b border-line py-16 sm:py-20"
        aria-labelledby={`${content.slug}-services-heading`}
      >
        <motion.div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Services</SectionLabel>
          <h2
            id={`${content.slug}-services-heading`}
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-cocoa"
          >
            {content.services.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{content.services.intro}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.services.items.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="location-card block rounded-2xl p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-cocoa">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Story */}
      <section
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        aria-labelledby="story-heading"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>{content.story.eyebrow}</SectionLabel>
            <h2
              id="story-heading"
              className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-cocoa"
            >
              {content.story.title}
            </h2>
          </div>
          <motion.div
            className="space-y-5 text-[17px] leading-[1.7] text-muted lg:col-span-8"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={defaultTransition}
          >
            {content.story.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Occasions */}
      <section
        className="border-t border-line bg-cream/60 py-16 sm:py-24"
        aria-labelledby="occasions-heading"
      >
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          <div className="max-w-xl">
            <SectionLabel>What we bake</SectionLabel>
            <h2
              id="occasions-heading"
              className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-cocoa"
            >
              {content.ui.occasionsTitle}
            </h2>
            <p className="mt-3 text-muted">
              Start from the gallery — we adapt size, colours, and flavours to your
              date.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.occasions.map((card, i) => (
              <motion.li
                key={card.title}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: i * 0.04 }}
              >
                <Link href={card.href} className="location-card group flex h-full flex-col rounded-2xl p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold text-cocoa">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                    {card.label}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* How to order */}
      <section
        className="border-t border-line py-16 sm:py-24"
        aria-labelledby="order-heading"
      >
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <SectionLabel>Simple process</SectionLabel>
          <h2
            id="order-heading"
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-cocoa"
          >
            How ordering works
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            {content.ui.orderLead}
          </p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {orderSteps.map((step, i) => (
              <li key={step.title} className="relative">
                {i < orderSteps.length - 1 && (
                  <span
                    className="absolute left-[1.125rem] top-10 hidden h-px w-[calc(100%+2rem)] bg-line lg:block"
                    aria-hidden
                  />
                )}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cocoa text-sm font-semibold text-surface">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cocoa">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <motion.div
            className="mt-10"
            initial={reducedMotion ? false : { opacity: 0 }}
            whileInView={reducedMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button href="/order" variant="primary">
              Full order guide
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section
        className="border-t border-line bg-cream/50 py-16 sm:py-20"
        aria-labelledby="pricing-heading"
      >
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <SectionLabel>Starting prices</SectionLabel>
          <h2
            id="pricing-heading"
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold text-cocoa"
          >
            {content.pricing.title}
          </h2>
          <p className="mt-3 max-w-xl text-muted">{content.pricing.intro}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sizes.map((size) => (
              <li
                key={size.label}
                className="rounded-2xl border border-line bg-surface p-5 text-center"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {size.label}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-cocoa">
                  {size.from}
                </p>
                <p className="mt-1 text-sm text-muted">{size.serves}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Gallery */}
      <section
        className="border-t border-line bg-cream/40 py-16 sm:py-24"
        aria-labelledby="gallery-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>From our kitchen</SectionLabel>
          <h2
            id="gallery-heading"
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-cocoa"
          >
            {content.ui.galleryTitle}
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Tap a cake to see details — screenshot your favourite and send it on
            WhatsApp.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {featured.map((creation) => (
              <li key={creation.slug}>
                <Link
                  href={`/creations/${creation.slug}`}
                  className="group block"
                >
                  <motion.div
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cocoa/5"
                    whileHover={reducedMotion ? undefined : { scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image
                      src={creation.cover}
                      alt={formatCreationImageAlt(creation)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                  <p className="mt-2.5 text-sm font-medium text-cocoa group-hover:text-terracotta">
                    {creation.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/creations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline"
            >
              View all creations
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="border-t border-line py-16 sm:py-24"
        aria-labelledby="reviews-heading"
      >
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <SectionLabel>Reviews</SectionLabel>
          <h2
            id="reviews-heading"
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold text-cocoa"
          >
            {content.testimonials.title}
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {content.testimonials.items.map((t) => (
              <li
                key={t.name}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <p className="text-sm leading-relaxed text-cocoa/80">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-cocoa">{t.name}</p>
                <p className="text-xs text-muted">{t.location}</p>
              </li>
            ))}
          </ul>
          <ReviewsNote />
        </motion.div>
      </section>

      {/* Service area */}
      <section
        className="border-t border-line bg-cream/40 py-16 sm:py-20"
        aria-labelledby="area-heading"
      >
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <SectionLabel>Coverage</SectionLabel>
          <h2
            id="area-heading"
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold text-cocoa"
          >
            {content.serviceArea.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{content.serviceArea.intro}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.serviceArea.places.map((place) => (
              <li
                key={place.name}
                className="rounded-2xl border border-line bg-surface px-5 py-4"
              >
                {place.href ? (
                  <Link
                    href={place.href}
                    className="font-display font-semibold text-cocoa hover:text-terracotta"
                  >
                    {place.name}
                  </Link>
                ) : (
                  <p className="font-display font-semibold text-cocoa">{place.name}</p>
                )}
                <p className="mt-1 text-sm text-muted">{place.detail}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Local SEO */}
      <section
        className="border-t border-line py-16 sm:py-20"
        aria-labelledby="local-heading"
      >
        <article className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2
            id="local-heading"
            className="font-display text-2xl font-semibold leading-tight text-cocoa sm:text-3xl"
          >
            {content.localSeo.title}
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-muted">
            {content.localSeo.paragraphs.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
          </div>
        </article>
      </section>

      {/* Visit */}
      <section
        className="border-t border-line bg-cream/50 py-16 sm:py-24"
        aria-labelledby={`${content.slug}-visit-heading`}
      >
        <div
          className={`mx-auto px-4 sm:px-6 lg:px-8 ${
            content.visit.showMap
              ? "grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14"
              : "max-w-2xl"
          }`}
        >
          <div>
            <SectionLabel>{content.ui.visitLabel}</SectionLabel>
            <h2
              id={`${content.slug}-visit-heading`}
              className="mt-3 font-display text-2xl font-semibold leading-tight text-cocoa sm:text-3xl"
            >
              {content.visit.title}
            </h2>
            <p className="mt-4 text-muted">{content.visit.note}</p>
            <ul className="mt-6 space-y-3 text-[15px] text-cocoa/80">
              {content.visit.bullets.map((line) => (
                <li key={line.slice(0, 20)} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-terracotta" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            {content.visit.showMapsLink && (
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline"
              >
                Google Maps
                <ArrowIcon className="h-4 w-4" />
              </a>
            )}
            {content.visit.studioLink && (
              <Link
                href={content.visit.studioLink.href}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline"
              >
                {content.visit.studioLink.label}
                <ArrowIcon className="h-4 w-4" />
              </Link>
            )}
            <Button
              href={getLocationWhatsAppUrl(place)}
              variant="whatsapp"
              external
              className="mt-8"
            >
              <WhatsAppIconInline className="h-5 w-5" />
              {content.ui.pickupCtaLabel}
            </Button>
          </div>
          {content.visit.showMap && (
          <div className="overflow-hidden rounded-2xl border border-line shadow-[0_24px_48px_-32px_rgba(44,24,16,0.2)]">
            <div className="aspect-[4/3] lg:aspect-square">
              <iframe
                title={`Sweet Bites custom cakes — ${place}, Goa`}
                src={site.mapsEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section
        className="border-t border-line py-16 sm:py-24"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Questions</SectionLabel>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-2xl font-semibold leading-tight text-cocoa sm:text-3xl"
          >
            {content.ui.faqTitle}
          </h2>
          <dl className="mt-10 divide-y divide-line">
            {content.faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                className="py-6 first:pt-0"
                initial={reducedMotion ? false : { opacity: 0 }}
                whileInView={reducedMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...defaultTransition, delay: i * 0.03 }}
              >
                <dt className="font-display text-[17px] font-semibold leading-snug text-cocoa">
                  {faq.question}
                </dt>
                <dd className="mt-2.5 text-[15px] leading-relaxed text-muted">
                  {faq.answer}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* Nearby */}
      {nearby.length > 0 && (
        <section className="border-t border-line py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-muted">{content.ui.nearbyTitle}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {nearby.map((loc) =>
                loc ? (
                  <li key={loc.slug}>
                    <Link
                      href={locationPath(loc.slug)}
                      className="inline-flex rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-cocoa transition-colors hover:border-terracotta/40 hover:text-terracotta"
                    >
                      {loc.name}
                    </Link>
                  </li>
                ) : null,
              )}
              <li>
                <Link
                  href="/locations"
                  className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-muted hover:text-terracotta"
                >
                  All areas
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 p-3 backdrop-blur-md sm:hidden">
        <a
          href={getLocationWhatsAppUrl(place)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white shadow-lg"
        >
          <WhatsAppIconInline className="h-5 w-5" />
          {content.ui.stickyWhatsappLabel}
        </a>
      </div>

      {/* CTA */}
      <section className="border-t border-line bg-cocoa pb-24 pt-16 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-tight text-surface">
            {content.ui.ctaTitle}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-surface/70">
            {content.ui.ctaLead}
          </p>
          <Button
            href={getLocationWhatsAppUrl(place)}
            variant="whatsapp"
            external
            className="mt-8"
          >
            <WhatsAppIconInline className="h-5 w-5" />
            WhatsApp {site.phone}
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
