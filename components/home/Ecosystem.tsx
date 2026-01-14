'use client'

import { Brain, Scale, Shield, Zap, Sparkles, Plus } from 'lucide-react'
import { TechTile } from '@/components/TechTile'
import Link from 'next/link'

const ecosystemItems = [
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: 'Novyx Core',
    description: 'Persistent AI brain for enduring knowledge graphs. The flagship powering all Labs capabilities.',
    badge: 'Live',
    badgeColor: 'bg-green-500',
    href: '/core',
  },
  {
    icon: <Scale className="w-6 h-6 text-white" />,
    title: 'Federation Sync',
    description: 'Core extension for distributed knowledge graphs. Sync across models and regions seamlessly.',
    badge: 'Available',
    badgeColor: 'bg-electric-blue',
    href: '/core#federation',
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: 'Enterprise Dashboard',
    description: 'Core extension for production monitoring. Visualize, analyze, and manage at scale.',
    badge: 'Available',
    badgeColor: 'bg-electric-blue',
    href: '/core#dashboard',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: 'AI Agent Framework',
    description: 'Build autonomous agents with persistent memory. Deploy intelligent workflows that learn.',
    badge: 'Q2 2026',
    badgeColor: 'bg-gray-500',
    href: '/ecosystem#agents',
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: 'Developer SDK',
    description: 'Pre-built integrations and tooling. Accelerate development with Core-powered libraries.',
    badge: 'Q3 2026',
    badgeColor: 'bg-gray-500',
    href: '/ecosystem#sdk',
  },
]

export function Ecosystem() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-navy-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 neural-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-electric-blue/10 text-electric-blue text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our AI Ecosystem</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-navy dark:text-white">
            What We're
            <span className="gradient-text"> Building</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Starting with Core. Building the infrastructure for persistent AI that actually remembers.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up max-w-6xl mx-auto">
          {ecosystemItems.slice(0, 3).map((item, index) => (
            <div
              key={item.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
            >
              <TechTile {...item} />
            </div>
          ))}
        </div>

        {/* Future Spokes */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-navy dark:text-white">
            Future Spokes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ecosystemItems.slice(3).map((item, index) => (
              <div
                key={item.title}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
                className="animate-fade-in"
              >
                <TechTile {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/ecosystem"
            className="inline-flex items-center text-electric-blue hover:text-electric-blue-600 font-medium group"
          >
            <span>Explore our full ecosystem</span>
            <Plus className="ml-2 w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
