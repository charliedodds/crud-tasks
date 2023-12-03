import { useForm } from "react-hook-form"
import { useCreateTaskMutation } from "./tasksAPI"

interface Inputs {
  content: string
  author: string
  completed: boolean
}

const CreateTaskForm = () => {
  const { formState, handleSubmit, register } = useForm<Inputs>()
  const [createTask, result] = useCreateTaskMutation()

  return (
    <form onSubmit={handleSubmit(createTask)}>
      <input {...register("content", { required: true })} />
      <input {...register("author", { required: true })} />
      <button>Create</button>
    </form>
  )
}

export default CreateTaskForm
