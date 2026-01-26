import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

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
