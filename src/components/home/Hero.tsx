"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { deliveryAreas, goaReach, site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import { HEADER_OCCASION_LINKS } from "@/lib/occasion-landings";
import {
  pickRandomHeroClip,
  siteMedia,
  type HeroClip,
} from "@/lib/site-media";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { defaultTransition, staggerContainer } from "@/lib/motion";

const fadeChild = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const marqueeAreas = [...deliveryAreas, ...deliveryAreas];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [heroClip, setHeroClip] = useState<HeroClip | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeroClip(pickRandomHeroClip());
    setVideoFailed(false);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mediaScale = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [1, 1] : [1, 1.06],
  );
  const mediaY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [0, 60],
  );

  const poster = heroClip?.poster ?? siteMedia.heroPoster;
  const showVideo = Boolean(heroClip?.video) && !videoFailed;

  return (
    <section
      ref={sectionRef}
      className="hero-goa relative isolate overflow-hidden bg-cocoa text-cream"
      aria-label="Welcome"
    >
      <motion.div
        className="hero-goa-sky pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="hero-goa-wave pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-cream" aria-hidden />

      {/* Goa reach marquee */}
      <div className="relative z-20 border-b border-cream/10 bg-cocoa/80 backdrop-blur-sm">
        <div className="overflow-hidden py-2.5">
          <ul
            className={`hero-goa-marquee flex w-max gap-8 px-4 ${reducedMotion ? "" : "animate-marquee"}`}
            aria-label="Delivery across Goa"
          >
            {marqueeAreas.map((area, i) => (
              <li
                key={`${area}-${i}`}
                className="flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80"
              >
                <span className="text-gold" aria-hidden>
                  ◆
                </span>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.div variants={fadeChild} transition={defaultTransition}>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold/60" aria-hidden />
              {goaReach.eyebrow}
            </p>

            <h1 className="mt-4 font-display text-[clamp(2.1rem,5.8vw,3.25rem)] font-semibold leading-[1.06] text-cream">
              {goaReach.heroTitle}
            </h1>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
              <p className="font-display text-lg font-semibold text-cream sm:text-xl">
                {site.name} {site.tagline}
              </p>
              <nav
                className="flex flex-wrap items-center gap-2 lg:hidden"
                aria-label="Cake occasions"
              >
                {HEADER_OCCASION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:border-gold hover:bg-gold/20"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
              {goaReach.heroLead}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Delivery areas in Goa">
              {deliveryAreas.map((place) => (
                <li key={place}>
                  <Link
                    href={locationPath(place.toLowerCase())}
                    className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-cream transition-colors hover:border-gold hover:bg-gold/20"
                  >
                    {place}
                  </Link>
                </li>
              ))}
            </ul>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              variants={fadeChild}
            >
              <Button
                href={getWhatsAppUrl()}
                variant="whatsapp"
                external
                className="w-full justify-center sm:w-auto"
              >
                <WhatsAppIcon />
                Book on WhatsApp
              </Button>
              <Button
                href="/creations"
                variant="outline"
                className="w-full justify-center border-cream/25 bg-transparent text-cream hover:border-gold hover:text-gold sm:w-auto"
              >
                See 160+ creations
              </Button>
            </motion.div>

            <p className="mt-4 text-sm text-cream/50">
              Book{" "}
              <span className="font-semibold text-gold">{site.bookAheadDays}</span>{" "}
              ahead · Pickup in {site.studioCity} · delivery statewide
            </p>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            variants={fadeChild}
            transition={{ ...defaultTransition, delay: 0.12 }}
          >
            <motion.div
              className="hero-goa-arch relative aspect-[4/5] w-full overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-gold/30"
              style={{ scale: mediaScale, y: mediaY }}
            >
              {showVideo && heroClip ? (
                <video
                  key={heroClip.video}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={poster}
                  onError={() => setVideoFailed(true)}
                >
                  <source src={heroClip.video} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={poster}
                  alt="Custom celebration cake by Sweet Bites — delivered across Goa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  priority
                />
              )}
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/70 via-transparent to-cocoa/20"
                aria-hidden
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-3 left-4 right-4 flex items-stretch justify-between gap-3 rounded-2xl border border-gold/25 bg-cream px-4 py-3 text-cocoa shadow-xl sm:-bottom-5 sm:left-6 sm:right-6 sm:px-5"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ...defaultTransition }}
            >
              <div>
                <p className="font-display text-2xl font-semibold leading-none text-terracotta">
                  <CountUp end={site.stats.celebrations} suffix="+" />
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-cocoa/55">
                  Goa celebrations
                </p>
              </div>
              <span className="w-px self-stretch bg-cocoa/10" aria-hidden />
              <div className="text-right">
                <p className="font-display text-2xl font-semibold leading-none text-terracotta">
                  {site.stats.rating}
                  <span className="text-gold">★</span>
                </p>
                {(site.googleReviewUrl ?? site.googleBusinessUrl) ? (
                  <a
                    href={site.googleReviewUrl ?? site.googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-[10px] font-bold uppercase tracking-wider text-cocoa/55 underline decoration-cocoa/20 underline-offset-2 hover:text-terracotta hover:decoration-terracotta/40"
                  >
                    {site.stats.reviewCount}+ reviews
                  </a>
                ) : (
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-cocoa/55">
                    {site.stats.reviewCount}+ reviews
                  </p>
                )}
              </div>
              <span className="w-px self-stretch bg-cocoa/10" aria-hidden />
              <motion.div
                className="hidden min-w-[4.5rem] flex-col justify-center text-right sm:flex"
                animate={reducedMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-sage">
                  All Goa
                </p>
                <p className="text-xs font-semibold text-cocoa">Delivery</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-cream/10 bg-cream text-cocoa">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-cocoa/70 sm:text-left">
            {goaReach.tagline}
          </p>
          <Link
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-terracotta transition-colors hover:text-terracotta-dark"
          >
            WhatsApp {site.phone}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
