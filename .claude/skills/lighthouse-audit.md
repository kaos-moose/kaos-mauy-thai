---
name: lighthouse-audit
description: Run a Lighthouse audit against the local dev server and report scores
---

## Steps

1. Confirm the dev server is running (`npm run dev`). If not, start it and wait for it to be ready.
2. Run Lighthouse via CLI:
   ```bash
   npx lighthouse http://localhost:3000 --output=json --quiet --chrome-flags="--headless" | npx lighthouse-ci-client 2>/dev/null || npx lighthouse http://localhost:3000 --output=json --quiet --chrome-flags="--headless" > /tmp/lh-report.json
   ```
3. Parse and report scores for: Performance, Accessibility, Best Practices, SEO.
4. List any failing audits with their score and a one-line fix suggestion.
5. Flag if any score is below the project targets: Performance ≥90, Accessibility ≥95, SEO ≥95.
