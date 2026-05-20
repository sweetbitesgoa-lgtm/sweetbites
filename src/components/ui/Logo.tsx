"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
  align?: "center" | "start";
  showTagline?: boolean;
  onNavigate?: () => void;
};

const config = {
  sm: {
    sweet: "text-[0.62rem] tracking-[0.22em]",
    bites: "text-[1.15rem]",
    tagline: "text-[7px] tracking-[0.26em]",
  },
  md: {
    sweet: "text-[0.68rem] tracking-[0.24em]",
    bites: "text-[1.45rem]",
    tagline: "text-[8px] tracking-[0.3em]",
  },
  lg: {
    sweet: "text-xs lg:text-sm tracking-[0.28em]",
    bites: "text-2xl lg:text-[2.35rem]",
    tagline: "text-[9px] lg:text-[10px] tracking-[0.34em]",
  },
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function Logo({
  className = "",
  size = "md",
  variant = "default",
  align = "center",
  showTagline = true,
  onNavigate,
}: LogoProps) {
  const reducedMotion = useReducedMotion();
  const isLight = variant === "light";
  const c = config[size];
  const centered = align === "center";

  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={`group inline-flex ${centered ? "items-center" : "items-start"} ${className}`}
    >
      <motion.div
        className={`flex min-w-0 flex-col ${centered ? "items-center text-center" : "items-start text-left"}`}
        initial={reducedMotion ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
      >
        <span
          className={`font-display font-medium uppercase leading-none ${c.sweet} ${
            isLight ? "text-cream/70" : "text-cocoa/55"
          }`}
        >
          Sweet
        </span>

        <span
          className={`logo-text-shimmer mt-0.5 bg-gradient-to-r from-terracotta via-gold to-terracotta bg-clip-text font-display font-semibold leading-[0.95] text-transparent ${c.bites} ${
            isLight
              ? "from-gold via-cream to-gold"
              : "group-hover:from-terracotta-dark group-hover:via-gold group-hover:to-terracotta"
          }`}
        >
          Bites
        </span>

        {showTagline && (
          <motion.span
            className={`mt-1.5 flex items-center gap-2 font-sans font-bold uppercase ${c.tagline} ${
              isLight ? "text-gold/80" : "text-terracotta/70"
            }`}
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.45 }}
          >
            <span
              className={`h-px w-3 bg-gradient-to-r from-transparent to-gold/70 ${centered ? "" : "hidden sm:block"}`}
              aria-hidden
            />
            {site.tagline}
            <span
              className={`h-px w-3 bg-gradient-to-l from-transparent to-gold/70 ${centered ? "" : "hidden sm:block"}`}
              aria-hidden
            />
          </motion.span>
        )}

        {size === "lg" && showTagline && (
          <span
            className={`mt-1 hidden font-sans text-[9px] font-medium uppercase tracking-[0.2em] lg:block ${
              isLight ? "text-cream/40" : "text-cocoa/35"
            }`}
          >
            Goa
          </span>
        )}
      </motion.div>
    </Link>
  );
}
