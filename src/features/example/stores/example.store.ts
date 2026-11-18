import { create } from "zustand"

import type { ExampleTodo, ExampleUser } from "../models"

type ExampleState = {
  /** Counter value */
  count: number
  /** Currently logged-in user data */
  user: ExampleUser
  /** Todo list */
  exampleTodos: ExampleTodo[]

  /** Increase count value by 1 */
  increment: () => void
  /** Decrease count value by 1 (never below zero) */
  decrement: () => void
  /** Log in user by updating username and login status */
  login: (name: string) => void
  /** Log out the current user */
  logout: () => void
  /** Add a new todo */
  addTodo: (title: string) => void
  /** Toggle todo status (completed / not completed) */
  toggleTodo: (id: number) => void
  /** Remove a todo by its ID */
  removeTodo: (id: number) => void
}

export const useExampleStore = create<ExampleState>()((set) => ({
  count: 0,
  user: {
    name: "John Doe",
    age: 25,
    isLogin: false,
  },
  exampleTodos: [
    { id: 1, title: "Learning React", done: false },
    { id: 2, title: "Learning Typescript", done: true },
    { id: 3, title: "Learning Axios", done: true },
  ],

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: Math.max(0, state.count - 1) })),
  login: (name) => set((state) => ({ user: { ...state.user, name, isLogin: true } })),
  logout: () => set((state) => ({ user: { ...state.user, isLogin: false } })),
  addTodo: (title) =>
    set((state) => ({
      exampleTodos: [...state.exampleTodos, { id: Date.now(), title, done: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      exampleTodos: state.exampleTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({ exampleTodos: state.exampleTodos.filter((todo) => todo.id !== id) })),
}))

/* =========================================================
 * SELECTORS (derived state / "getters")
 * ======================================================= */

export const selectDoubleCount = (state: ExampleState) => state.count * 2

export const selectIsAuthenticated = (state: ExampleState) => state.user.isLogin
