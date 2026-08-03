import type { Metadata } from "next";
import { DnaBackground } from "@/components/DnaBackground";
import { PhotoOfKris } from "@/components/PhotoOfKris";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BOOKING_URL, SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Kris Hapgood, RN, BSN, international speaker, best-selling author, and founder of Essential Health Solutions, Inc.",
};

const CREDENTIALS = [
  { label: "Credentials", value: "RN, BSN" },
  { label: "Experience", value: "33+ Years" },
  { label: "Author", value: SITE.bookTitle },
  { label: "Founder", value: "Essential Health Solutions" },
];

export default function AboutPage() {
  return (
    <div data-about-page className="relative">
      {/* Shared decorative DNA - page-level so section overflow clips don't create seams */}
      <div
        className="pointer-events-none absolute inset-0 overflow-x-clip"
        aria-hidden
      >
        <DnaBackground variant="corner-tr" opacity={0.09} tone="text-pink" />
        <DnaBackground variant="corner-bl" opacity={0.07} tone="text-teal" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-36">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <Reveal>
            <p className="eyebrow text-pink-deep">About Kris</p>
            <h1 className="heading-display mt-4 text-4xl font-medium leading-[1.08] text-gradient-rose sm:text-6xl">
              {SITE.fullName}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              International speaker, best-selling author, registered nurse, and
              founder of {SITE.company}. With more than 33 years of healthcare
              experience, she has dedicated her life to helping people move
              beyond simply managing symptoms and toward living healthier,
              stronger, and more vibrant lives.
            </p>
            <Button
              href={BOOKING_URL}
              variant="primary"
              size="lg"
              className="mt-8"
            >
              Book Free Discovery Call
            </Button>
          </Reveal>
          <Reveal delay={0.1} direction="left">
            <PhotoOfKris
              src="/images/IMG_3018.jpeg"
              label="about portrait"
              alt="Kris Hapgood, RN, BSN"
              aspect="portrait"
              priority
              className="mx-auto max-w-md lg:max-w-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="relative py-10">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="grid gap-4 rounded-[1.75rem] border border-pink/15 bg-white/70 p-8 shadow-[0_18px_50px_-28px_rgba(150,90,100,0.3)] backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
              {CREDENTIALS.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="heading-display text-2xl font-semibold text-gradient-rose">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expanded assignment */}
      <section className="relative py-24">
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="heading-display text-3xl font-medium leading-[1.12] text-teal sm:text-5xl">
              I didn&apos;t leave nursing…
              <span className="mt-2 block font-light italic text-gradient-rose">
                God expanded my assignment.
              </span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-muted">
              Throughout her nursing career, Kris witnessed an unsettling
              reality: too many people were waiting until disease appeared
              before taking charge of their health. That realization, and a
              deep sense of purpose, led her to expand her mission beyond the
              hospital walls.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Today, Kris equips individuals with the knowledge, tools, and
              confidence to become their own best health advocates. She bridges
              trusted medical expertise with emerging, evidence-based health
              innovations, empowering people to make informed decisions that
              support long-term vitality, resilience, and hope.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Faith + science */}
      <section className="relative py-24">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <PhotoOfKris
              src="/images/IMG_7181.jpeg"
              label="speaking or lifestyle"
              alt="Kris Hapgood speaking and serving"
              aspect="square"
              className="mx-auto w-full max-w-[26rem] lg:ml-auto lg:mr-0"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-pink-deep">A Mission Rooted in Faith</p>
            <h2 className="heading-display mt-4 text-3xl font-medium leading-[1.12] text-teal sm:text-5xl">
              A Method Backed by Science.
              <span className="mt-1 block font-light italic">
                A Heart for People.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Her approach combines science, education, and compassionate
              coaching to create meaningful, lasting transformation, helping
              people move from confusion to clarity, from uncertainty to
              confidence, and from simply surviving to truly thriving.
            </p>
            <blockquote className="mt-8 rounded-2xl border-l-4 border-pink bg-blush/60 py-5 pl-6 pr-5">
              <p className="heading-display text-xl italic leading-relaxed text-teal">
                Care for One, That&apos;s Love. Care for Hundreds, That&apos;s
                Nursing. Teach Hundreds to Care for Themselves… That&apos;s a
                Revolution™
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="relative py-24">
        <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="heading-display text-3xl font-medium text-teal sm:text-4xl">
              The best version of your health starts here.
            </h2>
            <p className="mt-5 text-lg text-ink-muted">
              Whether speaking from the stage, coaching individuals, or leading
              transformational workshops, Kris&apos;s mission is clear: Educate.
              Empower. Transform. Book a call with Kris to see what she can do
              for you.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/work-with-kris" variant="primary" size="lg">
                More of Kris
              </Button>
              <Button href="/fire-framework" variant="outline" size="lg">
                Explore F.I.R.E.
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
