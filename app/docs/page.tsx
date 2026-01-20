import { Metadata } from 'next'
import Link from 'next/link'
import { Book, ArrowRight, Package, Zap, Database, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation - Novyx Labs',
  description: 'Documentation for Novyx memory infrastructure. Guides, API references, and examples for Core, RAM, Integrity, and LangChain integration.',
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-pulse/10 border border-pulse/30 text-pulse text-sm font-mono font-medium mb-8">
            <Book className="w-4 h-4" />
            <span>DOCUMENTATION</span>
          </div>

          <h1 className="mono-heading text-5xl sm:text-6xl text-white mb-6">
            Getting Started
          </h1>

          <p className="text-xl text-steel-400 max-w-2xl mx-auto mb-12">
            Everything you need to integrate Novyx memory infrastructure into your AI applications.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="w-8 h-8 text-green-400" />
            <h2 className="mono-heading text-3xl text-white">Quick Start</h2>
          </div>

          <p className="text-steel-400 mb-8 max-w-2xl">
            Get up and running with Novyx in minutes.
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
              <h3 className="text-lg font-mono font-bold text-white mb-3">1. Get your API key</h3>
              <p className="text-steel-400">Sign up for a free developer account and get your API key from the dashboard.</p>
            </div>
            <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
              <h3 className="text-lg font-mono font-bold text-white mb-3">2. Install the SDK</h3>
              <p className="text-steel-400 mb-3">Install the Python package for LangChain integration:</p>
              <div className="bg-void-900 rounded-lg p-3">
                <code className="text-orange-400 font-mono text-sm">pip install novyx-langchain</code>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
              <h3 className="text-lg font-mono font-bold text-white mb-3">3. Initialize and start storing memories</h3>
              <p className="text-steel-400">Create a session, add messages, and query with semantic search. Memories persist automatically.</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/products/langchain"
              className="inline-flex items-center text-green-400 font-mono font-semibold hover:text-green-300 transition-colors"
            >
              View full quickstart guide <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section id="api-reference" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="w-8 h-8 text-purple-400" />
            <h2 className="mono-heading text-3xl text-white">API Reference</h2>
          </div>

          <p className="text-steel-400 mb-8 max-w-2xl">
            Complete REST API documentation for direct integrations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-purple-950/10 border border-purple-800/30">
              <h3 className="text-lg font-mono font-bold text-white mb-3">Endpoints</h3>
              <ul className="space-y-2 text-steel-400 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400 font-mono">POST</span>
                  <span>/v1/memories - Store a new memory</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400 font-mono">GET</span>
                  <span>/v1/memories/search - Semantic search</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400 font-mono">GET</span>
                  <span>/v1/memories/:id - Retrieve by ID</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-purple-950/10 border border-purple-800/30">
              <h3 className="text-lg font-mono font-bold text-white mb-3">Authentication</h3>
              <ul className="space-y-2 text-steel-400 text-sm">
                <li>Bearer token authentication</li>
                <li>API keys managed via dashboard</li>
                <li>Rate limits based on plan tier</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/products/ram"
              className="inline-flex items-center text-purple-400 font-mono font-semibold hover:text-purple-300 transition-colors"
            >
              View full API reference <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LangChain Integration */}
      <section id="langchain" className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Package className="w-8 h-8 text-orange-400" />
            <h2 className="mono-heading text-3xl text-white">LangChain Integration</h2>
          </div>

          <p className="text-steel-400 mb-8 max-w-2xl">
            Drop-in replacement for LangChain memory classes.
          </p>

          <div className="p-6 rounded-xl bg-orange-950/10 border border-orange-800/30 mb-6">
            <h3 className="text-lg font-mono font-bold text-white mb-3">NovyxChatMessageHistory</h3>
            <ul className="space-y-2 text-steel-400 text-sm">
              <li>Compatible with all LangChain agents and chains</li>
              <li>Automatic persistence across restarts and deployments</li>
              <li>Session isolation for multi-tenant applications</li>
            </ul>
          </div>

          <div className="bg-void-900 border border-steel-700/30 rounded-xl p-4 mb-6">
            <code className="text-orange-400 font-mono">pip install novyx-langchain</code>
          </div>

          <div className="mt-8">
            <Link
              href="/products/langchain"
              className="inline-flex items-center text-orange-400 font-mono font-semibold hover:text-orange-300 transition-colors"
            >
              View LangChain guide <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-green-400" />
            <h2 className="mono-heading text-3xl text-white">Security & Compliance</h2>
          </div>

          <p className="text-steel-400 mb-8 max-w-2xl">
            Enterprise-grade security for mission-critical applications.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-green-950/10 border border-green-800/30">
              <h3 className="text-lg font-mono font-bold text-white mb-3">Data Security</h3>
              <ul className="space-y-2 text-steel-400 text-sm">
                <li>AES-256 encryption at rest</li>
                <li>TLS 1.3 encryption in transit</li>
                <li>Cryptographic integrity verification (SHA-256)</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-green-950/10 border border-green-800/30">
              <h3 className="text-lg font-mono font-bold text-white mb-3">Compliance</h3>
              <ul className="space-y-2 text-steel-400 text-sm">
                <li>Enterprise-grade security controls</li>
                <li>GDPR-ready data handling</li>
                <li>Audit logging and access controls</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/products/integrity"
              className="inline-flex items-center text-green-400 font-mono font-semibold hover:text-green-300 transition-colors"
            >
              Learn about Novyx Integrity <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mono-heading text-3xl text-white mb-6">Need Help?</h2>
          <p className="text-steel-400 mb-8">
            Full documentation is being prepared. In the meantime, reach out for support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg shadow-pulse/20"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  )
}
