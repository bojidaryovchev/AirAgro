import { getAllArticleSlugs, getSupportedLanguages, getTranslatedSlug } from "@/lib/articles";
import { localizedPath, STATIC_PAGES } from "@/lib/routes";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://airagro.bg";
  const languages = getSupportedLanguages();
  const lastModified = new Date();

  // Static marketing pages — localized per language.
  const staticPages: MetadataRoute.Sitemap = languages.flatMap((lang) =>
    STATIC_PAGES.map((p) => ({
      url: `${baseUrl}${localizedPath(p.key, lang)}`,
      lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
  );

  // Blog listing pages per language.
  const blogListingUrls: MetadataRoute.Sitemap = languages.map((lang) => ({
    url: `${baseUrl}${localizedPath("blog", lang)}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Blog article pages per language, each declaring its cross-language hreflang
  // alternates (BG and EN slugs differ, resolved via the article's translationKey).
  const blogArticleUrls: MetadataRoute.Sitemap = languages.flatMap((lang) => {
    const slugs = getAllArticleSlugs(lang);
    return slugs.map((slug) => {
      const bgSlug = getTranslatedSlug(slug, lang, "bg");
      const enSlug = getTranslatedSlug(slug, lang, "en");
      const alternateLanguages: Record<string, string> = {};
      if (bgSlug) alternateLanguages["bg-BG"] = `${baseUrl}/bg/blog/${bgSlug}`;
      if (enSlug) alternateLanguages["en-US"] = `${baseUrl}/en/blog/${enSlug}`;

      return {
        url: `${baseUrl}/${lang}/blog/${slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        ...(Object.keys(alternateLanguages).length > 0 ? { alternates: { languages: alternateLanguages } } : {}),
      };
    });
  });

  return [...staticPages, ...blogListingUrls, ...blogArticleUrls];
}
