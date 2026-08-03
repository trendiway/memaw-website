"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { DnaBackground } from "@/components/DnaBackground";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BOOKING_URL, BOOKING_WIDGET_URL } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-2xl border border-pink/20 bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/25 placeholder:text-ink-soft/60";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          interest: String(data.get("interest") ?? "discovery"),
          message: String(data.get("message") ?? ""),
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setError(
          payload.error ||
            "Could not send your message. Please try again or book a call."
        );
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        "Could not send your message. Please check your connection or book a call."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-contact-page className="relative overflow-x-clip">
      {/* Hero - transparent so body pink wash continues through the page */}
      <section className="relative pt-32 pb-14 sm:pt-36">
        <DnaBackground variant="corner-tr" opacity={0.09} tone="text-pink" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow text-pink-deep">Contact</p>
            <h1 className="heading-display mt-4 text-4xl font-medium leading-[1.08] text-teal sm:text-6xl">
              Let&apos;s begin the{" "}
              <span className="font-light italic text-gradient-rose">
                conversation
              </span>
            </h1>
            <p className="mt-5 text-lg text-ink-muted">
              Book a free 20-minute discovery call, or send a message. Kris
              would love to connect.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        {/* Form stays left; booking column stretches so the widget can sit bio | calendar */}
        <div className="mx-auto grid w-full max-w-[100rem] gap-5 px-3 sm:gap-6 sm:px-4 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start lg:gap-6 lg:px-5 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] xl:px-6">
          {/* Form */}
          <Reveal>
            <div className="rounded-[2rem] border border-pink/15 bg-white/80 p-6 shadow-[0_18px_50px_-28px_rgba(150,90,100,0.3)] backdrop-blur sm:p-7">
              <h2 className="heading-display text-2xl font-semibold text-teal">
                Send a Message
              </h2>
              {submitted ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-blush/60 p-8 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink to-gold text-white">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <p className="text-ink-muted">
                    Thank you for reaching out. Your message has been received.
                    We&apos;ll be in touch soon. Prefer to book directly? Use the
                    calendar on the right.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-5 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-teal"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      disabled={sending}
                      className={fieldClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-teal"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={sending}
                      className={fieldClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-1.5 block text-sm font-semibold text-teal"
                    >
                      I&apos;m interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className={fieldClasses}
                      defaultValue="discovery"
                      disabled={sending}
                    >
                      <option value="discovery">Discovery call</option>
                      <option value="speaking">Speaking</option>
                      <option value="coaching">Coaching</option>
                      <option value="workshops">Workshops</option>
                      <option value="x39">X39</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-teal"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={sending}
                      className={`${fieldClasses} resize-y`}
                    />
                  </div>
                  {error && (
                    <p
                      role="alert"
                      className="rounded-2xl bg-pink/10 px-4 py-3 text-sm text-pink-deep"
                    >
                      {error}
                    </p>
                  )}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={sending}
                  >
                    {sending ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Booking widget */}
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-pink/15 bg-white/80 p-5 shadow-[0_18px_50px_-28px_rgba(150,90,100,0.3)] backdrop-blur sm:p-6 lg:p-7">
              <h2 className="heading-display text-2xl font-semibold text-teal">
                Book your free discovery call
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Choose a time that works for you: 20 minutes to explore your
                health goals together.
              </p>

              {/* Full booking widget: bio beside calendar, with breathing room */}
              <div className="mt-5 overflow-hidden rounded-2xl border border-pink/10 bg-[#fdf2f9] p-5 sm:p-6 lg:p-7">
                <iframe
                  src={BOOKING_WIDGET_URL}
                  title="Book a free 20-minute health discovery call"
                  className="h-[640px] w-full rounded-xl border-0 bg-[#fdf2f9] sm:h-[680px] lg:h-[720px]"
                  style={{ overflow: "hidden" }}
                  scrolling="no"
                  loading="lazy"
                  allow="payment *"
                />
              </div>

              <p className="mt-4 text-center text-sm text-ink-soft">
                Or visit the{" "}
                <a
                  href={BOOKING_URL}
                  className="font-semibold text-pink-deep underline-offset-2 hover:underline"
                >
                  booking page
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
