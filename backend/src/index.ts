import express, { Express } from 'express'
import connectDB from '../database/db'
import taskRouter from '../routers/taskRouter'
import subtaskRouter from '../routers/subtaskRouter'
import cors from 'cors'

connectDB()
const app: Express = express()
app.use(express.json())
app.use(cors())

app.use('/api/tasks', taskRouter)
app.use('/api/subtask', subtaskRouter)

export default app
