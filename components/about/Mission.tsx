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
            Building AI That Remembers
          </h1>
        
        <p className="text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
          Most AI forgets everything the moment you close the chat. We're building persistent
          AI systems that actually keep context. Starting with Novyx Core—a knowledge graph
          that endures. Our mission: make AI that learns, remembers, and grows with you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">∞</div>
            <div className="text-white/80">Memory That Lasts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-white/80">Your Data</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">Open</div>
            <div className="text-white/80">Building in Public</div>
          </div>
        </div>
      </div>
    </section>
  )
}



