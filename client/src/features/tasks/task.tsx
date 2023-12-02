import { FC } from "react"
import ITask from "../../types/task"

interface Props {
  task: ITask
}

const Task: FC<Props> = ({ task }) => {
  return (
    <article>
      <h2>Task</h2>
      <p>{task.content}</p>
      <p>Completed: {String(task.completed)}</p>
      <p>By: {task.author}</p>
    </article>
  )
}

export default Task
