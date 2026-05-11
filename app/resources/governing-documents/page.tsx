import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { CTABanner } from "@/components/site/cta-banner";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { governingDocs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Governing Documents",
  description:
    "Our constitution, code of conduct, executive roles, and most recent annual report.",
};

export default function GoverningDocsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <SectionHeader
            eyebrow="Governing documents"
            heading="How we operate, in public."
            intro="CBSS Tutoring publishes its founding documents and annual reports. Everything is reviewed by the executive team and our teacher sponsor each year."
            as="h1"
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-24 lg:px-12">
          <Stagger as="ul" className="flex flex-col divide-y divide-border">
            {governingDocs.map((doc) => (
              <StaggerItem key={doc.title} as="li">
                <Link
                  href={doc.href}
                  className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-muted/40 -mx-6 px-6 md:-mx-8 md:px-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="mt-0.5 inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <FileText className="size-5" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl tracking-tight text-foreground md:text-2xl">
                        {doc.title}
                      </h2>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Updated {doc.updated}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                    View
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <p className="mt-12 max-w-prose text-sm leading-[1.7] text-muted-foreground">
            <span className="font-mono uppercase tracking-[0.18em] text-accent">
              Editor note ·
            </span>{" "}
            Update the document list in{" "}
            <code className="font-mono text-foreground">lib/content.ts</code>{" "}
            under <code className="font-mono text-foreground">governingDocs</code>.
            Host PDFs in Google Drive and paste the share link as{" "}
            <code className="font-mono text-foreground">href</code>.
          </p>
        </div>
      </section>

      <CTABanner
        eyebrow="Questions?"
        heading="Ask the executive team."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Read about us", href: "/about" }}
      />
    </>
  );
}
