import Link from "next/link";
import { Hero } from "@/components/site/hero";
import { SectionHeader } from "@/components/site/section-header";
import { ProgramCard } from "@/components/site/program-card";
import { StatTile } from "@/components/site/stat-tile";
import { CTABanner } from "@/components/site/cta-banner";
import { FAQ } from "@/components/site/faq";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { AnimatedLine } from "@/components/site/animated-line";
import {
  programs,
  stats,
  homeMission,
  howItWorks,
  homeTestimonial,
  faqs,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        aria-labelledby="mission-heading"
        className="border-t border-border"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow={homeMission.eyebrow}
              heading={homeMission.heading}
              as="h2"
            />
          </div>
          <FadeIn className="flex flex-col gap-6 md:col-span-7">
            {homeMission.body.map((p, i) => (
              <p
                key={i}
                className="max-w-prose text-base leading-[1.7] text-muted-foreground sm:text-lg"
              >
                {p}
              </p>
            ))}
          </FadeIn>
        </div>
      </section>

      <section
        aria-labelledby="programs-heading"
        className="border-t border-border bg-muted/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <SectionHeader
            eyebrow="Programs"
            heading="Three ways to get help."
            intro="Whether you want a dedicated tutor for the semester or a walk-in session before a test, we have a program built for it."
          />
          <Stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <StaggerItem key={p.slug}>
                <ProgramCard
                  icon={p.icon}
                  title={p.title}
                  description={p.short}
                  href={p.href}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section aria-labelledby="stats-heading" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28 lg:px-12">
          <h2 id="stats-heading" className="sr-only">
            By the numbers
          </h2>
          <Stagger className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <StatTile value={s.value} label={s.label} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section
        aria-labelledby="how-it-works-heading"
        className="border-t border-border bg-muted/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <SectionHeader
            eyebrow="How it works"
            heading="From stuck to sorted, in three steps."
            as="h2"
          />
          <div className="relative mt-16">
            <AnimatedLine />
            <Stagger className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {howItWorks.map((step) => (
                <StaggerItem key={step.n} className="relative">
                  <span className="relative z-10 inline-flex size-16 items-center justify-center rounded-full border border-border bg-background font-mono text-sm tracking-widest text-accent">
                    {step.n}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-[1.7] text-muted-foreground">
                    {step.body}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section aria-label="Student testimonial" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <FadeIn y={40} className="mx-auto max-w-4xl text-center">
            <Stagger delay={0.1} stagger={0.12} className="flex flex-col items-center gap-0">
              <StaggerItem>
                <span aria-hidden className="font-serif text-6xl text-accent">
                  &ldquo;
                </span>
              </StaggerItem>
              <StaggerItem y={30}>
                <blockquote className="mt-4 font-serif text-3xl italic leading-[1.25] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {homeTestimonial.quote}
                </blockquote>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  — {homeTestimonial.attribution}
                </p>
              </StaggerItem>
            </Stagger>
          </FadeIn>
        </div>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="border-t border-border bg-muted/40"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="FAQ"
              heading="Common questions."
              intro="If you can't find what you're looking for, email us — we read every message."
            />
            <Link
              href="/contact"
              className="link-underline mt-8 inline-block font-medium text-foreground"
            >
              Ask a question →
            </Link>
          </div>
          <FadeIn className="md:col-span-7">
            <FAQ items={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTABanner
        heading="Ready to get started?"
        body="Browse the registry to find a tutor in your subject, or apply to become one yourself. Both take under five minutes."
      />
    </>
  );
}
