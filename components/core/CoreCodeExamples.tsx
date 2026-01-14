'use client'

import { useState } from 'react'
import { Code, Copy, Check } from 'lucide-react'

const codeExamples = [
  {
    title: 'Cryptographic Writes',
    description: 'HMAC-signed transactions with integrity proofs',
    code: `// Store with cryptographic signature
const tx = await core.transaction({
  tenant: "acme-corp",
  operation: "CREATE",
  entity: "audit_record",
  data: {
    actor: "admin@acme.com",
    action: "data_export",
    timestamp: Date.now()
  }
});

// Returns HMAC-SHA256 signature
// tx.signature: "a3f7c9d1e..."
// tx.merkleRoot: "8b2e4a6f..."`
  },
  {
    title: 'Immutable Queries',
    description: 'Time-travel queries with version control',
    code: `// Query historical state
const state = await core.query({
  tenant: "acme-corp",
  timestamp: "2025-12-01T00:00:00Z",
  verifyIntegrity: true
});

// Returns cryptographically-verified
// historical state with proof chain

// state.verified: true
// state.signatureChain: [...]`
  },
  {
    title: 'Zero-Knowledge Federation',
    description: 'Cross-region sync with sovereignty guarantees',
    code: `// Federate across compliance zones
const proof = await core.federation.sync({
  sourceRegion: "eu-west",
  targetRegion: "us-east",
  merkleRoot: tx.merkleRoot,
  zeroKnowledge: true
});

// Consistency verified without
// exposing tenant data
// proof.consistent: true`
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
    <section id="code" className="py-24 px-4 sm:px-6 lg:px-8 bg-midnight text-white relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/30 text-accent text-sm font-mono font-semibold mb-6">
            <Code className="w-4 h-4" />
            <span>API EXAMPLES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-mono">
            Enterprise API
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cryptographic operations with mathematical guarantees of integrity and sovereignty
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Example Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {codeExamples.map((example, index) => (
              <button
                key={example.title}
                onClick={() => setActiveExample(index)}
                className={`px-6 py-3 rounded-xl font-mono font-medium transition-all ${
                  activeExample === index
                    ? 'bg-accent text-midnight shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="rounded-2xl overflow-hidden bg-slate-900 backdrop-blur-xl border border-slate-700">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
              <div>
                <h3 className="font-bold text-lg font-mono text-white">{codeExamples[activeExample].title}</h3>
                <p className="text-slate-400 text-sm">{codeExamples[activeExample].description}</p>
              </div>
              <button
                onClick={copyCode}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-slate-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-300">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Block */}
            <div className="p-6 font-mono text-sm overflow-x-auto bg-midnight">
              <pre className="text-accent">
                <code>{codeExamples[activeExample].code}</code>
              </pre>
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6 font-mono text-sm">
              Full documentation and integration guides available on GitHub
            </p>
            <a
              href="https://github.com/novyxlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-accent text-midnight font-mono font-semibold hover:bg-accent/90 transition-all"
            >
              <Code className="mr-2 w-5 h-5" />
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
