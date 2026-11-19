import { type RouteConfigEntry, route } from "@react-router/dev/routes"

import { LessonsPagePath } from "../models"

// Route module paths are relative to `src/` (appDirectory in react-router.config.ts)
const lessonsRoutes: RouteConfigEntry[] = [
  route(LessonsPagePath.LESSON, "features/lessons/views/LessonView.tsx"),
]

export default lessonsRoutes
