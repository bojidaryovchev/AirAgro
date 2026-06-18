import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSupportedLanguages, Language } from "@/lib/articles";
import { getTranslations } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ZasenchvaneContent from "./ZasenchvaneContent";

interface Props {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return getSupportedLanguages().map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const language = (getSupportedLanguages().includes(lang as Language) ? lang : "bg") as Language;
  const t = getTranslations(language);

  const canonical = `https://airagro.bg${localizedPath("shading", language)}`;

  return {
    title: t("shading.meta.title"),
    description: t("shading.meta.description"),
    keywords: t("shading.meta.keywords")
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean),
    openGraph: {
      title: t("shading.meta.ogTitle"),
      description: t("shading.meta.ogDescription"),
      url: canonical,
      type: "website",
      images: [
        {
          url: "/air-agro-logo.png",
          width: 1024,
          height: 1024,
          type: "image/png",
          alt: t("shading.meta.ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("shading.meta.twitterTitle"),
      description: t("shading.meta.twitterDescription"),
      images: ["/air-agro-logo.png"],
    },
    alternates: {
      canonical,
      languages: {
        "bg-BG": `https://airagro.bg${localizedPath("shading", "bg")}`,
        "en-US": `https://airagro.bg${localizedPath("shading", "en")}`,
        "x-default": `https://airagro.bg${localizedPath("shading", "bg")}`,
      },
    },
  };
}

export default async function GreenhouseShadingServicePage({ params }: Props) {
  const { lang } = await params;
  if (!getSupportedLanguages().includes(lang as Language)) {
    notFound();
  }
  const language = lang as Language;
  const t = getTranslations(language);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("shading.schema.name"),
    serviceType: t("shading.schema.serviceType"),
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
    description: t("shading.schema.description"),
    image: "https://airagro.bg/air-agro-logo.png",
    url: `https://airagro.bg${localizedPath("shading", language)}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("shading.schema.catalogName"),
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("shading.schema.offer.0") },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("shading.schema.offer.1") },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("shading.schema.offer.2") },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("shading.schema.offer.3") },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("shading.breadcrumb.home"),
        item: `https://airagro.bg${localizedPath("home", language)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("shading.breadcrumb.services"),
        item: `https://airagro.bg${localizedPath("services", language)}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t("shading.breadcrumb.shading"),
        item: `https://airagro.bg${localizedPath("shading", language)}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <ZasenchvaneContent lang={language} />
      <Footer />
      <FloatingCallButton />
    </>
  );
}
