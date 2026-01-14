'use client'

export function ProductGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-void">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-4xl sm:text-5xl text-white mb-4">
            Infrastructure Portfolio
          </h2>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            Durable, verifiable, production-ready infrastructure for autonomous AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="/products/core"
            className="group relative p-8 rounded-2xl border transition-all duration-300 bg-pulse-950/10 border-pulse-800/30 hover:border-pulse-600 hover:shadow-2xl block"
          >
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border bg-green-500/20 text-green-400 border-green-500/30">
                LIVE
              </span>
            </div>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 border bg-pulse-500/10 border-pulse-500/30">
              <svg className="w-7 h-7 text-pulse-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" strokeWidth="2" />
                <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-2xl text-white mb-2">Novyx Core</h3>
            <p className="text-steel-300 font-medium mb-3 text-sm">Knowledge graph with semantic search</p>
            <p className="text-steel-400 text-sm mb-6">516 artifacts verified • SHA-256 • MIT licensed</p>
            <span className="inline-flex items-center text-pulse-400 font-mono font-semibold group-hover:translate-x-1 transition-transform">
              Learn More →
            </span>
          </a>

          <a
            href="/products/integrity"
            className="group relative p-8 rounded-2xl border transition-all duration-300 bg-green-950/10 border-green-800/30 hover:border-green-600 hover:shadow-2xl block"
          >
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border bg-blue-500/20 text-blue-400 border-blue-500/30">
                BETA
              </span>
            </div>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 border bg-green-500/10 border-green-500/30">
              <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-2xl text-white mb-2">Novyx Integrity</h3>
            <p className="text-steel-300 font-medium mb-3 text-sm">Memory verification for enterprise AI</p>
            <p className="text-steel-400 text-sm mb-6">Real-time detection • Auto-rollback • SOC 2 ready</p>
            <span className="inline-flex items-center text-green-400 font-mono font-semibold group-hover:translate-x-1 transition-transform">
              Learn More →
            </span>
          </a>

          <a
            href="/products"
            className="group relative p-8 rounded-2xl border transition-all duration-300 bg-steel-900/20 border-steel-700/30 hover:border-steel-600 hover:shadow-2xl block"
          >
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border bg-steel-500/20 text-steel-400 border-steel-500/30">
                COMING
              </span>
            </div>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 border bg-steel-500/10 border-steel-500/30">
              <svg className="w-7 h-7 text-steel-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 3l9 7-9 7-9-7 9-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 17l9 7-9 7-9-7 9-7z" opacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-2xl text-white mb-2">More Coming Soon</h3>
            <p className="text-steel-300 font-medium mb-3 text-sm">Context compression and more</p>
            <p className="text-steel-400 text-sm mb-6">Q2 2025 • Open beta • Community-driven</p>
            <span className="inline-flex items-center text-steel-400 font-mono font-semibold group-hover:translate-x-1 transition-transform">
              View Roadmap →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
