/**
 * links.ts
 * ─────────────────────────────────────────────────────────────
 * Curated external reading list shown in the LinksWidget on the
 * desktop. Each entry is an outbound link with a short tag used
 * for display only.
 * ─────────────────────────────────────────────────────────────
 */

export interface LinkItem {
  title: string
  author: string
  url: string
  /** Freeform short label displayed under the author (e.g. "rust"). */
  tag: string
}

export const links: LinkItem[] = [
  { title: "Designing Data-Intensive Apps",   author: "Martin Kleppmann",  url: "https://dataintensive.net",                                 tag: "systems" },
  { title: "Solana Program Library",          author: "Solana Labs",       url: "https://spl.solana.com",                                    tag: "solana" },
  { title: "Fearless Concurrency",            author: "The Rust Book",     url: "https://doc.rust-lang.org/book/ch16-00-concurrency.html",   tag: "rust" },
  { title: "System Design Primer",            author: "Donne Martin",      url: "https://github.com/donnemartin/system-design-primer",       tag: "architecture" },
  { title: "Kafka: The Definitive Guide",     author: "Confluent",         url: "https://www.confluent.io/resources/kafka-the-definitive-guide/", tag: "kafka" },
]
