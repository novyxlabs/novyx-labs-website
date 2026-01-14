'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Analytics tracking for conversion events
export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      // Track page views
      trackPageView(pathname)
    }
  }, [pathname])

  return null
}

// Track page views
function trackPageView(url: string) {
  // Google Analytics (if configured)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Page view:', url)
  }
}

// Track custom events
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties)
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Event:', eventName, properties)
  }
}

// Conversion tracking helpers
export const track = {
  // GitHub CTA clicks
  githubClick: (location: string) => {
    trackEvent('github_cta_click', { location })
  },

  // Core page visits
  corePageView: () => {
    trackEvent('core_page_view')
  },

  // Code example interactions
  codeExampleView: (exampleName: string) => {
    trackEvent('code_example_view', { example: exampleName })
  },

  codeCopy: (exampleName: string) => {
    trackEvent('code_copy', { example: exampleName })
  },

  // Contact form
  contactFormSubmit: () => {
    trackEvent('contact_form_submit')
  },

  contactFormSuccess: () => {
    trackEvent('contact_form_success')
  },

  // Solution clicks
  solutionClick: (solutionName: string) => {
    trackEvent('solution_click', { solution: solutionName })
  },

  // Blog interactions
  blogPostView: (postSlug: string) => {
    trackEvent('blog_post_view', { post: postSlug })
  },

  // Ecosystem interactions
  ecosystemItemClick: (itemName: string) => {
    trackEvent('ecosystem_item_click', { item: itemName })
  },
}
