import { Metadata } from 'next'
import Link from 'next/link'
import { LayoutDashboard, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dashboard - Novyx Labs',
  description: 'Novyx Labs dashboard for managing your memory infrastructure.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-void pt-20 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-2xl bg-pulse/10 border border-pulse/30 flex items-center justify-center mx-auto mb-8">
          <LayoutDashboard className="w-10 h-10 text-pulse" />
        </div>

        <h1 className="mono-heading text-4xl text-white mb-4">
          Dashboard Coming Soon
        </h1>

        <p className="text-xl text-steel-400 mb-8">
          We're building something great. We'll notify you when it's ready.
        </p>

        <div className="p-6 rounded-2xl bg-steel-900/20 border border-steel-700/30 mb-8">
          <h3 className="font-mono font-bold text-white mb-4">What's coming:</h3>
          <ul className="space-y-3 text-left">
            {[
              'API key management',
              'Usage analytics',
              'Memory browser',
              'Team collaboration',
              'Billing & invoices',
            ].map((feature) => (
              <li key={feature} className="flex items-center space-x-3 text-steel-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-pulse-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all"
          >
            Explore Products
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </div>
  )
}
