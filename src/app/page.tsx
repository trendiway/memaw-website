"use client";

import { useEffect } from "react";
import { DotNav } from "@/components/home/DotNav";
import { HeroSection } from "@/components/home/HeroSection";
import { MissionSection } from "@/components/home/MissionSection";
import { FireTeaserSection } from "@/components/home/FireTeaserSection";
import { X39SpotlightSection } from "@/components/home/X39SpotlightSection";
import { ImpactTeaserSection } from "@/components/home/ImpactTeaserSection";
import { ClosingCtaSection } from "@/components/home/ClosingCtaSection";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "mission", label: "MEET KRIS" },
  { id: "fire", label: "F.I.R.E." },
  { id: "x39", label: "X39" },
  { id: "impact", label: "Impact" },
  { id: "cta", label: "Begin" },
];

/**
 * Homepage: vertical snap-scroll storytelling (≥768px only).
 * Document-level scroll-snap so one scroll advances one full section.
 */
export default function HomePage() {
  useEffect(() => {
    const previous = history.scrollRestoration;
    history.scrollRestoration = "manual";
    document.documentElement.scrollTop = 0;
    return () => {
      history.scrollRestoration = previous;
    };
  }, []);

  return (
    <div data-home-snap>
      <DotNav sections={SECTIONS} />
      <HeroSection />
      <MissionSection />
      <FireTeaserSection />
      <X39SpotlightSection />
      <ImpactTeaserSection />
      <ClosingCtaSection />
    </div>
  );
}
