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
            <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">What We Build</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Persistent AI systems that remember. We're starting with Novyx Core—a knowledge 
              graph that endures across conversations.
            </p>
          </div>

          {/* Why */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">Why It Matters</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Most AI forgets everything the moment you close the chat. We're fixing that.
              Your AI should remember, learn, and grow with you.
            </p>
          </div>

          {/* Who */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">Who It's For</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Builders, founders, and developers who need AI that actually keeps context.
              If you're tired of repeating yourself, Core is for you.
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
