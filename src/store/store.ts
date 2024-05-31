import { configureStore } from '@reduxjs/toolkit'
import themeReducerSlice from './slices/themeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: { theme: themeReducerSlice }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
