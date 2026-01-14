'use client'

import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/Button'
import Link from 'next/link'

const benefits = [
  'Priority access to Novyx Core beta',
  'Dedicated onboarding and training',
  'Direct line to the founding team',
  'Influence product roadmap',
  'Founding user pricing (locked in forever)',
]

export function CoreCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy via-navy-800 to-electric-blue relative overflow-hidden">
      {/* Neural pattern overlay */}
      <div className="absolute inset-0 neural-connections opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-white text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join the Future of AI Intelligence
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Novyx Core is currently in private beta. Apply for early access and be among
            the first builders to experience truly persistent AI.
          </p>
        </div>

        {/* Benefits */}
        <div className="glass rounded-2xl p-8 mb-8 backdrop-blur-xl bg-white/10 border border-white/20">
          <h3 className="text-2xl font-bold mb-6">Early Access Includes:</h3>
          <ul className="space-y-4 text-left max-w-2xl mx-auto">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-electric-blue flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact?product=core">
            <Button size="lg" className="bg-white text-navy hover:bg-white/90">
              Request Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/ecosystem">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Other Solutions
            </Button>
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-white/60 text-sm">
          Limited spots available. We're onboarding users in small batches to ensure quality.
        </p>
      </div>
    </section>
  )
}
