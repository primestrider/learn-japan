import { useTranslation } from "react-i18next"

import type { LocalizedVocabItem } from "../models"
import SpeakButton from "./SpeakButton"

export default function VocabTable({ items }: { items: LocalizedVocabItem[] }) {
  const { t } = useTranslation()

  return (
    <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
      <table className="w-full text-left">
        <thead className="bg-stone-100 text-sm text-stone-600">
          <tr>
            <th scope="col" className="px-4 py-2 font-medium">
              {t("features.lessons.table.japanese")}
            </th>
            <th scope="col" className="px-4 py-2 font-medium">
              {t("features.lessons.table.romaji")}
            </th>
            <th scope="col" className="px-4 py-2 font-medium">
              {t("features.lessons.table.meaning")}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100">
          {items.map((item) => (
            <tr key={`${item.jp}-${item.romaji}`}>
              <td className="px-4 py-2 align-top">
                <div className="flex items-start gap-1">
                  <div>
                    <span lang="ja" className="block text-lg">
                      {item.jp}
                    </span>
                    {item.kana && (
                      <span lang="ja" className="block text-sm text-stone-500">
                        {item.kana}
                      </span>
                    )}
                  </div>
                  <SpeakButton text={item.kana ?? item.jp} label={item.jp} />
                </div>
              </td>
              <td className="px-4 py-2 align-top text-red-800 italic">{item.romaji}</td>
              <td className="px-4 py-2 align-top">{item.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
