import type { Metadata } from "next";
import {
  Droplets,
  Search,
  HeartPulse,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { DnaBackground } from "@/components/DnaBackground";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { FIRE_PILLARS } from "@/lib/content";
import { BOOKING_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The F.I.R.E. Framework™",
  description:
    "Foundation, Identify, Resilience, Empowerment: Kris Hapgood’s practical roadmap for lasting health and vitality after 40.",
};

const ICONS = [Droplets, Search, HeartPulse, Sparkles];

const BENEFITS = [
  "Move beyond symptom management toward root cause clarity",
  "Build sustainable nutrition and lifestyle foundations",
  "Support your body’s natural capacity to heal and restore",
  "Gain confidence as your own best health advocate",
  "Create habits that last a lifetime, not a 30 day sprint",
];

export default function FireFrameworkPage() {
  return (
    <div data-fire-page className="relative overflow-x-clip">
      <PageHeader
        eyebrow="Signature Method"
        title={<>The F.I.R.E. Framework™</>}
        description="Through her signature F.I.R.E. Framework™, Kris guides people through a practical roadmap for creating lasting health and transformation. It is rooted in nursing wisdom, science, and compassionate coaching."
        className="pb-2 sm:pb-3"
      />

      <section className="relative pt-2 pb-20 sm:pt-3 sm:pb-24">
        <div className="mx-auto max-w-6xl space-y-8 px-5 sm:px-8 lg:px-10">
          {FIRE_PILLARS.map((pillar, i) => {
            const Icon = ICONS[i];
            const reverse = i % 2 === 1;
            return (
              <Reveal key={pillar.letter} delay={0.05}>
                <div className="grid items-center gap-8 rounded-[2rem] border border-pink/12 bg-white/80 p-8 shadow-[0_18px_50px_-28px_rgba(150,90,100,0.3)] backdrop-blur-sm lg:grid-cols-12 lg:gap-12 lg:p-12">
                  <div
                    className={`lg:col-span-4 ${reverse ? "lg:order-2" : ""}`}
                  >
                    <div className="relative inline-flex">
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink to-gold text-white shadow-[0_14px_30px_-12px_rgba(214,124,140,0.7)]">
                        <Icon className="h-7 w-7" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-6 eyebrow text-pink-deep">
                      Pillar {pillar.letter}
                    </p>
                    <h2 className="heading-display mt-2 text-3xl font-medium text-teal sm:text-4xl">
                      {pillar.title}
                      <span className="mt-1 block text-xl font-normal text-ink-muted">
                        {pillar.subtitle}
                      </span>
                    </h2>
                  </div>
                  <div
                    className={`lg:col-span-8 ${reverse ? "lg:order-1" : ""}`}
                  >
                    <p className="text-lg leading-relaxed text-ink-muted">
                      {pillar.detail}
                    </p>
                    <p className="mt-5 rounded-2xl border-l-4 border-pink/50 bg-blush/50 py-3 pl-5 pr-4 text-sm italic text-ink-soft">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <DnaBackground variant="corner-bl" opacity={0.08} tone="text-teal" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <p className="eyebrow text-pink-deep">The Experience</p>
            <h2 className="heading-display mt-4 text-3xl font-medium leading-[1.12] text-teal sm:text-5xl">
              How Kris guides you
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Whether in a workshop, coaching session, or speaking engagement,
              Kris walks with you through each pillar, translating clinical
              insight into clear, actionable steps you can live. Knowledge
              creates confidence. Confidence inspires action. Informed decisions
              transform lives, families, and future generations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={BOOKING_URL} variant="primary" size="lg">
                Start With a Discovery Call
              </Button>
              <Button
                href="/x39"
                variant="secondary"
                size="lg"
                className="text-pink-deep"
              >
                Learn About X39
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <p className="eyebrow text-pink-deep">What you gain</p>
              <ul className="mt-6 space-y-4">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex gap-3 text-[0.95rem] text-ink-muted">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-sage"
                      aria-hidden
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
