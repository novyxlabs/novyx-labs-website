'use client'

import { Briefcase, Code, Rocket, TrendingUp, Users, FileText } from 'lucide-react'

const useCases = [
  {
    icon: Briefcase,
    title: 'Legal Practice Automation',
    description: 'Automate contract review, document generation, and compliance tracking with AI that understands your specific practice area and client needs.',
    stats: '10x faster document processing',
  },
  {
    icon: Code,
    title: 'Developer Productivity',
    description: 'Code generation, debugging, and architecture decisions with full context of your codebase, team conventions, and project history.',
    stats: '40% reduction in development time',
  },
  {
    icon: Rocket,
    title: 'Startup Operations',
    description: 'From fundraising strategy to hiring plans, Core learns your startup\'s unique context and provides increasingly relevant guidance.',
    stats: 'Saves 15+ hours/week for founders',
  },
  {
    icon: TrendingUp,
    title: 'Sales & Customer Success',
    description: 'Maintain deep context on every customer interaction, automatically suggesting next steps and personalized outreach strategies.',
    stats: '2x improvement in conversion',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Core acts as institutional memory for your team, capturing decisions, learnings, and context that would otherwise be lost.',
    stats: '90% reduction in context switching',
  },
  {
    icon: FileText,
    title: 'Content & Research',
    description: 'Generate content that builds on previous work, maintaining consistent voice and incorporating all relevant research automatically.',
    stats: '5x content output increase',
  },
]

export function CoreUseCases() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-navy dark:text-white">
            Built for
            <span className="gradient-text"> Every Workflow</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Novyx Core adapts to your specific needs, whether you're a solo founder,
            a growing startup, or an established business.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 hover:border-electric-blue dark:hover:border-electric-blue transition-all duration-300 hover:shadow-xl group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">
                {useCase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {useCase.description}
              </p>

              {/* Stats */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-navy-700">
                <p className="text-electric-blue font-semibold text-sm">
                  {useCase.stats}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-electric-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
