import { MetadataRoute } from 'next';
import { getAllArticleSlugs, getSupportedLanguages } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://airagro.bg';
  const languages = getSupportedLanguages();

  // Static pages (Bulgarian-only, no lang prefix)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/uslugi/pruskane`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/uslugi/zasyavane`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tseni`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/za-nas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Blog listing pages per language
  const blogListingUrls: MetadataRoute.Sitemap = languages.map((lang) => ({
    url: `${baseUrl}/${lang}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Blog article pages per language
  const blogArticleUrls: MetadataRoute.Sitemap = languages.flatMap((lang) => {
    const slugs = getAllArticleSlugs(lang);
    return slugs.map((slug) => ({
      url: `${baseUrl}/${lang}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  });

  return [...staticPages, ...blogListingUrls, ...blogArticleUrls];
}
