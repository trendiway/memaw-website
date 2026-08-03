"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type DotNavProps = {
  sections: { id: string; label: string }[];
};

/**
 * Right-side clickable section dots for the homepage snap-scroll experience.
 * Highlights the active section via Intersection Observer.
 *
 * Client-only mount: avoids SSR/client HTML mismatches on this interactive nav
 * (IntersectionObserver + aria-current). Nothing useful is SSR'd here.
 */
export function DotNav({ sections }: DotNavProps) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            id: e.target.id,
            ratio: e.intersectionRatio,
            top: e.boundingClientRect.top,
          }))
          .sort((a, b) => {
            const aScore = a.ratio * 2 - Math.abs(Math.min(a.top, 0)) / 1000;
            const bScore = b.ratio * 2 - Math.abs(Math.min(b.top, 0)) / 1000;
            return bScore - aScore;
          });

        if (visible[0]?.id) setActive(visible[0].id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-15% 0px -35% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [mounted, sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <nav
      aria-label="Page sections"
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 md:pointer-events-auto md:flex lg:right-7"
    >
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollTo(section.id)}
            aria-label={section.label}
            aria-current={isActive ? "true" : undefined}
            className="group relative flex items-center justify-end"
          >
            <span
              className={cn(
                "mr-3 hidden rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 xl:block",
                isActive
                  ? "bg-pink text-white opacity-100"
                  : "bg-white/80 text-teal opacity-0 shadow-sm group-hover:opacity-100"
              )}
            >
              {section.label}
            </span>
            <span className="relative flex h-4 w-4 items-center justify-center">
              {isActive && (
                <span
                  className="absolute inset-0 rounded-full bg-pink/25"
                  aria-hidden
                />
              )}
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  isActive
                    ? "h-2.5 w-2.5 bg-gradient-to-br from-pink to-gold"
                    : "h-2 w-2 bg-teal/30 group-hover:bg-pink/60"
                )}
              />
            </span>
          </button>
        );
      })}
    </nav>
  );
}
