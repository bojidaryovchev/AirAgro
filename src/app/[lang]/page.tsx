import BenefitsSection from "@/components/BenefitsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import { getAllArticles, getSupportedLanguages, Language } from "@/lib/articles";
import { getTranslations } from "@/lib/i18n";
import { fetchGoogleReviews } from "@/lib/reviews";
import { localizedPath } from "@/lib/routes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return getSupportedLanguages().map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const language = getSupportedLanguages().includes(lang as Language) ? (lang as Language) : "bg";
  const t = getTranslations(language);

  const canonical = `https://airagro.bg${localizedPath("home", language)}`;

  return {
    title: t("homePage.meta.title"),
    description: t("homePage.meta.description"),
    alternates: {
      canonical,
      languages: {
        "bg-BG": `https://airagro.bg${localizedPath("home", "bg")}`,
        "en-US": `https://airagro.bg${localizedPath("home", "en")}`,
        "x-default": `https://airagro.bg${localizedPath("home", "bg")}`,
      },
    },
    openGraph: {
      url: canonical,
    },
  };
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!getSupportedLanguages().includes(lang as Language)) {
    notFound();
  }
  const language = lang as Language;

  // Fetch articles at build time (SSG)
  const articles = getAllArticles(language).slice(0, 6); // Get 6 most recent articles

  // Fetch Google Business Profile reviews (server-side, daily ISR)
  const reviewsData = await fetchGoogleReviews(language);
  const googleMapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL;

  // JSON-LD structured data for homepage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://airagro.bg/#localbusiness",
    name: "AirAgro",
    alternateName: "AirAgro България",
    url: "https://airagro.bg",
    logo: "https://airagro.bg/air-agro-logo.png",
    image: "https://airagro.bg/air-agro-logo.png",
    description:
      "Професионални услуги за пръскане с агро дрон в цяла България. DJI Agras T50 с RTK прецизност. Над 25,000 дка опит. Пръскане, засяване, листно торене, засенчване на оранжерии.",
    priceRange: "$$",
    telephone: "+359-884-242-406",
    email: "contact.airagro@gmail.com",
    areaServed: {
      "@type": "Country",
      name: "Bulgaria",
      "@id": "https://www.wikidata.org/wiki/Q219",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BG",
      addressRegion: "България",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.6977",
      longitude: "23.3219",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "06:00",
        closes: "20:00",
      },
    ],
    serviceType: ["Пръскане с дрон", "Засяване с дрон", "Листно торене", "Засенчване на оранжерии"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Агро дрон услуги",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Пръскане с агро дрон",
            description:
              "Професионално пръскане на земеделски култури с DJI Agras дронове. Инсектициди, хербициди, фунгициди, листно торене.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Засяване с дрон",
            description: "Прецизно засяване на покривни култури и зелени торове с дрон технология.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Засенчване на оранжерии",
            description:
              "Равномерно нанасяне на засенчваща боя COVER X2 върху оранжерии с дрон. Защита на културите от прегряване и слънчево изгаряне, без скелета и ръчен труд.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+359-884-242-406",
      contactType: "Customer Service",
      areaServed: "BG",
      availableLanguage: ["Bulgarian", "English"],
      email: "contact.airagro@gmail.com",
    },
    sameAs: ["https://www.facebook.com/profile.php?id=61587474574865"],
    foundingDate: "2023-01-01",
    knowsAbout: [
      "Precision Agriculture",
      "Drone Spraying",
      "Agricultural Technology",
      "Crop Protection",
      "Variable Rate Application",
    ],
  };

  // VideoObject schema for hero video
  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "AirAgro - Пръскане с агро дрон в България",
    description:
      "Професионално пръскане на земеделски култури с DJI Agras T50. RTK прецизност, спестяване на ресурси, без утъпкване на почвата.",
    thumbnailUrl: "https://airagro.bg/air-agro-logo.png",
    contentUrl: "https://airagro.bg/videos/drone-bg.webm",
    uploadDate: "2024-01-01",
    duration: "PT1M",
    inLanguage: language,
    publisher: {
      "@type": "Organization",
      name: "AirAgro",
      logo: {
        "@type": "ImageObject",
        url: "https://airagro.bg/air-agro-logo.png",
      },
    },
  };

  // WebSite schema with SearchAction for sitelinks searchbox
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AirAgro",
    alternateName: "AirAgro България",
    url: `https://airagro.bg${localizedPath("home", language)}`,
    inLanguage: ["bg", "en"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://airagro.bg/${language}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <BenefitsSection />
        <StatsSection />
        <ReviewsSection {...reviewsData} googleMapsUrl={googleMapsUrl} />
        <ContactSection />
        <FAQSection />
        <BlogSection articles={articles} />
        <Footer />
        <FloatingCallButton />
      </div>
    </>
  );
}
