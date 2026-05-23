import { cakesMenuMarqueeFlavours } from "@/lib/cakes-menu";

export function CakesMenuFlavorMarquee() {
  const track = [...cakesMenuMarqueeFlavours, ...cakesMenuMarqueeFlavours];

  return (
    <div
      className="cakes-menu-marquee border-y border-terracotta/15 bg-gradient-to-r from-cream via-white to-cream py-3.5"
      aria-hidden
    >
      <div className="cakes-menu-marquee-track flex w-max gap-8">
        {track.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="cakes-menu-marquee-item shrink-0 font-display text-sm font-semibold tracking-wide text-cocoa/70"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
