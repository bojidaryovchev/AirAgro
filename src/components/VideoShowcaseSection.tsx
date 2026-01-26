'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const VideoShowcaseSection = () => {
  const { t } = useLanguage();

  return (
    <section id="video" className="relative overflow-hidden py-20 lg:py-32">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/drone-bg.webm" type="video/webm" />
          <source src="/videos/drone-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              {t('video.badge')}
            </span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              {t('video.title')}
            </h2>
            <p className="mt-6 text-lg text-white/90">
              {t('video.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl"
          >
            <video
              controls
              className="h-full w-full object-cover"
              preload="metadata"
            >
              <source src="/videos/drone-spraying.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
