import type { Config } from "@react-router/dev/config"

export default {
  appDirectory: "src",
  // Static output (build/client): every static route is prerendered to HTML at build time.
  // Unknown/non-prerendered URLs fall back to build/client/__spa-fallback.html.
  // Switch to `ssr: true` only when pages need per-request server rendering.
  ssr: false,
  // `true` prerenders all routes without dynamic segments. For dynamic routes
  // (e.g. /kanji/:id) return the full list of URLs from an async function instead.
  prerender: true,
} satisfies Config
