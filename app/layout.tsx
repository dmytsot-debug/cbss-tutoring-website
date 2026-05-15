import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { CursorTrail } from "@/components/site/cursor-trail";
import { site } from "@/lib/content";
import { siteUrl } from "@/lib/nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Free peer tutoring at Dr. Charles Best Secondary`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "tutoring",
    "peer tutoring",
    "Charles Best Secondary",
    "Coquitlam",
    "high school",
    "math tutoring",
    "calculus",
    "CBSS",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: site.name,
    description: site.description,
    url: siteUrl,
    siteName: site.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfcf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1424" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CursorTrail />
        </Providers>
      </body>
    </html>
  );
}
