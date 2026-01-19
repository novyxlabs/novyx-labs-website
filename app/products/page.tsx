import { Metadata } from 'next'
import Link from 'next/link'
import { Database, Shield, Zap, Package, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products - Memory Infrastructure for AI Agents | Novyx Labs',
  description: 'Production-ready memory infrastructure for autonomous AI systems. Knowledge graphs, persistent memory APIs, LangChain integration, and enterprise security.',
  keywords: ['AI infrastructure', 'agent memory', 'memory verification', 'knowledge graph', 'langchain memory', 'AI API'],
}

export default function ProductsPage() {
  const products = [
    {
      name: 'Novyx Core',
      tagline: 'The persistence engine',
      description: 'Cryptographically durable knowledge graph for AI agents. SHA-256 integrity. JSON-LD semantic search. The foundation powering all Novyx products.',
      status: 'live',
      href: '/products/core',
      Icon: Database,
      metrics: ['Production ready', 'SHA-256 signed', 'Semantic search'],
      features: ['Knowledge graph', 'Version control', 'Multi-tenant ready', 'JSON-LD compliance'],
    },
    {
      name: 'Novyx RAM',
      tagline: 'Memory API for developers',
      description: 'REST API for persistent AI memory. Store, search, and retrieve agent context with sub-millisecond latency. Zero infrastructure to manage.',
      status: 'live',
      href: '/products/ram',
      Icon: Zap,
      metrics: ['Sub-ms latency', 'REST API', 'Global edge'],
      features: ['Semantic search', 'Session isolation', 'Real-time', 'SDK support'],
    },
    {
      name: 'Novyx Integrity',
      tagline: 'Enterprise security',
      description: 'Security infrastructure for mission-critical AI agents. Real-time poisoning detection. Compliance-ready audit trails for SOC 2, GDPR, HIPAA.',
      status: 'beta',
      href: '/products/integrity',
      Icon: Shield,
      metrics: ['<1ms detection', '100% coverage', 'SOC 2 ready'],
      features: ['Poisoning detection', 'Auto-rollback', 'Compliance reports', 'Forensic timeline'],
    },
    {
      name: 'LangChain Integration',
      tagline: 'pip install novyx-langchain',
      description: 'Drop-in persistent memory for LangChain agents. Your agents remember everything—across restarts, deployments, and sessions.',
      status: 'live',
      href: '/products/langchain',
      Icon: Package,
      metrics: ['Live on PyPI', 'Drop-in replacement', 'Zero infrastructure'],
      features: ['Persistent memory', 'Semantic search', 'Session isolation', 'LangGraph support'],
    },
  ]

  const getStatusColors = (status: string) => {
    switch (status) {
      case 'live':
        return {
          badge: 'bg-green-500/20 text-green-400 border-green-500/30',
          card: 'bg-pulse-950/10 border-pulse-800/30 hover:border-pulse-600',
          icon: 'bg-pulse-500/10 border-pulse-500/30 text-pulse-400',
          text: 'text-pulse-400',
        }
      case 'beta':
        return {
          badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
          card: 'bg-green-950/10 border-green-800/30 hover:border-green-600',
          icon: 'bg-green-500/10 border-green-500/30 text-green-400',
          text: 'text-green-400',
        }
      case 'coming':
        return {
          badge: 'bg-steel-500/20 text-steel-400 border-steel-500/30',
          card: 'bg-steel-900/20 border-steel-700/30 hover:border-steel-600',
          icon: 'bg-steel-500/10 border-steel-500/30 text-steel-400',
          text: 'text-steel-400',
        }
      default:
        return {
          badge: 'bg-steel-500/20 text-steel-400 border-steel-500/30',
          card: 'bg-steel-900/20 border-steel-700/30',
          icon: 'bg-steel-500/10 border-steel-500/30 text-steel-400',
          text: 'text-steel-400',
        }
    }
  }

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
              const colors = getStatusColors(product.status)
              const ProductIcon = product.Icon
              
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
                    <ProductIcon className="w-7 h-7" />
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
                  <div className={`flex items-center space-x-2 font-mono font-semibold group-hover:translate-x-1 transition-transform ${colors.text}`}>
                    <span>Learn More</span>
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
            Start Building
          </h2>
          <p className="text-xl text-steel-400 mb-8">
            Production-ready memory infrastructure. Get started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg shadow-pulse/20"
            >
              Get API Key
            </Link>
            <Link
              href="/products/langchain"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              pip install novyx-langchain
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
