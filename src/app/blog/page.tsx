import { Metadata } from 'next';
import { getAllArticles } from '@/lib/articles';
import BlogCard from '@/components/BlogCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  
  // Get first 6 article images for preloading
  const preloadImages = articles.slice(0, 6).map(article => article.image);

  return (
    <>
      {/* Preload first 6 blog images */}
      {preloadImages.map((image, index) => (
        <link
          key={image}
          rel="preload"
          as="image"
          href={image}
          fetchPriority={index < 3 ? "high" : "low"}
        />
      ))}
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">Блог за Дрон Технологии</h1>
              <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                Научете повече за съвременните методи за растителна защита, дрон технологии и умно земеделие
              </p>
            </div>

            {/* Blog Grid */}
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <BlogCard key={article.slug} article={article} priority={index < 6} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-gray-600 dark:text-gray-400">Все още няма публикувани статии.</p>
              </div>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
