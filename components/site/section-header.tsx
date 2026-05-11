import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";

type Props = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  align = "left",
  className,
  as = "h2",
}: Props) {
  const HeadingTag = as;
  return (
    <FadeIn
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </span>
      )}
      <HeadingTag
        className={cn(
          "font-serif tracking-tight text-foreground",
          as === "h1"
            ? "text-4xl leading-[1.1] sm:text-5xl md:text-6xl"
            : "text-3xl leading-[1.1] sm:text-4xl md:text-5xl",
        )}
      >
        {heading}
      </HeadingTag>
      {intro && (
        <p className="max-w-prose text-base leading-[1.7] text-muted-foreground sm:text-lg">
          {intro}
        </p>
      )}
    </FadeIn>
  );
}
