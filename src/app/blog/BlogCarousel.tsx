'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import BlogCard from '@/components/BlogCard';
import { Article } from '@/lib/articles';

// Import Swiper styles
import 'swiper/css';

interface BlogCarouselProps {
  articles: Article[];
}

export default function BlogCarousel({ articles }: BlogCarouselProps) {
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
        className="pb-12"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={article.slug}>
            <BlogCard article={article} priority={index < 3} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
