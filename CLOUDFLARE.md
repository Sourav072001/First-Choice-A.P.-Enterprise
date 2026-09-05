# Cloudflare Pages deployment

This folder is a static Cloudflare Pages site. Deploy the folder with no build command and use the project root as the output directory.

## Deploy

1. Open Cloudflare Dashboard > Workers & Pages > Create application > Pages > Connect to Git.
2. Select this repository and deploy the production branch.
3. Set **Build command** to empty and **Build output directory** to `.`.
4. Confirm the generated `*.pages.dev` address, then add a custom domain if needed.

The `_headers` file adds CSP, HSTS, referrer, permissions, content-type, cache, and admin no-index protections.

## Admin security requirement

The current admin editor stores settings, users, passwords, uploaded images, and enquiries in browser `localStorage`. This is suitable only for a private demo or single-browser workflow. It does not provide secure shared administration after public deployment.

Before using the admin page with real data, move authentication and data operations behind a Cloudflare Worker with a server-side password hash, use D1/KV for settings and enquiries, and use R2 or Cloudflare Images for uploads. Never put a plaintext password, API token, or secret in these static files.
