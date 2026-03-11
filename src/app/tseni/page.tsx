import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Check, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цени за Пръскане с Дрон | Агро Дрон Услуги | AirAgro",
  description:
    "Прозрачни цени за пръскане с агро дрон в България. DJI Agras T50. Специални отстъпки за големи площи. Безплатна оферта за 24 часа. ☎ 0884-242-406",
  keywords: [
    "цена пръскане с дрон",
    "агро дрон цена",
    "колко струва пръскане с дрон",
    "оферта пръскане с дрон",
    "цени агро дрон услуги",
    "дрон пръскане цени декар",
  ],
  openGraph: {
    title: "Цени за Пръскане с Дрон | AirAgro България",
    description:
      "Прозрачни цени за агро дрон услуги. Специални отстъпки за големи площи. Получете безплатна оферта за 24 часа.",
    url: "https://airagro.bg/tseni",
    type: "website",
    images: [
      {
        url: "/air-agro-logo.png",
        width: 1024,
        height: 1024,
        type: "image/png",
        alt: "AirAgro - Цени за пръскане с дрон",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Цени за Пръскане с Дрон | AirAgro България",
    description:
      "Прозрачни цени за агро дрон услуги. Специални отстъпки за големи площи. Получете безплатна оферта за 24 часа.",
    images: ["/air-agro-logo.png"],
  },
  alternates: {
    canonical: "https://airagro.bg/tseni",
    languages: {
      "bg-BG": "https://airagro.bg/tseni",
    },
  },
};

export default function PricingPage() {
  // Offer Schema for SEO
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Цени за агро дрон услуги",
    description: "Пакети и цени за пръскане с агро дрон в България",
    url: "https://airagro.bg/tseni",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Еднократно пръскане",
        item: {
          "@type": "Offer",
          name: "Еднократно пръскане",
          description: "Професионално пръскане с DJI Agras T50",
          price: "6",
          priceCurrency: "BGN",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "6",
            priceCurrency: "BGN",
            unitText: "на декар",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: "1",
              unitCode: "DAA",
            },
          },
          seller: {
            "@type": "Organization",
            name: "AirAgro",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Сезонен пакет",
        item: {
          "@type": "Offer",
          name: "Сезонен пакет",
          description: "3-4 третирания през сезона с приоритетно обслужване",
          seller: {
            "@type": "Organization",
            name: "AirAgro",
          },
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Начало", item: "https://airagro.bg" },
      { "@type": "ListItem", position: 2, name: "Цени", item: "https://airagro.bg/tseni" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-white via-emerald-50/20 to-white pt-24">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Цени и Пакети за Агро Дрон Услуги
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-600">
              Прозрачно ценообразуване без скрити такси. Получете индивидуална оферта за вашето стопанство за 24 часа.
            </p>
            <p className="text-lg font-semibold text-emerald-600">
              ✅ Няма минимална площ – работим от 10 дка до 10,000 дка
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mx-auto mb-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Standard Package */}
            <div className="rounded-3xl bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Еднократно Пръскане</h3>
                <p className="text-gray-600">Идеално за малки площи или еднократни третирания</p>
              </div>

              <div className="mb-6">
                <div className="mb-2 text-4xl font-bold text-emerald-600">
                  От 6 лв
                  <span className="text-lg font-normal text-gray-600">/дка</span>
                </div>
                <p className="text-sm text-gray-500">В зависимост от площта и културата</p>
              </div>

              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-gray-700">RTK прецизност ±10 см</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-gray-700">GPS запис на обработката</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-gray-700">Реакция за 24-48 часа</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-gray-700">Безплатна консултация</span>
                </li>
              </ul>

              <a
                href="tel:+359884242406"
                className="block w-full rounded-full bg-emerald-600 py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-700"
              >
                Поискай оферта
              </a>
            </div>

            {/* Seasonal Package - Featured */}
            <div className="relative rounded-3xl bg-linear-to-br from-emerald-600 to-emerald-700 p-8 text-white shadow-2xl lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-6 py-2 text-sm font-bold text-emerald-900">
                НАЙ-ПОПУЛЯРЕН
              </div>

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold">Сезонен Пакет</h3>
                <p className="text-emerald-100">3-4 третирания с отстъпка и приоритет</p>
              </div>

              <div className="mb-6">
                <div className="mb-2 text-4xl font-bold">
                  От 18 лв
                  <span className="text-lg font-normal text-emerald-200">/дка</span>
                </div>
                <p className="text-sm text-emerald-100">За целия сезон (3-4 обработки)</p>
              </div>

              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                  <span>Всички стандартни услуги</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                  <span className="font-semibold">Отстъпка 15-20%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                  <span>Приоритетно обслужване</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                  <span>Агрономическа консултация</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                  <span>NDVI мониторинг (опция)</span>
                </li>
              </ul>

              <a
                href="tel:+359884242406"
                className="block w-full rounded-full bg-white py-4 text-center font-bold text-emerald-600 transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
              >
                Запази сега
              </a>
            </div>

            {/* Large Farms */}
            <div className="rounded-3xl bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Големи Стопанства</h3>
                <p className="text-gray-600">Над 500 дка или множество локации</p>
              </div>

              <div className="mb-6">
                <div className="mb-2 text-4xl font-bold text-emerald-600">Договор</div>
                <p className="text-sm text-gray-500">Индивидуални условия и цени</p>
              </div>

              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-gray-700">Всички сезонни услуги</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="font-semibold text-gray-700">Максимални отстъпки</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-gray-700">Dedicated оператор</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-gray-700">VRA картографиране</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-gray-700">Годишен договор</span>
                </li>
              </ul>

              <a
                href="tel:+359884242406"
                className="block w-full rounded-full bg-gray-900 py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
              >
                Свържи се с нас
              </a>
            </div>
          </div>

          {/* Price Factors */}
          <div className="mx-auto mb-16 max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Ценообразуване</h2>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <p className="mb-6 text-lg text-gray-700">Цената се формира на база на следните фактори:</p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">📏 Площ на полето</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• До 50 дка: По-висока цена/дка</li>
                    <li>• 50-200 дка: Стандартна цена</li>
                    <li>• 200-500 дка: Отстъпка 10%</li>
                    <li>• Над 500 дка: Отстъпка 20%+</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">🌾 Вид култура</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ниски култури (пшеница): Стандарт</li>
                    <li>• Средни (слънчоглед): +10%</li>
                    <li>• Високи (царевица): +20%</li>
                    <li>• Специални култури: Индивидуално</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">🗺️ Локация</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• До 50 км: Без доплащане</li>
                    <li>• 50-100 км: Символична такса</li>
                    <li>• Над 100 км: Договаряне</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">📦 Тип третиране</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Инсектициди/Хербициди: Стандарт</li>
                    <li>• Фунгициди: +5%</li>
                    <li>• Листно торене: Стандарт</li>
                    <li>• Засяване: Индивидуално</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mx-auto max-w-4xl rounded-3xl bg-linear-to-r from-emerald-600 to-emerald-700 p-12 text-center text-white">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Получете Вашата Безплатна Оферта</h2>
            <p className="mb-8 text-xl text-emerald-100">Обадете се или изпратете запитване. Отговаряме за 2 часа!</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:+359884242406"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-600 transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
              >
                <Phone className="h-5 w-5" />
                0884 242 406
              </a>
              <a
                href="mailto:contact.airagro@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-900"
              >
                Изпрати имейл
              </a>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Нашата Гаранция</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              Гарантираме качество на обработката с GPS документация на всяка мисия. Ако не сте доволни, преправяме
              безплатно! Над 47 доволни клиенти и 25,000+ дка опит.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
