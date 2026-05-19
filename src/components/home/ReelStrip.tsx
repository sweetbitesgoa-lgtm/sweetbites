"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getAllReels } from "@/lib/catalog";
import { defaultTransition } from "@/lib/motion";

export function ReelStrip() {
  const reducedMotion = useReducedMotion();
  const reels = getAllReels().slice(0, 8);

  return (
    <section className="bg-cocoa py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Behind the Bite
            </p>
            <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
              Watch Muskan at work
            </h2>
          </div>
          <Link
            href="/reels"
            className="text-sm font-semibold text-gold transition-colors hover:text-gold-light"
          >
            All reels →
          </Link>
        </motion.div>

        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
          {reels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReelCard({
  reel,
}: {
  reel: ReturnType<typeof getAllReels>[number];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const href = reel.creationSlug
    ? `/creations/${reel.creationSlug}`
    : "/reels";

  return (
    <Link
      href={href}
      className="relative w-36 shrink-0 snap-center overflow-hidden rounded-2xl aspect-[9/16] bg-cocoa/50 sm:w-44"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const v = videoRef.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
    >
      <video
        ref={videoRef}
        src={reel.src}
        muted
        loop
        playsInline
        preload="metadata"
        poster={reel.cover}
        className="h-full w-full object-cover"
      />
      <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa p-2 text-[10px] font-medium text-white line-clamp-2">
        {reel.title}
      </p>
    </Link>
  );
}
