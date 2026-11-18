import { useTranslation } from "react-i18next"

import {
  formatDate,
  formatDateTime,
  formatTimeStampRelative,
  isSupportedDateLocale,
} from "@/shared/helpers/date"

import type { DateLocaleCode } from "../models"

export const useDateFormatter = () => {
  const { i18n } = useTranslation()

  const [baseLocale = "en"] = (i18n.language || "en").split("-")
  const locale: DateLocaleCode = isSupportedDateLocale(baseLocale) ? baseLocale : "en"

  return {
    /** Format date into readable string */
    formatDate: (date: string | Date, pattern?: string) => formatDate(date, locale, pattern),
    /** Format date with time */
    formatDateTime: (date: string | Date, pattern?: string) =>
      formatDateTime(date, locale, pattern),
    /** Format relative time */
    formatRelativeTime: (date: string | Date) => formatTimeStampRelative(date, locale),
  }
}
