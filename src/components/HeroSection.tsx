"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

const HeroSection = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const playTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef(false);

  // Debounced play/pause to prevent rapid state changes during fast scroll
  const debouncedPlayPause = useCallback((shouldPlay: boolean) => {
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
    }

    playTimeoutRef.current = setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;

      if (shouldPlay && !isPlayingRef.current) {
        video.play().catch(() => {});
        isPlayingRef.current = true;
      } else if (!shouldPlay && isPlayingRef.current) {
        video.pause();
        isPlayingRef.current = false;
      }
    }, 100); // 100ms debounce
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          debouncedPlayPause(entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
      }
    };
  }, [debouncedPlayPause]);

  return (
    <section ref={sectionRef} id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background - GPU accelerated layer */}
      <div className="absolute inset-0 z-0" style={{ contain: "paint" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
        >
          <source src="/videos/drone-bg.webm" type="video/webm" />
          <source src="/videos/drone-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            {t("hero.badge")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl leading-tight font-bold text-white md:text-7xl lg:text-8xl"
        >
          {t("hero.title1")}
          <br />
          <span className="bg-linear-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
            {t("hero.title2")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <Button
            size="lg"
            className="hero-gradient shadow-primary/30 hover:shadow-primary/40 border-0 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            asChild
          >
            <a href="#contact">{t("hero.getQuote")}</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm">{t("hero.scroll")}</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
