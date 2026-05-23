"use client";

import { useState } from "react";
import {
  contactWhatsAppTemplate,
  getContactInquiryWhatsAppUrl,
} from "@/lib/contact-page";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

export function ContactWhatsAppTemplate() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(contactWhatsAppTemplate);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="contact-template-card rounded-2xl border border-[#25D366]/25 bg-gradient-to-br from-[#25D366]/[0.08] via-white to-cream p-6 sm:p-8">
      <p className="contact-eyebrow">WhatsApp template</p>
      <h2 className="contact-section-title mt-2">Copy this message to Muskan</h2>
      <p className="mt-2 text-sm text-muted">
        Fill in the blanks, or tap the button to open WhatsApp with this text ready to send.
      </p>
      <pre className="mt-5 max-h-56 overflow-auto rounded-xl border border-line bg-cream/80 p-4 text-xs leading-relaxed text-cocoa/85 whitespace-pre-wrap">
        {contactWhatsAppTemplate}
      </pre>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button href={getContactInquiryWhatsAppUrl()} variant="whatsapp" external>
          <WhatsAppIconInline className="h-5 w-5" />
          Open in WhatsApp
        </Button>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md border border-line bg-white px-5 py-2.5 text-sm font-semibold text-cocoa transition-colors hover:border-terracotta/40 hover:text-terracotta"
        >
          {copied ? "Copied!" : "Copy message"}
        </button>
      </div>
    </div>
  );
}
