import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

/** Soft elevated surface - warm, feminine, gently rounded */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-pink/12 bg-white/80 p-7 shadow-[0_18px_50px_-24px_rgba(150,90,100,0.28)] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-pink/30 hover:shadow-[0_28px_64px_-28px_rgba(150,90,100,0.4)]",
        className
      )}
    >
      {children}
    </div>
  );
}
