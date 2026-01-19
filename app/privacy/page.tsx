import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Novyx Labs',
  description: 'Privacy policy for Novyx Labs services and products.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="mono-heading text-4xl text-white mb-8">Privacy Policy</h1>
          <p className="text-steel-500 text-sm font-mono mb-12">Last updated: January 2025</p>

          <div className="prose prose-invert prose-steel max-w-none">
            <div className="space-y-8 text-steel-300">
              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  Novyx Labs (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">2. Information We Collect</h2>
                <p className="mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside space-y-2 text-steel-400">
                  <li>Account information (email, name, company)</li>
                  <li>Payment information (processed securely by our payment providers)</li>
                  <li>Usage data and analytics</li>
                  <li>Communications you send to us</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-steel-400">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new products and services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">4. Data Storage and Security</h2>
                <p>
                  Your data is stored securely using industry-standard encryption. All data transmitted between
                  your applications and our services is encrypted using TLS. We implement appropriate technical
                  and organizational measures to protect your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">5. Data Retention</h2>
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes for which
                  it was collected, including to satisfy legal, accounting, or reporting requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">6. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-steel-400">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request portability of your personal data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@novyxlabs.com" className="text-pulse-400 hover:underline">
                    privacy@novyxlabs.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
