# Netlify Form Email Template (Job Request)

Use this in **Netlify -> Forms -> form name -> Notifications -> Email notification -> custom template**.

Subject:
`New Job Request - Austin Tub Surgeon`

Body template:

```txt
You have a new job request.

Name: {{name}}
Phone: {{phone}}
Text Link: {{smsLink}}
Address: {{streetAddress}}, {{city}}
Service: {{service}}
Property Type: {{propertyType}}
Timeline: {{timeline}}
Email: {{email}}

Uploaded Image Names: {{uploadedFileNames}}

Message:
{{message}}
```

## Workflow test checklist
1. Open `/fast-quote/` on mobile.
2. Upload 2-3 photos and submit.
3. Confirm you land on `/thank-you/`.
4. Check Netlify form submission shows:
   - phone
   - streetAddress + city
   - uploadedFileNames
   - smsLink
5. Confirm email notification includes all fields.
