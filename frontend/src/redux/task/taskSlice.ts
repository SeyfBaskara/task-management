import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as API from '../../api/index'
import { ITasks } from '../../types'

interface ITasksSliceState {
   tasks: ITasks[]
   isLoading: Boolean
   error: Boolean
}

const initialState: ITasksSliceState = {
   tasks: [],
   isLoading: false,
   error: false,
}

export const fetchTasks = createAsyncThunk('fetchTasks', async (id, thunkAPI) => {
   const { data } = await API.fetchTasks()
   return data
})

export const createTask = createAsyncThunk('createTask', async (newTask: ITasks, thunkAPI) => {
   const { data } = await API.createTask(newTask)
   return data
})

export const taskSlice = createSlice({
   name: 'task',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchTasks.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(fetchTasks.fulfilled, (state, action) => {
         state.isLoading = false
         state.tasks = action.payload
      })
      builder.addCase(fetchTasks.rejected, (state) => {
         state.isLoading = true
         state.tasks = []
      })
      builder.addCase(createTask.fulfilled, (state, action) => {
         state.error = false
         state.tasks = action.payload
      })
      builder.addCase(createTask.rejected, (state, action) => {
         console.log(action)
         state.error = true
      })
   },
})

// export const {} = taskSlice.actions

export default taskSlice.reducer
