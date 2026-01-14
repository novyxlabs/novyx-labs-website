import { Metadata } from 'next'
import { Brain, Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '../blog/posts'

export const metadata: Metadata = {
  title: 'Intelligence - Research & Policy | Novyx Labs',
  description: 'Thought leadership on federated intelligence, cryptographic trust, and self-healing systems for enterprise governance.',
  keywords: ['federated intelligence', 'cryptographic auditing', 'self-healing systems', 'enterprise AI', 'knowledge graphs'],
}

export default function IntelligencePage() {
  return (
    <div className="pt-24 pb-16 bg-midnight">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-midnight via-slate-900 to-midnight relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent font-mono text-sm mb-6">
            RESEARCH & POLICY
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white font-mono">
            Intelligence
          </h1>
          <p className="text-xl text-slate-300">
            Thought leadership on enterprise governance, federated architectures, and
            cryptographic trust for regulated industries
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white font-mono mb-4">Featured Research</h2>
            <p className="text-slate-400">
              Technical deep-dives on the architectures powering next-generation enterprise systems
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border border-slate-700 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 group bg-midnight/50 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4 font-mono">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-accent transition-colors font-mono">
                  {post.title}
                </h2>
                
                <p className="text-lg text-slate-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-accent font-mono font-medium group-hover:translate-x-1 transition-transform">
                  <span>Read Full Analysis</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research Topics */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-midnight">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white font-mono mb-4">Research Focus Areas</h2>
            <p className="text-slate-400">
              Our ongoing research initiatives in enterprise AI governance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Federated Intelligence',
                desc: 'Distributed knowledge graphs with cryptographic consistency across compliance boundaries',
                topics: ['Cross-border federation', 'Zero-knowledge proofs', 'Sovereign AI']
              },
              {
                title: 'Cryptographic Trust',
                desc: 'HMAC-SHA256 integrity and immutable audit trails for regulated industries',
                topics: ['Digital signatures', 'Audit automation', 'Compliance proofs']
              },
              {
                title: 'Self-Healing Systems',
                desc: 'Sub-10ms MTTR with automated detection, rollback, and recovery mechanisms',
                topics: ['Anomaly detection', 'Auto-recovery', 'Version control']
              },
              {
                title: 'Multi-Tenant Isolation',
                desc: 'Zero-knowledge tenant boundaries with cryptographic sovereignty guarantees',
                topics: ['Tenant isolation', 'Data sovereignty', 'Access control']
              },
              {
                title: 'Performance Engineering',
                desc: 'Microsecond-latency operations at enterprise scale with 99.99% uptime',
                topics: ['Query optimization', 'Index strategies', 'Caching layers']
              },
              {
                title: 'Regulatory Frameworks',
                desc: 'Implementation patterns for SOC 2, ISO 27001, GDPR, and HIPAA compliance',
                topics: ['Policy enforcement', 'Audit trails', 'Compliance automation']
              },
            ].map((area) => (
              <div key={area.title} className="border border-slate-700 rounded-xl p-6 bg-slate-900/50 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                  <Brain className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{area.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{area.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <span key={topic} className="px-2 py-1 rounded bg-accent/10 text-accent font-mono text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-br from-slate-900 to-midnight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-mono">
            Enterprise Architecture Consultation
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Work with our research team on custom governance architectures for your organization
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-accent text-midnight font-mono font-semibold hover:bg-accent/90 transition-all"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
