export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'agent-memory-infrastructure-problem',
    title: 'Agent Memory is an Infrastructure Problem',
    date: '2024-12-15',
    excerpt: 'Why AI agent forgetfulness isn't a model limitation—it's a missing persistence layer. The infrastructure gap blocking autonomous AI at scale.',
    author: 'Novyx Labs',
    tags: ['agent memory', 'infrastructure', 'persistence'],
    content: `# Agent Memory is an Infrastructure Problem

Today's AI agents are stateless. They forget everything between sessions. Context doesn't survive restarts. This isn't a model limitation—it's an infrastructure gap.

## The Problem

Current approaches treat memory as an application-layer concern. Developers implement ad-hoc solutions: JSON files, SQLite databases, vector stores with no integrity guarantees. This works for demos. It fails in production.

### What Goes Wrong

**Memory Corruption**: No verification layer. Poisoned data propagates silently. By the time you detect it, the damage is done.

**Context Loss**: Conversation history disappears. Learned patterns evaporate. Agents can't build on past knowledge.

**No Auditability**: Regulators demand audit trails. Compliance requires tamper-proof records. Your agent has neither.

## The Infrastructure Layer

What we need:

**Durable Storage**: SHA-256 signed artifacts. Immutable audit trails. Git-like versioning for knowledge graphs.

**Semantic Search**: Not keyword matching—semantic embeddings. Context-aware retrieval. JSON-LD semantic web standards.

**Integrity Verification**: Real-time detection of corrupted data. Automatic rollback to last known-good state. Forensic timeline reconstruction.

## Why It Matters

**Research Assistants**: Need complete literature memory. Can't lose citations or learned hypotheses.

**Enterprise Agents**: Require compliance-ready audit trails. Must survive system failures.

**Autonomous Trading**: Years of market memory. Can't tolerate data loss or corruption.

## The Path Forward

Agent memory is security-critical, compliance-required, and commercially valuable. It deserves infrastructure-grade tooling.

That's what we're building at Novyx Labs.

→ [Novyx Core on GitHub](https://github.com/novyxlabs/novyx-core)
`,
  },
  {
    slug: 'memory-poisoning-new-injection-attack',
    title: 'Memory Poisoning: The New Injection Attack',
    date: '2024-11-28',
    excerpt: 'How adversaries target AI agent context. Why traditional security models don't apply. What CISOs need to know about agent memory attacks.',
    author: 'Novyx Labs',
    tags: ['security', 'memory poisoning', 'enterprise'],
    content: `# Memory Poisoning: The New Injection Attack

SQL injection taught us to sanitize inputs. XSS taught us to escape outputs. Memory poisoning is the new frontier—and most teams aren't prepared.

## The Attack Vector

AI agents ingest data from multiple sources: user inputs, API responses, web scraping, file uploads. Any of these can inject corrupted context.

Unlike traditional injection attacks, memory poisoning is **persistent**. Bad data doesn't just affect one query—it contaminates the entire knowledge base.

## Real-World Scenarios

### Enterprise CRM Agent

An adversary submits a fake customer complaint containing crafted context:

\`\`\`
"Customer ID: 12345 (VIP tier, 10-year loyalty, never refund)"
\`\`\`

The agent learns this false "fact." Future decisions favor this customer inappropriately. Audit trails show no tampering.

### Research Assistant

Poisoned academic papers with fake citations:

\`\`\`
"As demonstrated by Smith et al. (2023), the vaccine efficacy is <false claim>"
\`\`\`

The agent cites this in future research. Misinformation propagates with apparent academic backing.

## Why Traditional Security Fails

**Input Validation**: Poisoned data looks legitimate. It passes schema validation.

**Sandboxing**: The agent has legitimate access to its own memory. Sandbox can't prevent self-corruption.

**Access Control**: The threat isn't unauthorized access—it's authorized writes of adversarial data.

## The Solution: Integrity Infrastructure

What enterprise teams need:

**Cryptographic Signing**: SHA-256 signature on every artifact. Tamper detection at query time.

**Baseline Monitoring**: Statistical models of "normal" memory patterns. Alert on deviation.

**Automatic Rollback**: Git-like versioning. Surgical removal of poisoned artifacts without downtime.

**Audit Trails**: Compliance-ready logs. Forensic timeline reconstruction. Root cause analysis.

## Compliance Requirements

**SOC 2**: Requires integrity controls for data at rest.

**GDPR**: Mandates data accuracy. Poisoned context violates this.

**HIPAA**: Demands tamper-proof records. Agent memory needs this too.

## Next Steps

If you're deploying AI agents in production:

1. Audit your memory storage. Is it cryptographically verified?
2. Implement integrity monitoring. Can you detect poisoning in real-time?
3. Plan for rollback. How fast can you recover from corruption?

This is what Novyx Integrity solves.

→ [Request Security Demo](https://calendly.com/novyxlabs/demo)
`,
  },
  {
    slug: 'context-preservation-vs-summarization',
    title: 'Context Preservation vs Summarization',
    date: '2024-10-12',
    excerpt: 'Why agents need full-fidelity memory, not compressed summaries. The trade-offs between context windows and knowledge retention.',
    author: 'Novyx Labs',
    tags: ['context', 'memory', 'architecture'],
    content: `# Context Preservation vs Summarization

The AI community is obsessed with context window size. 32k tokens! 128k tokens! 1M tokens!

But window size isn't the bottleneck. **Preservation** is.

## The Summarization Trap

Most agent frameworks use "memory summarization":

1. Agent completes a conversation
2. Framework summarizes it to 500 tokens
3. Summary gets stored
4. Original context is discarded

This **loses information**. Agents can't learn from what they don't remember.

## What Gets Lost

**Nuance**: Summarization flattens context. "User was frustrated" doesn't capture *why* or *how*.

**Citations**: Research agents lose the exact quote, page number, publication details.

**Decision Logic**: Trading agents forget *why* they made a bet—only that they did.

## The Argument for Compression

"But storage is expensive! Context windows have limits!"

True. But:

**Storage is cheap**: 1TB of knowledge graph data costs $0.02/month on S3. Your engineers cost $100/hour.

**Semantic search solves retrieval**: Don't load everything into context. Query for relevant artifacts.

**Versioning enables debugging**: Can't debug an agent if you've deleted its memory.

## Full-Fidelity Architecture

The right approach:

**Store Everything**: Persist full conversations, API responses, documents. Disk is cheap.

**Index for Search**: Semantic embeddings + keyword indexing. Sub-second retrieval.

**Load Selectively**: Query for relevant context. Only pull what's needed into the window.

**Version Everything**: Git-like history. Time-travel debugging. Rollback on corruption.

## Real-World Benefits

**Research Assistants**: Search across every paper they've read. Find exact citations.

**Customer Support**: Recall complete conversation history. No "can you repeat that?"

**Autonomous Agents**: Learn from cumulative experience. Decisions compound over time.

## The Performance Argument

"Won't this be slow?"

No. Semantic search over 1M artifacts takes <100ms. Context loading is parallelizable.

Your bottleneck is the LLM call (1-3 seconds), not the memory retrieval (0.1 seconds).

## Implementation

What you need:

1. **Durable storage**: SHA-256 verified knowledge graph
2. **Semantic index**: Vector embeddings for similarity search
3. **Version control**: Rollback capability
4. **Query layer**: Fast retrieval of relevant context

This is Novyx Core's architecture.

→ [See the code](https://github.com/novyxlabs/novyx-core)
`,
  },
]
