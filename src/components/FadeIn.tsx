"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { useSyncExternalStore } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  children: React.ReactNode;
}

// Subscribe function (no-op since user agent doesn't change)
const subscribe = () => () => {};

// Check if device is mobile
const getSnapshot = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

// Server always returns false (will animate, but content visible via CSS)
const getServerSnapshot = () => false;

export function FadeIn({
  delay = 0,
  direction = "up",
  distance = 30,
  children,
  className,
  ...props
}: FadeInProps) {
  const isMobile = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      initial={isMobile ? { opacity: 1 } : { opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      style={isMobile ? { opacity: 1 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
