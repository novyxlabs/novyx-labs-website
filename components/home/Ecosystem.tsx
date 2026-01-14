'use client'

import { Brain, Scale, Shield, Zap, Sparkles, Plus } from 'lucide-react'
import { TechTile } from '@/components/TechTile'
import Link from 'next/link'

const ecosystemItems = [
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: 'Novyx Core',
    description: 'Advanced persistent intelligence system that learns and adapts across all interactions.',
    badge: 'Flagship',
    badgeColor: 'bg-electric-blue',
    href: '/core',
  },
  {
    icon: <Scale className="w-6 h-6 text-white" />,
    title: 'Legal Generator',
    description: 'AI-powered legal document generation for NDAs, contracts, and compliance documents.',
    badge: 'Live',
    badgeColor: 'bg-green-500',
    href: '/solutions#legal',
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: 'Compliance Hub',
    description: 'Automated compliance tracking and regulatory monitoring for growing startups.',
    badge: 'Q2 2026',
    badgeColor: 'bg-gray-500',
    href: '/solutions#compliance',
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: 'Future Verticals',
    description: 'Exploring AI automation for finance, HR, operations, and more founder challenges.',
    badge: 'Coming',
    badgeColor: 'bg-gray-500',
    href: '/ecosystem',
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
            Intelligence Across Every
            <span className="gradient-text"> Vertical</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From legal automation to persistent AI assistance, we're building the tools
            that modern founders need to move faster and build better.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {ecosystemItems.map((item, index) => (
            <div
              key={item.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
            >
              <TechTile {...item} />
            </div>
          ))}
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
