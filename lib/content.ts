import {
  BookOpen,
  Calculator,
  GraduationCap,
  Users,
  Heart,
  ShieldCheck,
  Lightbulb,
  Compass,
  FileText,
  ClipboardList,
  Mail,
  Instagram,
  MapPin,
  Calendar,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "CBSS Tutoring Services",
  shortName: "CBSS Tutoring",
  tagline: "Student-led tutoring at Dr. Charles Best Secondary.",
  description:
    "Charles Best Tutoring Services is a student-run, non-profit peer tutoring organization at Dr. Charles Best Secondary School in Coquitlam, BC.",
  email: "cbsstutors@gmail.com",
  instagram: "cbss_tutoring",
  instagramUrl: "https://www.instagram.com/cbss_tutoring",
  school: "Dr. Charles Best Secondary School",
  schoolAddress: "2525 Como Lake Ave, Coquitlam, BC V3J 3R8",
  schoolMapsUrl:
    "https://www.google.com/maps?q=Dr.+Charles+Best+Secondary+School,+Coquitlam,+BC",
  teacherSponsor: "Ms. Fewer",
  landAcknowledgment:
    "We acknowledge we operate on the unceded traditional territory of the Kwikwetlem First Nation, which lies within the shared territories of the Tsleil-Waututh, Katzie, Musqueam, Qayqayt, Squamish, and Sto':lo Nations.",
} as const;

export type Program = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  href: string;
  location?: string;
  schedule?: string;
  subjects?: string;
};

export const programs: Program[] = [
  {
    slug: "individual-tutoring",
    title: "Individual Tutoring",
    short: "One-on-one peer support tailored to your courses.",
    description:
      "Get paired with a senior student who has recently completed your course. Sessions are scheduled around your timetable and focus on the specific material you're working through.",
    icon: GraduationCap,
    href: "/services/peer-tutoring#individual",
    subjects: "All Charles Best courses, grades 9–12",
  },
  {
    slug: "math-tutorial-room",
    title: "Math Tutorial Room",
    short: "Walk-in math support, all five blocks.",
    description:
      "Open during blocks 1–5 for Math 9 and Math 10 students who want focused help on homework, test prep, or concepts they missed in class. No appointment needed.",
    icon: BookOpen,
    href: "/services/peer-tutoring#math-room",
    location: "On campus — see room number on the schedule board",
    schedule: "Blocks 1 through 5",
    subjects: "Math 9, Math 10",
  },
  {
    slug: "calculus-clinic",
    title: "Calculus Clinic",
    short: "Weekly drop-in for Calc 12 and AP Calculus.",
    description:
      "An after-school space for serious calculus students. Bring your problem sets — senior tutors who've passed AP Calc work through them with you.",
    icon: Calculator,
    href: "/services/peer-tutoring#calc-clinic",
    location: "On campus — see schedule board",
    schedule: "Mondays after school",
    subjects: "Pre-Calc 12, Calculus 12, AP Calculus AB, AP Calculus BC",
  },
];

export type Stat = {
  value: string;
  label: string;
  note?: string;
};

export const stats: Stat[] = [
  { value: "50+", label: "Active tutors" },
  { value: "30+", label: "Subjects covered" },
  { value: "500+", label: "Students helped" },
];

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const values: Value[] = [
  {
    title: "Inclusivity",
    description:
      "Tutoring is offered free of charge to every Charles Best student, in every subject we have a tutor for.",
    icon: Heart,
  },
  {
    title: "Academic Rigor",
    description:
      "We pair students with peers who have recently mastered the same material, so help is precise and current.",
    icon: ShieldCheck,
  },
  {
    title: "Leadership",
    description:
      "Tutors develop teaching, communication, and organizational skills that carry into post-secondary life.",
    icon: Lightbulb,
  },
  {
    title: "Community",
    description:
      "We build a culture where asking for help is normal and offering help is celebrated.",
    icon: Compass,
  },
];

export type Tutor = {
  name: string;
  grade: string;
  subjects: string[];
  bio: string;
};

export const tutors: Tutor[] = [
  {
    name: "Avery Chen",
    grade: "Grade 12",
    subjects: ["AP Calculus", "Pre-Calc 12", "Physics 12"],
    bio: "Three years in the tutorial room. Loves explaining limits with diagrams.",
  },
  {
    name: "Noor Rahimi",
    grade: "Grade 12",
    subjects: ["English 11", "English 12", "Social Studies 10"],
    bio: "Essay structure obsessive. Will read your draft twice and mean it.",
  },
  {
    name: "Lukas Park",
    grade: "Grade 11",
    subjects: ["Chemistry 11", "Chemistry 12", "Biology 11"],
    bio: "Brings flashcards to every session. Specializes in stoichiometry.",
  },
  {
    name: "Sasha Petrov",
    grade: "Grade 12",
    subjects: ["Math 9", "Math 10", "Foundations 11"],
    bio: "Patient with foundations. Believes nobody is bad at math, just under-taught.",
  },
  {
    name: "Maya Singh",
    grade: "Grade 11",
    subjects: ["French 11", "French 12", "Spanish 11"],
    bio: "Fluent in three languages. Tutors in conversation, not just grammar drills.",
  },
  {
    name: "Daniel Okafor",
    grade: "Grade 12",
    subjects: ["Physics 11", "Physics 12", "Pre-Calc 11"],
    bio: "Mechanics whiz. Draws free-body diagrams the size of a whiteboard.",
  },
];

export type NewsletterIssue = {
  date: string;
  title: string;
  preview: string;
  href: string;
};

export const newsletterIssues: NewsletterIssue[] = [
  {
    date: "March 2026",
    title: "Issue 09 — Final Push Before Exams",
    preview:
      "Study schedules from senior tutors, a teacher Q&A on managing exam stress, and the calculus clinic schedule for April.",
    href: "#",
  },
  {
    date: "December 2025",
    title: "Issue 08 — Winter Recap",
    preview:
      "Highlights from a record fall semester, profiles of three new tutors, and study spots open over the break.",
    href: "#",
  },
  {
    date: "October 2025",
    title: "Issue 07 — New Year, New Tutors",
    preview:
      "Welcome to the 2025–26 cohort. Read about our incoming tutors and how to book your first session.",
    href: "#",
  },
];

export type GoverningDoc = {
  title: string;
  updated: string;
  href: string;
};

export const governingDocs: GoverningDoc[] = [
  { title: "Constitution", updated: "September 2025", href: "#" },
  { title: "Tutor Code of Conduct", updated: "September 2025", href: "#" },
  { title: "Executive Roles & Responsibilities", updated: "June 2025", href: "#" },
  { title: "Annual Report 2024–2025", updated: "June 2025", href: "#" },
];

export type ExamSubject = {
  subject: string;
  exams: { title: string; href: string }[];
};

export const practiceExams: ExamSubject[] = [
  {
    subject: "Mathematics",
    exams: [
      { title: "Math 10 — Provincial Practice", href: "#" },
      { title: "Pre-Calculus 11 — Unit Reviews", href: "#" },
      { title: "Pre-Calculus 12 — Final Practice", href: "#" },
      { title: "Calculus 12 — Past Finals", href: "#" },
    ],
  },
  {
    subject: "Sciences",
    exams: [
      { title: "Science 10 — Provincial Practice", href: "#" },
      { title: "Chemistry 11 — Unit Reviews", href: "#" },
      { title: "Chemistry 12 — Past Provincials", href: "#" },
      { title: "Physics 11 — Mechanics Set", href: "#" },
      { title: "Physics 12 — Past Finals", href: "#" },
      { title: "Biology 12 — Unit Reviews", href: "#" },
    ],
  },
  {
    subject: "English & Humanities",
    exams: [
      { title: "English 10 — Literary Analysis Prompts", href: "#" },
      { title: "English 11 — Essay Practice", href: "#" },
      { title: "English Studies 12 — Past Provincials", href: "#" },
      { title: "Social Studies 10 — Review Questions", href: "#" },
    ],
  },
  {
    subject: "Languages",
    exams: [
      { title: "French 11 — Reading Practice", href: "#" },
      { title: "French 12 — Past Provincials", href: "#" },
      { title: "Spanish 11 — Vocabulary Sets", href: "#" },
    ],
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "How much does tutoring cost?",
    answer:
      "Nothing. CBSS Tutoring Services is a non-profit run entirely by Charles Best students. All tutoring sessions are free of charge.",
  },
  {
    question: "How do I find a tutor?",
    answer:
      "Browse the Tutor Registry to search by subject and grade. When you find a match, reach out using the contact information on their card, or email cbsstutors@gmail.com and we'll pair you.",
  },
  {
    question: "Where do sessions happen?",
    answer:
      "Most sessions happen on campus at Charles Best — in the library, the Math Tutorial Room (blocks 1–5), or the Calculus Clinic (Mondays after school). Some tutors offer remote sessions; that's listed on their profile.",
  },
  {
    question: "Can I become a tutor?",
    answer:
      "Yes. If you're a Charles Best student with strong marks in the subjects you'd like to tutor, head to the Membership page to apply. Applications open at the start of each semester.",
  },
];

export type MembershipBenefit = {
  title: string;
  description: string;
};

export const membershipBenefits: MembershipBenefit[] = [
  {
    title: "Verified volunteer hours",
    description:
      "Every session counts toward graduation and post-secondary applications.",
  },
  {
    title: "Leadership development",
    description:
      "Optional executive and committee roles for organizing programs and outreach.",
  },
  {
    title: "Letters of reference",
    description:
      "Reference letters from our teacher sponsor for active tutors in good standing.",
  },
  {
    title: "Subject community",
    description:
      "Work alongside students who care about the same subjects you do.",
  },
];

export const membershipSteps = [
  {
    n: "01",
    title: "Submit the application form",
    body: "Tell us which courses you've completed, the grades you earned, and the subjects you'd like to tutor.",
  },
  {
    n: "02",
    title: "Brief interview",
    body: "A short conversation with an executive to confirm fit, availability, and expectations.",
  },
  {
    n: "03",
    title: "Orientation",
    body: "Attend one onboarding session covering tutoring practices, communication, and logging hours.",
  },
  {
    n: "04",
    title: "Start tutoring",
    body: "You're added to the Tutor Registry and matched with your first students.",
  },
];

export const homeMission = {
  eyebrow: "Our mission",
  heading: "Tutoring that takes your courses seriously.",
  body: [
    "CBSS Tutoring is a student-run organization at Charles Best, founded on the belief that the best person to help you through a course is often someone who finished it a year ahead of you. We pair students with senior peers across every department, and we run free drop-in programs for the subjects where students most often need a second explanation.",
    "We're not a side project. The executive team is elected, the records are public, and the program runs under the supervision of Ms. Fewer.",
  ],
};

export const aboutPage = {
  eyebrow: "About",
  heading: "A student-run organization built on academic care.",
  intro:
    "We're a non-profit peer tutoring program at Dr. Charles Best Secondary School in Coquitlam, BC. Every tutor is a current Charles Best student. Every program is run by students. Every session is free.",
  mission: [
    "CBSS Tutoring exists because asking for help in school is harder than it should be. A senior who recently passed the same course can explain a concept in five minutes that took a teacher a week — not because the teacher was wrong, but because the senior remembers being stuck in exactly the same spot.",
    "We organize that institutional knowledge. We recruit tutors who are strong in their subjects and care about teaching. We run programs that meet students where they are — one-on-one when that's what's needed, walk-in for Math 9 and 10, weekly clinics for the harder math courses. We track our work, train our tutors, and operate under a published constitution, with the support of our teacher sponsor, Ms. Fewer.",
  ],
  quote: {
    text: "We pair students with peers who've recently mastered the same material — so the help is precise, current, and free.",
    attribution: "CBSS Tutoring executive team",
  },
};

export const peerTutoringPage = {
  eyebrow: "Services",
  heading: "Three programs, one purpose.",
  intro:
    "Every program is staffed by Charles Best students who have recently completed the courses they tutor. Choose the one that fits how you learn best.",
};

export const contact = {
  eyebrow: "Contact",
  heading: "Get in touch.",
  intro:
    "Questions about tutoring, applying, or partnering with us? The fastest way to reach us is email — we read every message.",
  channels: [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
    },
    {
      label: "Instagram",
      value: `@${site.instagram}`,
      href: site.instagramUrl,
      icon: Instagram,
    },
    {
      label: "Find us",
      value: site.schoolAddress,
      href: site.schoolMapsUrl,
      icon: MapPin,
    },
    {
      label: "Hours",
      value: "School hours, plus Mondays after school",
      icon: Calendar,
    },
  ],
};

export const resourcesPage = {
  eyebrow: "Resources",
  heading: "Documents, exams, and reference material.",
  intro:
    "Everything published by CBSS Tutoring, plus practice material curated by our tutors. Pick what you need.",
  cards: [
    {
      title: "Governing Documents",
      description:
        "Our constitution, code of conduct, executive roles, and annual reports.",
      href: "/resources/governing-documents",
      icon: FileText,
    },
    {
      title: "Practice Exams",
      description:
        "Practice tests and review questions organized by subject and grade.",
      href: "/resources/practice-exams",
      icon: ClipboardList,
    },
  ],
};

export const servicesPage = {
  eyebrow: "Services",
  heading: "How CBSS Tutoring helps.",
  intro:
    "Two complementary services. Peer Tutoring covers our scheduled programs and clinics. The Tutor Registry lets you browse and message individual tutors directly.",
  cards: [
    {
      title: "Peer Tutoring",
      description:
        "Individual sessions, the Math Tutorial Room, and the weekly Calculus Clinic.",
      href: "/services/peer-tutoring",
      icon: Users,
    },
    {
      title: "Tutor Registry",
      description:
        "Search active tutors by subject and grade. Reach out directly to book a session.",
      href: "/services/tutor-registry",
      icon: GraduationCap,
    },
  ],
};

export const howItWorks = [
  {
    n: "01",
    title: "Find a tutor",
    body: "Browse the Tutor Registry by subject and grade, or drop into one of our programs.",
  },
  {
    n: "02",
    title: "Book a session",
    body: "Message the tutor directly, or show up to the Math Tutorial Room or Calculus Clinic.",
  },
  {
    n: "03",
    title: "Improve your grades",
    body: "Work through the material with someone who recently learned it themselves.",
  },
];

export const homeTestimonial = {
  quote:
    "I went from a C in Pre-Calc 11 to an A by the end of the semester. My tutor explained the unit circle in a way that finally clicked.",
  attribution: "Charles Best student",
};
