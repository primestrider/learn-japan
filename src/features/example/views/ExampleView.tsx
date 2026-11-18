import ExampleComponent from "../components/ExampleComponent"

export default function ExampleView() {
  return (
    <div className="max-w-4xl bg-neutral-800">
      <h1 className="text-3xl text-white">This is Example View</h1>

      <ExampleComponent className="mt-5" />
    </div>
  )
}
