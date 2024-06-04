import { configureStore } from '@reduxjs/toolkit'
import themeReducerSlice from './slices/slice-theme'
import navigationReducer from './slices/slice-navigation'

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducerSlice,
      navigation: navigationReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
