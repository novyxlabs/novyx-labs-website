# Quick Deployment Guide

This rebuild creates a completely new infrastructure-focused website. Follow these steps to deploy:

## 1. Replace Old Files

```bash
# Homepage
mv app/page_new.tsx app/page.tsx

# About page
rm -rf app/about
mkdir -p app/about
mv app/about_new/page.tsx app/about/page.tsx

# Update layout to use new components
# Edit app/layout.tsx:
# - Import InfraHeader and InfraFooter instead of Header and Footer
# - Update metadata (already prepared in layout.tsx)
```

## 2. Update Design System

The new color palette and typography are in:
- `tailwind.config.ts` (add void, steel, pulse colors)
- `app/globals.css` (update to Inter + JetBrains Mono, new CSS vars)

## 3. Test Locally

```bash
npm run dev
# Visit http://localhost:3000
# Test all routes:
# - /
# - /products
# - /products/core
# - /products/integrity
# - /about
# - /blog
# - /blog/agent-memory-infrastructure-problem
```

## 4. Customize Content

Before deploying, update:
- Founder name/bio in `/app/about/page.tsx`
- Investor names (search for "[Investor Space]")
- Company location (search for "[Location]")
- Email addresses (careers@, security@, hello@)
- Calendly link for demos
- Twitter handle

## 5. Deploy to Vercel

```bash
git add -A
git commit -m "Infrastructure rebuild: Corporate website v2"
git push origin main
```

Vercel will auto-deploy. Check:
- All routes work
- Mobile responsive
- Lighthouse scores (target: 95+)

## 6. Post-Deploy

- Update DNS to point novyxlabs.com to Vercel
- Set up Plausible analytics
- Monitor GitHub star conversions
- Track demo requests

---

**Need help?** Check INFRASTRUCTURE-REBUILD.md for full documentation.
