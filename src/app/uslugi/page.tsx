import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Услуги с Агро Дрон | Пръскане, Засяване, NDVI Анализ | AirAgro",
  description:
    "Пълен списък агро дрон услуги: пръскане с DJI Agras T50, засяване, листно торене, NDVI мониторинг, картографиране. Обслужваме цяла България. ☎ 0884-242-406",
  keywords: [
    "агро дрон услуги",
    "пръскане с дрон",
    "засяване с дрон",
    "листно торене дрон",
    "NDVI анализ дрон",
    "дрон услуги земеделие",
    "DJI Agras услуги",
  ],
  openGraph: {
    title: "Агро Дрон Услуги | AirAgro България",
    description:
      "Пръскане, засяване, листно торене, NDVI мониторинг — пълно портфолио от дрон услуги за земеделие в цяла България.",
    url: "https://airagro.bg/uslugi",
    type: "website",
    images: [
      {
        url: "/air-agro-logo.png",
        width: 1024,
        height: 1024,
        type: "image/png",
        alt: "AirAgro - Агро Дрон Услуги",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Агро Дрон Услуги | AirAgro България",
    description:
      "Пръскане, засяване, листно торене, NDVI мониторинг — пълно портфолио от дрон услуги за земеделие в цяла България.",
    images: ["/air-agro-logo.png"],
  },
  alternates: {
    canonical: "https://airagro.bg/uslugi",
    languages: {
      "bg-BG": "https://airagro.bg/uslugi",
    },
  },
};

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Агро дрон услуги на AirAgro",
    description: "Пълен списък услуги за прецизно земеделие с дрон технология",
    url: "https://airagro.bg/uslugi",
    numberOfItems: 6,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Растителна Защита", url: "https://airagro.bg/uslugi/pruskane" },
      { "@type": "ListItem", position: 2, name: "Листно Торене", url: "https://airagro.bg/uslugi/pruskane" },
      { "@type": "ListItem", position: 3, name: "Контрол на Плевели", url: "https://airagro.bg/uslugi/pruskane" },
      { "@type": "ListItem", position: 4, name: "Засяване с Дрон", url: "https://airagro.bg/uslugi/zasyavane" },
      { "@type": "ListItem", position: 5, name: "NDVI Мониторинг", url: "https://airagro.bg/uslugi" },
      { "@type": "ListItem", position: 6, name: "Картографиране", url: "https://airagro.bg/uslugi" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Начало", item: "https://airagro.bg" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://airagro.bg/uslugi" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <ServicesContent />
      <Footer />
      <FloatingCallButton />
    </>
  );
}
