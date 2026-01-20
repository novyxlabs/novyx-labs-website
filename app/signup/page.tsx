'use client'

import { useState } from 'react'
import Link from 'next/link'
import { UserPlus, ArrowRight } from 'lucide-react'

export default function SignupPage() {
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
          <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <UserPlus className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="mono-heading text-3xl text-white mb-4">Create Account</h1>
          <p className="text-steel-400">
            Join the waitlist for early access to Novyx.
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
                We'll send you an invite when your account is ready.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center text-green-400 font-mono font-semibold hover:text-green-300 transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg border border-steel-700/30 bg-void-900 text-white placeholder-steel-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-green-500 text-white font-mono font-semibold hover:bg-green-600 transition-all"
              >
                Join Waitlist
              </button>

              <p className="text-steel-500 text-xs text-center">
                By signing up, you agree to our{' '}
                <Link href="/terms" className="text-steel-400 hover:underline">Terms</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-steel-400 hover:underline">Privacy Policy</Link>
              </p>
            </form>
          )}
        </div>

        <p className="text-center text-steel-500 text-sm mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-pulse-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
