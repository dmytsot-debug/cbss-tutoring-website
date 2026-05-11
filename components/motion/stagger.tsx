"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type StaggerProps = {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
  as?: "div" | "ul" | "section";
};

export function Stagger({
  children,
  delay = 0,
  stagger = 0.08,
  className,
  as = "div",
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "article";
};

export function StaggerItem({
  children,
  className,
  y = 20,
  as = "div",
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
