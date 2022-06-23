import express from 'express'
import { createSubTask, getSubTasks, updateSubTask, deleteSubTask } from '../controllers/subtask'
const router = express.Router()

router.post('/:id/create', createSubTask)
router.get('/', getSubTasks)
router.patch('/:id', updateSubTask)
router.delete('/:id', deleteSubTask)

export default router
