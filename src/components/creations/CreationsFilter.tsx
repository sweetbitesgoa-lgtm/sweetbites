"use client";

import { getCatalogFilters } from "@/lib/catalog";

export type CreationsFilterState = {
  occasion: string | null;
  format: string | null;
  color: string | null;
  hasVideo: boolean;
  q: string;
};

type CreationsFilterProps = {
  active: CreationsFilterState;
  onChange: (next: Partial<CreationsFilterState>) => void;
  resultCount: number;
};

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${
        selected
          ? "bg-terracotta text-white"
          : "bg-white text-cocoa/80 ring-1 ring-cocoa/10 hover:bg-cream"
      }`}
    >
      {label}
    </button>
  );
}

export function CreationsFilter({
  active,
  onChange,
  resultCount,
}: CreationsFilterProps) {
  const filters = getCatalogFilters();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          placeholder="Search creations…"
          value={active.q}
          onChange={(e) => onChange({ q: e.target.value })}
          className="min-w-[200px] flex-1 rounded-full border border-cocoa/15 bg-white px-4 py-2 text-sm text-cocoa outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
        />
        <Chip
          label="Has reel"
          selected={active.hasVideo}
          onClick={() => onChange({ hasVideo: !active.hasVideo })}
        />
        <span className="text-sm text-cocoa/50">{resultCount} creations</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <Chip
          label="All occasions"
          selected={!active.occasion}
          onClick={() => onChange({ occasion: null })}
        />
        {filters.occasions.map((o) => (
          <Chip
            key={o}
            label={o.replace(/-/g, " ")}
            selected={active.occasion === o}
            onClick={() =>
              onChange({ occasion: active.occasion === o ? null : o })
            }
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <Chip
          label="All formats"
          selected={!active.format}
          onClick={() => onChange({ format: null })}
        />
        {filters.formats.map((f) => (
          <Chip
            key={f}
            label={f}
            selected={active.format === f}
            onClick={() => onChange({ format: active.format === f ? null : f })}
          />
        ))}
      </div>

      {filters.colors.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.colors.map((c) => (
            <Chip
              key={c}
              label={c}
              selected={active.color === c}
              onClick={() =>
                onChange({ color: active.color === c ? null : c })
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
