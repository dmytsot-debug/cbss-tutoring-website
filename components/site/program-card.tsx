import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta?: string;
  className?: string;
};

export function ProgramCard({
  icon: Icon,
  title,
  description,
  href,
  cta = "Learn more",
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5",
        className,
      )}
    >
      <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="size-5" />
      </div>
      <h3 className="font-serif text-2xl leading-[1.2] tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted-foreground">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
      >
        <span className="link-underline">{cta}</span>
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </Card>
  );
}
