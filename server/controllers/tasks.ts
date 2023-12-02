import express from 'express'
import Task from '../models/tasks'

const taskRouter = express.Router()

taskRouter.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.find({})
    res.send({ error: false, data: tasks })
  } catch (err) {
    next(err)
  }
})

taskRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const task = await Task.findById(id)
    if (task) {
      res.send({ error: false, data: task })
    } else {
      throw { name: 'NotFound' }
    }
  } catch (err) {
    next(err)
  }
})

taskRouter.post('/', async (req, res, next) => {
  try {
    const { content, author } = req.body
    if (!content || !author) throw { name: 'FieldsMissing' }
    const task = await Task.create({ content, author })
    res.send({ error: false, data: task })
  } catch (err) {
    next(err)
  }
})

taskRouter.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { content, author, completed } = req.body
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { content, author, completed },
      { new: true }
    )
    res.send({ error: false, data: updatedTask })
  } catch (err) {
    next(err)
  }
})

taskRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    await Task.findByIdAndDelete(id)
    res.send({ error: false, message: 'Task deleted' })
  } catch (err) {
    next(err)
  }
})

export default taskRouter
