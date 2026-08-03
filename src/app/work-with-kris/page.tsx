import type { Metadata } from "next";
import {
  Mic2,
  Users,
  Presentation,
  ExternalLink,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { DnaBackground } from "@/components/DnaBackground";
import { PhotoOfKris } from "@/components/PhotoOfKris";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import {
  MEDIA_FEATURES,
  PODCASTS,
  WORK_WITH_KRIS,
} from "@/lib/content";
import { BOOKING_URL, SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "More of Kris",
  description:
    "Book Kris Hapgood for speaking, coaching, and transformational workshops. Educate. Empower. Transform.",
};

const ICONS = [Mic2, Users, Presentation];

export default function WorkWithKrisPage() {
  return (
    <div className="relative overflow-hidden bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36">
        <DnaBackground variant="corner-tr" opacity={0.09} tone="text-pink" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <p className="eyebrow text-pink-deep">More of Kris</p>
            <h1 className="heading-display mt-4 text-4xl font-medium leading-[1.08] text-teal sm:text-6xl">
              Educate. Empower.{" "}
              <span className="font-light italic text-gradient-rose">
                Transform.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Whether speaking from the stage, coaching individuals, or leading
              transformational workshops, Kris&apos;s mission is clear. She
              believes that knowledge creates confidence, confidence inspires
              action, and informed decisions have the power to transform lives,
              families, and future generations.
            </p>
            <Button
              href={BOOKING_URL}
              variant="primary"
              size="lg"
              className="mt-8"
            >
              Book Free 20-Min Discovery Call
            </Button>
          </Reveal>
          <Reveal delay={0.1} direction="left">
            <PhotoOfKris
              src="/memaw-website/images/IMG_2943.png"
              label="speaking on stage"
              alt="Kris Hapgood speaking"
              aspect="wide"
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* Offerings — data-nav-sample-skip keeps the pink CTA from tinting the navbar */}
      <section className="py-24" data-nav-sample-skip>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {WORK_WITH_KRIS.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <Card className="flex h-full flex-col">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink to-gold text-white shadow-[0_12px_28px_-12px_rgba(214,124,140,0.7)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="heading-display mt-5 text-2xl font-semibold text-teal">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-pink-deep">
                      {item.description}
                    </p>
                    <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-muted">
                      {item.detail}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary" size="sm">
              Book with Kris
            </Button>
          </div>
        </div>
      </section>

      {/* Stories & Impact (moved from /impact) */}
      <section
        id="stories"
        className="relative scroll-mt-28 overflow-hidden py-20 sm:py-24"
      >
        <DnaBackground variant="corner-tr" opacity={0.09} tone="text-pink" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow text-pink-deep">Real Stories, Real Impact</p>
            <h2 className="heading-display mt-4 text-4xl font-medium leading-[1.1] text-teal sm:text-5xl">
              Transformative journeys{" "}
              <span className="font-light italic text-gradient-rose">
                worth sharing
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              From client testimonials to global stages and best-selling pages,
              see how lives are being educated, empowered, and transformed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured story video */}
      <section className="-mt-12 pt-2 pb-16 sm:-mt-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Card className="mx-auto w-full overflow-hidden bg-cream p-0">
              <YouTubeFacade
                videoId="Cr32u4Nx7gk"
                start={4}
                title="Watch featured story"
              />
            </Card>
            <h2 className="heading-display mt-8 text-center text-3xl font-medium leading-[1.15] text-teal sm:mt-10 sm:text-4xl">
              Click above to{" "}
              <span className="font-light italic text-gradient-rose">
                hear more testimonies.
              </span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Book */}
      <section className="relative overflow-hidden py-24">
        <DnaBackground variant="corner-bl" opacity={0.08} tone="text-teal" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-light text-white shadow-[0_14px_30px_-12px_rgba(201,160,107,0.7)]">
                <BookOpen className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="heading-display mt-5 text-3xl font-medium leading-[1.12] text-teal sm:text-4xl">
                Best-selling author of{" "}
                <span className="font-light italic text-gradient-rose">
                  {SITE.bookTitle}
                </span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                A powerful compilation of 31 true stories designed to bring
                comfort, clarity, and strength to those walking through
                life&apos;s toughest moments. Pain, when met with purpose,
                becomes a powerful catalyst for transformation.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                The journey is just beginning, and the message is clear: Pain
                has purpose, and your story matters.
              </p>
              <p className="mt-6 text-sm italic text-ink-soft">
                Special thanks to Elayna Fernandez, The Positive MOM for her
                mentorship and the opportunity to be part of this meaningful
                project.
              </p>
              <Button
                href="https://www.amazon.com/Gifts-Pain-Uplifting-Cultivate-Adversity/dp/1952201314"
                external
                variant="primary"
                size="lg"
                className="mt-8"
              >
                Get Your Copy
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <PhotoOfKris
                src="/memaw-website/images/gifts-of-pain-kris.png"
                label="book / gifts of pain"
                alt="Kris Hapgood with The Gifts of Pain"
                aspect="portrait"
                className="mx-auto w-full max-w-md"
              />
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Card className="mx-auto mt-14 w-full max-w-3xl">
              <p className="eyebrow text-pink-deep">Featured in</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {MEDIA_FEATURES.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-pink/20 bg-white/70 px-5 py-2 text-sm font-semibold text-teal"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-blush/60 p-5">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-ink-muted">
                  Honored to share a powerful message of growth, resilience,
                  and holistic health on global stages, including the
                  prestigious Global Summit hosted by Israel Duran.
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Podcasts */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <h2 className="heading-display text-center text-3xl font-medium text-teal sm:text-4xl">
              Podcasts &amp; interviews
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ink-muted">
              Dive into enlightening conversations with thought leaders in
              wellness and personal empowerment.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-3xl gap-3">
            {PODCASTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.04}>
                <a
                  href={p.url}
                  target={p.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    p.url.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-pink/12 bg-cream px-6 py-5 shadow-[0_14px_40px_-30px_rgba(150,90,100,0.3)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-pink/35"
                >
                  <span className="font-semibold text-teal group-hover:text-pink-deep">
                    {p.name}
                  </span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-ink-soft transition-colors group-hover:text-pink-deep"
                    aria-hidden
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative overflow-hidden py-24">
        <DnaBackground variant="center" opacity={0.08} tone="text-pink" />
        <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="heading-display text-3xl font-medium text-teal sm:text-4xl">
              Because lasting change always begins with{" "}
              <span className="font-light italic text-gradient-rose">
                one person.
              </span>
            </h2>
            <p className="mt-5 text-lg text-ink-muted">
              Ready to bring Kris to your stage, team, or personal health
              journey? Start with a free discovery call.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href={BOOKING_URL} variant="primary" size="lg">
                Book a Free Discovery Call
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Kris
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
