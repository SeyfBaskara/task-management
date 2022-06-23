import React, { useEffect } from 'react'
import Task from './Task'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchTasks } from '../../redux/task/taskSlice'

const Tasks: React.FC = () => {
   const dispatch = useAppDispatch()
   const { tasks, isLoading, isCompleted } = useAppSelector((state) => state.tasks)
   const isEmpty = tasks.every((task) => task.completed !== isCompleted)

   useEffect(() => {
      dispatch(fetchTasks())
   }, [dispatch])

   return (
      <section className="tasks__container">
         {isLoading ? (
            <h3>Loading...</h3>
         ) : (
            <ul className="tasks">
               {!isCompleted
                  ? tasks.map((task) => (
                       <li key={task._id} className="tasks__task">
                          <Task task={task} />
                       </li>
                    ))
                  : tasks.map((task) => {
                       return (
                          task.completed === isCompleted && (
                             <li key={task._id} className="tasks__task">
                                <Task task={task} />
                             </li>
                          )
                       )
                    })}
               {isEmpty && <h3>You have not completed any tasks yet!</h3>}
            </ul>
         )}
      </section>
   )
}

export default Tasks
