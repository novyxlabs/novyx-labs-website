'use client'

import Link from 'next/link'
import { GitBranch, Mail, Twitter } from 'lucide-react'

const navigation = {
  products: [
    { name: 'Novyx Core', href: '/products/core' },
    { name: 'Novyx Integrity', href: '/products/integrity' },
    { name: 'All Products', href: '/products' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: 'mailto:careers@novyxlabs.com' },
  ],
  developers: [
    { name: 'GitHub', href: 'https://github.com/novyxlabs/novyx-core' },
    { name: 'Documentation', href: 'https://github.com/novyxlabs/novyx-core#readme' },
    { name: 'Contribute', href: 'https://github.com/novyxlabs/ideas' },
  ],
}

export function InfraFooter() {
  return (
    <footer className="bg-void-800/30 border-t border-steel-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-pulse/10 border border-pulse/30 flex items-center justify-center">
                <span className="text-pulse font-mono font-bold text-xl">N</span>
              </div>
              <span className="font-mono font-bold text-xl text-white">Novyx Labs</span>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-4">
              Infrastructure for AI agents that remember.
            </p>
            <p className="text-steel-500 text-xs font-mono">
              © 2024 Novyx Labs
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-mono font-bold text-sm mb-4">Products</h3>
            <ul className="space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-steel-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-mono font-bold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : undefined}
                    className="text-steel-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-white font-mono font-bold text-sm mb-4">Developers</h3>
            <ul className="space-y-2">
              {navigation.developers.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-steel-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Tagline */}
            <p className="text-steel-500 text-sm font-mono">
              Intelligence that persists. Code that endures.
            </p>

            {/* Social */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/novyxlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-steel-400 hover:text-white hover:bg-steel-800/30 transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@novyxlabs.com"
                className="p-2 rounded-lg text-steel-400 hover:text-white hover:bg-steel-800/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/novyxlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-steel-400 hover:text-white hover:bg-steel-800/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
