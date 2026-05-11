import type { Metadata } from "next";
import { MapPin, Clock, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { CTABanner } from "@/components/site/cta-banner";
import { FadeIn } from "@/components/motion/fade-in";
import { programs, peerTutoringPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Peer Tutoring",
  description:
    "Individual tutoring, the Math Tutorial Room, and the Calculus Clinic — three free programs run by Charles Best students.",
};

const SLUG_TO_ID: Record<string, string> = {
  "individual-tutoring": "individual",
  "math-tutorial-room": "math-room",
  "calculus-clinic": "calc-clinic",
};

export default function PeerTutoringPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <SectionHeader
            eyebrow={peerTutoringPage.eyebrow}
            heading={peerTutoringPage.heading}
            intro={peerTutoringPage.intro}
            as="h1"
          />
        </div>
      </section>

      {programs.map((p, idx) => (
        <section
          key={p.slug}
          id={SLUG_TO_ID[p.slug] ?? p.slug}
          aria-labelledby={`${p.slug}-heading`}
          className={
            idx % 2 === 0
              ? "border-b border-border"
              : "border-b border-border bg-muted/40"
          }
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-8 md:py-28 lg:px-12">
            <div className="md:col-span-5">
              <FadeIn>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  Program {String(idx + 1).padStart(2, "0")}
                </span>
                <h2
                  id={`${p.slug}-heading`}
                  className="mt-4 font-serif text-3xl leading-[1.1] tracking-tight text-foreground md:text-5xl"
                >
                  {p.title}
                </h2>
                <p className="mt-6 max-w-prose text-base leading-[1.7] text-muted-foreground sm:text-lg">
                  {p.description}
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.1} className="md:col-span-7">
              <dl className="grid grid-cols-1 gap-y-6 rounded-2xl border border-border bg-background p-8 sm:grid-cols-3 sm:gap-x-8">
                {p.location && (
                  <div>
                    <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      <MapPin className="size-3.5" />
                      Where
                    </dt>
                    <dd className="mt-2 text-sm leading-[1.6] text-foreground">
                      {p.location}
                    </dd>
                  </div>
                )}
                {p.schedule && (
                  <div>
                    <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      <Clock className="size-3.5" />
                      When
                    </dt>
                    <dd className="mt-2 text-sm leading-[1.6] text-foreground">
                      {p.schedule}
                    </dd>
                  </div>
                )}
                {p.subjects && (
                  <div>
                    <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      <BookOpen className="size-3.5" />
                      Subjects
                    </dt>
                    <dd className="mt-2 text-sm leading-[1.6] text-foreground">
                      {p.subjects}
                    </dd>
                  </div>
                )}
              </dl>
            </FadeIn>
          </div>
        </section>
      ))}

      <CTABanner
        heading="Pick a program and show up."
        body="Walk in to the Math Tutorial Room, drop by the Calculus Clinic on Monday, or book a one-on-one tutor through the registry."
      />
    </>
  );
}
