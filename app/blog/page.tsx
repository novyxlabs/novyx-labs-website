import { Metadata } from 'next'
import { Newspaper, Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from './posts'

export const metadata: Metadata = {
  title: 'Blog - Persistent AI Insights | Novyx Labs',
  description: 'Technical insights on persistent AI, knowledge graphs, and building with Novyx Core.',
  openGraph: {
    title: 'Blog - Novyx Labs',
    description: 'Insights on persistent AI and knowledge graphs',
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
            Technical insights on persistent AI, knowledge graphs, and building with Core.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-navy dark:text-white group-hover:text-electric-blue dark:group-hover:text-electric-blue transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-electric-blue font-medium group-hover:translate-x-1 transition-transform">
                  <span>Read more</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
