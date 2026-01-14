'use client'

import { Zap, Sparkles } from 'lucide-react'
import { NeuralBackground } from '@/components/NeuralBackground'

export function SolutionsHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-electric-blue-50 to-navy-50 dark:from-navy dark:via-navy-800 dark:to-navy-900 -z-10" />
      <NeuralBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-electric-blue/10 dark:bg-electric-blue/20 text-electric-blue text-sm font-semibold mb-8 backdrop-blur-sm border border-electric-blue/20">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-navy dark:text-white">
            Tools That Grow
            <span className="gradient-text"> With You</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            From document automation to persistent intelligence, we build AI solutions
            that solve real founder problems across every vertical.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-400">Verticals Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">AI Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
