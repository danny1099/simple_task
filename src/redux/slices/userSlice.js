import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  diplayName: '',
  email: '',
  photoUrl: '',
  uid: '',
  isLogged: false
}

const getDatafromStorage = () => {
  const dataStorage = localStorage.getItem('users')
  return JSON.parse(dataStorage)
}

export const userSlice = createSlice({
  name: 'users',
  initialState: getDatafromStorage() ? getDatafromStorage() : initialState,
  reducers: {
    signIn: (state, action) => {
      localStorage.setItem(
        'users',
        JSON.stringify({ ...action.payload, isLogged: true })
      )

      return { ...action.payload, isLogged: true }
    },
    logOut: () => {
      localStorage.removeItem('users')
      return initialState
    }
  }
})

export const getUser = (state) => state.users

export const { signIn, logOut } = userSlice.actions
