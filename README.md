# Amit Kumar Gupta | Portfolio

A polished personal portfolio website inspired by a macOS desktop experience. It brings together a draggable window interface, a terminal, a blog, and live widgets to present my work and personality in a distinctive way.

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](#license)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-black?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-black?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-black?logo=tailwindcss)](https://tailwindcss.com)

---

## Highlights

- macOS-style desktop shell with draggable windows, a dock, and a menu bar
- Interactive terminal with built-in commands and a virtual filesystem
- MDX-powered blog with posts automatically pulled from the content folder
- Live widgets for quotes, reading links, GitHub contributions, Spotify status, and visitor counts
- Responsive layout with a mobile-friendly fallback

---

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- MDX with next-mdx-remote and gray-matter
- Lucide icons and Geist fonts

---

## Getting started

Requirements: Node 20+.

```bash
git clone https://github.com/Amitaarav/amit-portfolio.git
cd amit-portfolio
pnpm install
pnpm dev
```

Open http://localhost:3000 to view the site.

No environment variables are required for the core experience. Optional integrations such as Spotify and Upstash will simply stay disabled until configured.

---

## Customization

Most content lives in the config and content folders:

- [config/siteConfig.ts](config/siteConfig.ts) — name, role, bio, social links, contact details, and SEO metadata
- [config/projects.ts](config/projects.ts) — projects shown in the Projects window
- [config/experience.ts](config/experience.ts) — experience and résumé content
- [content/blog](content/blog) — MDX posts for the blog
- [public/avatar.svg](public/avatar.svg) — the site avatar/logo asset

---

## Optional integrations

### Spotify now-playing

1. Create an app at https://developer.spotify.com/dashboard
2. Add a redirect URI such as http://localhost:3000/
3. Copy [.env.example](.env.example) to .env.local and fill in the Spotify values
4. Run `node setup-spotify.mjs` to start the auth flow

### Visitor counter

Create a free Upstash Redis database and add the provided credentials to .env.local.

---

## Deployment

This project is a standard Next.js app and can be deployed on Vercel, Netlify, Cloudflare Pages, or any other Node-compatible host.

For Vercel, the recommended flow is:

1. Push the repository to GitHub
2. Import it in Vercel
3. Deploy with the default Next.js settings
4. Add any optional environment variables if you enable Spotify or Redis features

---

## License

MIT. See [LICENSE](LICENSE).
