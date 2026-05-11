export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Newsletter", href: "/about/newsletter" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Overview", href: "/services" },
      { label: "Peer Tutoring", href: "/services/peer-tutoring" },
      { label: "Tutor Registry", href: "/services/tutor-registry" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Overview", href: "/resources" },
      { label: "Governing Documents", href: "/resources/governing-documents" },
      { label: "Practice Exams", href: "/resources/practice-exams" },
    ],
  },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Explore",
    items: [
      { label: "About", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Newsletter", href: "/about/newsletter" },
      { label: "Membership", href: "/membership" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "Peer Tutoring", href: "/services/peer-tutoring" },
      { label: "Tutor Registry", href: "/services/tutor-registry" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Governing Documents", href: "/resources/governing-documents" },
      { label: "Practice Exams", href: "/resources/practice-exams" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const siteUrl = "https://cbsstutoring.example.com";
