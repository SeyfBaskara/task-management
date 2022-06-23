import { Schema, model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

interface ISubTask {
   _id: string
   description: string
   price: number
   completed: boolean
}

const subTaskSchema = new Schema<ISubTask>({
   _id: { type: String, default: uuidv4 },
   description: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
   },
   completed: {
      type: Boolean,
   },
})

const SubTask = model<ISubTask>('SubTask', subTaskSchema)

export default SubTask
