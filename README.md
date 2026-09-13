# Miracle Ground International Church — Website

Official website for **Miracle Ground International Church**, Atla Bara, Along
Juba University Giyada Road, Opposite Ever Green Chinese Hospital, Juba, South
Sudan.

- Production: https://www.miraclegroundinternationalchurch.com
- GitHub: https://github.com/DarnOsint/miracle-ground-church

Built with **Next.js 16** (App Router), **React 19**, **TypeScript** and
**Tailwind CSS v4**. Hosted and auto-deployed on **Vercel** from `main`.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Project Structure

```
src/
  app/
    layout.tsx     # Fonts, global metadata & SEO
    page.tsx       # Landing page section order
    globals.css    # Design tokens (night/gold/cream palette)
  data/
    site-content.json  # ALL content (the CMS source of truth)
  components/
    site-header.tsx  # Sticky nav + mobile menu
    hero.tsx         # Full-screen welcome + verse + service strip
    about.tsx        # Welcome / About the church
    beliefs.tsx      # What We Believe
    ministries.tsx   # Ministry cards
    sermons.tsx      # Sermons & media
    services.tsx     # Service times
    branches.tsx     # Branch locations (HQ badge)
    events.tsx       # Upcoming events
    gallery.tsx      # Photo grid + fullscreen slideshow
    leadership.tsx   # Pastors & leaders
    visit.tsx        # Address, phone, embedded Google Map
    prayer-request.tsx # Prayer request form (mailto-based)
    give.tsx         # Giving section
    connect.tsx      # Call-to-action banner
  admin/
    admin-editor.tsx # Tabbed content editor
  lib/
    site.ts          # Loads site-content.json; exports siteConfig etc.
    types.ts         # TypeScript types for all content
    auth.ts          # Admin session (passphrase cookie)
    github-cms.ts    # Commit helper for live saves
  app/api/admin/     # login, logout, content, images routes
  app/admin/         # /admin login page + dashboard
```

## Editing Content — Admin Panel

Everything (name, phone, address, service times, ministries, scripture, gallery,
sermons, leadership, branches, events, links) is edited from the admin panel:

1. Open `/admin` on the site (or `http://localhost:3000/admin` locally).
2. Sign in with the **admin password**.
3. Edit any tab and hit **Save**. Updates go live automatically.

How saves work:

- **Local dev:** changes write directly to `src/data/site-content.json`.
- **Live site (Vercel):** changes are committed to GitHub via the Contents API,
  which automatically redeploys the site (takes ~1 minute).

### Required environment variables (Vercel)

Set these in the Vercel project's **Environment Variables**:

| Variable         | Required | Notes                                                              |
| ---------------- | -------- | ------------------------------------------------------------------ |
| `ADMIN_PASSWORD` | Yes      | Admin panel passphrase. **Change it** before launch.               |
| `GITHUB_TOKEN`   | Yes*     | Fine-grained PAT with `Contents: read/write` on this repo, to let  |
|                  |          | live-site saves commit content. Not needed for local dev.          |

Local `.env.local` (gitignored) mirrors the same values for development.

## Adding the Real Logo

The logo lives at `public/images/logo.jpg` and is used in the header, hero, and
favicons (`src/app/icon.png`, `apple-icon.png`, `favicon.ico`). Replace the file
to swap the logo.

Uploadable images (gallery, leadership) go through the admin panel and are
stored under `public/images/gallery/` and `public/images/leaders/`.

## Social & Connections

Church online presence is configured in `src/data/site-content.json` →
`social`, `socialLinks` and `connect`:

- **WhatApp:** {siteConfig.phone}
- **Facebook:** @miraclegroundsjuba
- **TikTok:** @miracleground — https://www.tiktok.com/@miracleground
- **Instagram:** @miraclegroundsjuba
- **YouTube:** @miraclegroundsjuba

## Roadmap (planned growth)

- [x] Real logo in header, hero, favicon
- [x] Beliefs / What We Believe
- [x] Events section
- [x] Prayer request form
- [x] Online giving section
- [x] Floating WhatsApp chat
- [x] Admin panel to edit all content
- [x] Gallery with slideshow
- [x] Sermons / media section
- [x] Leadership section
- [x] Branch locations
- [x] Vibrant sunrise re-theme (warm Festival of God palette)
- [ ] Photo gallery & real photography
- [ ] Sermons audio & video uploads
- [ ] Events calendar & announcements
- [ ] Online giving (mobile money / bank)
- [ ] Multi-language (English / Arabic)