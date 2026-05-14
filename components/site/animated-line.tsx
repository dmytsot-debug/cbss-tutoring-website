"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedLine() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="absolute left-0 right-0 top-8 hidden h-px origin-left bg-border md:block"
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    />
  );
}
