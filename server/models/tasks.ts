import { Schema, model } from 'mongoose'
import ITask from '../types/task'

const taskSchema = new Schema<ITask>({
  content: String,
  author: String,
  completed: { type: Boolean, default: false },
})

taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Task = model('tasks', taskSchema)

export default Task
