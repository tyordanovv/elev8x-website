# elev8x.eu

Multi-page, three-language (EN, DE, BG) static site built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # static site in dist/
npm run check:site   # SEO and link checks on dist/
```

## Edit content

Every page is a Markdown file in `src/content/pages/{en,de,bg}/`. Translations of the same page share the same `key`; that key drives the language switcher, `hreflang` tags and breadcrumbs.

- **Frontmatter** holds the SEO fields (`title` ≤ 70 chars, `description` 70–170 chars), the hero, results, steps, "who does what", FAQ, related pages and the case-study diagrams (`flow` for before/after, `pipeline` for multi-lane flows).
- **Body** is the page's prose in Markdown. Link to other pages with their path in the same language.
- **New page:** copy a page of the same type, change `key`, `path`, `parent` and the copy, then add translations with the same `key`.
- The build fails if a title or description is too long or a field is missing.

Shared interface text (menu, buttons, footer) is in `src/i18n/ui.ts`. Company facts are in `src/config/site.ts`.

## Before the first deploy

1. Fill the `TODO` fields in `src/config/site.ts` (legal name, address, ЕИК, managing director). `npm run check:site` fails while they are empty.
2. Optional: set `bookingUrl`, `cloudflareAnalyticsToken`, `sameAs` profiles, and `showSlavi` once Slavi approves his profile.
3. In GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`: build, checks, deploy to GitHub Pages, then an IndexNow ping. Pull requests run the build and checks only.

## Other scripts

- `npm run og` renders the social preview images in `public/og/` with headless Chrome. Run it after changing the homepage headline.
