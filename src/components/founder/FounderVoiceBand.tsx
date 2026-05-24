import { muskanFounder } from "@/lib/founder-voice";
import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

type FounderVoiceBandProps = {
  /** Full letter + promises, or compact quote only */
  variant?: "full" | "compact";
  className?: string;
};

export function FounderVoiceBand({
  variant = "full",
  className = "",
}: FounderVoiceBandProps) {
  if (variant === "compact") {
    return (
      <section
        className={`founder-voice-compact border-y border-line bg-gradient-to-br from-blush/60 via-cream to-gold-light/40 py-12 sm:py-14 ${className}`}
        aria-labelledby="founder-compact-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="founder-eyebrow">{muskanFounder.badge}</p>
          <blockquote
            id="founder-compact-heading"
            className="founder-quote mt-4 text-cocoa"
          >
            &ldquo;{muskanFounder.homepageQuote}&rdquo;
          </blockquote>
          <footer className="mt-5 text-sm font-semibold text-terracotta">
            {muskanFounder.signature}{" "}
            <span className="font-normal text-muted">· {muskanFounder.signatureTitle}</span>
          </footer>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`founder-voice-band text-cream ${className}`}
      aria-labelledby="founder-voice-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="founder-eyebrow text-gold">{muskanFounder.badge}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-cream/60">
              {muskanFounder.role}
            </p>
            <h2 id="founder-voice-heading" className="founder-display mt-5 text-cream">
              {muskanFounder.headline}
            </h2>
            <p className="founder-lead mt-5 text-cream/80">{muskanFounder.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={getWhatsAppUrl()} variant="whatsapp" external>
                <WhatsAppIconInline className="h-5 w-5" />
                {muskanFounder.cta.primary}
              </Button>
              <Button
                href="/about"
                variant="outline"
                className="rounded-md border-cream/30 bg-transparent text-cream hover:bg-cream/10"
              >
                My story
              </Button>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-6">
            {muskanFounder.letter.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="founder-prose text-cream/75">
                {paragraph}
              </p>
            ))}
            <p className="pt-2 font-display text-lg font-medium text-gold">
              {muskanFounder.signature}
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {muskanFounder.promises.map((item) => (
            <li
              key={item.title}
              className="founder-promise-card rounded-2xl border border-cream/15 bg-cream/5 p-5 backdrop-blur-sm"
            >
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <h3 className="mt-3 font-display text-base font-medium text-cream">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{item.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-cream/50">
          {site.phone} · {site.domain} · Studio in {site.studioCity}, Goa
        </p>
      </div>
    </section>
  );
}

export function FounderPromisesStrip({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`mx-auto grid max-w-6xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8 ${className}`}
    >
      {muskanFounder.promises.map((item) => (
        <li
          key={item.title}
          className="rounded-xl border border-line bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <span className="text-xl" aria-hidden>
            {item.icon}
          </span>
          <p className="mt-2 font-display text-sm font-semibold text-cocoa">{item.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
