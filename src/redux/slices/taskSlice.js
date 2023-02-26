import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: []
}

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
  }
})

/* Fuctions to get state */
export const getTask = (state) => state.tasks.tasks

/* Export functions reducer */
export const { newTask, allTask } = taskSlice.actions
