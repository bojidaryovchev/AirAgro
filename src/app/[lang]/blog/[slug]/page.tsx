import { getAllArticleSlugs, getArticleWithHtml, getRelatedArticles, getSupportedLanguages, Language } from "@/lib/articles";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCarousel from "@/app/[lang]/blog/BlogCarousel";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const lang of getSupportedLanguages()) {
    const slugs = getAllArticleSlugs(lang);
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }

  return params;
}

const translations = {
  bg: {
    backToHome: "Назад към Начало",
    readTime: "четене",
    cta: {
      title: "Готови да оптимизирате растителната защита?",
      subtitle: "Свържете се с нас за професионална консултация и услуги с дронове",
      button1: "Поръчайте Консултация",
      button2: "Обадете се сега",
    },
    related: {
      title: "Свързани статии",
      subtitle: "Научете повече за агро дроновете",
    },
    breadcrumb: {
      home: "Начало",
      blog: "Блог",
    },
  },
  en: {
    backToHome: "Back to Home",
    readTime: "read",
    cta: {
      title: "Ready to optimize crop protection?",
      subtitle: "Contact us for professional consultation and drone services",
      button1: "Book Consultation",
      button2: "Call Now",
    },
    related: {
      title: "Related Articles",
      subtitle: "Learn more about agro drones",
    },
    breadcrumb: {
      home: "Home",
      blog: "Blog",
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const language = lang as Language;

  try {
    const article = await getArticleWithHtml(slug, language);

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
        url: `https://airagro.bg/${lang}/blog/${slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.description,
        images: [article.image],
      },
      alternates: {
        canonical: `https://airagro.bg/${lang}/blog/${slug}`,
      },
    };
  } catch {
    return {
      title: lang === "bg" ? "Статия не е намерена | AirAgro Blog" : "Article Not Found | AirAgro Blog",
    };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;

  // Validate language
  if (!getSupportedLanguages().includes(lang as Language)) {
    notFound();
  }

  const language = lang as Language;
  const t = translations[language];

  let article;
  try {
    article = await getArticleWithHtml(slug, language);
  } catch {
    notFound();
  }

  // JSON-LD Structured Data
  const articleJsonLd = {
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://airagro.bg/${lang}/blog/${slug}`,
    },
    url: `https://airagro.bg/${lang}/blog/${slug}`,
  };

  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.breadcrumb.home,
        item: "https://airagro.bg",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.breadcrumb.blog,
        item: `https://airagro.bg/${lang}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://airagro.bg/${lang}/blog/${slug}`,
      },
    ],
  };

  // Get related articles
  const relatedArticles = getRelatedArticles(slug, 6, language);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />

      <article className="min-h-screen bg-white pt-20">
        {/* Back Button */}
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-medium text-emerald-600 transition-colors hover:text-emerald-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToHome}
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative mb-12 h-[500px] w-full md:h-[600px]">
          <Image
            src={article.image}
            alt={`${article.title} - ${language === "bg" ? "Пръскане с дрон, агро дрон услуги България" : "Drone spraying, agro drone services Bulgaria"}`}
            fill
            className="object-cover"
            priority
            placeholder={article.blurDataURL ? "blur" : "empty"}
            blurDataURL={article.blurDataURL}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute right-8 top-8 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            {article.category}
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto max-w-4xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
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
                    {new Date(article.date).toLocaleDateString(language === "bg" ? "bg-BG" : "en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>
                    {article.readTime} {t.readTime}
                  </span>
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
              <p className="text-2xl font-light leading-relaxed text-gray-700">{article.description}</p>
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
            <div className="mb-12 mt-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 text-center text-white shadow-xl md:p-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.cta.title}</h2>
              <p className="mb-8 text-xl opacity-90">{t.cta.subtitle}</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="rounded-lg bg-white px-10 py-4 text-lg font-semibold text-emerald-600 transition-colors hover:bg-gray-100"
                >
                  {t.cta.button1}
                </Link>
                <Link
                  href="tel:+359898765432"
                  className="rounded-lg border-2 border-white/20 bg-emerald-700 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-emerald-800"
                >
                  {t.cta.button2}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-gray-200 bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{t.related.title}</h2>
                <p className="mt-2 text-lg text-gray-600">{t.related.subtitle}</p>
              </div>
              <BlogCarousel articles={relatedArticles} lang={language} />
            </div>
          </div>
        )}
      </article>

      <Footer />
    </>
  );
}
