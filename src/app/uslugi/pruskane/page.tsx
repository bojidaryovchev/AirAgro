import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Clock, Droplet, Leaf, Shield, Target, TrendingUp } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

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
      "Професионално пръскане с DJI Agras дронове. RTK прецизност, спестяване на ресурси, без утъпкване. Над 25,000 дка опит.",
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
      "Професионално пръскане с DJI Agras дронове. RTK прецизност, спестяване на ресурси, без утъпкване. Над 25,000 дка опит.",
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
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
    },
  };

  const benefits = [
    {
      icon: Target,
      title: "RTK Прецизност",
      description: "Точност ±10 см елиминира припокривания и пропуски. GPS запис на всяка мисия.",
    },
    {
      icon: Droplet,
      title: "Спестяване на Ресурси",
      description: "30-40% по-малко препарати и вода благодарение на ултрамалообемната технология.",
    },
    {
      icon: Leaf,
      title: "Без Утъпкване",
      description: "Не увреждаме културата и не уплътняваме почвата - летим над полето.",
    },
    {
      icon: Clock,
      title: "Бързина",
      description: "До 20-28 ха/час (200-280 дка). Обработваме 100 дка за 30-45 минути.",
    },
    {
      icon: TrendingUp,
      title: "Високи Култури",
      description: "Работим над царевица, слънчоглед до 3-4 м височина. Достигаме всяка зона.",
    },
    {
      icon: Shield,
      title: "Влажна Почва",
      description: "Третираме и при кална/мека почва когато тракторът не може да влезе.",
    },
  ];

  const treatments = [
    {
      title: "Инсектицидно Пръскане",
      icon: "🐛",
      description: "Ефективен контрол на вредители - листни въшки, гъсеници, трипс, акари",
      crops: ["Пшеница", "Царевица", "Слънчоглед", "Рапица", "Соя"],
    },
    {
      title: "Хербицидно Пръскане",
      icon: "🌱",
      description: "Защита срещу плевели с прецизно приложение и минимален препаратен стрес",
      crops: ["Всички зърнени", "Технически култури", "Многогодишни"],
    },
    {
      title: "Фунгицидно Пръскане",
      icon: "🍄",
      description: "Контрол на гъбични заболявания с достигане на долната страна на листата",
      crops: ["Пшеница", "Лозя", "Овошки", "Зеленчуци"],
    },
    {
      title: "Листно Торене",
      icon: "💧",
      description: "Директно усвояване на хранителни вещества през листната маса",
      crops: ["Всички култури", "Оранжерийни", "Специални"],
    },
  ];

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
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-150 bg-linear-to-br from-emerald-600 via-emerald-700 to-emerald-800">
          <div className="absolute inset-0 bg-[url('/drone-field-pattern.svg')] opacity-10" />
          <div className="relative container mx-auto flex h-full items-center px-4">
            <div className="max-w-4xl text-white">
              <div className="mb-6 inline-block rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold">🚁 Водеща Услуга</span>
              </div>
              <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">Пръскане с Агро Дрон</h1>
              <p className="mb-8 text-2xl leading-relaxed text-emerald-100 md:text-3xl">
                Професионално третиране на земеделски култури с DJI Agras T50. RTK прецизност, спестяване на ресурси,
                максимална ефективност.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+359884242406"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
                >
                  📞 Обади се сега
                </a>
                <Link
                  href="/tseni"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-900"
                >
                  Виж цени
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="bg-gray-900 py-8 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-5">
              <div>
                <div className="mb-2 text-3xl font-bold text-emerald-400 md:text-4xl">±10 см</div>
                <div className="text-gray-300">RTK Точност</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-emerald-400 md:text-4xl">1000 дка</div>
                <div className="text-gray-300">На ден</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-emerald-400 md:text-4xl">30-40%</div>
                <div className="text-gray-300">По-малко препарати</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-emerald-400 md:text-4xl">2 часа</div>
                <div className="text-gray-300">Сухо време след</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-emerald-400 md:text-4xl">5-35°C</div>
                <div className="text-gray-300">Работна температура</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Защо Пръскане с Дрон?</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Модерната технология, която променя начина на работа в земеделието
              </p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <benefit.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="leading-relaxed text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="bg-linear-to-b from-emerald-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Видове Третиране</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Пълен спектър от растителнозащитни и хранителни третирания
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
              {treatments.map((treatment, index) => (
                <div key={index} className="rounded-3xl bg-white p-8 shadow-xl">
                  <div className="mb-4 text-5xl">{treatment.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{treatment.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{treatment.description}</p>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="mb-3 text-sm font-semibold text-gray-500">ПОДХОДЯЩИ КУЛТУРИ:</div>
                    <div className="flex flex-wrap gap-2">
                      {treatment.crops.map((crop, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700"
                        >
                          {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Как Работи Процесът?</h2>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Консултация",
                    desc: "Обаждате се или изпращате запитване. Обсъждаме площта, културата, фаза на развитие и тип третиране.",
                  },
                  {
                    step: "2",
                    title: "Оферта",
                    desc: "Получавате индивидуална оферта за 2-24 часа с точна цена и срокове за изпълнение.",
                  },
                  {
                    step: "3",
                    title: "Планиране",
                    desc: "Уточняваме дата според метеорологичните условия и вашата агрономическа програма.",
                  },
                  {
                    step: "4",
                    title: "Подготовка",
                    desc: "Вие осигурявате препаратите според етикета. Ние ги разреждаме и зареждаме дрона.",
                  },
                  {
                    step: "5",
                    title: "Пръскане",
                    desc: "Изпълняваме мисията с RTK прецизност. GPS записва всеки сантиметър от обработката.",
                  },
                  {
                    step: "6",
                    title: "Документация",
                    desc: "Получавате KML/KMZ файл с GPS запис и отчет за обработената площ.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white shadow-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-lg leading-relaxed text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-emerald-600 to-emerald-700 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center text-white">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">Готови за Професионално Пръскане?</h2>
              <p className="mb-10 text-2xl text-emerald-100">
                Обадете се сега за безплатна консултация и оферта за 24 часа
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+359884242406"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-xl font-bold text-emerald-600 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
                >
                  📞 0884 242 406
                </a>
                <Link
                  href="/tseni"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-900"
                >
                  Виж Цени
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
