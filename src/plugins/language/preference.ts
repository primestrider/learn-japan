import { type Locale, isLocale } from "./config"

const STORAGE_KEY = "locale"

/** Last language the visitor used; storage can be unavailable (private mode, blocked). */
export const getSavedLocale = (): Locale | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return isLocale(value) ? value : null
  } catch {
    return null
  }
}

export const saveLocale = (locale: Locale) => {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Preference is a convenience only
  }
}
