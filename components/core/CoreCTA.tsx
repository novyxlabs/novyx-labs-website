'use client'

import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/Button'
import Link from 'next/link'

const benefits = [
  'Open-source foundation with enterprise extensions',
  'HMAC-SHA256 signatures on every transaction',
  'Multi-tenant isolation with zero-knowledge boundaries',
  'Sub-10ms MTTR self-healing architecture',
  'SOC 2, ISO 27001, GDPR, HIPAA ready',
]

export function CoreCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-midnight to-slate-900 relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10 text-white text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-mono">
            Deploy Enterprise Governance
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Novyx Core is production-ready. Start with the open-source foundation, scale to Enterprise 
            Platform (Dashboard & Sentinel) for automated compliance and real-time monitoring.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-8 backdrop-blur-xl">
          <h3 className="text-2xl font-bold mb-6 font-mono text-accent">Core Capabilities:</h3>
          <ul className="space-y-4 text-left max-w-2xl mx-auto">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-midnight" />
                </div>
                <span className="text-slate-300 font-mono text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://github.com/novyxlabs/novyx-core" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent text-midnight hover:bg-accent/90 font-mono">
              View on GitHub
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <Link href="/enterprise">
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 font-mono">
              Explore Enterprise Platform
            </Button>
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-slate-500 text-sm font-mono">
          SOC 2 TYPE II • ISO 27001 • GDPR • HIPAA READY
        </p>
      </div>
    </section>
  )
}
