import js from "@eslint/js"
import prettier from "eslint-config-prettier"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  globalIgnores(["dist", "build", ".react-router"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    rules: {
      // Route modules export these next to the default component
      "react-refresh/only-export-components": [
        "warn",
        {
          allowExportNames: [
            "meta",
            "links",
            "headers",
            "handle",
            "loader",
            "clientLoader",
            "action",
            "clientAction",
            "ErrorBoundary",
            "HydrateFallback",
            "Layout",
            "shouldRevalidate",
          ],
        },
      ],
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
])
