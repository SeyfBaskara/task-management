import React, { useState } from 'react'
import './Tasks.css'
import { ITasks } from '../../types'
import { useAppDispatch } from '../../redux/hooks'
import { updateTask, deleteTask } from '../../redux/task/taskSlice'

interface IProps {
   task: ITasks
}

const Task = ({ task }: IProps): JSX.Element => {
   const [isEdit, setIsEdit] = useState(false)
   const [title, setTitle] = useState(task.title)
   const dispatch = useAppDispatch()

   const onChangeCheckboxHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const updatedTask = {
         completed: e.target.checked,
         _id: task._id,
      }
      dispatch(updateTask(updatedTask))
   }

   const handleDelete = (id: string) => {
      dispatch(deleteTask(id))
   }

   const onChangeEditHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
   }
   const handleEdit = (id: string) => {
      setIsEdit(!isEdit)
      const updatedTask = {
         title,
         _id: id,
      }
      if (isEdit) {
         dispatch(updateTask(updatedTask))
      }
   }

   return (
      <>
         <div className="task__item">
            {isEdit ? (
               <input type="text" value={title} onChange={onChangeEditHandle} />
            ) : (
               <a
                  href={`/#${task._id}`}
                  className="task__item-title"
                  style={task.completed ? { color: 'green' } : { color: 'black' }}
               >
                  {task.title}
               </a>
            )}
            <div className="task__item-handler">
               <input type="checkbox" checked={task.completed} onChange={onChangeCheckboxHandle} />
               <button onClick={() => handleDelete(task._id!)}>Delete</button>
               <button onClick={() => handleEdit(task._id!)}>{!isEdit ? 'Edit' : 'Add'}</button>
            </div>
         </div>
      </>
   )
}

export default Task
