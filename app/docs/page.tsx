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

      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-8">Quick Start Guides</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/products/langchain"
              className="group p-6 rounded-xl bg-orange-950/10 border border-orange-800/30 hover:border-orange-600 transition-all"
            >
              <Package className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-mono font-bold text-white mb-2">LangChain Integration</h3>
              <p className="text-steel-400 mb-4">Add persistent memory to your LangChain agents with a single pip install.</p>
              <div className="bg-void-900 rounded-lg p-3 mb-4">
                <code className="text-orange-400 font-mono text-sm">pip install novyx-langchain</code>
              </div>
              <span className="inline-flex items-center text-orange-400 font-mono font-semibold group-hover:translate-x-1 transition-transform">
                View Guide <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/products/ram"
              className="group p-6 rounded-xl bg-purple-950/10 border border-purple-800/30 hover:border-purple-600 transition-all"
            >
              <Zap className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-mono font-bold text-white mb-2">REST API</h3>
              <p className="text-steel-400 mb-4">Use the Novyx RAM API directly for custom integrations and any language.</p>
              <div className="bg-void-900 rounded-lg p-3 mb-4">
                <code className="text-purple-400 font-mono text-sm">api.novyxlabs.com/v1</code>
              </div>
              <span className="inline-flex items-center text-purple-400 font-mono font-semibold group-hover:translate-x-1 transition-transform">
                View Guide <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-8">Product Documentation</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Novyx Core', href: '/products/core', Icon: Database, color: 'text-pulse-400' },
              { name: 'Novyx RAM', href: '/products/ram', Icon: Zap, color: 'text-purple-400' },
              { name: 'Novyx Integrity', href: '/products/integrity', Icon: Shield, color: 'text-green-400' },
              { name: 'LangChain', href: '/products/langchain', Icon: Package, color: 'text-orange-400' },
            ].map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group p-4 rounded-xl bg-steel-900/20 border border-steel-700/30 hover:border-steel-600 transition-all"
              >
                <product.Icon className={`w-8 h-8 ${product.color} mb-3`} />
                <h3 className="text-lg font-mono font-bold text-white">{product.name}</h3>
              </Link>
            ))}
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
