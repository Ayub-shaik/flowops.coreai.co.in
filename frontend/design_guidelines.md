# FlowOps CoreAI Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from enterprise AI platforms like Notion, Linear, and modern SaaS products, emphasizing professional credibility while maintaining visual appeal for this sophisticated AI app generation platform.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Dark mode primary: `220 25% 15%` (deep blue-gray)
- Light mode primary: `220 30% 95%` (light blue-gray)
- Brand accent: `210 100% 60%` (professional blue)

**Supporting Colors:**
- Success/tech: `150 70% 50%` (emerald green)
- Warning/enterprise: `35 100% 65%` (warm amber)
- Neutral grays: `220 15% 25%` to `220 10% 85%`

### B. Typography
- **Primary**: Inter (Google Fonts) - clean, technical readability
- **Accent**: JetBrains Mono (Google Fonts) - for code snippets and technical elements
- **Hierarchy**: h1 (3xl-4xl), h2 (2xl-3xl), h3 (xl-2xl), body (base-lg)

### C. Layout System
**Tailwind spacing primitives**: 2, 4, 8, 16, 32 units
- Micro spacing: `p-2`, `m-2`
- Component spacing: `p-4`, `gap-4`
- Section spacing: `p-8`, `my-16`
- Major layout: `p-32` for hero padding

### D. Component Library

**Navigation**
- Fixed header with glassmorphism effect
- Logo + horizontal nav + CTA button
- Mobile hamburger menu

**Hero Section**
- Split layout: left content, right animated demo
- Terminal-to-browser screencast simulation
- Dual CTAs: primary "Start Building" + secondary "Book Demo"
- Large hero background: Abstract gradient mesh or geometric pattern

**Core Sections (Maximum 4 total)**
1. **3-Step Process Infographic**: Visual workflow (Type → Generate → Deploy)
2. **Interactive Tech Stack Showcase**: Tabbed interface displaying C1-C5 complexity tools
3. **Enterprise Features Grid**: Security, compliance, scalability highlights
4. **Pricing/ROI Calculator**: 3-tier pricing with interactive cost calculator

**Interactive Elements**
- Accordion FAQ section
- Testimonials carousel
- Tech stack tabs/accordion
- ROI calculator with real-time updates
- Demo booking modal/Calendly integration

**Enterprise Components**
- Security badges and compliance logos
- Customer portal preview (blurred screenshots)
- SBOM download capability
- Success metrics visualization

### E. Visual Treatments

**Gradients**
- Hero background: Subtle blue-to-purple mesh (`210 100% 60%` to `250 80% 55%`)
- Card accents: Minimal gradients for depth
- Button gradients: Professional blue variations

**Effects**
- Subtle glassmorphism for navigation
- Card shadows with blue tint
- Terminal/code syntax highlighting
- Blurred backgrounds for overlay buttons

## Content Strategy

**Concise Professional Messaging**
- Single viewport hero with immediate value proposition
- Front-loaded benefits: "Ship Production Apps from Plain English"
- Technical credibility through tool stack display
- Enterprise trust signals (security, compliance)

**Conversion-Focused Layout**
- Maximum 4 sections total
- Each section earns its place for conversion
- Strategic CTA placement throughout
- Demo booking as primary conversion goal

## Images Section

**Large Hero Image**: Yes - Abstract gradient mesh or geometric pattern background (right side of hero)
**Supporting Visuals**:
- Terminal screencast simulation (can be CSS animation)
- Tech stack icons/logos grid
- Blurred customer portal screenshots
- Security/compliance badge graphics
- Lottie animations for process steps

**Image Treatment**: Modern, technical aesthetic with subtle animations and professional photography style for any team/customer images.

## Technical Considerations

**Performance**
- Minimal animations (entrance effects only)
- Optimized images and lazy loading
- Single-page application with smooth scrolling

**Accessibility**
- Consistent dark mode throughout
- High contrast ratios
- Semantic HTML structure
- Keyboard navigation support

This design balances enterprise credibility with modern visual appeal, positioning FlowOps as a sophisticated yet accessible AI development platform.