"use client";

import VideoCanvas from "@/components/VideoCanvas";
import {
  ArrowRight,
  Bug,
  CheckCircle,
  Clock,
  Droplets,
  Leaf,
  LucideIcon,
  Map,
  MapPin,
  Phone,
  Satellite,
  Shield,
  Sprout,
  Target,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Service {
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  href?: string;
  price: string;
}

const services: Service[] = [
  {
    title: "Растителна Защита",
    description:
      "Прецизно пръскане с пестициди за ефективна защита от болести и вредители. DJI Agras T50 осигурява равномерно покритие дори на труднодостъпни места.",
    details: ["Фунгициди и инсектициди", "До 200 дка/час ефективно", "Центробежни дюзи", "GPS запис на обработката"],
    icon: Shield,
    href: "/uslugi/pruskane",
    price: "От 6 лв/дка",
  },
  {
    title: "Листно Торене",
    description:
      "Ефективно нанасяне на течни торове за оптимален растеж. Прецизно дозиране осигурява максимална усвояемост от културите.",
    details: ["Течни и суспензионни торове", "Листно подхранване", "Прецизно дозиране", "За всички култури"],
    icon: Leaf,
    href: "/uslugi/pruskane",
    price: "От 6 лв/дка",
  },
  {
    title: "Контрол на Плевели",
    description:
      "Целево пръскане с хербициди за ефективен контрол на плевелите. Минимален разход на препарати при максимална ефективност.",
    details: ["Всички видове хербициди", "Целево приложение", "По-малко химикали", "Документиране на площта"],
    icon: Bug,
    href: "/uslugi/pruskane",
    price: "От 6 лв/дка",
  },
  {
    title: "Засяване с Дрон",
    description:
      "Прецизно разпръскване на семена от въздуха. Идеално за трудни терени и бързо засяване на големи площи.",
    details: ["Покривни култури и смески", "Равномерно разпределение", "Достъп до влажни терени", "3× по-бързо"],
    icon: Sprout,
    href: "/uslugi/zasyavane",
    price: "По запитване",
  },
  {
    title: "NDVI Мониторинг",
    description:
      "Мултиспектрален анализ на здравето на културите. Ранно откриване на стрес, болести и хранителен дефицит.",
    details: ["NDVI карти", "NDRE анализ", "Стрес зони", "Variable Rate Maps"],
    icon: Satellite,
    price: "По запитване",
  },
  {
    title: "Картографиране",
    description: "Точно 3D картографиране на терена с RTK GPS. Създаваме детайлни карти за планиране на операциите.",
    details: ["3D модели на терена", "RTK точност ±10 см", "KML/KMZ файлове", "Анализ на релефа"],
    icon: Map,
    price: "По запитване",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Свържете се с нас",
    description: "Обадете се или изпратете запитване. Обсъждаме площта, културата и типа третиране.",
  },
  {
    number: "02",
    title: "Оглед и планиране",
    description: "Оценяваме терена и определяме оптималния подход. Индивидуална оферта до 24 часа.",
  },
  {
    number: "03",
    title: "Изпълнение",
    description: "Професионална обработка с DJI Agras T50. RTK прецизност и GPS запис на мисията.",
  },
  {
    number: "04",
    title: "Отчет и документация",
    description: "Получавате GPS запис (KML/KMZ) и детайлен отчет за обработената площ.",
  },
];

const stats = [
  { value: "90%", label: "По-малко разход на вода" },
  { value: "30%", label: "Икономия на препарати" },
  { value: "3-5×", label: "По-бързо от наземна техника" },
  { value: "0%", label: "Утъпкване на почвата" },
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
    icon: Droplets,
    title: "Без Утъпкване",
    description: "Нулево уплътняване на почвата. Не увреждаме културата — летим над полето.",
  },
  {
    icon: Leaf,
    title: "30–40% Спестяване",
    description: "Ултрамалообемна технология намалява разхода на препарати и вода.",
  },
  {
    icon: CheckCircle,
    title: "Документация",
    description: "GPS запис + KML/KMZ файл на обработката. Пълна проследимост.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ServicesContent() {
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
            ✈️ Професионални услуги с DJI Agras T50
          </span>
          <h1 className="mb-5 text-4xl leading-tight font-bold text-white md:text-6xl">
            Агро Дрон <span className="text-gradient-green">Услуги</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-emerald-100 md:text-xl">
            Модерна технология за прецизна защита на вашите култури. Бързо, ефективно и екологично.
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

      {/* ── Services Grid ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Нашите <span className="text-gradient-green">Услуги</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Пълно портфолио от дрон решения за всеки етап от земеделския сезон
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100">
                    <service.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>

                {/* Feature checklist */}
                <div className="mb-6 flex-1 border-t border-gray-100 pt-5">
                  <div className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Включва:</div>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA link (only for services with a dedicated page) */}
                {service.href && (
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
                  >
                    Научете повече
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Защо <span className="text-gradient-green">AirAgro</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Модерна технология, лицензирани оператори и доказан опит в цяла България
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <item.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="leading-relaxed text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Как <span className="text-gradient-green">Работим</span>?
            </h2>
            <p className="text-lg text-gray-600">Лесен и прозрачен процес от заявка до резултат.</p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-4 sm:gap-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white shadow-lg sm:h-16 sm:w-16 sm:text-2xl">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h4 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">{step.title}</h4>
                  <p className="text-lg leading-relaxed text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card glow-green mx-auto max-w-3xl rounded-2xl p-10 text-center md:p-14"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Готови ли сте да започнете?</h2>
          <p className="mx-auto mb-8 max-w-lg text-lg text-gray-600">
            Свържете се с нас за безплатна консултация и персонализирана оферта за вашето стопанство.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+359884242406"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-700"
            >
              <Phone className="h-5 w-5" />
              0884 242 406
            </a>
            <Link
              href="/tseni"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-600 px-8 py-4 text-lg font-bold text-emerald-700 transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
            >
              Вижте Цените
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
