# Architecture

## Stack
- Eleventy static site generator
- Nunjucks templates
- Static hosting (Netlify-friendly)

## Core flow
1. Visitor lands on service/city page from local search
2. Visitor enters fast quote flow (`/fast-quote/`)
3. Form captures contact + service + image metadata
4. Submission routes to operations inbox/workflow

## SEO model
- Service page clusters
- Location page clusters
- Structured data: LocalBusiness, FAQPage, BlogPosting
- Sitemap + robots for crawl coverage
