import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import * as API from '../../api/index'
import { ISubTask, ISubUpdate } from '../../types'

interface ITasksSliceState {
   subTasks: ISubTask[]
   isSubTaskLoading: boolean
   error: boolean
}

const initialState: ITasksSliceState = {
   subTasks: [],
   isSubTaskLoading: false,
   error: false,
}

export const fetchSubTasks = createAsyncThunk('fetchSubTasks', async (id, thunkAPI) => {
   const { data } = await API.fetchSubTasks()
   return data
})

export const createSubTask = createAsyncThunk('createSubTask', async (newSubTask: ISubTask, thunkAPI) => {
   const { data } = await API.createSubTask(newSubTask._id!, newSubTask)
   return data
})

export const updateSubTask = createAsyncThunk('updateSubTask', async (updatedSubtask: ISubUpdate, thunkAPI) => {
   const newUpdatedSubTask = {
      description: updatedSubtask.description,
      price: updatedSubtask.price,
      completed: updatedSubtask.completed,
   }
   const { data } = await API.updateSubTask(updatedSubtask._id!, newUpdatedSubTask)
   return data
})
export const deleteSubTask = createAsyncThunk('deleteSubTask', async (id: string, thunkAPI) => {
   const { data } = await API.deleteSubTask(id)
   return data
})

export const subTaskSlice = createSlice({
   name: 'subTasks',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchSubTasks.pending, (state) => {
         state.isSubTaskLoading = true
      })
      builder.addCase(fetchSubTasks.fulfilled, (state, action: PayloadAction<ISubTask[]>) => {
         state.isSubTaskLoading = false
         state.subTasks = action.payload
      })
      builder.addCase(fetchSubTasks.rejected, (state) => {
         state.isSubTaskLoading = true
         state.subTasks = []
      })
      builder.addCase(createSubTask.fulfilled, (state, action: PayloadAction<ISubTask>) => {
         state.error = false
         state.subTasks = [...state.subTasks, action.payload]
      })
      builder.addCase(createSubTask.rejected, (state) => {
         state.error = true
      })
      builder.addCase(updateSubTask.fulfilled, (state, action: PayloadAction<ISubTask>) => {
         state.error = false
         state.subTasks = state.subTasks.map((task) =>
            task._id === action.payload._id
               ? {
                    ...task,
                    completed: action.payload.completed,
                    description: action.payload.description,
                    price: action.payload.price,
                 }
               : task
         )
      })
      builder.addCase(updateSubTask.rejected, (state) => {
         state.error = true
      })
      builder.addCase(deleteSubTask.fulfilled, (state, action: PayloadAction<ISubTask>) => {
         state.error = false
         state.subTasks = state.subTasks.filter((task) => task._id !== action.payload._id)
      })
      builder.addCase(deleteSubTask.rejected, (state) => {
         state.error = true
      })
   },
})

// export const { } = taskSlice.actions

export default subTaskSlice.reducer
