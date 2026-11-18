import { createBrowserRouter } from "react-router"

import exampleRoutes from "@/features/example/routes"
import utilRoutes from "@/shared/routes"

const listRoutes = [...exampleRoutes, ...utilRoutes]

const router = createBrowserRouter(listRoutes, {
  basename: import.meta.env.BASE_URL,
})

export default router
