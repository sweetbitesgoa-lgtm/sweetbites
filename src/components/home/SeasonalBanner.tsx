"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { seasonalBanner } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { defaultTransition } from "@/lib/motion";

export function SeasonalBanner() {
  const reducedMotion = useReducedMotion();

  if (!seasonalBanner.enabled) return null;

  return (
    <motion.div
      className="relative overflow-hidden border-b border-gold/30 bg-gradient-to-r from-gold-light via-cream to-blush py-3.5"
      initial={reducedMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={defaultTransition}
      role="note"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:gap-4 sm:px-6 sm:text-left lg:px-8">
        <p className="text-sm text-cocoa">
          <span className="mr-1.5 font-bold text-terracotta" aria-hidden>
            📅
          </span>
          <span className="font-semibold">{seasonalBanner.title}</span>
          <span className="hidden text-cocoa/75 sm:inline"> — </span>
          <span className="mt-0.5 block text-cocoa/75 sm:mt-0 sm:inline">
            {seasonalBanner.message}
          </span>
        </p>
        <Link
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-terracotta px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          {seasonalBanner.ctaLabel}
        </Link>
      </div>
    </motion.div>
  );
}
