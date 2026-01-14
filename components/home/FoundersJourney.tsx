'use client'

import { Lightbulb, Rocket, TrendingUp, Star } from 'lucide-react'

const journeySteps = [
  {
    icon: Lightbulb,
    title: 'Discover',
    description: 'Identify the AI tools that fit your specific needs and vertical.',
    step: '01',
  },
  {
    icon: Rocket,
    title: 'Integrate',
    description: 'Seamlessly connect our solutions to your existing workflows and systems.',
    step: '02',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Grow confidently with AI that adapts and improves alongside your business.',
    step: '03',
  },
  {
    icon: Star,
    title: 'Succeed',
    description: 'Focus on what matters while our AI handles the complexity and repetition.',
    step: '04',
  },
]

export function FoundersJourney() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy via-navy-800 to-electric-blue text-white relative overflow-hidden">
      {/* Neural pattern overlay */}
      <div className="absolute inset-0 neural-connections opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Your Journey with Novyx
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From first integration to long-term partnership, we're with you every step of the way.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connection line (hidden on mobile, shown on desktop) */}
              {index < journeySteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-white/20 z-0">
                  <div className="h-full bg-electric-blue-400 w-0 group-hover:w-full transition-all duration-1000" />
                </div>
              )}

              {/* Step Card */}
              <div className="relative z-10">
                {/* Step number */}
                <div className="text-6xl font-bold text-white/10 mb-2 text-center">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-white/80 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-navy font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Start Your Journey
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
