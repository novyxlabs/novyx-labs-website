'use client'

import { FileText, FileSignature, Shield, Check, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'

const products = [
  {
    name: 'Novyx Legal Generator',
    status: 'live',
    price: '$29',
    description: 'Generate professional legal documents in minutes with our AI-powered tool.',
    icon: FileText,
    features: [
      'NDAs, Operating Agreements, Terms of Service',
      'Attorney-reviewed templates',
      'Instant PDF download',
      '24/7 access',
      'Customized for your needs',
    ],
    link: '#', // Replace with actual product URL
    badgeColor: 'bg-green-500',
    badgeText: 'Live Now',
  },
  {
    name: 'Novyx Contracts',
    status: 'coming-soon',
    price: 'TBA',
    description: 'Streamline contract management with automated workflows and e-signatures.',
    icon: FileSignature,
    features: [
      'Digital contract storage',
      'E-signature integration',
      'Contract templates library',
      'Deadline reminders',
      'Version control',
    ],
    link: '#',
    badgeColor: 'bg-indigo-500',
    badgeText: 'Coming Soon',
  },
  {
    name: 'Novyx Compliance Hub',
    status: 'coming-soon',
    price: 'TBA',
    description: 'Stay compliant with automated tracking and reminders for all legal requirements.',
    icon: Shield,
    features: [
      'Compliance calendar',
      'Automatic deadline tracking',
      'Document expiry alerts',
      'Regulatory updates',
      'Multi-state support',
    ],
    link: '#',
    badgeColor: 'bg-indigo-500',
    badgeText: 'Coming Soon',
  },
]

export function ProductList() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`glass rounded-3xl overflow-hidden ${
                product.status === 'live' 
                  ? 'border-2 border-indigo-500 dark:border-indigo-400' 
                  : ''
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 sm:p-12">
                {/* Product Info */}
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                        <product.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {product.badgeText}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold gradient-text mb-4">
                      {product.price}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  {product.status === 'live' ? (
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="group">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">Available Soon</span>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8">
                  <h4 className="font-semibold text-lg mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Want to be notified when new products launch?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Contact us to join our early access list and get exclusive discounts.
            </p>
            <a href="/contact">
              <Button size="lg">Contact Us</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


