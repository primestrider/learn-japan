import { useSyncExternalStore } from "react"

/**
 * Japanese text-to-speech with the browser's Web Speech API.
 * - "pending": not known yet (prerender, first client render, voices still loading)
 * - "ready": a Japanese voice is available
 * - "unsupported": no Web Speech API, or no Japanese voice on this device
 */
export type SpeechStatus = "pending" | "ready" | "unsupported"

/** Some browsers never fire `voiceschanged` when they have no voices */
const VOICE_WAIT_MS = 3000
/** Slightly slower than normal, for learners */
const RATE = 0.9

let status: SpeechStatus = "pending"
let voice: SpeechSynthesisVoice | null = null
let settled = false
let started = false
const listeners = new Set<() => void>()

const isJapanese = (candidate: SpeechSynthesisVoice) =>
  candidate.lang.replace("_", "-").toLowerCase().startsWith("ja")

const refresh = () => {
  voice = speechSynthesis.getVoices().find(isJapanese) ?? null
  status = voice ? "ready" : settled ? "unsupported" : "pending"
  listeners.forEach((listener) => listener())
}

const start = () => {
  if (started) return
  started = true

  if (!("speechSynthesis" in window)) {
    status = "unsupported"
    return
  }

  // Voices load asynchronously in most browsers
  speechSynthesis.onvoiceschanged = refresh
  setTimeout(() => {
    settled = true
    refresh()
  }, VOICE_WAIT_MS)
  refresh()
}

const subscribe = (listener: () => void) => {
  start()
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/** Status of Japanese speech; always "pending" during prerender and hydration */
export const useSpeechStatus = () =>
  useSyncExternalStore(
    subscribe,
    () => status,
    (): SpeechStatus => "pending",
  )

/**
 * Lesson text -> what the voice should read: drops dialogue labels ("A: ", "B: ")
 * and the "～" placeholder, and reads "なん / なに" as two words.
 */
export const toSpeechText = (text: string) =>
  text
    .replace(/(^|\s)[A-Z]:\s*/g, "$1")
    .replace(/\s*\/\s*/g, "、")
    .replace(/～/g, "")
    .trim()

/** Read Japanese text aloud; stops whatever is playing. No-op without a Japanese voice. */
export const speakJapanese = (text: string) => {
  if (!voice) return

  speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(toSpeechText(text))
  utterance.voice = voice
  utterance.lang = voice.lang
  utterance.rate = RATE
  speechSynthesis.speak(utterance)
}
