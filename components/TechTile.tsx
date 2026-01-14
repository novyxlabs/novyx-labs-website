'use client'

import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface TechTileProps {
  icon: LucideIcon
  title: string
  description: string
  badge?: string
  badgeColor?: string
  href?: string
  children?: ReactNode
}

export function TechTile({ 
  icon: Icon, 
  title, 
  description, 
  badge, 
  badgeColor = 'bg-electric-blue',
  href,
  children 
}: TechTileProps) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Wrapper 
      {...wrapperProps}
      className="tech-tile group cursor-pointer"
    >
      {/* Icon with gradient background */}
      <div className="flex items-start justify-between mb-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-xl bg-electric-blue opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
        </div>
        
        {badge && (
          <span className={`${badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
            {badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-navy dark:text-white group-hover:text-electric-blue dark:group-hover:text-electric-blue transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Optional children (features, stats, etc.) */}
      {children}

      {/* Hover indicator */}
      <div className="flex items-center text-electric-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Explore</span>
        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Wrapper>
  )
}
