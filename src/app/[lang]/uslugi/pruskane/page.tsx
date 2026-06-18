import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSupportedLanguages, Language } from "@/lib/articles";
import { getTranslations } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PruskaneContent from "./PruskaneContent";

interface Props {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return getSupportedLanguages().map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const language: Language = getSupportedLanguages().includes(lang as Language) ? (lang as Language) : "bg";
  const t = getTranslations(language);

  const canonical = `https://airagro.bg${localizedPath("spraying", language)}`;

  return {
    title: t("spraying.meta.title"),
    description: t("spraying.meta.description"),
    keywords: t("spraying.meta.keywords")
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean),
    openGraph: {
      title: t("spraying.meta.ogTitle"),
      description: t("spraying.meta.ogDescription"),
      url: canonical,
      type: "website",
      images: [
        {
          url: "/air-agro-logo.png",
          width: 1024,
          height: 1024,
          type: "image/png",
          alt: t("spraying.meta.ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("spraying.meta.twitterTitle"),
      description: t("spraying.meta.ogDescription"),
      images: ["/air-agro-logo.png"],
    },
    alternates: {
      canonical,
      languages: {
        "bg-BG": `https://airagro.bg${localizedPath("spraying", "bg")}`,
        "en-US": `https://airagro.bg${localizedPath("spraying", "en")}`,
        "x-default": `https://airagro.bg${localizedPath("spraying", "bg")}`,
      },
    },
  };
}

export default async function SprayingServicePage({ params }: Props) {
  const { lang } = await params;
  if (!getSupportedLanguages().includes(lang as Language)) {
    notFound();
  }
  const language = lang as Language;
  const t = getTranslations(language);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("spraying.schema.name"),
    serviceType: t("spraying.schema.name"),
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
    description: t("spraying.schema.description"),
    image: "https://airagro.bg/air-agro-logo.png",
    url: `https://airagro.bg${localizedPath("spraying", language)}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("spraying.schema.catalogName"),
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("spraying.schema.offer.0") },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("spraying.schema.offer.1") },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("spraying.schema.offer.2") },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("spraying.schema.offer.3") },
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
        unitText: t("spraying.schema.unitText"),
      },
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("spraying.breadcrumb.home"),
        item: `https://airagro.bg${localizedPath("home", language)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("nav.services"),
        item: `https://airagro.bg${localizedPath("services", language)}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t("spraying.breadcrumb.current"),
        item: `https://airagro.bg${localizedPath("spraying", language)}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <PruskaneContent lang={language} />
      <Footer />
      <FloatingCallButton />
    </>
  );
}
