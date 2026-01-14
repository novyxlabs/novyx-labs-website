'use client'

import { Shield, Lock, Network } from 'lucide-react'

const milestones = [
  {
    icon: Shield,
    title: 'The Challenge',
    description: 'Enterprise AI systems faced an impossible choice: centralize knowledge for intelligence, or distribute data for compliance. Regulatory frameworks demanded data sovereignty, yet effective governance required comprehensive context.',
  },
  {
    icon: Lock,
    title: 'The Architecture',
    description: 'Novyx Core delivers cryptographic consistency across federated boundaries. HMAC-SHA256 signatures on every transaction. Immutable versioning with sub-10ms recovery. Zero-knowledge tenant isolation with mathematical guarantees.',
  },
  {
    icon: Network,
    title: 'The Platform',
    description: 'Complete governance stack—from open-core cryptographic foundations to Enterprise Dashboard and Sentinel. Automated compliance for SOC 2, ISO 27001, GDPR, HIPAA. Federated intelligence at scale.',
  },
]

export function Story() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-mono text-white">
            The <span className="text-accent">Architecture</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building enterprise governance infrastructure from first principles
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent/10 border border-accent/30 rounded-2xl flex items-center justify-center">
                  <milestone.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white font-mono">{milestone.title}</h3>
                <p className="text-lg text-slate-400">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-midnight border border-slate-700 rounded-2xl p-8 sm:p-12">
            <p className="text-lg text-slate-300 leading-relaxed">
              Novyx Labs LLC provides the complete stack for enterprise governance and federated intelligence. 
              Our open-core foundation (Novyx Core) delivers cryptographic integrity and multi-tenant isolation. 
              The Enterprise Platform (Dashboard & Sentinel) adds automated compliance and real-time monitoring. 
              Every layer designed for regulated industries requiring mathematical guarantees of sovereignty, 
              integrity, and auditability. Open-source foundations. Enterprise-grade governance. Zero compromise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



