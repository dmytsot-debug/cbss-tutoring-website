import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";
import { footerNav } from "@/lib/nav";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span className="font-serif text-2xl font-medium tracking-tight text-foreground">
                CBSS Tutoring
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Est. {site.founded}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-[1.7] text-muted-foreground">
              {site.description}
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Instagram className="size-4" />@{site.instagram}
                </a>
              </li>
              <li>
                <a
                  href={site.schoolMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MapPin className="size-4" />
                  {site.schoolAddress}
                </a>
              </li>
            </ul>
          </div>

          {footerNav.map((column) => (
            <div key={column.heading} className="md:col-span-2">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {column.heading}
              </h4>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="max-w-3xl text-xs leading-[1.7] text-muted-foreground">
            <span className="font-mono uppercase tracking-[0.18em]">
              Land acknowledgment ·
            </span>{" "}
            {site.landAcknowledgment}
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. {site.school}, Coquitlam, BC.
            </p>
            <p className="font-mono uppercase tracking-[0.18em]">
              Made by students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
