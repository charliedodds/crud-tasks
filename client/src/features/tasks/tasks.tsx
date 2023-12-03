import { FC } from "react"
import Spinner from "../loading/spinner"
import Task from "./task"
import { useGetTasksQuery } from "./tasksAPI"

const Tasks = () => {
  const { data, error: errorFetching, isLoading } = useGetTasksQuery()
  const error = data?.error
  const message = data?.message

  if (error || errorFetching) {
    return <p>Something went wrong{message ? `: ${message}` : "."}</p>
  }
  return (
    <>
      <h2 className="text-2xl text-center col-span-full">Tasks</h2>
      {isLoading ? (
        <Spinner large />
      ) : (
        data?.data?.map((task) => (
          <Task className="col-span-1" key={task.id} task={task} />
        ))
      )}
    </>
  )
}

export default Tasks
