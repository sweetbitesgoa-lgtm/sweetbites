import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { BLOG_EXPLORE_LINKS, getAllBlogPosts } from "@/lib/blog";
import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogBlocks, getBlogHeadings } from "@/components/blog/BlogBlocks";

type BlogArticleLayoutProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
};

export function BlogArticleLayout({ post, relatedPosts }: BlogArticleLayoutProps) {
  const headings = getBlogHeadings(post.blocks);
  const allPosts = getAllBlogPosts();
  const issueNumber = Math.max(
    1,
    allPosts.findIndex((p) => p.slug === post.slug) + 1,
  );

  return (
    <article className="bg-cream text-cocoa">
      <BlogArticleHero post={post} issueNumber={issueNumber} />

      {/* Body + sidebar */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-8">
          <BlogBlocks blocks={post.blocks} />

          <footer className="mt-16 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <p className="font-display text-lg font-medium text-cocoa">
              Ready to plan your cake?
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Message{" "}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cocoa underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta"
              >
                {site.phone}
              </a>{" "}
              with your date and a photo from our{" "}
              <Link
                href="/creations"
                className="font-semibold text-terracotta underline decoration-terracotta/35 underline-offset-4"
              >
                gallery
              </Link>
              . Muskan reads every enquiry herself.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={getWhatsAppUrl()} variant="whatsapp" external>
                <WhatsAppIconInline className="h-5 w-5" />
                Open WhatsApp
              </Button>
              <Button href="/blog" variant="outline" className="rounded-md px-5">
                All articles
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
                <ol className="mt-4 space-y-2.5 border-l border-terracotta/20 pl-4">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="text-sm font-medium text-cocoa/80 transition-colors hover:text-terracotta"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <nav
              aria-label="Explore Sweet Bites"
              className="rounded-xl border border-terracotta/15 bg-terracotta/[0.05] p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-terracotta">
                Explore the site
              </p>
              <ul className="mt-4 space-y-3">
                {BLOG_EXPLORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group block text-sm font-semibold text-cocoa transition-colors hover:text-terracotta"
                    >
                      {link.label}
                      <span className="mt-0.5 block text-xs font-normal leading-relaxed text-muted group-hover:text-cocoa/70">
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

      {/* Related articles */}
      {relatedPosts.length > 0 ? (
        <section
          className="border-t border-line bg-surface py-14 sm:py-16"
          aria-labelledby="related-articles-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="related-articles-heading"
              className="font-display text-2xl font-medium tracking-tight text-cocoa"
            >
              Continue reading
            </h2>
            <p className="mt-2 max-w-lg text-muted">
              More journal guides with internal links to our gallery, locations, and order flow.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="blog-index-card group flex h-full flex-col rounded-xl border border-line p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-terracotta/25 hover:shadow-[0_20px_40px_-24px_rgba(44,24,16,0.2)]"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta">
                      {related.focusKeyword}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-medium leading-snug text-cocoa transition-colors group-hover:text-terracotta">
                      {related.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
                      {related.excerpt}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-terracotta">
                      Read article →
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
