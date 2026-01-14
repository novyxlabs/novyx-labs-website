'use client'

import { Brain, Sparkles } from 'lucide-react'
import { NeuralBackground } from '@/components/NeuralBackground'

export function Mission() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy via-navy-800 to-electric-blue relative overflow-hidden">
      <NeuralBackground />
      
      <div className="max-w-5xl mx-auto text-center text-white relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Our Mission</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
          AI for Every Founder Vertical
        </h1>
        
        <p className="text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
          We're building an AI innovation hub that empowers modern founders across every
          challenge—from persistent intelligence to vertical-specific automation. Our mission
          is simple: give builders the AI tools they need to move faster, build better, and
          scale smarter.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">∞</div>
            <div className="text-white/80">Verticals</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-white/80">Founder-First</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-white/80">AI Intelligence</div>
          </div>
        </div>
      </div>
    </section>
  )
}



