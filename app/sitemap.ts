import type { MetadataRoute } from "next";

const routes = ["", "/about", "/memberships", "/classes", "/trainers", "/programs", "/results", "/blog", "/contact", "/privacy", "/terms", "/waiver"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://gymfit.example.com${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "" ? 1 : 0.8 }));
}
