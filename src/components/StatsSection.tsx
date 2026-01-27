"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "motion/react";

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t("stats.spray.value"), label: t("stats.spray.label") },
    { value: t("stats.coverage.value"), label: t("stats.coverage.label") },
    { value: t("stats.orchard.value"), label: t("stats.orchard.label") },
    { value: t("stats.spread.value"), label: t("stats.spread.label") },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="hero-gradient absolute inset-0 opacity-95" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, translateZ: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="motion-safe text-center"
            >
              <div className="font-display text-5xl font-bold whitespace-nowrap text-white md:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 text-lg whitespace-nowrap text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
