import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { markdownToHtml } from "./markdown";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export interface ArticleMetadata {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  category: "Технология" | "Съвети" | "Анализ";
  tags: string[];
  readTime: string;
}

export interface Article extends ArticleMetadata {
  content: string;
  contentHtml?: string;
}

export function getAllArticleSlugs(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.filter((fileName) => fileName.endsWith(".md")).map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getArticleBySlug(slug: string): Article {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...(data as ArticleMetadata),
    slug,
    content,
  };
}

export async function getArticleWithHtml(slug: string): Promise<Article> {
  const article = getArticleBySlug(slug);
  const contentHtml = await markdownToHtml(article.content);

  return {
    ...article,
    contentHtml,
  };
}

export function getAllArticles(): Article[] {
  const slugs = getAllArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}
