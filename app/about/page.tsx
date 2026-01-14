'use client'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-mono font-bold text-5xl sm:text-6xl text-white mb-6">
            Building Infrastructure for AI That Remembers
          </h1>
          <p className="text-2xl text-steel-300 mb-8 font-medium">
            Intelligence that persists. Code that endures.
          </p>
          <p className="text-xl text-steel-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Novyx Labs is an infrastructure company solving foundational problems in AI memory and persistence.
            We build cryptographically durable knowledge graphs, real-time integrity verification, and context that compounds over time.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left mt-16">
            <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
              <h3 className="text-xl font-mono font-bold text-white mb-3">Durability</h3>
              <p className="text-steel-400 text-sm">
                Memory that survives restarts. Context that persists across sessions. Knowledge that compounds over time.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
              <h3 className="text-xl font-mono font-bold text-white mb-3">Legibility</h3>
              <p className="text-steel-400 text-sm">
                No black boxes. Human-readable formats. Semantic search. Debuggable behavior.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
              <h3 className="text-xl font-mono font-bold text-white mb-3">Verifiability</h3>
              <p className="text-steel-400 text-sm">
                Cryptographic integrity. Audit trails. Compliance-ready. Trust but verify.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <p className="text-steel-500 text-sm font-mono">
              Founded 2024 · Open-core infrastructure · Backed by [Investor Space]
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
