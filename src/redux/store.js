import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slice/loginSlice'
import ingredientsSlice from './slice/ingredientsSlice'

export const store = configureStore({
  reducer: { login: loginReducer, ingredients: ingredientsSlice }
})
