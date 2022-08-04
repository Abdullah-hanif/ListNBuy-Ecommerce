import { DEFAULT_API_CONFIG } from "./api-config"
import axios from "axios"
import useStore from "../../models/store"

/**
 * Manages all requests to the API.
 */
export const API = axios.create({
  baseURL: DEFAULT_API_CONFIG.url,
})

export const Headers = (token) => {
  if (token) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      token,
    }
  }
  return {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
  }
}

API.defaults.headers.post["Content-Type"] = "multipart/form-data"
API.defaults.headers.get["Content-Type"] = "multipart/form-data"
API.defaults.headers["X-AppApiToken"] = "YUhRcWtxY25aMTM5VWwyT1JZdnU0dWZLVUxOMDFFYWQ="

API.interceptors.request.use(
  (req) => {
    const token = useStore.getState().token
    req.headers.Authorization = `Bearer ${token}`
    return req
  },
  (error) => Promise.reject(error),
)
