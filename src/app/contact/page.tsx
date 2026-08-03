import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 20-minute health discovery call with Kris Hapgood RN, or send a message.",
};

export default function ContactPage() {
  return <ContactContent />;
}
