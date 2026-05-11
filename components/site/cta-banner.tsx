import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

type Props = {
  eyebrow?: string;
  heading: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CTABanner({
  eyebrow = "Get started",
  heading,
  body,
  primary = { label: "Find a Tutor", href: "/services/tutor-registry" },
  secondary = { label: "Become a Tutor", href: "/membership" },
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28 lg:px-12">
      <FadeIn className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-primary-foreground sm:px-12 md:px-16 md:py-24">
        <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              {heading}
            </h2>
            {body && (
              <p className="mt-6 max-w-xl text-base leading-[1.7] text-primary-foreground/70 sm:text-lg">
                {body}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 md:col-span-4 md:justify-end">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-primary-foreground border-primary-foreground/40 hover:border-primary-foreground"
            >
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
