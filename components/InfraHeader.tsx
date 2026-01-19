'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const products = [
  { name: 'Novyx Core', href: '/products/core', description: 'The persistence engine' },
  { name: 'Novyx RAM', href: '/products/ram', description: 'API for developers' },
  { name: 'Novyx Integrity', href: '/products/integrity', description: 'Enterprise security' },
  { name: 'LangChain Integration', href: '/products/langchain', description: 'pip install novyx-langchain' },
]

const navigation = [
  { name: 'Docs', href: '/docs' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

export function InfraHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

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
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                onBlur={() => setTimeout(() => setProductsOpen(false), 150)}
                className={`text-sm font-mono font-medium transition-colors flex items-center space-x-1 ${
                  pathname.startsWith('/products')
                    ? 'text-pulse'
                    : 'text-steel-400 hover:text-white'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-void-800 border border-steel-700/30 shadow-xl overflow-hidden">
                  <div className="py-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block px-4 py-3 hover:bg-steel-800/30 transition-colors"
                        onClick={() => setProductsOpen(false)}
                      >
                        <div className="text-sm font-mono font-medium text-white">{product.name}</div>
                        <div className="text-xs text-steel-500">{product.description}</div>
                      </Link>
                    ))}
                    <div className="border-t border-steel-700/30 mt-2 pt-2">
                      <Link
                        href="/products"
                        className="block px-4 py-2 text-sm font-mono text-steel-400 hover:text-white transition-colors"
                        onClick={() => setProductsOpen(false)}
                      >
                        View All Products →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-mono font-medium transition-colors ${
                    isActive
                      ? 'text-pulse'
                      : 'text-steel-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* Get API Key CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-pulse text-white text-sm font-mono font-semibold hover:bg-pulse-600 transition-all"
            >
              Get API Key
            </Link>
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
              {/* Products section */}
              <div className="px-4 py-2 text-xs font-mono text-steel-500 uppercase tracking-wider">Products</div>
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="block px-4 py-2 rounded-lg text-sm font-mono font-medium text-steel-400 hover:text-white hover:bg-steel-800/30 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {product.name}
                </Link>
              ))}

              <div className="border-t border-steel-800/30 my-2" />

              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
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

              <div className="px-4 pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 rounded-lg bg-pulse text-white text-sm font-mono font-semibold hover:bg-pulse-600 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get API Key
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
