'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogIn, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just show success - can integrate with contact API later
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-void pt-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-pulse/10 border border-pulse/30 flex items-center justify-center mx-auto mb-6">
            <LogIn className="w-8 h-8 text-pulse" />
          </div>
          <h1 className="mono-heading text-3xl text-white mb-4">Sign In</h1>
          <p className="text-steel-400">
            Sign in coming soon. Join the waitlist for early access.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-steel-900/20 border border-steel-700/30">
          {submitted ? (
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-steel-400 text-sm mb-6">
                We'll notify you when sign in is available.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center text-pulse-400 font-mono font-semibold hover:text-pulse-300 transition-colors"
              >
                Explore Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-mono font-medium text-steel-300 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-steel-700/30 bg-void-900 text-white placeholder-steel-500 focus:ring-2 focus:ring-pulse focus:border-transparent transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-steel-500 text-sm mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="text-pulse-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
