import React from 'react'
import { ISubTask } from '../../types'
import { useAppDispatch } from '../../redux/hooks'
import { updateSubTask, deleteSubTask } from '../../redux/task/subTaskSlice'

interface IProps {
   subTaskItem: ISubTask
}

const SubTaskItem = ({ subTaskItem }: IProps): JSX.Element => {
   const dispatch = useAppDispatch()

   const subTaskItemCheckboxHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const updatedSubtask = {
         completed: e.target.checked,
         _id: subTaskItem._id,
      }
      dispatch(updateSubTask(updatedSubtask))
   }

   const handleDelete = (id: string) => {
      dispatch(deleteSubTask(id))
   }

   return (
      <>
         <div className="subtaskitem">
            <p>&#45; {subTaskItem.description}</p>
            <p>Cost: {subTaskItem.price}</p>
         </div>
         <div className="subtaskitem-handler">
            <input type="checkbox" checked={subTaskItem.completed} onChange={subTaskItemCheckboxHandle} />
            <button onClick={() => handleDelete(subTaskItem._id!)}>Delete</button>
            {/* <button onClick={() => handleEdit(task._id!)}>{!isEdit ? 'Edit' : 'Add'}</button> */}
         </div>
      </>
   )
}

export default SubTaskItem
