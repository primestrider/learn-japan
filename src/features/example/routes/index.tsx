import type { RouteObject } from "react-router"

import { ExamplePagePath } from "../models"

const exampleRoutes: RouteObject[] = [
  {
    path: ExamplePagePath.EXAMPLE,
    lazy: async () => ({
      Component: (await import("@/features/example/layouts/ExampleLayout")).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/features/example/views/ExampleView")).default,
        }),
      },
      {
        path: ExamplePagePath.EXAMPLE_FORM,
        lazy: async () => ({
          Component: (await import("@/features/example/views/ExampleFormView")).default,
        }),
      },
      {
        path: ExamplePagePath.EXAMPLE_TANSTACK,
        lazy: async () => ({
          Component: (await import("@/features/example/views/ExampleTanstackView")).default,
        }),
      },
    ],
  },
]

export default exampleRoutes
