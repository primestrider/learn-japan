import { useTranslation } from "react-i18next"

import type { LocalizedSection } from "../models"
import ExampleList from "./ExampleList"
import KanaTable from "./KanaTable"
import VocabTable from "./VocabTable"

export default function LessonSectionView({ section }: { section: LocalizedSection }) {
  const { t } = useTranslation()

  if (section.type === "tip") {
    return (
      <aside className="rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="mb-1 text-sm font-semibold text-amber-800">💡 {t("features.lessons.tip")}</p>
        <p>{section.content}</p>
      </aside>
    )
  }

  return (
    <section className="space-y-4">
      {section.heading && <h2 className="text-2xl font-bold text-stone-900">{section.heading}</h2>}

      {section.type === "text" &&
        section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed">
            {paragraph}
          </p>
        ))}

      {section.type === "kana" && (
        <>
          {section.description && <p className="leading-relaxed">{section.description}</p>}
          <KanaTable rows={section.rows} />
        </>
      )}

      {section.type === "vocab" && <VocabTable items={section.items} />}

      {section.type === "examples" && <ExampleList items={section.items} />}

      {section.type === "pattern" && (
        <>
          <p className="rounded-xl bg-red-800 px-4 py-3 text-center text-lg font-medium text-white">
            {section.pattern}
          </p>
          <p className="leading-relaxed">{section.explanation}</p>
          <ExampleList items={section.examples} />
        </>
      )}
    </section>
  )
}
