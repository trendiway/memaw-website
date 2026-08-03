import { DnaBackground } from "@/components/DnaBackground";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  children?: React.ReactNode;
  className?: string;
};

/** Consistent, elegant page hero used across inner pages */
export function PageHeader({
  eyebrow,
  title,
  description,
  align = "center",
  children,
  className,
}: PageHeaderProps) {
  const centered = align === "center";
  // Transparent + no overflow clip: parent paints one continuous bg-hero-gradient;
  // overflow-hidden was clipping DNA at the section edge into a hard seam.
  return (
    <section
      className={cn(
        "relative pt-32 pb-16 sm:pt-36 sm:pb-20",
        className
      )}
    >
      <DnaBackground variant="corner-tr" opacity={0.09} tone="text-pink" />
      <DnaBackground
        variant="corner-bl"
        opacity={0.06}
        tone="text-teal"
        animate={false}
      />
      <div
        className={`relative z-10 mx-auto max-w-3xl px-5 sm:px-8 ${
          centered ? "text-center" : "text-left"
        }`}
      >
        <Reveal>
          <p className="eyebrow text-pink-deep">{eyebrow}</p>
          <h1 className="heading-display mt-4 text-4xl font-medium leading-[1.1] text-teal sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p
              className={`mt-6 text-lg leading-relaxed text-ink-muted ${
                centered ? "mx-auto max-w-2xl" : "max-w-2xl"
              }`}
            >
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
