"use client";

import BlogCard from "@/components/BlogCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Article } from "@/lib/articles";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.slice(0, 6)); // Show only 6 most recent
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading articles:", error);
        setLoading(false);
      });
  }, []);

  if (loading || articles.length === 0) {
    return null;
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">Read Our Blog</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">Learn from first hand</p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-12"
        >
          {articles.map((article) => (
            <SwiperSlide key={article.slug}>
              <BlogCard article={article} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Link */}
        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
          >
            Виж всички статии
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Swiper Custom Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #10b981;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 32px;
        }

        .swiper-pagination-bullet {
          background: #10b981;
        }

        .swiper-pagination-bullet-active {
          background: #059669;
        }
      `}</style>
    </section>
  );
}
