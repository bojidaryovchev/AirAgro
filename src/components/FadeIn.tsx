"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { useEffect, useSyncExternalStore } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  children: React.ReactNode;
}

// Detect mobile/tablet via user agent
function getIsMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// Use useSyncExternalStore to safely read client-only values
function useIsMobileDevice() {
  return useSyncExternalStore(
    () => () => {}, // no-op subscribe
    () => getIsMobileDevice(), // client snapshot
    () => false // server snapshot - assume desktop, animate
  );
}

export function FadeIn({
  delay = 0,
  direction = "up",
  distance = 30,
  children,
  className,
  ...props
}: FadeInProps) {
  const isMobile = useIsMobileDevice();

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  // On mobile: render with final state (no animation)
  // On desktop: animate in
  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, ...directionOffset[direction] }}
      whileInView={isMobile ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
