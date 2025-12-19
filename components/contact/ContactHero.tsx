'use client'

import { MessageSquare } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-white dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-6">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        
        <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Have questions or want to learn more? We're here to help.
        </p>
      </div>
    </section>
  )
}


