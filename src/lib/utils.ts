import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Internal booking page */
export const BOOKING_URL = "/book";

/** LeadConnector booking widget embed URL */
export const BOOKING_WIDGET_URL =
  "https://api.leadconnectorhq.com/widget/bookings/free-20min-health-discovery-call";

/** LifeWave X39 merchant storefront — open in a new tab/window */
export const X39_PURCHASE_URL = "https://www.lifewave.com/krisrn";

export const SITE = {
  name: "Kris Hapgood RN",
  fullName: "Kris Hapgood, RN, BSN",
  company: "Essential Health Solutions, Inc.",
  tagline: "Educating. Empowering. Transforming Lives.",
  bookTitle: "The Gifts of Pain",
} as const;
