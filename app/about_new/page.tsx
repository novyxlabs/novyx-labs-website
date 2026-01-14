import { Metadata } from 'next'
import { Target, Code, Shield, Eye, Users, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Building Infrastructure for AI That Remembers | Novyx Labs',
  description: 'Infrastructure company solving foundational problems in AI memory and persistence. Founded 2024. Open-core philosophy.',
  keywords: ['AI infrastructure', 'agent memory', 'durable AI', 'infrastructure company', 'open-core'],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="mono-heading text-5xl sm:text-6xl text-white mb-6">
            Building Infrastructure
            <br />
            <span className="gradient-text">for AI That Remembers</span>
          </h1>
          <p className="text-2xl text-steel-300 mb-8 font-medium">
            Intelligence that persists. Code that endures.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Target className="w-8 h-8 text-pulse-400" />
            <h2 className="mono-heading text-4xl text-white">Mission</h2>
          </div>
          
          <div className="space-y-6 text-lg text-steel-300 leading-relaxed">
            <p>
              Novyx Labs is an infrastructure company solving foundational problems in AI memory and persistence.
            </p>
            <p>
              Today's AI agents are stateless. Memory doesn't survive restarts. Context gets corrupted. Learned patterns evaporate.
              This isn't a feature limitation—it's an infrastructure gap.
            </p>
            <p>
              We're building the persistence layer for autonomous AI. Cryptographically durable knowledge graphs.
              Real-time integrity verification. Context that compounds over time. Infrastructure that scales from
              individual researchers to Fortune 500 compliance teams.
            </p>
            <p className="text-pulse-400 font-mono font-semibold">
              Agent memory is security-critical, compliance-required, and commercially valuable.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mono-heading text-4xl text-white mb-12 text-center">Why It Matters</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Security-Critical',
                description: 'Memory poisoning is the new injection attack. Adversaries target agent context. Without integrity verification, corruption propagates silently.',
              },
              {
                icon: Shield,
                title: 'Compliance-Required',
                description: 'SOC 2 demands integrity controls. GDPR requires data accuracy. HIPAA mandates tamper-proof records. Regulators won't wait for infrastructure to catch up.',
              },
              {
                icon: Code,
                title: 'Commercially Valuable',
                description: 'Agents that remember are worth 10x more. Research assistants with literature memory. Trading bots with market history. CRM agents with customer context.',
              },
            ].map((reason) => (
              <div key={reason.title} className="p-6 rounded-xl bg-pulse-950/10 border border-pulse-800/30">
                <reason.icon className="w-10 h-10 text-pulse-400 mb-4" />
                <h3 className="text-xl font-mono font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-steel-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="mono-heading text-4xl text-white mb-12 text-center">Our Principles</h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Durability',
                description: 'Memory that survives restarts. Context that persists across sessions. Knowledge that compounds over time, not evaporates.',
              },
              {
                title: 'Legibility',
                description: 'No black boxes. Human-readable formats. Semantic search. Debuggable behavior. If you can't inspect it, you can't trust it.',
              },
              {
                title: 'Context Preservation',
                description: 'Agents learn by remembering. Not summarization—full fidelity storage. Version control for knowledge. Time-travel debugging.',
              },
            ].map((principle) => (
              <div key={principle.title} className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
                <h3 className="text-2xl font-mono font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-steel-400">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Users className="w-8 h-8 text-pulse-400" />
            <h2 className="mono-heading text-4xl text-white">Team</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Founder info - user will fill this in */}
            <div className="p-6 rounded-xl bg-pulse-950/10 border border-pulse-800/30">
              <h3 className="text-xl font-mono font-bold text-white mb-2">[Founder Name]</h3>
              <p className="text-pulse-400 font-mono text-sm mb-4">Founder & CEO</p>
              <p className="text-steel-400 text-sm">
                [Background: Previous experience, why you're building this, technical expertise]
              </p>
            </div>

            {/* We're hiring */}
            <div className="p-6 rounded-xl bg-green-950/10 border border-green-800/30">
              <h3 className="text-xl font-mono font-bold text-white mb-2">We're Hiring</h3>
              <p className="text-green-400 font-mono text-sm mb-4">Infrastructure Engineers</p>
              <p className="text-steel-400 text-sm mb-4">
                Building durable AI infrastructure. Distributed systems. Cryptographic verification. Production Rust/TypeScript.
              </p>
              <a
                href="mailto:careers@novyxlabs.com"
                className="inline-flex items-center text-green-400 font-mono text-sm hover:underline"
              >
                <Mail className="mr-2 w-4 h-4" />
                careers@novyxlabs.com
              </a>
            </div>
          </div>

          {/* Company info */}
          <div className="p-8 rounded-xl bg-steel-900/20 border border-steel-700/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-4">Company</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-steel-500 font-mono">Founded</dt>
                    <dd className="text-white font-mono">2024</dd>
                  </div>
                  <div>
                    <dt className="text-steel-500 font-mono">Headquarters</dt>
                    <dd className="text-white">[Location]</dd>
                  </div>
                  <div>
                    <dt className="text-steel-500 font-mono">Backed by</dt>
                    <dd className="text-steel-400">[Investor Space - TBD]</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-4">Philosophy</h3>
                <ul className="space-y-2 text-sm text-steel-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-pulse-400">→</span>
                    <span>Infrastructure-first, not application-layer</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pulse-400">→</span>
                    <span>Open-core foundation, enterprise extensions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pulse-400">→</span>
                    <span>Builders talking to builders, no marketing fluff</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pulse-400">→</span>
                    <span>Working code over whitepapers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mono-heading text-4xl text-white mb-6">
            Join Us
          </h2>
          <p className="text-xl text-steel-400 mb-8">
            Building durable infrastructure for the next generation of AI. Open positions for infrastructure engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@novyxlabs.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg shadow-pulse/20"
            >
              <Mail className="mr-2 w-5 h-5" />
              View Open Roles
            </a>
            <a
              href="https://github.com/novyxlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              Follow on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
