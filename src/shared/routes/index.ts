import { type RouteConfigEntry, index, route } from "@react-router/dev/routes"

import { UtilsPagePath } from "../models"

// Route module paths are relative to `src/` (appDirectory in react-router.config.ts)
const utilRoutes: RouteConfigEntry[] = [
  // delete or change this later
  index("shared/views/LandingPageView.tsx"),
  route(UtilsPagePath.PAGE_NOT_FOUND, "shared/views/PageNotFound.tsx"),
]

export default utilRoutes
