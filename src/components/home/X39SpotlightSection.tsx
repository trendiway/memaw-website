"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// ─── Design tokens ────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DUR = 0.52;

// ─── Image stack position slots (offsets scaled 1.3× with image size) ───
// Slot 0 = front/top, Slot 1 = right-peek, Slot 2 = left-peek
const SLOTS = [
  { x: 0,    y: 0,    rotate: 0,  scale: 1,    zIndex: 30 },
  { x: 70.2, y: 23.4, rotate: 8,  scale: 0.88, zIndex: 20 },
  { x: -59.8, y: 31.2, rotate: -6, scale: 0.83, zIndex: 10 },
] as const;

// ─── Slide content ───────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    src: "/memaw-website/images/x39image1of3.jpeg",
    alt: "Kris Hapgood with LifeWave X39",
    headline: "A Breakthrough in Phototherapy",
    paragraphs: [
      "What if supporting your body's natural repair processes didn't require a drug, injection, or invasive procedure?",
      "Advances in phototherapy are changing how we think about wellness. By using specific wavelengths of light, this technology is designed to communicate with the body, encouraging its own natural restorative processes.",
      "Simple. Non-invasive. Backed by years of research. Built on the remarkable ability of the human body to heal and adapt.",
    ],
  },
  {
    id: 1,
    src: "/memaw-website/images/x39image2of3.jpeg",
    alt: "Kris Hapgood demonstrating the X39 phototherapy patch",
    headline: "The Healing Potential of Light",
    paragraphs: [
      "Your body is constantly communicating.",
      "From the electrical signals that coordinate your heartbeat to the messages exchanged between cells, your body is designed to repair, restore, and maintain balance.",
      "Scientists have long known that specific wavelengths of light can influence biological processes. What if reflecting precise frequencies of light back to the body could help support its own natural restorative processes?",
      "Perhaps the future of wellness isn't about adding more... but supporting what the body already knows how to do.",
    ],
  },
  {
    id: 2,
    src: "/memaw-website/images/x39image3of3.jpeg",
    alt: "Kris Hapgood with X39 patch applied",
    headline: "Real Results. Real People.",
    paragraphs: [
      "Hope changes everything.",
      "By awakening the body's own restorative potential through the power of light, we create the opportunity for something extraordinary. Every day, people share stories of renewed energy, greater comfort, better sleep, and a return to the life they thought they had lost.",
      "Every story is unique. Every result is personal. But each one begins with the same belief—that the body was designed for more.",
      "Explore the stories. Be inspired by what's possible.",
    ],
  },
] as const;

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "inherit",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 70vw, 22.75rem"
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority={false}
      />
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────
export function X39SpotlightSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const advance = () => setActiveIdx((i) => (i + 1) % SLIDES.length);

  // Derive each image's stack slot from the active index
  const getSlot = (imageIndex: number) =>
    SLOTS[(imageIndex - activeIdx + SLIDES.length) % SLIDES.length];

  const activeSlide = SLIDES[activeIdx];

  return (
    <Section snap id="x39" className="bg-teal text-cream">
      {/* Warm feminine gradient wash over the teal */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 90% at 85% 15%, rgba(232,155,168,0.2) 0%, transparent 55%), " +
            "radial-gradient(80% 80% at 10% 90%, rgba(201,160,107,0.16) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:px-10">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,33.8rem)_minmax(0,1fr)] lg:gap-16">

          {/* ── Left column: X39 heading + image stack + indicator ── */}
          <div className="flex min-w-0 w-full flex-col items-center lg:items-start">

            {/* Heading — sits higher with the enlarged stack */}
            <div className="mb-5">
              <p
                className="eyebrow"
                style={{ color: "rgba(242,196,208,0.7)" }}
              >
                LifeWave
              </p>
              <h2
                className="heading-display font-bold leading-none text-cream"
                style={{ fontSize: "clamp(4.5rem, 9vw, 8rem)", margin: "0.25rem 0 0" }}
              >
                X39
              </h2>
              <p
                style={{
                  color: "rgba(242,196,208,0.6)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  margin: "0.35rem 0 0",
                }}
              >
                Phototherapy Patch
              </p>
            </div>

            {/* Image stack — sized 1.3×; fluid so it never forces page overflow */}
            <div
              onClick={advance}
              className="relative mx-auto w-full max-w-[32.5rem] aspect-square cursor-pointer"
              role="button"
              aria-label="Advance to next image"
            >
              {SLIDES.map((slide, i) => {
                const slot = getSlot(i);
                const isFront = slot.zIndex === SLOTS[0].zIndex;
                return (
                  <motion.div
                    key={slide.id}
                    animate={{
                      x: slot.x,
                      y: slot.y,
                      rotate: slot.rotate,
                      scale: slot.scale,
                      boxShadow: isFront
                        ? "0 28px 70px -8px rgba(0,0,0,0.75), 0 12px 32px -6px rgba(0,0,0,0.55), 0 0 0 1px rgba(242,196,208,0.18)"
                        : "0 10px 28px -14px rgba(0,0,0,0.4)",
                    }}
                    transition={{ duration: DUR, ease: EASE }}
                    className="absolute top-[2%] left-[12%] h-[88%] w-[70%] max-w-[22.75rem]"
                    style={{
                      zIndex: slot.zIndex,
                      borderRadius: "1.5rem",
                      border: "2px solid rgba(242,196,208,0.28)",
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.07)",
                    }}
                  >
                    <ImageCard src={slide.src} alt={slide.alt} />
                  </motion.div>
                );
              })}
            </div>

            {/* Pulsing click indicator - same style as hero scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
              style={{
                marginTop: "1.75rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.35rem",
                pointerEvents: "none",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.48)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                Click to see next image
              </p>
              <motion.div
                animate={{ y: [0, -4, 0], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronUp
                  style={{
                    width: "1.1rem",
                    height: "1.1rem",
                    color: "rgba(242,196,208,0.72)",
                  }}
                  aria-hidden
                />
              </motion.div>
            </motion.div>
          </div>

          {/* ── Right column: dynamic text ── */}
          <div className="flex min-w-0 flex-col justify-center">

            {/* Slide dots - navigation */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginBottom: "1.75rem",
                alignItems: "center",
              }}
            >
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Show image ${i + 1}`}
                  style={{
                    height: "0.4rem",
                    width: i === activeIdx ? "1.75rem" : "0.4rem",
                    borderRadius: "9999px",
                    background:
                      i === activeIdx
                        ? "rgba(242,196,208,0.9)"
                        : "rgba(255,255,255,0.22)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "width 0.35s ease, background 0.35s ease",
                  }}
                />
              ))}
            </div>

            {/* Animated text block */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.38, ease: EASE }}
              >
                {/* Slide headline */}
                <h3
                  className="heading-display font-medium text-cream"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", marginBottom: "1.25rem", marginTop: 0 }}
                >
                  {activeSlide.headline}
                </h3>

                {activeSlide.paragraphs.map((text, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.72,
                      color: "rgba(253,250,247,0.88)",
                      marginTop: i === 0 ? 0 : "1.25rem",
                      marginBottom: 0,
                    }}
                  >
                    {text}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <div style={{ marginTop: "2.25rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Button href="/x39" variant="gold" size="lg">
                Learn About X39
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
