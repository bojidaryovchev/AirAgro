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

// Returned when credentials are missing or the Google Places API call fails.
// ReviewsSection renders nothing for an empty list, so the section simply hides.
const EMPTY_REVIEWS: ReviewsData = {
  reviews: [],
  aggregateRating: 0,
  reviewCount: 0,
};

/**
 * Fetches reviews from the Google Places API (New v1).
 * Returns empty data when credentials are missing or the API fails.
 *
 * Required .env.local variables:
 *   GOOGLE_PLACES_API_KEY – your Google Cloud API key (Places API enabled)
 *   GOOGLE_PLACE_ID       – the Place ID from your Google Business Profile
 */
export async function fetchGoogleReviews(lang = "bg"): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return EMPTY_REVIEWS;
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
      return EMPTY_REVIEWS;
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
    return EMPTY_REVIEWS;
  }
}
