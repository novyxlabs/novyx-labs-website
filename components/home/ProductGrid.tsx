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
            Production-ready memory infrastructure for autonomous AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Novyx Core */}
          <a
            href="/products/core"
            className="group relative p-6 rounded-2xl border transition-all duration-300 bg-pulse-950/10 border-pulse-800/30 hover:border-pulse-600 hover:shadow-2xl block"
          >
            <div className="absolute top-4 right-4">
              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold border bg-green-500/20 text-green-400 border-green-500/30">
                LIVE
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border bg-pulse-500/10 border-pulse-500/30">
              <svg className="w-6 h-6 text-pulse-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" strokeWidth="2" />
                <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-xl text-white mb-2">Novyx Core</h3>
            <p className="text-steel-300 font-medium mb-2 text-sm">The persistence engine</p>
            <p className="text-steel-500 text-xs mb-4">Knowledge graph • Semantic search</p>
            <span className="inline-flex items-center text-pulse-400 font-mono font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Learn More →
            </span>
          </a>

          {/* Novyx RAM */}
          <a
            href="/products/ram"
            className="group relative p-6 rounded-2xl border transition-all duration-300 bg-purple-950/10 border-purple-800/30 hover:border-purple-600 hover:shadow-2xl block"
          >
            <div className="absolute top-4 right-4">
              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold border bg-green-500/20 text-green-400 border-green-500/30">
                LIVE
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border bg-purple-500/10 border-purple-500/30">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-xl text-white mb-2">Novyx RAM</h3>
            <p className="text-steel-300 font-medium mb-2 text-sm">API for developers</p>
            <p className="text-steel-500 text-xs mb-4">REST API • Real-time memory</p>
            <span className="inline-flex items-center text-purple-400 font-mono font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Learn More →
            </span>
          </a>

          {/* Novyx Integrity */}
          <a
            href="/products/integrity"
            className="group relative p-6 rounded-2xl border transition-all duration-300 bg-green-950/10 border-green-800/30 hover:border-green-600 hover:shadow-2xl block"
          >
            <div className="absolute top-4 right-4">
              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold border bg-green-500/20 text-green-400 border-green-500/30">
                NEW
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border bg-green-500/10 border-green-500/30">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-xl text-white mb-2">Novyx Integrity</h3>
            <p className="text-steel-300 font-medium mb-2 text-sm">Enterprise security</p>
            <p className="text-steel-500 text-xs mb-4">Memory verification • Compliance</p>
            <span className="inline-flex items-center text-green-400 font-mono font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Learn More →
            </span>
          </a>

          {/* LangChain Integration */}
          <a
            href="/products/langchain"
            className="group relative p-6 rounded-2xl border transition-all duration-300 bg-orange-950/10 border-orange-800/30 hover:border-orange-600 hover:shadow-2xl block"
          >
            <div className="absolute top-4 right-4">
              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold border bg-green-500/20 text-green-400 border-green-500/30">
                LIVE
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border bg-orange-500/10 border-orange-500/30">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-xl text-white mb-2">LangChain</h3>
            <p className="text-steel-300 font-medium mb-2 text-sm">pip install novyx-langchain</p>
            <p className="text-steel-500 text-xs mb-4">Persistent memory for agents</p>
            <span className="inline-flex items-center text-orange-400 font-mono font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Learn More →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
