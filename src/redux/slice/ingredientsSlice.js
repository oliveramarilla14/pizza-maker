import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dough: '',
  cheese: '',
  sauce: '',
  ingredients: []
}

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    changeDough: (state, action) => {
      state.dough = action.payload
    },
    changeCheese: (state, action) => {
      state.cheese = action.payload
    },
    changeSauce: (state, action) => {
      state.sauce = action.payload
    }
  }
})

export const { changeDough, changeCheese, changeSauce } = ingredientsSlice.actions
export default ingredientsSlice.reducer
