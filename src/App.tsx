import { RouterProvider } from "react-router/dom"

import { TanstackProvider } from "./plugins/tanstack"
import router from "./router"

export default function App() {
  return (
    <TanstackProvider>
      <RouterProvider router={router} />
    </TanstackProvider>
  )
}
