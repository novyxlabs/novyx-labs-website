'use client'

import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/Button'
import Link from 'next/link'

const benefits = [
  'Full access to Core API and documentation',
  'Federation and Dashboard extensions included',
  'Multi-tenant architecture out of the box',
  'Enterprise-grade security and compliance',
  'Direct support from the Core team',
]

export function CoreCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy via-navy-800 to-electric-blue relative overflow-hidden">
      {/* Neural pattern overlay */}
      <div className="absolute inset-0 neural-connections opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-white text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Deploy Core Today
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Novyx Core is live and production-ready. Get started with persistent AI that powers
            your knowledge graphs, with Federation and Dashboard extensions available now.
          </p>
        </div>

        {/* Benefits */}
        <div className="glass rounded-2xl p-8 mb-8 backdrop-blur-xl bg-white/10 border border-white/20">
          <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
          <ul className="space-y-4 text-left max-w-2xl mx-auto">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-electric-blue flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://github.com/novyxlabs" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-navy hover:bg-white/90">
              View on GitHub
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-white/80 text-sm">
          Production-ready • Full documentation • Enterprise support available
        </p>
      </div>
    </section>
  )
}
