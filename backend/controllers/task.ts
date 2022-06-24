import { Request, Response } from 'express'
import Task from '../models/Task'
import SubTask from '../models/SubTask'

export const createTask = async (req: Request, res: Response) => {
   const { title, completed } = req.body

   const newTask = new Task({ title, completed })

   try {
      await newTask.save()
      res.status(201).json(newTask)
   } catch (error) {
      res.status(409).json({ message: error.message })
   }
}

export const getTasks = async (_req: Request, res: Response) => {
   try {
      const tasks = await Task.find({}).populate({ path: 'subTask' })

      res.status(200).json(tasks)
   } catch (error) {
      res.status(404).json({ message: error.message })
   }
}

export const updateTask = async (req: Request, res: Response) => {
   const updates = Object.keys(req.body)
   const allowUpdates = ['title', 'completed']
   const isValidoperation = updates.every((update) => allowUpdates.includes(update))

   if (!isValidoperation) {
      res.status(400).json({ error: 'Invalid updates!' })
   } else {
      try {
         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

         if (!task) {
            res.status(404).json()
         } else {
            res.status(201).json(task)
         }
      } catch (error) {
         res.status(400).json({ message: error.message })
      }
   }
}

export const deleteTask = async (req: Request, res: Response) => {
   try {
      const task = await Task.findByIdAndDelete(req.params.id)
      await SubTask.deleteMany({ taskID: req.params.id })

      if (!task) {
         res.status(404).json()
      } else {
         res.json(task)
      }
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}
