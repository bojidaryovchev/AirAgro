"use client";

import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import type { GoogleReview, ReviewsData } from "@/lib/reviews";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// --- helpers -----------------------------------------------------------

const AVATAR_COLORS = [
  "bg-red-500",
  "bg-blue-600",
  "bg-emerald-600",
  "bg-amber-500",
  "bg-purple-600",
  "bg-pink-500",
  "bg-indigo-600",
  "bg-orange-500",
] as const;

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} от 5 звезди`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <div className="flex items-center gap-1.5">
      {/* Google "G" multi-color logo */}
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      <span className="text-muted-foreground text-xs font-medium">Google</span>
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const initial = review.authorName.charAt(0).toUpperCase();
  const avatarColor = getAvatarColor(review.authorName);

  return (
    <div className="bg-card border-border flex h-full flex-col rounded-2xl border p-6 shadow-sm">
      {/* Reviewer header */}
      <div className="mb-4 flex items-center gap-3">
        {review.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.photoUrl}
            alt={review.authorName}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className={`${avatarColor} flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white`}
            aria-hidden="true"
          >
            {initial}
          </div>
        )}
        <div>
          <p className="text-foreground leading-tight font-semibold">{review.authorName}</p>
          <div className="mt-0.5">
            <StarRating rating={review.rating} />
          </div>
        </div>
      </div>

      {/* Review text */}
      <p className="text-muted-foreground flex-1 text-sm leading-relaxed">{review.text}</p>

      {/* Footer */}
      <div className="border-border mt-4 flex items-center justify-between border-t pt-4">
        <span className="text-muted-foreground text-xs">{review.relativeTime}</span>
        <GoogleBadge />
      </div>
    </div>
  );
}

// --- main component ---------------------------------------------------

interface ReviewsSectionProps extends ReviewsData {
  googleMapsUrl?: string;
}

export default function ReviewsSection({ reviews, aggregateRating, reviewCount, googleMapsUrl }: ReviewsSectionProps) {
  const { t } = useLanguage();

  if (!reviews || reviews.length === 0) return null;

  return (
    <section id="reviews" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <FadeIn className="mb-12 text-center">
          <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-medium">
            {t("reviews.badge")}
          </span>
          <h2 className="font-display text-foreground text-4xl font-bold md:text-5xl">{t("reviews.title")}</h2>

          {/* Aggregate rating */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="text-foreground text-3xl font-bold">{aggregateRating.toFixed(1)}</span>
            <div className="flex gap-1" aria-label={`${aggregateRating} от 5`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            {reviewCount > 0 && (
              <span className="text-muted-foreground text-sm">
                ({reviewCount} {t("reviews.count")})
              </span>
            )}
          </div>
        </FadeIn>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14!"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex h-auto">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Link to all reviews */}
        {googleMapsUrl && (
          <FadeIn className="mt-2 text-center">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              {t("reviews.viewAll")}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
