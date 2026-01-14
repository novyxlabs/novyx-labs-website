'use client'

import { useState } from 'react'
import { Code, Copy, Check } from 'lucide-react'

const codeExamples = [
  {
    title: 'Store Knowledge',
    description: 'Save information that persists forever',
    code: `// Store a fact in your knowledge graph
await core.store({
  entity: "UserPreference",
  data: {
    name: "Blake",
    role: "Founder",
    focus: "Legal Tech SaaS"
  }
});

// Core remembers this forever`
  },
  {
    title: 'Query Context',
    description: 'Retrieve remembered information',
    code: `// Ask Core what it knows
const context = await core.query(
  "What is Blake working on?"
);

// Returns: "Blake is a Founder 
// focused on Legal Tech SaaS"

// Context from previous conversations!`
  },
  {
    title: 'Build Connections',
    description: 'Create relationships between entities',
    code: `// Link related information
await core.connect({
  from: "Blake",
  to: "Novyx Core",
  relationship: "building"
});

// Knowledge graph grows automatically`
  }
]

export function CoreCodeExamples() {
  const [activeExample, setActiveExample] = useState(0)
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeExample].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="code" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 neural-connections opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
            <Code className="w-4 h-4" />
            <span>Code Examples</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Simple to Use
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Three lines of code. That's all it takes to build persistent knowledge graphs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Example Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {codeExamples.map((example, index) => (
              <button
                key={example.title}
                onClick={() => setActiveExample(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeExample === index
                    ? 'bg-electric-blue text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="glass rounded-2xl overflow-hidden bg-navy-900/50 backdrop-blur-xl border border-white/20">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <h3 className="font-bold text-lg">{codeExamples[activeExample].title}</h3>
                <p className="text-white/60 text-sm">{codeExamples[activeExample].description}</p>
              </div>
              <button
                onClick={copyCode}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Block */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-electric-blue-200">
                <code>{codeExamples[activeExample].code}</code>
              </pre>
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/80 mb-6">
              Want to see more? Check out our GitHub repo for full documentation and examples.
            </p>
            <a
              href="https://github.com/novyxlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-navy font-semibold hover:bg-white/90 transition-all"
            >
              <Code className="mr-2 w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
