"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  filterCreations,
  type Creation,
} from "@/lib/catalog";
import {
  CreationsFilter,
  type CreationsFilterState,
} from "./CreationsFilter";
import { defaultTransition } from "@/lib/motion";

function parseFilters(params: URLSearchParams): CreationsFilterState {
  return {
    occasion: params.get("occasion"),
    format: params.get("format"),
    color: params.get("color"),
    hasVideo: params.get("video") === "1",
    q: params.get("q") ?? "",
  };
}

function filtersToQuery(filters: CreationsFilterState): string {
  const p = new URLSearchParams();
  if (filters.occasion) p.set("occasion", filters.occasion);
  if (filters.format) p.set("format", filters.format);
  if (filters.color) p.set("color", filters.color);
  if (filters.hasVideo) p.set("video", "1");
  if (filters.q.trim()) p.set("q", filters.q.trim());
  const s = p.toString();
  return s ? `?${s}` : "";
}

export function CreationsGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reducedMotion = useReducedMotion();

  const active = useMemo(
    () => parseFilters(searchParams),
    [searchParams],
  );

  const filtered = useMemo(
    () =>
      filterCreations({
        occasion: active.occasion,
        format: active.format,
        color: active.color,
        hasVideo: active.hasVideo,
        q: active.q,
      }),
    [active],
  );

  const setFilters = useCallback(
    (next: Partial<CreationsFilterState>) => {
      const merged = { ...active, ...next };
      router.replace(`/creations${filtersToQuery(merged)}`, { scroll: false });
    },
    [active, router],
  );

  return (
    <div>
      <CreationsFilter
        active={active}
        onChange={setFilters}
        resultCount={filtered.length}
      />

      <motion.ul
        layout={!reducedMotion}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((creation) => (
            <CreationCard
              key={creation.slug}
              creation={creation}
              reducedMotion={!!reducedMotion}
            />
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted">
          No creations match these filters. Try clearing a filter or search
          again.
        </p>
      )}
    </div>
  );
}

function CreationCard({
  creation,
  reducedMotion,
}: {
  creation: Creation;
  reducedMotion: boolean;
}) {
  const tag =
    creation.occasion[0] ?? creation.format[0] ?? creation.aesthetic[0];

  return (
    <motion.li
      layout={!reducedMotion}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
      transition={defaultTransition}
    >
      <Link
        href={`/creations/${creation.slug}`}
        className="group block overflow-hidden rounded-lg bg-surface ring-1 ring-line transition-[box-shadow,ring-color] duration-300 hover:ring-terracotta/25"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          <Image
            src={creation.cover}
            alt={creation.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          {tag && (
            <span className="absolute left-3 top-3 rounded-md bg-cocoa/85 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-cream backdrop-blur-sm">
              {tag.replace(/-/g, " ")}
            </span>
          )}
          {creation.video && (
            <span
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-surface/95 text-cocoa shadow-sm ring-1 ring-line"
              aria-hidden
            >
              ▶
            </span>
          )}
        </div>
        <div className="border-t border-line p-5">
          <h3 className="font-display text-lg font-medium text-cocoa transition-colors group-hover:text-terracotta">
            {creation.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
            {creation.description}
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-terracotta">
            View cake
          </p>
        </div>
      </Link>
    </motion.li>
  );
}
