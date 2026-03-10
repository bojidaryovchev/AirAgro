"use client";

import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { Droplets, Leaf, Map, Shield, Sprout, Zap } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Droplets,
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
      icon: Zap,
      title: t("services.herbicide.title"),
      description: t("services.herbicide.description"),
      href: "/uslugi/pruskane",
    },
    {
      icon: Shield,
      title: t("services.pest.title"),
      description: t("services.pest.description"),
      href: "/uslugi/pruskane",
    },
    {
      icon: Map,
      title: t("services.mapping.title"),
      description: t("services.mapping.description"),
      href: undefined,
    },
    {
      icon: Sprout,
      title: t("services.greenhouse.title"),
      description: t("services.greenhouse.description"),
      href: undefined,
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
          {services.map((service, index) => {
            const content = (
              <>
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-foreground mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                {service.href && (
                  <span className="text-primary mt-4 inline-block text-sm font-medium">Научи повече →</span>
                )}
              </>
            );

            return service.href ? (
              <FadeIn
                key={service.title}
                delay={index * 0.1}
                className="group border-border bg-card hover:border-primary/30 hover:shadow-primary/5 rounded-2xl border transition-all hover:shadow-xl"
              >
                <Link href={service.href} className="block p-8">
                  {content}
                </Link>
              </FadeIn>
            ) : (
              <FadeIn
                key={service.title}
                delay={index * 0.1}
                className="group border-border bg-card hover:border-primary/30 hover:shadow-primary/5 rounded-2xl border p-8 transition-all hover:shadow-xl"
              >
                {content}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
