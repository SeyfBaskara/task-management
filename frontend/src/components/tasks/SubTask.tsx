import React, { useState } from 'react'
import { ISubTask } from '../../types'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { createSubTask } from '../../redux/task/subTaskSlice'
import SubTaskItem from './SubTaskItem'

interface IProps {
   id: string | undefined //NOTE undefined need be removed
}

const SubTask = ({ id }: IProps): JSX.Element => {
   const [subTaskInput, setSubTaskInput] = useState<ISubTask>({ description: '', completed: false, price: 0 })
   const dispatch = useAppDispatch()
   const { subTasks } = useAppSelector((state) => state.subTasks)

   const addSubTaskHandle = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(
         createSubTask({
            description: subTaskInput.description,
            price: subTaskInput.price,
            completed: subTaskInput.completed,
            _id: id,
         })
      )
      setSubTaskInput({ ...subTaskInput, description: '', price: 0 })
   }

   const onChangeSubTaskHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setSubTaskInput({ ...subTaskInput, [name]: value })
   }
   return (
      <div className="subtask">
         <form className="subtask__add-form" onSubmit={addSubTaskHandle}>
            <div className="subtask__form-inputs">
               <label className="subtask-label-desc">
                  Description
                  <input
                     type="text"
                     name="description"
                     value={subTaskInput.description}
                     placeholder="Add a SubTask"
                     onChange={onChangeSubTaskHandle}
                     className="subtask-input"
                  />
               </label>
               <label className="subtask-label-price">
                  Price
                  <input
                     type="number"
                     name="price"
                     value={subTaskInput.price}
                     onChange={onChangeSubTaskHandle}
                     className="subtask-input"
                  />
               </label>
            </div>
            <button type="submit" className="subtask__submit-btn">
               Add New SubTask
            </button>
         </form>
         <section>
            <ul className="subtask__content">
               {subTasks.map((item) => {
                  return (
                     item.taskID === id && (
                        <li key={item._id} className="subtask__content-details">
                           <SubTaskItem subTaskItem={item} />
                        </li>
                     )
                  )
               })}
            </ul>
         </section>
      </div>
   )
}

export default SubTask
