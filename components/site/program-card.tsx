"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { EASE } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  cta?: string;
  className?: string;
};

export function ProgramCard({
  icon,
  title,
  description,
  href,
  cta = "Learn more",
  className,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 280, damping: 28 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-7, 7]), springConfig);
  const glowX = useTransform(rawX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(rawY, [-0.5, 0.5], ["0%", "100%"]);
  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]: string[]) =>
      `radial-gradient(300px circle at ${x} ${y}, rgba(194,130,50,0.09), transparent 70%)`,
  );

  // Scroll-linked parallax + mesh
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  // Mesh grid translates upward as card scrolls into view
  const meshY = useTransform(smoothProgress, [0, 1], [0, -48]);
  // Blue gradient highlight drifts from low → high as card passes
  const gradientCenterY = useTransform(smoothProgress, [0, 1], [85, 15]);
  const scrollGradient = useTransform(
    gradientCenterY,
    (y) => `radial-gradient(ellipse 80% 60% at 50% ${y}%, rgba(59,130,246,0.09), transparent 70%)`,
  );

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={
        reduce
          ? {}
          : { rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }
      }
      whileHover={reduce ? {} : { scale: 1.02 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 text-card-foreground transition-shadow duration-300 hover:shadow-2xl hover:shadow-foreground/8",
        className,
      )}
    >
      {/* Scroll-driven mesh grid — overflows slightly so grid doesn't clip when it shifts */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-[6%] rounded-2xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            y: meshY,
          }}
        />
      )}

      {/* Scroll-driven gradient — blue highlight that drifts upward on scroll */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: scrollGradient }}
        />
      )}

      {/* Spotlight glow that follows the mouse */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBg }}
        />
      )}

      <div className="relative mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="font-serif text-2xl leading-[1.2] tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted-foreground">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
      >
        <span className="link-underline">{cta}</span>
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}
