"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { showcaseSection } from "@/lib/content";
import { siteMedia } from "@/lib/site-media";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { defaultTransition } from "@/lib/motion";

export function ShowcaseSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[420px] overflow-hidden sm:min-h-[520px]">
      <Image
        src={siteMedia.showcaseImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-cocoa/65" aria-hidden />
      <motion.div
        className="relative mx-auto flex min-h-[420px] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:min-h-[520px]"
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={defaultTransition}
      >
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          {showcaseSection.title}
        </h2>
        <p className="mt-4 text-lg text-white/85">{showcaseSection.subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            href={getWhatsAppUrl()}
            variant="whatsapp"
            external
            className="hover:scale-105"
          >
            Start your custom order
          </Button>
          <Button href="/creations" variant="outline" className="!border-white !text-white hover:!bg-white/10">
            Browse creations
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
