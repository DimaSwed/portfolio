import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
  currentTheme: string
}

const initialState: ThemeState = {
  currentTheme: 'darkTheme'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeReducer: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload
    }
  }
})

export const { setThemeReducer } = themeSlice.actions
export default themeSlice.reducer
