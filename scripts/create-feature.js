import fs from "fs"
import path from "path"

const featureName = process.argv[2]

if (!featureName) {
  console.error("❌ Please provide a feature name. Example: npm run create-feature feature-a")
  process.exit(1)
}

if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(featureName)) {
  console.error("❌ Feature name must be kebab-case. Example: my-feature")
  process.exit(1)
}

// PascalCase: my-testing -> MyTesting
const pascalCase = featureName
  .split("-")
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  .join("")

// camelCase: my-testing -> myTesting
const camelCase = pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1)

// CONSTANT_CASE: my-testing -> MY_TESTING
const constantCase = featureName.toUpperCase().replace(/-/g, "_")

const baseDir = path.resolve("src/features", featureName)
const routerFilePath = path.resolve("src/routes.ts")

if (fs.existsSync(baseDir)) {
  console.error(`⚠️ Feature "${featureName}" already exists.`)
  process.exit(1)
}

// ==== TEMPLATES =====
const templates = {
  component: `import { useTranslation } from "react-i18next"

export default function ${pascalCase}Component() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-2xl font-bold">{t("features.${camelCase}.feature_title")}</h1>
    </div>
  )
}
`,

  language: `export default {
  feature_title: "This is ${pascalCase}",
}
`,

  model: `export const ${pascalCase}PagePath = {
  ${constantCase}: "/${featureName}",
} as const

export type ${pascalCase}RequestPayload = {
  name: string
}
`,

  route: `import { type RouteConfigEntry, route } from "@react-router/dev/routes"

import { ${pascalCase}PagePath } from "../models"

// Route module paths are relative to \`src/\` (appDirectory in react-router.config.ts)
const ${camelCase}Routes: RouteConfigEntry[] = [
  route(${pascalCase}PagePath.${constantCase}, "features/${featureName}/views/${pascalCase}View.tsx"),
]

export default ${camelCase}Routes
`,

  service: `import axiosInstance from "@/plugins/axios"
import type { ApiResponse, CustomAxiosRequestConfig } from "@/shared/models/api"

import type { ${pascalCase}RequestPayload } from "../models"

export const ${camelCase}Request = async (payload: ${pascalCase}RequestPayload): Promise<ApiResponse> => {
  const configRequest: CustomAxiosRequestConfig<${pascalCase}RequestPayload> = {
    url: "/${featureName}/request",
    method: "POST",
    data: payload,
    meta: {
      requiresAuth: true,
    },
  }
  const { data } = await axiosInstance.request<ApiResponse>(configRequest)
  return data
}
`,

  view: `import ${pascalCase}Component from "../components/${pascalCase}Component"
import type { Route } from "./+types/${pascalCase}View"

export default function ${pascalCase}View() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 text-gray-100">
      <${pascalCase}Component />
    </div>
  )
}

// Rendered into <head> at build time (prerender), so search engines see it
export const meta: Route.MetaFunction = () => [
  { title: "${pascalCase}" },
  { name: "description", content: "${pascalCase} page." },
]
`,
}

// Folder & file structure
const structure = {
  components: { [`${pascalCase}Component.tsx`]: templates.component },
  languages: {
    [`${featureName}.en.ts`]: templates.language,
    [`${featureName}.id.ts`]: templates.language,
  },
  models: { "index.ts": templates.model },
  routes: { "index.ts": templates.route },
  services: { "api.ts": templates.service },
  stores: {},
  views: { [`${pascalCase}View.tsx`]: templates.view },
}

// ==== CREATE FEATURE FOLDERS & FILES ====
fs.mkdirSync(baseDir, { recursive: true })
Object.entries(structure).forEach(([folder, files]) => {
  const folderPath = path.join(baseDir, folder)
  fs.mkdirSync(folderPath, { recursive: true })
  Object.entries(files).forEach(([filename, content]) => {
    fs.writeFileSync(path.join(folderPath, filename), content)
  })
})

console.log(`✅ Feature "${featureName}" created successfully at src/features/${featureName}`)

/**
 * Insert an import statement after the last existing import.
 */
function addImport(content, importStatement) {
  if (content.includes(importStatement)) return content

  const importLines = content.match(/^import.*$/gm) || []
  const lastImport = importLines[importLines.length - 1]

  return lastImport
    ? content.replace(lastImport, `${lastImport}\n${importStatement}`)
    : `${importStatement}\n${content}`
}

// ==== UPDATE LOCALES (id & en) ====
const localeConfigs = ["id", "en"]

function updateLocaleFile(locale) {
  const relativePath = `src/plugins/language/locales/${locale}.ts`
  const localeFilePath = path.resolve(relativePath)

  if (!fs.existsSync(localeFilePath)) {
    console.warn(`⚠️ File ${relativePath} not found, skip.`)
    return
  }

  let localeContent = addImport(
    fs.readFileSync(localeFilePath, "utf-8"),
    `import ${camelCase} from "@/features/${featureName}/languages/${featureName}.${locale}"`,
  )

  const featuresRegex = /features:\s*{([\s\S]*?)}/m
  const featuresMatch = localeContent.match(featuresRegex)

  if (featuresMatch) {
    const featuresContent = featuresMatch[1].trimEnd()

    if (!new RegExp(`\\b${camelCase}\\b`).test(featuresContent)) {
      localeContent = localeContent.replace(
        featuresRegex,
        `features: {${featuresContent}\n    ${camelCase},\n  }`,
      )
    }
  } else {
    console.warn(`⚠️ Object 'features' not found in ${relativePath}`)
  }

  fs.writeFileSync(localeFilePath, localeContent, "utf-8")
  console.log(`✅ Added ${camelCase} language to ${relativePath}`)
}

localeConfigs.forEach(updateLocaleFile)

// ==== UPDATE ROUTER ====
if (fs.existsSync(routerFilePath)) {
  let routerContent = addImport(
    fs.readFileSync(routerFilePath, "utf-8"),
    `import ${camelCase}Routes from "./features/${featureName}/routes"`,
  )

  const spreadStatement = `...${camelCase}Routes`
  const listRoutesRegex = /const\s+listRoutes\s*=\s*\[([\s\S]*?)\]/
  const listRoutesMatch = routerContent.match(listRoutesRegex)

  if (listRoutesMatch) {
    const items = listRoutesMatch[1]
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)

    if (!items.includes(spreadStatement)) {
      // Feature routes go before the shared (fallback) routes
      const sharedIndex = items.indexOf("...utilRoutes")
      items.splice(sharedIndex === -1 ? items.length : sharedIndex, 0, spreadStatement)

      routerContent = routerContent.replace(
        listRoutesRegex,
        `const listRoutes = [\n  ${items.join(",\n  ")},\n]`,
      )
    }
  } else {
    console.warn("⚠️ Could not find 'listRoutes' array in src/routes.ts")
  }

  fs.writeFileSync(routerFilePath, routerContent, "utf-8")
  console.log(`✅ Added ${camelCase}Routes to src/routes.ts`)
} else {
  console.warn("⚠️ src/routes.ts not found, skipping route registration.")
}
