import { useTranslation } from "react-i18next"

import { speakJapanese, useSpeechStatus } from "@/plugins/speech"

type Props = {
  /** Japanese text to read; pass the kana reading when there is one so kanji are never misread */
  text: string
  /** Visible Japanese, used in the accessible label */
  label: string
}

/** Sound button; hidden on devices without a Japanese voice (SpeechNotice explains why) */
export default function SpeakButton({ text, label }: Props) {
  const { t } = useTranslation()
  const status = useSpeechStatus()

  if (status === "unsupported") return null

  const description = t("features.lessons.audio.play", { text: label })

  return (
    <button
      type="button"
      onClick={() => speakJapanese(text)}
      disabled={status !== "ready"}
      aria-label={description}
      title={description}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-red-800 transition-colors hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-red-800 focus-visible:outline-none disabled:opacity-40"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
        <path d="M11 5 6 9H3v6h3l5 4z" strokeWidth="2" strokeLinejoin="round" />
        <path
          d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}
