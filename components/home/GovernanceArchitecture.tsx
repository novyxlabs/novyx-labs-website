'use client'

import { CheckCircle2 } from 'lucide-react'

const architectureLayers = [
  {
    layer: 'Open Core',
    description: 'Self-hosted knowledge graph foundation',
    features: [
      'Persistent memory engine',
      'Multi-tenant isolation',
      'Version control & rollback',
      'HMAC-SHA256 integrity',
    ],
    badge: 'Apache 2.0',
  },
  {
    layer: 'Enterprise Dashboard',
    description: 'Real-time governance & observability',
    features: [
      'Audit trail visualization',
      'Compliance reporting',
      'Performance analytics',
      'Access control management',
    ],
    badge: 'Commercial',
  },
  {
    layer: 'Sentinel',
    description: 'Automated policy enforcement',
    features: [
      'Real-time anomaly detection',
      'Automated compliance checks',
      'Self-healing capabilities',
      'Incident response automation',
    ],
    badge: 'Enterprise Plus',
  },
]

export function GovernanceArchitecture() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent font-mono text-sm mb-6">
            LAYERED ARCHITECTURE
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white font-mono">
            From Open Core to
            <span className="gradient-text"> Enterprise Plus</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Start with self-hosted foundations, scale to federated enterprise governance
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {architectureLayers.map((layer, index) => (
            <div
              key={layer.layer}
              className="border border-slate-700 rounded-xl overflow-hidden bg-midnight/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-mono mb-2">
                      {layer.layer}
                    </h3>
                    <p className="text-slate-400">
                      {layer.description}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-xs whitespace-nowrap">
                    {layer.badge}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {layer.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/enterprise"
            className="inline-flex items-center text-accent hover:text-accent/80 font-mono font-semibold text-lg group"
          >
            <span>Explore Enterprise Platform</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
