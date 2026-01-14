'use client'

import { Brain, Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { NeuralBackground } from '@/components/NeuralBackground'
import Link from 'next/link'

export function CoreHero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-electric-blue -z-10" />
      <NeuralBackground />
      
      <div className="max-w-7xl mx-auto relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/40 text-green-100 text-sm font-semibold mb-6">
            <Brain className="w-4 h-4" />
            <span>Live Flagship</span>
          </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Novyx Core
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold mb-6 text-electric-blue-200">
              A Persistent AI Brain for Knowledge Graphs That Endure
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Novyx Core remembers everything. Build knowledge graphs that persist across
              conversations, learn from every interaction, and grow smarter over time.
              Your AI that actually keeps context.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-electric-blue-300" />
                <span className="text-white/90">Persistent Memory</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-electric-blue-300" />
                <span className="text-white/90">Multi-Tenant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-electric-blue-300" />
                <span className="text-white/90">Versioning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-electric-blue-300" />
                <span className="text-white/90">Federation Ready</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/novyxlabs" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-navy hover:bg-white/90">
                  View on GitHub
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <button
                onClick={() => document.getElementById('code')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/50 font-semibold transition-all duration-300"
              >
                See Code Examples
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Glowing orb effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-electric-blue/30 blur-3xl animate-pulse-slow" />
              </div>
              
              {/* Central brain icon */}
              <div className="relative flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center animate-float">
                  <Brain className="w-24 h-24 text-white" />
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
                <div className="w-full h-full relative">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute w-12 h-12 rounded-full bg-electric-blue/50 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 90}deg) translateX(150px) translateY(-50%)`,
                      }}
                    >
                      <Zap className="w-6 h-6 text-white" style={{ transform: `rotate(${-i * 90}deg)` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
