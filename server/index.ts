import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import taskRouter from './controllers/tasks'
import errorHandler from './utils/error-handler'

dotenv.config()

const DB_URI = process.env.DB_URI
const CLIENT_URL = process.env.CLIENT_URL

if (DB_URI) {
  mongoose.connect(DB_URI)
}

const app = express()

app.use(
  cors({
    origin: CLIENT_URL,
  })
)
app.use(express.json())

app.use('/tasks', taskRouter)

app.use(() => {
  throw { name: 'NotFound' }
})

app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})
