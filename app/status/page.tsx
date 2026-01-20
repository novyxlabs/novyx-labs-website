import { Metadata } from 'next'
import Link from 'next/link'
import { Activity, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Status - Novyx Labs',
  description: 'System status and uptime information for Novyx infrastructure services.',
}

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <Activity className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="mono-heading text-4xl text-white mb-4">System Status</h1>
            <p className="text-steel-400">
              Current operational status of Novyx services.
            </p>
          </div>

          {/* Overall status */}
          <div className="p-6 rounded-xl bg-green-950/10 border border-green-500/30 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-mono font-bold text-green-400">All Systems Operational</h3>
                <p className="text-steel-400 text-sm">Last updated: Just now</p>
              </div>
            </div>
          </div>

          {/* Service status */}
          <div className="space-y-4 mb-12">
            {[
              { name: 'API (api.novyxlabs.com)', status: 'operational' },
              { name: 'LangChain Integration', status: 'operational' },
              { name: 'Dashboard', status: 'maintenance', note: 'Coming soon' },
              { name: 'Documentation', status: 'operational' },
            ].map((service) => (
              <div
                key={service.name}
                className="p-4 rounded-xl bg-steel-900/20 border border-steel-700/30 flex items-center justify-between"
              >
                <span className="text-white font-mono text-sm">{service.name}</span>
                <div className="flex items-center space-x-2">
                  {service.note && (
                    <span className="text-steel-500 text-xs">{service.note}</span>
                  )}
                  <span
                    className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                      service.status === 'operational'
                        ? 'bg-green-500/20 text-green-400'
                        : service.status === 'maintenance'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {service.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Uptime */}
          <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30 mb-12">
            <h3 className="text-lg font-mono font-bold text-white mb-4">Uptime</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-mono font-bold text-green-400">99.9%</div>
                <div className="text-steel-500 text-xs">Last 30 days</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-green-400">99.95%</div>
                <div className="text-steel-500 text-xs">Last 90 days</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-green-400">&lt;50ms</div>
                <div className="text-steel-500 text-xs">API latency (P99)</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-steel-500 text-sm mb-4">
              Subscribe to status updates
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center text-pulse-400 font-mono font-semibold hover:text-pulse-300 transition-colors"
            >
              Get notified <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
