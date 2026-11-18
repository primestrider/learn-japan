import { type PropsWithChildren, useEffect } from "react"
import { useTranslation } from "react-i18next"
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "react-router"

import "./assets/main.css"
import { applyBrowserLocale } from "./plugins/language"
import { TanstackProvider } from "./plugins/tanstack"
import { setupZod } from "./plugins/zod"
import { UtilsPagePath } from "./shared/models"

setupZod()

/** HTML document shell, rendered at build time (prerender) and on the client. */
export function Layout({ children }: PropsWithChildren) {
  const { i18n } = useTranslation()

  return (
    <html lang={i18n.language}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  // Prerendered HTML uses the fallback locale; switch after hydration to avoid a mismatch.
  useEffect(() => {
    applyBrowserLocale()
  }, [])

  return (
    <TanstackProvider>
      <Outlet />
    </TanstackProvider>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  const title = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : "Error"

  if (!isRouteErrorResponse(error)) console.error(error)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-900 text-gray-100">
      <title>{title}</title>
      <meta name="robots" content="noindex" />
      <h1 className="text-4xl font-bold">{title}</h1>
      <Link to={UtilsPagePath.LANDING_PAGE} className="text-sky-400 hover:underline">
        Back to home
      </Link>
    </main>
  )
}
