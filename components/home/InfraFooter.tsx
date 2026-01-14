'use client'

export function InfraFooter() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-void-800/30 border-t border-steel-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-pulse/10 border border-pulse/30 flex items-center justify-center">
                <span className="text-pulse font-mono font-bold text-xl">N</span>
              </div>
              <span className="text-white font-mono font-bold text-xl">Novyx Labs</span>
            </div>
            <p className="text-steel-400 mb-4">
              Building durable infrastructure for autonomous AI.
              <br />
              Intelligence that persists. Code that endures.
            </p>
            <p className="text-steel-500 text-sm font-mono">
              Founded 2024 · Backed by [Investor Space]
            </p>
          </div>

          {/* Technical specs */}
          <div>
            <h3 className="text-white font-mono font-bold mb-4">Infrastructure Builders</h3>
            <p className="text-steel-400 text-sm leading-relaxed mb-4">
              We're solving foundational problems in AI memory and persistence. 
              Cryptographic durability. Verifiable integrity. Context that survives.
            </p>
            <div className="space-y-2 text-sm font-mono text-steel-500">
              <div>→ Open-core foundation</div>
              <div>→ Production-ready infrastructure</div>
              <div>→ Built by builders, for builders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
