import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import { Award, Users, Target, Shield, TrendingUp, Heart } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'За Нас | Професионални Оператори на Агро Дрон | AirAgro',
  description: 'Лицензирани оператори на DJI Agras дронове с над 25,000 дка опит. Прецизно земеделие с RTK технология. Обслужваме цяла България. Вижте нашата история и мисия.',
  keywords: [
    'лицензиран оператор дрон',
    'DJI Agras оператор',
    'професионални дрон услуги',
    'агро дрон екип',
    'опит пръскане с дрон'
  ],
  openGraph: {
    title: 'За Нас | AirAgro - Лидери в Агро Дрон Услугите',
    description: 'Лицензирани оператори с над 25,000 дка опит. Модерна технология и професионален подход към земеделието.',
    url: 'https://airagro.bg/za-nas',
    type: 'website'
  },
  alternates: {
    canonical: 'https://airagro.bg/za-nas'
  }
};

export default function AboutPage() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AirAgro",
    "alternateName": "AirAgro България",
    "description": "Професионални услуги за пръскане с агро дрон в цяла България",
    "url": "https://airagro.bg",
    "logo": "https://airagro.bg/air-agro-logo.png",
    "foundingDate": "2023",
    "email": "contact.airagro@gmail.com",
    "telephone": "+359-876-543-546",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BG"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bulgaria"
    },
    "knowsAbout": [
      "Precision Agriculture",
      "Drone Spraying",
      "RTK Technology",
      "NDVI Analysis",
      "Agricultural Innovation"
    ],
    "slogan": "Прецизно земеделие с дрон технология"
  };

  const stats = [
    { number: '25,000+', label: 'Дка обработени', icon: TrendingUp },
    { number: '47+', label: 'Доволни клиенти', icon: Users },
    { number: '100%', label: 'GPS документация', icon: Target },
    { number: '3', label: 'Години опит', icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Качество и Надеждност',
      description: 'Използваме само оригинална DJI техника с пълна гаранция. Всяка обработка е документирана с GPS запис.'
    },
    {
      icon: Target,
      title: 'Прецизност',
      description: 'RTK технология с точност ±10 см осигурява перфектно покритие без припокривания и пропуски.'
    },
    {
      icon: Heart,
      title: 'Грижа за Земята',
      description: 'Спестяваме 30-40% препарати и вода. Не утъпкваме почвата. Работим екологично и отговорно.'
    },
    {
      icon: Users,
      title: 'Партньорски Подход',
      description: 'Не сме просто изпълнители - ние сме вашият партньор за успеха. Консултираме и помагаме за оптимални решения.'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-[500px] bg-gradient-to-br from-emerald-600 to-emerald-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Лидери в Агро Дрон Технологиите
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
                Професионални оператори с мисия да направим прецизното земеделие достъпно за всеки земеделец в България
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Нашата История
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  AirAgro е основана през 2023 г. от екип от агрономи и дрон ентусиасти с визия да променят начина, по който се извършва растителната защита в България.
                </p>
                <p className="text-lg leading-relaxed">
                  Видяхме как западните страни масово преминават към дрон технологиите и разбрахме, че това е бъдещето - не само защото е по-ефективно, но защото е по-отговорно към околната среда и по-икономически изгодно за земеделците.
                </p>
                <p className="text-lg leading-relaxed">
                  Започнахме с един DJI Agras T30 и 500 дка пилотен проект при един приятел фермер. Резултатите бяха впечатляващи - спестихме 35% препарати, обработихме площта 3 пъти по-бързо от тракторна техника и без капка утъпкване на културата.
                </p>
                <p className="text-lg leading-relaxed">
                  Днес, след над 25,000 дка обработени площи и 47+ доволни клиенти, продължаваме да растем и да усъвършенстваме услугите си. Инвестирахме в най-новия DJI Agras T40, RTK системи и обучение в Европа.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-emerald-700">
                  Нашата мисия е проста: да направим прецизното земеделие достъпно, разбираемо и изгодно за всеки българински земеделец.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Нашите Ценности
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                    <value.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Нашата Техника
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">DJI Agras T40</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Най-новият професионален агро дрон от DJI с капацитет 40 л и активна система за следване на терена.
                </p>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Капацитет: 40 л спрей система
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Скорост: До 20-28 ха/час
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    RTK прецизност: ±10 см
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    16 центробежни дюзи
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    360° Radar за безопасност
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">D-RTK 2 Базова Станция</h3>
                <p className="text-emerald-100 mb-6 text-lg">
                  Професионална RTK система за сантиметрова точност при всяка обработка.
                </p>
                <ul className="space-y-3 text-emerald-50">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                    Точност: ±10 см хоризонтално
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                    Обхват: До 8 км радиус
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                    Автоматична калибрация
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                    Работа в реално време
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                    GPS + GLONASS + BeiDou + Galileo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Лицензи и Сертификати
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Всички наши оператори са с валидни лицензи от ГВА (Главна дирекция Гражданска Въздухоплавателна Администрация) за управление на безпилотни летателни апарати за специализирани операции.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <Award className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">ГВА Лиценз</div>
                  <div className="text-sm text-gray-600">Категория специални операции</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">DJI Сертифициран</div>
                  <div className="text-sm text-gray-600">Официално обучение</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <Target className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
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
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center text-white max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готови сме за вашия проект
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Свържете се с нас за безплатна консултация и оферта
              </p>
              <a
                href="tel:+359876543546"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
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
