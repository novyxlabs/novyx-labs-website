'use client'

import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'

export function Contact() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Have questions? Want to learn more? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:blake@novyxlabs.com"
            className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
          >
            <Mail className="w-8 h-8 mx-auto mb-3 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg mb-2">Primary Contact</h3>
            <p className="text-gray-600 dark:text-gray-400">blake@novyxlabs.com</p>
          </a>

            <a
              href="mailto:novyxlabs@gmail.com"
            className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
            <Mail className="w-8 h-8 mx-auto mb-3 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg mb-2">General Inquiries</h3>
            <p className="text-gray-600 dark:text-gray-400">novyxlabs@gmail.com</p>
            </a>
        </div>

          <Link href="/contact">
            <Button size="lg" className="group">
            Send us a Message
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
      </div>
    </section>
  )
}
