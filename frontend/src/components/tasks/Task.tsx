import React from 'react'
import { ITasks } from '../../types'
import { useAppDispatch } from '../../redux/hooks'
import { updateTask, deleteTask } from '../../redux/task/taskSlice'

interface IProps {
   task: ITasks
}

const Task = ({ task }: IProps): JSX.Element => {
   const dispatch = useAppDispatch()

   const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const updatedTask = {
         completed: e.target.checked,
         _id: task._id,
      }
      dispatch(updateTask(updatedTask))
   }

   const handleDelete = (id: string) => {
      dispatch(deleteTask(id))
   }

   return (
      <>
         <a href={`/#${task._id}`} style={task.completed ? { color: 'green' } : { color: 'black' }}>
            {task.title}
         </a>
         <input type="checkbox" checked={task.completed} onChange={onChangeHandle} />
         <button onClick={() => handleDelete(task._id!)}>Delete</button>
      </>
   )
}

export default Task
