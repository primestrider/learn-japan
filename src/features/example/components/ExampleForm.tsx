import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

import BaseFormField from "@/shared/components/BaseFormField"

import {
  type LoginFormValues,
  type TodoFormValues,
  loginZodSchema,
  todoZodSchema,
} from "../models/form.schema"
import { selectIsAuthenticated, useExampleStore } from "../stores/example.store"

const inputClassName =
  "mt-2 block w-full rounded-full bg-neutral-700 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-600"

const submitClassName =
  "inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"

export default function ExampleForm() {
  const { t } = useTranslation()

  /**
   * Example Zustand store: single source of truth for
   * user, authentication state, and todo list.
   */
  const user = useExampleStore((state) => state.user)
  const isAuthenticated = useExampleStore(selectIsAuthenticated)
  const exampleTodos = useExampleStore((state) => state.exampleTodos)
  const login = useExampleStore((state) => state.login)
  const addTodo = useExampleStore((state) => state.addTodo)
  const toggleTodo = useExampleStore((state) => state.toggleTodo)
  const removeTodo = useExampleStore((state) => state.removeTodo)

  /**
   * Login form instance (validated with zod).
   *
   * Backend errors: call `setError("name", { type: "server", message })`.
   * react-hook-form clears it automatically when the field is re-validated.
   */
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginZodSchema),
    mode: "onBlur",
    defaultValues: { name: "" },
  })

  const handleLogin = loginForm.handleSubmit((values) => {
    login(values.name)
  })

  /** Todo form instance */
  const todoForm = useForm<TodoFormValues>({
    resolver: zodResolver(todoZodSchema),
    mode: "onBlur",
    defaultValues: { title: "" },
  })

  const handleAddTodo = todoForm.handleSubmit((values) => {
    addTodo(values.title)
    todoForm.reset()
  })

  return (
    <section className="flex flex-col gap-3 text-slate-100">
      <h2 className="text-xl font-semibold">{t("features.example.form.title")}</h2>

      {/* ================= LOGIN FORM ================= */}
      <div className="space-y-4 rounded-xl border border-neutral-700 p-4 shadow-lg">
        <h3 className="text-lg font-semibold">{t("features.example.form.login_title")}</h3>

        <form onSubmit={handleLogin} className="space-y-3" noValidate>
          <BaseFormField
            label={t("features.example.form.input.name.label")}
            fieldName="name"
            required
            error={loginForm.formState.errors.name?.message}
          >
            <input
              id="name"
              type="text"
              className={inputClassName}
              {...loginForm.register("name")}
            />
          </BaseFormField>

          <button type="submit" className={submitClassName}>
            {t("features.example.form.button.login")}
          </button>
        </form>

        <p className="text-sm text-slate-400">
          Current user: <span className="font-medium text-slate-100">{user.name}</span>
          {isAuthenticated ? (
            <span className="ml-1 text-green-400">(logged in)</span>
          ) : (
            <span className="ml-1 text-red-400">(not logged in)</span>
          )}
        </p>
      </div>

      {/* ================= TODO FORM ================= */}
      <div className="space-y-4 rounded-xl border border-neutral-700 p-4 shadow-lg">
        <h3 className="text-lg font-semibold">Add Todo</h3>

        <form onSubmit={handleAddTodo} className="space-y-3" noValidate>
          <BaseFormField
            label="Todo Title"
            fieldName="title"
            required
            error={todoForm.formState.errors.title?.message}
          >
            <input
              id="title"
              type="text"
              className={inputClassName}
              {...todoForm.register("title")}
            />
          </BaseFormField>

          <button type="submit" className={submitClassName}>
            Add Todo
          </button>
        </form>

        <ul className="space-y-2 text-sm">
          {exampleTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded-full bg-neutral-700 px-3 py-2"
            >
              <span
                className={`truncate ${todo.done ? "text-slate-500 line-through" : "text-slate-100"}`}
              >
                {todo.title}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-xs font-medium text-blue-400 hover:text-blue-300"
                  onClick={() => toggleTodo(todo.id)}
                >
                  toggle
                </button>
                <button
                  type="button"
                  className="text-xs font-medium text-red-400 hover:text-red-300"
                  onClick={() => removeTodo(todo.id)}
                >
                  remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
