'use client'

import Link from 'next/link'
import { Database, Shield, Sparkles, ArrowRight } from 'lucide-react'

const products = [
  {
    name: 'Novyx Core',
    tagline: 'Knowledge graph with semantic search',
    description: 'Cryptographically durable knowledge graph. 516 artifacts validated. SHA-256 integrity. JSON-LD semantic search. Open-core foundation for agent memory.',
    status: 'live',
    href: '/products/core',
    icon: Database,
    metrics: ['516 artifacts', 'SHA-256 verified', 'MIT licensed'],
  },
  {
    name: 'Novyx Integrity',
    tagline: 'Memory verification for enterprise AI',
    description: 'Prevent memory poisoning. Real-time audit trails. Compliance reporting for SOC 2, GDPR, HIPAA. Built for CISOs and compliance teams.',
    status: 'beta',
    href: '/products/integrity',
    icon: Shield,
    metrics: ['Real-time detection', 'Audit trails', 'Compliance-ready'],
  },
  {
    name: 'Coming Soon',
    tagline: 'More infrastructure in the pipeline',
    description: 'We're building additional infrastructure for durable AI agents. Context compression, distributed memory, and more.',
    status: 'coming',
    href: '/products',
    icon: Sparkles,
    metrics: ['Q2 2025', 'Open beta', 'Watch on GitHub'],
  },
]

export function ProductGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-void">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mono-heading text-4xl sm:text-5xl text-white mb-4">
            Infrastructure Portfolio
          </h2>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            Durable, verifiable, production-ready infrastructure for autonomous AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                product.status === 'live'
                  ? 'bg-pulse-950/10 border-pulse-800/30 hover:border-pulse-600 hover:shadow-2xl hover:shadow-pulse/10'
                  : product.status === 'beta'
                  ? 'bg-green-950/10 border-green-800/30 hover:border-green-600 hover:shadow-2xl hover:shadow-green-500/10'
                  : 'bg-steel-900/20 border-steel-700/30 hover:border-steel-600'
              }`}
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                    product.status === 'live'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : product.status === 'beta'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-steel-500/20 text-steel-400 border border-steel-500/30'
                  }`}
                >
                  {product.status.toUpperCase()}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                product.status === 'live'
                  ? 'bg-pulse-500/10 border border-pulse-500/30'
                  : product.status === 'beta'
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-steel-500/10 border border-steel-500/30'
              }`}>
                <product.icon className={`w-7 h-7 ${
                  product.status === 'live'
                    ? 'text-pulse-400'
                    : product.status === 'beta'
                    ? 'text-green-400'
                    : 'text-steel-400'
                }`} />
              </div>

              {/* Content */}
              <h3 className="mono-heading text-2xl text-white mb-2">{product.name}</h3>
              <p className="text-steel-300 font-medium mb-3">{product.tagline}</p>
              <p className="text-steel-400 text-sm mb-6 leading-relaxed">{product.description}</p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.metrics.map((metric) => (
                  <span key={metric} className="px-2 py-1 rounded bg-steel-800/30 text-steel-300 text-xs font-mono">
                    {metric}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className={`flex items-center space-x-2 font-mono font-semibold group-hover:translate-x-1 transition-transform ${
                product.status === 'live'
                  ? 'text-pulse-400'
                  : product.status === 'beta'
                  ? 'text-green-400'
                  : 'text-steel-400'
              }`}>
                <span>{product.status === 'coming' ? 'View Roadmap' : 'Learn More'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
