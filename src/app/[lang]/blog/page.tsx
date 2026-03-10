import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getAllArticles, getSupportedLanguages, Language } from "@/lib/articles";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return getSupportedLanguages().map((lang) => ({ lang }));
}

const translations = {
  bg: {
    title: "Блог за Дрон Технологии",
    description: "Научете повече за съвременните методи за растителна защита, дрон технологии и умно земеделие",
    noArticles: "Все още няма публикувани статии.",
    metaTitle: "Блог за Дрон Технологии | AirAgro",
    metaDescription: "Научете повече за съвременните методи за растителна защита, дрон технологии и умно земеделие",
  },
  en: {
    title: "Drone Technology Blog",
    description: "Learn more about modern crop protection methods, drone technology and smart farming",
    noArticles: "No articles published yet.",
    metaTitle: "Drone Technology Blog | AirAgro",
    metaDescription: "Learn more about modern crop protection methods, drone technology and smart farming",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Language] || translations.bg;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    keywords:
      lang === "bg"
        ? "дрон технологии, растителна защита, умно земеделие, прецизно земеделие, NDVI мониторинг"
        : "drone technology, crop protection, smart farming, precision agriculture, NDVI monitoring",
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      type: "website",
      url: `https://airagro.bg/${lang}/blog`,
      images: [
        {
          url: "/air-agro-logo.png",
          width: 1200,
          height: 630,
          alt: "AirAgro Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
      images: ["/air-agro-logo.png"],
    },
    alternates: {
      canonical: `https://airagro.bg/${lang}/blog`,
      languages: {
        "bg-BG": "/bg/blog",
        "en-US": "/en/blog",
        "x-default": "/bg/blog",
      },
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { lang } = await params;

  // Validate language
  if (!getSupportedLanguages().includes(lang as Language)) {
    notFound();
  }

  const language = lang as Language;
  const t = translations[language];

  // Fetch articles for this language
  const articles = getAllArticles(language);

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Navbar />

        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">{t.title}</h1>
              <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">{t.description}</p>
            </div>

            {/* Blog Grid */}
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <BlogCard key={article.slug} article={article} lang={language} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-gray-600 dark:text-gray-400">{t.noArticles}</p>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
