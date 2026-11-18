import ExampleComponent from "../components/ExampleComponent"
import type { Route } from "./+types/ExampleView"

export default function ExampleView() {
  return (
    <div className="max-w-4xl bg-neutral-800">
      <h1 className="text-3xl text-white">This is Example View</h1>

      <ExampleComponent className="mt-5" />
    </div>
  )
}

export const meta: Route.MetaFunction = () => [
  { title: "Example" },
  { name: "description", content: "Example page." },
]
