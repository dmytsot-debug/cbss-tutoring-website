import type { Metadata } from "next";
import { SectionHeader } from "@/components/site/section-header";
import { CTABanner } from "@/components/site/cta-banner";
import { RegistryClient } from "./registry-client";

export const metadata: Metadata = {
  title: "Tutor Registry",
  description:
    "Search the CBSS Tutoring registry by subject and grade to find a peer tutor at Dr. Charles Best Secondary.",
};

export default function TutorRegistryPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <SectionHeader
            eyebrow="Tutor registry"
            heading="Find a tutor by subject."
            intro="Search the active roster, filter by subject family and grade level, then reach out to your tutor directly to book a session."
            as="h1"
          />
        </div>
      </section>

      <RegistryClient />

      <CTABanner
        eyebrow="Can't find a fit?"
        heading="Tell us what you need."
        body="Email the executive team and we'll match you with the best available tutor."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{
          label: "View all programs",
          href: "/services/peer-tutoring",
        }}
      />
    </>
  );
}
