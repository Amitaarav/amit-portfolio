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
  link?: string
  github?: string
  live?: string
}

export interface ProjectsConfig {
  personal: ProjectItem[]
  client: ProjectItem[]
}

export const projects: ProjectsConfig = {
  personal: [
    // --- FULLSTACK ---
    {
      title: "MoneyTXN (Fullstack)",
      description: "Engineered a secure fintech platform enabling atomic P2P and merchant transactions. Implemented role-based access control (RBAC) and a webhook-driven banking on-ramp capable of processing 10K+ daily events. Utilized SQL locks and Prisma transactions to guarantee data integrity and prevent double-spending.",
      tech: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Zod", "NextAuth.js"],
      github: "https://github.com/Amitaarav/MoneyTxn/tree/master",
      live: "https://youtu.be/kPnwJ3iTnn8",
    },
    {
      title: "TriggerHub: Workflow Automation (Fullstack)",
      description: "Architected an event-driven automation platform for high-volume webhook processing. Features a drag-and-drop workflow builder via React Flow and a resilient Kafka-based pipeline ensuring 99.99% message delivery reliability across 100K+ daily triggers.",
      tech: ["Node.js", "Next.js", "TypeScript", "Postgres", "Kafka", "ReactFlow", "solana/web3.js", "Tailwind CSS", "nodemailer"],
      github: "https://github.com/Amitaarav/TriggerHub",
      live: "https://youtu.be/jo1lq8KTzI4",
    },
    {
      title: "BlogSphere: Edge-Optimized Platform",
      description: "Built a high-performance blogging engine using Cloudflare Workers and Hono for edge deployment. Leveraged Prisma Accelerate for optimized database queries, ensuring sub-100ms response times. Features include secure JWT authentication, rich text editing, and image management.",
      tech: ["Hono (Edge)", "Prisma Accelerate", "JWT", "React", "Vite", "Redux", "Tailwind CSS"],
      github: "https://github.com/Amitaarav/BlogWeb",
      live: "https://github.com/Amitaarav/BlogWeb",
    },
    {
      title: "Vector Shift Automation",
      description: "Created a visual workflow automation tool for analyzing graph-based systems. Used React Flow for dynamic node-link diagrams and FastAPI for backend logic, enabling real-time counting and validation of complex graph structures.",
      tech: ["JavaScript", "Reactjs", "React-flow", "Fast-API"],
      github: "https://github.com/Amitaarav/vector-flow",
      live: "https://youtu.be/l8Y3n6ZQrgo",
    },
    {
      title: "User Access Management System",
      description: "Implemented a robust RBAC system for internal tool security. Features comprehensive audit logging, secure JWT authentication, and a clean architecture design ensuring scalable user management.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "TypeORM", "JWT", "React", "Tailwind CSS"],
      github: "https://github.com/Amitaarav/Software-Access-Manager",
      live: "https://github.com/Amitaarav/Software-Access-Manager",
    },

    // --- BACKEND ---
    {
      title: "AI Camera Surveillance Platform",
      description: "Engineered a scalable, distributed worker platform for real-time camera supervision using Go and Redis Streams. Architected a 4-plane event-driven system featuring WebRTC egress for low-latency streaming, deployed seamlessly on Kubernetes. Integrated YOLOv8 inference in Python to ensure accurate and instantaneous threat detection across multiple concurrent video feeds.",
      tech: ["Go", "TypeSctrip", "Redis Streams", "Kubernetes", "WebRTC", "Python"],
      github: "https://github.com/Amitaarav/Camera-surveillance",
      live: "https://github.com/Amitaarav/ai-camera-surveillance",
    },
    {
      title: "Real-Time Exchange Platform",
      description: "Designed a high-frequency trading engine supporting 10K+ orders/sec with <50ms latency. Implemented Redis Pub/Sub for rapid order matching and WebSockets for live market data feeds, backed by TimescaleDB for time-series analytics.",
      tech: ["TypeScript", "Express.js", "Redis", "WebSockets", "TimescaleDB"],
      github: "https://github.com/Amitaarav/exchange-app",
      live: "https://github.com/Amitaarav/exchange-app",
    },

    // --- SOLANA & BLOCKCHAIN ---
    {
      title: "Aarav Wallet – Multi-Chain HD Wallet",
      description: "Built a non-custodial multi-chain HD wallet supporting Solana and Ethereum from a single BIP39 mnemonic — BIP44 derivation with Ed25519 (m/44'/501') for Solana and Secp256k1 (m/44'/60') for Ethereum, live SOL/USDC balance fetching via Solana RPC, and in-browser transaction signing with zero key persistence — private keys never leave browser memory, no backend, no localStorage, no telemetry.",
      tech: ["TypeScript", "React", "BIP39", "Solana Web3.js", "Ethereum"],
      github: "https://github.com/Amitaarav/Aarav-Wallet",
      live: "https://github.com/Amitaarav/Aarav-Wallet",
    },
    {
      title: "Solmit – Solana Web3 Dashboard",
      description: "Built a production-grade Solana Web3 dashboard using @solana/web3.js and @solana/wallet-adapter — live SOL/USD price feed via CoinGecko API, on-chain transaction history with real-time status tracking, Jupiter DEX integration for token swaps, cryptographic message signing via @noble/curves, and dynamic Mainnet/Devnet RPC switching — deployed on Vercel with a modular Service-Feature-UI architecture.",
      tech: ["React", "Solana Web3.js", "Jupiter DEX", "@noble/curves", "Vercel"],
      github: "https://github.com/Amitaarav/Solmit",
      live: "https://solmit.vercel.app/",
    },
    {
      title: "Solana Wallet dApp",
      description: "Built a fully functional Web3 wallet dApp integrating Solana Wallet Adapter. Enables seamless wallet connection, SOL airdrops, balance checks, and secure on-chain token transfers on the Devnet.",
      tech: ["React", "Tailwind CSS", "Solana Wallet Adapter", "Solana Web3.js"],
      github: "https://github.com/Amitaarav/DappA",
      live: "https://dapp-a.vercel.app/",
    },

    // --- FRONTEND ---
    {
      title: "NetflixGPT: AI-Powered Discovery",
      description: "Developed an immersive movie discovery interface combining real-time TMDb data with GPT-powered semantic search. Integrated Firebase authentication and hosting, delivering personalized recommendations and multilingual support in a responsive, Netflix-inspired UI.",
      tech: ["React", "Redux Toolkit", "Firebase", "TMDb API", "Tailwind CSS"],
      github: "https://github.com/Amitaarav/Netflix-GPT",
      live: "https://github.com/Amitaarav/Netflix-GPT",
    },
    {
      title: "Artistly.com (Frontend)",
      description: "Developed a pixel-perfect, responsive frontend for an artist booking platform. Utilized modern React patterns, Shadcn UI components, and Zod validation to creating a seamless booking experience and scalable codebase.",
      tech: ["Next.js (App Router)", "React", "Tailwind CSS", "shadcn/ui", "React Hook Form", "Zod"],
      github: "https://github.com/Amitaarav/artistly.com",
      live: "https://artistly-com-abof.vercel.app/",
    },
    {
      title: "Vettedge: Modular AI Dashboard",
      description: "Designed a modular frontend architecture for an enterprise AI platform. Utilized Framer Motion for fluid interactions and component-based design to showcase services like TalentPersona and DeepVet.",
      tech: ["Next.js 13 App Router", "React 19", "Tailwind CSS", "Framer Motion", "Lucide"],
      github: "https://github.com/Amitaarav/skillsCapital",
      live: "https://vettedge.vercel.app/",
    },
    {
      title: "MiniNUA E-commerce",
      description: "Developed a high-performance SPA e-commerce store with Redux Toolkit state management. Features category filtering, persistent cart state, optimized skeleton loading, and a responsive mobile-first design.",
      tech: ["React 19", "TypeScript", "Vite", "Redux Toolkit", "Tailwind CSS 4"],
      github: "https://github.com/Amitaarav/MiniNUA",
      live: "https://mini-nua.vercel.app/",
    }
  ],

  client: [
    {
      title: "Milanam Marketplace",
      description: "Hyperlocal service marketplace with private AWS S3 presigned URLs, typed RESTful APIs, and full JWT/OAuth authentication.",
      tech: ["Next.js", "Node.js", "React Query", "AWS", "Docker"],
      github: "https://milanam.com",
      live: "https://milanam.com",
    },
    {
      title: "Tedekstra UI Dashboard",
      description: "Real-time analytics dashboards integrated with NestJS backend APIs via typed DTO contracts and global exception filters.",
      tech: ["React.js", "NestJS", "Zustand"],
      github: "https://tedekstra.com",
      live: "https://tedekstra.com",
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
