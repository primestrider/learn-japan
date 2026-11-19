import { useTranslation } from "react-i18next"

import { useSpeechStatus } from "@/plugins/speech"

/** Explains why there are no sound buttons on this device */
export default function SpeechNotice() {
  const { t } = useTranslation()
  const status = useSpeechStatus()

  if (status !== "unsupported") return null

  return (
    <p
      role="status"
      className="mb-8 rounded-xl border border-stone-200 bg-stone-100 p-4 text-sm text-stone-600"
    >
      {t("features.lessons.audio.unavailable")}
    </p>
  )
}
