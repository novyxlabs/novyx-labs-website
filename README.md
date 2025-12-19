# Novyx Labs Website

Modern, premium company website for Novyx Labs - Legal Tools for Modern Founders.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email:** Resend API
- **Deployment:** Vercel

## 📋 Features

- 🎨 Modern premium design with indigo/purple gradients
- 🌓 Dark mode support
- 📱 Fully responsive mobile design
- ✨ Smooth animations and transitions
- 📧 Contact form with email integration
- ⚡ Optimized performance
- 🔒 Type-safe with TypeScript

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── products/            # Products page
│   ├── contact/             # Contact page
│   └── api/
│       └── contact/         # Contact form API endpoint
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Button.tsx           # Reusable button component
│   ├── ThemeProvider.tsx    # Dark mode provider
│   ├── home/                # Home page components
│   ├── about/               # About page components
│   ├── products/            # Products page components
│   └── contact/             # Contact page components
└── public/                  # Static assets

```

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Add your Resend API key to `.env`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add your `RESEND_API_KEY` environment variable in Vercel dashboard
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
vercel
```

## 📄 Pages

### Home (`/`)
- Hero section with value proposition
- Featured product showcase (Legal Generator)
- How it works section
- Benefits overview
- Customer testimonials
- Call-to-action

### About (`/about`)
- Mission statement
- Company story
- Core values
- Contact information

### Products (`/products`)
- Novyx Legal Generator (Live - $29)
- Novyx Contracts (Coming Soon)
- Novyx Compliance Hub (Coming Soon)

### Contact (`/contact`)
- Contact form (sends to blake@novyxlabs.com)
- Direct email addresses
- Company information

## 🎨 Design System

### Colors
- Primary: Indigo (#4F46E5)
- Secondary: Purple (#9333EA)
- Gradients: Indigo → Purple

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, large scale
- Body: Regular, readable sizes

### Components
- Glass morphism effects
- Gradient backgrounds
- Smooth hover animations
- Responsive grid layouts

## 📧 Contact Form Setup

The contact form uses Resend to send emails. To set it up:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it to your `.env` file
4. Update the "from" email in `/app/api/contact/route.ts` if needed

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `vercel.json` - Vercel deployment settings

## 📝 License

© 2026 Novyx Labs LLC. All rights reserved.

## 🤝 Contact

- Primary: blake@novyxlabs.com
- General: novyxlabs@gmail.com

---

Built with ❤️ by founders, for founders.


