import { Mission } from '@/components/about/Mission'
import { Story } from '@/components/about/Story'
import { Values } from '@/components/about/Values'
import { Contact } from '@/components/about/Contact'

export const metadata = {
  title: 'About - Automated Trust for the Federated Enterprise | Novyx Labs LLC',
  description: 'Novyx Labs provides enterprise governance and federated intelligence—from open-core cryptographic foundations to enterprise-plus compliance automation.',
  keywords: ['enterprise governance', 'federated intelligence', 'cryptographic trust', 'compliance automation', 'SOC 2', 'ISO 27001'],
  openGraph: {
    title: 'About Novyx Labs - Enterprise Governance',
    description: 'Automated trust for the federated enterprise',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <Mission />
      <Story />
      <Values />
      <Contact />
    </>
  )
}





