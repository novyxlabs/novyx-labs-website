'use client'

import Link from 'next/link'
import { ArrowRight, Database, Shield, GitBranch } from 'lucide-react'

export function InfraHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-pulse/10 border border-pulse/30 text-pulse text-sm font-mono font-medium mb-8">
          <Database className="w-4 h-4" />
          <span>INFRASTRUCTURE FOR AUTONOMOUS AI</span>
        </div>

        {/* Main headline */}
        <h1 className="mono-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
          Building the persistence layer
          <br />
          <span className="gradient-text">for autonomous AI</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl text-steel-300 mb-8 font-medium">
          Intelligence that persists. Code that endures.
        </p>

        {/* Description */}
        <p className="text-xl text-steel-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          We build cryptographically durable infrastructure for AI agents.
          Memory that survives restarts. Context that doesn't corrupt. Persistence you can verify.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg shadow-pulse/20"
          >
            Explore Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <a
            href="https://github.com/novyxlabs/novyx-core"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
          >
            <GitBranch className="mr-2 w-5 h-5" />
            View on GitHub
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-steel-500 text-sm font-mono">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>516 artifacts verified</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>SHA-256 integrity</span>
          </div>
          <div className="flex items-center space-x-2">
            <Database className="w-4 h-4" />
            <span>100% audit pass</span>
          </div>
        </div>
      </div>
    </section>
  )
}
