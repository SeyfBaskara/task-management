import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './task/taskSlice'

const store = configureStore({
   reducer: {
      tasks: taskSlice,
   },
})

type RootState = ReturnType<typeof store.getState>
export const selectTasks = (state: RootState) => state.tasks.tasks

export default store
