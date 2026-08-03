"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL, cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/fire-framework", label: "F.I.R.E. Framework" },
  { href: "/x39", label: "X39" },
  { href: "/work-with-kris", label: "More of Kris" },
  { href: "/contact", label: "Contact" },
] as const;

const NAV_PATHS = new Set<string>([
  "/",
  "/about",
  "/fire-framework",
  "/x39",
  "/work-with-kris",
  "/contact",
]);

const FALLBACK_LIGHT = "rgb(253, 250, 247)"; // cream
const BLUSH_WASH = "rgb(253, 240, 237)"; // --color-blush; matches pink page washes
const TEAL_SOLID = "rgb(44, 95, 90)";

type Rgba = { r: number; g: number; b: number; a: number };

function parseRgba(color: string): Rgba | null {
  const m = color.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/
  );
  if (!m) return null;
  return {
    r: Number(m[1]),
    g: Number(m[2]),
    b: Number(m[3]),
    a: m[4] !== undefined ? Number(m[4]) : 1,
  };
}

function relativeLuminance({ r, g, b }: Rgba) {
  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function toCssColor({ r, g, b }: Rgba) {
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

function isNearCream({ r, g, b }: Rgba) {
  return Math.abs(r - 253) <= 4 && Math.abs(g - 250) <= 4 && Math.abs(b - 247) <= 4;
}

function hasPinkPageWash() {
  return !!document.querySelector(
    "[data-about-page], [data-fire-page], [data-contact-page]"
  );
}

/** Sample the page color under the nav for an opaque matching fill. */
function sampleBackgroundBehindNav(header: HTMLElement): {
  color: string;
  lightOnDark: boolean;
} {
  // X39 is solid teal end-to-end.
  if (document.querySelector("[data-x39-page]")) {
    return { color: TEAL_SOLID, lightOnDark: true };
  }

  const rect = header.getBoundingClientRect();
  const y = Math.min(
    window.innerHeight - 1,
    Math.max(0, Math.round(rect.bottom + 2))
  );
  // Sample a few X positions so a centered card doesn't steal the color.
  const xs = [0.15, 0.5, 0.85].map((t) =>
    Math.min(
      window.innerWidth - 1,
      Math.max(0, Math.round(window.innerWidth * t))
    )
  );

  let best: Rgba | null = null;

  for (const x of xs) {
    const stack = document.elementsFromPoint(x, y);
    for (const el of stack) {
      if (header.contains(el)) continue;

      let node: Element | null = el;
      while (node && node !== document.documentElement) {
        // Prefer painted section backgrounds over body cream.
        if (node === document.body) break;

        // Opt-out zones (e.g. More of Kris offerings CTA) — never sample
        // interactive pink fills; keep walking for the page plane.
        if (node.closest("[data-nav-sample-skip]")) {
          node = node.parentElement;
          continue;
        }

        const bg = parseRgba(getComputedStyle(node).backgroundColor);
        if (bg && bg.a >= 0.92) {
          // Skip near-white cards; keep looking for the page plane.
          const nearWhite = bg.r > 248 && bg.g > 248 && bg.b > 248;
          // Skip solid brand-pink CTAs (e.g. primary buttons) that aren't page planes.
          const nearBrandPink =
            Math.abs(bg.r - 232) <= 18 &&
            Math.abs(bg.g - 155) <= 24 &&
            Math.abs(bg.b - 168) <= 24;
          if (!nearWhite && !nearBrandPink) {
            best = bg;
            break;
          }
        }
        node = node.parentElement;
      }
      if (best) break;
    }
    if (best && !isNearCream(best)) break;
  }

  // About / F.I.R.E. / Contact: body uses a pink gradient wash; background-color
  // alone is cream, so use blush so the opaque nav matches what you see.
  if (hasPinkPageWash() && (!best || isNearCream(best))) {
    return { color: BLUSH_WASH, lightOnDark: false };
  }

  if (best) {
    return {
      color: toCssColor(best),
      lightOnDark: relativeLuminance(best) < 0.45,
    };
  }

  const bodyBg =
    parseRgba(getComputedStyle(document.body).backgroundColor) ?? {
      r: 253,
      g: 250,
      b: 247,
      a: 1,
    };
  return {
    color: toCssColor(bodyBg),
    lightOnDark: relativeLuminance(bodyBg) < 0.45,
  };
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [navBg, setNavBg] = useState(FALLBACK_LIGHT);
  const [lightOnDark, setLightOnDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Opaque bar filled with the current page/section background color.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let frame = 0;
    const sync = () => {
      frame = 0;
      const sample = sampleBackgroundBehindNav(header);
      setNavBg(sample.color);
      setLightOnDark(sample.lightOnDark);
    };
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Catch snap / layout shifts after route changes.
    const t = window.setTimeout(sync, 50);
    const t2 = window.setTimeout(sync, 250);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.clearTimeout(t);
      window.clearTimeout(t2);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // Force hard navigation so links stay reliable after returning to the homepage.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const links = header.querySelectorAll<HTMLAnchorElement>("a[data-nav-link]");
    const handlers: Array<{
      link: HTMLAnchorElement;
      handler: (event: MouseEvent) => void;
    }> = [];

    links.forEach((link) => {
      const path = link.getAttribute("href");
      if (!path || !NAV_PATHS.has(path)) return;

      const handler = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        window.location.href = path;
      };

      link.addEventListener("click", handler);
      handlers.push({ link, handler });
    });

    return () => {
      handlers.forEach(({ link, handler }) => {
        link.removeEventListener("click", handler);
      });
    };
  }, [pathname, open]);

  return (
    <header
      ref={headerRef}
      style={{ backgroundColor: navBg }}
      className={cn(
        "fixed inset-x-0 top-0 z-[100] isolate transition-[background-color,border-color,color] duration-300",
        lightOnDark
          ? "border-b border-white/10 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.45)]"
          : "border-b border-pink/12 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.28)]"
      )}
    >
      {/* Top bar only — paint layer scoped here so it never covers the mobile dropdown */}
      <div className="relative z-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: navBg }}
        />
        <nav className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8 lg:px-10">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink to-gold text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(214,124,140,0.7)] transition-transform duration-300 group-hover:scale-105">
              KH
            </span>
            <span
              className={cn(
                "heading-display text-lg font-semibold tracking-tight sm:text-xl",
                lightOnDark ? "text-white" : "text-teal"
              )}
            >
              Kris Hapgood{" "}
              <span className="text-gradient-rose font-semibold">RN</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-nav-link
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-pink-deep"
                      : lightOnDark
                        ? "text-white hover:text-pink-soft"
                        : "text-ink-muted hover:text-pink-deep"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Button
              href={BOOKING_URL}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Book Free Discovery Call
            </Button>
            <button
              type="button"
              className={cn(
                "inline-flex rounded-full p-2 transition-colors hover:bg-pink/10 lg:hidden",
                lightOnDark ? "text-white" : "text-teal"
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="relative z-20 border-t border-pink/12 bg-cream lg:hidden">
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-1 px-5 py-5"
          >
            {NAV_LINKS.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-nav-link
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block w-full rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-blush",
                    active ? "bg-pink/10 text-pink-deep" : "text-ink-muted hover:text-pink-deep"
                  )}
                  style={
                    active
                      ? { color: "var(--color-pink-deep)" }
                      : { color: "var(--color-ink-muted)" }
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              href={BOOKING_URL}
              variant="primary"
              size="md"
              className="mt-3 w-full"
            >
              Book Free 20-Min Discovery Call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
