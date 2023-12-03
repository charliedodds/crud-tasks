import { useForm } from "react-hook-form"
import { useCreateTaskMutation } from "./tasksAPI"
import { useEffect } from "react"

interface Inputs {
  content: string
  author: string
  completed: boolean
}

const CreateTaskForm = () => {
  const { formState, handleSubmit, register, reset } = useForm<Inputs>()
  const [createTask, result] = useCreateTaskMutation()

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return (
    <form
      onSubmit={handleSubmit(createTask)}
      className="bg-dark text-white px-4 py-8 rounded-md"
    >
      <h2 className="text-2xl text-center">Create a Task</h2>
      <div className="relative my-2">
        <input
          id="content"
          placeholder=" "
          {...register("content", { required: true })}
          className="input"
        />
        <label htmlFor="content" className="label">
          Content
        </label>
      </div>
      <p className="h-8 text-red-700">
        {formState.errors.content && "Content required"}
      </p>
      <div className="relative my-2">
        <input
          id="author"
          placeholder=" "
          {...register("author", { required: true })}
          className="input"
        />
        <label htmlFor="author" className="label">
          Author
        </label>
      </div>
      <p className="h-8 text-red-700">
        {formState.errors.author && "Author required"}
      </p>
      <button className="text-white rounded-sm bg-primary px-4 py-2 w-full">
        Create
      </button>
      <p className="h-8 text-primary mt-2">
        {result.isSuccess && "Task succesfully created!"}
      </p>
    </form>
  )
}

export default CreateTaskForm
