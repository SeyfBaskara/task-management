import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setIsCompleted } from '../../redux/task/taskSlice'

const TasksFilter: React.FC = () => {
   const { isCompleted } = useAppSelector((state) => state.tasks)
   const dispatch = useAppDispatch()

   const onChangeHideHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setIsCompleted(e.target.checked))
   }
   return (
      <div className="tasksFilter">
         <label className="tasksFilter__completed-hide">
            Show Completed
            <input type="checkbox" name="hide" checked={isCompleted} onChange={onChangeHideHandle} />
         </label>
      </div>
   )
}

export default TasksFilter
