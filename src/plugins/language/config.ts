// Dependency-free: also imported by react-router.config.ts (prerender + sitemap).

/** Every locale gets its own URL prefix: /id/..., /en/... */
export const locales = ["id", "en"] as const

export type Locale = (typeof locales)[number]

/** Fallback for missing translations, invalid URL locales and hreflang x-default */
export const defaultLocale: Locale = "en"

/** Shown in each language's own name (language switcher, picker) */
export const localeLabels: Record<Locale, string> = {
  id: "Bahasa Indonesia",
  en: "English",
}

/** Open Graph locale codes */
export const ogLocales: Record<Locale, string> = {
  id: "id_ID",
  en: "en_US",
}

export const isLocale = (value: unknown): value is Locale => locales.includes(value as Locale)

export const toLocale = (value: unknown): Locale => (isLocale(value) ? value : defaultLocale)

/** localizedPath("id", "/example") -> "/id/example", localizedPath("id", "/") -> "/id" */
export const localizedPath = (locale: Locale, path: string) =>
  path === "/" ? `/${locale}` : `/${locale}${path}`

/** A value in every site language, e.g. { id: "Halo", en: "Hello" } */
export type Localized<T = string> = Record<Locale, T>

/** Type of `pickLocale(value)`: every Localized<T> inside `T` becomes T */
export type Delocalized<T> =
  T extends Localized<infer U>
    ? Delocalized<U>
    : T extends readonly (infer E)[]
      ? Delocalized<E>[]
      : T extends object
        ? { [K in keyof T]: Delocalized<T[K]> }
        : T

const isLocalized = (value: object): value is Localized<unknown> => {
  const keys = Object.keys(value)
  return keys.length === locales.length && locales.every((locale) => keys.includes(locale))
}

/**
 * Deeply replace every `{ id, en }` object with the text for one locale, so a
 * page only ships its own language (e.g. loader data of a prerendered page).
 */
export const pickLocale = <T>(value: T, locale: Locale): Delocalized<T> => {
  if (Array.isArray(value)) {
    return value.map((item: unknown) => pickLocale(item, locale)) as Delocalized<T>
  }
  if (value !== null && typeof value === "object") {
    if (isLocalized(value)) return pickLocale(value[locale], locale) as Delocalized<T>

    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, pickLocale(item, locale)]),
    ) as Delocalized<T>
  }

  return value as Delocalized<T>
}
