import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { CTABanner } from "@/components/site/cta-banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { practiceExams } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practice Exams",
  description:
    "Practice exams and review questions by subject — math, sciences, English, humanities, and languages.",
};

export default function PracticeExamsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <SectionHeader
            eyebrow="Practice exams"
            heading="Past exams and review sets."
            intro="A curated collection of practice material organized by subject. Use these for spaced review in the weeks before a midterm or final."
            as="h1"
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-24 lg:px-12">
          <FadeIn>
            <Accordion type="multiple" className="w-full">
              {practiceExams.map((s) => (
                <AccordionItem key={s.subject} value={s.subject}>
                  <AccordionTrigger>{s.subject}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col divide-y divide-border">
                      {s.exams.map((e) => (
                        <li key={e.title}>
                          <Link
                            href={e.href}
                            className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-foreground"
                          >
                            <span className="text-base text-muted-foreground group-hover:text-foreground">
                              {e.title}
                            </span>
                            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <p className="mt-12 max-w-prose text-sm leading-[1.7] text-muted-foreground">
            <span className="font-mono uppercase tracking-[0.18em] text-accent">
              Editor note ·
            </span>{" "}
            Edit{" "}
            <code className="font-mono text-foreground">practiceExams</code> in{" "}
            <code className="font-mono text-foreground">lib/content.ts</code> to
            add subjects or new exam links.
          </p>
        </div>
      </section>

      <CTABanner
        eyebrow="Need help with a topic?"
        heading="A tutor can walk you through it."
        primary={{ label: "Find a Tutor", href: "/services/tutor-registry" }}
        secondary={{ label: "View programs", href: "/services/peer-tutoring" }}
      />
    </>
  );
}
