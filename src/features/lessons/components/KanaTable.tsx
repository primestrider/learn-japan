import { useTranslation } from "react-i18next"

import { speakJapanese, useSpeechStatus } from "@/plugins/speech"

import type { KanaCell } from "../models"

/** Kana chart: each cell shows the character and its romaji; tap a cell to hear it */
export default function KanaTable({ rows }: { rows: KanaCell[][] }) {
  const { t } = useTranslation()
  const canSpeak = useSpeechStatus() === "ready"

  return (
    <div className="overflow-x-auto">
      <table className="mx-auto border-separate border-spacing-1.5">
        <tbody>
          {rows.map((cells, rowIndex) => (
            <tr key={rowIndex}>
              {cells.map((cell, cellIndex) => (
                <td key={cellIndex} className="h-16 w-16 p-0 sm:h-20 sm:w-20">
                  {cell && (
                    <button
                      type="button"
                      onClick={() => speakJapanese(cell.kana)}
                      disabled={!canSpeak}
                      aria-label={
                        canSpeak ? t("features.lessons.audio.play", { text: cell.kana }) : undefined
                      }
                      className="h-full w-full rounded-lg border border-stone-200 bg-white text-center transition-colors enabled:hover:border-red-800 enabled:hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-red-800 focus-visible:outline-none disabled:cursor-default"
                    >
                      <span lang="ja" className="block text-2xl leading-tight sm:text-3xl">
                        {cell.kana}
                      </span>
                      <span className="block text-xs text-stone-500 sm:text-sm">{cell.romaji}</span>
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
