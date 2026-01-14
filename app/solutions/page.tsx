import { Metadata } from 'next'
import { Shield, BarChart3, AlertTriangle, Database } from 'lucide-react'
import { Pricing } from '@/components/Pricing'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solutions - Open Core to Enterprise Governance | Novyx Labs',
  description: 'Start with free open-source knowledge graphs. Scale to managed hosting. Deploy enterprise governance with automated compliance and real-time monitoring.',
  keywords: ['solutions', 'enterprise platform', 'knowledge graph', 'governance', 'compliance', 'dashboard', 'sentinel'],
}

export default function SolutionsPage() {
  return (
    <div className="pt-24 pb-16 bg-midnight">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-midnight via-slate-900 to-midnight relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent font-mono text-sm mb-6">
            COMPLETE PLATFORM
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white font-mono">
            Solutions for Every Scale
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From open-source foundations to enterprise-grade governance. One platform, three deployment models.
          </p>
        </div>
      </section>

      {/* Open Core Foundation */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Database className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white font-mono">Novyx Core</h2>
              </div>
              
              <p className="text-slate-400 text-lg mb-8">
                Open-source knowledge graph engine. Self-host for free with full source code access. 
                MIT licensed with enterprise-grade features built in.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: 'Secure Data Linking', desc: 'Verified connections between every piece of knowledge' },
                  { title: 'Version Control', desc: 'Time-travel through your data with atomic rollback' },
                  { title: 'Multi-Tenant Ready', desc: 'Built-in isolation for SaaS applications' },
                  { title: 'Self-Healing', desc: 'Automatic recovery from failures in <10ms' },
                ].map((feature) => (
                  <div key={feature.title} className="border-l-2 border-accent/30 pl-4">
                    <div className="font-mono font-semibold text-white">{feature.title}</div>
                    <div className="text-slate-400 text-sm">{feature.desc}</div>
                  </div>
                ))}
              </div>

              <Link 
                href="/core"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-midnight font-mono font-semibold hover:bg-accent/90 transition-all"
              >
                Explore Open Core →
              </Link>
            </div>

            <div className="relative">
              <div className="bg-midnight border border-slate-700 rounded-xl p-6 shadow-2xl">
                <div className="font-mono text-sm text-accent mb-4">CORE ARCHITECTURE</div>
                <div className="space-y-3">
                  {[
                    { layer: 'Knowledge Layer', status: 'ACTIVE' },
                    { layer: 'Integrity Layer', status: 'VERIFIED' },
                    { layer: 'Isolation Layer', status: 'SECURE' },
                  ].map((item) => (
                    <div key={item.layer} className="bg-slate-900 border border-accent/30 rounded-lg p-3 flex items-center justify-between">
                      <span className="font-mono text-sm text-white">{item.layer}</span>
                      <span className="font-mono text-xs text-green-500">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Platform */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-midnight">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              Enterprise Platform
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Scale to automated governance with real-time monitoring and compliance reporting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dashboard */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white font-mono">Dashboard</h3>
              </div>
              
              <p className="text-slate-400 mb-6">
                Unified governance interface with real-time compliance monitoring and audit trails.
              </p>

              <div className="space-y-3">
                {[
                  'Audit trail visualization',
                  'Compliance reporting (SOC 2, ISO 27001)',
                  'Performance analytics',
                  'Access control management',
                  'Federation monitoring',
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentinel */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white font-mono">Sentinel</h3>
              </div>
              
              <p className="text-slate-400 mb-6">
                Autonomous monitoring engine with real-time anomaly detection and automated recovery.
              </p>

              <div className="space-y-3">
                {[
                  'Real-time anomaly detection',
                  'Automated policy enforcement',
                  'Self-healing recovery (<10ms)',
                  'Incident response automation',
                  'Predictive failure analysis',
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-br from-slate-900 to-midnight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-mono">
            Ready to Deploy?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Start with open source today. Scale to managed hosting or enterprise governance on your timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/novyxlabs/novyx-core"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-accent text-midnight font-mono font-semibold hover:bg-accent/90 transition-all"
            >
              View on GitHub
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl border border-slate-600 text-white font-mono font-semibold hover:bg-slate-800 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
