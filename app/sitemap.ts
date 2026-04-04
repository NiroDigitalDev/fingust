import type { MetadataRoute } from "next";

const BASE_URL = "https://fingust.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/izdelki",
    "/kakovost",
    "/o-podjetju",
    "/poslovalnice",
    "/priznanja",
    "/kontakt",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
