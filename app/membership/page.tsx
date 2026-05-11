import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { CTABanner } from "@/components/site/cta-banner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { FadeIn } from "@/components/motion/fade-in";
import { membershipBenefits, membershipSteps, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Become a CBSS tutor — earn volunteer hours, build leadership skills, and help your peers.",
};

const APPLICATION_FORM_URL = "https://forms.gle/example";

export default function MembershipPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-10 px-6 py-24 md:grid-cols-12 md:px-8 md:py-32 lg:px-12">
          <div className="md:col-span-8">
            <SectionHeader
              eyebrow="Membership"
              heading="Become a tutor."
              intro="If you've done well in a course and you want to help someone else through it, we want to hear from you. Tutoring is one of the most underrated forms of leadership in high school."
              as="h1"
            />
          </div>
          <FadeIn delay={0.1} className="md:col-span-4 md:justify-self-end">
            <Button asChild size="lg">
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply now
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section
        aria-labelledby="who-and-benefits"
        className="border-b border-border"
      >
        <h2 id="who-and-benefits" className="sr-only">
          Who can join and what you get
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <div className="md:col-span-6">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Who can join
            </span>
            <h3 className="mt-4 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              Charles Best students, grades 10–12.
            </h3>
            <p className="mt-6 max-w-prose text-base leading-[1.7] text-muted-foreground sm:text-lg">
              You should have strong marks in the subjects you&rsquo;d like to
              tutor and be willing to commit to a regular schedule for at least
              one semester. We onboard new tutors at the start of each term.
            </p>
            <p className="mt-4 max-w-prose text-base leading-[1.7] text-muted-foreground sm:text-lg">
              No prior teaching experience required. We&rsquo;ll cover what you
              need in orientation.
            </p>
          </div>

          <div className="md:col-span-6">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              What you get
            </span>
            <h3 className="mt-4 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              Real, useful benefits.
            </h3>
            <Stagger as="ul" className="mt-6 flex flex-col gap-4">
              {membershipBenefits.map((b) => (
                <StaggerItem key={b.title} as="li">
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                    >
                      <Check className="size-3.5" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{b.title}</p>
                      <p className="mt-1 text-sm leading-[1.7] text-muted-foreground">
                        {b.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="steps-heading"
        className="border-b border-border bg-muted/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <SectionHeader
            eyebrow="Application"
            heading="Four steps from interested to tutoring."
            as="h2"
          />
          <Stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {membershipSteps.map((step) => (
              <StaggerItem key={step.n}>
                <Card className="flex h-full flex-col p-8">
                  <span className="font-mono text-sm tracking-widest text-accent">
                    {step.n}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                    {step.body}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section
        aria-labelledby="apply-heading"
        className="border-b border-border"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-12 md:px-8 md:py-28 lg:px-12">
          <div className="md:col-span-8">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Application form
            </span>
            <h2
              id="apply-heading"
              className="mt-4 font-serif text-3xl tracking-tight text-foreground md:text-4xl"
            >
              Submit the form to get started.
            </h2>
            <p className="mt-6 max-w-prose text-base leading-[1.7] text-muted-foreground sm:text-lg">
              The application is a Google Form. Expect to spend about ten
              minutes on it. We follow up within a week.
            </p>
            <p className="mt-4 max-w-prose text-sm leading-[1.7] text-muted-foreground">
              <span className="font-mono uppercase tracking-[0.18em] text-accent">
                Editor note ·
              </span>{" "}
              Update{" "}
              <code className="font-mono text-foreground">
                APPLICATION_FORM_URL
              </code>{" "}
              at the top of{" "}
              <code className="font-mono text-foreground">
                app/membership/page.tsx
              </code>{" "}
              with the live Google Form link. Embedding is optional — a hosted
              link is usually a better UX.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:col-span-4 md:justify-self-end">
            <Button asChild size="lg">
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open application
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Questions before you apply?"
        heading={`Reach out to ${site.teacherSponsor} or the executive team.`}
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Read about us", href: "/about" }}
      />
    </>
  );
}
