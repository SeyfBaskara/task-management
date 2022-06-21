import express from 'express'
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/task'

const router = express.Router()

router.post('/create', createTask)
router.get('/', getTasks)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router
