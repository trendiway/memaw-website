import type { Metadata } from "next";
import { BOOKING_WIDGET_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call",
  description:
    "Schedule your free 20-minute health discovery call with Kris Hapgood, RN.",
};

/** Widget paints tall; scaled so the full calendar stays in-box and readable. */
const WIDGET_HEIGHT = 780;
const SCALE = 0.88;

export default function BookPage() {
  return (
    <div className="bg-cream">
      <section className="mx-auto max-w-5xl px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-10">
        <h1 className="heading-display text-center text-3xl font-medium text-teal sm:text-4xl">
          Book Your Free 20-Minute Discovery Call
        </h1>
        <p className="mt-4 text-center text-sm text-ink-muted">
          Your information is securely handled by our scheduling partner.
        </p>

        {/* Wider + slight scale: bio | calendar side-by-side, fully visible, no inner scroll */}
        <div
          className="mt-10 overflow-hidden rounded-2xl border border-pink/15 bg-[#fdf2f9] p-4 shadow-[0_18px_50px_-28px_rgba(150,90,100,0.3)] sm:p-5"
          style={{ height: `calc(${WIDGET_HEIGHT * SCALE}px + 2.5rem)` }}
        >
          <div
            className="origin-top-left"
            style={{
              width: `${100 / SCALE}%`,
              height: WIDGET_HEIGHT,
              transform: `scale(${SCALE})`,
            }}
          >
            <iframe
              src={BOOKING_WIDGET_URL}
              title="Book a free 20-minute health discovery call"
              className="h-full w-full rounded-xl border-0 bg-[#fdf2f9]"
              style={{ overflow: "hidden" }}
              scrolling="no"
              loading="lazy"
              allow="payment *"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
