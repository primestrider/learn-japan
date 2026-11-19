// Build-time data: imported by route loaders and react-router.config.ts only,
// so lesson bodies are baked into prerendered HTML instead of the JS bundle.
import type { Lesson, LessonSummary } from "../models"
import adjectives from "./lessons/adjectives"
import demonstratives from "./lessons/demonstratives"
import existence from "./lessons/existence"
import greetings from "./lessons/greetings"
import hiragana from "./lessons/hiragana"
import introduction from "./lessons/introduction"
import katakana from "./lessons/katakana"
import numbers from "./lessons/numbers"
import particles from "./lessons/particles"
import selfIntroduction from "./lessons/self-introduction"
import specialSounds from "./lessons/special-sounds"
import timeAndDays from "./lessons/time-and-days"
import verbsMasu from "./lessons/verbs-masu"

/** Curriculum in learning order */
export const lessons: Lesson[] = [
  introduction,
  hiragana,
  specialSounds,
  katakana,
  greetings,
  numbers,
  timeAndDays,
  selfIntroduction,
  demonstratives,
  particles,
  verbsMasu,
  adjectives,
  existence,
]

const toSummary = ({ slug, unit, title, description }: Lesson, index: number): LessonSummary => ({
  slug,
  unit,
  title,
  description,
  number: index + 1,
})

export const lessonSummaries = (): LessonSummary[] => lessons.map(toSummary)

/** Lesson with its neighbours, or null for an unknown slug */
export const findLesson = (slug: string | undefined) => {
  const index = lessons.findIndex((lesson) => lesson.slug === slug)
  if (index === -1) return null

  return {
    lesson: lessons[index],
    number: index + 1,
    prev: index > 0 ? toSummary(lessons[index - 1], index - 1) : null,
    next: index < lessons.length - 1 ? toSummary(lessons[index + 1], index + 1) : null,
  }
}
