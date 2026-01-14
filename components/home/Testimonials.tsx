'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, TechStart',
    content: 'Novyx saved us thousands on legal fees. The documents were professional and exactly what we needed to get started.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'CEO, DataFlow',
    content: 'I was amazed at how fast and easy it was. What would have taken weeks with a lawyer took me 10 minutes.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Founder, DesignHub',
    content: 'As a solo founder, I needed affordable legal help. Novyx delivered exactly that - quality documents at a price I could afford.',
    rating: 5,
  },
  {
    name: 'James Park',
    role: 'Co-founder, AppLabs',
    content: 'The Legal Generator is a game-changer for startups. Simple, fast, and reliable. Highly recommend!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join hundreds of founders who have simplified their legal workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}





