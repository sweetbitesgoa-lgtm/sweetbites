"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site, testimonials } from "@/lib/content";
import { siteMedia } from "@/lib/site-media";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { WhatsAppOrderCard } from "@/components/order/WhatsAppOrderCard";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { aboutSeo } from "@/lib/seo-content";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 7-3.5A4.5 4.5 0 0 1 19 11c0 5.65-7 10-7 10Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HandsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 11V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4M8 11H6a2 2 0 0 0-2 2v1c0 2.5 2 4.5 4.5 4.5H11M8 11h2m2 0h2m0 0h2a2 2 0 0 1 2 2v.5c0 1.5-1 2.5-2.5 2.5H14"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const heartMoments = [
  {
    title: "She remembers the feeling",
    body: "The first time someone cried happy tears over a cake. The kid who wouldn't stop hugging the box. That's the bar — not trends, not likes.",
    icon: HeartIcon,
  },
  {
    title: "Your story, not a template",
    body: "Muskan reads your WhatsApp like a friend would: who's turning one, who's nervous about the wedding speech, who just needs something beautiful after a hard year.",
    icon: SparkIcon,
  },
  {
    title: "One pair of hands",
    body: `No conveyor belt in ${site.studioCity}. When you book Sweet Bites, the person sketching your cake is the same person piping it at dawn.`,
    icon: HandsIcon,
  },
] as const;

const journey = [
  {
    title: "You reach out",
    body: "A voice note, a photo from Pinterest, a messy \"I don't know what I want\" — all of it is welcome. Starting messy is honest.",
  },
  {
    title: "She listens back",
    body: "Muskan replies with warmth and clarity: what's possible on your date, what will survive a Goan afternoon, what fits your budget without shame.",
  },
  {
    title: "The kitchen goes quiet",
    body: "Butter, sugar, colour on the palette — hours you don't see. The part where care looks like patience.",
  },
  {
    title: "Your door opens",
    body: "Pickup in Velim or delivery across Goa — the cake arrives like a little event of its own. That's the part you remember.",
  },
] as const;

export function AboutPageView() {
  const reducedMotion = useReducedMotion();
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <div className="bg-surface text-cocoa antialiased">
      {/* Hero — light, asymmetric, current editorial */}
      <header className="about-mesh relative border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10 lg:gap-y-16">
            <motion.div
              className="lg:col-span-7"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                <span className="font-medium text-cocoa">{site.name}</span>
                <span className="text-muted/40" aria-hidden>
                  ·
                </span>
                <span>{site.studioCity}, Goa</span>
              </div>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.02em] text-cocoa">
                The cake is never just flour and sugar.
              </h1>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-muted sm:text-lg sm:leading-relaxed">
                It&apos;s the text you send at midnight because someone you love has a birthday
                tomorrow. It&apos;s Muskan reading that message and thinking:{" "}
                <span className="text-cocoa">we can make them feel seen.</span>
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href={getWhatsAppUrl()} variant="whatsapp" external>
                  <WhatsAppIconInline className="h-5 w-5" />
                  Tell her your story
                </Button>
                <Button href="/creations" variant="outline">
                  Browse gallery
                </Button>
              </div>
              <p className="mt-10 text-xs leading-relaxed text-muted sm:text-sm">
                {site.phone} · {site.domain} · {site.hours}
              </p>
            </motion.div>

            <motion.div
              className="relative lg:col-span-5"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.06, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-cream sm:aspect-[4/5] lg:max-h-[min(520px,70vh)] lg:ml-auto lg:max-w-md">
                <Image
                  src={siteMedia.heroPoster}
                  alt="Muskan decorating a custom celebration cake at Sweet Bites in Velim, Goa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Pull quote — minimal rail, no card chrome */}
      <section className="border-b border-line bg-cream/80 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <blockquote className="max-w-3xl border-l-2 border-terracotta pl-6 sm:pl-8">
            <p className="font-display text-xl font-normal leading-snug tracking-tight text-cocoa sm:text-2xl sm:leading-snug lg:text-[1.65rem] lg:leading-snug">
              Years from now, nobody will remember the frosting technique. They&apos;ll remember who
              showed up with the cake — and how loved they felt.
            </p>
            <footer className="mt-6 text-sm text-muted">Muskan — behind every order</footer>
          </blockquote>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-line py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-20 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial={reducedMotion ? false : "hidden"}
            whileInView={reducedMotion ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            className="order-2 lg:order-1"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-muted">
              How this began
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 font-display text-2xl font-medium leading-snug tracking-tight text-cocoa sm:text-3xl lg:text-[2rem]"
            >
              It didn&apos;t start as a brand. It started as &ldquo;yes, I&apos;ll bake that for
              you.&rdquo;
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-muted">
              <p>
                Friends. Cousins. A neighbour who heard from a neighbour. Word moved through Goa the
                old way — trust, tears, laughter around a table.
              </p>
              <p>
                Today there&apos;s a name ({site.name}) and a gallery full of proof. But the feeling
                is the same: someone you&apos;ve never met is rooting for your moment before she even
                preheats the oven.
              </p>
              <p>
                If you&apos;ve ever worried your idea is &ldquo;too much&rdquo; or &ldquo;too
                simple&rdquo; — send it anyway. The best cakes start with a little vulnerability.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button href="/reels" variant="secondary" className="rounded-md px-5">
                Reels
              </Button>
              <Button href={site.instagram} variant="outline" external className="rounded-md px-5">
                {site.instagramHandle}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={defaultTransition}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-cream ring-1 ring-cocoa/[0.06] lg:aspect-square">
              <Image
                src={siteMedia.showcaseImage}
                alt="Custom cake from the Sweet Bites gallery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <p className="mt-3 text-xs text-muted">From the gallery — real orders, real light.</p>
          </motion.div>
        </div>
      </section>

      {/* Values — dividers, no shadow cards */}
      <section className="py-16 sm:py-24 lg:py-28" aria-labelledby="values-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 id="values-heading" className="font-display text-2xl font-medium tracking-tight text-cocoa sm:text-3xl">
              What &ldquo;custom&rdquo; actually means here
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Not a marketing word — three things Muskan won&apos;t trade away.
            </p>
          </div>
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {heartMoments.map((item) => (
              <li key={item.title} className="grid gap-6 py-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10 sm:py-12">
                <item.icon className="h-5 w-5 shrink-0 text-terracotta sm:mt-1" />
                <div>
                  <h3 className="font-display text-lg font-medium text-cocoa">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey — vertical timeline */}
      <section className="border-t border-line bg-cream/60 py-16 sm:py-24 lg:py-28" aria-labelledby="journey-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="journey-heading" className="font-display text-2xl font-medium tracking-tight text-cocoa sm:text-3xl">
            What it feels like to order
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            Human steps — the kind you&apos;d explain to a friend over chai.
          </p>
          <ol className="mt-14 max-w-2xl space-y-0">
            {journey.map((item, i) => (
              <li key={item.title} className="flex gap-5 pb-12 last:pb-0 sm:gap-6">
                <div className="flex flex-col items-center pt-1.5">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full bg-terracotta ring-4 ring-cream/80"
                    aria-hidden
                  />
                  {i < journey.length - 1 ? (
                    <span className="mt-2 min-h-[2.75rem] w-px flex-1 bg-line" aria-hidden />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-medium text-cocoa">{item.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stats — Swiss / product-style */}
      <section className="border-y border-line py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-3 sm:gap-8 sm:px-6 lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Celebrations</p>
            <p className="mt-2 font-display text-4xl font-medium tabular-nums tracking-tight text-cocoa sm:text-5xl">
              {site.stats.celebrations}+
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Tables you almost didn&apos;t set — then were so glad you did.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Average</p>
            <p className="mt-2 font-display text-4xl font-medium tabular-nums tracking-tight text-cocoa sm:text-5xl">
              {site.stats.rating}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Honest replies and adjustments when something matters.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Reviews</p>
            <p className="mt-2 font-display text-4xl font-medium tabular-nums tracking-tight text-cocoa sm:text-5xl">
              {site.stats.reviewCount}+
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">Real families across Goa — many came back for the next chapter.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 lg:py-28" aria-labelledby="voices-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="voices-heading" className="font-display text-2xl font-medium tracking-tight text-cocoa sm:text-3xl">
            What people said after the candles
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted">A small slice of the inbox.</p>
          <ul className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {featuredTestimonials.map((t) => (
              <li key={t.name} className="rounded-lg border border-line bg-surface p-6 sm:p-8">
                <p className="text-[1.0625rem] leading-relaxed text-cocoa">{t.text}</p>
                <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-5">
                  <p className="text-sm font-medium text-cocoa">
                    {t.name}
                    <span className="font-normal text-muted"> · {t.location}</span>
                  </p>
                  <p className="text-xs tabular-nums text-muted" aria-label={`${t.rating} out of 5 stars`}>
                    {t.rating.toFixed(1)} / 5
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-cream/50 py-12 sm:py-16">
        <div className="mx-auto max-w-lg px-4">
          <WhatsAppOrderCard variant="compact" />
        </div>
      </section>

      <SeoContentSection {...aboutSeo} className="border-t border-line bg-surface" />

      {/* CTA — flat, confident */}
      <section className="bg-cocoa py-16 text-center sm:py-20">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="font-display text-2xl font-medium leading-snug tracking-tight text-cream sm:text-3xl">
            When you&apos;re ready, she&apos;s ready.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/75">
            Share the date, the doubt, the dream — even if it&apos;s not fully formed yet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href={getWhatsAppUrl()}
              variant="primary"
              external
              className="rounded-md !bg-cream !text-cocoa hover:!bg-white"
            >
              <WhatsAppIconInline className="h-5 w-5" />
              WhatsApp
            </Button>
            <Button
              href="/order"
              variant="outline"
              className="rounded-md !border-cream/35 !text-cream hover:!border-cream/60 hover:!bg-cream/10"
            >
              How to order
            </Button>
          </div>
          <p className="mt-8 text-sm text-cream/55">
            <Link href="/locations/velim" className="underline decoration-cream/30 underline-offset-4 hover:decoration-cream/60">
              Studio · {site.studioCity}
            </Link>
            <span className="mx-2 text-cream/35" aria-hidden>
              ·
            </span>
            Book {site.bookAheadDays} ahead
          </p>
        </div>
      </section>
    </div>
  );
}
