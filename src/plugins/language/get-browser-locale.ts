export const getBrowserLocale = (supported: string[], fallback = "en"): string => {
  // `navigator` does not exist while prerendering on the server
  if (typeof navigator === "undefined") return fallback

  const [locale = fallback] = navigator.language.split("-")

  return supported.includes(locale) ? locale : fallback
}
