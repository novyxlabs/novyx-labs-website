import { Metadata } from 'next'
import { SolutionsHero } from '@/components/solutions/SolutionsHero'
import { SolutionsList } from '@/components/solutions/SolutionsList'

export const metadata: Metadata = {
  title: 'AI Solutions for Founders | Novyx Labs',
  description: 'Comprehensive AI-powered solutions across legal tech, compliance, and persistent intelligence for modern builders.',
  openGraph: {
    title: 'AI Solutions for Founders - Novyx Labs',
    description: 'AI-powered tools for legal, compliance, and intelligent automation',
    type: 'website',
  },
}

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsList />
    </>
  )
}
