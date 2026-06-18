import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getBlurDataURL } from "./blur";
import { markdownToHtml } from "./markdown";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type Language = "bg" | "en";

export interface ArticleMetadata {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  blurDataURL?: string;
  slug: string;
  /**
   * Stable identity shared by an article and its translations across languages.
   * Used to emit cross-language hreflang alternates (BG and EN slugs differ).
   */
  translationKey?: string;
  category: "Технология" | "Съвети" | "Анализ" | "Technology" | "Tips" | "Analysis";
  tags: string[];
  readTime: string;
}

export interface Article extends ArticleMetadata {
  content: string;
  contentHtml?: string;
}

function getLanguageDirectory(lang: Language): string {
  return path.join(articlesDirectory, lang);
}

export function getAllArticleSlugs(lang: Language = "bg"): string[] {
  const langDir = getLanguageDirectory(lang);

  if (!fs.existsSync(langDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(langDir);
  return fileNames.filter((fileName) => fileName.endsWith(".md")).map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getArticleBySlug(slug: string, lang: Language = "bg"): Article {
  const fullPath = path.join(getLanguageDirectory(lang), `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const metadata = data as ArticleMetadata;
  return {
    ...metadata,
    slug,
    content,
    blurDataURL: getBlurDataURL(metadata.image),
  };
}

export async function getArticleWithHtml(slug: string, lang: Language = "bg"): Promise<Article> {
  const article = getArticleBySlug(slug, lang);
  const contentHtml = await markdownToHtml(article.content);

  return {
    ...article,
    contentHtml,
  };
}

export function getAllArticles(lang: Language = "bg"): Article[] {
  const slugs = getAllArticleSlugs(lang);
  const articles = slugs
    .map((slug) => getArticleBySlug(slug, lang))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

export function getRelatedArticles(currentSlug: string, limit: number = 6, lang: Language = "bg"): Article[] {
  const currentArticle = getArticleBySlug(currentSlug, lang);
  const allArticles = getAllArticles(lang).filter((article) => article.slug !== currentSlug);

  // Score articles based on matching tags and category
  const scoredArticles = allArticles.map((article) => {
    let score = 0;

    // Same category gets higher score
    if (article.category === currentArticle.category) {
      score += 10;
    }

    // Count matching tags
    const matchingTags = article.tags.filter((tag) => currentArticle.tags.includes(tag));
    score += matchingTags.length * 5;

    return { article, score };
  });

  // Sort by score (descending) and return top articles
  return scoredArticles
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.article);
}

export function getSupportedLanguages(): Language[] {
  return ["bg", "en"];
}

/**
 * Map of translationKey -> { lang: slug } for every article, built once from the
 * markdown frontmatter. Lets us resolve an article's counterpart in another language
 * even though BG and EN slugs differ.
 */
function getTranslationIndex(): Map<string, Partial<Record<Language, string>>> {
  const index = new Map<string, Partial<Record<Language, string>>>();
  for (const lang of getSupportedLanguages()) {
    for (const slug of getAllArticleSlugs(lang)) {
      const { translationKey } = getArticleBySlug(slug, lang);
      if (!translationKey) continue;
      const entry = index.get(translationKey) ?? {};
      entry[lang] = slug;
      index.set(translationKey, entry);
    }
  }
  return index;
}

/**
 * Return the slug of this article's translation in `target` language, or null if
 * there is no counterpart (article exists in only one language, or has no key).
 */
export function getTranslatedSlug(slug: string, fromLang: Language, target: Language): string | null {
  if (fromLang === target) return slug;
  let key: string | undefined;
  try {
    key = getArticleBySlug(slug, fromLang).translationKey;
  } catch {
    return null;
  }
  if (!key) return null;
  return getTranslationIndex().get(key)?.[target] ?? null;
}
