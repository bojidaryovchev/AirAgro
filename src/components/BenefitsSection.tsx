'use client';

import { motion } from "framer-motion";
import { 
  Zap, 
  Wallet, 
  CloudRain, 
  TreePine, 
  MapPin, 
  Leaf, 
  ShieldCheck,
  Check
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Zap,
      title: t('benefits.speed'),
      description: t('benefits.speed.desc'),
    },
    {
      icon: Wallet,
      title: t('benefits.savings'),
      description: t('benefits.savings.desc'),
    },
    {
      icon: CloudRain,
      title: t('benefits.weather'),
      description: t('benefits.weather.desc'),
    },
    {
      icon: TreePine,
      title: t('benefits.height'),
      description: t('benefits.height.desc'),
    },
    {
      icon: MapPin,
      title: t('benefits.precision'),
      description: t('benefits.precision.desc'),
    },
    {
      icon: Leaf,
      title: t('benefits.eco'),
      description: t('benefits.eco.desc'),
    },
    {
      icon: ShieldCheck,
      title: t('benefits.safety'),
      description: t('benefits.safety.desc'),
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
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {t('benefits.badge')}
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            {t('benefits.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-semibold text-primary">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
