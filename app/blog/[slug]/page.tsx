import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '../posts'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Novyx Labs Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      {/* Back Button */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-electric-blue hover:text-electric-blue-600 font-medium group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Meta */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-navy dark:text-white">
            {post.title}
          </h1>

          {/* Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-navy dark:prose-headings:text-white
              prose-a:text-electric-blue hover:prose-a:text-electric-blue-600
              prose-code:text-electric-blue prose-code:bg-gray-100 dark:prose-code:bg-navy-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-navy-900 prose-pre:text-white"
          >
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={idx}>{paragraph.slice(2)}</h1>
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx}>{paragraph.slice(3)}</h2>
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx}>{paragraph.slice(4)}</h3>
              }
              if (paragraph.startsWith('```')) {
                const lines = paragraph.split('\n')
                const code = lines.slice(1, -1).join('\n')
                return <pre key={idx}><code>{code}</code></pre>
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n')
                return (
                  <ul key={idx}>
                    {items.map((item, i) => (
                      <li key={i}>{item.slice(2)}</li>
                    ))}
                  </ul>
                )
              }
              if (paragraph === '---') {
                return <hr key={idx} />
              }
              return <p key={idx}>{paragraph}</p>
            })}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <div className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-navy dark:text-white">
            More Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="glass rounded-xl p-6 hover:shadow-xl transition-all group"
                >
                  <h3 className="text-xl font-bold mb-2 text-navy dark:text-white group-hover:text-electric-blue transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
