"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const VideoShowcaseSection = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
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
              video.src = "/videos/vid2.webm";
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

  return (
    <section ref={sectionRef} id="video" className="relative overflow-hidden py-20 lg:py-32">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} muted loop playsInline preload="none" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              {t("video.badge")}
            </span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">{t("video.title")}</h2>
            <p className="mt-6 text-lg text-white/90 md:text-xl">{t("video.description")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
