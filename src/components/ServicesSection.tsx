"use client";

import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { Droplets, Leaf, Map, Satellite, Shield, Sprout } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Shield,
      title: t("services.spraying.title"),
      description: t("services.spraying.description"),
      href: "/uslugi/pruskane",
    },
    {
      icon: Leaf,
      title: t("services.fertilization.title"),
      description: t("services.fertilization.description"),
      href: "/uslugi/pruskane",
    },
    {
      icon: Droplets,
      title: t("services.herbicide.title"),
      description: t("services.herbicide.description"),
      href: "/uslugi/pruskane",
    },
    {
      icon: Sprout,
      title: t("services.seeding.title"),
      description: t("services.seeding.description"),
      href: "/uslugi/zasyavane",
    },
    {
      icon: Satellite,
      title: t("services.monitoring.title"),
      description: t("services.monitoring.description"),
      href: "/uslugi",
    },
    {
      icon: Map,
      title: t("services.mapping.title"),
      description: t("services.mapping.description"),
      href: "/uslugi",
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16 text-center">
          <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-medium">
            {t("services.badge")}
          </span>
          <h2 className="font-display text-foreground text-4xl font-bold md:text-5xl">{t("services.title")}</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">{t("services.description")}</p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={index * 0.1}
              className="group border-border bg-card hover:border-primary/30 hover:shadow-primary/5 rounded-2xl border transition-all hover:shadow-xl"
            >
              <Link href={service.href} className="flex h-full flex-col p-8">
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-foreground mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground flex-1">{service.description}</p>
                <span className="text-primary mt-4 inline-block text-sm font-medium">Научи повече →</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
