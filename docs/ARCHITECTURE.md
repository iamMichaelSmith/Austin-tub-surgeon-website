# Architecture

## High-level
Static site generated with Eleventy from Nunjucks templates.

```text
Content/Templates (src/*.njk)
        |
        v
Eleventy build pipeline
        |
        v
Static output (dist/)
        |
        v
Hosting/CDN
```

## Reliability notes
- Deterministic static build
- Low operational surface area
- SEO-friendly route structure
