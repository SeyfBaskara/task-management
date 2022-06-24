import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './task/taskSlice'
import subTaskSlice from './task/subTaskSlice'

const store = configureStore({
   reducer: {
      tasks: taskSlice,
      subTasks: subTaskSlice,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
