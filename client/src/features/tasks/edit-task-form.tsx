import { FC } from "react"
import ITask from "../../types/task"
import { useForm } from "react-hook-form"

interface Props {
  task: ITask
  updateTask: (newTaskData?: Omit<ITask, "id">) => void
  toggleEditing: () => void
}

interface Inputs {
  content: string
  author: string
  completed: boolean
}

const EditTaskForm: FC<Props> = ({ task, updateTask, toggleEditing }) => {
  const { formState, watch, handleSubmit, register } = useForm<Inputs>()
  return (
    <form onSubmit={handleSubmit(updateTask)}>
      <input
        defaultValue={task.content}
        {...register("content", { required: true })}
      />
      <input
        defaultValue={task.author}
        {...register("author", { required: true })}
      />
      <input
        type="checkbox"
        defaultChecked={task.completed}
        {...register("completed")}
      />
      <button type="submit">Edit</button>
      <button type="button" onClick={toggleEditing}>
        Cancel
      </button>
    </form>
  )
}

export default EditTaskForm
