import React from 'react'
import { ITasks } from '../../types'

interface IProps {
   task: ITasks
}

const Task = ({ task }: IProps): JSX.Element => {
   return (
      <section className="task">
         <p>{task.title}</p>
      </section>
   )
}

export default Task
