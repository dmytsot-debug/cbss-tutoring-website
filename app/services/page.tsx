import type { Metadata } from "next";
import { SectionHeader } from "@/components/site/section-header";
import { ProgramCard } from "@/components/site/program-card";
import { CTABanner } from "@/components/site/cta-banner";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { servicesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: servicesPage.intro,
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <SectionHeader
            eyebrow={servicesPage.eyebrow}
            heading={servicesPage.heading}
            intro={servicesPage.intro}
            as="h1"
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28 lg:px-12">
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {servicesPage.cards.map((c) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={c.href} className="h-full">
                  <ProgramCard
                    icon={<Icon className="size-5" />}
                    title={c.title}
                    description={c.description}
                    href={c.href}
                    cta="Explore"
                    className="h-full p-10"
                  />
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <CTABanner
        heading="Not sure which to pick?"
        body="Drop us a line and we'll point you at the right program based on your subject and how you study."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{
          label: "View FAQ",
          href: "/#faq-heading",
        }}
      />
    </>
  );
}
