/**
 * experience.ts
 * ─────────────────────────────────────────────────────────────
 *  - `experience`        → full cards shown in the Experience window
 *                          (click one to open a modal with achievements + links).
 *  - `resumeExperience`  → bullets shown on the Résumé window (verbatim from resume).
 *  - `education`         → single degree entry for the Résumé.
 *  - `teaching`          → free-form bullets for the Achievements & Certifications section.
 *
 * Wording below mirrors the PDF résumé exactly.
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

const milanamBullets: string[] = [
  "Secured authentication with OAuth 2.0/OIDC (PKCE flow, JWKS verification, single-use exchange codes, refresh-token revocation) and Redis-backed distributed rate limiting – zero post-launch security incidents across 100% of endpoints.",
  "Optimised database performance migrating from MongoDB to PostgreSQL – modelled 10+ relational entities with composite indexes, soft-delete strategies, and HMAC-encrypted PII; reduced query latency by 45%.",
  "Designed a type-safe generic BaseRepository over Prisma ORM (generics, dependency inversion, pagination, structured error handling) – cut cross-service boilerplate by 60% across 5+ domain services.",
  "Provisioned AWS S3 with presigned uploads, least-privilege IAM, and post-upload HEAD validation; automated GitHub Actions + Docker CI/CD on AWS reducing manual deployment steps by 70%.",
]

const tedekstraBullets: string[] = [
  "Delivered a full CRM in NestJS across JIRA sprints – integrated WhatsApp Business API and Meta API for lead capture, built bulk CSV ingestion pipelines for lead import, and implemented RBAC with role-scoped data access across 4+ user tiers.",
  "Provisioned Azure Blob Storage for document handling and Azure Notification Hub for push delivery – typed DTO contracts, global exception filters, and request interceptors cut redundant network calls by 30% and improved production error traceability.",
  "Modernised legacy interfaces to React.js + Next.js with React Query stale-while-revalidate caching and Zustand state management – reduced codebase complexity by 40% across 30+ modules.",
]

export const experience: ExperienceItem[] = [
  {
    company: "Milanam",
    role: "Founding Backend Engineer",
    period: "Sep 2025 – Apr 2026",
    description:
      "Secured authentication with OAuth 2.0/OIDC and Redis-backed distributed rate limiting; migrated MongoDB to PostgreSQL and automated GitHub Actions + Docker CI/CD on AWS.",
    tech: [
      "OAuth 2.0/OIDC",
      "JWT",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "AWS (S3, IAM)",
      "Docker",
      "GitHub Actions CI/CD",
      "Turborepo",
    ],
    achievements: milanamBullets,
  },
  {
    company: "Tedekstra",
    role: "Software Engineer Intern",
    period: "Nov 2025 – Dec 2025",
    description:
      "Delivered a full CRM in NestJS with WhatsApp Business API and Meta API integration; modernised legacy interfaces to React.js + Next.js.",
    tech: [
      "NestJS",
      "WhatsApp Business API",
      "Meta API",
      "RBAC",
      "Azure Blob Storage",
      "Azure Notification Hub",
      "React.js",
      "Next.js",
      "React Query",
      "Zustand",
    ],
    achievements: tedekstraBullets,
  },
]

// ── Résumé-only version (verbatim from resume) ───────────────────────

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
    company: "Milanam (Remote)",
    role: "Founding Backend Engineer",
    period: "Sep 2025 – Apr 2026",
    bullets: milanamBullets,
  },
  {
    company: "Tedekstra (Remote)",
    role: "Software Engineer Intern",
    period: "Nov 2025 – Dec 2025",
    bullets: tedekstraBullets,
  },
]

// ── Education + Achievements & Certifications ────────────────────────

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
  "Contentstack Certified Developer",
  "Contentstack Hackathon participant (API-integrated application, nationwide)",
  "Solved 500+ DSA problems on LeetCode and Codeforces",
]
