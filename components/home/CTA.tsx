'use client'

import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'
import { Button } from '@/components/Button'

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-12 sm:p-16 lg:p-20 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Start Building with Core
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Three lines of code. Persistent knowledge graphs that remember everything.
              Built for developers who need AI that keeps context.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/novyxlabs" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group bg-white text-navy hover:bg-gray-50"
                >
                  <Github className="mr-2 w-5 h-5" />
                  View on GitHub
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/core">
                <Button
                  size="lg"
                  className="bg-white/10 text-white border-2 border-white hover:bg-white/20"
                >
                  Learn More About Core
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-white/80 text-sm">
              Open beta • Built in public • Your data stays yours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}





