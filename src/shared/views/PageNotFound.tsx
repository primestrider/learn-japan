import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import { getI18n } from "@/plugins/language"
import { seo } from "@/shared/helpers/seo"
import { useLocalePath } from "@/shared/hooks/useLocale"

import { UtilsPagePath } from "../models"
import type { Route } from "./+types/PageNotFound"

export default function PageNotFound() {
  const { t } = useTranslation()
  const localePath = useLocalePath()

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <h1 className="text-5xl font-extrabold text-red-800">404</h1>
      <p className="text-stone-600">{t("utils.not_found.title")}</p>
      <Link
        to={localePath(UtilsPagePath.LANDING_PAGE)}
        className="font-medium text-red-800 hover:underline"
      >
        {t("utils.not_found.back")}
      </Link>
    </div>
  )
}

export const meta: Route.MetaFunction = ({ params }) => {
  const { t } = getI18n(params.lang)

  return seo({
    lang: params.lang,
    path: UtilsPagePath.PAGE_NOT_FOUND,
    title: t("utils.not_found.meta_title"),
    description: t("utils.not_found.meta_description"),
    noindex: true,
  })
}
