# hjme

Personal portfolio site of Himanshu Jariyal, built with React, TypeScript, Vite, TanStack Router, and Tailwind CSS. The legacy version of the site (plain HTML/CSS/JS) is preserved under [legacy/](legacy/) and is shipped alongside the new build.

Live site: https://himanshujariyal.github.io/hjme/

## Tech stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + TypeScript
- [TanStack Router](https://tanstack.com/router) (file-based routes in [src/routes/](src/routes/))
- [Tailwind CSS v4](https://tailwindcss.com/)
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment

## Project structure

- [src/](src/) — application source (components, routes, data)
- [public/](public/) — static assets served as-is
- [legacy/](legacy/) — older static site, copied into `dist/legacy` at build time
- [vite.config.ts](vite.config.ts) — Vite config (sets `base` to `/hjme/` for production)

## Getting started

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173/.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check, build for production, and run `postbuild`
- `npm run postbuild` — copy `legacy/` into `dist/legacy` and create `dist/404.html` (SPA fallback for GitHub Pages)
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run deploy` — build and publish `dist/` to the `gh-pages` branch

## Deploying to GitHub Pages

The site is deployed as a GitHub Pages **project site** at `/hjme/`, served from the `gh-pages` branch.

1. Make sure your working tree is clean and you're authenticated to push to the repo.
2. Run:

   ```bash
   npm run deploy
   ```

   This will:
   - Build the app (`vite build`) with `base: '/hjme/'`.
   - Copy the legacy site into `dist/legacy`.
   - Copy `dist/index.html` to `dist/404.html` so client-side routes work on GitHub Pages refresh.
   - Push the contents of `dist/` to the `gh-pages` branch via `gh-pages`.
3. In the repo settings, ensure **Settings → Pages** is configured to serve from the `gh-pages` branch (root).

The site will be available at https://himanshujariyal.github.io/hjme/ within a minute or so.

### Notes

- If you fork this repo under a different name, update the `base` in [vite.config.ts](vite.config.ts) to match the new repo name (e.g. `/my-fork/`).
- For a user/organization site (`<user>.github.io`), set `base: '/'`.
- Asset paths in code should be relative or use Vite's `import.meta.env.BASE_URL` so they work under the `/hjme/` base.
