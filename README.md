# Miracle Ground International Church — Website

Official website for **Miracle Ground International Church**, Atla Bara, Along
Juba University Giyada Road, Opposite Ever Green Chinese Hospital, Juba, South
Sudan.

- Production: https://miracle-ground-church.vercel.app
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
  components/
    site-header.tsx # Sticky nav + mobile menu
    hero.tsx        # Full-screen welcome + verse + service strip
    about.tsx       # Welcome / About the church
    ministries.tsx  # Ministry cards
    services.tsx    # Service times
    visit.tsx       # Address, phone, embedded Google Map
    connect.tsx     # Call-to-action banner
    site-footer.tsx
    logo.tsx        # Monogram placeholder
    ui.tsx          # Container + SectionHeading
    icons.tsx       # Inline SVG icon set
  lib/
    site.ts         # ALL site content lives here (edit this first)
```

## Editing Content

**Everything** (name, phone, address, service times, ministries, scripture)
is centralized in [`src/lib/site.ts`](src/lib/site.ts). Change it once and the
whole site updates.

## Adding the Real Logo

1. Drop the logo file at `public/images/logo.png`
2. In [`src/components/logo.tsx`](src/components/logo.tsx), replace the
   monogram `<span>` with:

```tsx
<Image src="/images/logo.png" width={44} height={44} alt="Miracle Ground logo" />
```

## Roadmap (planned growth)

- [ ] Real logo + photo gallery
- [ ] Sermons / media hub
- [ ] Events & announcements calendar
- [ ] Online giving
- [ ] Prayer request form
- [ ] Pastor & leadership page
- [ ] Multi-language (English / Arabic / Juba Arabic)