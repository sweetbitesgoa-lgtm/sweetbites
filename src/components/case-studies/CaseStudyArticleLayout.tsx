import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { getAllCaseStudies } from "@/lib/case-studies";
import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { BlogBlocks, getBlogHeadings } from "@/components/blog/BlogBlocks";
import { CaseStudyHero } from "@/components/case-studies/CaseStudyHero";

type CaseStudyArticleLayoutProps = {
  study: CaseStudy;
  relatedStudies: CaseStudy[];
};

const EXPLORE_LINKS = [
  { href: "/creations", label: "Full gallery", description: "160+ real orders to reference" },
  { href: "/reels", label: "Reels", description: "Watch complex builds in progress" },
  { href: "/blog/kids-birthday-cake-goa-character-themes", label: "Kids theme guide", description: "How to brief character cakes" },
  { href: "/order", label: "How to order", description: "Lead times & deposits" },
  { href: "/locations", label: "Delivery areas", description: "North & South Goa" },
  { href: "/blog", label: "Journal", description: "More planning articles" },
] as const;

export function CaseStudyArticleLayout({
  study,
  relatedStudies,
}: CaseStudyArticleLayoutProps) {
  const headings = getBlogHeadings(study.blocks);
  const all = getAllCaseStudies();
  const caseNumber = Math.max(1, all.findIndex((s) => s.slug === study.slug) + 1);

  return (
    <article className="bg-cream text-cocoa">
      <CaseStudyHero study={study} caseNumber={caseNumber} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-8">
          <BlogBlocks blocks={study.blocks} />

          <footer className="mt-16 rounded-2xl border-2 border-terracotta/20 bg-terracotta/[0.04] p-6 sm:p-8">
            <p className="font-display text-lg font-medium text-cocoa">
              Want a similar impossible cake?
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Send Muskan your theme, date, and venue on WhatsApp at{" "}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cocoa underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta"
              >
                {site.phone}
              </a>
              . Link this case study or the matching{" "}
              <Link
                href={study.heroGalleryHref}
                className="font-semibold text-terracotta underline decoration-terracotta/35 underline-offset-4"
              >
                gallery creation
              </Link>{" "}
              — she will reply with honest timing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={getWhatsAppUrl()} variant="whatsapp" external>
                <WhatsAppIconInline className="h-5 w-5" />
                WhatsApp Muskan
              </Button>
              <Button href="/case-studies" variant="outline" className="rounded-md px-5">
                All case studies
              </Button>
            </div>
          </footer>
        </div>

        <aside className="mt-12 lg:col-span-4 lg:mt-0">
          <div className="lg:sticky lg:top-28 lg:space-y-6">
            {headings.length > 0 ? (
              <nav
                aria-label="On this page"
                className="rounded-xl border border-line bg-surface p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  On this page
                </p>
                <ol className="mt-4 space-y-2.5 border-l border-cocoa/15 pl-4">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="text-sm font-medium text-cocoa/80 hover:text-terracotta"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <div className="rounded-xl border border-line bg-cocoa p-5 text-cream">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                Documented creation
              </p>
              <p className="mt-2 font-display text-lg font-medium">{study.heroGalleryLabel}</p>
              <p className="mt-2 text-sm text-cream/70">
                Slug: <span className="font-mono text-cream/90">{study.creationSlug}</span>
              </p>
              <Link
                href={study.heroGalleryHref}
                className="mt-4 inline-flex text-sm font-semibold text-gold hover:underline"
              >
                Open gallery →
              </Link>
            </div>

            <nav
              aria-label="Explore site"
              className="rounded-xl border border-line bg-surface p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Explore
              </p>
              <ul className="mt-4 space-y-3">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group block text-sm font-semibold text-cocoa hover:text-terracotta"
                    >
                      {link.label}
                      <span className="mt-0.5 block text-xs font-normal text-muted group-hover:text-cocoa/70">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>

      {relatedStudies.length > 0 ? (
        <section className="border-t border-line bg-surface py-14 sm:py-16" aria-labelledby="more-cs">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 id="more-cs" className="font-display text-2xl font-medium text-cocoa">
              More near-impossible builds
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedStudies.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/case-studies/${related.slug}`}
                    className="group block h-full rounded-xl border border-line bg-cream p-6 transition-[border-color,box-shadow] hover:border-terracotta/25 hover:shadow-lg"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta">
                      {related.difficulty}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-medium text-cocoa group-hover:text-terracotta">
                      {related.title.replace(/^Case study:\s*/i, "")}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">{related.excerpt}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-terracotta">
                      Read case study →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  );
}
