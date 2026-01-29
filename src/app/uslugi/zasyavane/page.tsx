import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import { Sprout, Target, Clock, TrendingUp, Leaf, Mountain, Wind, Droplets } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Засяване с Дрон | Рехабилитация на Ливади & Промишлени Терени | AirAgro',
  description: 'Професионално засяване с агро дрон за рехабилитация на ливади, укрепване на откоси, биологична рекултивация. Достъп до недостъпни терени. ☎ 0876-543-546',
  keywords: [
    'засяване с дрон',
    'дрон засяване ливади',
    'рехабилитация на ливади',
    'засяване откоси',
    'биологична рекултивация',
    'промишлени терени засяване',
    'хидропосев дрон',
    'авиозасяване',
    'трайни треви дрон'
  ],
  openGraph: {
    title: 'Засяване с Дрон | Рехабилитация & Рекултивация',
    description: 'Професионално засяване с агро дрон за ливади, откоси и промишлени терени. Достъп до недостъпни зони.',
    url: 'https://airagro.bg/uslugi/zasyavane',
    type: 'website'
  },
  alternates: {
    canonical: 'https://airagro.bg/uslugi/zasyavane'
  }
};

export default function SeedingServicePage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Засяване с агро дрон",
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
    "description": "Професионално засяване с дрон за рехабилитация на ливади, укрепване на откоси, биологична рекултивация на промишлени терени.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BGN",
      "availability": "https://schema.org/InStock"
    }
  };

  const benefits = [
    {
      icon: Mountain,
      title: 'Недостъпни Терени',
      description: 'Засяваме откоси, стръмни склонове, терени с камъни където техниката не може да влезе.'
    },
    {
      icon: Target,
      title: 'Равномерно Разпределение',
      description: 'RTK прецизност осигурява еднородна норма на сеитба без празнини или свръхзасяване.'
    },
    {
      icon: Leaf,
      title: 'Без Увреждане',
      description: 'Не уплътняваме почвата, не увреждаме съществуващата растителност при подсяване.'
    },
    {
      icon: Clock,
      title: 'Бързо Изпълнение',
      description: 'Обработваме големи площи за часове вместо за дни. Улавяме оптималния сезон.'
    },
    {
      icon: Wind,
      title: 'Метеорологичен Контрол',
      description: 'Избираме точния момент с оптимални условия - влажност, вятър, температура.'
    },
    {
      icon: Droplets,
      title: 'Комбиниране с Хидропосев',
      description: 'Можем да смесваме семена с биостимуланти, хидрогели и адхезиви за по-добро покълване.'
    }
  ];

  const applications = [
    {
      title: 'Рехабилитация на Ливади',
      icon: '🌾',
      description: 'Подсяване на изреждащи или деградирали ливади с трайни треви без преораване',
      details: ['Люцерна', 'Еспарзет', 'Детелина', 'Тревни смески', 'Многогодишни пасища']
    },
    {
      title: 'Укрепване на Откоси',
      icon: '⛰️',
      description: 'Засяване на стръмни терени за ерозионен контрол и стабилизация на почвата',
      details: ['Пътни откоси', 'Брегови зони', 'Сипеи', 'Язовирни стени', 'Строителни обекти']
    },
    {
      title: 'Биологична Рекултивация',
      icon: '♻️',
      description: 'Възстановяване на растителност на нарушени или замърсени индустриални терени',
      details: ['Мини', 'Кариери', 'Депа', 'Строителни площадки', 'Промишлени зони']
    },
    {
      title: 'Покривно Засяване',
      icon: '🌱',
      description: 'Подсяване в съществуващи култури за защита на почвата или зелено торене',
      details: ['Междуредово в лозя', 'Под овощни дръвчета', 'Покривни култури', 'Зимуващи смески']
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
        <div className="relative h-[600px] bg-gradient-to-br from-amber-600 via-amber-700 to-orange-800">
          <div className="absolute inset-0 bg-[url('/drone-field-pattern.svg')] opacity-10" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-semibold">🌱 Иновативна Услуга</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Засяване с Агро Дрон
              </h1>
              <p className="text-2xl md:text-3xl text-amber-100 leading-relaxed mb-8">
                Рехабилитация на ливади, укрепване на откоси, биологична рекултивация. Достъп до недостъпни терени с RTK прецизност.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+359876543546"
                  className="inline-flex items-center gap-2 bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  📞 Запитай сега
                </a>
                <Link
                  href="/uslugi/pruskane"
                  className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                >
                  Виж пръскане с дрон
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
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">40 кг/мин</div>
                <div className="text-gray-300">Капацитет</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">±10 см</div>
                <div className="text-gray-300">RTK Точност</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">100%</div>
                <div className="text-gray-300">Покритие</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">45°</div>
                <div className="text-gray-300">Максимален наклон</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Предимства на Дрон Засяването
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Технологията, която прави възможно невъзможното
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                    <benefit.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Приложения на Услугата
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Специализирани решения за различни терени и нужди
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {applications.map((app, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="text-5xl mb-4">{app.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{app.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{app.description}</p>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-sm font-semibold text-gray-500 mb-3">ПРИМЕРИ:</div>
                    <div className="space-y-2">
                      {app.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
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
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Технически Характеристики
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Капацитет</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-600">Резервоар</span>
                      <span className="font-bold text-gray-900">50 л (25-40 кг семена)</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-600">Разхвърляне</span>
                      <span className="font-bold text-gray-900">До 9 метра ширина</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-600">Норма на сеитба</span>
                      <span className="font-bold text-gray-900">10-200 кг/ха регулируема</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ефективност</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-600">Производителност</span>
                      <span className="font-bold text-gray-900">15-20 ха/час</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-600">GPS точност</span>
                      <span className="font-bold text-gray-900">±10 см с RTK</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-600">Работен наклон</span>
                      <span className="font-bold text-gray-900">До 45° склон</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Подходящи Семена</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Люцерна', 'Детелина', 'Житни треви', 'Еспарзет', 'Рапица', 'Горчица', 'Ливадни смески', 'Покривни култури', 'Ерозионни смески'].map((seed, i) => (
                    <div key={i} className="bg-amber-50 text-amber-700 px-4 py-3 rounded-xl text-center font-medium">
                      {seed}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-amber-600 to-orange-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Имате Проект за Засяване?
              </h2>
              <p className="text-2xl text-amber-100 mb-10">
                Обадете се за консултация и безплатна оценка на терена
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+359876543546"
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 hover:bg-amber-50 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  📞 0876 543 546
                </a>
                <Link
                  href="/za-nas"
                  className="inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105"
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
