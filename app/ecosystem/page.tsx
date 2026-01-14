import { Metadata } from 'next'
import { Network, Brain, Scale, Shield, Sparkles, Plus } from 'lucide-react'
import { TechTile } from '@/components/TechTile'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Ecosystem - Novyx Labs Solutions | Novyx Labs',
  description: 'Explore our comprehensive ecosystem of AI-powered solutions for modern founders across every vertical.',
  openGraph: {
    title: 'AI Ecosystem - Novyx Labs',
    description: 'AI solutions for founders across every vertical',
    type: 'website',
  },
}

const liveProjects = [
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: 'Novyx Core',
    description: 'Flagship persistent intelligence system with infinite memory and cross-session learning capabilities.',
    badge: 'Flagship',
    badgeColor: 'bg-electric-blue',
    href: '/core',
  },
  {
    icon: <Scale className="w-6 h-6 text-white" />,
    title: 'Legal Generator',
    description: 'AI-powered legal document generation for NDAs, operating agreements, and compliance documents.',
    badge: 'Live',
    badgeColor: 'bg-green-500',
    href: '/solutions#legal',
  },
]

const upcomingProjects = [
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: 'Compliance Hub',
    description: 'Automated compliance tracking, regulatory monitoring, and deadline management for startups.',
    badge: 'Q2 2026',
    badgeColor: 'bg-gray-500',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: 'Finance Automation',
    description: 'AI-powered bookkeeping, expense tracking, and financial forecasting tailored for early-stage companies.',
    badge: 'Q3 2026',
    badgeColor: 'bg-gray-500',
  },
]

const exploringVerticals = [
  'HR & Talent Management',
  'Operations & Workflow Automation',
  'Sales Intelligence & CRM',
  'Product Development & Roadmapping',
  'Customer Support & Success',
  'Marketing & Content Generation',
]

export default function EcosystemPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-navy via-navy-800 to-electric-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 neural-connections opacity-20" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
            <Network className="w-4 h-4" />
            <span>Full Ecosystem</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            AI Solutions for Every Challenge
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From persistent intelligence to vertical-specific automation, we're building
            a comprehensive ecosystem of tools that modern founders actually need.
          </p>
        </div>
      </section>

      {/* Live Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-navy dark:text-white">
              Live Now
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Production-ready solutions you can start using today
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {liveProjects.map((project) => (
              <TechTile key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gray-50 dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-navy dark:text-white">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Next-generation tools currently in development
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProjects.map((project) => (
              <TechTile key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Exploring Verticals */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-navy dark:text-white">
              Future Verticals
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're exploring AI solutions for these founder challenges. Have a specific need?
              Let us know and help shape our roadmap.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {exploringVerticals.map((vertical) => (
              <div
                key={vertical}
                className="p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-navy-700 text-center hover:border-electric-blue dark:hover:border-electric-blue transition-all duration-300"
              >
                <Plus className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
                <p className="text-navy dark:text-white font-semibold">{vertical}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-br from-navy to-electric-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Help Us Build for You
          </h2>
          <p className="text-xl text-white/80 mb-8">
            We're founder-first. Tell us what challenges you're facing and we'll explore
            building AI solutions specifically for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-navy font-semibold hover:bg-white/90 transition-all"
          >
            Share Your Challenges
            <Plus className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
