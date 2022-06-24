import axios from 'axios'
import { ITasks, IUpdate, ISubTask, ISubUpdate } from '../types'

const url = 'https://salt-task-management.herokuapp.com/api/tasks'
const subTaskUrl = 'https://salt-task-management.herokuapp.com/api/subtask'

export const fetchTasks = () => axios.get(url)
export const createTask = (newTask: ITasks) => axios.post(`${url}/create`, newTask)
export const deleteTask = (id: string) => axios.delete(`${url}/${id}`)
export const updateTask = (id: string, updatedTask: IUpdate) => axios.patch(`${url}/${id}`, updatedTask)

// SUBTASK
export const fetchSubTasks = () => axios.get(subTaskUrl)
export const createSubTask = (id: string, newSubTask: ISubTask) => axios.post(`${subTaskUrl}/${id}/create`, newSubTask)
export const deleteSubTask = (id: string) => axios.delete(`${subTaskUrl}/${id}`)
export const updateSubTask = (id: string, updatedSubTask: ISubUpdate) => axios.patch(`${subTaskUrl}/${id}`, updatedSubTask)
