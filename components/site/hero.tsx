"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { site, stats } from "@/lib/content";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <section
      className="relative min-h-[85vh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute right-[-200px] top-1/3 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[85vh] max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-9">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent"
          >
            <span className="inline-block h-px w-8 bg-accent" />
            Charles Best Tutoring Services
          </motion.span>

          <motion.h1
            id="hero-heading"
            {...fadeUp(0.08)}
            className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Learn alongside students who&rsquo;ve{" "}
            <span className="italic text-accent">been there.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-8 max-w-2xl text-lg leading-[1.7] text-muted-foreground sm:text-xl"
          >
            Free peer tutoring across every department at Dr. Charles Best
            Secondary. Run by students. Trusted by teachers. Built around the
            courses you&rsquo;re actually taking.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Button asChild size="lg">
              <Link href="/services/tutor-registry">Find a Tutor</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/membership">Join as a Tutor</Link>
            </Button>
          </motion.div>
        </div>

        <motion.aside
          {...fadeUp(0.32)}
          className="hidden border-l border-border pl-8 lg:col-span-3 lg:block"
          aria-label="Site facts"
        >
          <ul className="flex flex-col gap-8 text-sm">
            <li>
              <div className="font-serif text-4xl tracking-tight text-foreground">
                {stats[0].value}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {stats[0].label}
              </div>
            </li>
            <li>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                School
              </div>
              <div className="mt-1 text-foreground">{site.school}</div>
            </li>
            <li>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Operating since
              </div>
              <div className="mt-1 font-mono text-foreground">
                {site.founded}
              </div>
            </li>
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
