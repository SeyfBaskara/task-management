import axios from 'axios'
import { ITasks, IUpdate } from '../types'

const url = 'http://localhost:5000/api/tasks'

export const fetchTasks = () => axios.get(url)
export const createTask = (newTask: ITasks) => axios.post(`${url}/create`, newTask)
export const deleteTask = (id: string) => axios.delete(`${url}/${id}`)
export const updateTask = (id: string, updatedTask: IUpdate) => axios.patch(`${url}/${id}`, updatedTask)
