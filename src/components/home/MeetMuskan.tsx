"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { meetMuskan, site } from "@/lib/content";
import { siteMedia } from "@/lib/site-media";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { fadeUp, defaultTransition } from "@/lib/motion";

export function MeetMuskan() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-blush/40 py-16 sm:py-24" aria-labelledby="meet-muskan-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <motion.div
          className="relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl shadow-xl ring-4 ring-gold/25 lg:max-w-none"
          initial={reducedMotion ? false : { opacity: 0, x: -20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <Image
            src={siteMedia.heroPoster}
            alt="Muskan decorating a custom cake at Sweet Bites Goa"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 50vw"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            {meetMuskan.eyebrow}
          </p>
          <h2
            id="meet-muskan-heading"
            className="mt-2 font-display text-3xl font-semibold text-cocoa sm:text-4xl"
          >
            {meetMuskan.title}
          </h2>
          <div className="mt-5 space-y-4 text-cocoa/75 leading-relaxed">
            {meetMuskan.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about" variant="primary">
              About {site.name}
            </Button>
            <Button href={getWhatsAppUrl()} variant="outline" external>
              Message Muskan
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
