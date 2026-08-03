"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { TESTIMONIALS } from "@/lib/content";

const BRAND = "var(--color-brand)";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Placeholder testimonials that supplement the real ones
// Replace inner text with final copy when ready
const EXTRA_TESTIMONIALS = [
  {
    quote:
      "After just three weeks with Kris, I had more energy than I'd felt in a decade. The F.I.R.E. Framework made sense of everything my doctors had never connected.",
    attribution: "Coaching client",
    context: "F.I.R.E. + X39",
  },
  {
    quote:
      "I came to Kris skeptical about the patches. Two months later I'm sleeping through the night, my joints no longer ache, and I finally feel like myself again.",
    attribution: "X39 client",
    context: "LifeWave X39",
  },
  {
    quote:
      "Kris spoke at our summit and left every single person in the room changed. She doesn't just share information, she ignites belief that transformation is possible.",
    attribution: "Event organizer",
    context: "Speaking",
  },
] as const;

// Combine real testimonials with placeholders for a full set
const ALL_TESTIMONIALS = [...TESTIMONIALS, ...EXTRA_TESTIMONIALS];

// ─── Testimonial card with hover lift + expand ────────────────────────────
function TestimonialCard({
  quote,
  attribution,
  context,
  index,
}: {
  quote: string;
  attribution: string;
  context: string;
  index: number;
}) {
  // Alternate between two pink tones for visual rhythm
  const isDeep = index % 2 === 1;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.025 }}
      transition={{ duration: 0.32, ease: EASE }}
      style={{
        background: isDeep
          ? `linear-gradient(135deg, #d67c8c 0%, ${BRAND} 100%)`
          : "linear-gradient(135deg, #e89ba8 0%, #d67c8c 100%)",
        borderRadius: "1.25rem",
        padding: "1.5rem 1.75rem",
        color: "#ffffff",
        boxShadow: isDeep
          ? "0 14px 40px -14px rgba(160,92,107,0.55)"
          : "0 14px 40px -14px rgba(214,124,140,0.5)",
        cursor: "default",
      }}
    >
      {/* Quote mark */}
      <div
        style={{
          fontSize: "2.5rem",
          lineHeight: 1,
          color: "rgba(255,255,255,0.35)",
          fontFamily: "Georgia, serif",
          marginBottom: "0.25rem",
          marginTop: "-0.25rem",
        }}
        aria-hidden
      >
        &ldquo;
      </div>

      {/* Quote text */}
      <p
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.92)",
          margin: "0 0 1rem",
        }}
      >
        {quote}
      </p>

      {/* Attribution */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "0.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.95)",
            margin: 0,
          }}
        >
          {attribution}
        </p>
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {context}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────
export function ImpactTeaserSection() {
  return (
    <Section snap id="impact" className="bg-blush">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid items-stretch gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">

          {/* ── Left column: headline + context copy ── */}
          <div style={{ paddingTop: "3rem" }}>
            {/* Eyebrow */}
            <p
              className="eyebrow"
              style={{ color: "rgba(160,92,107,0.65)" }}
            >
              Real Stories
            </p>

            {/* Big headline - matches X39 / MEET KRIS style */}
            <h2
              className="heading-display font-bold leading-none"
              style={{
                fontSize: "clamp(4.5rem, 9vw, 8rem)",
                color: BRAND,
                margin: "0.25rem 0 1.5rem",
              }}
            >
              IMPACT
            </h2>

            {/* Intro copy */}
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.72,
                color: "#5c5450",
                marginBottom: "1.25rem",
              }}
            >
              For over three decades, Kris Hapgood has stood at
              the intersection of clinical expertise and genuine human care,
              helping people move from exhausted and overwhelmed to energized
              and empowered. These are their words.
            </p>

            {/* Stat highlights */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {[
                { value: "33+",   label: "Years of nursing experience" },
                { value: "1000s", label: "Of lives touched through coaching & speaking" },
                { value: "Int'l", label: "Speaker, author & LifeWave advocate" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span
                    className="heading-display"
                    style={{ fontSize: "1.6rem", fontWeight: 700, color: BRAND, minWidth: "4rem" }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#8a807b", lineHeight: 1.4 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/work-with-kris#stories"
              className="group inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(160,92,107,0.3)",
                color: BRAND,
                background: "rgba(255,255,255,0.7)",
              }}
            >
              See more stories
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── Right column: testimonial boxes ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {ALL_TESTIMONIALS.slice(0, 3).map((t, i) => (
              <TestimonialCard
                key={`${t.attribution}-${i}`}
                quote={t.quote}
                attribution={t.attribution}
                context={t.context}
                index={i}
              />
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}
