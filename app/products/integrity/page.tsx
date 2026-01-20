import { Metadata } from 'next'
import { Shield, AlertTriangle, FileCheck, Clock, BarChart3, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Novyx Integrity - Memory Verification for Enterprise AI Agents',
  description: 'Prevent memory poisoning. Real-time audit trails. Compliance reporting for SOC 2, GDPR, HIPAA. Security infrastructure for AI agents.',
  keywords: ['memory poisoning', 'AI security', 'audit trails', 'compliance', 'SOC 2', 'GDPR', 'HIPAA', 'enterprise AI'],
}

export default function IntegrityPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-mono font-bold">
              NEW
            </span>
            <span className="text-steel-500 font-mono text-sm">Enterprise Security · Request Demo</span>
          </div>

          {/* Title */}
          <h1 className="mono-heading text-5xl sm:text-6xl text-white mb-6">
            Novyx Integrity
          </h1>
          <p className="text-3xl text-green-400 font-mono font-semibold mb-8">
            Memory integrity verification for enterprise AI agents
          </p>

          {/* Description */}
          <p className="text-xl text-steel-300 leading-relaxed mb-12 max-w-3xl">
            Security infrastructure, not storage. Prevent memory poisoning before it propagates.
            Real-time detection of corrupted data. Compliance-ready audit trails for SOC 2, GDPR, HIPAA.
            Built for CISOs and compliance teams managing autonomous AI systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/novyxlabs/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-white font-mono font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20"
            >
              <Shield className="mr-2 w-5 h-5" />
              Request Demo
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <h2 className="mono-heading text-3xl text-white">The Threat</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-xl bg-red-950/20 border border-red-900/30">
              <h3 className="text-xl font-mono font-bold text-red-400 mb-3">Memory Poisoning</h3>
              <p className="text-steel-400 mb-4">
                Adversaries inject corrupted data into agent memory. Poisoned context propagates silently
                through your system. By the time you detect it, the damage is done.
              </p>
              <p className="text-red-500 text-sm font-mono">
                → No verification layer<br />
                → No audit trail<br />
                → No rollback mechanism
              </p>
            </div>

            <div className="p-6 rounded-xl bg-red-950/20 border border-red-900/30">
              <h3 className="text-xl font-mono font-bold text-red-400 mb-3">Compliance Risk</h3>
              <p className="text-steel-400 mb-4">
                Regulators demand auditability. SOC 2 requires integrity controls. GDPR mandates data accuracy.
                HIPAA requires tamper-proof records. Your AI agents have none of this.
              </p>
              <p className="text-red-500 text-sm font-mono">
                → Failed audits<br />
                → Regulatory fines<br />
                → No forensic trail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-green-500" />
            <h2 className="mono-heading text-3xl text-white">How Integrity Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: 'Real-Time Detection',
                description: 'Continuous monitoring of agent memory. Signature verification on every read. Anomaly detection using statistical baselines. Alert within milliseconds of corruption.',
              },
              {
                icon: Lock,
                title: 'Automatic Rollback',
                description: 'Immutable versioning of all memory states. Git-like rollback to last known-good state. Zero-downtime recovery. Surgical removal of poisoned data.',
              },
              {
                icon: FileCheck,
                title: 'Compliance Reporting',
                description: 'Audit-ready logs for SOC 2, GDPR, HIPAA. Cryptographic proof of integrity. Automated compliance reports. Forensic timeline reconstruction.',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-green-950/10 border border-green-900/30">
                <feature.icon className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-mono font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-steel-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-12">Enterprise Security Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Continuous Integrity Monitoring',
                features: [
                  'Real-time signature verification',
                  'Statistical anomaly detection',
                  'Baseline deviation alerts',
                  'Sub-millisecond detection latency',
                ],
              },
              {
                title: 'Audit & Compliance',
                features: [
                  'SOC 2 Type II controls',
                  'GDPR data accuracy proof',
                  'HIPAA tamper-proof records',
                  'Automated compliance reports',
                ],
              },
              {
                title: 'Forensic Capabilities',
                features: [
                  'Complete memory timeline',
                  'Cryptographic chain of custody',
                  'Tamper detection metadata',
                  'Root cause analysis tools',
                ],
              },
              {
                title: 'Enterprise Integration',
                features: [
                  'SIEM/SOC integration (Splunk, Datadog)',
                  'Slack/PagerDuty alerting',
                  'SSO/SAML authentication',
                  'Multi-tenant isolation',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
                <h3 className="text-xl font-mono font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2 text-steel-400 text-sm">
                      <Shield className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-12 text-center">
            Built for Mission-Critical Systems
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: '<1ms', label: 'Detection latency' },
              { metric: '100%', label: 'Integrity coverage' },
              { metric: '0', label: 'False positives (beta)' },
              { metric: '24/7', label: 'Security monitoring' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-pulse-950/10 border border-pulse-800/30">
                <div className="text-4xl font-mono font-bold text-pulse-400 mb-2">{stat.metric}</div>
                <div className="text-steel-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mono-heading text-4xl text-white mb-6">
            Secure Your AI Infrastructure
          </h2>
          <p className="text-xl text-steel-400 mb-8">
            Trusted by Fortune 500 security teams. SOC 2 Type II certified. Built by infrastructure engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/novyxlabs/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-white font-mono font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20"
            >
              <Shield className="mr-2 w-5 h-5" />
              Schedule Security Review
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              Contact Sales
            </a>
          </div>
          <p className="mt-8 text-steel-500 text-sm font-mono">
            Enterprise access available · Contact us for details
          </p>
        </div>
      </section>
    </div>
  )
}
