import { cn } from "@/lib/utils";

type Props = {
  value: string;
  label: string;
  className?: string;
};

export function StatTile({ value, label, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 border-t border-border pt-6",
        className,
      )}
    >
      <span className="font-serif text-5xl leading-none tracking-tight text-foreground md:text-6xl">
        {value}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
