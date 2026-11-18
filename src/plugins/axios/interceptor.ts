import type { AxiosError, AxiosInstance } from "axios"

import type { ApiError, CustomAxiosRequestConfig } from "@/shared/models/api"

export function setupInterceptors(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use(
    (config) => {
      const customConfig = config as CustomAxiosRequestConfig
      const shouldAttachToken = customConfig.meta?.requiresAuth !== false

      // token from localStorage (swap to cookies if needed)
      const authToken = localStorage.getItem("authToken")

      if (shouldAttachToken && authToken) {
        config.headers.set("Authorization", `Bearer ${authToken}`)
      }

      return config
    },
    (error) => {
      console.error("Request error:", error)
      return Promise.reject(error)
    },
  )

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        // Server returned an error response (401, 500, ...)
        console.error("Response error:", {
          status: error.response.status,
          data: error.response.data,
        })
      } else if (error.request) {
        // Request was sent but no response received
        console.error("No response from server:", error.request)
      } else {
        // Error while setting up the request
        console.error("Axios config error:", error.message)
      }

      const apiError: ApiError = {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      }

      return Promise.reject(apiError)
    },
  )
}
