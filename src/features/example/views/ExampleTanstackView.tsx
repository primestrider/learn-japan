import CommentsComponent from "../components/tanstack/CommentsComponent"
import PostsComponent from "../components/tanstack/PostsComponent"
import type { Route } from "./+types/ExampleTanstackView"

export default function ExampleTanstackView() {
  return (
    <section className="space-y-6 p-4 text-slate-100">
      <header>
        <h2 className="text-xl font-semibold">TanStack Query JSONPlaceholder Demo</h2>
      </header>

      <PostsComponent />
      <CommentsComponent />
    </section>
  )
}

export const meta: Route.MetaFunction = () => [
  { title: "Example Tanstack" },
  { name: "description", content: "Example TanStack Query page." },
]
