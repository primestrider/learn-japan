import { type RouteConfigEntry, index, route } from "@react-router/dev/routes"

import { childPath } from "../../../shared/helpers/route"
import { ExamplePagePath } from "../models"

const { EXAMPLE, EXAMPLE_FORM, EXAMPLE_TANSTACK } = ExamplePagePath

// Route module paths are relative to `src/` (appDirectory in react-router.config.ts)
const exampleRoutes: RouteConfigEntry[] = [
  route(EXAMPLE, "features/example/layouts/ExampleLayout.tsx", [
    index("features/example/views/ExampleView.tsx"),
    route(childPath(EXAMPLE, EXAMPLE_FORM), "features/example/views/ExampleFormView.tsx"),
    route(childPath(EXAMPLE, EXAMPLE_TANSTACK), "features/example/views/ExampleTanstackView.tsx"),
  ]),
]

export default exampleRoutes
