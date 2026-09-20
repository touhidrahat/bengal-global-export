# Bengal Global website

This is a static multi-page website with no build step and no external libraries.

## Pages
- index.html
- about.html
- exports.html
- blog.html
- contact.html

## How to preview
Extract the ZIP and open `index.html` in a browser. For the most accurate local preview, run a simple local server in the folder, for example `python -m http.server 8000`, then open `http://localhost:8000`.

## Important placeholders to replace before launch
- Business email if `hello@bengalglobal.com` is not your confirmed address
- Facebook, Instagram and LinkedIn URLs
- Recent export examples and photos
- Partner logos and partner names
- Business hours
- Any certifications, registrations or compliance claims you want to publish

## Form behavior
The RFQ form works without a backend by opening the visitor's email application with their entered information. For production, it is better to connect the form to your own backend, CRM, Formspree, Basin, HubSpot or another form service.

## Reliability improvements
The core layout and content remain visible if JavaScript is unavailable. JavaScript only enhances the site with mobile navigation, reveal animation, scroll progress, back-to-top behavior and the mailto form helper.
