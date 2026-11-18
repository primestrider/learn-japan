import { NavLink, Outlet } from "react-router"

import { ExamplePagePath } from "../models"

type TabItem = { label: string; path: string }

const tabs: TabItem[] = [
  { label: "Example", path: ExamplePagePath.EXAMPLE },
  { label: "Example Form", path: ExamplePagePath.EXAMPLE_FORM },
  { label: "Example Tanstack", path: ExamplePagePath.EXAMPLE_TANSTACK },
]

export default function ExampleLayout() {
  return (
    <div className="min-h-screen bg-neutral-900 px-2 py-5 text-neutral-100 md:px-4 md:py-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-neutral-800 p-2 md:p-4">
        {/* Tabs (stacked vertically on small screens) */}
        <nav className="flex flex-col gap-3 rounded-xl border border-neutral-700 bg-neutral-800 p-2 sm:flex-row md:p-4">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end
              className={({ isActive }) =>
                `w-full rounded-full py-2.5 text-center text-sm leading-5 font-medium transition-colors duration-150 focus:outline-none ${
                  isActive
                    ? "bg-black text-neutral-50 shadow-lg"
                    : "bg-neutral-700 text-neutral-300 hover:bg-neutral-600 hover:text-neutral-50"
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        {/* Content area */}
        <div className="mt-2 rounded-xl border border-neutral-700 p-2 md:p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
