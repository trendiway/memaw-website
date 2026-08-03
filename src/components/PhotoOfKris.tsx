import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoPlaceholderProps = {
  /** Descriptive TODO label for which photo to drop in */
  label: string;
  /** Expected filename under /public/images/ */
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspect?: "portrait" | "square" | "wide" | "hero";
};

const aspectClasses = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[16/11]",
  hero: "aspect-[4/5] sm:aspect-[3/4]",
};

/**
 * Elegant photo frame with warm blush treatment.
 * Drop real Kris photos into /public/images/ (webp preferred).
 */
export function PhotoOfKris({
  label,
  src,
  alt,
  className,
  priority = false,
  aspect = "portrait",
}: PhotoPlaceholderProps) {
  return (
    <div className={cn("group relative", className)}>
      {/* Soft offset glow frame */}
      <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.25rem] bg-gradient-to-br from-pink-soft/60 via-blush-deep/50 to-gold-light/40 blur-[2px]" />
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blush-deep via-cream to-pink-soft/50 shadow-[0_30px_70px_-30px_rgba(150,90,100,0.5)] ring-1 ring-white/60",
          aspectClasses[aspect]
        )}
      >
        {src ? (
          // TODO: Replace with actual photo of Kris from krisrn.com once added to /public/images/
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-pink/30 bg-white/60 shadow-inner">
              <span className="heading-display text-3xl text-pink-deep/70">
                KH
              </span>
            </div>
            <p className="heading-display text-lg text-teal/80">Photo of Kris</p>
            <p className="max-w-[15rem] text-xs leading-relaxed text-ink-soft">
              {/* TODO: Replace with actual photo of Kris [{label}] from krisrn.com */}
              Add{" "}
              <span className="font-semibold text-pink-deep">{label}</span> to
              /public/images/
            </p>
          </div>
        )}
        {/* Warm soft overlay for tonal cohesion on real photos */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-deep/12 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/40" />
      </div>
    </div>
  );
}
