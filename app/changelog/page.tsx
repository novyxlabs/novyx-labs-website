import { Metadata } from 'next'
import Link from 'next/link'
import { History, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Changelog - Novyx Labs',
  description: 'Stay up to date with the latest updates, improvements, and features in Novyx products.',
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-pulse/10 border border-pulse/30 flex items-center justify-center mx-auto mb-6">
              <History className="w-8 h-8 text-pulse" />
            </div>
            <h1 className="mono-heading text-4xl text-white mb-4">Changelog</h1>
            <p className="text-steel-400">
              Updates, improvements, and new features.
            </p>
          </div>

          {/* Latest updates */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-mono font-bold">
                  NEW
                </span>
                <span className="text-steel-500 text-sm font-mono">January 2025</span>
              </div>
              <h3 className="text-lg font-mono font-bold text-white mb-2">novyx-langchain v0.1.0</h3>
              <ul className="space-y-2 text-steel-400 text-sm">
                <li>• Initial release of LangChain integration</li>
                <li>• NovyxChatMessageHistory for persistent conversation memory</li>
                <li>• Semantic search across message history</li>
                <li>• Session isolation for multi-tenant applications</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-2 py-1 rounded bg-pulse-500/20 text-pulse-400 text-xs font-mono font-bold">
                  LAUNCH
                </span>
                <span className="text-steel-500 text-sm font-mono">December 2024</span>
              </div>
              <h3 className="text-lg font-mono font-bold text-white mb-2">Novyx Labs Launch</h3>
              <ul className="space-y-2 text-steel-400 text-sm">
                <li>• Public launch of Novyx memory infrastructure</li>
                <li>• Novyx Core knowledge graph engine</li>
                <li>• Novyx RAM developer API</li>
                <li>• Documentation and getting started guides</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-steel-500 text-sm mb-4">
              Subscribe to updates
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center text-pulse-400 font-mono font-semibold hover:text-pulse-300 transition-colors"
            >
              Join the waitlist <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
