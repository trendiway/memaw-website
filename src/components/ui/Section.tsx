import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Full-viewport snap section (homepage) */
  snap?: boolean;
  as?: "section" | "div";
};

export function Section({
  id,
  children,
  className,
  style,
  snap = false,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      style={style}
      className={cn(
        "relative overflow-x-clip",
        snap &&
          "flex min-h-screen flex-col justify-center min-[768px]:min-h-[calc(100vh-4rem)] min-[768px]:snap-start min-[768px]:snap-always",
        className
      )}
    >
      {children}
    </Tag>
  );
}
