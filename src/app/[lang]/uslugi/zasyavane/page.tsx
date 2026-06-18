import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSupportedLanguages, Language } from "@/lib/articles";
import { getTranslations } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ZasyavaneContent from "./ZasyavaneContent";

interface Props {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return getSupportedLanguages().map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (getSupportedLanguages().includes(rawLang as Language) ? rawLang : "bg") as Language;
  const t = getTranslations(lang);

  const canonical = `https://airagro.bg${localizedPath("seeding", lang)}`;

  return {
    title: t("seeding.meta.title"),
    description: t("seeding.meta.description"),
    keywords: t("seeding.meta.keywords")
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean),
    openGraph: {
      title: t("seeding.meta.ogTitle"),
      description: t("seeding.meta.ogDescription"),
      url: canonical,
      type: "website",
      images: [
        {
          url: "/air-agro-logo.png",
          width: 1024,
          height: 1024,
          type: "image/png",
          alt: t("seeding.meta.ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("seeding.meta.twitterTitle"),
      description: t("seeding.meta.ogDescription"),
      images: ["/air-agro-logo.png"],
    },
    alternates: {
      canonical,
      languages: {
        "bg-BG": `https://airagro.bg${localizedPath("seeding", "bg")}`,
        "en-US": `https://airagro.bg${localizedPath("seeding", "en")}`,
        "x-default": `https://airagro.bg${localizedPath("seeding", "bg")}`,
      },
    },
  };
}

export default async function SeedingServicePage({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!getSupportedLanguages().includes(rawLang as Language)) {
    notFound();
  }
  const lang = rawLang as Language;
  const t = getTranslations(lang);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("seeding.schema.name"),
    serviceType: t("seeding.schema.name"),
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
    description: t("seeding.schema.description"),
    image: "https://airagro.bg/air-agro-logo.png",
    url: `https://airagro.bg${localizedPath("seeding", lang)}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("seeding.schema.catalogName"),
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("seeding.schema.offer.0") },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("seeding.schema.offer.1") },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("seeding.schema.offer.2") },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("seeding.schema.offer.3") },
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
        name: t("seeding.breadcrumb.home"),
        item: `https://airagro.bg${localizedPath("home", lang)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("seeding.breadcrumb.services"),
        item: `https://airagro.bg${localizedPath("services", lang)}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t("seeding.breadcrumb.seeding"),
        item: `https://airagro.bg${localizedPath("seeding", lang)}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <ZasyavaneContent lang={lang} />
      <Footer />
      <FloatingCallButton />
    </>
  );
}
