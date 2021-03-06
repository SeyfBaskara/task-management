import { Schema, model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

interface ITask {
   _id: string
   title: string
   completed: boolean
   subTask: string
}

const taskSchema = new Schema<ITask>({
   _id: { type: String, default: uuidv4 },
   title: {
      type: String,
      required: true,
   },
   completed: {
      type: Boolean,
   },
   subTask: [{ type: String, ref: 'SubTask' }],
})

const Task = model<ITask>('Task', taskSchema)

export default Task
