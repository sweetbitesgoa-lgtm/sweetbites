"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { BlogPost } from "@/lib/blog";
import { BLOG_EXPLORE_LINKS } from "@/lib/blog";
import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { defaultTransition } from "@/lib/motion";

function postCategory(slug: string): string {
  if (slug.includes("wedding")) return "Weddings";
  if (slug.includes("eggless") || slug.includes("kids")) return "Families";
  if (slug.includes("bento")) return "Bento";
  return "Guides";
}

function formatPostDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

type BlogIndexViewProps = {
  posts: BlogPost[];
  heroImageSrc: string;
  heroImageAlt: string;
  secondaryImageSrc: string;
  secondaryImageAlt: string;
};

export function BlogIndexView({
  posts,
  heroImageSrc,
  heroImageAlt,
  secondaryImageSrc,
  secondaryImageAlt,
}: BlogIndexViewProps) {
  const reducedMotion = useReducedMotion();
  const [featured, ...rest] = posts;
  const idx = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-cream text-cocoa">
      {/* Magazine hero */}
      <section className="blog-index-hero relative overflow-hidden">
        <div className="blog-index-hero-grid pointer-events-none absolute inset-0 opacity-90" aria-hidden />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.2]" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden />
                  {site.studioCity} · Goa · SEO journal
                </p>
                <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,4rem)] font-medium leading-[0.95] tracking-[-0.03em] text-cream">
                  <span className="block text-gold-light/95">Journal</span>
                  <span className="mt-1 block text-cream">
                    Guides for
                    <br className="hidden sm:block" /> ranking celebrations.
                  </span>
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
                  Long-form tips on <strong className="font-semibold text-cream">custom cake in Goa</strong>
                  , <strong className="font-semibold text-cream">wedding cake delivery</strong>,{" "}
                  <strong className="font-semibold text-cream">kids birthday cakes</strong>, and{" "}
                  <strong className="font-semibold text-cream">bento cake Goa</strong> — with links
                  to our gallery, locations, and WhatsApp booking flow.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href={getWhatsAppUrl()} variant="whatsapp" external>
                    <WhatsAppIconInline className="h-5 w-5" />
                    Plan a cake
                  </Button>
                  <Button
                    href="/creations"
                    variant="outline"
                    className="rounded-md !border-cream/35 !text-cream hover:!border-gold-light hover:!bg-cream/10"
                  >
                    Gallery
                  </Button>
                  <Button
                    href="/locations"
                    variant="outline"
                    className="rounded-md !border-cream/35 !text-cream hover:!border-gold-light hover:!bg-cream/10"
                  >
                    Delivery areas
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative lg:col-span-5"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ ...defaultTransition, delay: reducedMotion ? 0 : 0.08 }}
            >
              <div className="blog-index-hero-frame relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[1.25rem] lg:ml-auto lg:max-h-[min(480px,72vh)]">
                <Image
                  src={heroImageSrc}
                  alt={heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/50 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <p className="mt-3 text-center text-xs text-cream/50 lg:text-right">
                {site.name} · {site.domain}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topic hub — internal linking */}
      <section className="border-b border-line bg-surface py-12 sm:py-16" aria-labelledby="topics-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="topics-heading"
            className="font-display text-xl font-medium tracking-tight text-cocoa sm:text-2xl"
          >
            What we write about
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Each article targets a focus keyword in <strong className="font-semibold text-cocoa">bold</strong>{" "}
            and links to relevant pages on sweetbites.me — so you can plan faster and search engines
            understand how our Velim kitchen serves all of Goa.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex h-full flex-col rounded-xl border border-line bg-cream/50 p-5 transition-[border-color,box-shadow] hover:border-terracotta/25 hover:shadow-[0_16px_32px_-20px_rgba(44,24,16,0.15)]"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta">
                    {post.focusKeyword}
                  </span>
                  <span className="mt-2 font-display text-base font-medium leading-snug text-cocoa">
                    {post.title}
                  </span>
                  <span className="mt-3 text-sm font-semibold text-terracotta">Read guide →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured story */}
      {featured ? (
        <section className="relative border-b border-line bg-cream py-16 sm:py-20 lg:py-24">
          <div
            className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-terracotta/[0.06] blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Featured · {featured.focusKeyword}
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group mt-4 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-cream ring-1 ring-line transition-[box-shadow,ring-color] duration-300 group-hover:shadow-[0_32px_64px_-28px_rgba(44,24,16,0.2)] group-hover:ring-terracotta/25 lg:col-span-5 lg:aspect-[4/5]">
                <Image
                  src={secondaryImageSrc}
                  alt={secondaryImageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <span className="absolute left-4 top-4 rounded-md bg-cocoa px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                  {postCategory(featured.slug)}
                </span>
              </div>
              <div className="lg:col-span-7">
                <span className="font-display text-7xl font-semibold leading-none tabular-nums text-terracotta/15 transition-colors group-hover:text-terracotta/25 sm:text-8xl">
                  {idx(1)}
                </span>
                <time
                  dateTime={featured.publishedAt}
                  className="mt-2 block text-sm font-medium text-muted"
                >
                  {formatPostDate(featured.publishedAt)} · {featured.readMinutes} min read
                </time>
                <h2 className="mt-3 font-display text-2xl font-medium leading-snug tracking-tight text-cocoa transition-colors group-hover:text-terracotta sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-terracotta">
                  Read full article
                  <span
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      {/* Secondary articles */}
      {rest.length > 0 ? (
        <section
          className="border-b border-line bg-blush/25 py-16 sm:py-20 lg:py-24"
          aria-label="More articles"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-8">
              <div>
                <h2 className="font-display text-xl font-medium tracking-tight text-cocoa sm:text-2xl">
                  More from the journal
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                  Finish with chai — then share with whoever is stressing about the cake.
                </p>
              </div>
              <Link
                href="/order"
                className="shrink-0 text-sm font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
              >
                How to order →
              </Link>
            </div>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
              {rest.map((post, i) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-index-card group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-terracotta/20 hover:shadow-[0_24px_48px_-28px_rgba(44,24,16,0.18)] sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-md bg-terracotta/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-terracotta">
                        {post.focusKeyword}
                      </span>
                      <span className="font-display text-4xl font-semibold tabular-nums text-cocoa/[0.08] transition-colors group-hover:text-terracotta/20">
                        {idx(i + 2)}
                      </span>
                    </div>
                    <time
                      dateTime={post.publishedAt}
                      className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
                    >
                      {formatPostDate(post.publishedAt)}
                    </time>
                    <h3 className="mt-2 font-display text-lg font-medium leading-snug tracking-tight text-cocoa transition-colors group-hover:text-terracotta sm:text-xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-6 text-sm font-semibold text-terracotta">
                      Continue reading →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Site hub links */}
      <section className="border-b border-line bg-surface py-14 sm:py-16" aria-labelledby="hub-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="hub-heading" className="font-display text-xl font-medium text-cocoa sm:text-2xl">
            Plan on sweetbites.me
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Internal links from our journal to the pages Google and guests use most.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link
                href="/case-studies"
                className="block rounded-lg border border-terracotta/20 bg-terracotta/[0.05] px-4 py-3.5 transition-colors hover:border-terracotta/35 hover:bg-white"
              >
                <span className="text-sm font-semibold text-cocoa">Case studies</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted">
                  Barbie castle, Spiderman & unicorn — impossible builds we delivered
                </span>
              </Link>
            </li>
            {BLOG_EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg border border-line bg-cream/40 px-4 py-3.5 transition-colors hover:border-terracotta/20 hover:bg-white"
                >
                  <span className="text-sm font-semibold text-cocoa">{link.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted">
                    {link.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pull strip */}
      <section className="bg-cocoa py-12 text-center sm:py-16">
        <blockquote className="mx-auto max-w-3xl px-4 font-display text-xl font-normal leading-snug tracking-tight text-cream sm:text-2xl">
          &ldquo;The best messages start messy — we will meet you where you are.&rdquo;
        </blockquote>
        <p className="mt-4 text-sm text-cream/55">— Muskan, {site.name}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 px-4">
          <Button href={getWhatsAppUrl()} variant="whatsapp" external>
            <WhatsAppIconInline className="h-5 w-5" />
            WhatsApp
          </Button>
          <Button
            href="/contact"
            variant="outline"
            className="rounded-md !border-cream/35 !text-cream hover:!border-gold-light hover:!bg-cream/10"
          >
            Contact & map
          </Button>
        </div>
      </section>
    </div>
  );
}
