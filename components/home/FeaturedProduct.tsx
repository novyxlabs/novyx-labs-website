'use client'

import Link from 'next/link'
import { FileText, Clock, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'

export function FeaturedProduct() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Product Suite</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A growing ecosystem of legal tools built specifically for startups and founders
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image/Demo Area */}
          <div className="relative">
            <div className="glass rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <FileText className="w-24 h-24 mx-auto text-indigo-600 dark:text-indigo-400" />
                  <div className="space-y-2">
                    <div className="h-3 w-48 bg-indigo-200 dark:bg-indigo-800 rounded mx-auto" />
                    <div className="h-3 w-64 bg-indigo-200 dark:bg-indigo-800 rounded mx-auto" />
                    <div className="h-3 w-56 bg-indigo-200 dark:bg-indigo-800 rounded mx-auto" />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              Live Now
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Novyx Legal Generator</span> — Now Live
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our first product: Generate professional legal documents in minutes. 
                Answer simple questions, get customized lawyer-reviewed documents instantly. 
                No jargon, no expensive fees.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Save Time</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Get documents in 5 minutes instead of waiting weeks for lawyers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Legally Sound</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Templates reviewed by experienced attorneys
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Affordable</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Starting at just $29 - a fraction of traditional legal costs
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/products">
                <Button size="lg" className="group">
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


