'use client'

import { AlertTriangle, CheckCircle2, Shield, Clock, FileWarning } from 'lucide-react'

export function ProblemSolution() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-void-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Problem */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <h2 className="mono-heading text-4xl text-white">The Problem</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FileWarning,
                title: 'AI agents forget',
                description: 'Memory doesn't persist across restarts. Context is lost. Agents start from scratch every time.',
              },
              {
                icon: AlertTriangle,
                title: 'Memory gets corrupted',
                description: 'No verification layer. Poisoned data propagates silently. No audit trail to trace corruption.',
              },
              {
                icon: Clock,
                title: 'Context doesn't survive',
                description: 'Conversation history disappears. Learned patterns evaporate. Agents can't build on past knowledge.',
              },
            ].map((problem) => (
              <div key={problem.title} className="p-6 rounded-xl bg-red-950/20 border border-red-900/30">
                <problem.icon className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-mono font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-steel-400">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            <h2 className="mono-heading text-4xl text-white">Our Solution</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: 'Cryptographically durable',
                description: 'SHA-256 signed artifacts. Immutable audit trails. Memory you can mathematically verify.',
              },
              {
                icon: Shield,
                title: 'Integrity verification',
                description: 'Real-time detection of poisoned data. Automatic rollback. Compliance-ready audit logs.',
              },
              {
                icon: CheckCircle2,
                title: 'Context preservation',
                description: 'Semantic search across history. Versioned knowledge graphs. Context that compounds over time.',
              },
            ].map((solution) => (
              <div key={solution.title} className="p-6 rounded-xl bg-green-950/10 border border-green-900/30">
                <solution.icon className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-mono font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-steel-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Database({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
