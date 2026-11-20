# Ravindra Chaubey — Portfolio

Next.js 16 · Tailwind CSS v4 · Framer Motion · Lenis smooth scroll.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editing content
All text, experience, skills and projects live in `src/data/site.ts`.
Images go in `public/images/`, the CV in `public/resume/`.

## Theme
Colors are CSS variables in `src/app/globals.css` (`--cream`, `--orange`, `--ink`).

## SEO
- Metadata, Open Graph, Twitter cards and JSON-LD (`Person` + `WebSite`) in `src/app/layout.tsx`
- Generated `sitemap.xml`, `robots.txt`, web manifest, favicon and OG image (`src/app/*.ts(x)`)
- Set `NEXT_PUBLIC_SITE_URL` to your production domain (defaults to `https://ravindrachaubey.vercel.app`) so canonical/OG URLs are correct.
