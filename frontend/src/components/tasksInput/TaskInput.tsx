import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { createTask, setAddTask } from '../../redux/task/taskSlice'

const TaskInput: React.FC = () => {
   const { title, completed } = useAppSelector((state) => state.tasks)
   const dispatch = useAppDispatch()

   const addHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(createTask({ title, completed }))

      dispatch(setAddTask(''))
   }
   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setAddTask(e.target.value))
   }
   return (
      <section className="taskinput__container">
         <h1>Task Management</h1>
         <form onSubmit={addHandler}>
            <input
               type="text"
               className="taskinput__field-title"
               name="title"
               value={title}
               placeholder="Add a Task..."
               onChange={onChangeHandler}
            />
            <button type="submit" className="taskinput__submit-btn">
               Add New Task
            </button>
         </form>
      </section>
   )
}

export default TaskInput
