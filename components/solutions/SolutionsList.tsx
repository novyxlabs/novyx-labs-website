'use client'

import { Brain, FileText, Shield, Check, Clock, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/Button'

const solutions = [
  {
    name: 'Novyx Core',
    status: 'flagship',
    price: 'Open Beta',
    description: 'A persistent AI brain for knowledge graphs that endure. Remember everything, connect automatically, learn continuously.',
    icon: <Brain className="w-7 h-7 text-white" />,
    features: [
      'Never forgets—persistent knowledge graphs',
      'Learns from every interaction automatically',
      'Connects related information intelligently',
      'Simple 3-line API for developers',
      'Your data stays private and encrypted',
      'Sub-second query responses',
    ],
    link: '/core',
    badgeColor: 'bg-electric-blue',
    badgeText: 'Active Development',
  },
  {
    name: 'Federation Sync',
    status: 'coming-soon',
    price: 'TBA',
    description: 'Sync knowledge graphs across distributed AI systems. Enable multi-model collaboration with shared persistent memory.',
    icon: <Shield className="w-7 h-7 text-white" />,
    features: [
      'Cross-model knowledge sharing',
      'Distributed graph synchronization',
      'Conflict-free merges',
      'Real-time federation updates',
      'Multi-region deployment support',
      'Encrypted edge-to-edge sync',
    ],
    link: '#federation',
    badgeColor: 'bg-gray-500',
    badgeText: 'Coming Q2 2026',
  },
  {
    name: 'Enterprise Dashboard',
    status: 'coming-soon',
    price: 'TBA',
    description: 'Monitor and manage your AI knowledge graphs at scale. Analytics, insights, and control for production deployments.',
    icon: <FileText className="w-7 h-7 text-white" />,
    features: [
      'Real-time usage analytics',
      'Knowledge graph visualization',
      'Query performance monitoring',
      'Team collaboration tools',
      'Cost and usage tracking',
      'Audit logs and compliance reports',
    ],
    link: '#dashboard',
    badgeColor: 'bg-gray-500',
    badgeText: 'Coming Q3 2026',
  },
]

export function SolutionsList() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div
              key={solution.name}
              id={solution.status === 'live' ? 'legal' : solution.status === 'coming-soon' ? 'compliance' : ''}
              className={`glass rounded-3xl overflow-hidden ${
                solution.status === 'flagship' 
                  ? 'border-2 border-electric-blue dark:border-electric-blue shadow-2xl' 
                  : solution.status === 'live'
                  ? 'border-2 border-green-500 dark:border-green-500'
                  : ''
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 sm:p-12">
                {/* Solution Info */}
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className={`${solution.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {solution.badgeText}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-navy dark:text-white">{solution.name}</h3>
                    <p className="text-2xl font-bold gradient-text mb-4">
                      {solution.price}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {solution.description}
                  </p>

                  {/* CTA Button */}
                  {solution.status === 'flagship' || solution.status === 'live' ? (
                    <a href={solution.link}>
                      <Button size="lg" className="group">
                        {solution.status === 'flagship' ? 'Explore Novyx Core' : 'Get Started'}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">Available Soon</span>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-navy-700">
                  <h4 className="font-semibold text-lg mb-4 text-navy dark:text-white">Key Features:</h4>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto border border-gray-200 dark:border-navy-700">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-electric-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">
              Need Something Specific?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're constantly exploring new verticals. Tell us about your challenges
              and we'll see how we can help.
            </p>
            <a href="/contact">
              <Button size="lg">Share Your Needs</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
