'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or email us directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="p-8 rounded-2xl bg-steel-900/20 border border-steel-700/30">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-mono font-medium text-steel-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-steel-700/30 bg-void-900 text-white placeholder-steel-500 focus:ring-2 focus:ring-pulse focus:border-transparent transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-mono font-medium text-steel-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-steel-700/30 bg-void-900 text-white placeholder-steel-500 focus:ring-2 focus:ring-pulse focus:border-transparent transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-mono font-medium text-steel-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-steel-700/30 bg-void-900 text-white placeholder-steel-500 focus:ring-2 focus:ring-pulse focus:border-transparent transition-colors"
            placeholder="Your company (optional)"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-mono font-medium text-steel-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-steel-700/30 bg-void-900 text-white placeholder-steel-500 focus:ring-2 focus:ring-pulse focus:border-transparent transition-colors resize-none"
            placeholder="Tell us about your use case..."
          />
        </div>

        {status === 'success' && (
          <div className="p-4 bg-green-900/20 border border-green-800/30 rounded-lg text-green-400">
            Thanks for reaching out! We'll get back to you within 24 hours.
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-900/20 border border-red-800/30 rounded-lg text-red-400">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            'Sending...'
          ) : (
            <>
              Request API Key
              <Send className="ml-2 w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}




