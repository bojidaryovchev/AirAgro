import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllArticleSlugs, getArticleWithHtml } from '@/lib/articles';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

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
      keywords: article.tags.join(', '),
      authors: [{ name: article.author }],
      openGraph: {
        title: article.title,
        description: article.description,
        type: 'article',
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
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.description,
        images: [article.image],
      },
    };
  } catch (error) {
    return {
      title: 'Статия не е намерена | AirAgro Blog',
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
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AirAgro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://airagro.bg/air-agro-logo.png',
      },
    },
    keywords: article.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="min-h-screen bg-white pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[500px] md:h-[600px] mb-12">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-8 right-8 bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
            {article.category}
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(article.date).toLocaleDateString('bg-BG', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{article.readTime} четене</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Article Lead */}
            <div className="mb-12">
              <p className="text-2xl leading-relaxed text-gray-700 font-light">
                {article.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div 
              className="article-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.contentHtml || '' }}
            />

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white mt-16 mb-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готови да оптимизирате растителната защита?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Свържете се с нас за професионална консултация и услуги с дронове
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="px-10 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Поръчайте Консултация
                </Link>
                <Link
                  href="tel:+359898765432"
                  className="px-10 py-4 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800 transition-colors border-2 border-white/20 text-lg"
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
