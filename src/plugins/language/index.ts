import i18n, { type i18n as I18nInstance, type TOptions } from "i18next"
import { initReactI18next } from "react-i18next"

import { type Locale, defaultLocale, locales, toLocale } from "./config"
import { languageMessages } from "./locales"

export type MessageLanguages = Locale

export type MessageSchema = (typeof languageMessages)["en"]

/**
 * Global instance: used by `translate()` outside components. The active locale
 * layout keeps its language in sync with the URL (see LocaleLayout).
 */
void i18n.use(initReactI18next).init({
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  supportedLngs: [...locales],
  resources: Object.fromEntries(
    locales.map((locale) => [locale, { translation: languageMessages[locale] }]),
  ),
  interpolation: {
    escapeValue: false, // React already escapes
  },
})

const instances = new Map<Locale, I18nInstance>()

/**
 * Instance pinned to one locale (taken from the URL). Rendering and `meta` use this
 * instead of the global instance, so prerendered pages never depend on shared
 * language state and the first client render matches the prerendered HTML.
 */
export const getI18n = (lang: unknown): I18nInstance => {
  const locale = toLocale(lang)
  let instance = instances.get(locale)

  if (!instance) {
    instance = i18n.cloneInstance({ lng: locale })
    instances.set(locale, instance)
  }

  return instance
}

type DotNotationKeys<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends string
    ? `${Prefix}${Extract<K, string>}`
    : DotNotationKeys<T[K], `${Prefix}${Extract<K, string>}.`>
}[keyof T]

export type TranslationKey = DotNotationKeys<MessageSchema>

/**
 * Translate outside React components (services, schemas, helpers).
 * Inside components prefer `useTranslation()` so the UI re-renders on language change.
 */
export const translate = (key: TranslationKey, options: TOptions = {}) => i18n.t(key, options)

export const isTranslateExist = (key: string) => i18n.exists(key)

export { i18n }
