import { createSlice } from '@reduxjs/toolkit'
import { parseCookies, setCookie } from 'nookies'

const initialState = parseCookies()?.theme || 'light'

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      setCookie(null, 'theme', action.payload, { path: '/' })
      return action.payload
    }
  }
})

export const { toggleTheme } = themeSlice.actions
