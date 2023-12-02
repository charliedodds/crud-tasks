// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import Task from "../../types/task"

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "/tasks",
    }),
    getTaskById: builder.query<Task, Pick<Task, "id">>({
      query: (id) => `/tasks/${id}`,
    }),
    updateTask: builder.mutation<Task, Partial<Task> & Pick<Task, "id">>({
      query: ({ id, ...task }) => ({
        url: `/tasks${id}`,
        method: "PATCH",
        body: task,
      }),
    }),
    deleteTask: builder.mutation<Task, Task["id"]>({
      query: (id) => ({
        url: `/tasks${id}`,
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
