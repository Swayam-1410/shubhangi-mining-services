# Shubhangi Mining Services website

Static site: no build step, no framework, no database.

## GitHub Pages
1. Create a public GitHub repository.
2. Upload the contents of this folder so `index.html` is at repository root.
3. Settings > Pages > Deploy from branch > `main` / `(root)`.
4. Test the `github.io` URL.
5. When ready, set custom domain to `shubhangimining.com` and configure GoDaddy DNS for GitHub Pages.
6. Enable Enforce HTTPS after DNS resolves.

## Enquiry form
The form uses FormSubmit to email submissions to Sandeep Bhargava's Gmail without displaying the address on the page.
The first live submission typically triggers a one-time activation/confirmation email from FormSubmit. Confirm it once; subsequent enquiries are delivered automatically.

## Editing
- Main text/content: `index.html`
- Design: `assets/styles.css`
- Interaction/form handling: `assets/app.js`
