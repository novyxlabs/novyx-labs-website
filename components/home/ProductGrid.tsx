'use client'

import Link from 'next/link'
import { Database, Shield, Sparkles } from 'lucide-react'

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
          {/* Novyx Core */}
          <a
            href="/products/core"
            className="group relative p-8 rounded-2xl border transition-all duration-300 bg-pulse-950/10 border-pulse-800/30 hover:border-pulse-600 hover:shadow-2xl"
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
            <a href="/products/core" className="inline-flex items-center text-pulse-400 font-mono font-semibold hover:translate-x-1 transition-transform">
              Learn More →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
