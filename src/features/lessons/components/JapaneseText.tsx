import type { JapaneseText as JapaneseTextData } from "../models"

type Props = JapaneseTextData & { size?: "md" | "lg" }

/** Japanese line with optional kana reading and romaji underneath */
export default function JapaneseText({ jp, kana, romaji, size = "md" }: Props) {
  return (
    <div>
      <p lang="ja" className={size === "lg" ? "text-2xl" : "text-lg"}>
        {jp}
      </p>
      {kana && (
        <p lang="ja" className="text-sm text-stone-500">
          {kana}
        </p>
      )}
      <p className="text-sm text-red-800 italic">{romaji}</p>
    </div>
  )
}
