'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, GitBranch } from 'lucide-react'

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'GitHub', href: 'https://github.com/novyxlabs/novyx-core', external: true },
]

export function InfraHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-void/80 backdrop-blur-xl border-b border-steel-800/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg bg-pulse/10 border border-pulse/30 flex items-center justify-center group-hover:bg-pulse/20 transition-colors">
                <span className="text-pulse font-mono font-bold text-xl">N</span>
              </div>
              <span className="font-mono font-bold text-xl text-white">Novyx Labs</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`text-sm font-mono font-medium transition-colors flex items-center space-x-1 ${
                    isActive
                      ? 'text-pulse'
                      : 'text-steel-400 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.external && <GitBranch className="w-4 h-4" />}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-lg text-steel-400 hover:text-white hover:bg-steel-800/30 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-steel-800/30">
            <div className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className={`block px-4 py-2 rounded-lg text-sm font-mono font-medium transition-colors ${
                      isActive
                        ? 'text-pulse bg-pulse/10'
                        : 'text-steel-400 hover:text-white hover:bg-steel-800/30'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
