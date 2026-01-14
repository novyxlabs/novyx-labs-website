'use client'

import Link from 'next/link'
import { ArrowRight, Brain, Sparkles } from 'lucide-react'
import { Button } from '@/components/Button'
import { NeuralBackground } from '@/components/NeuralBackground'
import { AIParticles } from '@/components/AIParticles'

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
      {/* AI-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-electric-blue-50 dark:from-navy dark:via-navy-800 dark:to-navy-900 -z-10" />
      <NeuralBackground />
      <AIParticles />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-electric-blue/10 dark:bg-electric-blue/20 text-electric-blue text-sm font-semibold mb-8 backdrop-blur-sm border border-electric-blue/20">
            <Brain className="w-4 h-4" />
            <span>AI Innovation Hub for Builders</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-navy dark:text-white">
            Empowering Builders with{' '}
            <span className="gradient-text">AI Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            From persistent intelligence to vertical-specific automation, we're building
            the AI tools that modern founders need to move faster and scale smarter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/core">
              <Button size="lg" className="group pulse-glow">
                <Sparkles className="mr-2 w-5 h-5" />
                Discover Novyx Core
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline">
                Explore Solutions
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">AI Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Context Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-400">Verticals Possible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


