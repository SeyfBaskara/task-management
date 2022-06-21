import React, { useEffect } from 'react'
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
      <article className="tasks">
         {isLoading ? <h3>Loading...</h3> : tasks.map((task) => <Task key={task.id} task={task} />)}
      </article>
   )
}

export default Tasks
