import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '../posts'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Novyx Labs Blog`,
    description: post.excerpt,
    keywords: post.tags,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Header */}
      <article className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-steel-400 hover:text-white font-mono text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to blog</span>
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-steel-500 font-mono mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="mono-heading text-4xl sm:text-5xl text-white mb-6">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-pulse/10 border border-pulse/30 text-pulse text-sm font-mono">
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle markdown headings
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-4xl font-mono font-bold text-white mt-12 mb-6">
                    {paragraph.substring(2)}
                  </h1>
                )
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-mono font-bold text-white mt-10 mb-4">
                    {paragraph.substring(3)}
                  </h2>
                )
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-mono font-bold text-white mt-8 mb-3">
                    {paragraph.substring(4)}
                  </h3>
                )
              }

              // Handle code blocks
              if (paragraph.startsWith('```')) {
                const code = paragraph.substring(paragraph.indexOf('\n') + 1, paragraph.lastIndexOf('```'))
                return (
                  <pre key={index} className="bg-void-900 border border-steel-700/30 rounded-xl p-6 overflow-x-auto my-6">
                    <code className="text-pulse-300 font-mono text-sm">{code}</code>
                  </pre>
                )
              }

              // Handle bold
              if (paragraph.startsWith('**') && paragraph.includes('**:')) {
                const [bold, rest] = paragraph.split('**:')
                return (
                  <p key={index} className="text-steel-300 mb-4 leading-relaxed">
                    <strong className="text-white font-mono">{bold.substring(2)}</strong>: {rest}
                  </p>
                )
              }

              // Handle links
              if (paragraph.includes('→ [')) {
                const linkMatch = paragraph.match(/→ \[(.*?)\]\((.*?)\)/)
                if (linkMatch) {
                  return (
                    <p key={index} className="text-pulse-400 font-mono my-6">
                      → <a href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="hover:underline">{linkMatch[1]}</a>
                    </p>
                  )
                }
              }

              // Regular paragraphs
              return (
                <p key={index} className="text-steel-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>
      </article>

      {/* Related / CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30 border-t border-steel-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mono-heading text-3xl text-white mb-6">
            Building the Persistence Layer
          </h2>
          <p className="text-lg text-steel-400 mb-8">
            Infrastructure for AI agents that remember
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/novyxlabs/novyx-core"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all"
            >
              View on GitHub
            </a>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
