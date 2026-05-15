import type { Metadata } from "next";
import { SectionHeader } from "@/components/site/section-header";
import { ProgramCard } from "@/components/site/program-card";
import { CTABanner } from "@/components/site/cta-banner";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { resourcesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description: resourcesPage.intro,
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <SectionHeader
            eyebrow={resourcesPage.eyebrow}
            heading={resourcesPage.heading}
            intro={resourcesPage.intro}
            as="h1"
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28 lg:px-12">
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {resourcesPage.cards.map((c) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={c.href}>
                  <ProgramCard
                    icon={<Icon className="size-5" />}
                    title={c.title}
                    description={c.description}
                    href={c.href}
                    cta="Open"
                    className="h-full p-10"
                  />
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <CTABanner
        eyebrow="Looking for something specific?"
        heading="Ask us — we probably have it."
        body="If we don't, we'll point you at the teacher or department that does."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "View team", href: "/about/team" }}
      />
    </>
  );
}
