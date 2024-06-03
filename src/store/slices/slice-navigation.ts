import { createSlice } from '@reduxjs/toolkit'

interface NavigationState {
  showNav: boolean
}

const initialState: NavigationState = {
  showNav: false
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    openNavReducer(state) {
      state.showNav = true
    },
    closeNavReducer(state) {
      state.showNav = false
    }
  }
})

export const { openNavReducer, closeNavReducer } = navigationSlice.actions
export default navigationSlice.reducer
