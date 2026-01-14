'use client'

import { Mail, Building2, Clock } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    items: [
      { label: 'Primary Contact', value: 'blake@novyxlabs.com' },
      { label: 'General Inquiries', value: 'novyxlabs@gmail.com' },
    ],
  },
  {
    icon: Building2,
    title: 'Company',
    items: [
      { label: 'Legal Entity', value: 'Novyx Labs LLC' },
      { label: 'Type', value: 'Bootstrapped, Founder-led' },
    ],
  },
  {
    icon: Clock,
    title: 'Response Time',
    items: [
      { label: 'Typical Response', value: 'Within 24 hours' },
      { label: 'Business Days', value: 'Monday - Friday' },
    ],
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-gray-600 dark:text-gray-300">
          We're a small, focused team dedicated to helping founders succeed. 
          Reach out anytime - we'd love to hear from you.
        </p>
      </div>

      <div className="space-y-6">
        {contactMethods.map((method) => (
          <div
            key={method.title}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <method.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg">{method.title}</h3>
            </div>
            
            <div className="space-y-2 pl-13">
              {method.items.map((item) => (
                <div key={item.label}>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>
                  {item.value.includes('@') ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-xl p-6 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800">
        <h3 className="font-semibold mb-2">Looking for Support?</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          For product-specific questions or technical support, please include details 
          about your issue in the message form.
        </p>
      </div>
    </div>
  )
}




