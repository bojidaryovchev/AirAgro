'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        asChild
        size="lg"
        className="hero-gradient h-14 w-14 rounded-full border-0 p-0 shadow-lg shadow-primary/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-primary/40"
      >
        <a href="tel:+359888123456" aria-label="Call us">
          <Phone className="h-6 w-6 text-white" />
        </a>
      </Button>
    </motion.div>
  );
};

export default FloatingCallButton;
