"use client";

import BlogCard from "@/components/BlogCard";
import { Article } from "@/lib/articles";
import { useLanguage } from "@/contexts/LanguageContext";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface BlogSectionProps {
  articles: Article[];
}

export default function BlogSection({ articles }: BlogSectionProps) {
  const { t } = useLanguage();

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            {t("blog.sectionTitle")}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">{t("blog.sectionSubtitle")}</p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
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
          className="!pb-20"
          style={{ paddingBottom: '80px' }}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={article.slug} className="flex h-auto pb-4">
              <BlogCard article={article} priority={index < 3} />
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
    </section>
  );
}
