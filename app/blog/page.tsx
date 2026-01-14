import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight, FileText } from 'lucide-react'
import { blogPosts } from './posts'

export const metadata: Metadata = {
  title: 'Blog - Technical Posts on AI Memory & Persistence | Novyx Labs',
  description: 'Technical deep-dives on agent memory, memory poisoning, context preservation, and durable AI infrastructure.',
  keywords: ['agent memory', 'memory poisoning', 'context preservation', 'AI infrastructure', 'persistence'],
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="mono-heading text-5xl sm:text-6xl text-white mb-6">
            Infrastructure Blog
          </h1>
          <p className="text-xl text-steel-300">
            Technical posts on agent memory, security, and persistence
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group p-8 rounded-2xl bg-steel-900/20 border border-steel-700/30 hover:border-pulse-600/50 transition-all duration-300"
              >
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-steel-500 font-mono mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-mono font-bold text-white mb-3 group-hover:text-pulse-400 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-lg text-steel-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded bg-steel-800/30 text-steel-300 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center space-x-2 text-pulse-400 font-mono font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read post</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mono-heading text-3xl text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-steel-400 mb-8">
            Follow us on GitHub for new posts and infrastructure updates
          </p>
          <a
            href="https://github.com/novyxlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg shadow-pulse/20"
          >
            Follow on GitHub
          </a>
        </div>
      </section>
    </div>
  )
}
