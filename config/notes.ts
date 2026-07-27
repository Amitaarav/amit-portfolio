/**
 * notes.ts
 * ─────────────────────────────────────────────────────────────
 * Short, informal journal-style notes rendered in the Notes
 * window. Paragraphs are separated by blank lines (\\n\\n) — single
 * newlines are preserved as line breaks.
 *
 * Sort order is as written — newest first is the convention.
 * ─────────────────────────────────────────────────────────────
 */

export interface NoteItem {
  /** Display date, e.g. "Mar 2026". */
  date: string
  /** Body text. Separate paragraphs with a blank line. */
  body: string
}

export const notes: NoteItem[] = [
  {
    date: "Jul 2026",
    body: `Wrapped up the AI Camera Surveillance Platform. Scaling 
goroutine supervision per camera and dealing with Redis Streams consumer 
groups was an incredible dive into Go concurrency and K8s deployments.`,
  },
  {
    date: "Apr 2026",
    body: `Finished my tenure at Milanam. Building a two-sided 
hyperlocal marketplace from scratch and setting up the whole AWS + Docker 
CI/CD pipeline taught me so much about owning full-stack architecture.`,
  },
  {
    date: "Aug 2025",
    body: `Crypto Exchange matching engine is sustaining 10K+ orders/sec. 
TimescaleDB's continuous aggregates brought a 40% performance boost to 
our time-series kline queries. Huge win for analytics.`,
  },
  {
    date: "Jun 2025",
    body: `Stress-tested MoneyTxn at 5,000+ concurrent transactions. 
PostgreSQL row-level locking + HMAC-SHA256 request signing kept data 
100% consistent with zero double-spends. ACID compliance works.`,
  },
]
