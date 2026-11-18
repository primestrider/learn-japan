import { Link } from "react-router"

import { ExamplePagePath } from "@/features/example/models"

import type { Route } from "./+types/LandingPageView"

export default function LandingPageView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 text-gray-100">
      <div className="max-w-2xl animate-fade-in text-center">
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight">
          <span className="text-sky-400">React</span> Boilerplate
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          A clean and scalable starting point built with{" "}
          <span className="font-semibold text-sky-400">React 19</span>,{" "}
          <span className="font-semibold text-sky-400">TypeScript</span>, and{" "}
          <span className="font-semibold text-sky-400">Tailwind CSS v4</span>.
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-2">
          <p className="text-base text-gray-400">
            💡 You can generate a new feature instantly with:
          </p>
          <code className="w-fit rounded-md bg-gray-800 px-3 py-1 text-sky-400">
            npm run create-feature my-feature
          </code>
        </div>

        <Link
          to={ExamplePagePath.EXAMPLE}
          className="inline-block cursor-pointer rounded-xl bg-sky-600 px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-sky-700 hover:shadow-lg"
        >
          Check Example Page
        </Link>
      </div>

      <footer className="mt-20 animate-fade-in-slow text-sm text-gray-500">
        <p>© {new Date().getFullYear()} crafted with React 19 + Tailwind 4</p>
      </footer>
    </div>
  )
}

export const meta: Route.MetaFunction = () => [
  { title: "React Boilerplate" },
  {
    name: "description",
    content:
      "A clean and scalable starting point built with React 19, TypeScript, and Tailwind CSS v4.",
  },
]
