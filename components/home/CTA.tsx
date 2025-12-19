'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-12 sm:p-16 lg:p-20 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Simplify Your Legal Work?
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Join hundreds of founders who are building faster with Novyx Labs.
              Get started in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group bg-white text-indigo-600 hover:bg-gray-50"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white/10 text-white border-2 border-white hover:bg-white/20"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-indigo-100 text-sm">
              No credit card required • Get started in 5 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



