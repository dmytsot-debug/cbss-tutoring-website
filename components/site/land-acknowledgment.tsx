import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "block" | "inline";
};

export function LandAcknowledgment({
  className,
  variant = "block",
}: Props) {
  if (variant === "inline") {
    return (
      <p
        className={cn(
          "text-xs leading-[1.7] text-muted-foreground",
          className,
        )}
      >
        <span className="font-mono uppercase tracking-[0.18em]">
          Land acknowledgment ·
        </span>{" "}
        {site.landAcknowledgment}
      </p>
    );
  }

  return (
    <aside
      className={cn(
        "rounded-2xl border border-border bg-muted/50 p-8 md:p-10",
        className,
      )}
      aria-labelledby="land-ack-heading"
    >
      <h3
        id="land-ack-heading"
        className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
      >
        Land Acknowledgment
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-[1.7] text-foreground">
        {site.landAcknowledgment}
      </p>
    </aside>
  );
}
