import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/pathways",
  "/models",
  "/events",
  "/resources",
  "/discover",
  "/discern",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://cmcopenbible.netlify.app${route}`,
    lastModified: new Date("2026-07-24"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/discover" ? 0.9 : 0.8,
  }));
}
