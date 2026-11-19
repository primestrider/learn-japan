import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router"

import { localeLabels, locales } from "@/plugins/language/config"
import { useLocale } from "@/shared/hooks/useLocale"

/** Links to the same page in every locale (also gives crawlers a path between versions). */
export default function LanguageSwitcher() {
  const { t } = useTranslation()
  const locale = useLocale()
  const { pathname } = useLocation()
  // "/id/lessons/hiragana" -> "/lessons/hiragana", "/id" -> ""
  const pagePath = pathname.slice(locale.length + 1).replace(/\/+$/, "")

  return (
    <nav
      aria-label={t("utils.nav.language")}
      className="flex gap-1 rounded-full bg-stone-100 p-1 text-xs"
    >
      {locales.map((option) => (
        <Link
          key={option}
          to={`/${option}${pagePath}`}
          hrefLang={option}
          lang={option}
          aria-current={option === locale ? "true" : undefined}
          className={`rounded-full px-3 py-1 transition-colors ${
            option === locale ? "bg-red-800 text-white" : "text-stone-600 hover:text-stone-900"
          }`}
        >
          {localeLabels[option]}
        </Link>
      ))}
    </nav>
  )
}
