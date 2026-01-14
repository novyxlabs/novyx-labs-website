'use client'

import { useState } from 'react'
import { Send, User, Brain } from 'lucide-react'

const demoConversations = [
  {
    user: "Remember that I'm building a SaaS product in the legal tech space",
    ai: "Got it! I've stored that you're working on a legal tech SaaS product. I'll keep this context for all future conversations and can help with legal compliance, product development, and go-to-market strategies specific to this vertical.",
    memory: "User's context: Building legal tech SaaS"
  },
  {
    user: "What should I focus on this week?",
    ai: "Based on your legal tech SaaS context, I recommend: 1) Finalizing your data security compliance (critical for legal tools), 2) Reaching out to 3 potential beta customers in small law firms, 3) Setting up automated contract generation workflows. Would you like me to break down any of these?",
    memory: "Retrieved context: Legal tech SaaS + Weekly planning"
  },
  {
    user: "Create a pitch for those beta customers",
    ai: "Perfect! I'll craft a pitch specifically for small law firms highlighting how your legal tech SaaS saves them time on contract generation. I'm using the context that you're in legal tech and targeting this specific segment. Here's a tailored 2-minute pitch...",
    memory: "Using: Legal tech + Beta outreach + Law firm target"
  }
]

export function CoreDemo() {
  const [currentDemo, setCurrentDemo] = useState(0)

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-navy-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 neural-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-navy dark:text-white">
            See Core in
            <span className="gradient-text"> Action</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Watch how Novyx Core maintains context across conversations and provides
            increasingly personalized assistance over time.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="max-w-4xl mx-auto">
          {/* Chat Window */}
          <div className="glass rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-navy to-electric-blue px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Novyx Core</div>
                  <div className="text-white/70 text-sm">Persistent Intelligence Active</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-sm">Online</span>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-6 space-y-6 min-h-[400px] bg-white dark:bg-navy-900">
              {/* User Message */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-electric-blue text-white rounded-2xl rounded-tr-sm px-6 py-4 max-w-[80%]">
                  <p className="text-sm leading-relaxed">{demoConversations[currentDemo].user}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-navy-700 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 dark:bg-navy-800 rounded-2xl rounded-tl-sm px-6 py-4 max-w-[80%]">
                  <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                    {demoConversations[currentDemo].ai}
                  </p>
                </div>
              </div>

              {/* Memory Indicator */}
              <div className="flex justify-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-electric-blue/10 text-electric-blue text-xs font-medium">
                  <Brain className="w-3 h-3" />
                  <span>Memory Active: {demoConversations[currentDemo].memory}</span>
                </div>
              </div>
            </div>

            {/* Input Area (Static for demo) */}
            <div className="border-t border-gray-200 dark:border-navy-700 p-4 bg-white dark:bg-navy-900">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Message Novyx Core..."
                  disabled
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-navy-700 bg-gray-50 dark:bg-navy-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                />
                <button
                  disabled
                  className="p-3 rounded-xl bg-gray-300 dark:bg-navy-700 text-gray-500 cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Demo Controls */}
          <div className="mt-8 flex justify-center space-x-4">
            {demoConversations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDemo(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  currentDemo === index
                    ? 'bg-electric-blue text-white shadow-lg'
                    : 'bg-white dark:bg-navy-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-navy-700'
                }`}
              >
                Conversation {index + 1}
              </button>
            ))}
          </div>

          {/* Demo Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              💡 This is a simplified demonstration. Actual Novyx Core maintains context across unlimited conversations and can handle complex, multi-domain interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
