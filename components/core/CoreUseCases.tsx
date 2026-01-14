'use client'

import { Building2, Landmark, Hospital, Factory, Shield, Network } from 'lucide-react'

const useCases = [
  {
    icon: Landmark,
    title: 'Financial Services',
    description: 'Cross-border fraud detection with federated intelligence. Regulatory reporting for multiple jurisdictions. GDPR-compliant customer insights without data centralization.',
    stats: '40% fraud detection improvement',
  },
  {
    icon: Hospital,
    title: 'Healthcare Networks',
    description: 'Clinical insights across multi-national systems. HIPAA/GDPR compliant research pipelines. Epidemic tracking without PHI exposure using zero-knowledge proofs.',
    stats: '3x research velocity increase',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Global supply chain visibility with data sovereignty. Predictive maintenance across distributed facilities. Compliance tracking for regional regulations.',
    stats: '25% disruption reduction',
  },
  {
    icon: Building2,
    title: 'Enterprise SaaS',
    description: 'Multi-tenant knowledge isolation with cryptographic boundaries. Sub-10ms query performance at scale. Automated SOC 2 / ISO 27001 compliance reporting.',
    stats: '99.99% uptime SLA',
  },
  {
    icon: Shield,
    title: 'Government & Defense',
    description: 'Classified information boundaries with zero-knowledge federation. Immutable audit trails for security clearance. Cross-agency intelligence without data sharing.',
    stats: 'FedRAMP High ready',
  },
  {
    icon: Network,
    title: 'Telecommunications',
    description: 'Distributed network intelligence across regulatory zones. Real-time anomaly detection with <10ms MTTR. Multi-region compliance automation.',
    stats: 'Sub-second threat response',
  },
]

export function CoreUseCases() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-midnight">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white font-mono">
            Enterprise
            <span className="text-accent"> Deployments</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Production-grade governance for regulated industries requiring cryptographic guarantees
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="relative p-8 rounded-2xl border border-slate-700 bg-slate-900 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-7 h-7 text-accent" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white font-mono">
                {useCase.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4 text-sm">
                {useCase.description}
              </p>

              {/* Stats */}
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-accent font-semibold text-sm font-mono">
                  {useCase.stats}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
