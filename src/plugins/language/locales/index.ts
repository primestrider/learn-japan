import type { Locale } from "../config"
import englishLocale from "./en"
import indonesiaLocale from "./id"

export const languageMessages = {
  en: englishLocale,
  id: indonesiaLocale,
} satisfies Record<Locale, unknown>
