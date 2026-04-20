---
glob: "src/content/**,public/**,*.md"
---

# Content Rules

- All images in `public/images/` must have a WebP version
- Copy changes that touch H1 or meta description require a review by the content-writer agent
- No placeholder text (Lorem ipsum) in any committed file
- Schedule/pricing data lives in a single source-of-truth file (e.g. `src/data/classes.ts`) — never duplicated in markup
