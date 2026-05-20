"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies";
import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { defaultTransition } from "@/lib/motion";

type CaseStudyIndexViewProps = {
  studies: CaseStudy[];
};

export function CaseStudyIndexView({ studies }: CaseStudyIndexViewProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="bg-cream text-cocoa">
      <section className="case-study-index-hero relative overflow-hidden border-b border-line bg-cream">
        <div className="pointer-events-none absolute inset-0 about-mesh opacity-90" aria-hidden />
        <div
          className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-terracotta/[0.07] blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:py-20">
          <motion.div
            className="lg:col-span-6"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta">
              Portfolio · {site.name}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.25rem)] font-medium leading-[1.02] tracking-tight text-cocoa">
              Case studies
              <span className="mt-2 block text-[0.55em] font-normal tracking-normal text-muted">
                Near-impossible cakes, delivered in Goa
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Barbie castle tiers, Spiderman sculpts, unicorn horns — the designs other bakers
              decline. Each story covers the brief, structure, humidity, and handover so you know
              what booking one really takes.
            </p>

            <dl className="mt-8 flex flex-wrap gap-6 border-t border-line pt-6 text-sm">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Documented
                </dt>
                <dd className="mt-1 font-display text-2xl font-medium tabular-nums text-cocoa">
                  {studies.length}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Kitchen
                </dt>
                <dd className="mt-1 font-medium text-cocoa">{site.studioCity}, Goa</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Themes
                </dt>
                <dd className="mt-1 font-medium text-cocoa">Kids · character · structure</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={getWhatsAppUrl()} variant="whatsapp" external>
                <WhatsAppIconInline className="h-5 w-5" />
                Order a similar cake
              </Button>
              <Button href="/creations?occasion=kids" variant="outline" className="rounded-md px-5">
                Kids gallery
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-12 lg:col-span-6 lg:mt-0"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ ...defaultTransition, delay: reducedMotion ? 0 : 0.1 }}
          >
            <ul className="case-study-index-mosaic relative mx-auto grid max-w-md grid-cols-2 gap-3 sm:max-w-lg lg:mx-0 lg:ml-auto lg:max-w-none">
              {studies.slice(0, 3).map((study, i) => {
                const positions = [
                  "col-span-2 aspect-[2/1]",
                  "aspect-square -mt-2",
                  "aspect-square translate-y-2",
                ];
                const pos = positions[i] ?? "aspect-square";
                return (
                  <li
                    key={study.slug}
                    className={`${pos} case-study-index-mosaic-item overflow-hidden rounded-xl ring-1 ring-cocoa/10`}
                  >
                    <Link href={`/case-studies/${study.slug}`} className="group relative block h-full w-full">
                      <Image
                        src={study.heroImage}
                        alt={study.heroImageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/55 via-cocoa/5 to-transparent" />
                      <span className="absolute left-3 top-3 rounded bg-cream/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cocoa">
                        CS-{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute bottom-3 left-3 right-3 text-xs font-semibold leading-snug text-cream">
                        {study.focusKeyword}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            {studies.length} documented builds
          </p>
          <ul className="mt-10 grid gap-8 lg:grid-cols-3">
            {studies.map((study, i) => (
              <li key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="case-study-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-terracotta/25 hover:shadow-[0_28px_56px_-28px_rgba(44,24,16,0.22)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-cocoa/5">
                    <Image
                      src={study.heroImage}
                      alt={study.heroImageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-cocoa/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                      CS-{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta">
                      {study.focusKeyword}
                    </span>
                    <p className="mt-2 text-xs font-medium text-muted">{study.difficulty}</p>
                    <h2 className="mt-3 flex-1 font-display text-lg font-medium leading-snug text-cocoa transition-colors group-hover:text-terracotta">
                      {study.title.replace(/^Case study:\s*/i, "")}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                      {study.excerpt}
                    </p>
                    <span className="mt-5 text-sm font-semibold text-terracotta">
                      Read full case study →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cocoa py-14 text-center text-cream sm:py-16">
        <div className="mx-auto max-w-xl px-4">
          <p className="font-display text-xl leading-snug sm:text-2xl">
            Your theme might be on this list next.
          </p>
          <p className="mt-4 text-sm text-cream/65">
            Message with photos, date, and venue — Muskan will say yes, no, or “yes with these
            changes.”
          </p>
          <Button href={getWhatsAppUrl()} variant="whatsapp" external className="mt-8">
            <WhatsAppIconInline className="h-5 w-5" />
            WhatsApp {site.phone}
          </Button>
        </div>
      </section>
    </div>
  );
}
