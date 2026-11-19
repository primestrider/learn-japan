import { Link } from "react-router"

import { SITE_NAME } from "@/shared/helpers/seo"
import { useLocalePath } from "@/shared/hooks/useLocale"
import { UtilsPagePath } from "@/shared/models"

import LanguageSwitcher from "./LanguageSwitcher"

export default function SiteHeader() {
  const localePath = useLocalePath()

  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3">
        <Link
          to={localePath(UtilsPagePath.LANDING_PAGE)}
          className="flex items-center gap-2 font-bold text-stone-900"
        >
          <span
            lang="ja"
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-800 text-white"
          >
            あ
          </span>
          {SITE_NAME}
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
