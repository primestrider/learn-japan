// Relative imports: also used by react-router.config.ts (sitemap) outside Vite aliases.
import type { MetaDescriptor } from "react-router"

import {
  defaultLocale,
  isLocale,
  locales,
  localizedPath,
  ogLocales,
  toLocale,
} from "../../plugins/language/config"

export const SITE_NAME = "Learn Japan"

/** Default social share image (public/og-image.png, 1200×630) */
const OG_IMAGE = { path: "/og-image.png", width: 1200, height: 630 }

/**
 * hreflang set of a page. Every locale version emits the same set (including
 * itself), so the annotations are reciprocal. The home page falls back to the
 * language picker at "/"; other pages fall back to the default locale.
 */
export const alternatePaths = (path: string) => [
  ...locales.map((locale) => ({ hreflang: locale, path: localizedPath(locale, path) })),
  { hreflang: "x-default", path: path === "/" ? "/" : localizedPath(defaultLocale, path) },
]

/** Absolute URL from a site path ("/id/lessons/hiragana") */
export const absoluteUrl = (path: string) =>
  `${(import.meta.env.VITE_WEB_URL ?? "").replace(/\/+$/, "")}${path}`

type SeoOptions = {
  /** `params.lang` of a localized route; `undefined` for non-localized pages ("/") */
  lang: string | undefined
  /** Page path without locale prefix, e.g. "/example" */
  path: string
  title: string
  description: string
  noindex?: boolean
  /** schema.org JSON-LD object */
  jsonLd?: Record<string, unknown>
}

/** <head> tags for a page: title, description, canonical, hreflang, Open Graph, JSON-LD. */
export const seo = ({
  lang,
  path,
  title,
  description,
  noindex,
  jsonLd,
}: SeoOptions): MetaDescriptor[] => {
  // `/xx/...` with an unsupported locale renders the 404 page
  if (lang !== undefined && !isLocale(lang)) {
    return [{ title: `404 | ${SITE_NAME}` }, { name: "robots", content: "noindex" }]
  }

  const locale = toLocale(lang)
  const url = absoluteUrl(lang === undefined ? path : localizedPath(locale, path))
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`

  return [
    { title: fullTitle },
    { name: "description", content: description },
    ...(noindex
      ? [{ name: "robots", content: "noindex" }]
      : [
          { tagName: "link", rel: "canonical", href: url },
          ...alternatePaths(path).map((alternate) => ({
            tagName: "link",
            rel: "alternate",
            hrefLang: alternate.hreflang,
            href: absoluteUrl(alternate.path),
          })),
        ]),
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:locale", content: ogLocales[locale] },
    ...locales
      .filter((other) => other !== locale)
      .map((other) => ({ property: "og:locale:alternate", content: ogLocales[other] })),
    { property: "og:image", content: absoluteUrl(OG_IMAGE.path) },
    { property: "og:image:width", content: String(OG_IMAGE.width) },
    { property: "og:image:height", content: String(OG_IMAGE.height) },
    { property: "og:image:alt", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    ...(jsonLd ? [{ "script:ld+json": jsonLd }] : []),
  ]
}

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

/** sitemap.xml with hreflang alternates for every locale version of each page path. */
export const sitemapXml = (siteUrl: string, pagePaths: string[]) => {
  const entries = pagePaths.flatMap((path) => {
    const alternates = alternatePaths(path)
    const links = alternates
      .map(
        (a) =>
          `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${escapeXml(siteUrl + a.path)}"/>`,
      )
      .join("\n")

    return [...new Set(alternates.map((a) => a.path))].map(
      (loc) => `  <url>\n    <loc>${escapeXml(siteUrl + loc)}</loc>\n${links}\n  </url>`,
    )
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`
}

export const robotsTxt = (siteUrl: string) => `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
