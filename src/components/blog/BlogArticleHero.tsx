import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { site } from "@/lib/content";
import { siteMedia } from "@/lib/site-media";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

function formatPostDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type BlogArticleHeroProps = {
  post: BlogPost;
  /** 1-based issue number on the journal */
  issueNumber: number;
};

export function BlogArticleHero({ post, issueNumber }: BlogArticleHeroProps) {
  const issueLabel = String(issueNumber).padStart(2, "0");
  const heroSrc = post.heroImage ?? siteMedia.showcaseImage;
  const heroAlt =
    post.heroImageAlt ??
    `${site.name} custom cakes — ${post.focusKeyword}`;

  return (
    <header className="blog-post-hero relative overflow-hidden border-b border-line bg-cream">
      <div className="blog-post-hero-wash pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -right-8 top-6 select-none font-display text-[clamp(7rem,22vw,14rem)] font-medium leading-none tracking-tighter text-cocoa/[0.04]"
        aria-hidden
      >
        {issueLabel}
      </div>
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold via-terracotta/80 to-transparent opacity-90"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          {/* Left rail — dateline */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-cocoa/10 lg:col-span-2 lg:flex-col lg:items-start lg:gap-6 lg:border-r lg:pr-6">
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link
                href="/blog"
                className="font-semibold text-cocoa transition-colors hover:text-terracotta"
              >
                ← Journal
              </Link>
            </nav>
            <div className="hidden lg:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                Issue
              </p>
              <p className="mt-1 font-display text-4xl font-medium tabular-nums text-terracotta/80">
                {issueLabel}
              </p>
            </div>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  Published
                </dt>
                <dd className="mt-0.5 font-medium text-cocoa">
                  <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  Reading
                </dt>
                <dd className="mt-0.5 font-medium text-cocoa">{post.readMinutes} min</dd>
              </div>
            </dl>
          </div>

          {/* Title block */}
          <div className="lg:col-span-5 lg:pt-2">
            <p className="inline-block max-w-full border-b-2 border-terracotta pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-terracotta">
              {post.focusKeyword}
            </p>
            <h1 className="mt-5 font-display text-[clamp(1.75rem,4.2vw,2.65rem)] font-medium leading-[1.12] tracking-tight text-cocoa">
              {post.title}
            </h1>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-muted sm:text-lg sm:leading-relaxed">
              {post.excerpt}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Article topics">
              {post.keywords.slice(0, 4).map((kw) => (
                <li key={kw}>
                  <span className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-[10px] font-semibold text-cocoa/70">
                    {kw}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={getWhatsAppUrl()} variant="whatsapp" external className="text-sm">
                <WhatsAppIconInline className="h-5 w-5" />
                WhatsApp
              </Button>
              <Button href="/order" variant="outline" className="rounded-md px-5 text-sm">
                How to order
              </Button>
            </div>
          </div>

          {/* Photo — offset “print” frame */}
          <div className="relative lg:col-span-5 lg:col-start-8 lg:row-span-1 lg:self-center">
            <div className="blog-post-hero-photo relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-dashed border-gold/35"
                aria-hidden
              />
              <div className="blog-post-hero-arch relative aspect-[5/6] overflow-hidden bg-cocoa/5 shadow-[0_28px_56px_-32px_rgba(44,24,16,0.35)] ring-1 ring-cocoa/10 sm:aspect-[4/5]">
                <Image
                  src={heroSrc}
                  alt={heroAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cocoa/25 via-transparent to-gold/10"
                  aria-hidden
                />
              </div>
              <p className="blog-post-hero-caption mt-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-muted lg:text-right">
                {post.heroGalleryHref && post.heroGalleryLabel ? (
                  <>
                    <Link
                      href={post.heroGalleryHref}
                      className="text-terracotta underline decoration-terracotta/30 underline-offset-2 hover:decoration-terracotta"
                    >
                      {post.heroGalleryLabel}
                    </Link>
                    <span className="text-muted/50"> · </span>
                  </>
                ) : null}
                {site.name} · {site.studioCity}, Goa
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="blog-post-hero-rule relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        aria-hidden
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>
    </header>
  );
}
