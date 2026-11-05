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
    role: "Founding Backend Engineer",
    period: "Sep 2025 – Apr 2026",
    description:
      "Founding backend engineer on a two-sided hyperlocal service marketplace, owning auth, data modelling, cloud infrastructure and CI/CD.",
    tech: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "OAuth 2.0/OIDC",
      "AWS S3",
      "Docker",
      "GitHub Actions",
      "Turborepo",
    ],
    achievements: [
      "Secured authentication with OAuth 2.0/OIDC (PKCE flow, JWKS verification, single-use exchange codes, refresh-token revocation) and Redis-backed distributed rate limiting – zero post-launch security incidents across 100% of endpoints.",
      "Optimised database performance by migrating from MongoDB to PostgreSQL – modelled 10+ relational entities with composite indexes, soft-delete strategies and HMAC-encrypted PII, reducing query latency by 45%.",
      "Designed a type-safe generic BaseRepository over Prisma ORM (generics, dependency inversion, pagination, structured error handling), cutting cross-service boilerplate by 60% across 5+ domain services.",
      "Provisioned AWS S3 with presigned uploads, least-privilege IAM and post-upload HEAD validation.",
      "Automated GitHub Actions + Docker CI/CD on AWS, reducing manual deployment steps by 70%.",
    ],
  },
  {
    company: "Tedekstra",
    role: "Software Engineer Intern",
    period: "Nov 2025 – Dec 2025",
    description:
      "Delivered a full CRM in NestJS with WhatsApp/Meta lead capture, and modernised legacy interfaces to React.js and Next.js.",
    tech: [
      "NestJS",
      "React.js",
      "Next.js",
      "React Query",
      "Zustand",
      "Azure",
      "WhatsApp Business API",
    ],
    achievements: [
      "Delivered a full CRM in NestJS across JIRA sprints – integrated WhatsApp Business API and Meta API for lead capture, built bulk CSV ingestion pipelines for lead import, and implemented RBAC with role-scoped data access across 4+ user tiers.",
      "Provisioned Azure Blob Storage for document handling and Azure Notification Hub for push delivery; typed DTO contracts, global exception filters and request interceptors cut redundant network calls by 30% and improved production error traceability.",
      "Modernised legacy interfaces to React.js + Next.js with React Query stale-while-revalidate caching and Zustand state management, reducing codebase complexity by 40% across 30+ modules.",
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
    role: "Founding Backend Engineer",
    period: "Sep 2025 – Apr 2026",
    bullets: [
      "Secured auth with OAuth 2.0/OIDC (PKCE, JWKS, refresh-token revocation) and Redis-backed rate limiting across 100% of endpoints.",
      "Migrated MongoDB to PostgreSQL with 10+ relational entities and composite indexes, cutting query latency by 45%.",
      "Built a generic Prisma BaseRepository (60% less boilerplate across 5+ services) and automated CI/CD with GitHub Actions + Docker, reducing manual deployment steps by 70%.",
    ],
  },
  {
    company: "Tedekstra",
    role: "Software Engineer Intern",
    period: "Nov 2025 – Dec 2025",
    bullets: [
      "Delivered a NestJS CRM with WhatsApp Business/Meta lead capture, bulk CSV ingestion and RBAC across 4+ user tiers.",
      "Provisioned Azure Blob Storage and Notification Hub; typed DTOs and interceptors cut redundant network calls by 30%.",
      "Modernised legacy UI to React.js + Next.js, reducing codebase complexity by 40% across 30+ modules.",
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
  school: "National Institute of Technology (NIT) Calicut",
  degree: "Bachelor of Technology",
  period: "Nov 2021 – May 2025",
}

export const teaching: string[] = [
  "Contentstack Certified Developer – Headless CMS architecture, content modelling, and API-driven content delivery.",
  "Contentstack Hackathon – Built and shipped an API-integrated web application competing among developers nationwide.",
  "Solved 500+ DSA problems on LeetCode and Codeforces – strong problem-solving, algorithms, and data structures.",
]
