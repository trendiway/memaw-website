import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "gold" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 will-change-transform";

const variants: Record<ButtonVariant, string> = {
  // Soft rose primary with gentle lift
  primary:
    "bg-pink text-white shadow-[0_10px_30px_-10px_rgba(214,124,140,0.6)] hover:bg-pink-deep hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-12px_rgba(214,124,140,0.7)]",
  // Cream/blush pill
  secondary:
    "bg-white/70 text-teal ring-1 ring-inset ring-pink/25 backdrop-blur hover:bg-white hover:ring-pink/50 hover:-translate-y-0.5",
  // Rose gold
  gold:
    "bg-gradient-to-br from-gold to-gold-light text-white shadow-[0_10px_30px_-10px_rgba(201,160,107,0.6)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-12px_rgba(201,160,107,0.7)]",
  ghost: "bg-transparent text-teal hover:bg-pink/10",
  outline:
    "bg-transparent text-teal ring-1 ring-inset ring-teal/25 hover:ring-teal/60 hover:bg-teal/5 hover:-translate-y-0.5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[0.8rem]",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-[0.95rem]",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
