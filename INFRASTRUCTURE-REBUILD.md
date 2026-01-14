# Novyx Labs Corporate Website - Infrastructure Rebuild

**Complete rebuild** of Novyx Labs website positioning as infrastructure company building "the persistence layer for autonomous AI."

---

## 🎯 Brand Identity

**Positioning**: Infrastructure-first company solving foundational problems in AI memory/persistence  
**Tagline**: "Intelligence that persists. Code that endures."  
**Tone**: Technical confidence, builders talking to builders, no marketing fluff

---

## 🎨 Design System

### Color Palette
- **Void** (#0A0E27): Primary background, dark infrastructure aesthetic
- **Steel** (#8B92AB): Body text, secondary elements
- **Pulse** (#4A90E2): Accent color, CTAs, interactive elements

### Typography
- **Headers**: JetBrains Mono (monospace, technical aesthetic)
- **Body**: Inter (clean, readable sans-serif)

### Visual Style
- Dark mode default (developer audience)
- Grid patterns (infrastructure/network aesthetic)
- Minimal, fast, no bloat
- Code blocks with syntax highlighting

---

## 📄 Site Structure

### Homepage (`/`)
**Components**: `InfraHero`, `ProblemSolution`, `ProductGrid`, `InfraFooter`

**Content**:
- Hero: "Building the persistence layer for autonomous AI"
- Problem/Solution framework: AI agents forget → We build durable infrastructure
- 3 product tiles: Core (live), Integrity (beta), Coming Soon
- Trust indicators: 516 artifacts, SHA-256, 100% audit pass

### Products Overview (`/products`)
**6 product cards**:
1. **Novyx Core** (LIVE): Knowledge graph with semantic search
2. **Novyx Integrity** (BETA): Memory verification for enterprise AI
3. **Context Compression** (COMING): Efficient long-term memory
4. **Distributed Memory** (COMING): Federated knowledge networks
5. **Memory Analytics** (COMING): Observability for agent knowledge
6. **Your Idea** (FUTURE): Community roadmap input

### Novyx Core (`/products/core`)
**Developer-focused**:
- Technical specs (516 artifacts, SHA-256, JSON-LD)
- Code snippets (Quick Start with TypeScript)
- Use cases: Research assistants, Enterprise memory, Agent persistence
- CTAs: Star on GitHub, View Documentation
- MIT licensed, production-ready messaging

### Novyx Integrity (`/products/integrity`)
**Enterprise/CISO-focused**:
- Security infrastructure positioning (not storage)
- Problem: Memory poisoning + Compliance risk
- Solution: Real-time detection, Auto-rollback, Compliance reporting
- Enterprise features: SOC 2, GDPR, HIPAA, SIEM integration
- Metrics: <1ms detection, 100% coverage, 24/7 monitoring
- CTA: Request Demo (Calendly), Contact Security Team

### About (`/about`)
**Mission & Principles**:
- Mission: Building infrastructure for AI that remembers
- Why it matters: Security-critical, compliance-required, commercially valuable
- Principles: Durability, Legibility, Context preservation
- Team: Founder info (placeholder) + We're hiring section
- Company info: Founded 2024, Backed by [investor space]

### Blog (`/blog`)
**3 technical posts**:
1. "Agent Memory is an Infrastructure Problem"
2. "Memory Poisoning: The New Injection Attack"
3. "Context Preservation vs Summarization"

Each post: 800-1200 words, technical depth, SEO-optimized for keywords like "agent memory", "memory poisoning", "AI infrastructure"

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (custom infrastructure palette)
- **Typography**: Google Fonts (Inter + JetBrains Mono)
- **Icons**: Lucide React
- **Deployment**: Vercel-ready
- **Analytics**: Ready for Plausible/privacy-focused analytics

---

## 🚀 Key Features

### Performance
- Fast, minimal, no bloat
- Static generation where possible
- Optimized fonts and images
- Grid patterns (CSS, not images)

### Developer Experience
- Clean component architecture
- Reusable UI patterns
- Type-safe (TypeScript throughout)
- Easy to extend

### SEO
- Comprehensive metadata
- Semantic HTML
- Open Graph tags
- Keyword optimization for:
  - "AI agent memory"
  - "memory poisoning"
  - "AI persistence"
  - "cryptographic verification"
  - "agent infrastructure"

---

## 📝 Content Strategy

### Messaging Framework
- **Don't**: Say "we're a startup" or oversell
- **Do**: Show working code, real metrics (516 artifacts, 100% integrity)
- **Don't**: Use marketing jargon
- **Do**: Emphasize durability/persistence as core competency

### Technical Credibility
- GitHub links prominent (open-core philosophy)
- Real metrics (516 artifacts validated, SHA-256 integrity)
- Code snippets on Core page
- Blog posts with technical depth

### Audience Targeting
- **Developers**: Homepage, Core page, Blog
- **CISOs/Compliance**: Integrity page, Security blog post
- **Enterprise**: About page, Company info

---

## 🔧 Implementation Notes

### Components Created
**Homepage**:
- `InfraHero.tsx`: Hero with tagline and CTAs
- `ProblemSolution.tsx`: Problem/solution framework
- `ProductGrid.tsx`: 3 product tiles
- `InfraFooter.tsx`: Footer with company info

**Global**:
- `InfraHeader.tsx`: Navigation with GitHub link
- `InfraFooter.tsx`: Footer with links and social

### Pages Created
- `/app/page_new.tsx`: New homepage (replace `page.tsx`)
- `/app/products/page.tsx`: Products overview
- `/app/products/core/page.tsx`: Novyx Core details
- `/app/products/integrity/page.tsx`: Novyx Integrity details
- `/app/about_new/page.tsx`: About page (replace `/about/page.tsx`)
- `/app/blog/page.tsx`: Blog listing
- `/app/blog/[slug]/page.tsx`: Individual blog posts
- `/app/blog/posts.ts`: Blog content

---

## 📋 Deployment Checklist

### Before Deploy
- [ ] Replace `app/page.tsx` with `app/page_new.tsx`
- [ ] Replace `app/about/page.tsx` with `app/about_new/page.tsx`
- [ ] Update `app/layout.tsx` to use `InfraHeader` and `InfraFooter`
- [ ] Update `tailwind.config.ts` with new color palette
- [ ] Update `globals.css` with new design system
- [ ] Test all routes
- [ ] Verify mobile responsiveness
- [ ] Check lighthouse scores

### Content Customization
- [ ] Update founder info in `/about`
- [ ] Add real investor names (currently placeholder)
- [ ] Update company location in `/about`
- [ ] Customize email addresses (careers@, security@, hello@)
- [ ] Add real Twitter handle
- [ ] Update Calendly link for demos

### Analytics
- [ ] Add Plausible script to layout
- [ ] Set up conversion tracking for:
  - GitHub stars
  - Demo requests
  - Email sign-ups

---

## 🎯 Success Metrics

### Technical
- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

### SEO
- Rank for "AI agent memory" (target: page 1)
- Rank for "memory poisoning AI" (target: page 1)
- Rank for "agent persistence" (target: page 2)

### Conversion
- GitHub stars growth
- Demo requests (Integrity product)
- Blog post shares
- Careers page visits

---

## 🔗 Important Links

- **Live Site**: https://novyxlabs.com
- **GitHub**: https://github.com/novyxlabs/novyx-core
- **Demo Booking**: https://calendly.com/novyxlabs/demo
- **Careers**: careers@novyxlabs.com
- **Security**: security@novyxlabs.com

---

## 📦 Final Notes

**Philosophy**: This site says "We're serious infrastructure builders solving hard problems in AI persistence."

**Audience**: Developers, CISOs, infrastructure engineers—people who appreciate technical depth over marketing speak.

**Differentiator**: Open-core foundation, working code, real metrics. We practice what we preach about durability.

---

**Built with**: Next.js 14, Tailwind CSS, TypeScript  
**Deployed on**: Vercel  
**Last Updated**: 2025-01-14
