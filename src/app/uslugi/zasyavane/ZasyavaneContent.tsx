"use client";

import VideoCanvas from "@/components/VideoCanvas";
import { ArrowRight, Clock, Droplets, Leaf, Mountain, Phone, Target, Wind } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const benefits = [
  {
    icon: Mountain,
    title: "Недостъпни Терени",
    description: "Засяваме откоси, стръмни склонове, терени с камъни, където техниката не може да влезе.",
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
    description: "Избираме точния момент с оптимални условия — влажност, вятър, температура.",
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

const stats = [
  { value: "50 л", label: "Резервоар (25-40 кг семена)" },
  { value: "±10 см", label: "RTK Точност" },
  { value: "до 9 м", label: "Ширина на разхвърляне" },
  { value: "до 45°", label: "Максимален наклон" },
];

const seeds = [
  "Люцерна",
  "Детелина",
  "Житни треви",
  "Еспарзет",
  "Рапица",
  "Горчица",
  "Ливадни смески",
  "Покривни култури",
  "Ерозионни смески",
];

const techSpecs = {
  capacity: [
    { label: "Резервоар", value: "50 л (25-40 кг семена)" },
    { label: "Разхвърляне", value: "До 9 метра ширина" },
    { label: "Норма на сеитба", value: "10-200 кг/ха регулируема" },
  ],
  efficiency: [
    { label: "Производителност", value: "До 15 ха/час" },
    { label: "GPS точност", value: "±10 см с RTK" },
    { label: "Работен наклон", value: "До 45° склон" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ZasyavaneContent() {
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
            🌱 Иновативна Услуга
          </span>
          <h1 className="mb-5 text-4xl leading-tight font-bold text-white md:text-6xl">
            Засяване с <span className="text-gradient-green">Агро Дрон</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-emerald-100 md:text-xl">
            Рехабилитация на ливади, укрепване на откоси, биологична рекултивация. Достъп до недостъпни терени с RTK
            прецизност.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+359884242406"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
            >
              <Phone className="h-5 w-5" />
              Запитай сега
            </a>
            <Link
              href="/uslugi/pruskane"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              Виж пръскане с дрон
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
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Предимства на Дрон Засяването</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">Технологията, която прави възможно невъзможното</p>
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

      {/* ── Applications ── */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Приложения на Услугата</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">Специализирани решения за различни терени и нужди</p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-white p-8 shadow-xl"
              >
                <div className="mb-4 text-5xl">{app.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">{app.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-600">{app.description}</p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="mb-3 text-sm font-semibold text-gray-500">ПРИМЕРИ:</div>
                  <div className="space-y-2">
                    {app.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2 text-gray-700">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Specs ── */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Технически Характеристики</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-xl md:p-12"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Капацитет</h3>
                <div className="space-y-4">
                  {techSpecs.capacity.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col gap-0.5 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-bold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Ефективност</h3>
                <div className="space-y-4">
                  {techSpecs.efficiency.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col gap-0.5 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-bold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Подходящи Семена</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {seeds.map((seed) => (
                  <div
                    key={seed}
                    className="rounded-xl bg-emerald-50 px-4 py-3 text-center font-medium text-emerald-700"
                  >
                    {seed}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Имате Проект за Засяване?</h2>
            <p className="mb-10 text-2xl text-emerald-100">Обадете се за консултация и безплатна оценка на терена</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:+359884242406"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-xl font-bold text-emerald-600 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
              >
                <Phone className="h-6 w-6" />
                0884 242 406
              </a>
              <Link
                href="/za-nas"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-900"
              >
                Научи повече за нас
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
