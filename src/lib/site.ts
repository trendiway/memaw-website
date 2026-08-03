/** Canonical production origin for sitemap, robots, and absolute metadata URLs. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://krisrn.com";
