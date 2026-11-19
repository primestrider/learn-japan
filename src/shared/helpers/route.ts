// Dependency-free (type import only): also used by react-router.config.ts.
import type { RouteConfigEntry } from "@react-router/dev/routes"

/**
 * Route config nests child paths under their parent, so an absolute page path
 * (used by <Link>) must be made relative before passing it to a child `route()`.
 * childPath("/example", "/example/form") -> "form"
 */
export const childPath = (parent: string, path: string) => {
  if (!path.startsWith(`${parent}/`)) {
    throw new Error(`Route "${path}" is not nested under "${parent}"`)
  }

  return path.slice(parent.length + 1)
}

/** Feature routes declare absolute paths ("/example"); make them relative to the `:lang` segment. */
export const localeRoutes = (routes: RouteConfigEntry[]): RouteConfigEntry[] =>
  routes.map((entry) => (entry.path ? { ...entry, path: entry.path.replace(/^\//, "") } : entry))

const joinPath = (parent: string, path = "") => {
  if (!path) return parent || "/"
  if (path.startsWith("/")) return path

  return `${parent === "/" ? "" : parent}/${path}`
}

/**
 * Every page URL of a route tree (without dynamic `:param` or `*` segments),
 * e.g. ["/", "/example", "/example/form"]. Used for prerendering and the sitemap.
 */
export const getPagePaths = (routes: RouteConfigEntry[], parent = ""): string[] => {
  const paths = routes.flatMap((entry) => {
    const path = joinPath(parent, entry.path)

    if (/[:*]/.test(path)) return []

    const isPage = entry.index || (entry.path !== undefined && !entry.children?.length)

    return [...(isPage ? [path] : []), ...getPagePaths(entry.children ?? [], path)]
  })

  return [...new Set(paths)]
}
