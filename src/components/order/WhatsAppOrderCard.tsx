import { site } from "@/lib/content";
import { getCreationWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

const checklist = [
  "Occasion (birthday, wedding, haldi, etc.)",
  "Event date & delivery time",
  "Number of guests / cake size",
  "Theme, colours & flavours",
  "Reference photo (from our gallery or yours)",
  "Pickup or delivery location in Goa",
];

type WhatsAppOrderCardProps = {
  creationTitle?: string;
  creationSlug?: string;
  variant?: "default" | "compact";
  className?: string;
};

export function WhatsAppOrderCard({
  creationTitle,
  creationSlug,
  variant = "default",
  className = "",
}: WhatsAppOrderCardProps) {
  const href =
    creationTitle && creationSlug
      ? getCreationWhatsAppUrl({ title: creationTitle, slug: creationSlug })
      : getWhatsAppUrl();

  const isCompact = variant === "compact";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#25D366]/10 via-white to-gold-light/40 p-6 shadow-lg ring-1 ring-[#25D366]/20 sm:p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#25D366]/10 blur-2xl"
        aria-hidden
      />

      <div className="relative">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#128C7E]">
          <WhatsAppIconInline className="h-4 w-4" />
          Book on WhatsApp
        </div>

        <h2
          className={`font-display font-semibold text-cocoa ${isCompact ? "text-xl" : "text-2xl"}`}
        >
          {creationTitle
            ? `Order "${creationTitle}"`
            : "Order your custom cake"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-cocoa/70">
          {creationTitle
            ? "We’ll open WhatsApp with this design as your reference. Add your date, guest count, and any tweaks."
            : "All orders are confirmed on WhatsApp — fast replies, custom quotes, and photo updates from Muskan."}
        </p>

        {!isCompact && (
          <ul className="mt-6 space-y-2.5">
            {checklist.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-cocoa/80">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[10px] font-bold text-white"
                  aria-hidden
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <Button
          href={href}
          variant="whatsapp"
          external
          className={`w-full ${isCompact ? "mt-4" : "mt-8"}`}
        >
          <WhatsAppIconInline className="h-5 w-5" />
          {creationTitle ? "Order this design" : "Chat on WhatsApp"}
        </Button>

        <p className="mt-4 text-center text-xs text-cocoa/50">
          Typical reply within a few hours · {site.hours}
        </p>
        <p className="mt-1 text-center text-xs text-cocoa/50">
          Or call{" "}
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="font-semibold text-terracotta hover:underline"
          >
            {site.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
