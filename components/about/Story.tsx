'use client'

import { Lightbulb, Code, Rocket } from 'lucide-react'

const milestones = [
  {
    icon: Lightbulb,
    title: 'The Problem',
    description: 'Founders waste time on repetitive tasks that software should handle. From legal paperwork to compliance tracking, these bottlenecks slow down innovation.',
  },
  {
    icon: Code,
    title: 'The Solution',
    description: 'We build focused products that automate the busy work. Our first product tackles legal documents—turning weeks of work into minutes.',
  },
  {
    icon: Rocket,
    title: 'The Future',
    description: 'We\'re building a suite of products that eliminate friction points for startups. Every product we ship helps founders focus on what matters: building their business.',
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
              Novyx Labs is a bootstrapped product company built by founders, for founders. 
              We ship software that solves real problems. Our approach is simple: identify the 
              pain points that slow entrepreneurs down, build focused products that eliminate them, 
              and get them into the hands of founders who need them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



