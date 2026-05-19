import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cocoa py-16 sm:py-20">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 0%, #c45c3e 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, #c9a227 0%, transparent 45%),
            radial-gradient(circle at 50% 50%, #4a6741 0%, transparent 70%)`,
        }}
        aria-hidden
      />
      <div
        className="grain-overlay absolute inset-0 opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg leading-relaxed text-cream/80">
            {description}
          </p>
        )}
        {children && <div className="mt-8 flex justify-center">{children}</div>}
      </div>
    </section>
  );
}
