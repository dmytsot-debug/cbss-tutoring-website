import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/nav";

const ROUTES = [
  "",
  "/about",
  "/about/team",
  "/about/newsletter",
  "/services",
  "/services/peer-tutoring",
  "/services/tutor-registry",
  "/resources",
  "/resources/governing-documents",
  "/resources/practice-exams",
  "/membership",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
