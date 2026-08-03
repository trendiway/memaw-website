"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const offsets = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
  none: { y: 0, x: 0 },
};

/**
 * Scroll-triggered reveal.
 *
 * Content must never stay stuck invisible: useInView can miss after client
 * navigations. Above-the-fold content is shown immediately; below-the-fold
 * waits for intersection (with a geometry fallback).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const [visible, setVisible] = useState(true);
  const offset = offsets[direction];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isOnscreen = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      const vw = window.innerWidth || 0;
      return (
        rect.top < vh * 0.98 &&
        rect.bottom > 0 &&
        rect.left < vw &&
        rect.right > 0
      );
    };

    // Below the fold: start hidden and reveal on scroll/intersection.
    // Above the fold: stay visible so pages never render blank.
    if (!isOnscreen()) {
      setVisible(false);
    }

    const revealIfOnscreen = () => {
      if (isOnscreen()) setVisible(true);
    };

    const raf = requestAnimationFrame(revealIfOnscreen);
    const t = window.setTimeout(revealIfOnscreen, 120);
    window.addEventListener("scroll", revealIfOnscreen, { passive: true });
    window.addEventListener("resize", revealIfOnscreen);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener("scroll", revealIfOnscreen);
      window.removeEventListener("resize", revealIfOnscreen);
    };
  }, []);

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={false}
      animate={
        visible
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
