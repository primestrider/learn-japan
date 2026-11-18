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
