'use client'

import { Shield, Lock, Database, GitBranch, Network, AlertTriangle } from 'lucide-react'

const features = [
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    title: 'Cryptographic Integrity',
    description: 'HMAC-SHA256 signatures on every transaction. Immutable audit trails with mathematical proof of consistency.',
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: 'Immutable Versioning',
    description: 'Git-like version control for knowledge graphs. Time-travel queries and atomic rollback in <10ms.',
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: 'Multi-Tenant Isolation',
    description: 'Zero-knowledge boundaries between tenants. Cryptographic guarantees of data sovereignty.',
  },
  {
    icon: <Network className="w-6 h-6 text-white" />,
    title: 'Federation Ready',
    description: 'Cross-region synchronization with merkle-tree consistency proofs. Distributed intelligence at scale.',
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    title: 'Self-Healing',
    description: 'Automated anomaly detection and recovery. Sub-10ms MTTR with zero manual intervention.',
  },
  {
    icon: <GitBranch className="w-6 h-6 text-white" />,
    title: 'Compliance-Ready',
    description: 'Built-in support for SOC 2, ISO 27001, GDPR, HIPAA. Automated reporting and policy enforcement.',
  },
]

export function CoreFeatures() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white font-mono">
            Enterprise-Grade Governance
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Open-core foundation with cryptographic guarantees for regulated industries
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-8 rounded-2xl border border-slate-700 bg-midnight hover:border-accent/50 transition-all duration-300 hover:shadow-xl group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-white font-mono">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
