import { Metadata } from 'next'
import { Newspaper, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Insights on AI & Founder Tools | Novyx Labs',
  description: 'Thoughts on AI innovation, building for founders, and the future of intelligent automation.',
  openGraph: {
    title: 'Blog - Novyx Labs',
    description: 'Insights on AI innovation and founder tools',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-navy via-navy-800 to-electric-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
            <Newspaper className="w-4 h-4" />
            <span>Insights & Updates</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Novyx Labs Blog
          </h1>
          <p className="text-xl text-white/80">
            Thoughts on AI innovation, building for founders, and the future of intelligent automation.
          </p>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center mx-auto mb-6">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-navy dark:text-white">
              Blog Coming Soon
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We're preparing insightful content about AI innovation, founder tools, and building the future of work.
              Check back soon for our first posts!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-electric-blue text-white font-semibold hover:bg-electric-blue-600 transition-all"
              >
                Get Notified
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-navy-700 text-navy dark:text-white font-semibold hover:border-electric-blue dark:hover:border-electric-blue transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Placeholder for future topics */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-navy dark:text-white text-center">
              Upcoming Topics
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Building Persistent Intelligence Systems',
                'AI for Legal Tech: Opportunities and Challenges',
                'How Founders Can Leverage AI Effectively',
                'The Future of Context-Aware AI',
                'Automating Founder Workflows',
                'Ethics in AI-Powered Business Tools',
              ].map((topic) => (
                <div key={topic} className="p-6 rounded-xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
