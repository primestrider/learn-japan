import { Link } from "react-router"

import { UtilsPagePath } from "../models"
import type { Route } from "./+types/PageNotFound"

export default function PageNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-400">Page Not Found</p>
      <Link to={UtilsPagePath.LANDING_PAGE} className="text-sky-400 hover:underline">
        Back to home
      </Link>
    </div>
  )
}

export const meta: Route.MetaFunction = () => [
  { title: "404 - Page Not Found" },
  { name: "description", content: "The page you are looking for does not exist." },
  { name: "robots", content: "noindex" },
]
