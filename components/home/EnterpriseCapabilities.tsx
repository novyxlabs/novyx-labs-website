'use client'

import { Shield, Database, Network, Lock, Zap, GitBranch } from 'lucide-react'

const capabilities = [
  {
    icon: Shield,
    title: 'Cryptographic Integrity',
    description: 'HMAC-SHA256 signatures on every transaction with immutable audit trails and tamper-proof governance records.',
    spec: 'FIPS 140-2 Level 3',
  },
  {
    icon: Database,
    title: 'Zero-Knowledge Architecture',
    description: 'Multi-tenant data sovereignty with encrypted-at-rest knowledge graphs. Your data never crosses tenant boundaries.',
    spec: 'AES-256-GCM',
  },
  {
    icon: Network,
    title: 'Federated Intelligence',
    description: 'Distribute knowledge graphs across regions and compliance zones while maintaining cryptographic consistency.',
    spec: 'Edge Replication',
  },
  {
    icon: Zap,
    title: 'Sub-10ms MTTR',
    description: 'Self-healing knowledge graphs with automated rollback and version control. Production-grade uptime guarantees.',
    spec: '99.99% SLA',
  },
  {
    icon: Lock,
    title: 'Compliance-Ready',
    description: 'SOC 2 Type II, ISO 27001, GDPR, CCPA, and HIPAA compliance built into the core architecture.',
    spec: 'Audit Logs',
  },
  {
    icon: GitBranch,
    title: 'Enterprise Versioning',
    description: 'Time-travel through knowledge state with microsecond precision. Full rollback capability for compliance and recovery.',
    spec: 'Git-like Model',
  },
]

export function EnterpriseCapabilities() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-midnight relative">
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent font-mono text-sm mb-6">
            TECHNICAL ARCHITECTURE
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white font-mono">
            Enterprise-Grade
            <span className="gradient-text"> Governance</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Built on cryptographic primitives and zero-trust principles for regulated industries
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="relative p-8 rounded-xl border border-slate-700 bg-slate-900/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group backdrop-blur-sm"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-white font-mono">
                  {capability.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {capability.description}
                </p>
              </div>

              {/* Spec Badge */}
              <div className="inline-block px-3 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-xs">
                {capability.spec}
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
