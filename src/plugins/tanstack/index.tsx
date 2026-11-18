import { QueryClientProvider } from "@tanstack/react-query"
import { type PropsWithChildren, useState } from "react"

import { createQueryClient } from "./client"

export function TanstackProvider({ children }: PropsWithChildren) {
  // One client per app instance, so server renders never share cached data
  const [queryClient] = useState(createQueryClient)

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
