"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Sun, Users, Heart, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BRAND = "var(--color-brand)";

// ─── Directory cards ──────────────────────────────────────────────────────
const CARDS = [
  {
    href: "/fire-framework",
    label: "F.I.R.E. Framework",
    description: "The signature method for lasting health & vitality after 40",
    Icon: Sparkles,
    teal: false,
  },
  {
    href: "/x39",
    label: "X39",
    description: "LifeWave phototherapy for cellular restoration & renewal",
    Icon: Sun,
    teal: true, // distinct teal treatment
  },
  {
    href: "/work-with-kris",
    label: "Speaking",
    description: "Book Kris for your next event, summit, or gathering",
    Icon: Users,
    teal: false,
  },
  {
    href: "/work-with-kris",
    label: "Coaching",
    description: "One-on-one vitality coaching rooted in 33+ years of nursing",
    Icon: Heart,
    teal: false,
  },
  {
    href: "/work-with-kris#stories",
    label: "Impact & Real Stories",
    description: "Real voices. Real transformation. Real lives changed.",
    Icon: Quote,
    teal: false,
  },
] as const;

// ─── Individual card ──────────────────────────────────────────────────────
function DirectoryCard({ card }: { card: (typeof CARDS)[number] }) {
  const { Icon, teal } = card;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.025 }}
      transition={{ duration: 0.3, ease: EASE }}
      style={{
        height: "100%",
        borderRadius: "1.5rem",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",

        // Teal (X39) vs standard (pink/cream)
        background: teal
          ? "linear-gradient(140deg, #2c5f5a 0%, #4f8a82 100%)"
          : "rgba(255,255,255,0.92)",
        border: teal
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(214,124,140,0.2)",
        boxShadow: teal
          ? "0 18px 50px -18px rgba(44,95,90,0.45)"
          : "0 18px 50px -18px rgba(160,92,107,0.14)",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: "2.75rem",
          height: "2.75rem",
          borderRadius: "50%",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: teal
            ? "rgba(255,255,255,0.14)"
            : `rgba(160,92,107,0.09)`,
        }}
      >
        <Icon
          style={{
            width: "1.15rem",
            height: "1.15rem",
            color: teal ? "rgba(242,196,208,0.92)" : BRAND,
          }}
          aria-hidden
        />
      </div>

      {/* Title + description */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            color: teal ? "#fdfaf7" : BRAND,
            margin: 0,
          }}
        >
          {card.label}
        </h3>
        <p
          style={{
            fontSize: "0.84rem",
            lineHeight: 1.62,
            color: teal ? "rgba(253,250,247,0.68)" : "#8a807b",
            margin: 0,
          }}
        >
          {card.description}
        </p>
      </div>

      {/* Explore link */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.25rem",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: teal ? "rgba(242,196,208,0.75)" : `rgba(160,92,107,0.55)`,
        }}
      >
        Explore
        <ArrowRight style={{ width: "0.8rem", height: "0.8rem" }} aria-hidden />
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────
export function ClosingCtaSection() {
  return (
    <Section snap id="cta" className="bg-blush">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">

        {/* Headline block - centered */}
        <div className="text-center">
          <h2
            className="heading-display mt-3 font-medium text-teal"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.75rem)" }}
          >
            Ready to work with Kris?
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">
            Choose where you&apos;d like to start.
          </p>
        </div>

        {/*
         * Cards grid - flex wrap with justify-center so the last row of 2
         * is automatically centered beneath the first row of 3.
         *
         * Width per card:
         *   mobile  (< sm)  → full width     (w-full)
         *   tablet  (sm-lg) → ~half width    (sm:w-[calc(50%-0.625rem)])
         *   desktop (≥ lg)  → ~third width   (lg:w-[calc(33.333%-0.833rem)])
         *
         * gap-5 = 1.25rem; the calc() values account for the gap so that
         * n cards × card-width + (n-1) × gap = 100% in each row.
         */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {CARDS.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.833rem)]"
              style={{ textDecoration: "none", display: "block" }}
            >
              <DirectoryCard card={card} />
            </Link>
          ))}
        </div>

      </div>
    </Section>
  );
}
