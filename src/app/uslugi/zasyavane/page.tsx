import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Clock, Droplets, Leaf, Mountain, Target, Wind } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

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
  // Service Schema
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

  const benefits = [
    {
      icon: Mountain,
      title: "Недостъпни Терени",
      description: "Засяваме откоси, стръмни склонове, терени с камъни където техниката не може да влезе.",
    },
    {
      icon: Target,
      title: "Равномерно Разпределение",
      description: "RTK прецизност осигурява еднородна норма на сеитба без празнини или свръхзасяване.",
    },
    {
      icon: Leaf,
      title: "Без Увреждане",
      description: "Не уплътняваме почвата, не увреждаме съществуващата растителност при подсяване.",
    },
    {
      icon: Clock,
      title: "Бързо Изпълнение",
      description: "Обработваме големи площи за часове вместо за дни. Улавяме оптималния сезон.",
    },
    {
      icon: Wind,
      title: "Метеорологичен Контрол",
      description: "Избираме точния момент с оптимални условия - влажност, вятър, температура.",
    },
    {
      icon: Droplets,
      title: "Комбиниране с Хидропосев",
      description: "Можем да смесваме семена с биостимуланти, хидрогели и адхезиви за по-добро покълване.",
    },
  ];

  const applications = [
    {
      title: "Рехабилитация на Ливади",
      icon: "🌾",
      description: "Подсяване на изреждащи или деградирали ливади с трайни треви без преораване",
      details: ["Люцерна", "Еспарзет", "Детелина", "Тревни смески", "Многогодишни пасища"],
    },
    {
      title: "Укрепване на Откоси",
      icon: "⛰️",
      description: "Засяване на стръмни терени за ерозионен контрол и стабилизация на почвата",
      details: ["Пътни откоси", "Брегови зони", "Сипеи", "Язовирни стени", "Строителни обекти"],
    },
    {
      title: "Биологична Рекултивация",
      icon: "♻️",
      description: "Възстановяване на растителност на нарушени или замърсени индустриални терени",
      details: ["Мини", "Кариери", "Депа", "Строителни площадки", "Промишлени зони"],
    },
    {
      title: "Покривно Засяване",
      icon: "🌱",
      description: "Подсяване в съществуващи култури за защита на почвата или зелено торене",
      details: ["Междуредово в лозя", "Под овощни дръвчета", "Покривни култури", "Зимуващи смески"],
    },
  ];

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
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-150 bg-linear-to-br from-amber-600 via-amber-700 to-orange-800">
          <div className="absolute inset-0 bg-[url('/drone-field-pattern.svg')] opacity-10" />
          <div className="relative container mx-auto flex h-full items-center px-4">
            <div className="max-w-4xl text-white">
              <div className="mb-6 inline-block rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold">🌱 Иновативна Услуга</span>
              </div>
              <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">Засяване с Агро Дрон</h1>
              <p className="mb-8 text-2xl leading-relaxed text-amber-100 md:text-3xl">
                Рехабилитация на ливади, укрепване на откоси, биологична рекултивация. Достъп до недостъпни терени с RTK
                прецизност.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+359884242406"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-amber-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-amber-50"
                >
                  📞 Запитай сега
                </a>
                <Link
                  href="/uslugi/pruskane"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-800 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-amber-900"
                >
                  Виж пръскане с дрон
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="bg-gray-900 py-8 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
              <div>
                <div className="mb-2 text-3xl font-bold text-amber-400 md:text-4xl">40 кг/мин</div>
                <div className="text-gray-300">Капацитет</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-amber-400 md:text-4xl">±10 см</div>
                <div className="text-gray-300">RTK Точност</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-amber-400 md:text-4xl">100%</div>
                <div className="text-gray-300">Покритие</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-amber-400 md:text-4xl">45°</div>
                <div className="text-gray-300">Максимален наклон</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Предимства на Дрон Засяването</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">Технологията, която прави възможно невъзможното</p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <benefit.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="leading-relaxed text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-linear-to-b from-amber-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Приложения на Услугата</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Специализирани решения за различни терени и нужди
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
              {applications.map((app, index) => (
                <div key={index} className="rounded-3xl bg-white p-8 shadow-xl">
                  <div className="mb-4 text-5xl">{app.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{app.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{app.description}</p>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="mb-3 text-sm font-semibold text-gray-500">ПРИМЕРИ:</div>
                    <div className="space-y-2">
                      {app.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Технически Характеристики</h2>
            </div>

            <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-xl md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Капацитет</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <span className="text-gray-600">Резервоар</span>
                      <span className="font-bold text-gray-900">50 л (25-40 кг семена)</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <span className="text-gray-600">Разхвърляне</span>
                      <span className="font-bold text-gray-900">До 9 метра ширина</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <span className="text-gray-600">Норма на сеитба</span>
                      <span className="font-bold text-gray-900">10-200 кг/ха регулируема</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Ефективност</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <span className="text-gray-600">Производителност</span>
                      <span className="font-bold text-gray-900">15-20 ха/час</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <span className="text-gray-600">GPS точност</span>
                      <span className="font-bold text-gray-900">±10 см с RTK</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <span className="text-gray-600">Работен наклон</span>
                      <span className="font-bold text-gray-900">До 45° склон</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Подходящи Семена</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {[
                    "Люцерна",
                    "Детелина",
                    "Житни треви",
                    "Еспарзет",
                    "Рапица",
                    "Горчица",
                    "Ливадни смески",
                    "Покривни култури",
                    "Ерозионни смески",
                  ].map((seed, i) => (
                    <div key={i} className="rounded-xl bg-amber-50 px-4 py-3 text-center font-medium text-amber-700">
                      {seed}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-amber-600 to-orange-700 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center text-white">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">Имате Проект за Засяване?</h2>
              <p className="mb-10 text-2xl text-amber-100">Обадете се за консултация и безплатна оценка на терена</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+359884242406"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-xl font-bold text-amber-600 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-amber-50"
                >
                  📞 0884 242 406
                </a>
                <Link
                  href="/za-nas"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-800 px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-amber-900"
                >
                  Научи повече за нас
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
