"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, VIEWPORT } from "@/lib/motion";

export function AnimatedLine() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="absolute left-0 right-0 top-8 hidden h-px origin-left bg-border md:block"
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1, ease: EASE, delay: 0.2 }}
    />
  );
}
