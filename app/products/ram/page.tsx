import { Metadata } from 'next'
import Link from 'next/link'
import { Zap, ArrowRight, Database, Search, Lock, Clock, Code, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Novyx RAM - Memory API for Developers | Novyx Labs',
  description: 'REST API for persistent AI memory. Store, search, and retrieve agent context with sub-millisecond latency. Built for developers building AI applications.',
  keywords: ['AI memory API', 'agent memory', 'REST API', 'developer API', 'persistent memory', 'AI infrastructure'],
}

export default function RAMPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-mono font-bold">
              LIVE
            </span>
            <span className="text-steel-500 font-mono text-sm">REST API • Real-time Memory</span>
          </div>

          {/* Title */}
          <h1 className="mono-heading text-5xl sm:text-6xl text-white mb-6">
            Novyx RAM
          </h1>
          <p className="text-3xl text-purple-400 font-mono font-semibold mb-8">
            Memory API for developers
          </p>

          {/* Description */}
          <p className="text-xl text-steel-300 leading-relaxed mb-12 max-w-3xl">
            REST API for persistent AI memory. Store conversation context, query by semantic similarity,
            and retrieve relevant memories in real-time. Built for developers who need memory infrastructure
            without the complexity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-purple-500 text-white font-mono font-semibold hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/20"
            >
              <Zap className="mr-2 w-5 h-5" />
              Get API Key
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              <Code className="mr-2 w-5 h-5" />
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* API Example */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-8">Simple REST API</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Store Memory */}
            <div className="bg-void-900 border border-steel-700/30 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-steel-700/30">
                <span className="text-steel-500 font-mono text-sm">Store a memory</span>
                <span className="text-purple-400 font-mono text-xs">POST</span>
              </div>
              <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto">
                <code className="text-steel-300">{`curl -X POST https://api.novyxlabs.com/v1/memories \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "session_id": "user-123",
    "content": "User prefers dark mode",
    "metadata": { "type": "preference" }
  }'`}</code>
              </pre>
            </div>

            {/* Search Memory */}
            <div className="bg-void-900 border border-steel-700/30 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-steel-700/30">
                <span className="text-steel-500 font-mono text-sm">Semantic search</span>
                <span className="text-purple-400 font-mono text-xs">GET</span>
              </div>
              <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto">
                <code className="text-steel-300">{`curl https://api.novyxlabs.com/v1/memories/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -G \\
  --data-urlencode "session_id=user-123" \\
  --data-urlencode "query=user preferences" \\
  --data-urlencode "limit=10"`}</code>
              </pre>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-purple-950/20 border border-purple-800/30">
            <p className="text-steel-300 text-sm">
              <span className="text-purple-400 font-mono font-bold">Response:</span> Returns semantically similar memories ranked by relevance,
              with full metadata and integrity verification hashes.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-12">API Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: Search,
                title: 'Semantic Search',
                description: 'Query memories by meaning, not keywords. Vector embeddings find relevant context even with different phrasing.',
              },
              {
                Icon: Clock,
                title: 'Sub-ms Latency',
                description: 'Edge-deployed infrastructure ensures fast responses. P99 latency under 50ms globally.',
              },
              {
                Icon: Lock,
                title: 'Session Isolation',
                description: 'Memories are cryptographically isolated by session. No data leakage between users or contexts.',
              },
              {
                Icon: Database,
                title: 'Persistent Storage',
                description: 'Memories survive restarts and deployments. Durable storage with automatic replication.',
              },
              {
                Icon: Globe,
                title: 'Global Edge',
                description: 'API endpoints in multiple regions. Automatic routing to nearest datacenter.',
              },
              {
                Icon: Code,
                title: 'SDK Support',
                description: 'Official SDKs for Python, TypeScript, and Go. Or use the REST API directly.',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
                <feature.Icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-mono font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-steel-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-12">Built For</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Chatbots & Assistants',
                description: 'Give your conversational AI persistent memory. Remember user preferences, past interactions, and context across sessions.',
                example: 'Customer support bot that remembers previous tickets',
              },
              {
                title: 'Autonomous Agents',
                description: 'Long-running agents need durable memory. Store learned information, task progress, and environmental state.',
                example: 'Research agent that builds knowledge over time',
              },
              {
                title: 'Multi-User Applications',
                description: 'Session-isolated memory for SaaS applications. Each user gets their own secure memory space.',
                example: 'AI writing assistant with per-user context',
              },
            ].map((useCase) => (
              <div key={useCase.title} className="p-6 rounded-xl bg-purple-950/10 border border-purple-800/30">
                <h3 className="text-xl font-mono font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-steel-400 mb-4">{useCase.description}</p>
                <div className="pt-4 border-t border-steel-700/30">
                  <p className="text-steel-500 text-sm font-mono">Example: {useCase.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-8 text-center">Simple Pricing</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-steel-900/20 border border-steel-700/30">
              <h3 className="text-xl font-mono font-bold text-white mb-2">Developer</h3>
              <p className="text-steel-400 mb-4">For side projects and prototypes</p>
              <div className="text-4xl font-mono font-bold text-white mb-4">Free</div>
              <ul className="space-y-2 text-steel-400 text-sm mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>10,000 API calls/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>1GB storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Community support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
              >
                Get Started
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-purple-950/20 border border-purple-800/30">
              <h3 className="text-xl font-mono font-bold text-white mb-2">Production</h3>
              <p className="text-steel-400 mb-4">For production applications</p>
              <div className="text-4xl font-mono font-bold text-white mb-4">$49<span className="text-lg text-steel-500">/mo</span></div>
              <ul className="space-y-2 text-steel-400 text-sm mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">✓</span>
                  <span>1M API calls/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">✓</span>
                  <span>100GB storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">✓</span>
                  <span>99.9% SLA</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-lg bg-purple-500 text-white font-mono font-semibold hover:bg-purple-600 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          <p className="text-center text-steel-500 text-sm mt-6 font-mono">
            Need enterprise features? <Link href="/products/integrity" className="text-purple-400 hover:underline">Check out Novyx Integrity</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mono-heading text-4xl text-white mb-6">
            Start Building
          </h2>
          <p className="text-xl text-steel-400 mb-8">
            Get your API key and add persistent memory to your AI applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-purple-500 text-white font-mono font-semibold hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/20"
            >
              <Zap className="mr-2 w-5 h-5" />
              Get API Key
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
