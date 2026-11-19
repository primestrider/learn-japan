import { useEffect } from "react"
import { Link, useNavigate } from "react-router"

import { localeLabels, locales } from "@/plugins/language/config"
import { getSavedLocale } from "@/plugins/language/preference"
import { SITE_NAME, seo } from "@/shared/helpers/seo"

import type { Route } from "./+types/LanguagePickerView"

/**
 * "/" — language picker (hreflang x-default). No automatic redirect by browser
 * language: crawlers must be able to reach it. Returning visitors go straight to
 * the language they used last.
 */
export default function LanguagePickerView() {
  const navigate = useNavigate()

  useEffect(() => {
    const saved = getSavedLocale()

    if (saved) void navigate(`/${saved}`, { replace: true })
  }, [navigate])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
      <p lang="ja" aria-hidden="true" className="text-6xl text-red-800">
        にほんご
      </p>
      <h1 className="text-center text-4xl font-extrabold text-stone-900 sm:text-5xl">
        {SITE_NAME}
      </h1>
      <p className="text-center text-stone-600">
        <span lang="id">Pilih bahasa</span> · <span lang="en">Choose your language</span>
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        {locales.map((locale) => (
          <Link
            key={locale}
            to={`/${locale}`}
            hrefLang={locale}
            lang={locale}
            className="rounded-xl bg-red-800 px-8 py-3 text-center font-semibold text-white shadow-sm transition-colors hover:bg-red-900"
          >
            {localeLabels[locale]}
          </Link>
        ))}
      </div>
    </main>
  )
}

export const meta: Route.MetaFunction = () =>
  seo({
    lang: undefined,
    path: "/",
    title: SITE_NAME,
    description:
      "Belajar bahasa Jepang dalam Bahasa Indonesia atau English. Learn Japanese in Indonesian or English.",
  })
