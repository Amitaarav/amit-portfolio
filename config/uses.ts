/**
 * uses.ts
 * ─────────────────────────────────────────────────────────────
 * Data for the /uses-style window. Group your tools by category;
 * each item has a name and an optional short note.
 *
 * Categories and counts are fully flexible — the UI iterates over
 * whatever you provide.
 * ─────────────────────────────────────────────────────────────
 */

export interface UseItem {
  name: string
  /** Optional short descriptor shown in the faint mono style. */
  note?: string
}

export interface UseGroup {
  category: string
  items: UseItem[]
}

export const uses: UseGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript / JavaScript" },
      { name: "Go", note: "for distributed systems" },
      { name: "Python / C++ / Rust / SQL" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", note: "EC2, S3" },
      { name: "Docker & Kubernetes", note: "containerization" },
      { name: "GitHub Actions", note: "CI/CD" },
      { name: "Turborepo", note: "monorepos" },
    ],
  },
  {
    category: "Backend Stack",
    items: [
      { name: "Node.js + Express / NestJS" },
      { name: "Kafka", note: "event streaming" },
      { name: "Prisma", note: "ORM" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL & MySQL", note: "relational" },
      { name: "MongoDB", note: "NoSQL" },
      { name: "Redis", note: "caching & pub/sub" },
      { name: "TimescaleDB", note: "time-series" },
    ],
  },
  {
    category: "Frontend Stack",
    items: [
      { name: "React.js & Next.js" },
      { name: "TailwindCSS" },
      { name: "React Query & Zustand", note: "state & fetching" },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Jest & Vitest", note: "unit testing" },
      { name: "Cypress", note: "E2E" },
      { name: "k6", note: "load testing" },
    ],
  },
]
