"use client";

import { useMemo, useState } from "react";
import { TutorCard } from "@/components/site/tutor-card";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { tutors } from "@/lib/content";
import { cn } from "@/lib/utils";

const FAMILIES: Record<string, string[]> = {
  Math: ["Math", "Calc", "Pre-Calc", "Foundations"],
  Sciences: ["Physics", "Chemistry", "Biology", "Science"],
  English: ["English"],
  Humanities: ["Social", "History"],
  Languages: ["French", "Spanish"],
};

function subjectMatchesFamily(subject: string, family: string) {
  return (FAMILIES[family] ?? []).some((kw) => subject.includes(kw));
}

export function TeamGrid() {
  const [filter, setFilter] = useState<string>("All");
  const families = useMemo(() => ["All", ...Object.keys(FAMILIES)], []);

  const filtered = useMemo(() => {
    if (filter === "All") return tutors;
    return tutors.filter((t) =>
      t.subjects.some((s) => subjectMatchesFamily(s, filter)),
    );
  }, [filter]);

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Filter by subject
            </span>
            {families.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  filter === f
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-foreground hover:bg-muted",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24 lg:px-12">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground">
              No tutors match this filter yet. Try another subject family.
            </p>
          ) : (
            <Stagger
              key={filter}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((t) => (
                <StaggerItem key={t.name}>
                  <TutorCard tutor={t} />
                </StaggerItem>
              ))}
            </Stagger>
          )}
          <p className="mt-12 max-w-prose text-sm leading-[1.7] text-muted-foreground">
            <span className="font-mono uppercase tracking-[0.18em] text-accent">
              Note for editors ·
            </span>{" "}
            Tutor list lives in{" "}
            <code className="font-mono text-foreground">lib/content.ts</code>{" "}
            under the <code className="font-mono text-foreground">tutors</code>{" "}
            array. Add new entries there to update this page.
          </p>
        </div>
      </section>
    </>
  );
}
