import { FC, useState } from "react"
import ITask from "../../types/task"
import { useDeleteTaskMutation, useUpdateTaskMutation } from "./tasksAPI"
import EditTaskForm from "./edit-task-form"
import clsx from "clsx"
import Spinner from "../loading/spinner"

interface Props {
  task: ITask
  className?: string
}

const Task: FC<Props> = ({ task, className }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [updateTaskMutation, updateResult] = useUpdateTaskMutation()
  const [deleteTaskMutation, deleteResult] = useDeleteTaskMutation()

  const { content, completed, author } = task

  const updateTask = (newTaskData?: Partial<Omit<ITask, "id">>) => {
    updateTaskMutation({ id: task.id, ...newTaskData })
    setIsEditing(false)
  }

  const deleteTask = () => {
    deleteTaskMutation(task.id)
  }

  const toggleEditing = () => {
    setIsEditing((state) => !state)
  }

  const showSpinner = updateResult.isLoading || deleteResult.isLoading

  return (
    <article
      className={clsx(
        "text-white bg-dark p-4 rounded-md flex flex-col justify-center gap-4 min-h-task",
        className,
      )}
    >
      {showSpinner ? (
        <div className="h-full w-full flex justify-center items-center">
          <Spinner large />
        </div>
      ) : isEditing ? (
        <EditTaskForm
          task={{ id: task.id, content, author, completed }}
          updateTask={updateTask}
          toggleEditing={toggleEditing}
          deleteTask={deleteTask}
        />
      ) : (
        <>
          <h3 className={clsx("text-primary", completed && "line-through")}>
            {content}
          </h3>
          <p>{completed ? "Completed" : "Still to do"}</p>
          <p>{author}</p>
          <section className="flex justify-between">
            <button
              onClick={() => updateTask({ completed: !completed })}
              className="text-white rounded-sm bg-primary border-2 border-primary text-center px-2 py-0.5"
            >
              Toggle task
            </button>
            <button
              onClick={toggleEditing}
              className="text-white rounded-sm text-center border-2 border-white px-2 py-0.5"
            >
              Edit task
            </button>
          </section>
        </>
      )}
    </article>
  )
}

export default Task
