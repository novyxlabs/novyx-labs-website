import Link from 'next/link'
import { Mail, Github, Twitter, Linkedin } from 'lucide-react'

const navigation = {
  solutions: [
    { name: 'All Solutions', href: '/solutions' },
    { name: 'Core Tech', href: '/core' },
    { name: 'Legal Generator', href: '/solutions#legal' },
    { name: 'Compliance Hub', href: '/solutions#compliance' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Ecosystem', href: '/ecosystem' },
    { name: 'Documentation', href: '/docs' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl gradient-text">Novyx Labs</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Empowering builders with AI intelligence across every vertical.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:novyxlabs@gmail.com"
                className="text-gray-400 hover:text-electric-blue dark:hover:text-electric-blue transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-sm text-navy dark:text-white mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-electric-blue dark:hover:text-electric-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm text-navy dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-electric-blue dark:hover:text-electric-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm text-navy dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-electric-blue dark:hover:text-electric-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © 2026 Novyx Labs LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


