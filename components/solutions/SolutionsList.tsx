'use client'

import { Brain, FileText, Shield, Check, Clock, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/Button'

const solutions = [
  {
    name: 'Novyx Core',
    status: 'flagship',
    price: 'Custom',
    description: 'Advanced persistent intelligence system with infinite memory, cross-session learning, and adaptive AI that evolves with your needs.',
    icon: Brain,
    features: [
      'Persistent memory across all interactions',
      'Cross-domain context understanding',
      'Continuous learning and adaptation',
      'Multi-vertical support',
      'Enterprise-grade security',
      'API access for developers',
    ],
    link: '/core',
    badgeColor: 'bg-electric-blue',
    badgeText: 'Flagship',
  },
  {
    name: 'Legal Generator',
    status: 'live',
    price: '$29',
    description: 'Generate professional legal documents in minutes with AI-powered templates designed specifically for founders and startups.',
    icon: FileText,
    features: [
      'NDAs, Operating Agreements, Terms of Service',
      'Attorney-reviewed templates',
      'Instant PDF download',
      'State-specific customization',
      'Unlimited revisions',
      '24/7 access',
    ],
    link: '#legal',
    badgeColor: 'bg-green-500',
    badgeText: 'Live Now',
  },
  {
    name: 'Compliance Hub',
    status: 'coming-soon',
    price: 'TBA',
    description: 'Stay compliant effortlessly with automated tracking, deadline reminders, and regulatory monitoring for your startup.',
    icon: Shield,
    features: [
      'Automated compliance calendar',
      'Regulatory update notifications',
      'Document expiry tracking',
      'Multi-state support',
      'Custom deadline reminders',
      'Audit trail and reporting',
    ],
    link: '#compliance',
    badgeColor: 'bg-gray-500',
    badgeText: 'Q2 2026',
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
