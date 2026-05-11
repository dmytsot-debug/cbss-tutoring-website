import type { Metadata } from "next";
import { SectionHeader } from "@/components/site/section-header";
import { LandAcknowledgment } from "@/components/site/land-acknowledgment";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { contact, site } from "@/lib/content";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the CBSS Tutoring team by email, Instagram, or in person at Dr. Charles Best Secondary School.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <SectionHeader
            eyebrow={contact.eyebrow}
            heading={contact.heading}
            intro={contact.intro}
            as="h1"
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-8 md:py-28 lg:px-12">
          <div className="md:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Channels
            </span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              Choose what works for you.
            </h2>
            <Stagger as="ul" className="mt-10 flex flex-col gap-8">
              {contact.channels.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="group flex items-start gap-4">
                    <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="mt-1 text-base text-foreground transition-colors group-hover:text-accent">
                        {c.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <StaggerItem key={c.label} as="li">
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          c.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>

          <FadeIn delay={0.1} className="md:col-span-7">
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <section
        aria-labelledby="find-us-heading"
        className="border-b border-border bg-muted/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28 lg:px-12">
          <h2
            id="find-us-heading"
            className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
          >
            Find us
          </h2>
          <p className="mt-4 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            {site.school}
          </p>
          <p className="mt-2 text-base text-muted-foreground">
            {site.schoolAddress}
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <iframe
              title={`Map of ${site.school}`}
              src="https://www.google.com/maps?q=Dr.+Charles+Best+Secondary+School,+Coquitlam,+BC&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-12">
          <LandAcknowledgment />
        </div>
      </section>
    </>
  );
}
