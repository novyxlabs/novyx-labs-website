import { Metadata } from 'next'
import Link from 'next/link'
import { Check, Zap, Shield, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing - Novyx Labs',
  description: 'Simple, transparent pricing for Novyx memory infrastructure. Free tier for developers, production plans for teams, enterprise for scale.',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="mono-heading text-5xl sm:text-6xl text-white mb-6">
            Simple Pricing
          </h1>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Developer */}
            <div className="p-8 rounded-2xl bg-steel-900/20 border border-steel-700/30">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-steel-400" />
                <h3 className="text-xl font-mono font-bold text-white">Developer</h3>
              </div>
              <p className="text-steel-400 mb-6">For side projects and prototypes</p>
              <div className="text-5xl font-mono font-bold text-white mb-2">Free</div>
              <p className="text-steel-500 text-sm mb-8">No credit card required</p>

              <ul className="space-y-3 mb-8">
                {[
                  '10,000 API calls/month',
                  '1GB storage',
                  '1 project',
                  'Community support',
                  'novyx-langchain access',
                ].map((feature) => (
                  <li key={feature} className="flex items-start space-x-3 text-steel-300 text-sm">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Production */}
            <div className="p-8 rounded-2xl bg-pulse-950/20 border-2 border-pulse-600 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 rounded-full bg-pulse text-white text-xs font-mono font-bold">
                  MOST POPULAR
                </span>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="w-6 h-6 text-pulse-400" />
                <h3 className="text-xl font-mono font-bold text-white">Production</h3>
              </div>
              <p className="text-steel-400 mb-6">For production applications</p>
              <div className="text-5xl font-mono font-bold text-white mb-2">
                $49<span className="text-xl text-steel-500">/mo</span>
              </div>
              <p className="text-steel-500 text-sm mb-8">Billed monthly</p>

              <ul className="space-y-3 mb-8">
                {[
                  '1M API calls/month',
                  '100GB storage',
                  'Unlimited projects',
                  'Priority support',
                  '99.9% SLA',
                  'Advanced analytics',
                ].map((feature) => (
                  <li key={feature} className="flex items-start space-x-3 text-steel-300 text-sm">
                    <Check className="w-5 h-5 text-pulse-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all"
              >
                Contact Sales
              </Link>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-green-950/10 border border-green-800/30">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-mono font-bold text-white">Enterprise</h3>
              </div>
              <p className="text-steel-400 mb-6">For security-critical applications</p>
              <div className="text-5xl font-mono font-bold text-white mb-2">Custom</div>
              <p className="text-steel-500 text-sm mb-8">Contact for pricing</p>

              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited API calls',
                  'Unlimited storage',
                  'Novyx Integrity included',
                  'SOC 2 Type II',
                  'HIPAA/GDPR compliance',
                  'Dedicated support',
                  'Custom SLA',
                  'On-premise option',
                ].map((feature) => (
                  <li key={feature} className="flex items-start space-x-3 text-steel-300 text-sm">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-lg bg-green-500 text-white font-mono font-semibold hover:bg-green-600 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mono-heading text-3xl text-white mb-6">Questions?</h2>
          <p className="text-steel-400 mb-8">
            Need help choosing the right plan? We're here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
          >
            Talk to Sales
          </Link>
        </div>
      </section>
    </div>
  )
}
