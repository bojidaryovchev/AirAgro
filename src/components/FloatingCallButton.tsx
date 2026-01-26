"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingCallButton = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div style={{ opacity }} className="fixed right-6 bottom-6 z-50">
      <Button
        asChild
        size="lg"
        className="hero-gradient shadow-primary/30 hover:shadow-primary/40 h-14 w-14 rounded-full border-0 p-0 shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      >
        <a href="tel:+359888123456" aria-label="Call us">
          <Phone className="h-6 w-6 text-white" />
        </a>
      </Button>
    </motion.div>
  );
};

export default FloatingCallButton;
