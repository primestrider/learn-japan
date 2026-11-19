import type { Config } from "@react-router/dev/config"
import { copyFile, writeFile } from "node:fs/promises"
import path from "node:path"

import { lessons } from "./src/features/lessons/data"
import { lessonPath } from "./src/features/lessons/models"
import { locales, localizedPath } from "./src/plugins/language/config"
import { listRoutes } from "./src/routes"
import { getPagePaths } from "./src/shared/helpers/route"
import { robotsTxt, sitemapXml } from "./src/shared/helpers/seo"

/** Every page (without locale prefix): static routes + one per lesson */
const pagePaths = [...getPagePaths(listRoutes), ...lessons.map((lesson) => lessonPath(lesson.slug))]

export default {
  appDirectory: "src",
  // Static output (build/client): pages are prerendered to HTML at build time.
  // Switch to `ssr: true` only when pages need per-request server rendering.
  ssr: false,
  // "/" (language picker) + every page in every locale. Dynamic routes
  // (e.g. /lessons/:slug) must list their URLs in `pagePaths`.
  prerender: [
    "/",
    ...locales.flatMap((locale) => pagePaths.map((page) => localizedPath(locale, page))),
  ],
  async buildEnd({ reactRouterConfig, viteConfig }) {
    const siteUrl = viteConfig.env.VITE_WEB_URL?.replace(/\/+$/, "")

    if (!siteUrl || !/^https?:\/\/[^/]+/.test(siteUrl)) {
      throw new Error(
        "VITE_WEB_URL must be the absolute site URL (e.g. https://example.com). " +
          "It is used for canonical, hreflang and sitemap URLs.",
      )
    }

    const clientDir = path.join(reactRouterConfig.buildDirectory, "client")

    await writeFile(path.join(clientDir, "sitemap.xml"), sitemapXml(siteUrl, pagePaths))
    await writeFile(path.join(clientDir, "robots.txt"), robotsTxt(siteUrl))
    // Static hosts serve 404.html with a real 404 status for unknown URLs;
    // the app shell then renders the not-found page on the client.
    await copyFile(path.join(clientDir, "__spa-fallback.html"), path.join(clientDir, "404.html"))
  },
} satisfies Config
