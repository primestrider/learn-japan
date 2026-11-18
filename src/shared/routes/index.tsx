import type { RouteObject } from "react-router"

import { UtilsPagePath } from "../models"

const utilRoutes: RouteObject[] = [
  // delete or change this later
  {
    path: UtilsPagePath.LANDING_PAGE,
    lazy: async () => ({ Component: (await import("@/shared/views/LandingPageView")).default }),
  },
  {
    path: UtilsPagePath.PAGE_NOT_FOUND,
    lazy: async () => ({ Component: (await import("@/shared/views/PageNotFound")).default }),
  },
]

export default utilRoutes
