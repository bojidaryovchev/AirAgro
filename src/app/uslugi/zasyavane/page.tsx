import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import ZasyavaneContent from "./ZasyavaneContent";

export const metadata: Metadata = {
  title: "Засяване с Дрон | Рехабилитация на Ливади & Промишлени Терени | AirAgro",
  description:
    "Професионално засяване с агро дрон за рехабилитация на ливади, укрепване на откоси, биологична рекултивация. Достъп до недостъпни терени. ☎ 0884-242-406",
  keywords: [
    "засяване с дрон",
    "дрон засяване ливади",
    "рехабилитация на ливади",
    "засяване откоси",
    "биологична рекултивация",
    "промишлени терени засяване",
    "хидропосев дрон",
    "авиозасяване",
    "трайни треви дрон",
  ],
  openGraph: {
    title: "Засяване с Дрон | Рехабилитация & Рекултивация",
    description: "Професионално засяване с агро дрон за ливади, откоси и промишлени терени. Достъп до недостъпни зони.",
    url: "https://airagro.bg/uslugi/zasyavane",
    type: "website",
    images: [
      {
        url: "/air-agro-logo.png",
        width: 1024,
        height: 1024,
        type: "image/png",
        alt: "AirAgro - Засяване с агро дрон",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Засяване с Дрон | AirAgro България",
    description: "Професионално засяване с агро дрон за ливади, откоси и промишлени терени. Достъп до недостъпни зони.",
    images: ["/air-agro-logo.png"],
  },
  alternates: {
    canonical: "https://airagro.bg/uslugi/zasyavane",
    languages: {
      "bg-BG": "https://airagro.bg/uslugi/zasyavane",
    },
  },
};

export default function SeedingServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Засяване с агро дрон",
    serviceType: "Засяване с агро дрон",
    provider: {
      "@type": "LocalBusiness",
      name: "AirAgro",
      telephone: "+359-884-242-406",
      url: "https://airagro.bg",
      logo: "https://airagro.bg/air-agro-logo.png",
      image: "https://airagro.bg/air-agro-logo.png",
    },
    areaServed: {
      "@type": "Country",
      name: "Bulgaria",
    },
    description:
      "Професионално засяване с дрон за рехабилитация на ливади, укрепване на откоси, биологична рекултивация на промишлени терени.",
    image: "https://airagro.bg/air-agro-logo.png",
    url: "https://airagro.bg/uslugi/zasyavane",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Видове засяване с дрон",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Рехабилитация на ливади" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Укрепване на откоси" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Биологична рекултивация" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Хидропосев с дрон" },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Начало", item: "https://airagro.bg" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://airagro.bg/uslugi" },
      { "@type": "ListItem", position: 3, name: "Засяване с дрон", item: "https://airagro.bg/uslugi/zasyavane" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <ZasyavaneContent />
      <Footer />
      <FloatingCallButton />
    </>
  );
}
