"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/utils";

/**
 * First homepage snap section - landing hero.
 * Colors come from scoped tokens on #hero (see globals.css):
 *   hero-theme-about  → soft light blush palette (matches X39 science section)
 *   hero-theme-brand  → darker matte pink brand palette (revert option)
 * Fully inline layout styles; content is unconditionally visible on first paint.
 */
export function HeroSection() {
  return (
    <Section
      id="hero"
      snap
      className="hero-theme-about"
      style={{ background: "var(--color-blush)" }}
    >
      {/* Pulse rings use scoped --hero-pulse-* tokens */}
      <style>{`
        @keyframes hero-pulse-primary {
          0%   { box-shadow: 0 0 0 0   var(--hero-pulse-primary); }
          60%  { box-shadow: 0 0 0 14px color-mix(in srgb, var(--hero-pulse-primary) 16%, transparent); }
          100% { box-shadow: 0 0 0 20px transparent; }
        }
        @keyframes hero-pulse-secondary {
          0%   { box-shadow: 0 0 0 0   var(--hero-pulse-secondary); }
          60%  { box-shadow: 0 0 0 12px color-mix(in srgb, var(--hero-pulse-secondary) 28%, transparent); }
          100% { box-shadow: 0 0 0 18px transparent; }
        }
      `}</style>

      {/* Main content grid */}
      <div
        className="lg:grid-cols-[1.05fr_0.95fr]"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "5rem 1.25rem 6rem",
          display: "grid",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        {/* ── Left column: copy + CTAs ── */}
        <div>
          {/* Eyebrow motto */}
          <p
            style={{
              color: "var(--hero-eyebrow)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            EDUCATING · EMPOWERING · TRANSFORMING LIVES
          </p>

          {/* Name */}
          <h1
            className="heading-display"
            style={{
              color: "var(--hero-heading)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              marginTop: "1.5rem",
              marginBottom: 0,
            }}
          >
            Kris Hapgood RN
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "var(--hero-subtitle)",
              fontSize: "clamp(1.45rem, 2.8vw, 2.1rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.35,
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            The F.I.R.E. Framework for Health &amp; Vitality After 40
          </p>

          {/* Intro paragraph */}
          <p
            style={{
              color: "var(--hero-body)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "36rem",
              marginTop: "1.75rem",
              marginBottom: 0,
            }}
          >
            Helping ambitious people reclaim their vitality, with 33+ years of
            nursing wisdom, science-backed strategies, and a heart for lasting
            transformation.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              marginTop: "2.25rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* Primary button - soft rose pulse */}
            <div
              style={{
                borderRadius: "9999px",
                display: "inline-flex",
                animation: "hero-pulse-primary 2.6s ease-out infinite",
              }}
            >
              <Button href={BOOKING_URL} variant="primary" size="lg">
                Book Free Discovery Call
              </Button>
            </div>

            {/* Outline button - secondary soft pulse */}
            <div
              style={{
                borderRadius: "9999px",
                display: "inline-flex",
                animation: "hero-pulse-secondary 2.6s ease-out 0.8s infinite",
              }}
            >
              <Button
                href="/fire-framework"
                variant="outline"
                size="lg"
              >
                Explore the Framework
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* ── Right column: photo + badge ── */}
        <div style={{ position: "relative", width: "100%", maxWidth: "28rem", margin: "0 auto" }}>
          <div
            style={{
              aspectRatio: "3/4",
              width: "100%",
              position: "relative",
              overflow: "hidden",
              borderRadius: "1.75rem",
              border: "3px solid var(--hero-media-border)",
              background: "var(--hero-media-bg)",
              boxShadow: "var(--hero-media-shadow)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/memaw-website/images/68ab0a7c39499f61606f449e.jpeg"
              alt="Kris Hapgood, RN, BSN"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>

          {/* Credential badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-1rem",
              left: "-0.5rem",
              background: "var(--hero-badge-bg)",
              border: "1px solid var(--hero-badge-border)",
              borderRadius: "1rem",
              padding: "0.875rem 1.25rem",
              boxShadow: "var(--hero-badge-shadow)",
            }}
          >
            <p
              style={{
                color: "var(--hero-badge-text)",
                fontSize: "1.05rem",
                fontWeight: 600,
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              33+ Years Nursing Experience
            </p>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator - anchored to bottom center of section ── */}
      <motion.div
        // Keep SSR + first client paint identical; animate only after hydrate.
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "1.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.3rem",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "var(--hero-scroll)",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Scroll to learn more
        </p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            style={{
              width: "1.15rem",
              height: "1.15rem",
              color: "var(--hero-scroll-icon)",
            }}
            aria-hidden
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
