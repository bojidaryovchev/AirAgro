"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Check, CloudRain, Leaf, MapPin, TreePine, Wallet, Zap } from "lucide-react";

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Zap,
      title: t("benefits.speed"),
      description: t("benefits.speed.desc"),
    },
    {
      icon: Wallet,
      title: t("benefits.savings"),
      description: t("benefits.savings.desc"),
    },
    {
      icon: CloudRain,
      title: t("benefits.weather"),
      description: t("benefits.weather.desc"),
    },
    {
      icon: TreePine,
      title: t("benefits.height"),
      description: t("benefits.height.desc"),
    },
    {
      icon: MapPin,
      title: t("benefits.precision"),
      description: t("benefits.precision.desc"),
    },
    {
      icon: Leaf,
      title: t("benefits.eco"),
      description: t("benefits.eco.desc"),
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-medium">
            {t("benefits.badge")}
          </span>
          <h2 className="font-display text-foreground text-4xl font-bold md:text-5xl">{t("benefits.title")}</h2>
          <p className="text-primary mx-auto mt-4 max-w-3xl text-lg font-semibold">{t("benefits.subtitle")}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group border-border bg-card hover:border-primary/30 hover:shadow-primary/5 flex gap-4 rounded-2xl border p-6 transition-all hover:shadow-lg"
            >
              <div className="bg-primary text-primary-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-foreground mb-2 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
