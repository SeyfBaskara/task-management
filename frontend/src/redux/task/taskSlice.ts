import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITasks {
   title: string
   completed: boolean
}

interface ITasksSliceState {
   tasks: ITasks[]
}

const initialState: ITasksSliceState = {
   tasks: [],
}

export const taskSlice = createSlice({
   name: 'task',
   initialState,
   reducers: {
      addTask: (state, action: PayloadAction<string>) => {
         state.tasks = [
            ...state.tasks,
            {
               title: action.payload,
               completed: false,
            },
         ]
      },
   },
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer
