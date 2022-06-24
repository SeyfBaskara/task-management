import { Request, Response } from 'express'
import SubTask from '../models/SubTask'
import Task from '../models/Task'

export const createSubTask = async (req: Request, res: Response) => {
   const { description, completed, price } = req.body

   const newSubTask = new SubTask({ description, completed, price, taskID: req.params.id })

   try {
      await Task.findByIdAndUpdate(req.params.id, { $push: { subTask: newSubTask } }, { new: true, runValidators: true })
      await newSubTask.save()

      res.status(201).json(newSubTask)
   } catch (error) {
      res.status(409).json({ message: error.message })
   }
}

export const getSubTasks = async (_req: Request, res: Response) => {
   try {
      const subtasks = await SubTask.find()

      res.status(200).json(subtasks)
   } catch (error) {
      res.status(404).json({ message: error.message })
   }
}

export const updateSubTask = async (req: Request, res: Response) => {
   const updates = Object.keys(req.body)
   const allowUpdates = ['description', 'completed', 'price']
   const isValidoperation = updates.every((update) => allowUpdates.includes(update))

   if (!isValidoperation) {
      res.status(400).json({ error: 'Invalid updates!' })
   } else {
      try {
         const subtask = await SubTask.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

         if (!subtask) {
            res.status(404).json()
         } else {
            res.status(201).json(subtask)
         }
      } catch (error) {
         res.status(400).json({ message: error.message })
      }
   }
}

export const deleteSubTask = async (req: Request, res: Response) => {
   try {
      const subtask = await SubTask.findByIdAndDelete(req.params.id)

      if (!subtask) {
         res.status(404).json()
      } else {
         res.json(subtask)
      }
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}
