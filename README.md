# Astavita

Online jewellery store for astavita.co, built with Next.js 16 (App Router). Every page is pre-rendered as static HTML.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where to edit

| What | File |
|---|---|
| Brand name, email, WhatsApp number, shipping fee, free-shipping limit, return days | `src/lib/site.ts` |
| Products, prices, collections | `src/lib/catalog.ts` |
| FAQs and journal articles | `src/lib/content.ts` |
| Colours, fonts, layout | `src/app/globals.css` |
| Photos | `public/images/` (replace a file with the same name; sources in `public/images/CREDITS.md`) |

## Before launch

1. Replace the sample products and photos with real stock.
2. Set `whatsapp` in `src/lib/site.ts`. Orders are sent to WhatsApp (or email if it is empty); no payment gateway is connected yet.
3. Check the shipping, returns, privacy and terms text matches how you actually work.

## SEO, AEO and GEO

- Unique title, description, canonical URL and Open Graph image on every page.
- Structured data: Organization, WebSite search, Product with offer, shipping and return policy, BreadcrumbList, CollectionPage, FAQPage and Article.
- `sitemap.xml`, `robots.txt` (search engines and AI crawlers allowed; cart, checkout and search blocked) and `llms.txt` (plain-text summary for AI assistants).
- Old URLs from the previous site redirect permanently to the new pages (`next.config.ts`).

## Deploy (Vercel + Hostinger domain)

1. Import this repository at vercel.com and deploy (no settings needed).
2. In Vercel, Project → Settings → Domains, add `astavita.co` and `www.astavita.co`.
3. In Hostinger, DNS for astavita.co: set an `A` record for `@` to `76.76.21.21` and a `CNAME` for `www` to `cname.vercel-dns.com`. Use the exact values Vercel shows if they differ.
