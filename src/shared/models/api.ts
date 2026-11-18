import type { AxiosRequestConfig } from "axios"

/**
 * Custom Axios config that supports `meta.requiresAuth` flag.
 */
export interface CustomAxiosRequestConfig<D = unknown> extends AxiosRequestConfig<D> {
  meta?: {
    requiresAuth?: boolean
  }
}

/**
 * Normalized error shape rejected by the axios response interceptor.
 */
export type ApiError = {
  message: string
  status?: number
  data?: unknown
}

export type ApiResponse<ResponseData = null> = {
  status: boolean
  message: string
  data: ResponseData | null
}

export type PaginationRequest = {
  page: number
  limit: number
  search?: string
}

export type PaginationResponse = {
  page: number
  limit: number
  total: number
  total_page: number
}
