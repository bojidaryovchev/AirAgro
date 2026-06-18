import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSupportedLanguages, Language } from "@/lib/articles";
import { getTranslations } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";
import { Award, Heart, Phone, Shield, Target, TrendingUp, Users } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return getSupportedLanguages().map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!getSupportedLanguages().includes(lang as Language)) {
    return {};
  }

  const language = lang as Language;
  const t = getTranslations(language);
  const canonical = `https://airagro.bg${localizedPath("about", language)}`;

  return {
    title: t("about.meta.title"),
    description: t("about.meta.description"),
    keywords: [
      t("about.meta.keywords.0"),
      t("about.meta.keywords.1"),
      t("about.meta.keywords.2"),
      t("about.meta.keywords.3"),
      t("about.meta.keywords.4"),
    ],
    openGraph: {
      title: t("about.meta.ogTitle"),
      description: t("about.meta.ogDescription"),
      url: canonical,
      type: "website",
      images: [
        {
          url: "/air-agro-logo.png",
          width: 1024,
          height: 1024,
          type: "image/png",
          alt: t("about.meta.ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("about.meta.ogTitle"),
      description: t("about.meta.ogDescription"),
      images: ["/air-agro-logo.png"],
    },
    alternates: {
      canonical,
      languages: {
        "bg-BG": `https://airagro.bg${localizedPath("about", "bg")}`,
        "en-US": `https://airagro.bg${localizedPath("about", "en")}`,
        "x-default": `https://airagro.bg${localizedPath("about", "bg")}`,
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;

  if (!getSupportedLanguages().includes(lang as Language)) {
    notFound();
  }

  const language = lang as Language;
  const t = getTranslations(language);

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://airagro.bg/#organization",
    name: "AirAgro",
    alternateName: "AirAgro България",
    description: t("about.schema.orgDescription"),
    url: "https://airagro.bg",
    logo: "https://airagro.bg/air-agro-logo.png",
    foundingDate: "2023-01-01",
    email: "contact.airagro@gmail.com",
    telephone: "+359-884-242-406",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BG",
      addressRegion: "България",
    },
    areaServed: {
      "@type": "Country",
      name: "Bulgaria",
    },
    knowsAbout: ["Precision Agriculture", "Drone Spraying", "RTK Technology", "Agricultural Innovation"],
    slogan: t("about.schema.slogan"),
    sameAs: ["https://www.facebook.com/profile.php?id=61587474574865"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+359-884-242-406",
      contactType: "Customer Service",
      areaServed: "BG",
      availableLanguage: ["Bulgarian", "English"],
      email: "contact.airagro@gmail.com",
    },
  };

  const stats = [
    { number: "25,000+", label: t("about.stats.0.label"), icon: TrendingUp },
    { number: "47+", label: t("about.stats.1.label"), icon: Users },
    { number: "100%", label: t("about.stats.2.label"), icon: Target },
    { number: "3", label: t("about.stats.3.label"), icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: t("about.values.0.title"),
      description: t("about.values.0.description"),
    },
    {
      icon: Target,
      title: t("about.values.1.title"),
      description: t("about.values.1.description"),
    },
    {
      icon: Heart,
      title: t("about.values.2.title"),
      description: t("about.values.2.description"),
    },
    {
      icon: Users,
      title: t("about.values.3.title"),
      description: t("about.values.3.description"),
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("about.breadcrumb.home"),
        item: `https://airagro.bg${localizedPath("home", language)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("about.breadcrumb.about"),
        item: `https://airagro.bg${localizedPath("about", language)}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-125 bg-linear-to-br from-emerald-600 to-emerald-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto flex h-full items-center justify-center px-4">
            <div className="max-w-3xl text-center text-white">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">{t("about.hero.title")}</h1>
              <p className="text-xl leading-relaxed text-emerald-100 md:text-2xl">{t("about.hero.subtitle")}</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <stat.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="mb-2 text-4xl font-bold text-gray-900">{stat.number}</div>
                  <div className="font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">{t("about.story.heading")}</h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                <p className="text-xl leading-relaxed">{t("about.story.paragraph.0")}</p>
                <p className="text-lg leading-relaxed">{t("about.story.paragraph.1")}</p>
                <p className="text-lg leading-relaxed">{t("about.story.paragraph.2")}</p>
                <p className="text-lg leading-relaxed">{t("about.story.paragraph.3")}</p>
                <p className="text-lg leading-relaxed font-semibold text-emerald-700">{t("about.story.mission")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-linear-to-b from-emerald-50 to-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">{t("about.values.heading")}</h2>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {values.map((value, index) => (
                <div key={index} className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <value.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{value.title}</h3>
                  <p className="leading-relaxed text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">{t("about.equipment.heading")}</h2>
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
              <div className="rounded-3xl bg-linear-to-br from-gray-900 to-gray-800 p-8 text-white">
                <h3 className="mb-4 text-3xl font-bold">DJI Agras T50</h3>
                <p className="mb-6 text-lg text-gray-300">{t("about.equipment.t50.description")}</p>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    {t("about.equipment.t50.specs.0")}
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    {t("about.equipment.t50.specs.1")}
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    {t("about.equipment.t50.specs.2")}
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    {t("about.equipment.t50.specs.3")}
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    {t("about.equipment.t50.specs.4")}
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-linear-to-br from-emerald-600 to-emerald-700 p-8 text-white">
                <h3 className="mb-4 text-3xl font-bold">{t("about.equipment.drtk.title")}</h3>
                <p className="mb-6 text-lg text-emerald-100">{t("about.equipment.drtk.description")}</p>
                <ul className="space-y-3 text-emerald-50">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-300" />
                    {t("about.equipment.drtk.specs.0")}
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-300" />
                    {t("about.equipment.drtk.specs.1")}
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-300" />
                    {t("about.equipment.drtk.specs.2")}
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-300" />
                    {t("about.equipment.drtk.specs.3")}
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-300" />
                    {t("about.equipment.drtk.specs.4")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">{t("about.certifications.heading")}</h2>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-8 text-lg leading-relaxed text-gray-600">{t("about.certifications.intro")}</p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <Award className="mx-auto mb-3 h-12 w-12 text-emerald-600" />
                  <div className="font-semibold text-gray-900">{t("about.certifications.0.title")}</div>
                  <div className="text-sm text-gray-600">{t("about.certifications.0.description")}</div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <Shield className="mx-auto mb-3 h-12 w-12 text-emerald-600" />
                  <div className="font-semibold text-gray-900">{t("about.certifications.1.title")}</div>
                  <div className="text-sm text-gray-600">{t("about.certifications.1.description")}</div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <Target className="mx-auto mb-3 h-12 w-12 text-emerald-600" />
                  <div className="font-semibold text-gray-900">{t("about.certifications.2.title")}</div>
                  <div className="text-sm text-gray-600">{t("about.certifications.2.description")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-3xl bg-linear-to-r from-emerald-600 to-emerald-700 p-12 text-center text-white">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">{t("about.cta.heading")}</h2>
              <p className="mb-8 text-xl text-emerald-100">{t("about.cta.subtitle")}</p>
              <a
                href="tel:+359884242406"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-600 transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
              >
                <Phone className="h-5 w-5" />
                0884 242 406
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
