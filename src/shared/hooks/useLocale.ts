import { useParams } from "react-router"

import { localizedPath, toLocale } from "@/plugins/language/config"

/** Locale from the URL (`/:lang/...`); falls back to the default locale outside it. */
export const useLocale = () => toLocale(useParams().lang)

/** Prefix a page path with the current locale: lp("/example") -> "/id/example" */
export const useLocalePath = () => {
  const locale = useLocale()

  return (path: string) => localizedPath(locale, path)
}
