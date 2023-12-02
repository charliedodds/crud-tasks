// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import ITask from "../../types/task"
import AsyncResponse from "../../types/async-response"

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    getTasks: builder.query<AsyncResponse<ITask[]>, void>({
      query: () => "/tasks",
    }),
    getTaskById: builder.query<AsyncResponse<ITask>, Pick<ITask, "id">>({
      query: (id) => `/tasks/${id}`,
    }),
    updateTask: builder.mutation<
      AsyncResponse<ITask>,
      Partial<ITask> & Pick<ITask, "id">
    >({
      query: ({ id, ...task }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: task,
      }),
    }),
    deleteTask: builder.mutation<AsyncResponse<ITask>, ITask["id"]>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi
