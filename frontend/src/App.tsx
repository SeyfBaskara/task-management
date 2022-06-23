import React from 'react'
import './App.css'
import TaskInput from './components/tasksInput/TaskInput'
import Tasks from './components/tasks/Tasks'
import TasksFilter from './components/tasks/TasksFilter'

function App() {
   return (
      <div className="app">
         <TaskInput />
         <TasksFilter />
         <Tasks />
      </div>
   )
}

export default App
