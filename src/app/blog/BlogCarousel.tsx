'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import BlogCard from '@/components/BlogCard';
import { Article } from '@/lib/articles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface BlogCarouselProps {
  articles: Article[];
}

export default function BlogCarousel({ articles }: BlogCarouselProps) {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
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
      
      {/* Swiper Custom Styles */}
      <style jsx global>{`        
        .swiper-pagination-bullet {
          background: #10b981;
        }
        
        .swiper-pagination-bullet-active {
          background: #059669;
        }
      `}</style>
    </>
  );
}
