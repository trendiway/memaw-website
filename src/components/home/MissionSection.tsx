"use client";

import Image from "next/image";
import { DnaBackground } from "@/components/DnaBackground";
import { Section } from "@/components/ui/Section";

/**
 * Second homepage snap section - "MEET KRIS"
 * Satiny blush / cream-pink background with deep dusty-rose (--color-brand) text.
 */
export function MissionSection() {
  return (
    <Section id="mission" snap className="bg-blush text-[var(--color-brand)]">
      <DnaBackground variant="corner-tr" opacity={0.08} tone="text-pink" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-14">
        {/* Big headline - matches X39 heading style */}
        <h2
          className="heading-display font-bold leading-none"
          style={{ fontSize: "clamp(4.5rem, 9vw, 8rem)", color: "var(--color-brand)", marginBottom: "1.25rem" }}
        >
          MEET KRIS
        </h2>

        {/* Motto - left edge aligns with image below (same container padding) */}
        <p className="font-sans text-[1.05rem] font-medium tracking-[0.16em] text-[var(--color-brand)] sm:text-[1.1rem]">
          Educating. Empowering. Transforming Lives.
        </p>

        {/* Two-column: image + name left, bio right */}
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Left - photo + name + credential */}
          <div className="w-full shrink-0 lg:w-72 xl:w-80">
            <div
              className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border-2"
              style={{ borderColor: "#d67c8c" }}
            >
              <Image
                src="/memaw-website/images/aboutheadshot.jpeg"
                alt="Kris Hapgood, RN, BSN"
                fill
                sizes="(max-width: 1024px) 100vw, 20rem"
                className="object-cover object-top"
                priority
              />
            </div>

            <p className="mt-4 font-sans text-xl font-semibold tracking-wide text-[var(--color-brand)]">
              Kris Hapgood
            </p>
            <p className="mt-1 font-sans text-sm text-[var(--color-brand)]/80">
              Registered Nurse
            </p>
          </div>

          {/* Right - first bio paragraph from krisrn.com */}
          <div className="min-w-0 flex-1 lg:pt-2">
            <style>{`
              @keyframes meet-kris-learn-pulse {
                0%   { box-shadow: 0 0 0 0   rgba(232,155,168,0.45); }
                60%  { box-shadow: 0 0 0 12px rgba(232,155,168,0.08); }
                100% { box-shadow: 0 0 0 18px rgba(232,155,168,0); }
              }
            `}</style>
            <p className="font-sans text-base leading-[1.85] text-[var(--color-brand)] sm:text-[1.05rem]">
              Kris Hapgood, RN, BSN, is an international speaker, best-selling
              author, registered nurse, and founder of Essential Health
              Solutions, Inc. With more than 33 years of healthcare experience,
              she has dedicated her life to helping people move beyond simply
              managing symptoms and toward living healthier, stronger, and more
              vibrant lives.
            </p>
            <p className="mt-5 font-sans text-base leading-[1.85] text-[var(--color-brand)] sm:text-[1.05rem]">
              After decades at the bedside, Kris discovered LifeWave X39 and
              saw a bridge between clinical nursing and holistic medicine: a
              non-invasive way to support the body&apos;s own repair. That
              discovery reshaped her practice, guiding her from traditional care
              into educating others on regenerative wellness rooted in both
              science and compassion.
            </p>
            <a
              href="/about"
              className="mt-7 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--color-pink)",
                animation: "meet-kris-learn-pulse 2.8s ease-out infinite",
              }}
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
