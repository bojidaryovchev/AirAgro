import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Allow AI search crawlers (ChatGPT browsing, Perplexity search)
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Block AI training crawlers (model training, not search)
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/"],
      },
      {
        userAgent: "ClaudeBot",
        disallow: ["/"],
      },
      {
        userAgent: "Bytespider",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
    ],
    sitemap: "https://airagro.bg/sitemap.xml",
  };
}
