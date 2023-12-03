import { FC } from "react"
import ITask from "../../types/task"
import { useForm } from "react-hook-form"

interface Props {
  task: ITask
  updateTask: (newTaskData?: Omit<ITask, "id">) => void
  toggleEditing: () => void
  deleteTask: () => void
}

interface Inputs {
  content: string
  author: string
  completed: boolean
}

const EditTaskForm: FC<Props> = ({
  task,
  updateTask,
  toggleEditing,
  deleteTask,
}) => {
  const { handleSubmit, register } = useForm<Inputs>()
  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit(updateTask)}>
      <div className="relative my-2">
        <input
          defaultValue={task.content}
          id={`${task.id}-content`}
          placeholder=" "
          {...register("content", { required: true })}
          className="input input-small"
        />
        <label htmlFor={`${task.id}-content`} className="label label-small">
          Content
        </label>
      </div>
      <div className="relative my-2">
        <input
          defaultValue={task.author}
          id={`${task.id}-author`}
          placeholder=" "
          {...register("author", { required: true })}
          className="input input-small"
        />
        <label htmlFor={`${task.id}-author`} className="label label-small">
          Author
        </label>
      </div>
      <section className="flex justify-between">
        <button
          type="submit"
          className="text-white rounded-sm bg-primary border-2 border-primary text-center w-1/4"
        >
          Save
        </button>
        <button
          type="button"
          onClick={toggleEditing}
          className="text-white rounded-sm text-center border-2 border-white w-1/4"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={deleteTask}
          className="text-red-700 rounded-sm text-center border-2 border-red-700 w-1/4"
        >
          Delete
        </button>
      </section>
    </form>
  )
}

export default EditTaskForm
