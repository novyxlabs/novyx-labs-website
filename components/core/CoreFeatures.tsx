'use client'

import { Database, Network, Brain, Lock, Zap, RefreshCw, Code, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'Persistent Memory Architecture',
    description: 'Unlike traditional AI that forgets after each conversation, Core maintains a comprehensive memory graph of all interactions, preferences, and learnings.',
  },
  {
    icon: Brain,
    title: 'Contextual Intelligence',
    description: 'Understands not just what you say, but what you mean. Core learns your communication style, preferences, and business context over time.',
  },
  {
    icon: Network,
    title: 'Cross-Domain Integration',
    description: 'Seamlessly connects insights and context across all your tools and workflows, providing a unified intelligence layer.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Adaptation',
    description: 'Every interaction makes Core smarter. The system continuously refines its understanding of your needs and optimizes its responses.',
  },
  {
    icon: Code,
    title: 'Developer-First API',
    description: 'Built for developers who need programmatic access. Integrate Core into your applications with our comprehensive API.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: 'Communicate naturally without special commands or syntax. Core understands context, nuance, and follows complex multi-step instructions.',
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description: 'Your data is encrypted at rest and in transit. We never train on your data or share it with third parties. Full SOC 2 compliance.',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Sub-second response times even with complex queries and large context windows. Built on cutting-edge infrastructure.',
  },
]

export function CoreFeatures() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-navy dark:text-white">
            Intelligence That
            <span className="gradient-text"> Evolves</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Novyx Core isn't just another AI assistant—it's a persistent intelligence
            system designed for the way modern founders actually work.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-6 rounded-2xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 hover:border-electric-blue dark:hover:border-electric-blue transition-all duration-300 hover:shadow-xl group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 text-navy dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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
