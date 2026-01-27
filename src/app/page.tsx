import BenefitsSection from "@/components/BenefitsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
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
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AgroAir',
    url: 'https://agroair.bg',
    logo: 'https://agroair.bg/air-agro-logo.png',
    description: 'Професионални дрон услуги за пръскане и торене с DJI Agras T50. Прецизно въздушно третиране на земеделски култури в България.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+359-898-765-432',
      contactType: 'Customer Service',
      areaServed: 'BG',
      availableLanguage: ['Bulgarian', 'English'],
    },
    sameAs: [
      // Add social media profiles here when available
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BG',
    },
    serviceArea: {
      '@type': 'Country',
      name: 'Bulgaria',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <BenefitsSection />
      <StatsSection />
      <ContactSection />
      <BlogSection articles={articles} />
      <Footer />
      <FloatingCallButton />
      </div>
    </>
  );
}
