'use client'

import { Metadata } from 'next'
import { Database, GitBranch, Lock, Search, FileCheck, Code } from 'lucide-react'
import Link from 'next/link'

export default function CorePage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(90deg, rgba(139, 146, 171, 0.03) 1px, transparent 1px), linear-gradient(rgba(139, 146, 171, 0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-mono font-bold">
              LIVE
            </span>
            <span className="text-steel-500 font-mono text-sm">MIT Licensed · Production Ready</span>
          </div>

          <h1 className="font-mono font-bold text-5xl sm:text-6xl text-white mb-6">
            Novyx Core
          </h1>
          <p className="text-3xl text-pulse-400 font-mono font-semibold mb-8">
            Knowledge graph with semantic search
          </p>

          <p className="text-xl text-steel-300 leading-relaxed mb-12 max-w-3xl">
            Cryptographically durable knowledge graph for AI agents. Semantic search across versioned artifacts.
            SHA-256 integrity verification. JSON-LD semantic web standards. Built for research assistants,
            enterprise memory, and autonomous agent persistence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/novyxlabs/novyx-core"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg"
            >
              <GitBranch className="mr-2 w-5 h-5" />
              Star on GitHub
            </a>
            <a
              href="https://github.com/novyxlabs/novyx-core#documentation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              <Code className="mr-2 w-5 h-5" />
              View Documentation
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono font-bold text-3xl text-white mb-12">Technical Specifications</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: FileCheck,
                title: '516 Artifacts Validated',
                description: 'Production-tested knowledge graph with 516 cryptographically signed artifacts. 100% integrity pass rate.',
              },
              {
                Icon: Lock,
                title: 'SHA-256 Integrity',
                description: 'Every artifact signed with SHA-256. Immutable audit trail. Tamper-proof verification at query time.',
              },
              {
                Icon: Search,
                title: 'JSON-LD Semantic Search',
                description: 'Full semantic web compliance. Vector embeddings for similarity search. Context-aware knowledge retrieval.',
              },
              {
                Icon: Database,
                title: 'Version Control',
                description: 'Git-like versioning for knowledge graphs. Time-travel queries. Atomic rollback on corruption.',
              },
              {
                Icon: Lock,
                title: 'Multi-Tenant Ready',
                description: 'Cryptographic tenant isolation. Zero-knowledge boundaries. Built for SaaS from day one.',
              },
              {
                Icon: GitBranch,
                title: 'Open Core',
                description: 'MIT licensed. Full source access. Community-driven development. No vendor lock-in.',
              },
            ].map((spec) => {
              const SpecIcon = spec.Icon
              return (
                <div key={spec.title} className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
                  <SpecIcon className="w-10 h-10 text-pulse-400 mb-4" />
                  <h3 className="text-xl font-mono font-bold text-white mb-2">{spec.title}</h3>
                  <p className="text-steel-400 text-sm">{spec.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-mono font-bold text-3xl text-white mb-8">Quick Start</h2>
          
          <div className="bg-void-900 border border-steel-700/30 rounded-xl p-8 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-steel-500 font-mono text-sm">install & initialize</span>
              <span className="text-steel-600 font-mono text-xs">TypeScript</span>
            </div>
            <pre className="text-pulse-300 font-mono text-sm leading-relaxed">
{`// Install
npm install @novyx/core

// Initialize with cryptographic verification
import { NovyxCore } from '@novyx/core'

const core = new NovyxCore({
  integrity: 'sha256',
  semantic: true,
})

// Store knowledge with automatic signing
await core.store({
  type: 'Artifact',
  content: 'Research findings on agent memory...',
  metadata: { author: 'user-123', timestamp: Date.now() }
})

// Semantic search across versioned history
const results = await core.search({
  query: 'agent memory persistence',
  similarity: 0.8,
  verifyIntegrity: true
})`}
            </pre>
          </div>

          <p className="text-steel-500 text-sm mt-4 font-mono">
            → Full docs at{' '}
            <a href="https://github.com/novyxlabs/novyx-core" className="text-pulse-400 hover:underline" target="_blank" rel="noopener noreferrer">
              github.com/novyxlabs/novyx-core
            </a>
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-3xl text-white mb-12">Built For</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Research Assistants',
                description: 'Durable memory for academic research. Version control for evolving hypotheses. Semantic search across literature.',
                example: 'ArXiv agent that remembers every paper it has read',
              },
              {
                title: 'Enterprise Memory',
                description: 'Persistent context for business intelligence. Audit trails for compliance. Multi-tenant knowledge isolation.',
                example: 'CRM agent with complete customer history',
              },
              {
                title: 'Agent Persistence',
                description: 'Memory that survives restarts. Context that compounds over time. Verifiable learning progression.',
                example: 'Autonomous trading agent with years of market memory',
              },
            ].map((useCase) => (
              <div key={useCase.title} className="p-6 rounded-xl bg-pulse-950/10 border border-pulse-800/30">
                <h3 className="text-xl font-mono font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-steel-400 mb-4">{useCase.description}</p>
                <div className="pt-4 border-t border-steel-700/30">
                  <p className="text-steel-500 text-sm font-mono">Example: {useCase.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-mono font-bold text-4xl text-white mb-6">
            Start Building Today
          </h2>
          <p className="text-xl text-steel-400 mb-8">
            MIT licensed. Production-ready. Built by infrastructure engineers for infrastructure engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/novyxlabs/novyx-core"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg"
            >
              <GitBranch className="mr-2 w-5 h-5" />
              View on GitHub
            </a>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
