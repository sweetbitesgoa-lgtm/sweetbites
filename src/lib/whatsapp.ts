import { site } from "./content";

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage =
    `Hi Sweet Bites! I'd like to order a custom cake from sweetbites.me.\n\n• Occasion:\n• Date:\n• Servings:\n• Theme/Flavours:\n\nThank you!`;
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function getCreationWhatsAppUrl(creation: {
  title: string;
  slug: string;
}): string {
  const link = `${site.url}/creations/${creation.slug}`;
  const message = `Hi Sweet Bites! I'd like to order a cake similar to "${creation.title}" from sweetbites.me.\n\nReference: ${link}\n\n• Occasion:\n• Date:\n• Servings:\n• Any changes to the design:\n\nThank you!`;
  return getWhatsAppUrl(message);
}
