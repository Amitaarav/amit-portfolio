/**
 * projects.ts
 * ─────────────────────────────────────────────────────────────
 * All projects shown in the Projects window.
 * Split into two lists: `personal` (side projects) and `client`
 * (paid / contracted work). Both use the same ProjectItem shape.
 *
 *  - `tech`   → array of tags rendered beneath the description.
 *  - `stars`  → optional — shown next to the title if present.
 *  - `status` → optional — rendered as a pill (e.g. "Paused").
 * ─────────────────────────────────────────────────────────────
 */

export interface ProjectItem {
  title: string
  description: string
  tech: string[]
  status?: string
  stars?: number
  link: string
}

export interface ProjectsConfig {
  personal: ProjectItem[]
  client: ProjectItem[]
}

export const projects: ProjectsConfig = {
  personal: [
    {
      title: "AI Camera Surveillance Platform",
      description: "Distributed worker platform for camera supervision with Go, Redis Streams, Kubernetes, and YOLOv8 inference.",
      tech: ["Go", "Redis Streams", "Kubernetes", "WebRTC", "Python"],
      link: "https://github.com/Amitaarav/ai-camera-surveillance",
    },
    {
      title: "Crypto Exchange Trading Engine",
      description: "High-throughput matching engine using Redis Pub/Sub sustaining 10K+ orders/sec and TimescaleDB for time-series kline queries.",
      tech: ["Redis Pub/Sub", "TimescaleDB", "TypeScript"],
      link: "https://github.com/Amitaarav/exchange-app",
    },
    {
      title: "MoneyTxn – P2P Wallet",
      description: "ACID-compliant P2P transaction layer with PostgreSQL row-level locking, BullMQ async reconciliation, and HMAC-SHA256 request signing.",
      tech: ["Next.js", "Express", "PostgreSQL", "Prisma", "BullMQ"],
      link: "https://github.com/Amitaarav/MoneyTxn/tree/master",
    },
    {
      title: "TriggerHub – Workflow Automation",
      description: "Implemented Transactional Outbox Pattern with Kafka messaging for guaranteed at-least-once delivery at 100K+ events/day.",
      tech: ["Node.js", "PostgreSQL", "Kafka", "Prisma"],
      link: "https://github.com/Amitaarav/TriggerHub",
    },
  ],

  client: [
    {
      title: "Milanam Marketplace",
      description: "Hyperlocal service marketplace with private AWS S3 presigned URLs, typed RESTful APIs, and full JWT/OAuth authentication.",
      tech: ["Next.js", "Node.js", "React Query", "AWS", "Docker"],
      link: "https://milanam.com",
    },
    {
      title: "Tedekstra UI Dashboard",
      description: "Real-time analytics dashboards integrated with NestJS backend APIs via typed DTO contracts and global exception filters.",
      tech: ["React.js", "NestJS", "Zustand"],
      link: "https://tedekstra.com",
    },
  ],
}

/** Résumé-only condensed project highlights (short names + long descriptions). */
export interface ResumeProjectItem {
  name: string
  desc: string
}

export const resumeProjects: ResumeProjectItem[] = [
  {
    name: "AI Camera Surveillance Platform",
    desc: "Engineered a Go-based distributed worker using Redis Streams and deployed on Kubernetes. Architected a 4-plane event-driven system with WebRTC egress and YOLOv8 inference.",
  },
  {
    name: "Crypto Exchange – Real-Time Trading Engine",
    desc: "Built a high-throughput matching engine sustaining 10K+ orders/sec with Redis Pub/Sub, integrating TimescaleDB for analytics queries optimized by continuous aggregates.",
  },
  {
    name: "MoneyTxn – P2P Digital Wallet Platform",
    desc: "Engineered ACID-compliant P2P transaction layer with PostgreSQL row-level locking and Turborepo monorepo, resolving async reconciliation using BullMQ.",
  },
  {
    name: "TriggerHub – Distributed Workflow Automation",
    desc: "Implemented Transactional Outbox Pattern with Apache Kafka, guaranteeing strict ordering across microservices processing 100K+ events/day.",
  },
]
