import { Metadata } from 'next'
import { CoreHero } from '@/components/core/CoreHero'
import { CoreFeatures } from '@/components/core/CoreFeatures'
import { CoreCodeExamples } from '@/components/core/CoreCodeExamples'
import { CoreUseCases } from '@/components/core/CoreUseCases'
import { CoreCTA } from '@/components/core/CoreCTA'

export const metadata: Metadata = {
  title: 'Novyx Core - Open-Core Knowledge Graph for Enterprise Governance | Novyx Labs',
  description: 'Cryptographic knowledge graph with HMAC-SHA256 integrity, immutable versioning, and multi-tenant isolation. Open-source foundation for federated intelligence.',
  keywords: ['knowledge graph', 'cryptographic integrity', 'HMAC-SHA256', 'multi-tenant', 'federated intelligence', 'enterprise governance', 'open source'],
  openGraph: {
    title: 'Novyx Core - Enterprise Knowledge Graph',
    description: 'Open-core foundation for cryptographic governance and federated intelligence',
    type: 'website',
  },
}

export default function CorePage() {
  return (
    <>
      <CoreHero />
      <CoreFeatures />
      <CoreCodeExamples />
      <CoreUseCases />
      <CoreCTA />
    </>
  )
}
