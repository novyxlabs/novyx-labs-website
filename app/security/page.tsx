import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Lock, FileCheck, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security - Novyx Labs',
  description: 'Security practices, compliance information, and vulnerability reporting for Novyx infrastructure.',
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="mono-heading text-4xl text-white mb-4">Security</h1>
            <p className="text-steel-400 max-w-2xl mx-auto">
              Security is foundational to everything we build. Here's how we protect your data.
            </p>
          </div>

          {/* Security practices */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-green-950/10 border border-green-800/30">
              <Lock className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-mono font-bold text-white mb-2">Encryption</h3>
              <ul className="space-y-2 text-steel-400 text-sm">
                <li>• AES-256 encryption at rest</li>
                <li>• TLS 1.3 encryption in transit</li>
                <li>• Key management via HSM</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-green-950/10 border border-green-800/30">
              <FileCheck className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-mono font-bold text-white mb-2">Integrity</h3>
              <ul className="space-y-2 text-steel-400 text-sm">
                <li>• SHA-256 cryptographic signing</li>
                <li>• Immutable audit logs</li>
                <li>• Tamper detection</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-green-950/10 border border-green-800/30">
              <Shield className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-mono font-bold text-white mb-2">Access Control</h3>
              <ul className="space-y-2 text-steel-400 text-sm">
                <li>• Role-based access control (RBAC)</li>
                <li>• Multi-tenant isolation</li>
                <li>• API key authentication</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-green-950/10 border border-green-800/30">
              <AlertTriangle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-mono font-bold text-white mb-2">Monitoring</h3>
              <ul className="space-y-2 text-steel-400 text-sm">
                <li>• 24/7 infrastructure monitoring</li>
                <li>• Anomaly detection</li>
                <li>• Incident response procedures</li>
              </ul>
            </div>
          </div>

          {/* Vulnerability reporting */}
          <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30 mb-12">
            <h3 className="text-lg font-mono font-bold text-white mb-4">Vulnerability Reporting</h3>
            <p className="text-steel-400 mb-4">
              If you discover a security vulnerability, please report it responsibly.
            </p>
            <p className="text-steel-400 text-sm">
              Email:{' '}
              <a href="mailto:security@novyxlabs.com" className="text-green-400 hover:underline">
                security@novyxlabs.com
              </a>
            </p>
          </div>

          <div className="text-center">
            <p className="text-steel-500 text-sm mb-4">
              For enterprise security requirements
            </p>
            <Link
              href="/products/integrity"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-green-500 text-white font-mono font-semibold hover:bg-green-600 transition-all"
            >
              <Shield className="mr-2 w-4 h-4" />
              Learn about Novyx Integrity
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
