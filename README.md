# React 19 Project Structure Guide

This project follows a **feature-based architecture** with clearly separated modules for features, shared utilities, and global plugins. It is a **scalable React 19 starter kit** using Vite, TypeScript, React Router, Zustand, TailwindCSS, TanStack Query, and a best-practice folder structure (mirrors `vue-boilerplate`). It provides:

- Organized feature-based architecture
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

| Script                          | Description                              |
| ------------------------------- | ---------------------------------------- |
| `npm run dev`                   | Start dev server                         |
| `npm run build`                 | Type-check + production build            |
| `npm run preview`               | Preview production build (port 7800)     |
| `npm run type-check`            | TypeScript check only                    |
| `npm run lint`                  | ESLint (with `--fix`)                    |
| `npm run format`                | Prettier (sorted imports)                |
| `npm run create-feature <name>` | Scaffold a new feature (kebab-case name) |

---

## 🗂 Folder Structure Overview

```
src/
├── assets/                       # Static styles and assets (CSS, images)
├── main.tsx                      # App bootstrap
├── App.tsx                       # Root component (providers + router)

├── plugins/                      # Global library setup
│   ├── axios/                    # Axios instance + interceptors (auth token, error shape)
│   ├── language/                 # i18next setup, locales, typed `translate()`
│   ├── tanstack/                 # QueryClient + provider
│   └── zod/                      # Global (translated) fallback validation message

├── router/                       # Combines all feature routes

├── features/                     # Feature-specific domains
│   ├── feature-a/
│   │   ├── components/           # UI components specific to feature-a
│   │   ├── languages/            # i18n messages specific to feature-a
│   │   ├── layouts/              # Layout components (with <Outlet />)
│   │   ├── models/               # Types, page paths, zod schemas
│   │   ├── routes/               # Route configs (RouteObject[], lazy-loaded)
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
| vue-router          | react-router (`RouteObject[]` + `lazy`)          |
| pinia               | zustand                                          |
| vue-i18n            | i18next + react-i18next                          |
| @tanstack/vue-query | @tanstack/react-query                            |
| vee-validate + zod  | react-hook-form + @hookform/resolvers + zod      |
| composables/        | hooks/                                           |
| route `name` (enum) | `XxxPagePath` const object                       |
| `useBaseFieldError` | built-in `setError("field", { type: "server" })` |

### Notes

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
