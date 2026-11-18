import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import "./assets/main.css"
import "./plugins/language"
import { setupZod } from "./plugins/zod"

setupZod()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
