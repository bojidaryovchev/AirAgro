"use client";

import VideoCanvas from "@/components/VideoCanvas";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/lib/routes";
import { ArrowRight, BookOpen, CheckCircle, Clock, Droplet, Phone, ShieldCheck, Sun, Thermometer } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ZasenchvaneContent({ lang }: { lang: "bg" | "en" }) {
  const { t } = useLanguage();

  const blogHref =
    lang === "en" ? "/en/blog/greenhouse-shading-with-drone" : "/bg/blog/zasenchvane-na-oranzherii-s-dron";

  const benefits = [
    {
      icon: Thermometer,
      title: t("shading.benefits.0.title"),
      description: t("shading.benefits.0.description"),
    },
    {
      icon: Sun,
      title: t("shading.benefits.1.title"),
      description: t("shading.benefits.1.description"),
    },
    {
      icon: Droplet,
      title: t("shading.benefits.2.title"),
      description: t("shading.benefits.2.description"),
    },
    {
      icon: Clock,
      title: t("shading.benefits.3.title"),
      description: t("shading.benefits.3.description"),
    },
    {
      icon: ShieldCheck,
      title: t("shading.benefits.4.title"),
      description: t("shading.benefits.4.description"),
    },
    {
      icon: CheckCircle,
      title: t("shading.benefits.5.title"),
      description: t("shading.benefits.5.description"),
    },
  ];

  const paintTypes = [
    {
      title: t("shading.paintTypes.0.title"),
      icon: "🌤️",
      description: t("shading.paintTypes.0.description"),
      crops: [
        t("shading.paintTypes.0.crops.0"),
        t("shading.paintTypes.0.crops.1"),
        t("shading.paintTypes.0.crops.2"),
        t("shading.paintTypes.0.crops.3"),
      ],
    },
    {
      title: t("shading.paintTypes.1.title"),
      icon: "🛡️",
      description: t("shading.paintTypes.1.description"),
      crops: [t("shading.paintTypes.1.crops.0"), t("shading.paintTypes.1.crops.1"), t("shading.paintTypes.1.crops.2")],
    },
    {
      title: t("shading.paintTypes.2.title"),
      icon: "🔆",
      description: t("shading.paintTypes.2.description"),
      crops: [t("shading.paintTypes.2.crops.0"), t("shading.paintTypes.2.crops.1"), t("shading.paintTypes.2.crops.2")],
    },
    {
      title: t("shading.paintTypes.3.title"),
      icon: "❄️",
      description: t("shading.paintTypes.3.description"),
      crops: [t("shading.paintTypes.3.crops.0"), t("shading.paintTypes.3.crops.1")],
    },
  ];

  const stats = [
    { value: "5°C", label: t("shading.stats.0.label") },
    { value: t("shading.stats.1.value"), label: t("shading.stats.1.label") },
    { value: "5–10×", label: t("shading.stats.2.label") },
    { value: "±2 см", label: t("shading.stats.3.label") },
  ];

  const processSteps = [
    {
      step: "1",
      title: t("shading.process.0.title"),
      desc: t("shading.process.0.desc"),
    },
    {
      step: "2",
      title: t("shading.process.1.title"),
      desc: t("shading.process.1.desc"),
    },
    {
      step: "3",
      title: t("shading.process.2.title"),
      desc: t("shading.process.2.desc"),
    },
    {
      step: "4",
      title: t("shading.process.3.title"),
      desc: t("shading.process.3.desc"),
    },
    {
      step: "5",
      title: t("shading.process.4.title"),
      desc: t("shading.process.4.desc"),
    },
  ];

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
            ☀️ {t("shading.hero.badge")}
          </span>
          <h1 className="mb-5 text-4xl leading-tight font-bold text-white md:text-6xl">
            {t("shading.hero.titlePrefix")}{" "}
            <span className="text-gradient-green">{t("shading.hero.titleHighlight")}</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-emerald-100 md:text-xl">
            {t("shading.hero.subtitle")}
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
              href={blogHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              {t("shading.hero.readMore")}
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
                <div className="mb-2 text-2xl font-bold whitespace-nowrap text-emerald-400 sm:text-3xl md:text-4xl">
                  {stat.value}
                </div>
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
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">{t("shading.benefits.heading")}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{t("shading.benefits.subtitle")}</p>
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

      {/* ── Paint Types ── */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">{t("shading.paintTypes.heading")}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{t("shading.paintTypes.subtitle")}</p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {paintTypes.map((paint, i) => (
              <motion.div
                key={paint.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-white p-8 shadow-xl"
              >
                <div className="mb-4 text-5xl">{paint.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">{paint.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-600">{paint.description}</p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="mb-3 text-sm font-semibold text-gray-500">{t("shading.paintTypes.suitableFor")}</div>
                  <div className="flex flex-wrap gap-2">
                    {paint.crops.map((crop) => (
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
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">{t("shading.process.heading")}</h2>
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

          {/* Link to in-depth article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <Link
              href={blogHref}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{t("shading.article.title")}</div>
                  <p className="text-gray-600">{t("shading.article.description")}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-emerald-600 transition-transform group-hover:translate-x-1" />
            </Link>
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
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">{t("shading.cta.heading")}</h2>
            <p className="mb-10 text-2xl text-emerald-100">{t("shading.cta.subtitle")}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:+359884242406"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-xl font-bold text-emerald-600 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
              >
                <Phone className="h-6 w-6" />
                0884 242 406
              </a>
              <Link
                href={localizedPath("about", lang)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-900"
              >
                {t("shading.cta.aboutLink")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
