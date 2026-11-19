import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import { lessonSummaries } from "@/features/lessons/data"
import { units } from "@/features/lessons/data/units"
import { lessonPath } from "@/features/lessons/models"
import { getI18n } from "@/plugins/language"
import { localizedPath, pickLocale, toLocale } from "@/plugins/language/config"
import { SITE_NAME, absoluteUrl, seo } from "@/shared/helpers/seo"
import { useLocalePath } from "@/shared/hooks/useLocale"

import { UtilsPagePath } from "../models"
import type { Route } from "./+types/LandingPageView"

// Build time only: curriculum overview without lesson bodies
export function loader({ params }: Route.LoaderArgs) {
  const lessons = lessonSummaries()

  return pickLocale(
    {
      units: units.map((unit) => ({
        ...unit,
        lessons: lessons.filter((lesson) => lesson.unit === unit.id),
      })),
    },
    toLocale(params.lang),
  )
}

export default function LandingPageView({ loaderData }: Route.ComponentProps) {
  const { t } = useTranslation()
  const localePath = useLocalePath()
  const firstLesson = loaderData.units[0].lessons[0]
  const lessonCount = loaderData.units.reduce((total, unit) => total + unit.lessons.length, 0)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:py-16">
      <section className="mb-16 text-center">
        <p lang="ja" className="mb-4 text-5xl text-red-800 sm:text-6xl">
          にほんご
        </p>
        <h1 className="mb-4 text-4xl font-extrabold text-stone-900 sm:text-5xl">
          {t("utils.home.title")}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-stone-700">
          {t("utils.home.subtitle")}
        </p>
        <Link
          to={localePath(lessonPath(firstLesson.slug))}
          className="inline-block rounded-xl bg-red-800 px-8 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-red-900"
        >
          {t("utils.home.start")} →
        </Link>
      </section>

      <section aria-labelledby="curriculum">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 id="curriculum" className="text-2xl font-bold text-stone-900">
            {t("utils.home.curriculum")}
          </h2>
          <p className="text-sm text-stone-500">
            {t("utils.home.lesson_count", { count: lessonCount })}
          </p>
        </div>

        <div className="space-y-10">
          {loaderData.units.map((unit, unitIndex) => (
            <section key={unit.id} aria-labelledby={`unit-${unit.id}`}>
              <h3 id={`unit-${unit.id}`} className="text-xl font-bold text-stone-900">
                <span className="text-red-800">{unitIndex + 1}.</span> {unit.title}
              </h3>
              <p className="mb-4 text-stone-600">{unit.description}</p>
              <ol className="grid gap-3 sm:grid-cols-2">
                {unit.lessons.map((lesson) => (
                  <li key={lesson.slug}>
                    <Link
                      to={localePath(lessonPath(lesson.slug))}
                      className="flex h-full gap-4 rounded-xl border border-stone-200 bg-white p-4 transition-colors hover:border-red-800"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 font-bold text-red-800">
                        {lesson.number}
                      </span>
                      <span>
                        <span className="block font-semibold text-stone-900">{lesson.title}</span>
                        <span className="mt-1 line-clamp-2 block text-sm text-stone-600">
                          {lesson.description}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </section>
    </div>
  )
}

export const meta: Route.MetaFunction = ({ params, loaderData }) => {
  const locale = toLocale(params.lang)
  const { t } = getI18n(locale)
  const homeUrl = absoluteUrl(localizedPath(locale, UtilsPagePath.LANDING_PAGE))
  const lessons = loaderData?.units.flatMap((unit) => unit.lessons) ?? []

  return seo({
    lang: params.lang,
    path: UtilsPagePath.LANDING_PAGE,
    title: t("utils.home.meta_title"),
    description: t("utils.home.meta_description"),
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebSite", name: SITE_NAME, url: homeUrl, inLanguage: locale },
        {
          "@type": "Course",
          name: t("utils.home.meta_title"),
          description: t("utils.home.meta_description"),
          url: homeUrl,
          inLanguage: locale,
          educationalLevel: "Beginner",
          isAccessibleForFree: true,
          provider: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
          hasPart: lessons.map((lesson) => ({
            "@type": "LearningResource",
            name: lesson.title,
            url: absoluteUrl(localizedPath(locale, lessonPath(lesson.slug))),
          })),
        },
      ],
    },
  })
}
