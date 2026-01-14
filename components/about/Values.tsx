'use client'

import { Heart, Code, Scale } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Built for Developers',
    description: 'Three lines of code to get started. Clean APIs. Complete documentation. Open-source foundations. We make persistent knowledge graphs as simple as setting a variable.',
  },
  {
    icon: Code,
    title: 'Open Core, Enterprise Ready',
    description: 'Start free with full MIT-licensed source code. Scale to managed hosting when you need it. Deploy enterprise governance when you grow. No lock-in, just options.',
  },
  {
    icon: Scale,
    title: 'Performance at Scale',
    description: 'Self-healing architecture with sub-10ms recovery. Multi-tenant isolation for SaaS. Secure data linking with version control. Production-grade from day one.',
  },
]

export function Values() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-mono text-white">
            Our <span className="text-accent">Philosophy</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Why we build what we build
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent/10 border border-accent/30 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white font-mono">{value.title}</h3>
              <p className="text-slate-400 text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
