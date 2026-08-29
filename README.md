# Pro Wrestling Tycoon — Marketing Site

Official marketing website for **Pro Wrestling Tycoon**, built with Vite, React 19, TypeScript, React Router, Tailwind CSS v4, and deployed to GitHub Pages.

## Development

```bash
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev` — start local dev server
- `pnpm lint` — run oxlint
- `pnpm build` — typecheck and production build
- `pnpm preview` — preview production build

## Replacing placeholders

- **Logo:** update `src/components/brand/Logo.tsx` or add art under `public/brand/`
- **Intro video:** replace the video placeholder block in `src/pages/HomePage.tsx`
- **Screenshots:** drop images into `public/screenshots/` as `shot-01.jpg` through `shot-06.jpg`

## Deployment

Pushes to `main` deploy via `.github/workflows/deploy.yml`. Custom domain: `pwtycoon.com` (`public/CNAME`).
