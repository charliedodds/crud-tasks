interface AsyncResponse<T> {
  data?: T
  error: boolean
  message?: string
}

export default AsyncResponse
