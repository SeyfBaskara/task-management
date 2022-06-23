import React, { useEffect } from 'react'
import './Tasks.css'
import Task from './Task'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchTasks } from '../../redux/task/taskSlice'

const Tasks: React.FC = () => {
   const dispatch = useAppDispatch()
   const { tasks, isLoading } = useAppSelector((state) => state.tasks)

   useEffect(() => {
      dispatch(fetchTasks())
   }, [dispatch])

   return (
      <section className="tasks__container">
         {isLoading ? (
            <h3>Loading...</h3>
         ) : (
            <ul className="tasks">
               {tasks.map((task) => (
                  <li key={task._id} className="tasks__task">
                     <Task task={task} />
                  </li>
               ))}
            </ul>
         )}
      </section>
   )
}

export default Tasks
