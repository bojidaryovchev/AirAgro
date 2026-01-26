'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "40kg", label: t('stats.spray') },
    { value: "21ha/h", label: t('stats.coverage') },
    { value: "24L/min", label: t('stats.flow') },
    { value: "50kg", label: t('stats.spread') },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl font-bold text-white md:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 text-lg text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
