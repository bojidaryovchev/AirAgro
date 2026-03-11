import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight, CheckCircle, Clock, Droplets, Leaf, MapPin, Phone, Plane, Satellite, Sprout, Target } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

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

const services = [
  {
    title: "Пръскане с Дрон",
    emoji: "🚁",
    description:
      "Инсектициди, хербициди, фунгициди и листно торене с DJI Agras T50. RTK прецизност ±10 см, до 200 дка/час, 30–40% по-малко препарати.",
    href: "/uslugi/pruskane",
    features: ["Инсектицидно пръскане", "Хербицидно пръскане", "Фунгицидно пръскане", "Листно торене"],
    price: "От 6 лв/дка",
    color: "emerald",
  },
  {
    title: "Засяване с Дрон",
    emoji: "🌱",
    description:
      "Рехабилитация на ливади, укрепване на откоси, биологична рекултивация на промишлени терени. Достъп до недостъпни зони.",
    href: "/uslugi/zasyavane",
    features: ["Ливади и пасища", "Откоси и склонове", "Биологична рекултивация", "Хидропосев"],
    price: "По запитване",
    color: "amber",
  },
  {
    title: "NDVI Мониторинг",
    emoji: "📡",
    description:
      "Мултиспектрален анализ на здравето на културите. Ранно откриване на стрес, болести и хранителен дефицит преди видими симптоми.",
    href: "/#services",
    features: ["NDVI карти", "NDRE анализ", "Стрес зони", "Variable Rate Application"],
    price: "По запитване",
    color: "blue",
  },
  {
    title: "Картографиране",
    emoji: "🗺️",
    description:
      "Точно заснемане и ортофото карти на земеделски площи. GPS координати, площообразуване и 3D модели на терена.",
    href: "/#services",
    features: ["Ортофото карти", "3D модели", "GPS площообразуване", "Тематични карти"],
    price: "По запитване",
    color: "purple",
  },
];

const whyUs = [
  {
    icon: Target,
    title: "RTK Прецизност",
    description: "Точност ±10 см елиминира припокривания и пропуски. GPS запис на всяка мисия.",
  },
  {
    icon: Clock,
    title: "Бърза Реакция",
    description: "Оферта до 24 часа. Изпълнение 24–48 часа в целия сезон. Работим и в почивни дни.",
  },
  {
    icon: MapPin,
    title: "Цяла България",
    description: "Обслужваме от Видин до Бургас. Без ограничения по район. Мобилен екип.",
  },
  {
    icon: Leaf,
    title: "Без Утъпкване",
    description: "Нулево уплътняване на почвата. Не увреждаме културата — летим над полето.",
  },
  {
    icon: Droplets,
    title: "30–40% Спестяване",
    description: "Ултрамалообемна технология намалява разхода на препарати и вода.",
  },
  {
    icon: CheckCircle,
    title: "Документация",
    description: "GPS запис + KML/KMZ файл на обработката. Пълна проследимост.",
  },
];

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Агро дрон услуги на AirAgro",
    description: "Пълен списък услуги за прецизно земеделие с дрон технология",
    url: "https://airagro.bg/uslugi",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: service.href.startsWith("/") ? `https://airagro.bg${service.href}` : service.href,
    })),
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
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-150 bg-linear-to-br from-emerald-600 via-emerald-700 to-emerald-800">
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-4xl text-white">
              <div className="mb-6 inline-block rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold">✈️ Пълно Портфолио Дрон Услуги</span>
              </div>
              <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
                Агро Дрон Услуги
              </h1>
              <p className="mb-8 text-2xl leading-relaxed text-emerald-100 md:text-3xl">
                Пръскане, засяване, мониторинг и картографиране с DJI Agras T50. Покриваме цяла България с реакция
                24–48 часа.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+359884242406"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
                >
                  <Phone className="h-5 w-5" />
                  0884 242 406
                </a>
                <Link
                  href="/tseni"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-900"
                >
                  Виж цените
                  <ArrowRight className="h-5 w-5" />
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
                <div className="mb-2 text-3xl font-bold text-emerald-400 md:text-4xl">4+</div>
                <div className="text-gray-300">Вида услуги</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-emerald-400 md:text-4xl">25,000+</div>
                <div className="text-gray-300">Дка обработени</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-emerald-400 md:text-4xl">47+</div>
                <div className="text-gray-300">Доволни клиенти</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-emerald-400 md:text-4xl">24ч</div>
                <div className="text-gray-300">Време за реакция</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Нашите Услуги</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Пълно портфолио от дрон решения за всеки етап от земеделския сезон
              </p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Top badge with price */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="text-5xl">{service.emoji}</div>
                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                      {service.price}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>

                  {/* Features list */}
                  <div className="mb-8 border-t border-gray-100 pt-6">
                    <div className="mb-3 text-sm font-semibold tracking-wider text-gray-400">ВКЛЮЧВА:</div>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-700"
                  >
                    Научете повече
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-linear-to-b from-emerald-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Защо AirAgro?</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Модерна технология, лицензирани оператори и доказан опит в цяла България
              </p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {whyUs.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <item.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Как Работим?</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                От първия контакт до завършена обработка — прозрачен и бърз процес
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Свържете се с нас",
                    desc: "Обадете се или изпратете запитване. Обсъждаме площта, културата и типа третиране.",
                  },
                  {
                    step: "2",
                    title: "Получете оферта",
                    desc: "Индивидуална оферта до 24 часа с точна цена, срокове и детайли за изпълнение.",
                  },
                  {
                    step: "3",
                    title: "Планиране и изпълнение",
                    desc: "Уточняваме дата, подготвяме техниката и изпълняваме мисията с RTK прецизност.",
                  },
                  {
                    step: "4",
                    title: "Отчет и документация",
                    desc: "Получавате GPS запис (KML/KMZ) и подробен отчет за обработената площ.",
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
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">Нуждаете се от дрон услуга?</h2>
              <p className="mb-10 text-2xl text-emerald-100">
                Обадете се сега за безплатна консултация и индивидуална оферта до 24 часа
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+359884242406"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-xl font-bold text-emerald-600 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
                >
                  <Phone className="h-6 w-6" />
                  0884 242 406
                </a>
                <Link
                  href="/tseni"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-900"
                >
                  Вижте Цените
                  <ArrowRight className="h-5 w-5" />
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
