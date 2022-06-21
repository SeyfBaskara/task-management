import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './task/taskSlice'

const store = configureStore({
   reducer: {
      tasks: taskSlice,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
