'use client'

import { MessageSquare, Zap, Download } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Answer Questions',
    description: 'Tell us about your needs through a simple, guided questionnaire.',
  },
  {
    icon: Zap,
    title: 'AI Generates Document',
    description: 'Our AI creates a customized legal document based on your answers.',
  },
  {
    icon: Download,
    title: 'Download & Use',
    description: 'Get your professional document instantly and start using it right away.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Three simple steps to get your legal documents ready
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400" />
              )}

              <div className="glass rounded-2xl p-8 h-full hover:shadow-xl transition-shadow duration-300">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



