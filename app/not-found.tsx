import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-start justify-center px-6 py-24 md:px-8 lg:px-12">
      <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
        404 · Not found
      </span>
      <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
        This page isn&rsquo;t on our timetable.
      </h1>
      <p className="mt-6 max-w-prose text-base leading-[1.7] text-muted-foreground sm:text-lg">
        Either the link is wrong, the page moved, or it never existed. Try one
        of these instead — or email us if you think this is a mistake.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/services/tutor-registry">Find a Tutor</Link>
        </Button>
      </div>
    </section>
  );
}
