"use client";

import { motion, useReducedMotion } from "framer-motion";
import { muskanFounder } from "@/lib/founder-voice";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { defaultTransition } from "@/lib/motion";

export function CtaBanner() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-terracotta py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #c9a227 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #4a6741 0%, transparent 40%)`,
        }}
        aria-hidden
      />
      <motion.div
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6"
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={defaultTransition}
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
          {muskanFounder.badge}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          {muskanFounder.cta.headline}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/85">
          {muskanFounder.cta.body}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            href={getWhatsAppUrl()}
            variant="whatsapp"
            external
            className="!bg-white !text-terracotta hover:!bg-cream"
          >
            {muskanFounder.cta.primary}
          </Button>
          <Button href="/order" variant="outline" className="!border-white/40 !text-white hover:!bg-white/10 hover:!text-white">
            {muskanFounder.cta.secondary}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
