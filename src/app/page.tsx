import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <BenefitsSection />
      <StatsSection />
      <VideoShowcaseSection />
      <ContactSection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
