import { FC, useState } from "react"
import ITask from "../../types/task"
import { useDeleteTaskMutation, useUpdateTaskMutation } from "./tasksAPI"
import EditTaskForm from "./edit-task-form"

interface Props {
  task: ITask
}

const Task: FC<Props> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [updateTaskMutation, updateResult] = useUpdateTaskMutation()
  const [deleteTaskMutation, deleteResult] = useDeleteTaskMutation()

  const content = task.content
  const completed = task.completed
  const author = task.author

  const updateTask = (newTaskData?: Omit<ITask, "id">) => {
    updateTaskMutation({ id: task.id, completed: !completed, ...newTaskData })
    setIsEditing(false)
  }

  const deleteTask = () => {
    deleteTaskMutation(task.id)
  }

  const toggleEditing = () => {
    setIsEditing((state) => !state)
  }

  if (updateResult.isLoading || deleteResult.isLoading)
    return <p>Task loading</p>

  return (
    <article>
      <h2>Task</h2>
      <p>{content}</p>
      <p>Completed: {String(completed)}</p>
      <p>By: {author}</p>
      <div>
        <button onClick={() => updateTask()}>Toggle task</button>
        <button onClick={toggleEditing}>Edit task</button>
        <button onClick={deleteTask}>Delete task</button>
      </div>
      {isEditing && (
        <EditTaskForm
          task={{ id: task.id, content, author, completed }}
          updateTask={updateTask}
          toggleEditing={toggleEditing}
        />
      )}
    </article>
  )
}

export default Task
