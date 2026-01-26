"use client";

import BlogCard from "@/components/BlogCard";
import { Article } from "@/lib/articles";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch articles from API route
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading articles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-emerald-500"></div>
          <p className="mt-4 text-gray-600">Зареждане на статии...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">Блог за Дрон Технологии</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Научете повече за съвременните методи за растителна защита, дрон технологии и умно земеделие
          </p>
        </div>

        {/* Swiper Carousel */}
        {articles.length > 0 && (
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
        )}

        {articles.length === 0 && !loading && (
          <div className="py-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">Все още няма публикувани статии.</p>
          </div>
        )}
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
    </div>
  );
}
