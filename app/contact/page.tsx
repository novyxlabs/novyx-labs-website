import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Calendar, Zap, Shield } from 'lucide-react'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Get API Key | Novyx Labs',
  description: 'Request an API key, schedule a demo, or get in touch with the Novyx Labs team.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="mono-heading text-5xl sm:text-6xl text-white mb-6">
            Get Started
          </h1>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            Request an API key, schedule a demo, or get in touch with our team.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-void-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://calendly.com/novyxlabs/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-green-950/20 border border-green-800/30 hover:border-green-600 transition-all"
            >
              <Calendar className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-lg font-mono font-bold text-white mb-2">Schedule Demo</h3>
              <p className="text-steel-400 text-sm mb-4">Book a 30-minute call with our team</p>
              <span className="inline-flex items-center text-green-400 font-mono font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Book Now →
              </span>
            </a>

            <div className="p-6 rounded-xl bg-purple-950/20 border border-purple-800/30">
              <Zap className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-lg font-mono font-bold text-white mb-2">Get API Key</h3>
              <p className="text-steel-400 text-sm mb-4">Fill out the form below to request access</p>
              <span className="inline-flex items-center text-purple-400 font-mono font-semibold text-sm">
                ↓ Form below
              </span>
            </div>

            <a
              href="mailto:security@novyxlabs.com"
              className="group p-6 rounded-xl bg-steel-900/20 border border-steel-700/30 hover:border-steel-600 transition-all"
            >
              <Shield className="w-10 h-10 text-steel-400 mb-4" />
              <h3 className="text-lg font-mono font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-steel-400 text-sm mb-4">SOC 2, HIPAA, custom requirements</p>
              <span className="inline-flex items-center text-steel-400 font-mono font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Contact Security →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="mono-heading text-2xl text-white mb-6">Request API Access</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mono-heading text-2xl text-white mb-6">Contact Information</h2>
                <p className="text-steel-400 mb-8">
                  We typically respond within 24 hours on business days.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-6 h-6 text-pulse-400" />
                    <h3 className="font-mono font-bold text-white">Email</h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-steel-500 text-sm">General</p>
                      <a href="mailto:hello@novyxlabs.com" className="text-pulse-400 hover:underline">
                        hello@novyxlabs.com
                      </a>
                    </div>
                    <div>
                      <p className="text-steel-500 text-sm">Security</p>
                      <a href="mailto:security@novyxlabs.com" className="text-pulse-400 hover:underline">
                        security@novyxlabs.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-pulse-950/20 border border-pulse-800/30">
                  <h3 className="font-mono font-bold text-white mb-2">What to expect</h3>
                  <ul className="space-y-2 text-steel-400 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-pulse-400">→</span>
                      <span>API key typically within 24 hours</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-pulse-400">→</span>
                      <span>Free tier: 10K API calls/month</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-pulse-400">→</span>
                      <span>No credit card required to start</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}





