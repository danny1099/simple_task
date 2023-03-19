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
      setCookie(null, 'users', JSON.stringify(action.payload), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      })
      return action.payload
    },
    logOut: () => {
      setCookie(null, 'users', null)
      return initialState
    }
  }
})

export const getUser = (state) => state.users

export const { signIn, logOut } = userSlice.actions
