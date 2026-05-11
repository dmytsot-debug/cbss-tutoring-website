"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { primaryNav } from "@/lib/nav";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-baseline gap-2 focus-visible:outline-none"
          aria-label={`${site.name} home`}
        >
          <span className="font-serif text-xl font-medium tracking-tight text-foreground">
            CBSS
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Tutoring · Est. {site.founded}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {primaryNav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "link-underline transition-colors duration-300 hover:text-foreground",
                      active ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link href="/services/tutor-registry">Find a Tutor</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors duration-300 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <div className="mt-4 mb-8 flex items-baseline gap-2">
                <span className="font-serif text-xl font-medium">CBSS</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Tutoring
                </span>
              </div>
              <nav aria-label="Mobile navigation" className="flex-1">
                <ul className="flex flex-col gap-1">
                  {primaryNav.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="block rounded-xl px-4 py-3 font-serif text-2xl tracking-tight text-foreground transition-colors hover:bg-muted"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                      {item.children && (
                        <ul className="ml-4 mb-2 flex flex-col">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <SheetClose asChild>
                                <Link
                                  href={child.href}
                                  className="block rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                  {child.label}
                                </Link>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <ThemeToggle />
                <SheetClose asChild>
                  <Button asChild size="sm">
                    <Link href="/services/tutor-registry">Find a Tutor</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
