import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import PruskaneContent from "./PruskaneContent";

export const metadata: Metadata = {
  title: "Пръскане с Дрон DJI Agras T50 | Професионална Услуга | AirAgro",
  description:
    "Професионално пръскане на земеделски култури с агро дрон. RTK прецизност ±10 см. Спестете 30% препарати. Инсектициди, хербициди, фунгициди, листно торене. Цяла България. ☎ 0884-242-406",
  keywords: [
    "пръскане с дрон",
    "агро дрон пръскане",
    "земеделски дрон услуга",
    "DJI Agras пръскане",
    "инсектицидно пръскане",
    "хербицидно пръскане",
    "фунгицидно пръскане",
    "листно торене с дрон",
    "RTK пръскане",
    "прецизно пръскане",
  ],
  openGraph: {
    title: "Пръскане с Дрон | Професионална Услуга в Цяла България",
    description:
      "Професионално пръскане с DJI Agras дронове. RTK прецизност, спестяване на ресурси, без утъпкване.",
    url: "https://airagro.bg/uslugi/pruskane",
    type: "website",
    images: [
      {
        url: "/air-agro-logo.png",
        width: 1024,
        height: 1024,
        type: "image/png",
        alt: "AirAgro - Пръскане с агро дрон",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Пръскане с Дрон | AirAgro България",
    description:
      "Професионално пръскане с DJI Agras дронове. RTK прецизност, спестяване на ресурси, без утъпкване.",
    images: ["/air-agro-logo.png"],
  },
  alternates: {
    canonical: "https://airagro.bg/uslugi/pruskane",
    languages: {
      "bg-BG": "https://airagro.bg/uslugi/pruskane",
    },
  },
};

export default function SprayingServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Пръскане с агро дрон",
    serviceType: "Пръскане с агро дрон",
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
      "Професионално пръскане на земеделски култури с DJI Agras дронове. Инсектициди, хербициди, фунгициди и листно торене с RTK прецизност.",
    image: "https://airagro.bg/air-agro-logo.png",
    url: "https://airagro.bg/uslugi/pruskane",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Видове пръскане с дрон",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Инсектицидно пръскане" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Хербицидно пръскане" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Фунгицидно пръскане" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Листно торене" },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      price: "6",
      priceCurrency: "BGN",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "6",
        priceCurrency: "BGN",
        unitText: "на декар",
      },
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Начало", item: "https://airagro.bg" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://airagro.bg/uslugi" },
      { "@type": "ListItem", position: 3, name: "Пръскане с дрон", item: "https://airagro.bg/uslugi/pruskane" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <PruskaneContent />
      <Footer />
      <FloatingCallButton />
    </>
  );
}
