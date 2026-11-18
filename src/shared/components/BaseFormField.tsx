import { useId } from "react"

import type { BaseFormFieldProps } from "../models"

/**
 * BaseFormField
 *
 * Headless form field wrapper with:
 * - Reserved space for label & messages (prevents layout shift)
 * - Accessible error & hint handling
 *
 * Responsibilities:
 * - Layout & accessibility only
 * - Does NOT manage form state or validation logic (react-hook-form does)
 */
export default function BaseFormField({
  label = "",
  fieldName = "",
  error = null,
  required = false,
  hint = "",
  disabled = false,
  children,
}: BaseFormFieldProps) {
  const uid = useId()
  const baseId = fieldName || uid

  /** Disabled fields do not display errors */
  const hasError = Boolean(error) && !disabled
  const errorId = hasError ? `${baseId}-error` : undefined
  const hintId = hint && !hasError ? `${baseId}-hint` : undefined

  return (
    <div className="flex flex-col gap-1">
      {/* Label (reserved height to prevent layout shift) */}
      <label
        htmlFor={fieldName || undefined}
        className={`ml-2 flex min-h-2 items-end text-sm font-medium transition ${
          disabled ? "text-slate-500" : "text-slate-300"
        }`}
      >
        <span className={label ? "" : "invisible"}>{label || "placeholder"}</span>

        {required && !disabled && label && (
          <span className="ml-0.5 text-red-400" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {/* Input */}
      <div
        className="flex min-h-12 items-center"
        aria-invalid={hasError}
        aria-describedby={errorId || hintId}
      >
        {children}
      </div>

      {/* Message row (reserved height) */}
      <div className="ml-2 min-h-2 text-sm" aria-live="polite">
        {hasError ? (
          <p id={errorId} className="text-red-400">
            {error}
          </p>
        ) : (
          hint && (
            <p id={hintId} className="text-slate-400">
              {hint}
            </p>
          )
        )}
      </div>
    </div>
  )
}
