import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import { Check, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Цени за Пръскане с Дрон | Агро Дрон Услуги | AirAgro',
  description: 'Прозрачни цени за пръскане с агро дрон в България. DJI Agras T50. Специални отстъпки за големи площи. Безплатна оферта за 24 часа. ☎ 0876-543-546',
  keywords: [
    'цена пръскане с дрон',
    'агро дрон цена',
    'колко струва пръскане с дрон',
    'оферта пръскане с дрон',
    'цени агро дрон услуги',
    'дрон пръскане цени декар'
  ],
  openGraph: {
    title: 'Цени за Пръскане с Дрон | AirAgro България',
    description: 'Прозрачни цени за агро дрон услуги. Специални отстъпки за големи площи. Получете безплатна оферта за 24 часа.',
    url: 'https://airagro.bg/tseni',
    type: 'website'
  },
  alternates: {
    canonical: 'https://airagro.bg/tseni'
  }
};

export default function PricingPage() {
  // Offer Schema for SEO
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Цени за агро дрон услуги",
    "description": "Пакети и цени за пръскане с агро дрон в България",
    "itemListElement": [
      {
        "@type": "Offer",
        "position": 1,
        "name": "Еднократно пръскане",
        "description": "Професионално пръскане с DJI Agras T50",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "BGN",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "1",
            "unitCode": "DKA"
          }
        },
        "seller": {
          "@type": "Organization",
          "name": "AirAgro"
        }
      },
      {
        "@type": "Offer",
        "position": 2,
        "name": "Сезонен пакет",
        "description": "3-4 третирания през сезона с приоритетно обслужване",
        "seller": {
          "@type": "Organization",
          "name": "AirAgro"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/20 to-white pt-24">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Цени и Пакети за Агро Дрон Услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Прозрачно ценообразуване без скрити такси. Получете индивидуална оферта за вашето стопанство за 24 часа.
            </p>
            <p className="text-lg text-emerald-600 font-semibold">
              ✅ Няма минимална площ – работим от 10 дка до 10,000 дка
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Standard Package */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Еднократно Пръскане</h3>
                <p className="text-gray-600">Идеално за малки площи или еднократни третирания</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  От 6 лв
                  <span className="text-lg font-normal text-gray-600">/дка</span>
                </div>
                <p className="text-sm text-gray-500">В зависимост от площта и културата</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">RTK прецизност ±10 см</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">GPS запис на обработката</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Реакция за 24-48 часа</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Безплатна консултация</span>
                </li>
              </ul>

              <a
                href="tel:+359876543546"
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Поискай оферта
              </a>
            </div>

            {/* Seasonal Package - Featured */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-2xl p-8 relative lg:scale-105 text-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-emerald-900 px-6 py-2 rounded-full text-sm font-bold">
                НАЙ-ПОПУЛЯРЕН
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Сезонен Пакет</h3>
                <p className="text-emerald-100">3-4 третирания с отстъпка и приоритет</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  От 18 лв
                  <span className="text-lg font-normal text-emerald-200">/дка</span>
                </div>
                <p className="text-sm text-emerald-100">За целия сезон (3-4 обработки)</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Всички стандартни услуги</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Отстъпка 15-20%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Приоритетно обслужване</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Агрономическа консултация</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>NDVI мониторинг (опция)</span>
                </li>
              </ul>

              <a
                href="tel:+359876543546"
                className="block w-full bg-white text-emerald-600 hover:bg-emerald-50 text-center py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Запази сега
              </a>
            </div>

            {/* Large Farms */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Големи Стопанства</h3>
                <p className="text-gray-600">Над 500 дка или множество локации</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  Договор
                </div>
                <p className="text-sm text-gray-500">Индивидуални условия и цени</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Всички сезонни услуги</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">Максимални отстъпки</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated оператор</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">VRA картографиране</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Годишен договор</span>
                </li>
              </ul>

              <a
                href="tel:+359876543546"
                className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Свържи се с нас
              </a>
            </div>
          </div>

          {/* Price Factors */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ценообразуване
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-gray-700 mb-6 text-lg">
                Цената се формира на база на следните фактори:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">📏 Площ на полето</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• До 50 дка: По-висока цена/дка</li>
                    <li>• 50-200 дка: Стандартна цена</li>
                    <li>• 200-500 дка: Отстъпка 10%</li>
                    <li>• Над 500 дка: Отстъпка 20%+</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🌾 Вид култура</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ниски култури (пшеница): Стандарт</li>
                    <li>• Средни (слънчоглед): +10%</li>
                    <li>• Високи (царевица): +20%</li>
                    <li>• Специални култури: Индивидуално</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🗺️ Локация</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• До 50 км: Без доплащане</li>
                    <li>• 50-100 км: Символична такса</li>
                    <li>• Над 100 км: Договаряне</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">📦 Тип третиране</h3>
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
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Получете Вашата Безплатна Оферта
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Обадете се или изпратете запитване. Отговаряме за 2 часа!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+359876543546"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                0876 543 546
              </a>
              <a
                href="mailto:contact.airagro@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                Изпрати имейл
              </a>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Нашата Гаранция
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Гарантираме качество на обработката с GPS документация на всяка мисия. 
              Ако не сте доволни, преправяме безплатно! Над 47 доволни клиенти и 25,000+ дка опит.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
