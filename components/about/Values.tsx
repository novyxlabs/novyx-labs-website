'use client'

import { Shield, Lock, Network, Cpu } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every architectural decision prioritizes cryptographic integrity. HMAC-SHA256 signatures, immutable audit trails, and zero-knowledge boundaries are non-negotiable foundations.',
  },
  {
    icon: Lock,
    title: 'Regulatory Excellence',
    description: 'Compliance is not a checkbox—it\'s embedded in the architecture. SOC 2 Type II, ISO 27001, GDPR, and HIPAA requirements drive our design from day one.',
  },
  {
    icon: Network,
    title: 'Open Core Philosophy',
    description: 'Enterprise-grade governance should not require vendor lock-in. Our open-core foundation ensures transparency, auditability, and community-driven innovation.',
  },
  {
    icon: Cpu,
    title: 'Performance Guarantees',
    description: 'Sub-10ms MTTR is not marketing—it\'s our SLA. Enterprise systems demand microsecond-latency operations with 99.99% uptime. We deliver mathematical proof, not promises.',
  },
]

export function Values() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-mono text-white">
            Our <span className="text-accent">Principles</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            The architectural philosophy behind every decision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent/10 border border-accent/30 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white font-mono">{value.title}</h3>
              <p className="text-slate-400 text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
