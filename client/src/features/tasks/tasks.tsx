import Task from "./task"
import { useGetTasksQuery } from "./tasksAPI"

const Tasks = () => {
  const { data, error: errorFetching, isLoading } = useGetTasksQuery()

  console.log(data, errorFetching, isLoading)
  const error = data?.error
  const message = data?.message

  if (isLoading) return <p>Loading...</p>

  if (error || errorFetching) {
    return <p>Something went wrong{message ? `: ${message}` : "."}</p>
  }

  return (
    <section>
      <h1>Tasks</h1>
      <section>
        {data?.data?.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </section>
    </section>
  )
}

export default Tasks
