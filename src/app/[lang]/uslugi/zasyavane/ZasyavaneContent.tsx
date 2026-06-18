"use client";

import VideoCanvas from "@/components/VideoCanvas";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/lib/routes";
import { ArrowRight, Clock, Droplets, Leaf, Mountain, Phone, Target, Wind } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ZasyavaneContent({ lang }: { lang: "bg" | "en" }) {
  const { t } = useLanguage();

  const benefitIcons = [Mountain, Target, Leaf, Clock, Wind, Droplets];
  const benefits = benefitIcons.map((icon, i) => ({
    icon,
    title: t(`seeding.benefits.${i}.title`),
    description: t(`seeding.benefits.${i}.description`),
  }));

  const applicationMeta = [
    { icon: "🌾", detailCount: 5 },
    { icon: "⛰️", detailCount: 5 },
    { icon: "♻️", detailCount: 5 },
    { icon: "🌱", detailCount: 4 },
  ];
  const applications = applicationMeta.map(({ icon, detailCount }, i) => ({
    icon,
    title: t(`seeding.applications.${i}.title`),
    description: t(`seeding.applications.${i}.description`),
    details: Array.from({ length: detailCount }, (_, d) => t(`seeding.applications.${i}.details.${d}`)),
  }));

  const stats = [0, 1, 2, 3].map((i) => ({
    value: t(`seeding.stats.${i}.value`),
    label: t(`seeding.stats.${i}.label`),
  }));

  const seeds = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => t(`seeding.seeds.${i}`));

  const techCapacity = [0, 1, 2].map((i) => ({
    label: t(`seeding.techSpecs.capacity.${i}.label`),
    value: t(`seeding.techSpecs.capacity.${i}.value`),
  }));
  const techEfficiency = [0, 1, 2].map((i) => ({
    label: t(`seeding.techSpecs.efficiency.${i}.label`),
    value: t(`seeding.techSpecs.efficiency.${i}.value`),
  }));

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
            🌱 {t("seeding.hero.badge")}
          </span>
          <h1 className="mb-5 text-4xl leading-tight font-bold text-white md:text-6xl">
            {t("seeding.hero.title1")} <span className="text-gradient-green">{t("seeding.hero.title2")}</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-emerald-100 md:text-xl">
            {t("seeding.hero.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+359884242406"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
            >
              <Phone className="h-5 w-5" />
              {t("seeding.hero.ctaQuote")}
            </a>
            <Link
              href={localizedPath("spraying", lang)}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              {t("seeding.hero.ctaSpraying")}
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
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">{t("seeding.benefits.heading")}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{t("seeding.benefits.subheading")}</p>
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
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">{t("seeding.applications.heading")}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{t("seeding.applications.subheading")}</p>
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
                  <div className="mb-3 text-sm font-semibold text-gray-500">
                    {t("seeding.applications.examplesLabel")}
                  </div>
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
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">{t("seeding.techSpecs.heading")}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-xl md:p-12"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">{t("seeding.techSpecs.capacityHeading")}</h3>
                <div className="space-y-4">
                  {techCapacity.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between gap-4 border-b border-gray-200 pb-4"
                    >
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="shrink-0 font-bold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">{t("seeding.techSpecs.efficiencyHeading")}</h3>
                <div className="space-y-4">
                  {techEfficiency.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between gap-4 border-b border-gray-200 pb-4"
                    >
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="shrink-0 font-bold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">{t("seeding.techSpecs.seedsHeading")}</h3>
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
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">{t("seeding.cta.heading")}</h2>
            <p className="mb-10 text-2xl text-emerald-100">{t("seeding.cta.subheading")}</p>
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
                {t("seeding.cta.aboutLink")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
