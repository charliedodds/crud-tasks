// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import ITask from "../../types/task"
import AsyncResponse from "../../types/async-response"

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query<AsyncResponse<ITask[]>, void>({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),
    getTaskById: builder.query<AsyncResponse<ITask>, Pick<ITask, "id">>({
      query: (id) => `/tasks/${id}`,
    }),
    createTask: builder.mutation<AsyncResponse<ITask>, Omit<ITask, "id">>({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["Tasks"],
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
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation<AsyncResponse<ITask>, ITask["id"]>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
})

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi
