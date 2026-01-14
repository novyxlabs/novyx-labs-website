import { Metadata } from 'next'
import Link from 'next/link'
import { Database, Shield, Sparkles, Zap, Network, FileCode, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products - Infrastructure for Autonomous AI | Novyx Labs',
  description: 'Durable, verifiable, production-ready infrastructure for autonomous AI systems. Knowledge graphs, integrity verification, and more.',
  keywords: ['AI infrastructure', 'agent memory', 'memory verification', 'knowledge graph', 'durable AI'],
}

const products = [
  {
    name: 'Novyx Core',
    tagline: 'Knowledge graph with semantic search',
    description: 'Cryptographically durable knowledge graph for AI agents. SHA-256 integrity. JSON-LD semantic search. Open-core foundation for agent memory.',
    status: 'live' as const,
    href: '/products/core',
    iconName: 'Database',
    metrics: ['516 artifacts verified', 'SHA-256 signed', 'MIT licensed'],
    features: ['Semantic search', 'Version control', 'Multi-tenant ready', 'JSON-LD compliance'],
  },
  {
    name: 'Novyx Integrity',
    tagline: 'Memory verification for enterprise AI',
    description: 'Security infrastructure for mission-critical AI agents. Real-time poisoning detection. Compliance-ready audit trails for SOC 2, GDPR, HIPAA.',
    status: 'beta' as const,
    href: '/products/integrity',
    iconName: 'Shield',
    metrics: ['<1ms detection', '100% coverage', 'SOC 2 ready'],
    features: ['Poisoning detection', 'Auto-rollback', 'Compliance reports', 'Forensic timeline'],
  },
  {
    name: 'Context Compression',
    tagline: 'Efficient long-term memory for agents',
    description: 'Intelligent summarization of agent memory. Keep context under token limits while preserving critical information. Lossless knowledge distillation.',
    status: 'coming' as const,
    href: '/products',
    iconName: 'Zap',
    metrics: ['Q2 2025', '90% compression', 'Zero information loss'],
    features: ['Token optimization', 'Hierarchical storage', 'Selective recall', 'Cost reduction'],
  },
  {
    name: 'Distributed Memory',
    tagline: 'Federated knowledge across agent networks',
    description: 'Sync agent memory across distributed systems. Cryptographic consistency proofs. Multi-region deployment. Built for agent swarms.',
    status: 'coming' as const,
    href: '/products',
    iconName: 'Network',
    metrics: ['Q3 2025', 'Multi-region', 'Cryptographic sync'],
    features: ['Cross-region sync', 'Eventual consistency', 'Conflict resolution', 'Byzantine fault tolerance'],
  },
  {
    name: 'Memory Analytics',
    tagline: 'Observability for agent knowledge',
    description: 'Dashboards for memory growth, query patterns, integrity metrics. Debug agent behavior. Optimize knowledge retrieval. Production monitoring.',
    status: 'coming' as const,
    href: '/products',
    iconName: 'FileCode',
    metrics: ['Q4 2025', 'Real-time metrics', 'Grafana integration'],
    features: ['Query analytics', 'Growth tracking', 'Anomaly detection', 'Performance profiling'],
  },
  {
    name: 'Your Idea',
    tagline: 'What infrastructure do you need?',
    description: 'We're building the persistence layer for autonomous AI. If you're solving hard problems in agent memory, we want to hear from you.',
    status: 'future' as const,
    href: 'https://github.com/novyxlabs/ideas',
    iconName: 'Sparkles',
    metrics: ['Open roadmap', 'Community-driven', 'Builder-focused'],
    features: ['Share on GitHub', 'Join discussions', 'Influence roadmap', 'Early access'],
  },
]

const iconMap = {
  Database,
  Shield,
  Zap,
  Network,
  FileCode,
  Sparkles,
}

const statusColors = {
  live: {
    badge: 'bg-green-500/20 text-green-400 border-green-500/30',
    card: 'bg-pulse-950/10 border-pulse-800/30 hover:border-pulse-600',
    icon: 'bg-pulse-500/10 border-pulse-500/30 text-pulse-400',
  },
  beta: {
    badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    card: 'bg-green-950/10 border-green-800/30 hover:border-green-600',
    icon: 'bg-green-500/10 border-green-500/30 text-green-400',
  },
  coming: {
    badge: 'bg-steel-500/20 text-steel-400 border-steel-500/30',
    card: 'bg-steel-900/20 border-steel-700/30 hover:border-steel-600',
    icon: 'bg-steel-500/10 border-steel-500/30 text-steel-400',
  },
  future: {
    badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    card: 'bg-purple-950/10 border-purple-800/30 hover:border-purple-600',
    icon: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  },
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="mono-heading text-5xl sm:text-6xl text-white mb-6">
            Infrastructure Portfolio
          </h1>
          <p className="text-2xl text-steel-300 mb-8">
            Durable, verifiable, production-ready infrastructure for autonomous AI
          </p>
          <p className="text-lg text-steel-400 max-w-3xl mx-auto">
            We're building the persistence layer for AI agents. From knowledge graphs to integrity verification,
            every product solves a foundational problem in agent memory and context preservation.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const colors = statusColors[product.status]
              const Icon = iconMap[product.iconName as keyof typeof iconMap]
              return (
                <Link
                  key={product.name}
                  href={product.href}
                  target={product.href.startsWith('http') ? '_blank' : undefined}
                  rel={product.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group relative p-8 rounded-2xl border transition-all duration-300 ${colors.card} hover:shadow-2xl`}
                >
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${colors.badge}`}>
                      {product.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${colors.icon}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="mono-heading text-2xl text-white mb-2">{product.name}</h3>
                  <p className="text-steel-300 font-medium mb-3 text-sm">{product.tagline}</p>
                  <p className="text-steel-400 text-sm mb-6 leading-relaxed">{product.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.metrics.map((metric) => (
                      <span key={metric} className="px-2 py-1 rounded bg-steel-800/30 text-steel-300 text-xs font-mono">
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 mb-6 text-sm text-steel-500">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <span className="text-steel-600">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`flex items-center space-x-2 font-mono font-semibold group-hover:translate-x-1 transition-transform ${
                    product.status === 'live' ? 'text-pulse-400' :
                    product.status === 'beta' ? 'text-green-400' :
                    product.status === 'future' ? 'text-purple-400' :
                    'text-steel-400'
                  }`}>
                    <span>{product.status === 'coming' || product.status === 'future' ? 'View Roadmap' : 'Learn More'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mono-heading text-4xl text-white mb-6">
            Platform Vision
          </h2>
          <p className="text-xl text-steel-300 mb-8 max-w-3xl mx-auto">
            We're not building point solutions. We're building a complete persistence layer for autonomous AI.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'Durability',
                description: 'Memory that survives restarts. Context that persists across sessions. Knowledge that compounds over time.',
              },
              {
                title: 'Legibility',
                description: 'Semantic search. Human-readable formats. Debuggable agent behavior. No black boxes.',
              },
              {
                title: 'Verifiability',
                description: 'Cryptographic integrity. Audit trails. Compliance-ready. Trust but verify.',
              },
            ].map((principle) => (
              <div key={principle.title} className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
                <h3 className="text-xl font-mono font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-steel-400 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mono-heading text-4xl text-white mb-6">
            Join the Builders
          </h2>
          <p className="text-xl text-steel-400 mb-8">
            Open-core infrastructure. Community-driven roadmap. Built for production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/novyxlabs/novyx-core"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg shadow-pulse/20"
            >
              Star on GitHub
            </a>
            <a
              href="https://github.com/novyxlabs/ideas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              Share Your Ideas
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
