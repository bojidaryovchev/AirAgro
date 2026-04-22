export interface GoogleReview {
  authorName: string;
  rating: number;
  text: string;
  photoUrl?: string;
  relativeTime: string;
}

export interface ReviewsData {
  reviews: GoogleReview[];
  aggregateRating: number;
  reviewCount: number;
}

// Static fallback reviews shown when the Google Places API is not yet configured.
// Replace with real reviews once GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are set in .env.local
const STATIC_REVIEWS: ReviewsData = {
  aggregateRating: 5.0,
  reviewCount: 12,
  reviews: [
    {
      authorName: "Петър Василев",
      rating: 5,
      text: "Пръскането на пшеницата беше извършено бързо и прецизно. Резултатите се виждат – по-малко болести, по-добра реколта. Определено ще ги наема пак!",
      relativeTime: "преди 1 месец",
    },
    {
      authorName: "Мария Стоянова",
      rating: 5,
      text: "Отлична работа! Екипът е много професионален и отговорен. Обработиха 200 декара слънчоглед за един ден. Силно препоръчвам услугата.",
      relativeTime: "преди 2 месеца",
    },
    {
      authorName: "Георги Димитров",
      rating: 5,
      text: "Използвах тяхната услуга за торене на лозе. Много доволен от резултата – равномерно покритие дори на труднодостъпни места. Цената е адекватна.",
      relativeTime: "преди 3 месеца",
    },
    {
      authorName: "Иван Колев",
      rating: 5,
      text: "Третирахме рапица при дъждовно и кално поле – дронът влезе там, където тракторът не можеше. Спасена реколта в точния момент. Благодаря на целия екип!",
      relativeTime: "преди 3 месеца",
    },
    {
      authorName: "Стефка Маринова",
      rating: 5,
      text: "Много бърза реакция на запитването и гъвкав график. Пръскането на овощната градина стана перфектно – без повреди по клоните. Препоръчвам!",
      relativeTime: "преди 4 месеца",
    },
    {
      authorName: "Николай Тодоров",
      rating: 5,
      text: "Наехме ги за хербицидно пръскане на царевица. Дронът покри точно зададената площ – получихме GPS отчет. Изключително прецизна и надеждна услуга.",
      relativeTime: "преди 5 месеца",
    },
  ],
};

/**
 * Fetches reviews from the Google Places API (New v1).
 * Falls back to static placeholder reviews when credentials are missing or the API fails.
 *
 * Required .env.local variables:
 *   GOOGLE_PLACES_API_KEY – your Google Cloud API key (Places API enabled)
 *   GOOGLE_PLACE_ID       – the Place ID from your Google Business Profile
 */
export async function fetchGoogleReviews(lang = "bg"): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return STATIC_REVIEWS;
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        "Accept-Language": lang,
      },
      // ISR: revalidate once per day
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      return STATIC_REVIEWS;
    }

    const data = await res.json();

    const reviews: GoogleReview[] = ((data.reviews as Record<string, unknown>[]) ?? []).map((r) => {
      const attribution = r.authorAttribution as Record<string, string> | undefined;
      const textObj = (r.text ?? r.originalText) as Record<string, string> | undefined;
      return {
        authorName: attribution?.displayName ?? "Anonymous",
        rating: typeof r.rating === "number" ? r.rating : 5,
        text: textObj?.text ?? "",
        photoUrl: attribution?.photoUri,
        relativeTime: typeof r.relativePublishTimeDescription === "string" ? r.relativePublishTimeDescription : "",
      };
    });

    return {
      reviews,
      aggregateRating: typeof data.rating === "number" ? data.rating : 5.0,
      reviewCount: typeof data.userRatingCount === "number" ? data.userRatingCount : 0,
    };
  } catch {
    return STATIC_REVIEWS;
  }
}
