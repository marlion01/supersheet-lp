# SuperSheet LP - Design System & Brand Guidelines

## Brand Identity
- **Product**: SuperSheet - Next-generation hybrid spreadsheet platform
- **Position**: Excel flexibility + Notion organization + Zapier automation
- **Audience**: Developers, data analysts, business users seeking powerful spreadsheet tools

## Color Palette
```css
/* Primary Colors - Deep Indigo (Trust & Technology) */
primary-50: #eef2ff
primary-100: #e0e7ff
primary-200: #c7d2fe
primary-300: #a5b4fc
primary-400: #818cf8
primary-500: #6366f1  /* Main Primary */
primary-600: #4f46e5
primary-700: #4338ca
primary-800: #3730a3
primary-900: #312e81

/* Accent Colors - Vivid Green (Action & Growth) */
accent-50: #f0fdf4
accent-100: #dcfce7
accent-200: #bbf7d0
accent-300: #86efac
accent-400: #4ade80   /* Main Accent */
accent-500: #22c55e
accent-600: #16a34a
accent-700: #15803d
accent-800: #166534
accent-900: #14532d

/* Neutral Colors - Professional Grays */
neutral-50: #fafafa
neutral-100: #f5f5f5
neutral-200: #e5e5e5
neutral-300: #d4d4d4
neutral-400: #a3a3a3
neutral-500: #737373
neutral-600: #525252
neutral-700: #404040
neutral-800: #262626
neutral-900: #171717
```

## Typography Scale
- **Primary Font**: Inter (Latin characters)
- **Japanese Font**: Noto Sans JP (Japanese characters)
- **Monospace**: JetBrains Mono (code examples)

### Heading Sizes
- **XL Headings**: 4xl-6xl (text-4xl sm:text-5xl lg:text-6xl)
- **Large Headings**: 3xl-5xl (text-3xl sm:text-4xl lg:text-5xl)  
- **Medium Headings**: 2xl-3xl (text-2xl sm:text-3xl)
- **Lead Text**: lg-xl (text-lg sm:text-xl)

## Component Patterns

### Button Styles
```css
/* Primary CTA Button */
.btn-primary {
  background: primary-600
  color: white
  hover: primary-700
  shadow: large
  transform: hover:-translate-y-0.5
}

/* Accent Action Button */
.btn-accent {
  background: accent-500
  color: white
  hover: accent-600
}

/* Outline Button */
.btn-outline {
  background: transparent
  color: primary-600
  border: primary-600
  hover: primary-50
}
```

### Card Components
```css
/* Feature Cards */
.feature-card {
  background: white
  border-radius: 2xl (1rem)
  shadow: sm → xl on hover
  transform: hover:translateY(-4px)
  transition: all 500ms
}

/* Icon Containers */
.icon-container {
  width: 56px, height: 56px
  border-radius: xl
  background: primary-500 | accent-500 | purple-500
  color: white
  transform: group-hover:scale-110
}
```

## Layout System

### Container & Spacing
- **Container Max Width**: 7xl (1280px)
- **Section Padding**: px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24
- **Component Spacing**: space-y-4, space-y-6, space-y-8

### Responsive Breakpoints
- **xs**: 475px+ (custom)
- **sm**: 640px+ (mobile landscape)
- **md**: 768px+ (tablet)
- **lg**: 1024px+ (desktop)
- **xl**: 1280px+ (large desktop)

## Animation Guidelines

### Performance-First Animations
```css
/* Scroll-triggered animations */
.animate-on-scroll {
  opacity: 0
  transform: translateY(2rem)
  transition: all 700ms ease-out
}

.animate-on-scroll.is-visible {
  opacity: 1
  transform: translateY(0)
}

/* Staggered delays */
.animation-delay-200 { animation-delay: 200ms }
.animation-delay-400 { animation-delay: 400ms }
.animation-delay-600 { animation-delay: 600ms }
```

### Accessibility Considerations
```css
/* Motion reduction support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important
    transition-duration: 0.01ms !important
  }
}

/* High contrast support */
@media (prefers-contrast: high) {
  .btn-primary { background: black }
  .shadow-sm, .shadow-lg { box-shadow: 0 0 0 2px black }
}
```

## Logo & Iconography

### Logo Design
- **Style**: Minimalist spreadsheet grid icon + wordmark
- **Colors**: Primary indigo + accent green highlight
- **Format**: SVG for scalability
- **Sizes**: 32x32 (favicon), 40x40 (header), various responsive sizes

### Icon System
- **Library**: Heroicons (outline style)
- **Stroke Width**: 2px for consistency
- **Sizes**: w-4 h-4 (small), w-5 h-5 (medium), w-6 h-6 (large), w-8 h-8 (xlarge)
- **Colors**: Inherit from parent for flexibility

## Content Voice & Tone

### Japanese Content
- **Tone**: Professional but approachable
- **Style**: Clear, benefit-focused
- **Key Message**: "爆速" (blazing fast), "堅牢性" (robustness), "次世代" (next-generation)

### English Content  
- **Tone**: Technical confidence
- **Style**: Direct, feature-focused
- **Key Message**: "Hybrid platform", "Local-first", "Enterprise-ready"

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Color Contrast**: 4.5:1 minimum for normal text
- **Focus Management**: Visible focus indicators
- **Keyboard Navigation**: Full tab order support
- **Screen Reader**: Semantic HTML, ARIA labels
- **Text Scaling**: Readable up to 200% zoom

### Implementation Details
- **Skip Links**: Jump to main content
- **Heading Hierarchy**: Proper h1-h6 structure
- **Alt Text**: Descriptive image alternatives
- **Form Labels**: Associated with inputs
- **Button States**: Clear interactive states