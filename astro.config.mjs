import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static build for GitHub Pages. Every URL ends in a slash and is served
// from a folder index.html, which matches how GitHub Pages resolves paths.
export default defineConfig({
  site: 'https://elev8x.eu',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
