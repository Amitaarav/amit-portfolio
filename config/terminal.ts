/**
 * terminal.ts
 * ─────────────────────────────────────────────────────────────
 * Payloads for the interactive Terminal window. Each entry is the
 * content printed by a command or a virtual file. Lines are shown
 * verbatim — an empty string renders as a blank line.
 * ─────────────────────────────────────────────────────────────
 */

export interface TerminalConfig {
  /** Content of `cat about.txt`. */
  about: string[]
  /** Content of `cat skills.txt`. */
  skills: string[]
  /** Content of `cat experience.txt`. */
  experience: string[]
  /** Content of `cat contact.txt`. */
  contact: string[]
  /** Content of `cat resume.pdf`. */
  resume: string[]
  /** Output of `whoami`. */
  whoami: string[]
  /** Fake JSON returned by `curl github.com/<user>`. */
  githubJson: string
  /** Content printed by the `doc` command. */
  docText: string[]
}

export const terminal: TerminalConfig = {
  about: [
    "Name:   Amit Kumar Gupta",
    "Base:   NIT Calicut, India",
    "Role:   Full Stack & Backend Engineer",
    "",
    "I build scalable backend systems, real-time architectures,",
    "and event-driven platforms. Experienced in creating high-",
    "performance REST APIs, CI/CD, and robust infrastructure.",
  ],
  skills: [
    "Backend:   Node.js · Express.js · NestJS · Kafka · WebSockets",
    "Cloud:     AWS · Docker · Kubernetes · GitHub Actions · Turborepo",
    "Databases: PostgreSQL · MongoDB · Redis · MySQL · TimescaleDB",
    "Frontend:  React.js · Next.js · TailwindCSS · Zustand",
    "Testing:   Jest · Cypress · Vitest · k6",
    "Languages: TypeScript · JavaScript · Python · SQL · C++ · Rust · Go",
  ],
  experience: [
    "Milanam       Sep 2025 – April 2026  Full Stack Web Developer",
    "Tedekstra     Nov 2025 – Dec 2025    Junior Web Developer - Intern",
  ],
  contact: [
    "email:      amitgupta.nitc@gmail.com",
    "phone:      +91 6392995549",
    "github:     github.com/Amitaarav",
    "linkedin:   linkedin.com/in/amitkrgupta8",
    "leetcode:   leetcode.com/amit_gupta_512",
  ],
  resume: [
    "Opening résumé…",
    "→ linkedin.com/in/amitkrgupta8",
  ],
  whoami: [
    "Amit Kumar Gupta",
    "Full Stack & Backend Engineer · NIT Calicut '25",
    "",
    "Building scalable, real-time systems",
    "with Go, Node.js, TypeScript & Kafka.",
  ],
  githubJson: `{"login":"Amitaarav","name":"Amit Kumar Gupta","bio":"Full Stack & Backend Engineer","public_repos":104}`,
  docText: [
    "Portfolio Documentation",
    "───────────────────────",
    "Welcome to the terminal interface! This environment supports basic UNIX",
    "commands like cd, ls, cat, echo, pwd, clear, and more.",
    "",
    "Tips:",
    " - Use `help` to see all available commands.",
    " - You can navigate the virtual file system with `cd` and `ls`.",
    " - Read files with `cat` to discover more about my experience.",
    " - You can open graphical windows using the `open` command.",
    "",
    "Have fun exploring the system!"
  ],
}
