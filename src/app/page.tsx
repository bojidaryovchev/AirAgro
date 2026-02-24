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
  
  // Get first 3 blog images for preloading
  const preloadBlogImages = articles.slice(0, 3).map(article => article.image);

  // JSON-LD structured data for homepage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://airagro.bg',
    name: 'AirAgro',
    alternateName: 'AirAgro България',
    url: 'https://airagro.bg',
    logo: 'https://airagro.bg/air-agro-logo.png',
    image: 'https://airagro.bg/air-agro-logo.png',
    description: 'Професионални услуги за пръскане с агро дрон в цяла България. DJI Agras T40 & T50 с RTK прецизност. Над 25,000 дка опит. Пръскане, засяване, листно торене, NDVI анализ.',
    priceRange: '$$',
    telephone: '+359-876-543-546',
    email: 'contact.airagro@gmail.com',
    areaServed: {
      '@type': 'Country',
      name: 'Bulgaria',
      '@id': 'https://www.wikidata.org/wiki/Q219'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BG',
      addressRegion: 'България'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '42.6977',
      longitude: '23.3219'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '06:00',
        closes: '20:00'
      }
    ],
    serviceType: [
      'Пръскане с дрон',
      'Засяване с дрон',
      'Листно торене',
      'Картографиране с дрон',
      'NDVI анализ',
      'NDRE анализ',
      'Засенчване на оранжерии'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Агро дрон услуги',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Пръскане с агро дрон',
            description: 'Професионално пръскане на земеделски култури с DJI Agras дронове. Инсектициди, хербициди, фунгициди, листно торене.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Засяване с дрон',
            description: 'Прецизно засяване на покривни култури и зелени торове с дрон технология.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'NDVI картографиране',
            description: 'Мултиспектрален анализ на здравето на културите за Variable Rate Application (VRA).'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+359-876-543-546',
      contactType: 'Customer Service',
      areaServed: 'BG',
      availableLanguage: ['Bulgarian', 'English'],
      email: 'contact.airagro@gmail.com'
    },
    sameAs: [
      'https://www.facebook.com/airagro',
      'https://www.instagram.com/airagro'
    ],
    knowsAbout: [
      'Precision Agriculture',
      'Drone Spraying',
      'Agricultural Technology',
      'Crop Protection',
      'Variable Rate Application'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Preload first 3 blog images */}
      {preloadBlogImages.map((image, index) => (
        <link
          key={image}
          rel="preload"
          as="image"
          href={image}
          fetchPriority={index === 0 ? "high" : "low"}
        />
      ))}
      
      <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <BenefitsSection />
      <StatsSection />
      <ContactSection />
      <BlogSection articles={articles} />
      <FAQSection />
      <Footer />
      <FloatingCallButton />
      </div>
    </>
  );
}
