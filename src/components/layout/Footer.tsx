import Link from "next/link";
import { navLinks, site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cocoa/10 bg-cocoa text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo variant="light" size="md" align="start" />
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Custom cakes in Goa — {site.domain}. WhatsApp {site.phone}.
              Handcrafted by Muskan.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Explore
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Connect
            </p>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>{site.location}</li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-gold transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/50">
          © {year} {site.name}. All rights reserved. Made with love in Goa.
        </div>
      </div>
    </footer>
  );
}
