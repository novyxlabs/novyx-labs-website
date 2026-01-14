'use client'

import { Lightbulb, Code, Rocket } from 'lucide-react'

const milestones = [
  {
    icon: Lightbulb,
    title: 'The Problem',
    description: 'Founders face countless repetitive challenges across every vertical—legal, compliance, operations, and more. Traditional tools don\'t learn or adapt, forcing entrepreneurs to context-switch constantly.',
  },
  {
    icon: Code,
    title: 'The Solution',
    description: 'We\'re building AI that actually remembers and evolves. Starting with Novyx Core\'s persistent intelligence and expanding into vertical-specific automation, we create tools that get smarter with use.',
  },
  {
    icon: Rocket,
    title: 'The Future',
    description: 'An entire ecosystem of AI-powered solutions for every founder challenge. From legal automation to persistent intelligence, we\'re creating the AI infrastructure that modern builders need to thrive.',
  },
]

export function Story() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Story</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From founder frustrations to AI innovation—building the intelligence layer modern builders deserve
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center">
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-8 sm:p-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Novyx Labs is an AI innovation hub built by founders, for founders. We're not just
              building tools—we're creating intelligent systems that learn, adapt, and evolve with you.
              Our approach: identify the challenges that slow builders down, develop AI solutions that
              eliminate friction, and make them accessible to every founder who needs them. From persistent
              intelligence to vertical-specific automation, we're building the AI ecosystem that the next
              generation of companies will run on.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



