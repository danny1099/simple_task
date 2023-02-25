import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllTask } from '@/services'

const initialState = {
  tasks: [],
  status: 'idle',
  error: null
}

export const getAllTasks = createAsyncThunk('task/getAllTasks', async () => {
  try {
    const result = await getAllTask()
    return result
  } catch (error) {
    return error.message
  }
})

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    newTask: (state, action) => {
      state.tasks = state.tasks.concat(action.payload)
    },
    allTask: (state, action) => {
      state.tasks = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllTasks.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.tasks = action.payload
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  }
})

/* Fuctions to get state */
export const getTask = (state) => state.tasks.tasks

/* Export functions reducer */
export const { newTask, allTask, updateTask, erasedTask } = taskSlice.actions
