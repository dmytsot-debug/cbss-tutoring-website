import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Tutor } from "@/lib/content";

type Props = {
  tutor: Tutor;
  className?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TutorCard({ tutor, className }: Props) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div
          aria-hidden
          className="flex size-14 items-center justify-center rounded-full bg-accent/15 font-serif text-lg tracking-tight text-foreground"
        >
          {initials(tutor.name)}
        </div>
        <div>
          <h3 className="font-serif text-xl leading-tight tracking-tight text-foreground">
            {tutor.name}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {tutor.grade}
          </p>
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {tutor.subjects.map((s) => (
          <li
            key={s}
            className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-foreground"
          >
            {s}
          </li>
        ))}
      </ul>

      <p className="mt-6 flex-1 text-sm leading-[1.7] text-muted-foreground">
        {tutor.bio}
      </p>
    </Card>
  );
}
