export const ExamplePagePath = {
  EXAMPLE: "/example",
  EXAMPLE_FORM: "/example/form",
  EXAMPLE_TANSTACK: "/example/tanstack",
} as const

export type ExampleRequestPayload = {
  name: string
}

export type ExampleUser = {
  name: string
  age: number
  isLogin: boolean
}

export type ExampleTodo = {
  id: number
  title: string
  done: boolean
}
