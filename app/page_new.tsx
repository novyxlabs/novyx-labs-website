import { Metadata } from 'next'
import { InfraHero } from '@/components/home/InfraHero'
import { ProblemSolution } from '@/components/home/ProblemSolution'
import { ProductGrid } from '@/components/home/ProductGrid'
import { InfraFooter } from '@/components/home/InfraFooter'

export const metadata: Metadata = {
  title: 'Novyx Labs - Building the persistence layer for autonomous AI',
  description: 'Infrastructure for AI agents that remember. Cryptographically durable memory, integrity verification, and context preservation for autonomous systems.',
  keywords: ['AI agent memory', 'memory persistence', 'AI infrastructure', 'memory poisoning', 'cryptographic verification', 'agent persistence', 'durable AI', 'knowledge graph'],
}

export default function Home() {
  return (
    <>
      <InfraHero />
      <ProblemSolution />
      <ProductGrid />
      <InfraFooter />
    </>
  )
}
