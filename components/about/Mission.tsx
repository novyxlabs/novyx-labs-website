'use client'

import { Shield, Building2 } from 'lucide-react'

export function Mission() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-midnight via-slate-900 to-midnight relative overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-5xl mx-auto text-center text-white relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/30 text-accent text-sm font-mono font-semibold mb-8">
          <Building2 className="w-4 h-4" />
          <span>NOVYX LABS LLC</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 font-mono">
          Automated Trust for the Federated Enterprise
        </h1>
        
        <p className="text-2xl text-slate-300 leading-relaxed mb-12 max-w-4xl mx-auto">
          Novyx Labs provides the complete stack for enterprise governance and federated intelligence—from 
          open-core cryptographic foundations to enterprise-plus compliance automation. We deliver 
          mathematical guarantees of integrity, sovereignty, and auditability for regulated industries.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-slate-900/50 rounded-xl p-6 border border-slate-700">
            <div className="text-4xl font-bold mb-2 text-accent font-mono">&lt;10ms</div>
            <div className="text-slate-400 font-mono text-sm">Mean Time To Recovery</div>
          </div>
          <div className="text-center bg-slate-900/50 rounded-xl p-6 border border-slate-700">
            <div className="text-4xl font-bold mb-2 text-accent font-mono">99.99%</div>
            <div className="text-slate-400 font-mono text-sm">Uptime Guarantee</div>
          </div>
          <div className="text-center bg-slate-900/50 rounded-xl p-6 border border-slate-700">
            <div className="text-4xl font-bold mb-2 text-accent font-mono">Zero</div>
            <div className="text-slate-400 font-mono text-sm">Knowledge Boundaries</div>
          </div>
        </div>
      </div>
    </section>
  )
}



