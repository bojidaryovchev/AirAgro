"use client";

import VideoCanvas from "@/components/VideoCanvas";
import { ArrowRight, Clock, Droplet, Leaf, Phone, Shield, Target, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

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
    description: "Не увреждаме културата и не уплътняваме почвата — летим над полето.",
  },
  {
    icon: Clock,
    title: "Бързина",
    description: "До 200 дка/час ефективно. Обработваме 100 дка за 45–60 минути с презареждане.",
  },
  {
    icon: TrendingUp,
    title: "Високи Култури",
    description: "Работим над царевица, слънчоглед до 3–4 м височина. Достигаме всяка зона.",
  },
  {
    icon: Shield,
    title: "Влажна Почва",
    description: "Третираме и при кална/мека почва, когато тракторът не може да влезе.",
  },
];

const treatments = [
  {
    title: "Инсектицидно Пръскане",
    icon: "🐛",
    description: "Ефективен контрол на вредители — листни въшки, гъсеници, трипс, акари",
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

const stats = [
  { value: "±10 см", label: "RTK Точност" },
  { value: "до 200", label: "дка/час ефективно" },
  { value: "30-40%", label: "По-малко препарати" },
  { value: "5-35°C", label: "Работна температура" },
];

const processSteps = [
  {
    step: "1",
    title: "Консултация",
    desc: "Обаждате се или изпращате запитване. Обсъждаме площта, културата, фаза на развитие и тип третиране.",
  },
  {
    step: "2",
    title: "Оферта",
    desc: "Получавате индивидуална оферта за 2–24 часа с точна цена и срокове за изпълнение.",
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
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PruskaneContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section id="hero" className="relative flex h-[70vh] min-h-[500px] items-center justify-center overflow-hidden">
        <VideoCanvas
          src="/videos/drone-spraying.mp4"
          poster="/drone-spraying-poster-blurred.jpg"
          className="absolute inset-0 z-0"
          fps={24}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        >
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            🚁 Водеща Услуга
          </span>
          <h1 className="mb-5 text-4xl leading-tight font-bold text-white md:text-6xl">
            Пръскане с <span className="text-gradient-green">Агро Дрон</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-emerald-100 md:text-xl">
            Професионално третиране на земеделски култури с DJI Agras T50. RTK прецизност, спестяване на ресурси,
            максимална ефективност.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+359884242406"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
            >
              <Phone className="h-5 w-5" />
              0884 242 406
            </a>
            <Link
              href="/tseni"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              Виж Цените
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-gray-900 py-10 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-3xl font-bold text-emerald-400 md:text-5xl">{stat.value}</div>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Защо Пръскане с Дрон?</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Модерната технология, която променя начина на работа в земеделието
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 sm:h-16 sm:w-16">
                  <benefit.icon className="h-7 w-7 text-emerald-600 sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">{benefit.title}</h3>
                <p className="leading-relaxed text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Treatments ── */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Видове Третиране</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Пълен спектър от растителнозащитни и хранителни третирания
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {treatments.map((treatment, i) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-white p-8 shadow-xl"
              >
                <div className="mb-4 text-5xl">{treatment.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">{treatment.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-600">{treatment.description}</p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="mb-3 text-sm font-semibold text-gray-500">ПОДХОДЯЩИ КУЛТУРИ:</div>
                  <div className="flex flex-wrap gap-2">
                    {treatment.crops.map((crop) => (
                      <span
                        key={crop}
                        className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Как Работи Процесът?</h2>
          </motion.div>

          <div className="mx-auto max-w-4xl space-y-8">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 sm:gap-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white shadow-lg sm:h-16 sm:w-16 sm:text-2xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">{item.title}</h3>
                  <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center text-white"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Готови за Професионално Пръскане?</h2>
            <p className="mb-10 text-2xl text-emerald-100">
              Обадете се сега за безплатна консултация и оферта за 24 часа
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
                Виж Цени
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
