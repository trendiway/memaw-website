"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type DnaBackgroundProps = {
  className?: string;
  /** Opacity of the DNA graphic (8-15% recommended) */
  opacity?: number;
  /** Placement variant */
  variant?: "corner-tr" | "corner-bl" | "center" | "full" | "side-right";
  /** Soft slow drift animation */
  animate?: boolean;
  /** Tailwind text-* color class for the strand tone (defaults to soft pink) */
  tone?: string;
};

/**
 * Elegant minimalist DNA double-helix line art.
 * Thin strands + delicate base pairs, tinted into the feminine palette  - 
 * scientific credibility without clutter. Always pointer-events-none.
 */
export function DnaBackground({
  className,
  opacity = 0.12,
  variant = "full",
  animate = true,
  tone = "text-pink",
}: DnaBackgroundProps) {
  const positionClasses: Record<
    NonNullable<DnaBackgroundProps["variant"]>,
    string
  > = {
    "corner-tr": "right-[-4%] top-[-6%] w-[min(70vw,540px)] h-[min(75vh,560px)]",
    "corner-bl": "left-[-4%] bottom-[-6%] w-[min(70vw,540px)] h-[min(75vh,560px)]",
    center: "inset-0 m-auto w-[min(90vw,680px)] h-[min(90vh,680px)]",
    full: "inset-0 w-full h-full",
    "side-right":
      "right-[-2%] top-1/2 -translate-y-1/2 w-[min(55vw,500px)] h-[min(95vh,760px)]",
  };

  const svg = (
    <svg
      viewBox="0 0 400 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <path
        d="M140 20 C 60 90, 340 160, 140 230 C 60 300, 340 370, 140 440 C 60 510, 340 580, 140 650 C 100 680, 160 700, 200 690"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M260 20 C 340 90, 60 160, 260 230 C 340 300, 60 370, 260 440 C 340 510, 60 580, 260 650 C 300 680, 240 700, 200 690"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {[
        [100, 55, 300, 55],
        [155, 95, 245, 95],
        [200, 125, 200, 125],
        [245, 155, 155, 155],
        [300, 195, 100, 195],
        [245, 230, 155, 230],
        [200, 260, 200, 260],
        [155, 295, 245, 295],
        [100, 335, 300, 335],
        [155, 370, 245, 370],
        [200, 400, 200, 400],
        [245, 435, 155, 435],
        [300, 475, 100, 475],
        [245, 510, 155, 510],
        [200, 540, 200, 540],
        [155, 575, 245, 575],
        [120, 615, 280, 615],
        [160, 650, 240, 650],
      ].map(([x1, y1, x2, y2], i) =>
        x1 === x2 && y1 === y2 ? (
          <circle
            key={i}
            cx={x1}
            cy={y1}
            r="1.5"
            fill="currentColor"
            opacity="0.7"
          />
        ) : (
          <g key={i}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="0.85"
              strokeLinecap="round"
              opacity="0.55"
            />
            <circle cx={x1} cy={y1} r="2" fill="currentColor" opacity="0.75" />
            <circle cx={x2} cy={y2} r="2" fill="currentColor" opacity="0.75" />
          </g>
        )
      )}
    </svg>
  );

  return (
    <div
      className={cn(
        "pointer-events-none absolute overflow-hidden",
        tone,
        positionClasses[variant],
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    >
      {animate ? (
        <motion.div
          className="h-full w-full"
          animate={{ y: [0, -14, 0], rotate: [0, 0.7, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        >
          {svg}
        </motion.div>
      ) : (
        svg
      )}
    </div>
  );
}
