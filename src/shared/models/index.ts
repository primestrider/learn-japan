import type { ReactNode } from "react"

import type { DATE_FNS_LOCALES } from "../helpers/date"

export const UtilsPagePath = {
  LANDING_PAGE: "/",
  PAGE_NOT_FOUND: "*",
} as const

export type BaseFormFieldProps = {
  /**
   * Field label (text or custom node)
   */
  label?: ReactNode

  /**
   * Field name / id (used for label htmlFor & accessibility)
   */
  fieldName?: string

  /**
   * Error message from zod validation or backend (`setError`)
   */
  error?: string | null

  /**
   * Mark field as required (UI only)
   */
  required?: boolean

  /**
   * Optional helper / hint text
   */
  hint?: string

  /**
   * Disable field
   */
  disabled?: boolean

  children: ReactNode
}

export type DateLocaleCode = keyof typeof DATE_FNS_LOCALES
