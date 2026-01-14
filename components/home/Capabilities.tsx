'use client'

import { Database, Cpu, Network, RefreshCw, Lock, Zap } from 'lucide-react'

const capabilities = [
  {
    icon: Database,
    title: 'Persistent Memory',
    description: 'AI that remembers context across all interactions, learning your preferences and workflows over time.',
  },
  {
    icon: Cpu,
    title: 'Intelligent Automation',
    description: 'Automate complex tasks with AI that understands context, nuance, and your specific business needs.',
  },
  {
    icon: Network,
    title: 'Cross-Platform Integration',
    description: 'Seamlessly connect with your existing tools and workflows for a unified AI experience.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learning',
    description: 'Our AI systems improve with every interaction, becoming more valuable as you use them.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and security protocols to keep your data safe and compliant.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized infrastructure ensures rapid responses without sacrificing accuracy or quality.',
  },
]

export function Capabilities() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-navy dark:text-white">
            Built for
            <span className="gradient-text"> Modern Builders</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade AI capabilities designed specifically for founders
            who need to move fast without compromising on quality.
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
