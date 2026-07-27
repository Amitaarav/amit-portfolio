/**
 * siteConfig.ts
 * ─────────────────────────────────────────────────────────────
 * Identity, social profiles, contact details, and page metadata.
 *
 * 👉 This is the FIRST file to edit when forking the template.
 * Everything else (projects, experience, skills, blogs) lives in
 * its own file inside /config so the data stays easy to maintain.
 * ─────────────────────────────────────────────────────────────
 */

// ── Types ───────────────────────────────────────────────────────────

export interface Personal {
  firstName: string
  lastName: string
  fullName: string
  /** Two-letter badge shown in the mobile status bar (e.g. "JD"). */
  initials: string
  /** Short role shown under your name in the Hero (e.g. "Frontend Engineer"). */
  role: string
  /** Longer title shown on the résumé header. */
  shortRole: string
  /** One-paragraph bio shown in the Hero. */
  tagline: string
  /** "City, Country" — displayed in Hero footer and résumé header. */
  location: string
  age: number | string
  /** Path (in /public) to your avatar image. */
  avatar: string
  /** Handle shown next to the avatar (no @). */
  username: string
}

export interface Social {
  github: string
  twitter: string
  /** Medium, Hashnode, personal blog, etc. */
  blog: string
  /** Bare GitHub username used in labels + API calls. */
  githubUsername: string
  /** Twitter/X handle, no @. */
  twitterHandle: string
}

export interface ContactRow {
  icon: "mail" | "calendar" | "twitter" | "github" | "linkedin"
  href: string
  label: string
  /** Short monospaced value shown on the right of each row. */
  mono: string
}

export interface Contact {
  email: string
  calendar: string
  heading: string
  subheading: string
  rows: ContactRow[]
}

export interface Seo {
  title: string
  description: string
}

export interface Features {
  /** If true, the arrow-arrow-b-a Konami code triggers an easter egg overlay. */
  konami: boolean
}

export interface SiteConfig {
  personal: Personal
  social: Social
  contact: Contact
  seo: Seo
  /** URL to an external résumé (Notion page, Google Doc, hosted PDF). */
  resumeLink: string
  features: Features
}

// ── EDIT BELOW ──────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  personal: {
    firstName: "Amit",
    lastName: "Kumar Gupta",
    fullName: "Amit Kumar Gupta",
    initials: "AK",
    role: "Full Stack & Backend Engineer",
    shortRole: "Full Stack & Backend Engineer",
    tagline:
      "I build scalable backend systems, real-time architectures, and event-driven platforms — with a focus on high-performance APIs, reliability under failure, and system design fundamentals. I also work with Web3 and blockchain, including Solana Web3.js, wallet integrations, Solidity basics, and Rust.",
    location: "Praygraj, India",
    age: 23,
    avatar: "/profile.png",
    username: "Amitaarav",
  },

  social: {
    github: "https://github.com/Amitaarav",
    twitter: "https://x.com/AmitAarav1205",
    blog: "https://leetcode.com/amit_gupta_512",
    githubUsername: "Amitaarav",
    twitterHandle: "AmitAarav1205",
  },

  contact: {
    email: "amitgupta.nitc@gmail.com",
    calendar: "https://cal.com/amitaarav",
    heading: "Let's Connect",
    subheading: "Open to full stack and backend engineering roles, collaborations, and building something impactful together.",
    rows: [
      { icon: "mail",     href: "mailto:amitgupta.nitc@gmail.com",           label: "Email",           mono: "amitgupta.nitc@gmail.com" },
      { icon: "github",   href: "https://github.com/Amitaarav",              label: "GitHub",          mono: "Amitaarav" },
      { icon: "linkedin",  href: "https://www.linkedin.com/in/amitkrgupta8",  label: "LinkedIn",        mono: "in/amitkrgupta8" },
    ],
  },

  seo: {
    title: "Amit Kumar Gupta",
    description: "Full Stack & Backend Engineer building scalable distributed systems, real-time architectures, and event-driven platforms. NIT Calicut '25.",
  },

  resumeLink: "https://www.linkedin.com/in/amitkrgupta8",

  features: {
    konami: true,
  },
}
