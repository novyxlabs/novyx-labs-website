'use client'

import { Target, Code, Users } from 'lucide-react'

export function WhoWeAre() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-navy dark:text-white">
            Who We Are, Why We're Here
          </h2>
        </div>

        {/* Simple Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* What */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">Novyx Labs LLC</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The umbrella for persistent AI infrastructure. Core is our flagship, with Federation
              and Dashboard as available extensions. More spokes coming soon.
            </p>
          </div>

          {/* Why */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">The Core Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Most AI forgets. Core remembers. A persistent brain for enduring knowledge graphs
              with multi-tenant architecture, versioning, and federation built in.
            </p>
          </div>

          {/* Who */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">Built for Builders</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Developers and companies building AI products. Core powers your persistent memory
              layer so you can focus on your product, not infrastructure.
            </p>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            We're building in public. Follow our progress on GitHub.
          </p>
          <a
            href="https://github.com/novyxlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-electric-blue hover:text-electric-blue-600 font-semibold text-lg group"
          >
            <span>github.com/novyxlabs</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
