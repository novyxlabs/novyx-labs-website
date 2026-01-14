import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { InfraHeader } from '@/components/InfraHeader'
import { InfraFooter } from '@/components/InfraFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Novyx Labs - Building the persistence layer for autonomous AI',
    template: '%s | Novyx Labs'
  },
  description: 'Infrastructure for AI agents that remember. Cryptographically durable memory, integrity verification, and context preservation for autonomous systems.',
  keywords: ['AI agent memory', 'memory persistence', 'AI infrastructure', 'memory poisoning', 'cryptographic verification', 'agent persistence', 'durable AI', 'knowledge graph'],
  authors: [{ name: 'Novyx Labs', url: 'https://novyxlabs.com' }],
  creator: 'Novyx Labs',
  publisher: 'Novyx Labs',
  metadataBase: new URL('https://novyxlabs.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://novyxlabs.com',
    title: 'Novyx Labs - Intelligence that persists. Code that endures.',
    description: 'Infrastructure for AI agents that remember. Building durable, verifiable persistence for autonomous systems.',
    siteName: 'Novyx Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Novyx Labs - AI Persistence Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novyx Labs - Intelligence that persists. Code that endures.',
    description: 'Infrastructure for AI agents that remember.',
    images: ['/og-image.png'],
    creator: '@NovyxLabs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <InfraHeader />
          <main className="flex-grow">
            {children}
          </main>
          <InfraFooter />
        </div>
      </body>
    </html>
  )
}





