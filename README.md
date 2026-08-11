# NexArs website

Responsive one-page website for NexArs.

## Structure

- `index.html` — content and SEO metadata
- `styles.css` — all visual styles and responsive breakpoints
- `script.js` — mobile navigation, active section and reveal animations
- `robots.txt` / `sitemap.xml` — basic SEO
- `assets/*.webp` — optimized images

## Cloudflare

This project is static HTML/CSS/JS and can be deployed directly with Cloudflare Workers/Pages.

After changing files, commit/push the repository and trigger a new deployment.

## Editing later

Most changes are intentionally simple:
- Text: edit `index.html`
- Colors/layout/mobile: edit `styles.css`
- Navigation/interactive behavior: edit `script.js`
- Images: replace files in `assets/` and keep the same filenames where possible.
