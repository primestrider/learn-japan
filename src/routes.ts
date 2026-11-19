import { type RouteConfig, index, route } from "@react-router/dev/routes"

import lessonsRoutes from "./features/lessons/routes"
import { localeRoutes } from "./shared/helpers/route"
import utilRoutes from "./shared/routes"

/** Pages available in every locale, declared without the locale prefix. */
export const listRoutes = [...lessonsRoutes, ...utilRoutes]

export default [
  // "/" is the language picker (hreflang x-default of the home page)
  index("shared/views/LanguagePickerView.tsx"),
  route(":lang", "shared/layouts/LocaleLayout.tsx", localeRoutes(listRoutes)),
] satisfies RouteConfig
