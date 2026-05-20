import { site } from "./content";
import {
  getBookingPathMessage,
  type BookingPathId,
} from "./order-booking";

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

export function getBookingPathWhatsAppUrl(pathId: BookingPathId): string {
  return getWhatsAppUrl(getBookingPathMessage(pathId));
}

export function getLocationWhatsAppUrl(placeName: string): string {
  const message = `Hi Sweet Bites! I'm in ${placeName}, Goa and would like a custom cake from sweetbites.me.\n\n• Occasion:\n• Date:\n• Guest count:\n• Theme / reference:\n\nThank you!`;
  return getWhatsAppUrl(message);
}
