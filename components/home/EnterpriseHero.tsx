'use client'

import { Shield, ArrowRight, Lock } from 'lucide-react'
import { Button } from '@/components/Button'
import Link from 'next/link'

export function EnterpriseHero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-midnight via-slate-900 to-midnight">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono font-semibold mb-8 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>ENTERPRISE GOVERNANCE & FEDERATED INTELLIGENCE</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white font-mono">
            Automated Trust for the{' '}
            <span className="gradient-text">Federated Enterprise</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Fix AI forgetfulness. Build knowledge graphs that persist, verify, and scale.
          </p>

          {/* 3-Line API Hook */}
          <div className="bg-midnight border border-slate-700 rounded-xl p-6 max-w-2xl mx-auto mb-10 text-left">
            <div className="flex items-center justify-between mb-3">
              <span className="text-accent font-mono text-xs">QUICK START</span>
              <span className="text-slate-500 font-mono text-xs">3 lines of code</span>
            </div>
            <pre className="text-accent font-mono text-sm leading-relaxed">
              <code>{`const core = new NovyxCore();
await core.store({ data: "persistent" });
await core.query("what did I store?");`}</code>
            </pre>
          </div>

          {/* Technical Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="text-accent font-mono text-sm mb-1">INTEGRITY</div>
              <div className="text-white font-bold text-lg">HMAC-SHA256</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="text-accent font-mono text-sm mb-1">PERFORMANCE</div>
              <div className="text-white font-bold text-lg">&lt;10ms MTTR</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="text-accent font-mono text-sm mb-1">SOVEREIGNTY</div>
              <div className="text-white font-bold text-lg">Multi-Tenant</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/enterprise">
              <Button size="lg" className="group bg-accent text-midnight hover:bg-accent/90 font-mono">
                <Lock className="mr-2 w-5 h-5" />
                Enterprise Platform
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/core">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 font-mono">
                Explore Open Core
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex items-center justify-center space-x-8 text-slate-400 text-sm font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>SOC 2 TYPE II</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>GDPR COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
