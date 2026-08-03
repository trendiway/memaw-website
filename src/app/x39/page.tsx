import type { Metadata } from "next";
import { CheckCircle2, Lightbulb, Dna, Shield } from "lucide-react";
import { DnaBackground } from "@/components/DnaBackground";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { X39_BENEFITS } from "@/lib/content";
import { BOOKING_URL, X39_PURCHASE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "LifeWave X39",
  description:
    "Elevate, Activate, Regenerate with LifeWave X39, patented light technology that supports healthy stem cell activity and vitality. Recommended by Kris Hapgood, RN.",
};

const TEAL_CARD =
  "border-white/15 bg-white/10 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.35)] backdrop-blur-sm hover:border-white/30 hover:shadow-[0_28px_64px_-28px_rgba(0,0,0,0.45)]";

const CLIENT_VOICE_VIDEOS = [
  {
    id: "ehhYmucaRWE",
    href: "https://www.youtube.com/watch?v=ehhYmucaRWE",
    title: "In 42 years of surgery, I've never seen anything like it.",
  },
  {
    id: "o2rpCNQkjHM",
    href: "https://www.youtube.com/watch?v=o2rpCNQkjHM&t=16s",
    title: "Crosslyn Gracia/CF Testimony",
  },
  {
    id: "VGyk8jKNp2s",
    href: "https://www.youtube.com/watch?v=VGyk8jKNp2s",
    title: "Want proof that healing is possible? Watch this.",
  },
] as const;

export default function X39Page() {
  return (
    <div data-x39-page className="relative overflow-hidden bg-teal text-cream">
      {/* Page-wide wash matching the hero teal */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 90% at 85% 10%, rgba(232,155,168,0.28) 0%, transparent 55%), radial-gradient(80% 80% at 10% 95%, rgba(201,160,107,0.22) 0%, transparent 50%)",
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-36">
        <DnaBackground variant="full" opacity={0.09} tone="text-pink-soft" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow text-pink-soft">
              Elevate · Activate · Regenerate
            </p>
            <h1 className="heading-display mt-4 text-5xl font-medium leading-[1.05] sm:text-7xl">
              <span className="text-pink-soft">LifeWave</span>{" "}
              <span className="block text-center font-light italic text-gold">
                X39
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/85">
              Aging is not inevitable. X39 supports healthy stem cell activity,
              restoration, and rejuvenation. Turn back time with X39.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={X39_PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold to-gold-light px-9 py-4 text-[0.95rem] font-semibold tracking-wide text-white shadow-[0_10px_30px_-10px_rgba(201,160,107,0.6)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-12px_rgba(201,160,107,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                Get X39
              </a>
              <Button
                href={BOOKING_URL}
                variant="secondary"
                size="lg"
                className="bg-white/10 text-cream ring-white/25 backdrop-blur hover:bg-white/20 hover:ring-white/50"
              >
                Book Free Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What is X39 */}
      <section className="relative overflow-hidden py-24">
        <DnaBackground variant="corner-tr" opacity={0.09} tone="text-pink-soft" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <p className="eyebrow text-pink-soft">The Breakthrough</p>
            <h2 className="heading-display mt-4 text-3xl font-medium leading-[1.12] text-cream sm:text-5xl">
              What is X39?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/85">
              Allow us to introduce you to X39, a leading holistic health
              solution recommended by doctors for relieving chronic pain,
              boosting stem cell activity, and restoring youthful vitality in
              people who feel like they&apos;ve lost hope. This is the
              technology Kris utilizes in her personalized 45 day coaching
              courses she offers.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream/85">
              X39 is a true breakthrough in regenerative science. Using light,
              X39&apos;s patented health technology elevates the copper peptide
              GHK-Cu, which is known to signal the activation of stem cells.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream/85">
              By naturally elevating a copper peptide produced by the body, X39
              boosts vitality and overall health and wellness, supporting
              restoration and rejuvenation from within.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                {
                  icon: Lightbulb,
                  title: "Light Technology",
                  text: "Patented phototherapy that works with your body’s own signals.",
                },
                {
                  icon: Dna,
                  title: "GHK-Cu",
                  text: "Elevates the copper peptide linked to stem cell signaling.",
                },
                {
                  icon: Shield,
                  title: "RN Endorsed",
                  text: "Recommended by Kris as a nurse and LifeWave merchant.",
                },
              ].map((item) => (
                <Card key={item.title} className={`p-6 ${TEAL_CARD}`}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-pink-soft">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="heading-display mt-4 text-lg font-semibold text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/75">{item.text}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-pink-soft">Smart Choices · Real Results</p>
              <h2 className="heading-display mt-4 text-3xl font-medium text-cream sm:text-5xl">
                The science behind the patch
              </h2>
              <p className="mt-5 text-lg text-cream/85">
                Phototherapy designed to support your body’s natural
                regenerative pathways.
              </p>
            </div>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {X39_BENEFITS.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.05}>
                <div
                  className={`flex items-center gap-4 rounded-2xl border p-5 ${TEAL_CARD}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-pink-soft">
                    <CheckCircle2 className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-[0.95rem] text-cream/85">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-cream">
              Want to learn more? Click{" "}
              <a
                href="https://thisisitinfo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold underline-offset-2 transition-colors hover:text-gold-light hover:underline"
              >
                here
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Client voices - video testimonials */}
      <section className="relative py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <h2 className="heading-display text-center text-3xl font-medium text-cream sm:text-4xl">
              Client Voices
            </h2>
            <p className="mt-3 text-center text-base text-cream/85 sm:text-lg">
              Hear it from the clients themselves.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CLIENT_VOICE_VIDEOS.map((video, i) => (
              <Reveal key={video.id} delay={i * 0.08}>
                <div className="flex flex-col items-center">
                  <Card className={`w-full overflow-hidden p-0 ${TEAL_CARD}`}>
                    <a
                      href={video.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block aspect-video w-full overflow-hidden bg-teal-mid/40"
                      aria-label={`Watch: ${video.title}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span
                        className="absolute inset-0 flex items-center justify-center bg-teal/25 transition-colors group-hover:bg-teal/40"
                        aria-hidden
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pink text-white shadow-[0_12px_28px_-10px_rgba(214,124,140,0.8)]">
                          <svg
                            viewBox="0 0 24 24"
                            className="ml-0.5 h-6 w-6 fill-current"
                            aria-hidden
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </Card>
                  <p className="mt-4 max-w-sm text-center text-sm font-semibold leading-snug text-cream">
                    {video.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-cream/55">
            More transformation stories, including X39 patch experiences,
            coming soon. Prefer to share yours?{" "}
            <a
              href="/contact"
              className="font-semibold text-pink-soft underline-offset-2 hover:underline"
            >
              Get in touch
            </a>
            .
          </p>
        </div>
      </section>

      {/* Why Kris */}
      <section className="relative overflow-hidden py-24">
        <DnaBackground variant="corner-bl" opacity={0.08} tone="text-pink-soft" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow text-pink-soft">Trusted Guidance</p>
            <h2 className="heading-display mt-4 text-3xl font-medium text-cream sm:text-5xl">
              Why Kris recommends X39
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/85">
              As a registered nurse with 33+ years of experience, and as a
              LifeWave merchant and advocate, Kris bridges trusted medical
              expertise with emerging, evidence-based innovations. She
              recommends X39 as part of a broader commitment to helping people
              reclaim vitality and become their own best health advocates.
            </p>
            <p className="mt-4 text-sm italic text-cream/55">
              Ready to see everything click into place?
              Experience the change for yourself.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={X39_PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold to-gold-light px-9 py-4 text-[0.95rem] font-semibold tracking-wide text-white shadow-[0_10px_30px_-10px_rgba(201,160,107,0.6)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-12px_rgba(201,160,107,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                Get X39 Patches
              </a>
              <Button
                href={BOOKING_URL}
                variant="secondary"
                size="lg"
                className="bg-white/10 text-cream ring-white/25 backdrop-blur hover:bg-white/20 hover:ring-white/50"
              >
                Book Free Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-white/10 py-10">
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="text-xs leading-relaxed text-cream/50">
            These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease. Consult your healthcare provider
            before use.
          </p>
        </div>
      </section>
    </div>
  );
}
