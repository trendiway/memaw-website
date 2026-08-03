import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Traditional search engines - always allow
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },

      // AI search/retrieval crawlers - ALLOW (power AI answers/citations)
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },

      // AI training crawlers - BLOCK (opt out of training data use)
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },

      // Everyone else: allow indexing by default
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
