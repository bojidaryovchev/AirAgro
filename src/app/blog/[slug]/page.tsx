import { getAllArticleSlugs, getArticleWithHtml } from "@/lib/articles";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const article = await getArticleWithHtml(slug);

    return {
      title: `${article.title} | AirAgro Blog`,
      description: article.description,
      keywords: article.tags.join(", "),
      authors: [{ name: article.author }],
      openGraph: {
        title: article.title,
        description: article.description,
        type: "article",
        publishedTime: article.date,
        authors: [article.author],
        images: [
          {
            url: article.image,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
        url: `https://agroair.bg/blog/${slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.description,
        images: [article.image],
      },
      alternates: {
        canonical: `https://agroair.bg/blog/${slug}`,
      },
    };
  } catch (error) {
    return {
      title: "Статия не е намерена | AirAgro Blog",
    };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticleWithHtml(slug);
  } catch (error) {
    notFound();
  }

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AirAgro",
      logo: {
        "@type": "ImageObject",
        url: "https://airagro.bg/air-agro-logo.png",
      },
    },
    keywords: article.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="min-h-screen bg-white pt-20">
        {/* Back Button */}
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-medium text-emerald-600 transition-colors hover:text-emerald-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative mb-12 h-[500px] w-full md:h-[600px]">
          <Image src={article.image} alt={article.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-8 right-8 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            {article.category}
          </div>

          {/* Title Overlay */}
          <div className="absolute right-0 bottom-0 left-0 p-8 md:p-16">
            <div className="container mx-auto max-w-4xl">
              <h1 className="mb-6 text-4xl leading-tight font-bold text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>
                    {new Date(article.date).toLocaleDateString("bg-BG", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{article.readTime} четене</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="mx-auto max-w-6xl">
            {/* Article Lead */}
            <div className="mb-12">
              <p className="text-2xl leading-relaxed font-light text-gray-700">{article.description}</p>
            </div>

            {/* Tags */}
            <div className="mb-12 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div
              className="article-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.contentHtml || "" }}
            />

            {/* CTA Section */}
            <div className="mt-16 mb-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 text-center text-white shadow-xl md:p-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Готови да оптимизирате растителната защита?</h2>
              <p className="mb-8 text-xl opacity-90">
                Свържете се с нас за професионална консултация и услуги с дронове
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="rounded-lg bg-white px-10 py-4 text-lg font-semibold text-emerald-600 transition-colors hover:bg-gray-100"
                >
                  Поръчайте Консултация
                </Link>
                <Link
                  href="tel:+359898765432"
                  className="rounded-lg border-2 border-white/20 bg-emerald-700 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-emerald-800"
                >
                  Обадете се сега
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
