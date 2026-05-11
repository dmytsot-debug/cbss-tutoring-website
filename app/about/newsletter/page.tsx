import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/site/section-header";
import { CTABanner } from "@/components/site/cta-banner";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { newsletterIssues } from "@/lib/content";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Read past issues of the CBSS Tutoring newsletter — study guides, tutor profiles, and program updates.",
};

export default function NewsletterPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <SectionHeader
            eyebrow="Newsletter"
            heading="What we&rsquo;re publishing this term."
            intro="Termly updates from the executive team — study tips, profiles of new tutors, and announcements you'd otherwise miss."
            as="h1"
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-24 lg:px-12">
          <Stagger as="ul" className="flex flex-col">
            {newsletterIssues.map((issue, i) => (
              <StaggerItem key={issue.title} as="li">
                <Link
                  href={issue.href}
                  className="group block border-b border-border py-10 transition-colors hover:bg-muted/50 -mx-6 px-6 md:-mx-8 md:px-8"
                >
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-12 md:items-baseline">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent md:col-span-3">
                      {issue.date}
                    </span>
                    <div className="md:col-span-8">
                      <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
                        {issue.title}
                      </h2>
                      <p className="mt-3 max-w-prose text-sm leading-[1.7] text-muted-foreground">
                        {issue.preview}
                      </p>
                    </div>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground md:col-span-1 md:justify-self-end" />
                  </div>
                </Link>
                {i === newsletterIssues.length - 1 && (
                  <p className="mt-10 max-w-prose text-sm leading-[1.7] text-muted-foreground">
                    <span className="font-mono uppercase tracking-[0.18em] text-accent">
                      Editor note ·
                    </span>{" "}
                    Issues live in{" "}
                    <code className="font-mono text-foreground">
                      lib/content.ts
                    </code>
                    . To publish a PDF, host it in Google Drive (set sharing
                    to &ldquo;anyone with the link&rdquo;) and paste the URL
                    into the <code className="font-mono text-foreground">href</code>{" "}
                    field of a <code className="font-mono text-foreground">
                      NewsletterIssue
                    </code>{" "}
                    entry.
                  </p>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABanner
        eyebrow="Stay in the loop"
        heading="Subscribe via Instagram."
        body="We post each new issue, plus session reminders and event invites, to @cbss_tutoring."
        primary={{
          label: "Follow @cbss_tutoring",
          href: "https://www.instagram.com/cbss_tutoring",
        }}
        secondary={{ label: "Email us", href: "/contact" }}
      />
    </>
  );
}
