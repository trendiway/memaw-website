"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type YouTubeFacadeProps = {
  videoId: string;
  /** Start time in seconds (from ?t=) */
  start?: number;
  title?: string;
  className?: string;
};

/**
 * Thumbnail-only YouTube facade - iframe loads only after click.
 */
export function YouTubeFacade({
  videoId,
  start = 0,
  title = "Play video",
  className,
}: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
    });
    if (start > 0) params.set("start", String(start));

    return (
      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden bg-blush",
          className
        )}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?${params}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={cn(
        "group relative block aspect-video w-full overflow-hidden bg-blush text-left",
        className
      )}
      aria-label={title}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        width={1280}
        height={720}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        {/* Classic YouTube play mark — mostly transparent so the thumbnail shows through */}
        <svg
          viewBox="0 0 68 48"
          className="h-[3.25rem] w-auto opacity-55 drop-shadow-md transition-opacity duration-300 group-hover:opacity-80 sm:h-16"
          aria-hidden
        >
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="#FF0033"
          />
          <path d="M45 24 27 14v20l18-10z" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}
