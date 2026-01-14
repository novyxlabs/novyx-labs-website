import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export const metadata = {
  title: 'Contact - Get in Touch | Novyx Labs',
  description: 'Connect with the Novyx Labs team about AI solutions, Novyx Core, or partnership opportunities.',
  openGraph: {
    title: 'Contact Novyx Labs',
    description: 'Get in touch about AI solutions and intelligent automation',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}





