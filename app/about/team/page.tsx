import type { Metadata } from "next";
import { SectionHeader } from "@/components/site/section-header";
import { CTABanner } from "@/components/site/cta-banner";
import { TeamGrid } from "./team-grid";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Charles Best students who tutor — across math, sciences, English, humanities, and languages.",
};

export default function TeamPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <SectionHeader
            eyebrow="Our team"
            heading="The tutors behind CBSS."
            intro="A rotating roster of Charles Best students who've passed the courses they tutor — recently enough to remember what was hard."
            as="h1"
          />
        </div>
      </section>

      <TeamGrid />

      <CTABanner
        eyebrow="Join the team"
        heading="Strong in a subject? Help someone get there."
      />
    </>
  );
}
