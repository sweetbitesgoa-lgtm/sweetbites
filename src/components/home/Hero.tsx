"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { localIngredients, site } from "@/lib/content";
import { siteMedia } from "@/lib/site-media";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { FloatingDecor } from "@/components/ui/FloatingDecor";
import { defaultTransition } from "@/lib/motion";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [0, 80],
  );

  const showVideo = siteMedia.heroVideo && !videoFailed;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-cream pt-8 pb-20 sm:pt-12 sm:pb-28"
    >
      <div className="grain-overlay absolute inset-0 opacity-60" aria-hidden />
      <FloatingDecor />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blush/80 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sage-light/60 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : defaultTransition}
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta animate-pulse" />
            Custom cakes · {site.location}
          </p>
          <h1 className="font-display text-[2.75rem] font-semibold leading-[1.05] text-cocoa sm:text-5xl lg:text-[3.5rem]">
            Custom cakes in Goa,
            <br />
            crafted for <span className="text-terracotta italic">your</span>
            <br />
            sweetest moments
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cocoa/75">
            {site.name} {site.tagline} — birthday, wedding, bento & designer cakes
            hand-made in Panaji. Browse 160+ real creations and book on WhatsApp.
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {localIngredients.map((item) => (
              <li
                key={item}
                className="rounded-full border border-sage/20 bg-sage-light/50 px-3 py-1 text-xs font-medium text-sage"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-4 flex items-center gap-2 text-sm text-terracotta font-medium">
            <span aria-hidden>📅</span>
            Book {site.bookAheadDays} ahead for custom designs
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href={getWhatsAppUrl()}
              variant="whatsapp"
              external
              className="hover:scale-105 active:scale-95"
            >
              Start your order
            </Button>
            <Button href="/creations" variant="outline" className="hover:scale-105">
              Browse creations
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ y: imageY }}
        >
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { ...defaultTransition, delay: 0.2 }
            }
            className="relative aspect-[4/5] w-full"
          >
            <div className="blob-mask absolute inset-0 overflow-hidden shadow-2xl shadow-terracotta/15 ring-4 ring-gold/20">
              {showVideo ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={siteMedia.heroPoster}
                  onError={() => setVideoFailed(true)}
                >
                  <source src={siteMedia.heroVideo} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={siteMedia.heroPoster}
                  alt="Elegant custom tier cake with floral decoration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  priority
                />
              )}
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8">
              <p className="font-display text-2xl font-semibold text-terracotta">
                <CountUp end={site.stats.celebrations} suffix="+" />
              </p>
              <p className="text-sm text-cocoa/70">Happy celebrations</p>
            </div>
            <div className="absolute -right-2 top-8 rounded-2xl bg-sage px-4 py-3 text-white shadow-lg sm:-right-6">
              <p className="text-xs font-medium uppercase tracking-wider opacity-90">
                Rated
              </p>
              <p className="font-display text-lg font-semibold">
                {site.stats.rating} ★
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
