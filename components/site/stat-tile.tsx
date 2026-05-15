"use client";

import { useEffect, useRef } from "react";
import { useInView, animate, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  label: string;
  className?: string;
};

export function StatTile({ value, label, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const match = value.match(/^(\d+)(.*)$/);
  const num = match ? parseInt(match[1]) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView || !ref.current || num === null || reduce) return;
    const el = ref.current;
    const controls = animate(0, num, {
      duration: 1.6,
      ease: EASE,
      onUpdate(v) {
        el.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, num, suffix, reduce]);

  return (
    <div className={cn("flex flex-col gap-2 border-t border-border pt-6", className)}>
      <span
        ref={ref}
        className="font-serif text-5xl leading-none tracking-tight text-foreground md:text-6xl"
      >
        {value}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
