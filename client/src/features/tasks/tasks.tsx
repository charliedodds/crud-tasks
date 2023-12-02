import { useGetTasksQuery } from "./tasksAPI"

const Tasks = () => {
  const { data, error, isLoading } = useGetTasksQuery()

  console.log(data, error, isLoading)

  return <h1>Tasks</h1>
}

export default Tasks
