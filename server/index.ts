import express from 'express'
import dotenv from 'dotenv'
import taskRouter from './controllers/tasks'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/tasks', taskRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})
