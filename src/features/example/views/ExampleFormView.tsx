import ExampleForm from "../components/ExampleForm"
import type { Route } from "./+types/ExampleFormView"

export default function ExampleFormView() {
  return (
    <div className="flex flex-col gap-2">
      <ExampleForm />
    </div>
  )
}

export const meta: Route.MetaFunction = () => [
  { title: "Example Form" },
  { name: "description", content: "Example form page." },
]
