import i18n, { type TOptions } from "i18next"
import { initReactI18next } from "react-i18next"

import { getBrowserLocale } from "./get-browser-locale"
import { languageMessages } from "./locales"

export type MessageLanguages = keyof typeof languageMessages

export type MessageSchema = (typeof languageMessages)["en"]

const supportedLocales = Object.keys(languageMessages) as MessageLanguages[]

const defaultLocale: MessageLanguages = "en"

// Always start with the default locale so prerendered HTML and the first client
// render match. `applyBrowserLocale()` switches after hydration.
void i18n.use(initReactI18next).init({
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  supportedLngs: supportedLocales,
  resources: Object.fromEntries(
    supportedLocales.map((locale) => [locale, { translation: languageMessages[locale] }]),
  ),
  interpolation: {
    escapeValue: false, // React already escapes
  },
})

/** Switch to the visitor's browser language (client only, after hydration). */
export const applyBrowserLocale = () => {
  const locale = getBrowserLocale(supportedLocales, defaultLocale)

  if (locale !== i18n.language) void i18n.changeLanguage(locale)
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
