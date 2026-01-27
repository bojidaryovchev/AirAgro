"use client";

import { motion, type HTMLMotionProps } from "motion/react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  children: React.ReactNode;
}

// Detect mobile/tablet via user agent
function getIsMobileDevice(): boolean {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// Check once at module load time (client-side only)
const isMobileDevice = typeof window !== "undefined" ? getIsMobileDevice() : false;

export function FadeIn({
  delay = 0,
  direction = "up",
  distance = 30,
  children,
  className,
  ...props
}: FadeInProps) {
  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  // On mobile devices, skip the animation entirely to prevent flicker
  if (isMobileDevice) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
