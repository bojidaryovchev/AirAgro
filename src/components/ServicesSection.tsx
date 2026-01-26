'use client';

import { motion } from "framer-motion";
import { Droplets, Map, Leaf, Shield, Zap, Sprout } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Droplets,
      title: t('services.spraying.title'),
      description: t('services.spraying.description'),
    },
    {
      icon: Leaf,
      title: t('services.fertilization.title'),
      description: t('services.fertilization.description'),
    },
    {
      icon: Zap,
      title: t('services.herbicide.title'),
      description: t('services.herbicide.description'),
    },
    {
      icon: Shield,
      title: t('services.pest.title'),
      description: t('services.pest.description'),
    },
    {
      icon: Map,
      title: t('services.mapping.title'),
      description: t('services.mapping.description'),
    },
    {
      icon: Sprout,
      title: t('services.greenhouse.title'),
      description: t('services.greenhouse.description'),
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {t('services.badge')}
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            {t('services.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('services.description')}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
