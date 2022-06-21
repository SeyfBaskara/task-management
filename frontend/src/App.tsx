import React from 'react'
import './App.css'
import TaskInput from './components/tasksInput/TaskInput'
import Tasks from './components/tasks/Tasks'

function App() {
   return (
      <div className="App">
         <TaskInput />
         <Tasks />
      </div>
   )
}

export default App
