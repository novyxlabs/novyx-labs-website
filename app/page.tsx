import { Metadata } from 'next'
import { EnterpriseHero } from '@/components/home/EnterpriseHero'
import { EnterpriseCapabilities } from '@/components/home/EnterpriseCapabilities'
import { GovernanceArchitecture } from '@/components/home/GovernanceArchitecture'
import { CTA } from '@/components/home/CTA'

export const metadata: Metadata = {
  title: 'Novyx Labs - Automated Trust for the Federated Enterprise',
  description: 'Enterprise governance and federated intelligence with cryptographic integrity, multi-tenant sovereignty, and sub-10ms MTTR. SOC 2, ISO 27001, GDPR compliant.',
  keywords: ['enterprise governance', 'federated intelligence', 'cryptographic integrity', 'HMAC-SHA256', 'multi-tenant', 'data sovereignty', 'compliance', 'zero-knowledge', 'knowledge graph'],
  openGraph: {
    title: 'Novyx Labs - Automated Trust for the Federated Enterprise',
    description: 'Cryptographic integrity and data sovereignty for regulated enterprises',
  },
}

export default function Home() {
  return (
    <>
      <EnterpriseHero />
      <EnterpriseCapabilities />
      <GovernanceArchitecture />
      <CTA />
    </>
  )
}





