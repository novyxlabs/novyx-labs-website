'use client'

import { DollarSign, Clock, Shield, Sparkles, Users, Rocket } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Save Money',
    description: 'Pay a fraction of traditional legal fees. Starting at just $29.',
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Get documents in minutes, not weeks. No back-and-forth with lawyers.',
  },
  {
    icon: Shield,
    title: 'Legally Vetted',
    description: 'All templates reviewed by experienced attorneys to ensure compliance.',
  },
  {
    icon: Sparkles,
    title: 'Easy to Use',
    description: 'Simple questionnaires. No legal knowledge required.',
  },
  {
    icon: Users,
    title: 'Founder-Focused',
    description: 'Built specifically for startup founders and entrepreneurs.',
  },
  {
    icon: Rocket,
    title: 'Move Fast',
    description: 'Get the legal docs you need and focus on building your business.',
  },
]

export function Benefits() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Novyx Labs</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We make legal work accessible, affordable, and fast for modern founders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}





