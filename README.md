# React 19 Project Structure Guide

This project follows a **feature-based architecture** with clearly separated modules for features, shared utilities, and global plugins. It is a **scalable React 19 starter kit** using Vite, TypeScript, React Router, Zustand, TailwindCSS, TanStack Query, and a best-practice folder structure (mirrors `vue-boilerplate`). It provides:

- Organized feature-based architecture
- SEO-ready: React Router framework mode, every page prerendered to static HTML with its own `<title>`/meta
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
├── routes.ts                     # Combines all feature routes (route config)

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

- **Routing / SEO**: routes are declared with `route("path", "features/x/views/XView.tsx")` (file paths are relative to `src/`). Each view can export `meta` for its `<title>`/description; it is written into the prerendered HTML. Nested child routes take a relative path — use `childPath(parent, path)` from `@/shared/helpers/route`.
- **Prerender**: `react-router.config.ts` uses `ssr: false` + `prerender: true`, so every static route becomes `build/client/<path>/index.html`. For dynamic routes (e.g. `/kanji/:id`) make `prerender` an async function returning every URL. Unknown URLs use `build/client/__spa-fallback.html` — point your static host's fallback/404 page at it (not at `index.html`, which is the prerendered landing page). Local `npm run preview` only maps prerendered pages when the URL has a trailing slash (`/example/form/`); real static hosts map both.
- **No browser APIs during render**: pages are rendered in Node at build time, so `window`, `document`, `navigator`, `localStorage` may only be used inside effects or event handlers.
- **Language**: the first render always uses the default locale (`en`) so prerendered HTML matches hydration; `applyBrowserLocale()` switches to the browser language afterwards.
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
