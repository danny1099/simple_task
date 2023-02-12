import { createSlice } from '@reduxjs/toolkit'
import { parseCookies, setCookie } from 'nookies'

const initialState = {}

const getDatafromCookie = () => {
  const { users } = parseCookies()
  return JSON.parse(users)
}

export const userSlice = createSlice({
  name: 'users',
  initialState: parseCookies()?.users ? getDatafromCookie() : initialState,
  reducers: {
    signIn: (state, action) => {
      setCookie(null, 'users', JSON.stringify(action.payload), { path: '/' })
      return action.payload
    },
    logOut: () => {
      setCookie(null, 'users', null)
      return initialState
    }
  }
})

export const { signIn, logOut } = userSlice.actions
