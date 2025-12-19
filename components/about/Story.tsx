'use client'

import { Lightbulb, Code, Rocket } from 'lucide-react'

const milestones = [
  {
    icon: Lightbulb,
    title: 'The Problem',
    description: 'We saw founders struggling with expensive, slow legal processes that held back their progress. Legal work shouldn\'t be a bottleneck for innovation.',
  },
  {
    icon: Code,
    title: 'The Solution',
    description: 'We built Novyx Labs to automate legal document creation using AI and attorney-reviewed templates, making legal work accessible to everyone.',
  },
  {
    icon: Rocket,
    title: 'The Future',
    description: 'We\'re expanding our suite of tools to cover every legal need a startup might have, from formation to compliance and beyond.',
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
            Born from the frustration of navigating complex legal systems as founders ourselves
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
              Novyx Labs is a bootstrapped company built by founders, for founders. 
              We understand the challenges of starting a business because we've been there. 
              Our lean, focused team is dedicated to creating tools that actually solve real 
              problems entrepreneurs face every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


