import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Novyx Labs',
  description: 'Terms of service for Novyx Labs services and products.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="mono-heading text-4xl text-white mb-8">Terms of Service</h1>
          <p className="text-steel-500 text-sm font-mono mb-12">Last updated: January 2025</p>

          <div className="prose prose-invert prose-steel max-w-none">
            <div className="space-y-8 text-steel-300">
              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the services provided by Novyx Labs (&quot;Services&quot;), you agree to be
                  bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may
                  not use the Services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">2. Description of Services</h2>
                <p>
                  Novyx Labs provides memory infrastructure services for AI applications, including but not
                  limited to: Novyx Core, Novyx RAM, Novyx Integrity, and the novyx-langchain Python package.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">3. Account Registration</h2>
                <p>
                  To use certain features of our Services, you must register for an account. You agree to
                  provide accurate information and to keep this information up to date. You are responsible
                  for maintaining the security of your account credentials.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">4. Acceptable Use</h2>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 text-steel-400">
                  <li>Use the Services for any illegal purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Services</li>
                  <li>Transmit malicious code or content</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">5. API Usage</h2>
                <p>
                  Use of our APIs is subject to rate limits and usage quotas as specified in your service
                  plan. Exceeding these limits may result in temporary suspension of access or additional
                  charges.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">6. Data Ownership</h2>
                <p>
                  You retain all rights to the data you store using our Services. We do not claim ownership
                  of your data. You grant us a limited license to store, process, and transmit your data
                  solely for the purpose of providing the Services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">7. Payment Terms</h2>
                <p>
                  Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable
                  except as required by law. We reserve the right to change pricing with 30 days notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">8. Service Level Agreement</h2>
                <p>
                  For paid plans, we commit to 99.9% uptime. Downtime excludes scheduled maintenance and
                  circumstances beyond our reasonable control.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">9. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOVYX LABS SHALL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE
                  SERVICES.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">10. Termination</h2>
                <p>
                  We may terminate or suspend your access to the Services at any time for violation of these
                  Terms. Upon termination, your right to use the Services will cease immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-mono font-bold text-white mb-4">11. Contact</h2>
                <p>
                  For questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@novyxlabs.com" className="text-pulse-400 hover:underline">
                    legal@novyxlabs.com
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
