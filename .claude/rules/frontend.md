---
glob: "src/**/*.{ts,tsx,js,jsx,astro,svelte,vue,css,scss}"
---

# Frontend Rules

- Mobile-first: write base styles for mobile, use `min-width` media queries to scale up
- Never use `!important` unless overriding a third-party library
- Component props must be typed (TypeScript interfaces or PropTypes)
- Keep components under ~150 lines; extract if larger
- No hardcoded colors — use CSS variables or the design token system
- Animations: respect `prefers-reduced-motion`
