'use client'

import { Database, Network, Brain, Lock, Zap, RefreshCw, Code, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: 'Never Forgets',
    description: 'Core remembers everything. Build knowledge graphs that persist forever across all conversations.',
  },
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: 'Learns Over Time',
    description: 'Every interaction makes your AI smarter. Context builds automatically without manual input.',
  },
  {
    icon: <Network className="w-6 h-6 text-white" />,
    title: 'Connects Everything',
    description: 'Automatically links related information. Your knowledge graph grows and connects on its own.',
  },
  {
    icon: <Code className="w-6 h-6 text-white" />,
    title: 'Simple API',
    description: 'Three lines of code to get started. Built for developers who value simplicity.',
  },
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    title: 'Your Data, Private',
    description: 'We never train on your data. Everything stays encrypted and under your control.',
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: 'Fast Responses',
    description: 'Sub-second queries even with massive knowledge graphs. Optimized for speed.',
  },
]

export function CoreFeatures() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-navy dark:text-white">
            Why Core?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Most AI forgets. Core remembers. Simple as that.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 hover:border-electric-blue dark:hover:border-electric-blue transition-all duration-300 hover:shadow-xl group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-navy dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-electric-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
