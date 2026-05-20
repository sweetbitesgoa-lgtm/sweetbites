import type { RichLocationContent } from "@/lib/location-content/types";
import { colvaLocationContent } from "@/lib/location-content/colva";
import { anjunaLocationContent } from "@/lib/location-content/anjuna";
import { pondaLocationContent } from "@/lib/location-content/ponda";
import { vascoLocationContent } from "@/lib/location-content/vasco";
import { bagaLocationContent } from "@/lib/location-content/baga";
import { calanguteLocationContent } from "@/lib/location-content/calangute";
import { candolimLocationContent } from "@/lib/location-content/candolim";
import { mapusaLocationContent } from "@/lib/location-content/mapusa";
import { margaoLocationContent } from "@/lib/location-content/margao";
import { panajiLocationContent } from "@/lib/location-content/panaji";
import { taleigaoLocationContent } from "@/lib/location-content/taleigao";
import { velimLocationContent } from "@/lib/location-content/velim";

const richBySlug: Record<string, RichLocationContent> = {
  velim: velimLocationContent,
  panaji: panajiLocationContent,
  taleigao: taleigaoLocationContent,
  margao: margaoLocationContent,
  mapusa: mapusaLocationContent,
  calangute: calanguteLocationContent,
  candolim: candolimLocationContent,
  baga: bagaLocationContent,
  vasco: vascoLocationContent,
  ponda: pondaLocationContent,
  anjuna: anjunaLocationContent,
  colva: colvaLocationContent,
};

export function getRichLocationContent(
  slug: string,
): RichLocationContent | undefined {
  return richBySlug[slug];
}

export function getRichLocationSlugs(): string[] {
  return Object.keys(richBySlug);
}
