'use client'

import Link from 'next/link'
import { ArrowRight, Database, Shield, Package } from 'lucide-react'

export function InfraHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-pulse/10 border border-pulse/30 text-pulse text-sm font-mono font-medium mb-8">
          <Database className="w-4 h-4" />
          <span>NOW AVAILABLE ON PYPI</span>
        </div>

        {/* Main headline */}
        <h1 className="mono-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
          Durable memory infrastructure
          <br />
          <span className="gradient-text">for AI agents</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl text-steel-300 mb-8 font-medium">
          Memory that survives restarts. Context that compounds. Integrity you can verify.
        </p>

        {/* Description */}
        <p className="text-xl text-steel-400 max-w-3xl mx-auto mb-8 leading-relaxed">
          Production-ready memory infrastructure for LangChain, autonomous agents, and enterprise AI.
          Cryptographically verifiable. Semantically searchable. Built for scale.
        </p>

        {/* Free badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono font-medium mb-12">
          <span>✓ Free for developers</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg shadow-pulse/20"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
          >
            Request Demo
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-steel-500 text-sm font-mono">
          <a
            href="https://pypi.org/project/novyx-langchain/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition-colors"
          >
            <Package className="w-4 h-4" />
            <span>pip install novyx-langchain</span>
          </a>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>SHA-256 integrity</span>
          </div>
          <div className="flex items-center space-x-2">
            <Database className="w-4 h-4" />
            <span>Sub-100ms latency</span>
          </div>
        </div>
      </div>
    </section>
  )
}
