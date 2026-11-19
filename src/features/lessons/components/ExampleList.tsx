import { useTranslation } from "react-i18next"

import type { LocalizedExample } from "../models"
import JapaneseText from "./JapaneseText"
import SpeakButton from "./SpeakButton"

export default function ExampleList({ items }: { items: LocalizedExample[] }) {
  const { t } = useTranslation()

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.jp} className="rounded-xl border border-stone-200 bg-white p-4">
          <div className="flex items-start justify-between gap-3">
            <JapaneseText jp={item.jp} kana={item.kana} romaji={item.romaji} />
            <SpeakButton text={item.kana ?? item.jp} label={item.jp} />
          </div>
          <p className="mt-2">{item.meaning}</p>
          {item.note && (
            <p className="mt-2 border-l-2 border-stone-300 pl-3 text-sm text-stone-600">
              <span className="font-medium">{t("features.lessons.note")}:</span> {item.note}
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}
