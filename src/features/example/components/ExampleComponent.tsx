import { useState } from "react"

type ExampleComponentProps = {
  className?: string
}

export default function ExampleComponent({ className = "" }: ExampleComponentProps) {
  /* =========================================================
   * BASIC INTERACTIVE STATES
   * ======================================================= */

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("")
  const [isEnabled, setIsEnabled] = useState(false)
  const [progress, setProgress] = useState(40)

  /** Derived label from toggle state */
  const statusLabel = isEnabled ? "AKTIF" : "NON-AKTIF"

  return (
    <div className={`space-y-6 ${className}`}>
      {/* ================= HEADER ================= */}
      <section className="rounded-2xl border border-neutral-700 bg-neutral-800 p-5">
        <h2 className="text-xl font-semibold text-white">UI Example Component</h2>
        <p className="mt-1 text-sm text-neutral-300">
          Halaman ini berisi contoh berbagai komponen UI sederhana: counter, input, button, toggle,
          badge, alert, progress, dan kartu statistik.
        </p>
      </section>

      {/* ================= GRID SECTION ================= */}
      <section className="grid gap-4 md:grid-cols-2">
        {/* ========= COUNTER ========= */}
        <div className="rounded-2xl border border-neutral-700 bg-neutral-800 p-5">
          <h3 className="font-semibold text-white">Counter</h3>
          <p className="text-sm text-neutral-400">Contoh interaksi tombol dengan state.</p>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCounter((c) => c - 1)}
              className="rounded-full border border-neutral-600 px-3 py-1 text-sm hover:bg-neutral-700"
            >
              -1
            </button>

            <div className="min-w-[70px] rounded-xl bg-black px-4 py-2 text-center text-xl font-bold text-emerald-400">
              {counter}
            </div>

            <button
              type="button"
              onClick={() => setCounter((c) => c + 1)}
              className="rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-black hover:bg-emerald-400"
            >
              +1
            </button>
          </div>
        </div>

        {/* ========= INPUT PREVIEW ========= */}
        <div className="rounded-2xl border border-neutral-700 bg-neutral-800 p-5">
          <h3 className="font-semibold text-white">Text Input</h3>
          <p className="text-sm text-neutral-400">
            Demo controlled input dengan <code>useState</code>.
          </p>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Ketik sesuatu..."
            aria-label="Text input"
            className="mt-3 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />

          <div className="mt-3 rounded-xl bg-neutral-900 p-3 text-sm">
            Preview: <span className="font-semibold text-emerald-400">{name || "Belum diisi"}</span>
          </div>
        </div>
      </section>

      {/* ================= BUTTON VARIANTS ================= */}
      <section className="rounded-2xl border border-neutral-700 bg-neutral-800 p-5">
        <h3 className="font-semibold text-white">Button Variants</h3>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm hover:bg-blue-500"
          >
            Primary
          </button>
          <button
            type="button"
            className="rounded-xl bg-neutral-700 px-4 py-2 text-sm hover:bg-neutral-600"
          >
            Secondary
          </button>
          <button
            type="button"
            className="rounded-xl bg-emerald-600 px-4 py-2 text-sm hover:bg-emerald-500"
          >
            Success
          </button>
          <button
            type="button"
            className="rounded-xl bg-red-600 px-4 py-2 text-sm hover:bg-red-500"
          >
            Danger
          </button>
        </div>
      </section>

      {/* ================= TOGGLE & BADGE ================= */}
      <section className="grid gap-4 md:grid-cols-2">
        {/* Toggle */}
        <div className="rounded-2xl border border-neutral-700 bg-neutral-800 p-5">
          <h3 className="font-semibold text-white">Toggle</h3>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-neutral-300">
              Status:{" "}
              <span className={`font-semibold ${isEnabled ? "text-emerald-400" : "text-red-400"}`}>
                {statusLabel}
              </span>
            </span>

            <button
              type="button"
              role="switch"
              aria-checked={isEnabled}
              aria-label="Toggle status"
              onClick={() => setIsEnabled((v) => !v)}
              className="relative inline-flex h-6 w-11 items-center rounded-full border border-neutral-700 bg-neutral-900"
            >
              <span
                className={`h-4 w-4 rounded-full bg-white transition ${
                  isEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="rounded-2xl border border-neutral-700 bg-neutral-800 p-5">
          <h3 className="font-semibold text-white">Badges</h3>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-500 px-3 py-1 text-xs">Info</span>
            <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs">Success</span>
            <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs text-black">Warning</span>
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs">Error</span>
          </div>
        </div>
      </section>

      {/* ================= PROGRESS ================= */}
      <section className="rounded-2xl border border-neutral-700 bg-neutral-800 p-5">
        <h3 className="font-semibold text-white">Progress Bar</h3>

        <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-neutral-700">
          <div className="h-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }} />
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setProgress((p) => Math.max(0, p - 10))}
            className="rounded-xl bg-neutral-700 px-3 py-1 text-sm"
          >
            -10
          </button>
          <button
            type="button"
            onClick={() => setProgress((p) => Math.min(100, p + 10))}
            className="rounded-xl bg-emerald-600 px-3 py-1 text-sm"
          >
            +10
          </button>

          <span className="ml-auto text-sm text-neutral-300">{progress}%</span>
        </div>
      </section>

      {/* ================= ALERTS ================= */}
      <section className="grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-blue-700 bg-blue-900/40 p-4 text-sm">
          Ini adalah alert Info.
        </div>
        <div className="rounded-xl border border-emerald-700 bg-emerald-900/40 p-4 text-sm">
          Ini adalah alert Success.
        </div>
        <div className="rounded-xl border border-red-700 bg-red-900/40 p-4 text-sm">
          Ini adalah alert Error.
        </div>
      </section>
    </div>
  )
}
