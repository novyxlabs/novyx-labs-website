'use client'

import { Heart, Zap, Users, Eye } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Founder-First',
    description: 'Every decision we make is with founders in mind. We build tools that we would want to use ourselves.',
  },
  {
    icon: Zap,
    title: 'Move Fast',
    description: 'Speed matters in startups. We help you move quickly without sacrificing quality or compliance.',
  },
  {
    icon: Users,
    title: 'Accessible',
    description: 'Legal services should be available to everyone, not just those who can afford expensive lawyers.',
  },
  {
    icon: Eye,
    title: 'Transparent',
    description: 'No hidden fees, no legal jargon. We believe in clear communication and honest pricing.',
  },
]

export function Values() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
