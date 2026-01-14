import { Metadata } from 'next'
import { CoreHero } from '@/components/core/CoreHero'
import { CoreFeatures } from '@/components/core/CoreFeatures'
import { CoreCodeExamples } from '@/components/core/CoreCodeExamples'
import { CoreUseCases } from '@/components/core/CoreUseCases'
import { CoreCTA } from '@/components/core/CoreCTA'

export const metadata: Metadata = {
  title: 'Novyx Core - Persistent AI Brain for Knowledge Graphs | Novyx Labs',
  description: 'A persistent AI brain that remembers everything. Build knowledge graphs that endure across conversations and grow smarter over time.',
  openGraph: {
    title: 'Novyx Core - Persistent AI Brain for Knowledge Graphs',
    description: 'Build knowledge graphs that persist and learn across every interaction',
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
