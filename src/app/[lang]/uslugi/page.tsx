import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSupportedLanguages, Language } from "@/lib/articles";
import { getTranslations } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesContent from "./ServicesContent";

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

  const canonical = `https://airagro.bg${localizedPath("services", language)}`;

  return {
    title: t("servicesPage.meta.title"),
    description: t("servicesPage.meta.description"),
    keywords: [
      "агро дрон услуги",
      "пръскане с дрон",
      "засяване с дрон",
      "листно торене дрон",
      "засенчване на оранжерии",
      "дрон услуги земеделие",
      "DJI Agras услуги",
    ],
    openGraph: {
      title: t("servicesPage.meta.ogTitle"),
      description: t("servicesPage.meta.ogDescription"),
      url: canonical,
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
      title: t("servicesPage.meta.ogTitle"),
      description: t("servicesPage.meta.ogDescription"),
      images: ["/air-agro-logo.png"],
    },
    alternates: {
      canonical,
      languages: {
        "bg-BG": `https://airagro.bg${localizedPath("services", "bg")}`,
        "en-US": `https://airagro.bg${localizedPath("services", "en")}`,
        "x-default": `https://airagro.bg${localizedPath("services", "bg")}`,
      },
    },
  };
}

export default async function ServicesPage({ params }: Props) {
  const { lang } = await params;
  if (!getSupportedLanguages().includes(lang as Language)) {
    notFound();
  }
  const language = lang as Language;
  const t = getTranslations(language);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("servicesPage.schema.name"),
    description: t("servicesPage.schema.description"),
    url: `https://airagro.bg${localizedPath("services", language)}`,
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("servicesPage.services.0.title"),
        url: `https://airagro.bg${localizedPath("spraying", language)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("servicesPage.services.1.title"),
        url: `https://airagro.bg${localizedPath("spraying", language)}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t("servicesPage.services.2.title"),
        url: `https://airagro.bg${localizedPath("spraying", language)}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: t("servicesPage.services.3.title"),
        url: `https://airagro.bg${localizedPath("seeding", language)}`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: t("servicesPage.services.4.title"),
        url: `https://airagro.bg${localizedPath("shading", language)}`,
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("servicesPage.breadcrumb.home"),
        item: `https://airagro.bg${localizedPath("home", language)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("nav.services"),
        item: `https://airagro.bg${localizedPath("services", language)}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <ServicesContent lang={language} />
      <Footer />
      <FloatingCallButton />
    </>
  );
}
