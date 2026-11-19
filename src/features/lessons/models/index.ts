// Relative import: also loaded by react-router.config.ts (no "@" alias there)
import type { Delocalized, Localized } from "../../../plugins/language/config"

export type { Localized }

export const LessonsPagePath = {
  LESSON: "/lessons/:slug",
} as const

export const lessonPath = (slug: string) => `/lessons/${slug}`

export type JapaneseText = {
  /** As written (kana and/or kanji) */
  jp: string
  /** Full reading in kana, only when `jp` contains kanji */
  kana?: string
  romaji: string
}

export type VocabItem = JapaneseText & {
  meaning: Localized
}

export type ExampleSentence = JapaneseText & {
  meaning: Localized
  note?: Localized
}

/** `null` = empty cell in a kana chart */
export type KanaCell = { kana: string; romaji: string } | null

export type LessonSection =
  | { type: "text"; heading?: Localized; paragraphs: Localized<string[]> }
  | { type: "kana"; heading: Localized; description?: Localized; rows: KanaCell[][] }
  | { type: "vocab"; heading: Localized; items: VocabItem[] }
  | { type: "examples"; heading: Localized; items: ExampleSentence[] }
  | {
      type: "pattern"
      heading: Localized
      /** e.g. "N1 は N2 です"; localize it when it contains words like "(place)" */
      pattern: string | Localized
      explanation: Localized
      examples: ExampleSentence[]
    }
  | { type: "tip"; content: Localized }

export type UnitId = "letters" | "everyday" | "grammar"

export type Lesson = {
  /** URL segment, shared by every locale */
  slug: string
  unit: UnitId
  /** H1 and <title> */
  title: Localized
  /** Meta description, ~150–160 characters */
  description: Localized
  /** Opening paragraph */
  intro: Localized
  sections: LessonSection[]
}

/** What lists and prev/next links need, without the lesson body */
export type LessonSummary = Pick<Lesson, "slug" | "unit" | "title" | "description"> & {
  number: number
}

/** Lesson content in a single language, as sent to a page (see `pickLocale`) */
export type LocalizedLesson = Delocalized<Lesson>
export type LocalizedSection = Delocalized<LessonSection>
export type LocalizedVocabItem = Delocalized<VocabItem>
export type LocalizedExample = Delocalized<ExampleSentence>
export type LocalizedLessonSummary = Delocalized<LessonSummary>
