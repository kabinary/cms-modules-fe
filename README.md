# Kabinary Joomla Modules

Marketing site for the Kabinary catalog of premium Joomla modules and extensions. Built with Angular 19 and Tailwind CSS 3, deployed to GitHub Pages.

## Stack

- **Angular** 19.2.x (module-based, not standalone)
- **Tailwind CSS** 3.4.x with a custom Boundrify-inspired theme extension (indigo / sand / ink / signal palettes)
- **Geist** + Geist Mono via Google Fonts
- **Stripe Buy Buttons** (web components) for licensing
- **angular-cli-ghpages** for deployment

## Design system

The visual identity follows the **Boundrify charter** (indigo `#4F46E5` primary, warm sand neutrals `#FBF8F2`, Geist typography, signal gold reserved for alerts, light-only theme). Tokens live in [`tailwind.config.js`](tailwind.config.js) (colors, fonts, radii, shadows) and global utility classes (`.btn`, `.card`, `.band-*`, `.text-display`, `.eyebrow`, etc.) in [`src/styles.css`](src/styles.css).

The brand wordmark (`Kabinary`) is reused from the [kabinary](https://github.com/kabinary/kabinary) project — both projects share the same brand assets (favicon set + light/dark wordmark PNGs).

## Development

```bash
npm install
npm start              # ng serve → http://localhost:4200
npm run build          # production build → dist/cms-modules-fe/browser
npx ng deploy          # build + publish to gh-pages branch
```

## Project structure

- `src/app/components/` — shared UI components (`app-button`, `app-header`, `app-footer`, `app-module-card`, `app-collapsible-panel`, `app-image-lightbox`)
- `src/app/pages/` — route components (home, module demo, license, installation guides)
- `src/app/directives/` — `appZoomable` for click-to-zoom on images
- `public/` — static assets (favicons, logos, screenshots), served at the site root

## Live

Deployed to GitHub Pages from the `gh-pages` branch.
