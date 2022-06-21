import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { createTask } from '../../redux/task/taskSlice'

interface ITasks {
   title: string
   completed: boolean
}

const TaskInput: React.FC = () => {
   const [task, setTask] = useState<ITasks>({ title: '', completed: false })
   const dispatch = useAppDispatch()

   const addHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(createTask(task))

      setTask({ ...task, title: '' })
   }
   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setTask({ ...task, [name]: value })
   }
   return (
      <section>
         <h1>Add a Task</h1>
         <form onSubmit={addHandler}>
            <input type="text" name="title" value={task.title} placeholder="Enter a Task..." onChange={onChangeHandler} />
            <button type="submit">ADD</button>
         </form>
      </section>
   )
}

export default TaskInput
