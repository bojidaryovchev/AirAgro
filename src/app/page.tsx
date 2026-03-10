import BenefitsSection from "@/components/BenefitsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  // Fetch articles at build time (SSG)
  const articles = getAllArticles().slice(0, 6); // Get 6 most recent articles

  // JSON-LD structured data for homepage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://airagro.bg",
    name: "AirAgro",
    alternateName: "AirAgro България",
    url: "https://airagro.bg",
    logo: "https://airagro.bg/air-agro-logo.png",
    image: "https://airagro.bg/air-agro-logo.png",
    description:
      "Професионални услуги за пръскане с агро дрон в цяла България. DJI Agras T50 с RTK прецизност. Над 25,000 дка опит. Пръскане, засяване, листно торене, NDVI анализ.",
    priceRange: "$$",
    telephone: "+359-876-543-546",
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
    serviceType: [
      "Пръскане с дрон",
      "Засяване с дрон",
      "Листно торене",
      "Картографиране с дрон",
      "NDVI анализ",
      "NDRE анализ",
      "Засенчване на оранжерии",
    ],
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
            name: "NDVI картографиране",
            description: "Мултиспектрален анализ на здравето на културите за Variable Rate Application (VRA).",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+359-876-543-546",
      contactType: "Customer Service",
      areaServed: "BG",
      availableLanguage: ["Bulgarian", "English"],
      email: "contact.airagro@gmail.com",
    },
    sameAs: ["https://www.facebook.com/airagro", "https://www.instagram.com/airagro"],
    foundingDate: "2023",
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
    inLanguage: "bg",
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
    url: "https://airagro.bg",
    inLanguage: ["bg", "en"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://airagro.bg/bg/blog?q={search_term_string}",
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
        <ContactSection />
        <FAQSection />
        <BlogSection articles={articles} />
        <Footer />
        <FloatingCallButton />
      </div>
    </>
  );
}
