import { Metadata } from 'next'
import { Shield, BarChart3, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise Platform - Dashboard & Sentinel | Novyx Labs',
  description: 'Real-time governance, compliance monitoring, and automated policy enforcement for federated enterprise knowledge systems.',
  keywords: ['enterprise dashboard', 'compliance monitoring', 'sentinel', 'automated governance', 'audit trails', 'policy enforcement'],
}

export default function EnterprisePage() {
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
            ENTERPRISE PLATFORM
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white font-mono">
            Dashboard & Sentinel
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-time governance visibility and automated policy enforcement for
            mission-critical knowledge systems
          </p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white font-mono">Enterprise Dashboard</h2>
              </div>
              
              <p className="text-slate-400 text-lg mb-8">
                Unified governance interface for multi-tenant knowledge graphs with real-time
                compliance monitoring and cryptographic audit trails.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Audit Trail Visualization', desc: 'HMAC-signed transaction history with time-travel queries' },
                  { title: 'Compliance Reporting', desc: 'Auto-generated SOC 2, ISO 27001, HIPAA reports' },
                  { title: 'Performance Analytics', desc: 'Sub-10ms MTTR tracking and SLA monitoring' },
                  { title: 'Access Control', desc: 'Role-based permissions with zero-knowledge boundaries' },
                  { title: 'Federation Monitoring', desc: 'Cross-region sync status and consistency proofs' },
                  { title: 'Tenant Isolation', desc: 'Multi-tenant security visualizations and breach detection' },
                ].map((feature) => (
                  <div key={feature.title} className="border-l-2 border-accent/30 pl-4">
                    <div className="font-mono font-semibold text-white">{feature.title}</div>
                    <div className="text-slate-400 text-sm">{feature.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Dashboard Preview Placeholder */}
              <div className="bg-midnight border border-slate-700 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-mono text-sm text-accent">DASHBOARD PREVIEW</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-accent/30" />
                    <div className="w-3 h-3 rounded-full bg-accent/30" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'MTTR', value: '8.3ms' },
                      { label: 'UPTIME', value: '99.99%' },
                      { label: 'TENANTS', value: '1,247' },
                    ].map((metric) => (
                      <div key={metric.label} className="bg-slate-800 rounded-lg p-3">
                        <div className="text-slate-500 text-xs font-mono">{metric.label}</div>
                        <div className="text-white font-bold font-mono text-lg">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-slate-800 rounded-lg p-4 h-32 flex items-end justify-between">
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-6 bg-accent/30 rounded-t"
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                      />
                    ))}
                  </div>

                  {/* Audit Trail */}
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-slate-800 rounded p-2 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="font-mono text-xs text-slate-400">TX_{i +1234}</span>
                        </div>
                        <span className="font-mono text-xs text-slate-500">VERIFIED</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sentinel Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-midnight">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Sentinel Preview Placeholder */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-mono text-sm text-accent">SENTINEL MONITORING</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-xs text-slate-400">ACTIVE</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Alerts */}
                  {[
                    { type: 'INFO', msg: 'Integrity verification passed', time: '2s ago' },
                    { type: 'WARN', msg: 'Latency spike detected in US-EAST', time: '15s ago' },
                    { type: 'SUCCESS', msg: 'Auto-recovery completed: 7.2ms MTTR', time: '1m ago' },
                    { type: 'INFO', msg: 'Federation sync: EU-WEST consistent', time: '2m ago' },
                  ].map((alert, i) => (
                    <div key={i} className="bg-midnight rounded-lg p-3 border-l-2 border-accent/30">
                      <div className="flex items-start justify-between mb-1">
                        <span className={`font-mono text-xs px-2 py-1 rounded ${
                          alert.type === 'SUCCESS' ? 'bg-green-500/20 text-green-400' :
                          alert.type === 'WARN' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-accent/20 text-accent'
                        }`}>{alert.type}</span>
                        <span className="font-mono text-xs text-slate-500">{alert.time}</span>
                      </div>
                      <div className="text-slate-300 text-sm">{alert.msg}</div>
                    </div>
                  ))}

                  {/* Policy Status */}
                  <div className="bg-midnight rounded-lg p-4">
                    <div className="font-mono text-sm text-accent mb-3">ACTIVE POLICIES</div>
                    {['GDPR-Compliance', 'HIPAA-Access-Control', 'SOC2-Encryption'].map((policy) => (
                      <div key={policy} className="flex items-center justify-between py-2">
                        <span className="font-mono text-xs text-slate-300">{policy}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="font-mono text-xs text-slate-500">ENFORCED</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white font-mono">Sentinel</h2>
              </div>
              
              <p className="text-slate-400 text-lg mb-8">
                Autonomous governance engine that monitors, detects, and resolves compliance
                violations and system anomalies in real-time.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Real-Time Anomaly Detection', desc: 'ML-based detection of integrity violations and access anomalies' },
                  { title: 'Automated Policy Enforcement', desc: 'Zero-touch compliance with GDPR, HIPAA, SOC 2 requirements' },
                  { title: 'Self-Healing Recovery', desc: 'Sub-10ms MTTR with automated rollback and verification' },
                  { title: 'Incident Response', desc: 'Automated containment, forensics, and remediation workflows' },
                  { title: 'Predictive Analytics', desc: 'ML forecasting of system failures before they occur' },
                  { title: 'Zero-Knowledge Alerts', desc: 'Policy violations detected without exposing sensitive data' },
                ].map((feature) => (
                  <div key={feature.title} className="border-l-2 border-accent/30 pl-4">
                    <div className="font-mono font-semibold text-white">{feature.title}</div>
                    <div className="text-slate-400 text-sm">{feature.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-br from-slate-900 to-midnight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-mono">
            Deploy Enterprise Governance
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Schedule a technical demo to see Dashboard and Sentinel in production environments
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-accent text-midnight font-mono font-semibold hover:bg-accent/90 transition-all"
          >
            Schedule Technical Demo
          </a>
          <p className="mt-6 text-slate-500 text-sm font-mono">
            SOC 2 TYPE II · ISO 27001 · GDPR · HIPAA READY
          </p>
        </div>
      </section>
    </div>
  )
}
