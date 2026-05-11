import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/site/section-header";
import { CTABanner } from "@/components/site/cta-banner";
import { LandAcknowledgment } from "@/components/site/land-acknowledgment";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { aboutPage, values, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.intro,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <SectionHeader
            eyebrow={aboutPage.eyebrow}
            heading={aboutPage.heading}
            intro={aboutPage.intro}
            as="h1"
          />
        </div>
      </section>

      <section
        aria-labelledby="mission-heading"
        className="border-b border-border"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="Our mission"
              heading="Why we do this."
            />
          </div>
          <div className="md:col-span-7">
            <FadeIn className="flex flex-col gap-6">
              {aboutPage.mission.map((p, i) => (
                <p
                  key={i}
                  className="max-w-prose text-base leading-[1.7] text-muted-foreground sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </FadeIn>
            <FadeIn delay={0.15} className="mt-12">
              <figure className="border-l-2 border-accent pl-6 md:pl-8">
                <blockquote className="font-serif text-2xl italic leading-[1.3] tracking-tight text-foreground md:text-3xl">
                  &ldquo;{aboutPage.quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  — {aboutPage.quote.attribution}
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="values-heading"
        className="border-b border-border bg-muted/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <SectionHeader
            eyebrow="Values"
            heading="What we hold ourselves to."
            intro="Four commitments that shape how we recruit tutors, run programs, and respond when things break."
          />
          <Stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <Card className="h-full p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5">
                  <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                    {v.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section
        aria-labelledby="sponsor-heading"
        className="border-b border-border"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-12 md:px-8 md:py-28 lg:px-12">
          <div className="md:col-span-7">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Teacher sponsor
            </span>
            <h2
              id="sponsor-heading"
              className="mt-4 font-serif text-3xl tracking-tight text-foreground md:text-4xl"
            >
              {site.teacherSponsor} has supported this program since the
              beginning.
            </h2>
            <p className="mt-6 max-w-prose text-base leading-[1.7] text-muted-foreground sm:text-lg">
              CBSS Tutoring operates with the supervision and support of{" "}
              {site.teacherSponsor}, who works closely with our executive team
              to keep the program accountable, well-staffed, and aligned with
              what students at Charles Best actually need.
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <Button asChild>
              <Link href="/about/team">Meet the team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 lg:px-12">
          <LandAcknowledgment />
        </div>
      </section>

      <CTABanner
        eyebrow="Join us"
        heading="Tutor or be tutored."
        body="Whether you're great at a subject or struggling with one, there's a place for you in CBSS Tutoring."
      />
    </>
  );
}
