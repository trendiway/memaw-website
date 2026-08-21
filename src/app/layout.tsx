import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  fallback: ["Georgia", "serif"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Kris Hapgood RN | F.I.R.E. Framework for Health & Vitality After 40",
    template: "%s | Kris Hapgood RN",
  },
  description:
    "International speaker, best-selling author, and 33+ year nurse helping ambitious people reclaim vitality through the F.I.R.E. Framework™ and LifeWave X39.",
  keywords: [
    "Kris Hapgood",
    "F.I.R.E. Framework",
    "LifeWave X39",
    "holistic health",
    "nurse educator",
    "vitality after 40",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Kris Hapgood RN",
    title:
      "Kris Hapgood RN | F.I.R.E. Framework for Health & Vitality After 40",
    description:
      "International speaker, best-selling author, and 33+ year nurse helping ambitious people reclaim vitality through the F.I.R.E. Framework™ and LifeWave X39.",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${fraunces.variable}`}>
      <body className={`${fraunces.variable} ${nunito.variable} min-h-screen font-sans antialiased`}>
  <Navbar />
  <main>{children}</main>
  <Footer />
</body>
    </html>
  );
}
