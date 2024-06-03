// slice-heading.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HeadingState {
  currentHeading: {
    header: string
    description: string
  }
}

const initialState: HeadingState = {
  currentHeading: {
    header: '',
    description: ''
  }
}

const headingSlice = createSlice({
  name: 'heading',
  initialState,
  reducers: {
    setHeadingReducer: (state, action: PayloadAction<{ header: string; description: string }>) => {
      state.currentHeading = action.payload
    }
  }
})

export const { setHeadingReducer } = headingSlice.actions
export default headingSlice.reducer
