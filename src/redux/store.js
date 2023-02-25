import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './slices/themeSlice'
import { userSlice } from './slices/userSlice'
import { taskSlice } from './slices/taskSlice'

export default configureStore({
  reducer: {
    theme: themeSlice.reducer,
    users: userSlice.reducer,
    tasks: taskSlice.reducer
  }
})
