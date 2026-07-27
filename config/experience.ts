/**
 * experience.ts
 * ─────────────────────────────────────────────────────────────
 *  - `experience`        → full cards shown in the Experience window
 *                          (click one to open a modal with achievements + links).
 *  - `resumeExperience`  → condensed bullets shown on the Résumé window.
 *  - `education`         → single degree entry for the Résumé.
 *  - `teaching`          → free-form bullets for the Teaching section.
 *
 * The two experience lists are separate on purpose: the main site shows
 * every role, while the résumé groups multiple roles into summaries.
 * ─────────────────────────────────────────────────────────────
 */

export interface ExperienceItem {
  company: string
  role: string
  /** e.g. "Jun 2024 – Present" or "2023". */
  period: string
  /** One-line summary shown on the card. */
  description: string
  tech: string[]
  /** Bullet points shown in the modal. */
  achievements: string[]
  /** Optional related links shown at the bottom of the modal. */
  links?: { type: string; url: string; label: string }[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Milanam",
    role: "Full Stack Web Developer (Part-time)",
    period: "Sep 2025 – April 2026",
    description: "Founding engineer on a two-sided hyperlocal service marketplace, owning UI design to backend architecture.",
    tech: ["React", "TypeScript", "Next.js", "Node.js", "AWS", "Turborepo"],
    achievements: [
      "Owned UI design through to backend architecture end-to-end across a Turborepo monorepo.",
      "Designed and built RESTful APIs with typed contracts, global error handling, and request interceptors.",
      "Built responsive UI flows including a private AWS S3 file upload experience with presigned URLs.",
      "Implemented a complete auth system (JWT, refresh token rotation, Redis-backed revocation, NextAuth OAuth).",
      "Set up CI/CD (GitHub Actions + Docker) and deployed on AWS with zero-downtime releases.",
    ],
  },
  {
    company: "Tedekstra",
    role: "Junior Web Developer - Intern",
    period: "Nov 2025 – Dec 2025",
    description: "Converted legacy UI to modern React.js and Next.js, and built real-time analytics dashboards.",
    tech: ["React.js", "Next.js", "NestJS", "React Query", "Zustand"],
    achievements: [
      "Converted legacy UI to modern React.js and Next.js, reducing codebase complexity by 40% and establishing a reusable component library.",
      "Built real-time analytics dashboards with React Query and Zustand using stale-while-revalidate caching.",
      "Integrated frontend interfaces with NestJS backend APIs via typed DTO contracts and global exception filters.",
    ],
  },
]

// ── Résumé-only condensed version ────────────────────────────────────

export interface ResumeExperienceItem {
  company: string
  role: string
  period: string
  /** Optional list of sub-companies (e.g. for a contractor umbrella). */
  subRoles?: string[]
  bullets: string[]
}

export const resumeExperience: ResumeExperienceItem[] = [
  {
    company: "Milanam",
    role: "Full Stack Web Developer",
    period: "Sep 2025 – April 2026",
    bullets: [
      "Architected a two-sided hyperlocal service marketplace end-to-end using a Turborepo monorepo (React, Next.js, Node.js).",
      "Built complete authentication system with JWT, Redis revocation, and OAuth, securing 100% of endpoints.",
      "Set up CI/CD pipelines with GitHub Actions and Docker, reducing deployment steps by 70%.",
    ],
  },
  {
    company: "Tedekstra",
    role: "Junior Web Developer - Intern",
    period: "Nov 2025 – Dec 2025",
    bullets: [
      "Rebuilt legacy UI using Next.js and React, establishing a reusable component library across 30+ modules.",
      "Integrated real-time dashboards with NestJS APIs, typed DTOs, and global exception filters.",
    ],
  },
]

// ── Education + Teaching ─────────────────────────────────────────────

export interface EducationItem {
  school: string
  degree: string
  period: string
}

export const education: EducationItem = {
  school: "National Institute of Technology Calicut",
  degree: "Bachelor of Technology",
  period: "Nov 2021 – May 2025",
}

export const teaching: string[] = [
  "Contentstack Certified Developer – Headless CMS architecture, content modelling, and API-driven content delivery.",
  "Contentstack Hackathon – Built and shipped an API-integrated web application competing among developers nationwide.",
  "Solved 500+ DSA problems on LeetCode and Codeforces – strong problem-solving, algorithms, and data structures.",
]
