import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTheme: 'greenTheme'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeReducer: (state, action) => {
      state.currentTheme = action.payload
    }
  }
})

export const { themeReducer } = themeSlice.actions
export default themeSlice.reducer
