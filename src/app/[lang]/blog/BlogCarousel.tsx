"use client";

import BlogCard from "@/components/BlogCard";
import { Article, Language } from "@/lib/articles";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface BlogCarouselProps {
  articles: Article[];
  lang?: Language;
}

export default function BlogCarousel({ articles, lang = "bg" }: BlogCarouselProps) {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
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
        className="!pb-20"
        style={{ paddingBottom: "80px" }}
      >
        {articles.map((article) => (
          <SwiperSlide key={article.slug} className="pb-4">
            <BlogCard article={article} lang={lang} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
