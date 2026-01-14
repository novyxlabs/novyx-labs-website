'use client'

import { Database, Cpu, Network, RefreshCw, Lock, Zap } from 'lucide-react'

const capabilities = [
  {
    icon: Database,
    title: 'Store Once, Remember Forever',
    description: 'Tell Core something once. It builds a knowledge graph that persists across all conversations.',
  },
  {
    icon: Network,
    title: 'Connects Automatically',
    description: 'Core links related information without you asking. Your knowledge graph grows intelligently.',
  },
  {
    icon: RefreshCw,
    title: 'Learns as You Go',
    description: 'Every conversation makes your AI smarter. No training needed—just talk naturally.',
  },
  {
    icon: Zap,
    title: 'Fast Queries',
    description: 'Sub-second responses even with thousands of stored facts. Optimized for speed.',
  },
  {
    icon: Lock,
    title: 'Your Data Stays Yours',
    description: 'We never train on your data. Everything encrypted. You own your knowledge graph.',
  },
  {
    icon: Cpu,
    title: 'Simple API',
    description: 'Three lines of code to get started. Built for developers who value simplicity.',
  },
]

export function Capabilities() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-navy dark:text-white">
            How
            <span className="gradient-text"> Core Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Simple to use, powerful under the hood. AI that remembers without the complexity.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 hover:border-electric-blue dark:hover:border-electric-blue transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {capability.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-electric-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
