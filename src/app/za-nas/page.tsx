import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Award, Heart, Shield, Target, TrendingUp, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "За Нас | Професионални Оператори на Агро Дрон | AirAgro",
  description:
    "Лицензирани оператори на DJI Agras дронове с над 25,000 дка опит. Прецизно земеделие с RTK технология. Обслужваме цяла България. Вижте нашата история и мисия.",
  keywords: [
    "лицензиран оператор дрон",
    "DJI Agras оператор",
    "професионални дрон услуги",
    "агро дрон екип",
    "опит пръскане с дрон",
  ],
  openGraph: {
    title: "За Нас | AirAgro - Лидери в Агро Дрон Услугите",
    description:
      "Лицензирани оператори с над 25,000 дка опит. Модерна технология и професионален подход към земеделието.",
    url: "https://airagro.bg/za-nas",
    type: "website",
    images: [
      {
        url: "/air-agro-logo.png",
        width: 1024,
        height: 1024,
        type: "image/png",
        alt: "AirAgro - Агро Дрон Услуги България",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "За Нас | AirAgro - Лидери в Агро Дрон Услугите",
    description:
      "Лицензирани оператори с над 25,000 дка опит. Модерна технология и професионален подход към земеделието.",
    images: ["/air-agro-logo.png"],
  },
  alternates: {
    canonical: "https://airagro.bg/za-nas",
  },
};

export default function AboutPage() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AirAgro",
    alternateName: "AirAgro България",
    description: "Професионални услуги за пръскане с агро дрон в цяла България",
    url: "https://airagro.bg",
    logo: "https://airagro.bg/air-agro-logo.png",
    foundingDate: "2023",
    email: "contact.airagro@gmail.com",
    telephone: "+359-876-543-546",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BG",
    },
    areaServed: {
      "@type": "Country",
      name: "Bulgaria",
    },
    knowsAbout: [
      "Precision Agriculture",
      "Drone Spraying",
      "RTK Technology",
      "NDVI Analysis",
      "Agricultural Innovation",
    ],
    slogan: "Прецизно земеделие с дрон технология",
  };

  const stats = [
    { number: "25,000+", label: "Дка обработени", icon: TrendingUp },
    { number: "47+", label: "Доволни клиенти", icon: Users },
    { number: "100%", label: "GPS документация", icon: Target },
    { number: "3", label: "Години опит", icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: "Качество и Надеждност",
      description:
        "Използваме само оригинална DJI техника с пълна гаранция. Всяка обработка е документирана с GPS запис.",
    },
    {
      icon: Target,
      title: "Прецизност",
      description: "RTK технология с точност ±10 см осигурява перфектно покритие без припокривания и пропуски.",
    },
    {
      icon: Heart,
      title: "Грижа за Земята",
      description: "Спестяваме 30-40% препарати и вода. Не утъпкваме почвата. Работим екологично и отговорно.",
    },
    {
      icon: Users,
      title: "Партньорски Подход",
      description:
        "Не сме просто изпълнители - ние сме вашият партньор за успеха. Консултираме и помагаме за оптимални решения.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Начало", item: "https://airagro.bg" },
      { "@type": "ListItem", position: 2, name: "За нас", item: "https://airagro.bg/za-nas" },
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
          <div className="relative container mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl text-white">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Лидери в Агро Дрон Технологиите</h1>
              <p className="text-xl leading-relaxed text-emerald-100 md:text-2xl">
                Професионални оператори с мисия да направим прецизното земеделие достъпно за всеки земеделец в България
              </p>
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
              <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">Нашата История</h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                <p className="text-xl leading-relaxed">
                  AirAgro е основана през 2023 г. от екип от агрономи и дрон ентусиасти с визия да променят начина, по
                  който се извършва растителната защита в България.
                </p>
                <p className="text-lg leading-relaxed">
                  Видяхме как западните страни масово преминават към дрон технологиите и разбрахме, че това е бъдещето -
                  не само защото е по-ефективно, но защото е по-отговорно към околната среда и по-икономически изгодно
                  за земеделците.
                </p>
                <p className="text-lg leading-relaxed">
                  Започнахме с един DJI Agras T30 и 500 дка пилотен проект при един приятел фермер. Резултатите бяха
                  впечатляващи - спестихме 35% препарати, обработихме площта 3 пъти по-бързо от тракторна техника и без
                  капка утъпкване на културата.
                </p>
                <p className="text-lg leading-relaxed">
                  Днес, след над 25,000 дка обработени площи и 47+ доволни клиенти, продължаваме да растем и да
                  усъвършенстваме услугите си. Инвестирахме в DJI Agras T50, RTK системи и обучение.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-emerald-700">
                  Нашата мисия е проста: да направим прецизното земеделие достъпно, разбираемо и изгодно за всеки
                  българински земеделец.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-linear-to-b from-emerald-50 to-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">Нашите Ценности</h2>
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
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">Нашата Техника</h2>
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
              <div className="rounded-3xl bg-linear-to-br from-gray-900 to-gray-800 p-8 text-white">
                <h3 className="mb-4 text-3xl font-bold">DJI Agras T50</h3>
                <p className="mb-6 text-lg text-gray-300">
                  Професионален агро дрон от DJI с капацитет 40 л и активна система за следване на терена.
                </p>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    Капацитет: 40 л спрей система
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    Скорост: До 20-28 ха/час
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    RTK прецизност: ±10 см
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    16 центробежни дюзи
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    360° Radar за безопасност
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-linear-to-br from-emerald-600 to-emerald-700 p-8 text-white">
                <h3 className="mb-4 text-3xl font-bold">D-RTK 2 Базова Станция</h3>
                <p className="mb-6 text-lg text-emerald-100">
                  Професионална RTK система за сантиметрова точност при всяка обработка.
                </p>
                <ul className="space-y-3 text-emerald-50">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-300" />
                    Точност: ±10 см хоризонтално
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-300" />
                    Обхват: До 8 км радиус
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-300" />
                    Автоматична калибрация
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-300" />
                    Работа в реално време
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-300" />
                    GPS + GLONASS + BeiDou + Galileo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Лицензи и Сертификати</h2>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Всички наши оператори са с валидни лицензи от ГВА (Главна дирекция Гражданска Въздухоплавателна
                Администрация) за управление на безпилотни летателни апарати за специализирани операции.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <Award className="mx-auto mb-3 h-12 w-12 text-emerald-600" />
                  <div className="font-semibold text-gray-900">ГВА Лиценз</div>
                  <div className="text-sm text-gray-600">Категория специални операции</div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <Shield className="mx-auto mb-3 h-12 w-12 text-emerald-600" />
                  <div className="font-semibold text-gray-900">DJI Сертифициран</div>
                  <div className="text-sm text-gray-600">Официално обучение</div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <Target className="mx-auto mb-3 h-12 w-12 text-emerald-600" />
                  <div className="font-semibold text-gray-900">Застраховка</div>
                  <div className="text-sm text-gray-600">Пълна отговорност</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-3xl bg-linear-to-r from-emerald-600 to-emerald-700 p-12 text-center text-white">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Готови сме за вашия проект</h2>
              <p className="mb-8 text-xl text-emerald-100">Свържете се с нас за безплатна консултация и оферта</p>
              <a
                href="tel:+359876543546"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-600 transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
              >
                📞 0876 543 546
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
