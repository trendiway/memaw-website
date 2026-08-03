import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/fire-framework",
    "/x39",
    "/work-with-kris",
    "/contact",
    "/book",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" || path === "/book" ? 0.9 : 0.8,
  }));
}
