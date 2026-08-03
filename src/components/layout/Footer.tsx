import Link from "next/link";
import { Heart } from "lucide-react";
import { BOOKING_URL, SITE } from "@/lib/utils";
import { CopyrightYear } from "./CopyrightYear";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/fire-framework", label: "F.I.R.E. Framework" },
  { href: "/x39", label: "LifeWave X39" },
  { href: "/work-with-kris", label: "More of Kris" },
  { href: "/work-with-kris#stories", label: "Stories & Impact" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative min-[768px]:snap-end overflow-hidden bg-teal text-cream shadow-[0_-12px_32px_-12px_rgba(0,0,0,0.4)]">
      {/* Warm gradient wash - hidden on X39 via body:has([data-x39-page]) */}
      <div
        className="footer-wash pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 0%, rgba(232,155,168,0.22) 0%, transparent 55%), radial-gradient(90% 90% at 0% 100%, rgba(201,160,107,0.18) 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink to-gold text-sm font-bold text-white">
                KH
              </span>
              <p className="heading-display text-2xl font-semibold text-cream">
                Kris Hapgood{" "}
                <span className="text-pink-soft">RN</span>
              </p>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/75">
              {SITE.tagline}
            </p>
            <p className="mt-4 text-sm text-cream/55">{SITE.company}</p>
          </div>

          <div>
            <p className="eyebrow text-pink-soft">Explore</p>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-pink-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-pink-soft">Connect</p>
            <p className="mt-5 text-sm leading-relaxed text-cream/75">
              Ready to reclaim your vitality? Book a free 20-minute discovery
              call and take the first step toward lasting change.
            </p>
            <a
              href={BOOKING_URL}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-pink to-pink-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(214,124,140,0.8)] transition-transform hover:-translate-y-0.5"
            >
              Book Free Discovery Call
            </a>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-cream/15" />

        <div className="mt-8">
          <p className="text-xs leading-relaxed text-cream/50">
            Disclaimer: The information on this website is for educational
            purposes only and is not intended as medical advice, diagnosis, or
            treatment. Always consult your qualified healthcare provider before
            making changes to your health regimen. LifeWave X39 statements have
            not been evaluated by the FDA. These products are not intended to
            diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-cream/50">
            © <CopyrightYear /> {SITE.fullName}. Made with
            <Heart className="h-3.5 w-3.5 fill-pink-soft text-pink-soft" />
            for lasting vitality.
          </p>
        </div>
      </div>
    </footer>
  );
}
