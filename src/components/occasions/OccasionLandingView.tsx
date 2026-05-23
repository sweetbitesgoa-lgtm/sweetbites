"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Creation } from "@/lib/catalog";
import { formatCreationImageAlt } from "@/lib/creation-seo";
import { orderSteps, site } from "@/lib/content";
import type { OccasionLanding } from "@/lib/occasion-landings";
import { OCCASION_FOOTER_LINKS } from "@/lib/occasion-landings";
import { getOccasionLandingWhatsAppUrl } from "@/lib/whatsapp";
import { ReviewsNote } from "@/components/home/ReviewsNote";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-medium tracking-wide text-muted">{children}</p>
  );
}

type OccasionLandingViewProps = {
  landing: OccasionLanding;
  creations: Creation[];
};

export function OccasionLandingView({ landing, creations }: OccasionLandingViewProps) {
  const reducedMotion = useReducedMotion();
  const waUrl = getOccasionLandingWhatsAppUrl(
    landing.hero.title,
    landing.slug,
    landing.bookingPathId,
  );
  const ideasTitle = landing.ideasSectionTitle ?? "Ideas that actually work in Goa";
  const ideasLead =
    landing.ideasSectionLead ??
    "Pick a direction below — every link goes to a real cake Muskan has baked, not a stock image.";

  return (
    <div className="bg-surface text-cocoa">
      {/* Hero */}
      <section className="location-hero-glow border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cocoa/[0.04] px-3.5 py-1.5 text-[13px] font-medium text-cocoa">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden />
              {landing.hero.badge}
            </span>
            <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-cocoa">
              {landing.hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-[17px] leading-[1.65] text-muted">
              {landing.hero.lead}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-cocoa/55">
              <li className="rounded-full border border-line bg-cream/80 px-3 py-1">
                {site.stats.celebrations}+ celebrations
              </li>
              <li className="rounded-full border border-line bg-cream/80 px-3 py-1">
                {site.stats.rating}★ on Google
              </li>
              <li className="rounded-full border border-line bg-cream/80 px-3 py-1">
                Baked in {site.studioCity}
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={waUrl} variant="whatsapp" external>
                <WhatsAppIconInline className="h-5 w-5" />
                Message Muskan
              </Button>
              <Button href="/creations" variant="outline">
                See real cakes
              </Button>
              <Button href="/order" variant="primary">
                How to book
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_32px_64px_-28px_rgba(44,24,16,0.35)]">
            <Image
              src={landing.hero.image}
              alt={landing.hero.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Story + highlights */}
      <section className="border-b border-line py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>From Muskan&apos;s kitchen</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-semibold text-cocoa sm:text-3xl">
            {landing.introHeading}
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-muted">
            {landing.intro.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          <blockquote className="occasion-pull-quote mt-10 rounded-2xl border border-terracotta/15 bg-terracotta/[0.04] px-6 py-7 sm:px-8">
            <p className="font-display text-[1.2rem] font-medium leading-snug text-cocoa sm:text-[1.35rem]">
              &ldquo;{landing.pullQuote.text}&rdquo;
            </p>
            {landing.pullQuote.context ? (
              <footer className="mt-4 text-sm font-medium text-terracotta">
                — {landing.pullQuote.context}
              </footer>
            ) : (
              <footer className="mt-4 text-sm font-medium text-terracotta">
                — Muskan, {site.name}
              </footer>
            )}
          </blockquote>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {landing.highlights.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-line bg-cream/50 p-5 shadow-[0_8px_24px_-16px_rgba(44,24,16,0.12)]"
              >
                <h3 className="font-display text-base font-semibold text-cocoa">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WhatsApp checklist */}
      <section className="border-b border-line bg-cocoa py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-gold">
            Copy this into WhatsApp
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-surface sm:text-3xl">
            What to send so we can quote you today
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-surface/65">
            You do not need perfect photos — a screenshot from our gallery and your date is enough
            for Muskan to reply with sizes, flavours, and delivery timing.
          </p>
          <ul className="mt-8 space-y-3">
            {landing.whatsappChecklist.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-surface/10 bg-surface/[0.06] px-4 py-3.5 text-[15px] leading-snug text-surface/90"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta text-xs font-bold text-surface"
                  aria-hidden
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button href={waUrl} variant="whatsapp" external className="mt-8">
            <WhatsAppIconInline className="h-5 w-5" />
            Open WhatsApp — {site.phone}
          </Button>
        </div>
      </section>

      {/* Ideas */}
      <section className="bg-cream/60 py-14 sm:py-20" aria-labelledby="ideas-heading">
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <SectionLabel>Start here</SectionLabel>
          <h2
            id="ideas-heading"
            className="mt-3 font-display text-2xl font-semibold text-cocoa sm:text-3xl"
          >
            {ideasTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{ideasLead}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {landing.ideas.map((idea) => (
              <li key={idea.title}>
                <Link href={idea.href} className="location-card group flex h-full flex-col rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-cocoa">{idea.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {idea.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-terracotta group-hover:underline">
                    {idea.label} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="border-t border-line py-14 sm:py-20" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Real orders, real photos</SectionLabel>
          <h2
            id="gallery-heading"
            className="mt-3 font-display text-2xl font-semibold text-cocoa sm:text-3xl"
          >
            {landing.galleryTitle}
          </h2>
          <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-muted">
            {landing.galleryLead}
          </p>
          <motion.ul
            className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
            variants={staggerContainer}
            initial={reducedMotion ? false : "hidden"}
            whileInView={reducedMotion ? undefined : "visible"}
            viewport={{ once: true }}
          >
            {creations.map((creation) => (
              <motion.li key={creation.slug} variants={fadeUp}>
                <Link href={`/creations/${creation.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cocoa/5">
                    <Image
                      src={creation.cover}
                      alt={formatCreationImageAlt(creation)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <p className="mt-2.5 text-sm font-medium text-cocoa group-hover:text-terracotta">
                    {creation.title}
                  </p>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          <p className="mt-8">
            <Link
              href={
                landing.catalogFilter.format
                  ? `/creations?format=${landing.catalogFilter.format}`
                  : `/creations?occasion=${landing.catalogFilter.occasion}`
              }
              className="text-sm font-semibold text-terracotta hover:underline"
            >
              View full gallery →
            </Link>
          </p>
        </div>
      </section>

      {/* Order steps */}
      <section className="border-t border-line bg-cream/40 py-14 sm:py-20" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Four simple steps</SectionLabel>
          <h2 id="steps-heading" className="mt-3 font-display text-2xl font-semibold text-cocoa">
            From your first message to the cake on the table
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {orderSteps.map((step, i) => (
              <li key={step.title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cocoa text-sm font-semibold text-surface">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cocoa">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-line py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Worth reading next</SectionLabel>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {landing.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-terracotta/30 hover:shadow-[0_12px_32px_-20px_rgba(196,92,62,0.25)]"
                >
                  <p className="font-display font-semibold text-cocoa">{link.label}</p>
                  {link.description ? (
                    <p className="mt-1 text-sm text-muted">{link.description}</p>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other occasions */}
      <section className="border-t border-line bg-cream/50 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-muted">Planning something else?</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {OCCASION_FOOTER_LINKS.filter((l) => l.href !== `/${landing.slug}`).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-cocoa transition-colors hover:border-terracotta/40 hover:text-terracotta"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/occasions"
                className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-muted hover:text-terracotta"
              >
                All occasions
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-line py-14 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Honest answers</SectionLabel>
          <h2 id="faq-heading" className="mt-3 font-display text-2xl font-semibold text-cocoa">
            Questions families ask before they book
          </h2>
          <dl className="mt-8 divide-y divide-line">
            {landing.faqs.map((faq) => (
              <div key={faq.question} className="py-6 first:pt-0">
                <dt className="font-display text-[17px] font-semibold text-cocoa">{faq.question}</dt>
                <dd className="mt-2.5 text-[15px] leading-relaxed text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-line py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ReviewsNote />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-cocoa py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.25rem)] font-semibold text-surface">
            {landing.ctaTitle}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-surface/70">{landing.ctaLead}</p>
          <Button href={waUrl} variant="whatsapp" external className="mt-8">
            <WhatsAppIconInline className="h-5 w-5" />
            WhatsApp {site.phone}
          </Button>
        </div>
      </section>
    </div>
  );
}
