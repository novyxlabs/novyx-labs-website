'use client'

import { Shield, Lock, ArrowRight, Database } from 'lucide-react'
import { Button } from '@/components/Button'
import Link from 'next/link'

export function CoreHero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center bg-midnight">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/30 text-accent text-sm font-mono font-semibold mb-6">
            <Database className="w-4 h-4" />
            <span>OPEN CORE FOUNDATION</span>
          </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-mono">
              Novyx Core
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold mb-6 text-accent">
              Cryptographic Knowledge Graph for Enterprise Governance
            </p>

            {/* Description */}
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Open-source foundation for federated intelligence systems. Immutable versioning, 
              HMAC-SHA256 integrity, and multi-tenant isolation power your compliance-ready 
              knowledge infrastructure.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-accent" />
                <span className="text-slate-200 font-mono text-sm">HMAC Signatures</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-slate-200 font-mono text-sm">Multi-Tenant Isolation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-accent" />
                <span className="text-slate-200 font-mono text-sm">Immutable Versioning</span>
              </div>
              <div className="flex items-center space-x-2">
                <ArrowRight className="w-5 h-5 text-accent" />
                <span className="text-slate-200 font-mono text-sm">Federation Ready</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/novyxlabs" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent text-midnight hover:bg-accent/90 font-mono">
                  View on GitHub
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/enterprise">
                <button className="px-8 py-4 rounded-xl border-2 border-slate-600 hover:border-accent font-mono font-semibold transition-all duration-300 text-slate-200">
                  Explore Enterprise Platform
                </button>
              </Link>
            </div>
          </div>

          {/* Right Visual - Technical Diagram */}
          <div className="relative animate-fade-in">
            <div className="relative bg-slate-900 border border-slate-700 rounded-xl p-8">
              <div className="font-mono text-sm text-accent mb-4">CORE ARCHITECTURE</div>
              
              <div className="space-y-4">
                {/* Layer 1 */}
                <div className="bg-midnight border border-accent/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-slate-400">KNOWLEDGE LAYER</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="font-mono text-sm text-white">Immutable Graph Store</div>
                </div>

                {/* Layer 2 */}
                <div className="bg-midnight border border-accent/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-slate-400">INTEGRITY LAYER</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="font-mono text-sm text-white">HMAC-SHA256 Signatures</div>
                </div>

                {/* Layer 3 */}
                <div className="bg-midnight border border-accent/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-slate-400">ISOLATION LAYER</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="font-mono text-sm text-white">Multi-Tenant Boundaries</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                  <div>
                    <div className="font-mono text-xs text-slate-500">VERIFICATION</div>
                    <div className="font-mono text-lg font-bold text-accent">&lt;10ms</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-500">UPTIME</div>
                    <div className="font-mono text-lg font-bold text-accent">99.99%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
