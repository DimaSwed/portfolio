import { configureStore } from '@reduxjs/toolkit'
import themeReducerSlice from './slices/slice-theme'
import heaingReducerSlice from './slices/slice-heading'
import navigationReducer from './slices/slice-navigation'

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducerSlice,
      heading: heaingReducerSlice,
      navigation: navigationReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
