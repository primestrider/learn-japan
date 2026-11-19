import { useTranslation } from "react-i18next"
import { Link, data } from "react-router"

import { localizedPath, pickLocale, toLocale } from "@/plugins/language/config"
import { SITE_NAME, absoluteUrl, seo } from "@/shared/helpers/seo"
import { useLocalePath } from "@/shared/hooks/useLocale"
import { UtilsPagePath } from "@/shared/models"

import LessonSectionView from "../components/LessonSectionView"
import SpeechNotice from "../components/SpeechNotice"
import { findLesson } from "../data"
import { units } from "../data/units"
import { lessonPath } from "../models"
import type { Route } from "./+types/LessonView"

// Runs at build time (prerender): the lesson ends up in the HTML, not in the JS
// bundle, and only in the page's own language
export function loader({ params }: Route.LoaderArgs) {
  const found = findLesson(params.slug)

  if (!found) throw data(null, { status: 404 })

  const unit = units.find((item) => item.id === found.lesson.unit)!

  return pickLocale({ ...found, unit, locale: toLocale(params.lang) }, toLocale(params.lang))
}

export default function LessonView({ loaderData }: Route.ComponentProps) {
  const { lesson, number, prev, next, unit } = loaderData
  const { t } = useTranslation()
  const localePath = useLocalePath()

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-stone-500">
        <Link to={localePath(UtilsPagePath.LANDING_PAGE)} className="hover:text-red-800">
          {t("utils.nav.home")}
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{unit.title}</span>
      </nav>

      <header className="mb-10">
        <p className="mb-2 text-sm font-semibold tracking-wide text-red-800 uppercase">
          {t("features.lessons.lesson_number", { number })}
        </p>
        <h1 className="mb-4 text-3xl font-extrabold text-stone-900 sm:text-4xl">{lesson.title}</h1>
        <p className="text-lg leading-relaxed text-stone-700">{lesson.intro}</p>
      </header>

      <SpeechNotice />

      <div className="space-y-10">
        {lesson.sections.map((section, index) => (
          <LessonSectionView key={index} section={section} />
        ))}
      </div>

      <nav
        aria-label={t("features.lessons.all_lessons")}
        className="mt-14 grid gap-3 border-t border-stone-200 pt-8 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            to={localePath(lessonPath(prev.slug))}
            rel="prev"
            className="rounded-xl border border-stone-200 bg-white p-4 hover:border-red-800"
          >
            <span className="block text-sm text-stone-500">← {t("features.lessons.prev")}</span>
            <span className="font-semibold">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to={localePath(lessonPath(next.slug))}
            rel="next"
            className="rounded-xl border border-stone-200 bg-white p-4 text-right hover:border-red-800"
          >
            <span className="block text-sm text-stone-500">{t("features.lessons.next")} →</span>
            <span className="font-semibold">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  )
}

export const meta: Route.MetaFunction = ({ params, loaderData }) => {
  if (!loaderData) {
    return seo({ lang: params.lang, path: "/404", title: "404", description: "", noindex: true })
  }

  const { lesson, unit, locale } = loaderData
  const path = lessonPath(lesson.slug)

  return seo({
    lang: params.lang,
    path,
    title: lesson.title,
    description: lesson.description,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LearningResource",
          name: lesson.title,
          description: lesson.description,
          url: absoluteUrl(localizedPath(locale, path)),
          inLanguage: locale,
          learningResourceType: "Lesson",
          educationalLevel: "Beginner",
          teaches: unit.title,
          isAccessibleForFree: true,
          provider: { "@type": "Organization", name: SITE_NAME },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: SITE_NAME,
              item: absoluteUrl(localizedPath(locale, UtilsPagePath.LANDING_PAGE)),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: lesson.title,
              item: absoluteUrl(localizedPath(locale, path)),
            },
          ],
        },
      ],
    },
  })
}
