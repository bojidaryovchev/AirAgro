import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import { Check, Droplet, Target, TrendingUp, Clock, Shield, Leaf, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Пръскане с Дрон DJI Agras T40 & T50 | Професионална Услуга | AirAgro',
  description: 'Професионално пръскане на земеделски култури с агро дрон. RTK прецизност ±10 см. Спестете 30% препарати. Инсектициди, хербициди, фунгициди, листно торене. Цяла България. ☎ 0876-543-546',
  keywords: [
    'пръскане с дрон',
    'агро дрон пръскане',
    'земеделски дрон услуга',
    'DJI Agras пръскане',
    'инсектицидно пръскане',
    'хербицидно пръскане',
    'фунгицидно пръскане',
    'листно торене с дрон',
    'RTK пръскане',
    'прецизно пръскане'
  ],
  openGraph: {
    title: 'Пръскане с Дрон | Професионална Услуга в Цяла България',
    description: 'Професионално пръскане с DJI Agras дронове. RTK прецизност, спестяване на ресурси, без утъпкване. Над 25,000 дка опит.',
    url: 'https://airagro.bg/uslugi/pruskane',
    type: 'website'
  },
  alternates: {
    canonical: 'https://airagro.bg/uslugi/pruskane'
  }
};

export default function SprayingServicePage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Пръскане с агро дрон",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AirAgro",
      "telephone": "+359-876-543-546",
      "url": "https://airagro.bg"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bulgaria"
    },
    "description": "Професионално пръскане на земеделски култури с DJI Agras дронове. Инсектициди, хербициди, фунгициди и листно торене с RTK прецизност.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BGN",
      "availability": "https://schema.org/InStock"
    }
  };

  const benefits = [
    {
      icon: Target,
      title: 'RTK Прецизност',
      description: 'Точност ±10 см елиминира припокривания и пропуски. GPS запис на всяка мисия.'
    },
    {
      icon: Droplet,
      title: 'Спестяване на Ресурси',
      description: '30-40% по-малко препарати и вода благодарение на ултрамалообемната технология.'
    },
    {
      icon: Leaf,
      title: 'Без Утъпкване',
      description: 'Не увреждаме културата и не уплътняваме почвата - летим над полето.'
    },
    {
      icon: Clock,
      title: 'Бързина',
      description: 'До 20-28 ха/час (200-280 дка). Обработваме 100 дка за 30-45 минути.'
    },
    {
      icon: TrendingUp,
      title: 'Високи Култури',
      description: 'Работим над царевица, слънчоглед до 3-4 м височина. Достигаме всяка зона.'
    },
    {
      icon: Shield,
      title: 'Влажна Почва',
      description: 'Третираме и при кална/мека почва когато тракторът не може да влезе.'
    }
  ];

  const treatments = [
    {
      title: 'Инсектицидно Пръскане',
      icon: '🐛',
      description: 'Ефективен контрол на вредители - листни въшки, гъсеници, трипс, акари',
      crops: ['Пшеница', 'Царевица', 'Слънчоглед', 'Рапица', 'Соя']
    },
    {
      title: 'Хербицидно Пръскане',
      icon: '🌱',
      description: 'Защита срещу плевели с прецизно приложение и минимален препаратен стрес',
      crops: ['Всички зърнени', 'Технически култури', 'Многогодишни']
    },
    {
      title: 'Фунгицидно Пръскане',
      icon: '🍄',
      description: 'Контрол на гъбични заболявания с достигане на долната страна на листата',
      crops: ['Пшеница', 'Лозя', 'Овошки', 'Зеленчуци']
    },
    {
      title: 'Листно Торене',
      icon: '💧',
      description: 'Директно усвояване на хранителни вещества през листната маса',
      crops: ['Всички култури', 'Оранжерийни', 'Специални']
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-[600px] bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800">
          <div className="absolute inset-0 bg-[url('/drone-field-pattern.svg')] opacity-10" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-semibold">🚁 Водеща Услуга</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Пръскане с Агро Дрон
              </h1>
              <p className="text-2xl md:text-3xl text-emerald-100 leading-relaxed mb-8">
                Професионално третиране на земеделски култури с DJI Agras T40 & T50. RTK прецизност, спестяване на ресурси, максимална ефективност.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+359876543546"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  📞 Обади се сега
                </a>
                <Link
                  href="/tseni"
                  className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                >
                  Виж цени
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">±10 см</div>
                <div className="text-gray-300">RTK Точност</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">20-28 ха/ч</div>
                <div className="text-gray-300">Скорост</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">30-40%</div>
                <div className="text-gray-300">По-малко препарати</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">0%</div>
                <div className="text-gray-300">Утъпкване</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Защо Пръскане с Дрон?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Модерната технология, която променя начина на работа в земеделието
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                    <benefit.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="py-20 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Видове Третиране
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Пълен спектър от растителнозащитни и хранителни третирания
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {treatments.map((treatment, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="text-5xl mb-4">{treatment.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{treatment.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{treatment.description}</p>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-sm font-semibold text-gray-500 mb-3">ПОДХОДЯЩИ КУЛТУРИ:</div>
                    <div className="flex flex-wrap gap-2">
                      {treatment.crops.map((crop, i) => (
                        <span key={i} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
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
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Как Работи Процесът?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: '1', title: 'Консултация', desc: 'Обаждате се или изпращате запитване. Обсъждаме площта, културата, фаза на развитие и тип третиране.' },
                  { step: '2', title: 'Оферта', desc: 'Получавате индивидуална оферта за 2-24 часа с точна цена и срокове за изпълнение.' },
                  { step: '3', title: 'Планиране', desc: 'Уточняваме дата според метеорологичните условия и вашата агрономическа програма.' },
                  { step: '4', title: 'Подготовка', desc: 'Вие осигурявате препаратите според етикета. Ние ги разреждаме и зареждаме дрона.' },
                  { step: '5', title: 'Пръскане', desc: 'Изпълняваме мисията с RTK прецизност. GPS записва всеки сантиметър от обработката.' },
                  { step: '6', title: 'Документация', desc: 'Получавате KML/KMZ файл с GPS запис и отчет за обработената площ.' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Готови за Професионално Пръскане?
              </h2>
              <p className="text-2xl text-emerald-100 mb-10">
                Обадете се сега за безплатна консултация и оферта за 24 часа
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+359876543546"
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  📞 0876 543 546
                </a>
                <Link
                  href="/tseni"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105"
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
