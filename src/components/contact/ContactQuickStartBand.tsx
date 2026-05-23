import Link from "next/link";
import { site } from "@/lib/content";
import { getContactInquiryWhatsAppUrl } from "@/lib/contact-page";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

const JUMP_LINKS = [
  { href: "#contact-whatsapp-template", label: "Message template" },
  { href: "#contact-include", label: "What to send" },
  { href: "#contact-steps", label: "How it works" },
  { href: "#contact-lead-times", label: "Lead times" },
  { href: "#contact-occasions", label: "By occasion" },
  { href: "#contact-studio", label: "Studio & map" },
  { href: "#contact-faq-heading", label: "FAQs" },
] as const;

export function ContactQuickStartBand() {
  return (
    <section className="contact-quick-start border-b border-cocoa/20 bg-cocoa text-cream">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              Start here · Sweet Bites Goa
            </p>
            <h2 className="contact-display-lg mt-2 text-cream">
              Message Muskan on WhatsApp
            </h2>
            <p className="contact-lead mt-3 text-cream/80">
              All cake orders and quotes go through WhatsApp so Muskan can see your photos, date,
              and town. Studio pickup in {site.studioCity} or delivery across Goa.
            </p>
            <p className="mt-4 font-display text-2xl font-medium tracking-tight text-gold sm:text-3xl">
              {site.phone}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Button href={getContactInquiryWhatsAppUrl()} variant="whatsapp" external className="justify-center">
              <WhatsAppIconInline className="h-5 w-5" />
              Open WhatsApp with template
            </Button>
            <Button
              href={`tel:+91${site.phoneRaw}`}
              variant="outline"
              className="justify-center rounded-md border-cream/30 bg-transparent text-cream hover:bg-cream/10"
            >
              Call {site.phone}
            </Button>
          </div>
        </div>
        <nav
          className="mt-8 flex flex-wrap gap-2 border-t border-cream/10 pt-6"
          aria-label="On this page"
        >
          {JUMP_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-cream/20 bg-cream/10 px-3 py-1.5 text-xs font-semibold text-cream transition-colors hover:border-gold/50 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/cakes-menu"
            className="rounded-full border border-cream/20 bg-cream/10 px-3 py-1.5 text-xs font-semibold text-cream transition-colors hover:border-gold/50 hover:text-gold"
          >
            Ready-made menu
          </Link>
        </nav>
      </div>
    </section>
  );
}
