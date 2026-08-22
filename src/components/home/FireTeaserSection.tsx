"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { FIRE_PILLARS } from "@/lib/content";

// Homepage snap: expanded pillar titles + bios (formatting unchanged)
const HOME_PILLAR_TITLES: Record<string, string> = {
  F: "Foundation",
  I: "Identity",
  R: "Resilience",
  E: "Empowerment",
};

const HOME_PILLAR_DESCRIPTIONS: Record<string, string> = {
  F: "Fuel the Body with the foundational nutrition and lifestyle habits every cell needs to thrive.",
  I: 'Identify the Root Cause by looking beyond symptoms to uncover the "why" behind health challenges.',
  R: "Restore Balance by supporting the body's natural ability to heal, recover, and function as it was designed.",
  E: "Empowering Lasting Change through education, practical strategies, and sustainable habits that create a lifetime of better health.",
};

const HOME_FIRE_PILLARS = FIRE_PILLARS.map((pillar) => {
  const title = HOME_PILLAR_TITLES[pillar.letter];
  const description = HOME_PILLAR_DESCRIPTIONS[pillar.letter];
  if (!title || !description) return pillar;
  return { ...pillar, title, description };
});

// ─── Design tokens ──────────────────────────────────────────────────────
const BRAND = "var(--color-brand)"; // matte dusty rose - matches hero section
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DUR = 0.42;

// Letter height is driven by font-size with lineHeight: 1
// Using CSS clamp so the letter is responsive between md and xl breakpoints
const LETTER_FS = "clamp(6rem, 9.5vw, 9rem)";
const LETTER_HALF = "calc(clamp(6rem, 9.5vw, 9rem) / 2)";
const MOBILE_FS = "4.5rem";
const MOBILE_HALF = "2.25rem";

// ─── Shared letter styles ────────────────────────────────────────────────
const makeLetterSpanStyle = (
  fs: string,
): React.CSSProperties => ({
  display: "block",
  textAlign: "center",
  fontFamily: "var(--font-display)",
  fontSize: fs,
  fontWeight: 700,
  lineHeight: 1,
  color: BRAND,
  letterSpacing: "-0.02em",
  userSelect: "none",
  pointerEvents: "none",
  whiteSpace: "nowrap",
});

// No DesktopSplitLetter sub-component - halves are inlined inside the card
// so that the text gap lives between them (not below).

// ─── Mobile split-letter (static - always split) ─────────────────────────
function MobileSplitLetter({ letter }: { letter: string }) {
  const spanStyle = makeLetterSpanStyle(MOBILE_FS);

  return (
    <div
      style={{ position: "relative", flexShrink: 0, width: MOBILE_FS, height: MOBILE_FS }}
      aria-hidden
    >
      {/* Top half */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: MOBILE_HALF,
          overflow: "hidden",
        }}
      >
        <span
          style={{
            ...spanStyle,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: "translateY(-4px) scaleY(0.9)",
            transformOrigin: "bottom center",
          }}
        >
          {letter}
        </span>
      </div>

      {/* Bottom half */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: MOBILE_HALF,
          overflow: "hidden",
        }}
      >
        <span
          style={{
            ...spanStyle,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            transform: "translateY(4px) scaleY(0.9)",
            transformOrigin: "top center",
          }}
        >
          {letter}
        </span>
      </div>
    </div>
  );
}

// ─── Main section ────────────────────────────────────────────────────────
export function FireTeaserSection() {
  // Track which letter card is hovered so all four can animate in sync
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    /*
     * Homepage snap only runs at ≥768px. This section joins snap on that
     * breakpoint; below it, normal scroll (content can be taller than the viewport).
     */
    <Section
      id="fire"
      className="bg-blush flex min-h-screen flex-col justify-center min-[768px]:snap-start min-[768px]:snap-always"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pt-12 pb-16 sm:px-8 lg:px-10">

        {/* ── Section header ── */}
        <div className="text-center">
          <p className="eyebrow text-pink-deep">Signature Method</p>
          <h2 className="heading-display mt-2 text-4xl font-medium text-teal sm:text-5xl">
            The F.I.R.E. Framework™
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: BRAND }}
          >
            The F.I.R.E. Framework is what Kris operates around to help clients
            during their personalized, 45 day, hands on wellness course.
          </p>
          <p className="mt-5 hidden text-sm text-ink-soft md:block">
            Hover over the letters to see what they mean.
          </p>
        </div>

        {/* ── Desktop: four animated letter cards ── */}
        <div
          className="mt-2 hidden border-t border-pink-soft/30 pt-10 md:flex"
          style={{ alignItems: "flex-start", gap: "0.375rem", minHeight: "28rem" }}
        >
          {HOME_FIRE_PILLARS.map((pillar, i) => {
            const hovered = activeIdx === i;
            const dimmed = activeIdx !== null && !hovered;
            const spanStyle = makeLetterSpanStyle(LETTER_FS);
            const bioLead = pillar.description.split(/\s+/, 1)[0];
            const bioRest = pillar.description.slice(bioLead.length).trimStart();

            return (
              <motion.div
                key={pillar.letter}
                className="flex cursor-default select-none flex-col items-center px-3 py-6"
                style={{ borderRadius: "1.25rem", minWidth: 0, flex: 1 }}
                animate={{
                  flexGrow: hovered ? 2.1 : dimmed ? 0.72 : 1,
                  opacity: dimmed ? 0.55 : 1,
                  backgroundColor: hovered
                    ? "rgba(160,92,107,0.055)"
                    : "rgba(0,0,0,0)",
                }}
                transition={{ duration: DUR, ease: EASE }}
                onHoverStart={() => setActiveIdx(i)}
                onHoverEnd={() => setActiveIdx(null)}
              >
                {/* ── Top half: shows upper 50% of letter ── */}
                <motion.div
                  style={{ width: "100%" }}
                  animate={{ y: hovered ? -5 : 0 }}
                  transition={{ duration: DUR, ease: EASE }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "relative",
                      width: "100%",
                      height: LETTER_HALF,
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        ...spanStyle,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                      }}
                    >
                      {pillar.letter}
                    </span>
                  </div>
                </motion.div>

                {/*
                 * ── Text gap: lives between the two letter halves ──
                 * Default: 2.6rem tall - just enough to show the bold word.
                 * Hover:   8.5rem tall - reveals the full description.
                 * overflow: hidden clips content while the height animates.
                 */}
                <motion.div
                  animate={{ height: hovered ? "12rem" : "2.6rem" }}
                  transition={{ duration: DUR, ease: EASE }}
                  style={{
                    overflow: "hidden",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 0.75rem",
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {!hovered ? (
                      <motion.p
                        key="word"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        style={{
                          color: BRAND,
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          fontFamily: "var(--font-display)",
                          letterSpacing: "-0.01em",
                          margin: 0,
                          textAlign: "center",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {pillar.title}
                      </motion.p>
                    ) : (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, delay: 0.1 }}
                        style={{
                          color: BRAND,
                          fontSize: "1.25rem",
                          fontFamily: "var(--font-display)",
                          fontWeight: 500,
                          lineHeight: 1.42,
                          letterSpacing: "-0.015em",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        <strong style={{ fontWeight: 800 }}>{bioLead}</strong>{" "}
                        {bioRest}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* ── Bottom half: shows lower 50% of letter ── */}
                <motion.div
                  style={{ width: "100%" }}
                  animate={{ y: hovered ? 5 : 0 }}
                  transition={{ duration: DUR, ease: EASE }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "relative",
                      width: "100%",
                      height: LETTER_HALF,
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        ...spanStyle,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                      }}
                    >
                      {pillar.letter}
                    </span>
                  </div>
                </motion.div>

                {/* Accessible label */}
                <span className="sr-only">{pillar.letter}</span>
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile: vertical stack with static split letters ── */}
        <div className="mt-8 flex flex-col divide-y divide-pink-soft/20 md:hidden">
          {HOME_FIRE_PILLARS.map((pillar) => (
            <div key={pillar.letter} className="flex items-start gap-5 py-6">
              {/* Split letter - always shown in the separated/hover state */}
              <MobileSplitLetter letter={pillar.letter} />
              <span className="sr-only">{pillar.letter}</span>

              {/* Description */}
              <div style={{ paddingTop: "0.5rem", minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: BRAND,
                    fontSize: "1rem",
                    letterSpacing: "-0.01em",
                    marginTop: 0,
                    marginBottom: "0.3rem",
                  }}
                >
                  {pillar.title}{" "}
                  <span
                    style={{
                      fontWeight: 400,
                      color: "#8a807b",
                      fontSize: "0.88rem",
                    }}
                  >
                    {pillar.subtitle}
                  </span>
                </p>
                <p
                  style={{
                    color: "#5c5450",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Blurb + Explore CTA - permanently close under the letters */}
        <style>{`
          @keyframes fire-explore-pulse {
            0%   { box-shadow: 0 0 0 0   rgba(232,155,168,0.45); }
            60%  { box-shadow: 0 0 0 12px rgba(232,155,168,0.08); }
            100% { box-shadow: 0 0 0 18px rgba(232,155,168,0); }
          }
        `}</style>
        <div className="mt-4 md:mt-6">
          <div className="mx-auto max-w-xl bg-blush px-4 py-3 text-center">
            <p className="text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
              Over 45 days, the F.I.R.E. Framework gives clients a clear,
              personalized path to better health, combining Kris&apos;s clinical
              experience with practical, holistic strategies that create real
              results. Click the button below to learn more.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="/fire-framework"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--color-pink)",
                animation: "fire-explore-pulse 2.8s ease-out infinite",
              }}
            >
              Explore the Framework
            </a>
          </div>
        </div>

      </div>
    </Section>
  );
}
