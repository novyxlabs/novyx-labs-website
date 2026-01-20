import { Metadata } from 'next'
import Link from 'next/link'
import { Code, Package, Zap, Terminal, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developers - Build with Novyx | Novyx Labs',
  description: 'Developer resources for Novyx memory infrastructure. LangChain integration, REST API, SDKs, and documentation.',
}

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-pulse/10 border border-pulse/30 text-pulse text-sm font-mono font-medium mb-8">
            <Code className="w-4 h-4" />
            <span>DEVELOPER RESOURCES</span>
          </div>

          <h1 className="mono-heading text-5xl sm:text-6xl text-white mb-6">
            Build with Novyx
          </h1>

          <p className="text-xl text-steel-400 max-w-2xl mx-auto mb-12">
            Everything you need to add persistent memory to your AI applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg shadow-pulse/20"
            >
              Get API Key
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              View Docs
            </Link>
          </div>
        </div>
      </section>

      {/* LangChain Integration */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Package className="w-8 h-8 text-orange-400" />
            <h2 className="mono-heading text-3xl text-white">LangChain Integration</h2>
          </div>

          <p className="text-steel-400 mb-8 max-w-2xl">
            Drop-in persistent memory for LangChain agents. One line to install, one line to integrate.
          </p>

          <div className="bg-void-900 border border-steel-700/30 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-steel-500 font-mono text-sm">Install</span>
              <span className="text-orange-400 font-mono text-xs">pip</span>
            </div>
            <code className="text-orange-400 font-mono text-lg">pip install novyx-langchain</code>
          </div>

          <div className="bg-void-900 border border-steel-700/30 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-steel-700/30">
              <span className="text-steel-500 font-mono text-sm">Quick Start</span>
              <span className="text-steel-600 font-mono text-xs">Python</span>
            </div>
            <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
              <code className="text-steel-300">{`from novyx_langchain import NovyxChatMessageHistory

# Initialize with your API key
history = NovyxChatMessageHistory(
    session_id="user-123",
    api_key="your-novyx-api-key"
)

# Add messages - they persist automatically
history.add_user_message("Remember my name is Alice")
history.add_ai_message("Nice to meet you, Alice!")

# Messages survive restarts
print(history.messages)  # All messages restored`}</code>
            </pre>
          </div>

          <div className="mt-6">
            <a
              href="https://pypi.org/project/novyx-langchain/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-400 font-mono font-semibold hover:text-orange-300 transition-colors"
            >
              View on PyPI <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* REST API */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Terminal className="w-8 h-8 text-purple-400" />
            <h2 className="mono-heading text-3xl text-white">REST API</h2>
          </div>

          <p className="text-steel-400 mb-8 max-w-2xl">
            Direct API access for any language or platform. Simple REST endpoints for storing and searching memories.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
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
    "content": "User prefers dark mode"
  }'`}</code>
              </pre>
            </div>

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
  --data-urlencode "query=user preferences"`}</code>
              </pre>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/docs"
              className="inline-flex items-center text-purple-400 font-mono font-semibold hover:text-purple-300 transition-colors"
            >
              Full API Reference <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="w-8 h-8 text-green-400" />
            <h2 className="mono-heading text-3xl text-white">SDKs</h2>
          </div>

          <p className="text-steel-400 mb-8 max-w-2xl">
            Official SDKs for popular languages. More coming soon.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-green-950/20 border border-green-800/30">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-green-400 font-mono font-bold">Available</span>
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-2">Python</h3>
              <p className="text-steel-400 text-sm mb-4">pip install novyx-langchain</p>
              <a
                href="https://pypi.org/project/novyx-langchain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-mono text-sm hover:underline"
              >
                View on PyPI →
              </a>
            </div>

            <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-steel-500" />
                <span className="text-steel-500 font-mono font-bold">Coming Soon</span>
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-2">TypeScript</h3>
              <p className="text-steel-400 text-sm mb-4">npm install @novyx/client</p>
              <Link
                href="/signup"
                className="text-steel-400 font-mono text-sm hover:underline"
              >
                Join waitlist →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-steel-500" />
                <span className="text-steel-500 font-mono font-bold">Coming Soon</span>
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-2">Go</h3>
              <p className="text-steel-400 text-sm mb-4">go get github.com/novyxlabs/go</p>
              <Link
                href="/signup"
                className="text-steel-400 font-mono text-sm hover:underline"
              >
                Join waitlist →
              </Link>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-xl bg-pulse-950/20 border border-pulse-800/30 text-center">
            <p className="text-steel-300">
              Open source SDKs coming to GitHub soon.{' '}
              <Link href="/signup" className="text-pulse-400 hover:underline">
                Join the waitlist
              </Link>
              {' '}to get notified.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mono-heading text-4xl text-white mb-6">
            Ready to Build?
          </h2>
          <p className="text-xl text-steel-400 mb-8">
            Get your API key and start adding persistent memory to your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pulse text-white font-mono font-semibold hover:bg-pulse-600 transition-all shadow-lg shadow-pulse/20"
            >
              Get API Key
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
