export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'welcome-to-novyx-labs',
    title: 'Welcome to Novyx Labs',
    date: '2026-01-14',
    excerpt: 'Introducing Novyx Labs LLC: Building persistent AI infrastructure for developers, starting with Novyx Core.',
    author: 'Novyx Labs Team',
    content: `# Welcome to Novyx Labs

We're building the persistent AI infrastructure that modern applications need.

## The Problem

Most AI systems forget. Every conversation starts from zero. Context disappears the moment you close the chat. For developers building AI products, this means constantly re-explaining, manually managing state, and watching valuable knowledge evaporate.

## Our Solution: Novyx Labs LLC

Novyx Labs is the umbrella for persistent AI infrastructure. We started with a single question: What if AI could remember everything?

### Novyx Core: The Flagship

Core is our answer—a persistent AI brain for enduring knowledge graphs. It's not just storage. It's:

- **Multi-tenant** by default (build SaaS from day one)
- **Versioned** natively (time-travel through knowledge)
- **Federation-ready** (sync across models and regions)
- **Production-grade** (live and ready to deploy)

### Available Extensions

- **Federation Sync**: Distribute knowledge graphs across systems
- **Enterprise Dashboard**: Monitor, visualize, and manage at scale

### Future Spokes

We're building more. AI Agent Framework and Developer SDK are coming in 2026.

## Built for Builders

Core powers the persistent memory layer so you can focus on your product, not infrastructure. Whether you're building a founder tool, an AI assistant, or an enterprise application—if you need AI that remembers, Core is your foundation.

## Open Development

We build in public. Our code is on GitHub. Our roadmap is driven by builders like you.

Welcome to Novyx Labs. Let's build AI that remembers.

---

*Ready to deploy? Check out [Novyx Core](/core) or view the code on [GitHub](https://github.com/novyxlabs).*
`
  },
  {
    slug: 'novyx-core-basics',
    title: 'Novyx Core Basics',
    date: '2026-01-14',
    excerpt: 'A technical introduction to Novyx Core: How persistent knowledge graphs work and why they matter for AI applications.',
    author: 'Novyx Labs Team',
    content: `# Novyx Core Basics

Understanding how Core powers persistent memory for AI applications.

## What is Core?

Core is a persistent AI brain—a knowledge graph database designed specifically for AI applications that need to remember.

Think of it as the missing memory layer between your AI model and your database. It stores knowledge as interconnected graphs that persist across sessions, learn from interactions, and grow intelligently.

## Core Capabilities

### 1. Persistent Memory

Traditional AI: Forgets everything after each conversation.  
**Core**: Remembers forever. Store a fact once, retrieve it anytime.

\`\`\`typescript
// Store knowledge that persists
await core.store({
  entity: "user_preference",
  data: { name: "Alex", role: "Developer", focus: "AI Infrastructure" }
});

// Retrieve it days later
const context = await core.query("What is Alex working on?");
// Returns: "Alex is a Developer focused on AI Infrastructure"
\`\`\`

### 2. Multi-Tenant Architecture

Build SaaS applications from day one. Each tenant gets isolated knowledge graphs with shared infrastructure.

\`\`\`typescript
// Tenant-isolated storage
await core.store({
  tenant: "company_a",
  entity: "project",
  data: { name: "Product Launch", status: "active" }
});
\`\`\`

### 3. Native Versioning

Time-travel through your knowledge graph. Every change is versioned. Rollback anytime.

\`\`\`typescript
// Query historical state
const pastState = await core.query("project status", { 
  timestamp: "2026-01-01" 
});
\`\`\`

### 4. Federation Ready

Sync knowledge graphs across models, regions, or systems. Distributed AI with shared memory.

\`\`\`typescript
// Enable federation
await core.federation.sync({
  target: "us-west-region",
  mode: "realtime"
});
\`\`\`

## How It Works

1. **Store**: Add knowledge to the graph
2. **Connect**: Core automatically links related information
3. **Query**: Natural language or structured queries
4. **Learn**: The graph grows smarter with each interaction

## Use Cases

- **AI Assistants**: Remember user preferences and context
- **Founder Tools**: Track projects, decisions, and learnings
- **Enterprise Apps**: Institutional knowledge that never gets lost
- **Multi-Agent Systems**: Shared memory across AI agents

## Getting Started

Core is production-ready. Three lines of code to get started:

\`\`\`typescript
import { NovyxCore } from '@novyx/core';

const core = new NovyxCore({ apiKey: process.env.NOVYX_API_KEY });
await core.store({ entity: "fact", data: { text: "Core remembers" } });
\`\`\`

## What's Next?

- Check out [Core documentation](/core)
- View code examples on [GitHub](https://github.com/novyxlabs)
- Deploy Federation Sync for distributed systems
- Add Enterprise Dashboard for monitoring

Core is live. Start building AI that remembers.

---

*Questions? [Contact us](/contact) or open an issue on GitHub.*
`
  },
  {
    slug: 'core-use-case-founder-tools',
    title: 'Core Use Case: Building Founder Tools',
    date: '2026-01-14',
    excerpt: 'How Novyx Core powers founder tools with persistent context, from project tracking to decision history.',
    author: 'Novyx Labs Team',
    content: `# Core Use Case: Building Founder Tools

How persistent memory transforms the founder experience.

## The Founder's Problem

Founders juggle dozens of projects, make hundreds of decisions, and track countless learnings. Traditional tools force you to:

- Re-enter context every time you switch apps
- Manually connect related information
- Remember what you decided weeks ago
- Repeat yourself to different AI assistants

**There's a better way.**

## Enter: Core-Powered Founder Tools

With Novyx Core as your persistence layer, founder tools can finally remember everything and connect the dots automatically.

## Real-World Example: Project Tracker

Let's build a simple founder project tracker with persistent memory.

### Setup

\`\`\`typescript
import { NovyxCore } from '@novyx/core';

const core = new NovyxCore({ 
  apiKey: process.env.NOVYX_API_KEY,
  tenant: "founder_workspace" 
});
\`\`\`

### Store Project Information

\`\`\`typescript
// Founder starts a new project
await core.store({
  entity: "project",
  data: {
    name: "Legal Tech SaaS",
    status: "ideation",
    started: "2026-01-10",
    goal: "Automate contract generation"
  }
});

// Core automatically remembers and connects
\`\`\`

### Track Decisions

\`\`\`typescript
// Founder makes a decision
await core.store({
  entity: "decision",
  data: {
    project: "Legal Tech SaaS",
    decision: "Use Next.js for faster iteration",
    reasoning: "Need to move quickly, familiar tech stack",
    date: "2026-01-12"
  }
});

// Core links this to the project automatically
\`\`\`

### Query Context

\`\`\`typescript
// Later, founder asks: "What decisions did I make for Legal Tech?"
const decisions = await core.query(
  "decisions for Legal Tech SaaS project"
);

// Core returns full context with reasoning
\`\`\`

### Connect Learnings

\`\`\`typescript
// Store a learning
await core.store({
  entity: "learning",
  data: {
    insight: "Founders need simple legal tools, not complex ones",
    source: "Customer interviews",
    applies_to: "Legal Tech SaaS"
  }
});

// Core connects this to project and decisions
\`\`\`

## The Power of Persistence

### Before Core

- Founder uses Notion for docs, Trello for tasks, random notes everywhere
- Switching between tools = lost context
- AI assistants start from scratch each time
- Decisions and learnings scattered and forgotten

### With Core

- **One source of truth**: All knowledge in persistent graph
- **Automatic connections**: Core links related information
- **Cross-session memory**: AI remembers everything
- **Multi-device sync**: Access context anywhere
- **Versioned history**: Time-travel through decisions

## Advanced Features

### Multi-Project Context

\`\`\`typescript
// Core tracks multiple projects and their relationships
await core.query("Show me all active projects and their status");

// Returns connected graph of all projects, decisions, learnings
\`\`\`

### Team Collaboration

\`\`\`typescript
// With multi-tenant, share context with team
await core.store({
  entity: "team_note",
  data: {
    from: "Founder",
    to: "Team",
    message: "We're pivoting to SMB market",
    context: "Based on last month's learnings"
  }
});
\`\`\`

### Federation for Distributed Teams

\`\`\`typescript
// Sync knowledge across regions
await core.federation.sync({
  target: "team_workspace_eu",
  entities: ["decisions", "learnings"]
});
\`\`\`

## Building Your Founder Tool

### 1. Choose Your Interface

- Web app (Next.js + Core)
- CLI tool (Node.js + Core)
- Slack bot (Core API)
- Mobile app (React Native + Core)

### 2. Define Your Schema

\`\`\`typescript
// Projects, decisions, learnings, goals, metrics, etc.
const schema = {
  projects: ["name", "status", "goal", "timeline"],
  decisions: ["decision", "reasoning", "impact"],
  learnings: ["insight", "source", "application"]
};
\`\`\`

### 3. Let Core Handle Memory

Core automatically:
- Stores and versions everything
- Links related entities
- Provides natural language queries
- Syncs across devices/teams

### 4. Add Extensions

- **Dashboard**: Visualize your project knowledge graph
- **Federation**: Sync with team or multiple workspaces
- **Analytics**: Track decision patterns and outcomes

## Why Core for Founder Tools?

1. **Speed to Market**: Don't build persistence from scratch
2. **Scale Built-In**: Multi-tenant from day one
3. **Smart by Default**: Automatic connections and learning
4. **Production-Ready**: Live and tested at scale

## Get Started

\`\`\`bash
npm install @novyx/core
\`\`\`

\`\`\`typescript
const core = new NovyxCore({ apiKey: YOUR_KEY });
// Start building
\`\`\`

## Resources

- [Core Documentation](/core)
- [GitHub Repository](https://github.com/novyxlabs)
- [API Reference](/core#api)
- [Example Apps](https://github.com/novyxlabs/examples)

---

*Building something with Core? Share it with us on [GitHub](https://github.com/novyxlabs) or [get in touch](/contact).*
`
  }
]
`
