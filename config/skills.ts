/**
 * skills.ts
 * ─────────────────────────────────────────────────────────────
 * Skills grouped by category. Keys become category labels on the
 * left; values become the chip list on the right.
 *
 * Add, remove, or rename categories freely — the Résumé section
 * iterates over Object.entries(skills), so the UI adapts.
 * ─────────────────────────────────────────────────────────────
 */

export type Skills = Record<string, string[]>

export const skills: Skills = {
  "Backend & APIs":    ["Node.js", "TypeScript", "Express.js", "NestJS", "RESTful APIs", "WebSockets", "Kafka", "Prisma ORM"],
  "Cloud & DevOps":    ["AWS (S3, EC2)", "Docker", "Kubernetes", "GitHub Actions CI/CD", "Nginx", "Vercel", "Turborepo"],
  "Databases":         ["PostgreSQL", "MongoDB", "Redis", "MySQL", "TimescaleDB"],
  "Frontend":          ["React.js", "Next.js", "TailwindCSS", "React Query", "Zustand"],
  "Testing":           ["Jest", "Cypress", "Vitest", "k6 (Load Testing)"],
  "Languages":         ["TypeScript", "JavaScript", "Python", "SQL", "C++", "Rust", "Go"],
}
