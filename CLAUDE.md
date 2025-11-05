# TMS.md - Global TMS Therapy Directory

## 📋 PROJECT OVERVIEW

**TMS.md** is a professional hold/landing page for the world's first comprehensive TMS (Transcranial Magnetic Stimulation) therapy directory, with a unique focus on connecting individuals with MTHFR gene mutations to treatment providers.

**Status**: 🚀 Hold Page - Pre-Launch
**Launch Date**: TBD
**Domain**: tms.md.com

## 📋 GLOBAL STANDARDS REFERENCE

This project follows universal development standards defined in `~/.claude/CLAUDE.md`, including:
- Session continuity protocol with timestamped handovers
- Documentation efficiency standards
- Universal verification protocol
- Code quality and performance standards

## 🎯 PROJECT PURPOSE

### Problem We're Solving
- MTHFR gene mutations affect 40% of the population
- These mutations can impair neurotransmitter production, increasing susceptibility to depression/anxiety
- Standard antidepressants often don't work for MTHFR carriers
- TMS therapy is an effective drug-free alternative, but finding clinics is difficult
- No comprehensive, MTHFR-focused TMS directory exists

### Our Solution
A global directory that:
- Lists verified TMS therapy clinics worldwide
- Provides insurance, pricing, and protocol information
- Educates about MTHFR-TMS connection
- Connects patients to appropriate providers

## 🏗️ TECHNICAL STACK

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.2.0
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.18
- **Package Manager**: Bun 1.2
- **Deployment**: Netlify
- **Forms**: Netlify Forms (2 forms: patient waitlist + clinic interest)
- **Analytics**: Google Tag Manager (GTM placeholder ready)

## 📁 PROJECT STRUCTURE

```
tms-md-com/
├── public/
│   ├── robots.txt              # SEO crawler instructions
│   └── images/                 # Static images
├── src/
│   ├── components/
│   │   ├── Hero.tsx           # Hero section with email capture
│   │   ├── Education.tsx      # MTHFR-TMS education content
│   │   ├── About.tsx          # Mission + clinic owner CTA
│   │   ├── FAQ.tsx            # Accordion-style FAQ
│   │   ├── Footer.tsx         # Footer with links
│   │   └── StructuredData.tsx # JSON-LD for SEO
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn helper)
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # React entry point
│   └── index.css              # Tailwind imports + global styles
├── index.html                  # HTML with meta tags + GTM placeholder
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── netlify.toml               # Deployment + security headers
└── CLAUDE.md                  # This file
```

## 🎨 DESIGN & BRANDING

### Color Palette
- **Primary**: Blue gradient (professional medical feel)
  - Primary-600: #0284c7
  - Primary-700: #0369a1
  - Primary-900: #0c4a6e
- **Accent**: Purple (engaging, memorable)
  - Accent-300: #f0abfc
  - Accent-500: #d946ef

### Typography
- **Headings**: Poppins (bold, authoritative)
- **Body**: Inter (clean, readable)

### Design Inspiration
- Professional health/medical aesthetic (inspired by Chris Volesky client project)
- Clear CTAs and conversion-focused layout
- Mobile-first responsive design

## ✉️ NETLIFY FORMS IMPLEMENTATION

### Two Forms Configured

**1. Patient Waitlist (Hero Section)**
- Form name: `patient-waitlist`
- Fields: name, email, location (optional)
- Honeypot: `bot-field` for spam protection
- Success: Shows confirmation message
- Action: Captures leads for launch announcement

**2. Clinic Interest (About Section)**
- Form name: `clinic-interest`
- Fields: clinic-name, contact-name, email, phone, location
- Honeypot: `bot-field` for spam protection
- Success: Shows confirmation message
- Action: Captures clinic owner leads

### Critical Requirements for Netlify Forms
✅ `data-netlify="true"` attribute on form
✅ `netlify-honeypot="bot-field"` for spam protection
✅ Hidden field: `<input type="hidden" name="form-name" value="form-name" />`
✅ Honeypot field (hidden with CSS): `<input name="bot-field" />`

## 🔐 SECURITY HEADERS (netlify.toml)

All security headers configured in `netlify.toml`:
- **Content-Security-Policy**: Allows fonts.googleapis.com, GTM, GA
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff
- **Referrer-Policy**: strict-origin-when-cross-origin
- **HSTS**: max-age=31536000

Cache headers optimized for static assets (1 year).

## 🔍 SEO OPTIMIZATION

### Meta Tags (index.html)
- Title tag with keywords
- Description meta tag
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags
- Keywords meta tag

### Structured Data (StructuredData.tsx)
- **MedicalBusiness** schema for main site
- **FAQPage** schema for FAQ section
- Both injected as JSON-LD in `<head>`

### Additional SEO
- robots.txt configured
- Sitemap placeholder (will be generated post-launch)
- Semantic HTML structure
- Mobile-responsive design

## 📊 ANALYTICS SETUP

### Google Tag Manager
- GTM placeholder added to index.html (commented out)
- Instructions to replace `GTM-XXXXXXX` with actual ID
- Both script and noscript tags included

### Recommended Events to Track
- Form submissions (patient-waitlist, clinic-interest)
- Scroll depth
- CTA clicks
- Outbound link clicks

## 🚀 DEPLOYMENT INSTRUCTIONS

### Initial Deployment

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TMS.md hold page"
   git branch -M main
   git remote add origin https://github.com/mrgellis/tms-md-com.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Log in to Netlify
   - New site from Git → GitHub
   - Select repository: `mrgellis/tms-md-com`
   - Build settings auto-detected from `netlify.toml`
   - Deploy site

3. **Configure Custom Domain**
   - In Netlify: Site settings → Domain management
   - Add custom domain: `tms.md.com`
   - Configure DNS records as instructed
   - Enable HTTPS (automatic via Let's Encrypt)

4. **Verify Netlify Forms**
   - After first deployment, forms will appear in Netlify dashboard
   - Test both forms in production
   - Set up form notifications (email on submission)

5. **Add Google Tag Manager ID**
   - Uncomment GTM code in index.html
   - Replace `GTM-XXXXXXX` with actual ID
   - Deploy changes

### Development Commands

```bash
# Install dependencies
bun install

# Start development server (http://localhost:5173)
bun dev

# Build for production
bun run build

# Preview production build locally
bun run preview

# Type checking
bun run typecheck

# Linting
bun run lint
```

## 🧪 TESTING CHECKLIST

### Pre-Launch Testing
- [ ] Forms submit successfully to Netlify
- [ ] Honeypot spam protection works
- [ ] Mobile responsiveness (all screen sizes)
- [ ] All links work correctly
- [ ] FAQ accordion expands/collapses
- [ ] Images load properly
- [ ] Performance (Lighthouse score)
- [ ] Security headers verified
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Analytics tracking (GTM/GA events fire)

### Performance Targets
- **PageSpeed Score**: 90+ (mobile and desktop)
- **First Contentful Paint**: < 1.5s
- **Total Bundle Size**: < 500KB
- **Dev Server Startup**: < 1s

## 📈 POST-LAUNCH ROADMAP

### Phase 1: Validation (Months 1-2)
- Monitor waitlist signups (target: 100+ patients)
- Monitor clinic interest (target: 20+ clinics)
- Analyze Google Trends data for TMS keywords
- Refine messaging based on user feedback

### Phase 2: Directory Build (Month 3)
- Research and manually add 50-100 US TMS clinics
- Create database schema (Supabase or similar)
- Design clinic profile pages
- Build search/filter functionality

### Phase 3: Launch MVP (Month 4)
- Public directory launch
- Email waitlist about launch
- Onboard interested clinics
- Implement user reviews

### Phase 4: Scale (Month 5+)
- Expand to international clinics
- Build clinic dashboard
- Add premium listings
- Implement lead generation system

## 💼 BUSINESS MODEL IDEAS

1. **Free Basic Listings** + **Premium Enhanced Listings** ($99-299/month)
2. **Pay-Per-Lead** ($20-50 per qualified patient inquiry)
3. **Partnerships** with genetic testing companies (23andMe, etc.)
4. **Affiliate Revenue** from MTHFR supplements, testing kits
5. **Insurance Navigation Services** (help patients understand coverage)

## 🔗 USEFUL LINKS

- **Domain**: https://tms.md.com (to be configured)
- **GitHub**: https://github.com/mrgellis/tms-md-com (to be created)
- **Netlify**: (dashboard link after deployment)
- **Google Trends**: Search "TMS therapy" to monitor demand
- **MTHFR Resources**: https://mthfr.net

## 📝 NOTES FOR FUTURE DEVELOPMENT

### When Building Full Directory
- Use Supabase for database (clinic profiles, reviews)
- Implement search with filters (location, insurance, protocol type)
- Add interactive map (Google Maps API or Mapbox)
- Create admin dashboard for clinic management
- Build CMS for blog/educational content
- Add patient review system with moderation

### Content Strategy
- Weekly blog posts about TMS therapy, MTHFR, mental health
- Case studies and success stories
- Provider interviews
- Research summaries
- SEO-focused content targeting long-tail keywords

### Marketing Channels
- Google Ads (target: "TMS therapy near me", "MTHFR depression treatment")
- Facebook Ads (target: genetic testing audiences, mental health groups)
- Partnerships with genetic counselors
- Medical professional outreach
- Reddit/forums (authentic participation)

## 🤝 STAKEHOLDERS

- **Patients**: Individuals with MTHFR mutations seeking TMS therapy
- **Clinic Owners**: TMS providers wanting to reach more patients
- **Healthcare Providers**: Doctors referring patients to TMS
- **Genetic Testing Companies**: Potential partnership opportunities

---

**Project Created**: November 5, 2025
**Last Updated**: November 5, 2025
**Maintained by**: Claude Code 🤖

**Status**: ✅ Hold Page Complete - Ready for GitHub & Netlify Deployment
