# Austin Tub Surgeon Website

Marketing website for Austin Tub Surgeon, built with **Eleventy (11ty)** and focused on local SEO + conversion-driven quote capture.

## Current Stack
- Static site generator: Eleventy
- Templates: Nunjucks (`.njk`)
- Styling: Custom CSS
- Forms: Netlify Forms
- Deployment target: Static hosting (Netlify-friendly)

## Key Features Implemented
- Service pages for bathtub, tile, sink, countertop, and repair
- City/service-area pages (Austin, Round Rock, Pflugerville, Cedar Park)
- SEO schema support:
  - LocalBusiness
  - BlogPosting
  - FAQPage (where FAQ is provided)
- XML sitemap + robots.txt generation
- Blog hub + localized long-tail content cluster

## Conversion Workflow (Quote Funnel)
- New fast quote page: `/fast-quote/`
- Upload-first flow for estimate requests
- Mobile camera-friendly image upload
- Client-side image compression preview before submit
- Thank-you page confirmation: `/thank-you/`

## Lead Capture Data Included
Form submissions now capture and send:
- Name
- Phone
- Street address + city
- Service requested
- Uploaded image file names
- Auto-generated SMS link field (`sms:+1...`)

## Email Notification Template
See:
- `docs/netlify-form-notification-template.md`

This file includes a ready-to-paste Netlify email template for "New Job Request" alerts.

## Scripts
```bash
npm run dev     # local dev server
npm run build   # production build to /dist
```

## Project Structure
- `src/` - source templates/content/assets
- `dist/` - generated output
- `src/blogs/` - blog posts
- `src/_includes/` - layouts and partials
- `src/_data/` - site metadata
- `docs/` - implementation and workflow notes

## Notes
- Primary timezone for business operations: America/Chicago
- Website is tuned for fast quote response and local search visibility
