'use client'

import { Lightbulb, Code, Rocket } from 'lucide-react'

const milestones = [
  {
    icon: Lightbulb,
    title: 'The Problem',
    description: 'AI that forgets everything the moment you close the chat. Builders waste time repeating context, re-explaining their needs, and manually connecting information.',
  },
  {
    icon: Code,
    title: 'The Solution',
    description: 'Novyx Core—a persistent AI brain that remembers everything. Build knowledge graphs that endure, connect automatically, and learn continuously. Three lines of code to get started.',
  },
  {
    icon: Rocket,
    title: 'The Future',
    description: 'Building the infrastructure for persistent AI. Federation for distributed systems, enterprise dashboards for scale, and more. The AI layer that modern developers need.',
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
            Building persistent AI infrastructure, one piece at a time
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
              Novyx Labs builds persistent AI infrastructure for developers. We're starting with Core—
              a knowledge graph system that actually remembers across conversations. No more repeating
              context. No more forgotten history. Just AI that learns and grows with you. We build in
              public on GitHub, keep your data private, and focus on simple APIs that get out of your way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



