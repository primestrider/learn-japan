import { useEffect } from "react"
import { Outlet, useParams } from "react-router"

import { i18n } from "@/plugins/language"
import { isLocale } from "@/plugins/language/config"
import { saveLocale } from "@/plugins/language/preference"
import SiteHeader from "@/shared/components/SiteHeader"
import { SITE_NAME } from "@/shared/helpers/seo"
import PageNotFound from "@/shared/views/PageNotFound"

/** Parent of every localized page: `/:lang/...` */
export default function LocaleLayout() {
  const { lang } = useParams()
  const locale = isLocale(lang) ? lang : null

  useEffect(() => {
    if (!locale) return

    // Keep `translate()` (outside components) in the URL's language
    void i18n.changeLanguage(locale)
    // The language picker at "/" sends returning visitors here
    saveLocale(locale)
  }, [locale])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{locale ? <Outlet /> : <PageNotFound />}</main>
      <footer className="border-t border-stone-200 py-6 text-center text-sm text-stone-500">
        {SITE_NAME}
      </footer>
    </div>
  )
}
