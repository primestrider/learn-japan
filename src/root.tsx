import type { PropsWithChildren } from "react"
import { I18nextProvider, useTranslation } from "react-i18next"
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
import { getI18n } from "./plugins/language"
import { TanstackProvider } from "./plugins/tanstack"
import { setupZod } from "./plugins/zod"
import { useLocale, useLocalePath } from "./shared/hooks/useLocale"
import { UtilsPagePath } from "./shared/models"

setupZod()

/** HTML document shell, rendered at build time (prerender) and on the client. */
export function Layout({ children }: PropsWithChildren) {
  const locale = useLocale()

  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#991b1b" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Language comes from the URL, so prerendered HTML and hydration always agree */}
        <I18nextProvider i18n={getI18n(locale)}>{children}</I18nextProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <TanstackProvider>
      <Outlet />
    </TanstackProvider>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  const { t } = useTranslation()
  const localePath = useLocalePath()
  const title = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : "Error"

  if (!isRouteErrorResponse(error)) console.error(error)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <title>{title}</title>
      <meta name="robots" content="noindex" />
      <h1 className="text-4xl font-extrabold text-red-800">{title}</h1>
      <Link
        to={localePath(UtilsPagePath.LANDING_PAGE)}
        className="font-medium text-red-800 hover:underline"
      >
        {t("utils.not_found.back")}
      </Link>
    </main>
  )
}
