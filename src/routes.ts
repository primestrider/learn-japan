import type { RouteConfig } from "@react-router/dev/routes"

import exampleRoutes from "./features/example/routes"
import utilRoutes from "./shared/routes"

const listRoutes = [...exampleRoutes, ...utilRoutes]

export default listRoutes satisfies RouteConfig
