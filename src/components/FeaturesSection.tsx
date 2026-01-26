"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Check, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const FeaturesSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasLoadedRef.current) {
              video.src = "/videos/drone-spraying.mp4";
              video.load();
              hasLoadedRef.current = true;
            }
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "200px", threshold: 0 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Check, label: t("features.capacity") },
    { icon: Check, label: t("features.radar") },
    { icon: Check, label: t("features.transmission") },
    { icon: Check, label: t("features.coverage") },
    { icon: Check, label: t("features.terrain") },
    { icon: Check, label: t("features.weather") },
    { icon: ShieldCheck, label: t("benefits.safety") },
  ];

  return (
    <section id="features" ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-medium">
              {t("features.badge")}
            </span>
            <h2 className="font-display text-foreground text-4xl font-bold md:text-5xl">
              {t("features.title1")}
              <br />
              <span className="bg-linear-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">
                {t("features.title2")}
              </span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg">{t("features.description")}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <feature.icon className="text-primary-foreground h-4 w-4" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video - lazy loaded */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl" style={{ paddingTop: "75%" }}>
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Dark green glow effect */}
              <div className="bg-primary/40 absolute -bottom-10 left-1/2 h-40 w-4/5 -translate-x-1/2 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
