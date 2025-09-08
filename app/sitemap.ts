import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wedesign.one";
  const routes = ["", "/open-source", "/privacy"].map((p) => ({
    url: base + p,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.6,
  }));
  return routes;
}
