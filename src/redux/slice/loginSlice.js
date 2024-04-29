import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginStatus: true,
  user: {}
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loginStatus = true
      state.user = action.payload
    },
    logOut: (state) => {
      state.loginStatus = false
      state.user = {}
    }
  }
})

export const { login, logOut } = loginSlice.actions
export default loginSlice.reducer
