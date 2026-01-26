'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const features = [
    t('features.capacity'),
    t('features.radar'),
    t('features.transmission'),
    t('features.coverage'),
    t('features.terrain'),
    t('features.weather'),
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-background"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              {t('features.badge')}
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              {t('features.title1')}
              <br />
              <span className="bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">
                {t('features.title2')}
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {t('features.description')}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video with parallax */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-auto w-full"
              >
                <source src="/videos/drone-spraying.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Glow effect */}
              <div className="absolute -bottom-10 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
