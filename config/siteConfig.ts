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
  linkedin: string
  linkedinHandle: string
  leetcode: string
  leetcodeHandle: string
  codeforces: string
  codeforcesHandle: string
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
    shortRole: "Full Stack & Backend Engineer · NIT Calicut '25",
    tagline:
      "Full-stack engineer with a backend bias — specializing in " +
      "distributed systems, event-driven architecture, and high-throughput " +
      "data pipelines. Shipped a crypto exchange matching engine at " +
      "10K+ orders/sec, a Kafka-powered workflow engine at 100K+ events/day, " +
      "and a P2P digital wallet stress-tested at 5,000+ concurrent " +
      "transactions with zero data inconsistency. Served as founding " +
      "engineer and tech lead at an early-stage marketplace startup, " +
      "owning the full stack from database schema to deployment. " +
      "Currently diving deeper into Rust and the Solana ecosystem — " +
      "building on-chain integrations and learning the primitives " +
      "underneath the abstractions.",
    location: "Prayagraj, India",
    age: 24,
    avatar: "/profile.png",
    username: "Amitaarav",
  },

  social: {
    github: "https://github.com/Amitaarav",
    twitter: "https://x.com/AmitAarav1205",
    blog: "https://leetcode.com/u/amit_gupta_512/",
    githubUsername: "Amitaarav",
    twitterHandle: "AmitAarav1205",
    linkedin: "https://www.linkedin.com/in/amitkrgupta8",
    linkedinHandle: "amitkrgupta8",
    leetcode: "https://leetcode.com/u/amit_gupta_512/",
    leetcodeHandle: "amit_gupta_512",
    codeforces: "https://codeforces.com/profile/amitgupta556",
    codeforcesHandle: "amitgupta556",
  },

  contact: {
    email: "amitgupta.nitc@gmail.com",
    calendar: "https://cal.com/amitaarav",
    heading: "Let's Connect",
    subheading:
      "Open to full-stack and backend engineering roles, " +
      "collaborations, and building something impactful together.",
    rows: [
      {
        icon: "mail",
        href: "mailto:amitgupta.nitc@gmail.com",
        label: "Email",
        mono: "amitgupta.nitc@gmail.com",
      },
      {
        icon: "github",
        href: "https://github.com/Amitaarav",
        label: "GitHub",
        mono: "Amitaarav",
      },
      {
        icon: "linkedin",
        href: "https://www.linkedin.com/in/amitkrgupta8",
        label: "LinkedIn",
        mono: "in/amitkrgupta8",
      },
    ],
  },

  seo: {
    title: "Amit Kumar Gupta — Full Stack & Backend Engineer",
    description:
      "Full Stack & Backend Engineer specializing in distributed systems, " +
      "real-time architectures, and event-driven platforms. " +
      "Built systems processing 100K+ events/day and 10K+ orders/sec. " +
      "NIT Calicut '25.",
  },

  resumeLink:
    "https://drive.google.com/file/d/1xkX-Jd0rwaIs-uNFMOwU8iQdgvlvlyPO/view?usp=sharing",

  features: {
    konami: true,
  },
}