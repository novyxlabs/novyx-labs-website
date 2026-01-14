'use client'

import { Check, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const tiers = [
  {
    name: 'Free',
    subtitle: 'Open Source',
    price: '$0',
    period: 'forever',
    description: 'Self-hosted knowledge graph engine',
    features: [
      'Full Core engine source code',
      'Unlimited self-hosted instances',
      'Community support',
      'MIT License',
      'Version control & rollback',
      'Multi-tenant architecture',
    ],
    limitations: [
      'Self-managed hosting',
      'No managed dashboard',
      'Community support only',
    ],
    cta: 'View on GitHub',
    ctaLink: 'https://github.com/novyxlabs/novyx-core',
    highlighted: false,
  },
  {
    name: 'Pro',
    subtitle: 'Managed Instance',
    price: '$29',
    period: '/month',
    description: 'Hosted, managed, and maintained for you',
    features: [
      'Everything in Free, plus:',
      'Fully managed hosting',
      'Automatic backups & updates',
      '99.9% uptime SLA',
      'Dashboard analytics',
      'Email support',
      'SSL certificates included',
      'CDN & edge caching',
    ],
    limitations: [],
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'Custom Governance',
    price: 'Custom',
    period: 'pricing',
    description: 'Automated compliance and governance at scale',
    features: [
      'Everything in Pro, plus:',
      'Enterprise Dashboard',
      'Sentinel monitoring & alerts',
      'Custom SLA reporting',
      'Dedicated support',
      'SOC 2 / ISO 27001 compliance',
      'Federated multi-region sync',
      'Zero-knowledge boundaries',
      'Custom integrations',
    ],
    limitations: [],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white font-mono">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Start free with open source. Scale to managed hosting. Upgrade to enterprise governance.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 ${
                tier.highlighted
                  ? 'border-accent bg-midnight shadow-2xl shadow-accent/20 scale-105'
                  : 'border-slate-700 bg-midnight/50'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-midnight text-sm font-mono font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white font-mono mb-1">{tier.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{tier.subtitle}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-accent font-mono">{tier.price}</span>
                  <span className="text-slate-400 text-lg ml-2">{tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm">{tier.description}</p>
              </div>

              {/* CTA */}
              <Link href={tier.ctaLink} target={tier.ctaLink.startsWith('http') ? '_blank' : undefined}>
                <button
                  className={`w-full py-3 px-6 rounded-xl font-mono font-semibold transition-all mb-8 ${
                    tier.highlighted
                      ? 'bg-accent text-midnight hover:bg-accent/90'
                      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-600'
                  }`}
                >
                  {tier.cta}
                  {tier.ctaLink.startsWith('http') && <ArrowRight className="inline ml-2 w-4 h-4" />}
                </button>
              </Link>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Limitations */}
              {tier.limitations.length > 0 && (
                <ul className="space-y-3 pt-6 border-t border-slate-700">
                  {tier.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-500 text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-mono">
            All plans include version control, multi-tenant architecture, and cryptographic integrity.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Enterprise includes SOC 2 TYPE II • ISO 27001 • GDPR • HIPAA compliance support
          </p>
        </div>
      </div>
    </section>
  )
}
