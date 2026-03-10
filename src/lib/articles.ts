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
