import express, { Express } from 'express'
import connectDB from '../database/db'
import taskRouter from '../routers/taskRouter'

connectDB()
const app: Express = express()
app.use(express.json())

app.use('/api/tasks', taskRouter)

export default app
