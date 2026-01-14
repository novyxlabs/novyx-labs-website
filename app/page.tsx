import { Metadata } from 'next'
import { EnterpriseHero } from '@/components/home/EnterpriseHero'
import { EnterpriseCapabilities } from '@/components/home/EnterpriseCapabilities'
import { GovernanceArchitecture } from '@/components/home/GovernanceArchitecture'
import { Pricing } from '@/components/Pricing'
import { CTA } from '@/components/home/CTA'

export const metadata: Metadata = {
  title: 'Novyx Labs - Fix AI Forgetfulness with Persistent Knowledge Graphs',
  description: 'Open-source knowledge graph with secure data linking, self-healing architecture, and multi-tenant isolation. Start free, scale to managed hosting, or deploy enterprise governance.',
  keywords: ['knowledge graph', 'persistent AI', 'self-healing', 'multi-tenant', 'data sovereignty', 'enterprise governance', 'federated intelligence'],
  openGraph: {
    title: 'Novyx Labs - Fix AI Forgetfulness',
    description: 'Persistent knowledge graphs that never forget. Open source to enterprise.',
  },
}

export default function Home() {
  return (
    <>
      <EnterpriseHero />
      <EnterpriseCapabilities />
      <GovernanceArchitecture />
      <Pricing />
      <CTA />
    </>
  )
}





