import { z } from "zod"

import { translate } from "@/plugins/language"

/**
 * Global fallback message for zod issues without a custom message.
 * Messages defined in a schema (e.g. `.min(3, "...")`) still take priority.
 */
export function setupZod() {
  z.config({
    customError: (issue) => {
      const field = issue.path?.join(".") || "field"
      return translate("utils.validation.default", { field })
    },
  })
}
