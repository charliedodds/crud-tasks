import express from 'express'

const taskRouter = express.Router()

taskRouter.get('/', (req, res) => {
  res.send('All tasks')
})

taskRouter.get('/:id', (req, res) => {
  const { id } = req.params
  res.send(`Get task with id: ${id}`)
})

taskRouter.post('/', (req, res) => {
  const { content, author } = req.body
  res.send(`Create ${content} task by ${author}`)
})

taskRouter.patch('/:id', (req, res) => {
  const { id } = req.params
  const { content, author } = req.body
  res.send(`Update task with id: ${id}`)
})

taskRouter.delete('/:id', (req, res) => {
  const { id } = req.params
  res.send(`Delete task with id: ${id}`)
})

export default taskRouter
