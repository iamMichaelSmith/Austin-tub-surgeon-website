# Deploy Checklist

## Pre-deploy
- [ ] Pull latest `main`
- [ ] `npm ci`
- [ ] `npm run build`
- [ ] Smoke check key pages locally

## Key path verification
- [ ] Homepage
- [ ] Primary service pages
- [ ] Contact/quote path (`/fast-quote/` -> `/thank-you/`)

## Post-deploy
- [ ] Confirm site is live and rendering correctly
- [ ] Validate CTAs and forms
- [ ] Spot-check metadata/canonical tags
- [ ] Roll back if critical conversion path is broken
