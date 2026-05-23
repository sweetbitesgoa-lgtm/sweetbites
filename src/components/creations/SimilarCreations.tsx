import Image from "next/image";
import Link from "next/link";
import type { Creation } from "@/lib/catalog";
import { getSimilarCreationsHeading } from "@/lib/catalog";
import { formatCreationImageAlt } from "@/lib/creation-seo";
import type { CaseStudy } from "@/lib/case-studies";

type SimilarCreationsProps = {
  current: Creation;
  creations: Creation[];
  caseStudy?: CaseStudy;
};

export function SimilarCreations({ current, creations, caseStudy }: SimilarCreationsProps) {
  if (creations.length === 0) return null;

  const heading = getSimilarCreationsHeading(current);
  const filterHref =
    current.occasion[0] != null
      ? `/creations?occasion=${current.occasion[0]}`
      : current.format[0] != null
        ? `/creations?format=${current.format[0]}`
        : "/creations";

  return (
    <section
      className="border-t border-line bg-white py-14 sm:py-16"
      aria-labelledby="similar-creations-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {caseStudy ? (
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="mb-8 flex flex-col gap-2 rounded-2xl border border-terracotta/20 bg-terracotta/[0.04] px-5 py-4 transition-colors hover:border-terracotta/35 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-terracotta">
                Case study
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-cocoa">
                How Muskan built this cake
              </p>
              <p className="mt-1 text-sm text-muted line-clamp-2">{caseStudy.excerpt}</p>
            </div>
            <span className="shrink-0 text-sm font-semibold text-terracotta">
              Read the story →
            </span>
          </Link>
        ) : null}

        <p className="text-[13px] font-medium tracking-wide text-muted">Keep browsing</p>
        <h2
          id="similar-creations-heading"
          className="mt-2 font-display text-2xl font-semibold text-cocoa sm:text-3xl"
        >
          {heading}
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
          Same vibe, different design — tap a cake to open its gallery, then order something
          similar on WhatsApp.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {creations.map((creation) => {
            const tag =
              creation.occasion[0] ?? creation.format[0] ?? creation.aesthetic[0];
            return (
              <li key={creation.slug}>
                <Link
                  href={`/creations/${creation.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-surface ring-1 ring-line transition-[box-shadow,ring-color] duration-300 hover:ring-terracotta/25 hover:shadow-[0_16px_40px_-24px_rgba(196,92,62,0.35)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                    <Image
                      src={creation.cover}
                      alt={formatCreationImageAlt(creation)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    {tag ? (
                      <span className="absolute left-3 top-3 rounded-md bg-cocoa/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
                        {tag.replace(/-/g, " ")}
                      </span>
                    ) : null}
                    {creation.video ? (
                      <span
                        className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-surface/95 text-[10px] text-cocoa shadow-sm ring-1 ring-line"
                        aria-hidden
                      >
                        ▶
                      </span>
                    ) : null}
                  </div>
                  <div className="border-t border-line p-4">
                    <h3 className="font-display text-base font-semibold text-cocoa transition-colors group-hover:text-terracotta">
                      {creation.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-terracotta">
                      View cake →
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-8">
          <Link href={filterHref} className="text-sm font-semibold text-terracotta hover:underline">
            View full gallery →
          </Link>
        </p>
      </div>
    </section>
  );
}
