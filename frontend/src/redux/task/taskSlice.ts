import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import * as API from '../../api/index'
import { ITasks, IUpdate } from '../../types'

interface ITasksSliceState {
   tasks: ITasks[]
   title: string
   completed: boolean
   isCompleted: boolean
   isLoading: boolean
   error: boolean
}

const initialState: ITasksSliceState = {
   tasks: [],
   title: '',
   completed: false,
   isCompleted: false,
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

export const updateTask = createAsyncThunk('updateTask', async (updatedTask: IUpdate, thunkAPI) => {
   const newUpdatedTask = {
      completed: updatedTask.completed,
      title: updatedTask.title,
   }
   const { data } = await API.updateTask(updatedTask._id!, newUpdatedTask)
   return data
})
export const deleteTask = createAsyncThunk('deleteTask', async (id: string, thunkAPI) => {
   const { data } = await API.deleteTask(id)
   return data
})

export const taskSlice = createSlice({
   name: 'task',
   initialState,
   reducers: {
      setAddTask(state, action: PayloadAction<string>) {
         state.title = action.payload
      },
      setIsCompleted(state, action: PayloadAction<boolean>) {
         state.isCompleted = action.payload
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchTasks.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(fetchTasks.fulfilled, (state, action: PayloadAction<ITasks[]>) => {
         state.isLoading = false
         state.tasks = action.payload
      })
      builder.addCase(fetchTasks.rejected, (state) => {
         state.isLoading = true
         state.tasks = []
      })
      builder.addCase(createTask.fulfilled, (state, action: PayloadAction<ITasks>) => {
         state.error = false
         state.tasks = [...state.tasks, action.payload]
      })
      builder.addCase(createTask.rejected, (state) => {
         state.error = true
      })
      builder.addCase(updateTask.fulfilled, (state, action: PayloadAction<ITasks>) => {
         state.error = false
         state.tasks = state.tasks.map((task) =>
            task._id === action.payload._id
               ? {
                    ...task,
                    completed: action.payload.completed,
                    title: action.payload.title,
                 }
               : task
         )
      })
      builder.addCase(updateTask.rejected, (state) => {
         state.error = true
      })
      builder.addCase(deleteTask.fulfilled, (state, action: PayloadAction<ITasks>) => {
         state.error = false
         state.tasks = state.tasks.filter((task) => task._id !== action.payload._id)
      })
      builder.addCase(deleteTask.rejected, (state) => {
         state.error = true
      })
   },
})

export const { setAddTask, setIsCompleted } = taskSlice.actions

export default taskSlice.reducer
