import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

type CaseStudyHeroProps = {
  study: CaseStudy;
  caseNumber: number;
};

export function CaseStudyHero({ study, caseNumber }: CaseStudyHeroProps) {
  const label = String(caseNumber).padStart(2, "0");

  return (
    <header className="case-study-hero relative overflow-hidden border-b border-line bg-cocoa text-cream">
      <div className="case-study-hero-grid pointer-events-none absolute inset-0 opacity-80" aria-hidden />
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-8">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <nav aria-label="Breadcrumb" className="text-sm text-cream/60">
                <Link href="/case-studies" className="font-medium hover:text-gold">
                  Case studies
                </Link>
                <span className="mx-2 text-cream/30" aria-hidden>
                  /
                </span>
                <span className="text-cream/50">CS-{label}</span>
              </nav>

              <p className="mt-6 inline-flex items-center gap-2 rounded-md border border-terracotta/40 bg-terracotta/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gold-light">
                {study.difficulty}
              </p>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold/90">
                Focus · {study.focusKeyword}
              </p>

              <h1 className="mt-4 font-display text-[clamp(1.65rem,3.8vw,2.45rem)] font-medium leading-[1.1] tracking-tight text-cream">
                {study.title.replace(/^Case study:\s*/i, "")}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-cream/75 sm:text-lg">
                {study.excerpt}
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-cream/10 pt-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-cream/45">
                  Lead time
                </dt>
                <dd className="mt-1 font-medium text-cream">{study.leadTime}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-cream/45">
                  Celebration
                </dt>
                <dd className="mt-1 font-medium text-cream">{study.celebrationType}</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-cream/45">
                  Read
                </dt>
                <dd className="mt-1 font-medium text-cream">{study.readMinutes} min</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={study.heroGalleryHref} variant="primary" className="text-sm">
                {study.heroGalleryLabel}
              </Button>
              <Button
                href={getWhatsAppUrl()}
                variant="whatsapp"
                external
                className="text-sm"
              >
                <WhatsAppIconInline className="h-5 w-5" />
                Order similar
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="case-study-hero-frame relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-cream/15 sm:aspect-[16/11] lg:h-full lg:min-h-[360px] lg:aspect-auto">
              <Image
                src={study.heroImage}
                alt={study.heroImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-transparent"
                aria-hidden
              />
              <span className="absolute bottom-4 left-4 rounded-md bg-cream/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cocoa">
                Delivered · {site.studioCity}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
