import { Metadata } from 'next';
import { getAllArticles } from '@/lib/articles';
import BlogCarousel from './BlogCarousel';

export const metadata: Metadata = {
  title: 'Блог за Дрон Технологии | AirAgro',
  description: 'Научете повече за съвременните методи за растителна защита, дрон технологии и умно земеделие',
  keywords: 'дрон технологии, растителна защита, умно земеделие, прецизно земеделие, NDVI мониторинг',
  openGraph: {
    title: 'Блог за Дрон Технологии | AirAgro',
    description: 'Научете повече за съвременните методи за растителна защита, дрон технологии и умно земеделие',
    type: 'website',
    url: 'https://agroair.bg/blog',
    images: [
      {
        url: '/air-agro-logo.png',
        width: 1200,
        height: 630,
        alt: 'AirAgro Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог за Дрон Технологии | AirAgro',
    description: 'Научете повече за съвременните методи за растителна защита, дрон технологии и умно земеделие',
    images: ['/air-agro-logo.png'],
  },
  alternates: {
    canonical: 'https://agroair.bg/blog',
  },
};

export default function BlogPage() {
  // Fetch articles at build time (SSG)
  const articles = getAllArticles();
  
  // Get first 3 article images for preloading (visible in carousel initially)
  const preloadImages = articles.slice(0, 3).map(article => article.image);

  return (
    <>
      {/* Preload first 3 blog images */}
      {preloadImages.map((image, index) => (
        <link
          key={image}
          rel="preload"
          as="image"
          href={image}
          // @ts-ignore
          fetchpriority={index === 0 ? "high" : "low"}
        />
      ))}
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">Блог за Дрон Технологии</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Научете повече за съвременните методи за растителна защита, дрон технологии и умно земеделие
          </p>
        </div>

        {/* Blog Carousel */}
        {articles.length > 0 ? (
          <BlogCarousel articles={articles} />
        ) : (
          <div className="py-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">Все още няма публикувани статии.</p>
          </div>
        )}
      </div>
    </>
  );
}
