"use client";

import { Article } from "@/lib/articles";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  article: Article;
  priority?: boolean;
}

export default function BlogCard({ article, priority = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block h-full transform overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white">
          {article.category}
        </div>
      </div>

      <div className="flex h-full flex-col p-6">
        <div className="mb-3 flex w-full flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 dark:bg-emerald-500/15 dark:text-emerald-200">
            {new Date(article.date).toLocaleDateString("bg-BG")}
          </span>
          <span className="bg-gray-100 text-gray-700 ml-auto rounded-full px-3 py-1 dark:bg-white/10 dark:text-gray-200">
            {article.readTime}
          </span>
        </div>

        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white">
          {article.title}
        </h3>

        <p className="mb-4 flex-1 line-clamp-3 text-gray-600 dark:text-gray-300">{article.description}</p>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{article.author}</span>
        </div>
      </div>
    </Link>
  );
}
