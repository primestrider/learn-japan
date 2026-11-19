# React 19 Project Structure Guide

This project follows a **feature-based architecture** with clearly separated modules for features, shared utilities, and global plugins. It is a **scalable React 19 starter kit** using Vite, TypeScript, React Router, Zustand, TailwindCSS, TanStack Query, and a best-practice folder structure (mirrors `vue-boilerplate`). It provides:

- Organized feature-based architecture
- SEO-ready: every page prerendered to static HTML in two languages (`/id/...`, `/en/...`) with title, description, canonical, hreflang, Open Graph, `sitemap.xml` and `robots.txt`
- Built-in i18n support (typed translation keys)
- Shared reusable components, hooks, and models
- Auto-generated feature scaffolding (`create-feature` script)
- Modern tooling: ESLint, Prettier, TypeScript, React Compiler

---

## 🚀 Getting Started

```bash
npm install
cp .env.example .env
npm run dev            # http://localhost:7600
```

| Script                          | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| `npm run dev`                   | Start dev server                                 |
| `npm run build`                 | Type-check + build + prerender to `build/client` |
| `npm run preview`               | Preview production build (port 7800)             |
| `npm run type-check`            | Route typegen + TypeScript check                 |
| `npm run lint`                  | ESLint (with `--fix`)                            |
| `npm run format`                | Prettier (sorted imports)                        |
| `npm run create-feature <name>` | Scaffold a new feature (kebab-case name)         |

---

## 🗂 Folder Structure Overview

```
src/
├── assets/                       # Static styles and assets (CSS, images)
├── root.tsx                      # HTML document (<head>/<Meta/>), providers, error boundary
├── routes.ts                     # Route tree: "/" language picker + `/:lang/...` feature routes

├── plugins/                      # Global library setup
│   ├── axios/                    # Axios instance + interceptors (auth token, error shape)
│   ├── language/                 # i18next setup, locales, typed `translate()`
│   ├── tanstack/                 # QueryClient + provider
│   └── zod/                      # Global (translated) fallback validation message

├── features/                     # Feature-specific domains
│   ├── feature-a/
│   │   ├── components/           # UI components specific to feature-a
│   │   ├── languages/            # i18n messages specific to feature-a
│   │   ├── layouts/              # Layout components (with <Outlet />)
│   │   ├── models/               # Types, page paths, zod schemas
│   │   ├── routes/               # Route config entries (`route()`, `index()`)
│   │   ├── services/             # API calls
│   │   ├── stores/               # Zustand stores
│   │   └── views/                # Page components
│   └── feature-b/                # (Repeat structure for other features)

├── shared/                       # Shared code reused across features
│   ├── components/               # Global reusable components
│   ├── helpers/                  # Pure helper functions (e.g. date)
│   ├── hooks/                    # Shared React hooks
│   ├── languages/                # Shared i18n messages (e.g. validation)
│   ├── models/                   # Shared types/interfaces
│   ├── routes/                   # Global or fallback routes
│   └── views/                    # Shared views (e.g. 404 Page)
```

---

## 🔁 Vue → React mapping

| vue-boilerplate     | react-boilerplate                                |
| ------------------- | ------------------------------------------------ |
| vue-router          | react-router framework mode (`routes.ts`)        |
| pinia               | zustand                                          |
| vue-i18n            | i18next + react-i18next                          |
| @tanstack/vue-query | @tanstack/react-query                            |
| vee-validate + zod  | react-hook-form + @hookform/resolvers + zod      |
| composables/        | hooks/                                           |
| route `name` (enum) | `XxxPagePath` const object                       |
| `useBaseFieldError` | built-in `setError("field", { type: "server" })` |

### Notes

- **Languages & URLs**: every page exists per locale (`src/plugins/language/config.ts`): `/id/lessons/hiragana`, `/en/lessons/hiragana`. `/` is a language picker (hreflang `x-default`) that sends returning visitors to the language they used last; there is no automatic redirect by browser language, so crawlers can reach every version. The language comes from the URL (`getI18n(params.lang)` / `useTranslation()`), so translate the whole page, not only the UI.
- **Routing**: feature routes are declared with absolute page paths, `route(XPagePath.X, "features/x/views/XView.tsx")` (file paths relative to `src/`), and nested under `/:lang` in `src/routes.ts`. Nested child routes take a relative path: `childPath(parent, path)` from `@/shared/helpers/route`. Links must keep the locale: `const localePath = useLocalePath(); <Link to={localePath(XPagePath.X)}>`.
- **Lessons (content)**: `src/features/lessons/data/lessons/*.ts`, one file per lesson, typed by `Lesson` in `src/features/lessons/models`. Every text is `{ id, en }`. To add a lesson: create the file, then add it to the ordered `lessons` array in `src/features/lessons/data/index.ts`; it is prerendered in both languages, listed on the home page, linked prev/next, and added to the sitemap automatically. Lesson data is only read by route `loader`s at build time and reduced to the page's language with `pickLocale`, so it lands in the HTML, not in the JS bundle.
- **Images**: `public/og-image.png` (1200×630, default share image for every page), `favicon.svg`, `favicon-48.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` and `manifest.webmanifest`. Replace the files to rebrand; the site name is `SITE_NAME` in `src/shared/helpers/seo.ts`.
- **SEO tags**: each view exports `meta` built with `seo({ lang: params.lang, path, title, description, noindex?, jsonLd? })` from `@/shared/helpers/seo`. It renders title, description, canonical, reciprocal hreflang (incl. `x-default`), Open Graph and optional JSON-LD into the prerendered HTML.
- **Build / deploy**: `VITE_WEB_URL` (absolute site URL, e.g. `https://example.com`) is required for `npm run build`; it is used for canonical, hreflang and the sitemap. The build writes `build/client` with one `index.html` per page and locale, plus `sitemap.xml`, `robots.txt` and `404.html`. Deploy `build/client` to any static host (Cloudflare Pages, Netlify, Vercel); keep its "single-page app" rewrite off so `404.html` is served with a real 404 status. Canonical URLs have no trailing slash; configure the host not to redirect `/id/lessons/hiragana` to `/id/lessons/hiragana/`. Dynamic routes (e.g. `/lessons/:slug`) must add their URLs to `pagePaths` in `react-router.config.ts` (used for prerender and the sitemap).
- **Local preview**: `npm run preview` only maps prerendered pages when the URL has a trailing slash (`/id/lessons/hiragana/`); real static hosts map both.
- **No browser APIs during render**: pages are rendered in Node at build time, so `window`, `document`, `navigator`, `localStorage` may only be used inside effects or event handlers.
- **Translations**: inside components use `const { t } = useTranslation()` (re-renders on language change, keys are type-checked). Outside components use `translate()` from `@/plugins/language`.
- **Backend form errors**: call react-hook-form's `setError(field, { type: "server", message })`; it is cleared automatically when the field is re-validated.
- **Enums**: `erasableSyntaxOnly` is enabled, so use `as const` objects instead of TypeScript `enum`.

---

### Packages Dependencies

- **react / react-dom** – UI library.
- **react-router** – Routing system for handling pages.
- **zustand** – State management library.
- **i18next / react-i18next** – Internationalization support.
- **axios** – HTTP client for API calls.
- **@tanstack/react-query** – Data fetching & caching utilities.
- **react-hook-form / @hookform/resolvers** – Form state & validation.
- **zod** – Schema validation & parsing.
- **tailwindcss / @tailwindcss/vite** – Utility-first CSS framework.
- **date-fns** – Date utilities.
