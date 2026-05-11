"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
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

const GRADES = ["All grades", "Grade 11", "Grade 12"];
const SUBJECT_OPTIONS = ["All subjects", ...Object.keys(FAMILIES)];

export function RegistryClient() {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("All subjects");
  const [grade, setGrade] = useState("All grades");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tutors.filter((t) => {
      if (grade !== "All grades" && t.grade !== grade) return false;
      if (subject !== "All subjects") {
        const matches = t.subjects.some((s) =>
          (FAMILIES[subject] ?? []).some((kw) => s.includes(kw)),
        );
        if (!matches) return false;
      }
      if (!q) return true;
      const haystack = [t.name, t.grade, ...t.subjects, t.bio]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, subject, grade]);

  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <label htmlFor="registry-search" className="sr-only">
                Search tutors
              </label>
              <Input
                id="registry-search"
                placeholder="Search by name, subject, or keyword"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <SelectChips
                label="Subject"
                value={subject}
                options={SUBJECT_OPTIONS}
                onChange={setSubject}
              />
              <SelectChips
                label="Grade"
                value={grade}
                options={GRADES}
                onChange={setGrade}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24 lg:px-12">
          <div className="mb-8 flex items-baseline justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "tutor" : "tutors"} found
            </p>
          </div>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground">
              No tutors match your filters. Try broadening the subject or
              clearing the search.
            </p>
          ) : (
            <Stagger
              key={`${subject}-${grade}-${query}`}
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
              Note ·
            </span>{" "}
            The registry is sourced from{" "}
            <code className="font-mono text-foreground">lib/content.ts</code>.
            Filtering and search are entirely client-side — there's no backend.
          </p>
        </div>
      </section>
    </>
  );
}

function SelectChips({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      <label className="sr-only" htmlFor={`select-${label}`}>
        {label}
      </label>
      <div className="relative">
        <select
          id={`select-${label}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "appearance-none rounded-full border border-input bg-background px-4 py-2 pr-9 text-sm text-foreground transition-colors duration-300 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 size-3 -translate-y-1/2 text-muted-foreground"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M3 4.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
