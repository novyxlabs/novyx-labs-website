'use client'

import Link from 'next/link'
import { Package, ArrowRight, Check, Zap, Database, Shield, RefreshCw } from 'lucide-react'

export default function LangChainPage() {
  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge with PyPI link */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-mono font-bold">
              LIVE ON PYPI
            </span>
            <a
              href="https://pypi.org/project/novyx-langchain/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <img
                src="https://img.shields.io/pypi/v/novyx-langchain?style=flat-square&color=4A90E2"
                alt="PyPI version"
                className="h-5"
              />
            </a>
            <a
              href="https://pypi.org/project/novyx-langchain/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <img
                src="https://img.shields.io/pypi/pyversions/novyx-langchain?style=flat-square&color=4A90E2"
                alt="Python versions"
                className="h-5"
              />
            </a>
          </div>

          {/* Title */}
          <h1 className="mono-heading text-5xl sm:text-6xl text-white mb-6">
            Persistent Memory for
            <br />
            <span className="gradient-text">LangChain Agents</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-steel-300 leading-relaxed mb-8 max-w-3xl">
            Drop-in replacement for LangChain memory classes. Your agents remember everything—across restarts,
            deployments, and sessions. Semantic search over conversation history. Cryptographic integrity verification.
          </p>

          {/* Install command */}
          <div className="bg-void-900 border border-steel-700/30 rounded-xl p-4 mb-8 max-w-md">
            <div className="flex items-center justify-between">
              <code className="text-orange-400 font-mono text-lg">pip install novyx-langchain</code>
              <button
                onClick={() => navigator.clipboard?.writeText('pip install novyx-langchain')}
                className="text-steel-500 hover:text-white transition-colors p-2"
                title="Copy to clipboard"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://pypi.org/project/novyx-langchain/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-orange-500 text-white font-mono font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
            >
              <Package className="mr-2 w-5 h-5" />
              View on PyPI
            </a>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-steel-600 text-white font-mono font-semibold hover:bg-steel-800/30 transition-all"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-8">Quick Start</h2>

          <div className="bg-void-900 border border-steel-700/30 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-steel-700/30">
              <span className="text-steel-500 font-mono text-sm">example.py</span>
              <span className="text-steel-600 font-mono text-xs">Python</span>
            </div>
            <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
              <code className="text-steel-300">{`from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_openai_functions_agent
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

`}<span className="text-orange-400"># Import Novyx persistent memory</span>{`
from novyx_langchain import NovyxChatMessageHistory

`}<span className="text-orange-400"># Initialize with your API key</span>{`
history = NovyxChatMessageHistory(
    session_id="user-123",
    api_key="your-novyx-api-key"
)

`}<span className="text-orange-400"># Use with any LangChain agent</span>{`
llm = ChatOpenAI(model="gpt-4")
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    MessagesPlaceholder(variable_name="chat_history"),
    ("human", "{input}"),
])

`}<span className="text-orange-400"># Messages persist across restarts</span>{`
history.add_user_message("Remember: my favorite color is blue")
history.add_ai_message("I'll remember that your favorite color is blue!")

`}<span className="text-orange-400"># Later, in a new session...</span>{`
messages = history.messages  `}<span className="text-green-400"># All messages restored</span></code>
            </pre>
          </div>

          <p className="text-steel-500 text-sm mt-4 font-mono">
            → Full documentation at{' '}
            <a href="https://pypi.org/project/novyx-langchain/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">
              pypi.org/project/novyx-langchain
            </a>
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-4">Why Novyx?</h2>
          <p className="text-steel-400 mb-12 max-w-2xl">
            Compare novyx-langchain to other memory solutions for LangChain agents.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-steel-700/30">
                  <th className="py-4 px-4 text-steel-400 font-mono font-medium text-sm">Feature</th>
                  <th className="py-4 px-4 text-orange-400 font-mono font-bold text-sm">novyx-langchain</th>
                  <th className="py-4 px-4 text-steel-500 font-mono font-medium text-sm">ConversationBufferMemory</th>
                  <th className="py-4 px-4 text-steel-500 font-mono font-medium text-sm">Zep</th>
                  <th className="py-4 px-4 text-steel-500 font-mono font-medium text-sm">Mem0</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: 'Persistent across restarts', novyx: true, buffer: false, zep: true, mem0: true },
                  { feature: 'Semantic search', novyx: true, buffer: false, zep: true, mem0: true },
                  { feature: 'Cryptographic integrity', novyx: true, buffer: false, zep: false, mem0: false },
                  { feature: 'Zero infrastructure', novyx: true, buffer: true, zep: false, mem0: false },
                  { feature: 'Drop-in LangChain compatible', novyx: true, buffer: true, zep: true, mem0: false },
                  { feature: 'Session isolation', novyx: true, buffer: false, zep: true, mem0: true },
                  { feature: 'Audit trail', novyx: true, buffer: false, zep: false, mem0: false },
                  { feature: 'Enterprise SLA', novyx: true, buffer: false, zep: true, mem0: false },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-steel-900/10' : ''}>
                    <td className="py-3 px-4 text-steel-300 font-medium">{row.feature}</td>
                    <td className="py-3 px-4">
                      {row.novyx ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <span className="text-steel-600">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {row.buffer ? (
                        <Check className="w-5 h-5 text-steel-500" />
                      ) : (
                        <span className="text-steel-600">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {row.zep ? (
                        <Check className="w-5 h-5 text-steel-500" />
                      ) : (
                        <span className="text-steel-600">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {row.mem0 ? (
                        <Check className="w-5 h-5 text-steel-500" />
                      ) : (
                        <span className="text-steel-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="mono-heading text-3xl text-white mb-12">Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: RefreshCw,
                title: 'Survives Restarts',
                description: 'Memory persists across process restarts, deployments, and server reboots. No more lost context.',
              },
              {
                Icon: Database,
                title: 'Semantic Search',
                description: 'Query conversation history by meaning, not just keywords. Find relevant context instantly.',
              },
              {
                Icon: Shield,
                title: 'Cryptographic Integrity',
                description: 'SHA-256 verification of all stored messages. Detect tampering. Audit-ready.',
              },
              {
                Icon: Zap,
                title: 'Zero Infrastructure',
                description: 'No databases to manage. No servers to provision. Just pip install and start building.',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-steel-900/20 border border-steel-700/30">
                <feature.Icon className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-lg font-mono font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-steel-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mono-heading text-3xl text-white mb-4">Works With</h2>
          <p className="text-steel-400 mb-12">
            Integrates seamlessly with your existing AI stack
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: 'LangChain', color: 'text-green-400' },
              { name: 'LangGraph', color: 'text-blue-400' },
              { name: 'OpenAI', color: 'text-emerald-400' },
              { name: 'Anthropic', color: 'text-orange-400' },
              { name: 'Python 3.9+', color: 'text-yellow-400' },
            ].map((integration) => (
              <div
                key={integration.name}
                className="px-6 py-3 rounded-xl bg-steel-900/30 border border-steel-700/30"
              >
                <span className={`font-mono font-bold ${integration.color}`}>{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-void-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mono-heading text-4xl text-white mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-steel-400 mb-8">
            Install the package, get an API key, and give your agents persistent memory.
          </p>

          <div className="bg-void-900 border border-steel-700/30 rounded-xl p-4 mb-8 max-w-md mx-auto">
            <code className="text-orange-400 font-mono text-lg">pip install novyx-langchain</code>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pypi.org/project/novyx-langchain/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-orange-500 text-white font-mono font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
            >
              <Package className="mr-2 w-5 h-5" />
              View on PyPI
            </a>
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
